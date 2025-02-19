import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PATCH") {
    try {
      await connectDB();
      const user = await User.findById(id);

      // Si se desactiva, cambiar todos los permisos a false
      if (req.body.permisos === false) {
        user.permisos = {
          verUsuarios: false,
          crearUsuarios: false,
          editarUsuarios: false,
          eliminarUsuarios: false,
        };
      } else {
        // Si se activa, restaurar permisos dependiendo del tipo
        if (user.tipo === "Administrador") {
          user.permisos = {
            verUsuarios: true,
            crearUsuarios: true,
            editarUsuarios: true,
            eliminarUsuarios: true,
          };
        } else if (user.tipo === "Programador") {
          user.permisos = {
            verUsuarios: true,
            crearUsuarios: true,
            editarUsuarios: true,
            eliminarUsuarios: true,
          };
        } else if (user.tipo === "Capturador") {
          user.permisos = {
            verUsuarios: false,
            crearUsuarios: false,
            editarUsuarios: true,
            eliminarUsuarios: true,
          };
        }
      }

      await user.save();
      res.status(200).json({ message: "Permisos actualizados con éxito" });
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar permisos", error });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
