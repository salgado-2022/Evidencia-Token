const {Router} = require('express')
const router = Router()

const { getPedido, postPedido, putPedido,deletePedido} = require('../controller/pedido')

router.get('/',getPedido)
router.post('/', postPedido )
router.put('/',putPedido)
router.delete('/',deletePedido)



module.exports = router