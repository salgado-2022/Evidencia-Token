const { response } = require('express')
const pedidos = require('../models/pedidos')
const Pedi = require('../models/pedidos')

const getPedido = async (req, res = response) => {
    const pedido = await pedidos.find()
    res.json({
        msg: 'GET API pedidos',
        pedido
    })
}

const postPedido = async (req, res) => {
    //Desestructuracion
    const { documento,nombreUsuario, ProductosPedido, Precio } = req.body


    const Pedido = new Pedi({ documento,nombreUsuario, ProductosPedido, Precio })


    await Pedido.save()

    res.json({
        msg: 'POST API Mascota',
        Pedido
    })
}



//Modificar todos los valores
const putPedido = async(req, res)=>{

    const { documento,nuevodocumento, nombreUsuario , ProductosPedido, Precio } = req.body
    const Pedido = await pedidos.findOneAndUpdate({documento: documento},{documento:nuevodocumento,nombreUsuario:nombreUsuario,ProductosPedido:ProductosPedido,Precio:Precio})
    
    res.json({
        msg: "PUT API pedidos",
        Pedido
    })
}



const deletePedido = async(req,res) =>{
    const  { documento } =req.query
    const Pedido = await pedidos.findOneAndDelete({documento : documento})

    res.json({
        msg: 'Delete api pedidos',
        Pedido
    })
}

module.exports = {
    getPedido,
    postPedido,
    putPedido,
    deletePedido
}