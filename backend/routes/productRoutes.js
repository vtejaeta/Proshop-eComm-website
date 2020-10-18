import express from 'express'
import {
  createProduct,
  createProductReview,
  deleteProduct,
  getProductById,
  getProducts,
  getTopProducts,
  updateProduct,
} from '../controllers/productController.js'
import { protect, Admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/top', getTopProducts)
router.route('/').get(getProducts).post(protect, Admin, createProduct)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, Admin, deleteProduct)
  .put(protect, Admin, updateProduct)
router.route('/:id/reviews').post(protect, createProductReview)

export default router
