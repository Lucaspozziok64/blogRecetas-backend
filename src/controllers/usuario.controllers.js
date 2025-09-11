import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";

export const leerUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await Usuario.find()
    res.status(200).json(listaUsuarios)
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensaje: 'Error al leer los usuarios' })
  }
}

export const crearUsuario = async (req, res) => {
  try {
    const {nombreUsuario, email, password} = req.body; 
    //Hashear el password
    const saltos = bcrypt.genSaltSync(10);
    console.log(saltos)
    const passwordHash = bcrypt.hashSync(password, saltos)
    console.log(passwordHash)
    const nuevoUsuario = new Usuario({ nombreUsuario, email, password: passwordHash })
    await nuevoUsuario.save()

    res.status(201).json({ mensaje: `El usuario: ${nuevoUsuario.nombreUsuario} creado exitosamente` })
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensaje: 'Error al crear el usuario' })
  }
}

export const login = async (req, res) => {
  try {
    // Aqui debo verificar si el email existe en la bd, sino msj error
    const { email, password } = req.body;
    const usuarioExistente = await Usuario.findOne({ email });
    if(!usuarioExistente) {
      return res.status(400).json({ mensaje: 'No se encontro el usuario' });
    }

    // Tambien debo verificar el password con bcrypt, si no es la misma msj error
    const passwordVerificado = bcrypt.compareSync(password, usuarioExistente.password);
    if(!passwordVerificado) {
      return res.status(400).json({ mensaje: 'Credenciales incorrectas' });
    }

    //Aqui debo generar token 

    // Aqui debo enviar una respuesta al front si es login es exitoso
    res.status(200).json({ mensaje: 'Login exitoso', nombreUsuario: usuarioExistente.nombreUsuario })
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al loguear usuario' })
  }
}