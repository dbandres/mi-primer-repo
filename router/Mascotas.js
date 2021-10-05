const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    res.render("mascotas", {
        arrayMascotas:[
            {id: 'jdjdjdjd', nombre: 'Piru', descripcion: 'Piru descripcion'},
            {id: 'jdjdjdjaaaad', nombre: 'chicho', descripcion: 'chicho descripcion'}
        ]
    })
})

module.exports = router;
