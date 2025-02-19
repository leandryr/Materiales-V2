import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  try {
    await connectDB();

    const { name, email, password, tipo } = req.body;

    if (!name || !email || !password || !tipo) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "El usuario ya está registrado" });
    }

    // Encriptar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Asignar permisos activos por defecto
    let permisos = {
      verUsuarios: true,
      crearUsuarios: true,
      editarUsuarios: true,
      eliminarUsuarios: true,
    };

    // Asignar permisos dependiendo del tipo
    if (tipo === "Programador") {
      permisos = { verUsuarios: true, crearUsuarios: true, editarUsuarios: true, eliminarUsuarios: true };
    } else if (tipo === "Capturador") {
      permisos = { verUsuarios: false, crearUsuarios: false, editarUsuarios: true, eliminarUsuarios: true };
    }

    // Crear usuario en MongoDB
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      tipo,
      permisos, // Asignamos permisos activos
    });

    await newUser.save();

    res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    console.error("Error en el servidor:", error);
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};

export default handler;
