var app = angular.module('productsApp', []);

app.factory('productsFactory', function () {
    var products = [
        { product: "Vaseleen", price: 10, quantity:50 },
        { product: "Bananas", price: 100, quantity:50  },
        { product: "Doritos", price: 10000, quantity:50  },
        { product: "White Board", price: 20, quantity:50  }
    ]

    var factory = {}
    factory.getProducts = function (callback) {
        callback(products)
    }

    factory.deleteProduct = function (productNum, callback) {
        products.splice(productNum, 1);
        callback(products)
    }
    factory.addProduct = function (addedProduct, callback) {
        products.push(addedProduct);
        callback(products);
    }
    factory.buyProduct = function(productIndex, callback){
        if (products[productIndex].quantity > 0){ 
            products[productIndex].quantity -=1
        }
        callback(products)
    }

    return factory;
})
app.controller('productsController', ['$scope', 'productsFactory', function ($scope, productsFactory) {
    $scope.products =[];
    productsFactory.getProducts(getProducts);
    // console.log($scope.products)
    function getProducts(products){
        $scope.products = products
    }
    $scope.newProduct = function(){
        var product = {product: $scope.productName, price : $scope.productPrice, quanity:50 }
        productsFactory.addProduct(product,getProducts);
    }
    $scope.deleteProduct = function(productIndex){
        productsFactory.deleteProduct(productIndex, getProducts);
    }


}])
app.controller('quantityController', ["$scope",'productsFactory', function($scope, productsFactory){
    $scope.products = [];
    productsFactory.getProducts(getProducts);
    // console.log($scope.products)
    function getProducts(products){
        $scope.products = products
    }
    $scope.buyProduct = function(productIndex){
        productsFactory.buyProduct(productIndex, getProducts)
    }
}])

