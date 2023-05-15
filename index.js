import express from 'express';
import productRoutes from './routes/product.js'


const app = express();
const PORT = 5000
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use('/users', productRoutes)
app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`))