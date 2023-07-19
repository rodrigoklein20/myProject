import express from "express";
import UsuarioControl from "../controls/usuarios.js";

const router = express.Router();

router
    .get("/usuarios", UsuarioControl.listarUsuarios)
    .get("/usuarios/:id", UsuarioControl.listarUsuariosPorId)
    .post("/usuarios", UsuarioControl.cadastrarUsuarios)

export default router;