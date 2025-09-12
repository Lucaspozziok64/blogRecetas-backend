import jwt from "jsonwebtoken";

const generarJWT = async (nombreUsuario, email) => {
  try {
    // generar payload
    const payload = { nombreUsuario, email };

    //firmar el token
    const token = await jwt.sign(payload, process.env.SECRET_JWT, {
      expiresIn: "3h",
    });

    return token;
  } catch (error) {
    console.error(error);
    throw new Error("No se pudo generar el token");
  }
};

export default generarJWT;
