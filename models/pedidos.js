const { Schema, model } = require('mongoose')

const Pedidos = Schema({

    documento: {
        type:Number,
        unique: true
    },
    nombreUsuario: {
        type: String
    },
    ProductosPedido: {
        type: String,
        required: [true, 'El pedido debe tener algun producto']
    },
    Precio: {
        type: Number
    }
})

module.exports = model('Pedido', Pedidos)