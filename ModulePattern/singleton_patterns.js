var singleton = (function(){
    var instance ;

    function ProductController(){
        const products = [
            {name:'P1'},
            {name:'P2'},
            {name:'P3'}
        ]

        const add = function(product){
            products.push(product);
        }

        const getProduct = function(){
            return products
        }

        return {
            add,getProduct
        }
    }


    return {
        getInstance : function(){
            if(!instance){
                instance = new ProductController();
            }
            return instance;
        }
    }
})();

const productController1 = singleton.getInstance();
const productController2 = singleton.getInstance();

productController1.add({name:'P4'});
console.log(productController2.getProduct());