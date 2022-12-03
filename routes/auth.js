const {Router} = require('express')
// const {check}=require('express-validator')
const router = Router()

const { verificar }= require('../controller/auth')

router.post('/verificar', verificar)

module.exports = router
