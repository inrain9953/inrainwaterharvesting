import mongoose from "mongoose";
import { Product } from "./dbschema";

export default async function signup(req, res) {
  try {
    if (req.method === "POST") {
      const { name, phone, email, message } = req.body;

      await mongoose.connect(process.env.url);
      let product = new Product({
        name: name,
        email: email,
        mobile: phone,
        message: message,
      });
      const result = await product.save();
      return result
        ? res.status(200).json({ message: "Form submitted successfully!" })
        : res.status(500).json({ error: "Failed to submit form." });
    } else {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
