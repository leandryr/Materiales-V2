import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tipo: { type: String, required: true, default: "Capturador" }, // Administrador, Programador, Capturador
  permisos: {
    type: Map,
    of: Boolean,
    default: {
      verUsuarios: false,
      crearUsuarios: false,
      editarUsuarios: false,
      eliminarUsuarios: false,
      // Puedes añadir más permisos según sea necesario
    },
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
