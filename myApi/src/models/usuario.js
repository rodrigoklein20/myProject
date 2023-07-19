import client from '../config/db.js'

class Usuario {
    constructor(){}

    async listarUsuarios(){
        const sql = 'Select * from users'
        let res = await client.query(sql)
        return res.rows
    }

    async listarUsuarioPorId(id){
        const sql = `Select * from users where id = ${id}`
        let res = await client.query(sql)
        return res.rows
    }

    async cadastrarUsuario(usuario){
        const sql = `insert into users (cpf, nome, email, telefone, dtnascimento) values('${usuario.cpf}', '${usuario.nome}', '${usuario.email}', '${usuario.telefone}', '${usuario.dtnascimento}')`

        await client.query(sql)

        return
    }
}

export default Usuario;