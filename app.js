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

const port = 3000;

// MOTOR DE PLANTILLA

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res)=>{
    res.render("index", {titulo : "mi titulo dinamico"})
})

app.get('/servicios', (req, res)=>{
    res.render("servicios", {tituloServicios : "Estas en la paguina de servicios"})
})

app.use((req, res, next)=>{
    res.status(404).render("404", {
        titulo: "404",
        descripcion : "Titulo del sitio web"
    });
})

app.listen(port, ()=>{
    console.log('Servidor a su servicio en el puerto', port)
})

