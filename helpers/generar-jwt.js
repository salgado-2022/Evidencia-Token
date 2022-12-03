const jwt = require('jsonwebtoken')

const generarJWT = (id='') =>{
    return new Promise ((resolve, reject) =>{
        const pay = { id }

        jwt.sign(pay, process.env.SECRETKEY, {
            expiresIn : '1h'
        }, (err, token)=>{
            if(err){
                reject('No se pudo generar el token')
            }else{
                resolve(token)
            }
        })
    })
}

module.exports ={
    generarJWT
}