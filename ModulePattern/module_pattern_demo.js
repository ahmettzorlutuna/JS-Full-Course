var products =  [
    {name:'P1',price:'10314'},
    {name:'P2',price:'12314'},
    {name:'P3',price:'15314'}
]

var Shop = (function(data){

    var collections = data || [];

    const addProduct = function(product){
        collections.push(product);
    }

    const removeProduct = function(product){
        var index = collections.indexOf(product);
        if(index>=0){
            collections.splice(index,1);
        }
    }

    const showProducts = function(){
        return collections;
    }

    return {
        addProduct,
        removeProduct,
        showProducts
    }

})(products);

Shop.addProduct(products[0]);
Shop.addProduct(products[1]);
console.log(Shop.showProducts());