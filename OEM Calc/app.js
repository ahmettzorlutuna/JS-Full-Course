//Modüllerin Oluşturulması


//Storage Controller
const StorageController = (function(){

})();


//Product Controller
const ProductController = (function(){
    //Private
    const Product = function(id,name,price){
        this.id = id,
        this.name = name,
        this.price = price
    }

    const data = {
        products: [
            {id:0,name: 'Kamera', price: 100},
            {id:1,name: 'Kayıt Cihazı', price: 210},
            {id:2,name: 'HDD', price: 70},
            {id:3,name: 'Monitor', price: 83}
        ],
        selectedProduct: null,
        totalPrice: 0
    }

    return{
        //Public
        getProducts: function(){
            return data.products
        },
        getSelectedProduct: function(){
            return selectedProduct
        },
        getTotalPrice: function(){
            return totalPrice
        },
        getData: function(){
            return data
        }
    }
})();


//UI Controller
const UIController = (function(){

    //Selectors
    const Selectors = {
        productList : "#item-list"
    }
    return{
        createProductList: function(products){
            let html = '';
            products.forEach(prd => {
                html += `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price}</td>
                    <td class="text-right">
                    <button type="submit" class="btn btn-warning btn-sm">
                        <i class="far fa-edit"></i>
                    </button>
                    </td>
                </tr>`;
            });

            document.querySelector(Selectors.productList).innerHTML = html;
        },
        getSelectors : function(){
            return Selectors
        }
    }
})();


//App Controller (Bizim ana modülümüz)
const App = (function(ProductCtrl,UICtrl){
    return{
        init: function(){
            console.log('App Starting...')
            const products = ProductCtrl.getProducts();
            
            UICtrl.createProductList(products);
        }
    }
})(ProductController,UIController);


App.init();


