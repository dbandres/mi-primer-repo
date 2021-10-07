/*const {frutas, dinero} = require('./frutas');

const cowsay = require('cowsay');
console.log(cowsay.say({
    text : "Aprendiendo Node.js",
    e : "oO",
    T : "U "
}));

frutas.forEach(item =>{
    console.count(item);
})

console.log(dinero);

const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Mi primera respuesta a la solicitud v.3')
})

const puerto = 3000;
server.listen(puerto, ()=>{
    console.log('escuchando solicitudes')
})   */

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// CONEXION A BASE DE DATOS
const mongoose = require('mongoose');

const user = 'vate_dario';
const password = 'UF43gFhtsIxlYMyX';
const dbname = 'veterinaria'
const uri = `mongodb+srv://vate_dario:${password}@cluster0.cwdv8.mongodb.net/${dbname}?retryWrites=true&w=majority`;

main().then(()=> console.log('base de datos conectada'))
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

// MOTOR DE PLANTILLA

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

// RUTAS WEB
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next)=>{
    res.status(404).render("404", {
        titulo: "404",
        descripcion : "Titulo del sitio web"
    });
})

app.listen(port, ()=>{
    console.log('Servidor a su servicio en el puerto', port)
})

