const mongoose = require('mongoose');
const {Schema} = mongoose;

const ClienteSchema = new Schema({

    id: {type: String, required: true},
    nombre: {type: String, required: true},
    telefono: {type: String, required: true},
    direccion: {type: String, required: true},
    nit: {type: String, required: true},

});

module.exports = mongoose.model('Cliente',ClienteSchema);