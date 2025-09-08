import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema(
  {
    nombreReceta: {
      type: String,
      unique: true,
      required: true,
      minLenght: 4,
      maxLenght: 100,
      trim: true,
    },
    imagen: {
      type: String,
      required: true,
      validate: {
        validator: (valor) => {
          return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(
            valor
          );
        },
      },
    },
    categoria: {
      type: String,
      required: true,
      enum: ["Dulce", "Comida", "Pasteles", "Salado"],
    },
    descripcion: {
      type: String,
      required: true,
      minLenght: 10,
      maxLenght: 300,
    },
    pasos: {
      type: String,
      required: true,
      minLenght: 10,
      maxLenght: 500,
      trim: true,
    },
  },
  {
    timestamps: true, // agrega createdAt y updatedAt automáticamente
  }
);

const Receta = mongoose.model("receta", recetaSchema);

export default Receta;
