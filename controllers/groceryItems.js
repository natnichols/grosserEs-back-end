import { GroceryItem } from '../models/groceryItem.js'

export async function create(req, res) {
  try {
    const groceryItem = await GroceryItem.create(req.body)
    res.status(201).json(groceryItem)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}

export {

}