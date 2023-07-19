import express from "express";
import usuarios from "./usuarios.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({
            titulo: "Curso de node"
        })
    })

    // app.route('/usuarios').get((req, res) => {

    //     res.status(200).send(
    //         'OI'
    //     )
    // })

    app.use(
        express.json(),
        usuarios
    )
}

export default routes;