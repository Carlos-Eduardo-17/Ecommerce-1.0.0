/* Definición de roles del sistema para controlar autorización
- Se cargan una sola vez por seed
- Luego se referenciarán solo por _id
*/
import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      uppercase: true, // Mayúsculas automáticas
      trim: true,
      enum: ["USER", "ADMIN"], // Solo estos dos valores permitidos
    }
  },
  {
    timestamps: true,
    versionKey: false, // Eliminar el __v (inncesario aquí)
  }
);

export const Role = mongoose.model("Role", roleSchema);
