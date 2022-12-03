
const { generarJWT } = require('../helpers/generar-jwt')
const Pedidos = require ('../models/pedidos')

//const {generarJWT} = require('../helpers/generar-jwt)

const verificar = async (req, res)=>{
    //Desectructuración
const { documento } = req.body

    try {
        //Verificar si el correo existe
        const pedidos = await Pedidos.findOne({documento})
        
        if(!pedidos){
            return res.status(400).json({
                msg: 'El usuario no tiene ningun pedido asociado'})
        }
        
        //Generar el JWT: Jason Web Token
        const token = await generarJWT(pedidos.id)

        return res.json({
            pedidos,
            token
        })

    } catch (err){
        console.log('Error, contacte al administrador' +  err)
    }

    
}





module.exports ={
    verificar
}