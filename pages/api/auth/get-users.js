import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req, res) {
  try {
    await connectDB();
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error });
  }
}
