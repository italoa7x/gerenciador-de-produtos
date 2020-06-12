const connection = require('../database/Connection');

module.exports = {
    async storage(req, res) {
        const { name, price } = req.body;
        const product = await connection('products').insert({
           name: name,
           price: price 
        });
        return res.json(product);
    },
    async index(req, res){
        const products = await connection('products')
        .select('*');
        return res.json(products);
    },
    async delete(req, res){
        const { id } = req.params;
        await connection('products')
        .where('id', id)
        .delete();
        return res.status(204).send();
    },
    async update(req, res){
        const { name, price } = req.body;
        const { id } = req.params;

        const newProduct = await connection('products')
        .where('id', '=', id)
        .update({
            name: name,
            price: price
        })

        return res.json(newProduct);
    },
    async findById(req, res){
        const { id } = req.params;
        const product = await connection('products')
        .where('id', '=', id)
        .select('*')
        .first();
        if(!product){
            return res.status(404).json({
                message: 'Produto não encontrado'
            });
        }
        return res.json(product);
    }
}