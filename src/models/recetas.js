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
    primerPaso: {
      type: String,
      required: true,
      minLenght: 8,
      maxLenght: 30,
      trim: true,
    },
    segundoPaso: {
      type: String,
      minLenght: 8,
      maxLenght: 30,
      trim: true,
    },
  },
  {
    timestamps: true, // agrega createdAt y updatedAt automáticamente
  }
);

const Receta = mongoose.model("receta", recetaSchema);

export default Receta;