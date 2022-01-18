const { req, res } = require('express');

const getUsers = ( request = req, response = res ) => {

    const { q, name = 'Not name', apikey } = request.query;

    response.json({
        message: 'GET API - controller',
        q,
        name,
        apikey
    });
}

const putUsers = ( request, response = res ) => {
    const { id } = request.params;

    response.json({
        message: 'PUT API - controller',
        id
    });
}

const postUsers = ( request, response = res ) => {
    const { name, age } = request.body;

    response.json({
        message: 'POST API - controller',
        name,
        age
    });
}

const deleteUsers = ( request, response = res ) => {
    response.json({
        message: 'DELETE API - controller'
    });
}

const patchUsers = ( request, response = res ) => {
    response.json({
        message: 'PATCH API - controller'
    });
}



module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers,
    patchUsers
}