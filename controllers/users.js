const express = require('express');
const router = express.Router();
router.post("/users",async(req,res)=>{
    return res.json({
        mensagem:"cadastrado com sucesso"
    });
});