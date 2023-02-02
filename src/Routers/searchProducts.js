const express = require("express");
const routerSearchProducts = express.Router();

const SearchProducts = require('../Controllers/SearchProducts');

routerSearchProducts.route('/products')
    .get(SearchProducts.getDataSearchName)

routerSearchProducts.route('/users')
    .get(SearchProducts.getUsers)

routerSearchProducts.route('/categories')
    .get(SearchProducts.getCategories)

routerSearchProducts.route('/comments')
    .get(SearchProducts.getComments)

routerSearchProducts.route('/banners')
    .get(SearchProducts.getBanners)
    
module.exports = routerSearchProducts;