const { response, request } = require('express');

const usuariosGet =  (req = request, res = response) => {

    const {id, nombre} = req.query

    res.json({
        'ok': true,
        'mseg': 'GET API',
        id,
        nombre
    })
};

const usuariosPost =  (req, res = response) => {
    const {nombre,id} = req.body;

    res.json({
        'ok': true,
        'mseg': 'POST API',
        nombre,
        id
    })
};

const usuariosPut =  (req, res = response) => {
    const id = req.params.id;

    res.json({
        'ok': true,
        'mseg': 'PUT API',
        'id': id
    })
};

const usuariosDelete =  (req, res = response) => {
    res.json({
        'ok': true,
        'mseg': 'DELETE API'
    })
};

const usuariosPatch =  (req, res = response) => {
    res.json({
        'ok': true,
        'mseg': 'PATCH API'
    })
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}