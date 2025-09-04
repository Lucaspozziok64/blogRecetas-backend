import Usuario from "../models/usuario.js";

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
    const nuevoUsuario = new Usuario(req.body)
    await nuevoUsuario.save()

    res.status(201).json({ mensaje: 'Usuario creado exitosamente' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensaje: 'Error al crear el usuario' })
  }
}