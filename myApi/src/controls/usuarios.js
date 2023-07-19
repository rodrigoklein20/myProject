import Usuario from "../models/usuario.js";

class UsuarioControl{

    static listarUsuarios = (req, res) => {
        const usuario = new Usuario()
        usuario.listarUsuarios()
            .then(result => {
                console.log(result)
                res.status(200).json(result)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }

    static listarUsuariosPorId = (req, res) => {
        const id = req.params.id

        const usuario = new Usuario()
        usuario.listarUsuarioPorId(id)
            .then(result => {
                console.log(result)
                res.status(200).json(result)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }

    static cadastrarUsuarios = (req, res) => {
        const usuario = new Usuario()

        usuario.cadastrarUsuario(req.body)
            .then(result => {
                res.status(200).json({resultado: "Sucesso ao cadastrar usuário"})
            })
            .catch(err => {
                res.status(500).json({resultado: "Erro ao cadastrar usuário"})
            })
    }

}

export default UsuarioControl;