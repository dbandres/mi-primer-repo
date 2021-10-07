const mongoose = require('mongoose');
const {Schema} = mongoose;

const mascotaSchema = new Schema({
    nombre : String,
    descripcion : String
})

// crear el modelo

const Mascota = mongoose.model('Mascota', mascotaSchema);

module.exports = Mascota;