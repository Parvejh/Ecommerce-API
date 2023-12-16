const express = require('express');
const router = express.Router();
const controller = require("../../controllers/api/api_controller")

router.get('/', controller.listProducts)

router.post('/create',controller.createProduct)

router.delete('/:id',controller.deleteProduct)

router.post('/:id/update_quantity',controller.updateProduct)

module.exports = router;