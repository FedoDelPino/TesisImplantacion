// Una vez definido el esquema, puedo consultar modelo de datos
const { Schema, model } = require('mongoose');

// Definir esquema de datos
const userSchema = new Schema({
    tipoUsuario: {
        type: String,
        required: true,
        default: "Admin"
    },
    nombreUsuario: {
        type: String,
        required: true,
        //trim separa por espacios
        trim: true,
        unique: true
    }
},{
    timestamps: true
});

// Nombre del modelo, que utilizara el esquema configurado
module.exports = model('User', userSchema);