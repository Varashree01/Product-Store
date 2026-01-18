import mongoose from 'mongoose'; // Fixed: "mangoose" → "mongoose"

const productSchema = new mongoose.Schema({ // Fixed: "mangoose" → "mongoose"
    name: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema); // Fixed: "Products" → "Product" and "productsSchema" → "productSchema"

export default Product;