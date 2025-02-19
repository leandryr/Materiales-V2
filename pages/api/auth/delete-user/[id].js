import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    try {
      await connectDB();
      await User.findByIdAndDelete(id);
      res.status(200).json({ message: "Usuario eliminado" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el usuario", error });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
