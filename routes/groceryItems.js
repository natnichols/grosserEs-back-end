import { Router } from 'express'
import * as groceryItemsCtrl from '../controllers/groceryItems.js'

const router = Router()

// ========== Public Routes ===========
// POST /api/groceryItems
router.post('/', groceryItemsCtrl.create)
// GET /api/groceryItems
router.get('/', groceryItemsCtrl.index)

export {
  router
}