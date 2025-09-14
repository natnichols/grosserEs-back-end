import mongoose from 'mongoose'

const Schema = mongoose.Schema

const groceryItemSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: String, default: '1' },
  category: {
    type: String,
    default: 'Snacks',
    enum: ['Produce', 'Dairy', 'Frozen', 'Dry Goods', 'Cleaning Supplies&Home Goods', 'Snacks']
    }
  // cost: { type: number },
},
  { timestamps: true }
)

const GroceryItem = mongoose.model('GroceryItem', groceryItemSchema)

export {
  GroceryItem
}