import connectDB from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    await connectDB();
    res.status(200).json({ message: "Conexión exitosa a MongoDB" });
  } catch (error) {
    res.status(500).json({ message: "Error conectando a MongoDB", error });
  }
}
