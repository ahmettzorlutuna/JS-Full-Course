//Modüllerin Oluşturulması


//Storage Controller
const StorageController = (function () {

})();


//Product Controller
const ProductController = (function () {
    //Private
    const Product = function (id, name, price) {
        this.id = id,
            this.name = name,
            this.price = price
    }

    const data = {
        products: [
            //{id:0,name:'pc',price:1231}
        ],
        selectedProduct: null,
        totalPrice: 0
    }

    return {
        //Public
        getProducts: function () {
            return data.products
        },
        getData: function () {
            return data
        },
        addProduct: function (prodName, prodPrice) {
            let id;

            if (data.products.length > 0) {
                id = data.products[data.products.length - 1].id + 1;
            } else {
                id = 0;
            }

            //Aldığımız bilgilerle yeni product nesnesi
            const newProduct = new Product(id, prodName, parseFloat(prodPrice));
            data.products.push(newProduct);
            return newProduct;
        },
        getTotal: function(){
            let total=0;
            data.products.forEach(prd => {
                if(prd.price>0){
                    total += prd.price;
                }
            });
            data.totalPrice = total;
            return data.totalPrice
        },
        getProductById: function(id){
            let product = null;

            data.products.forEach(prd => {
                if(prd.id == id){
                    product = prd;
                }
            })

            return product;
        },
        setCurrentProduct: function(product){
            data.selectedProduct = product;
        },
        getCurrentProduct: function(){
            return data.selectedProduct
        }
    }
})();


//UI Controller
const UIController = (function () {

    //Selectors
    const Selectors = {
        productList: "#item-list",
        productName: "#productName",
        productPrice: "#productPrice",
        addButton: ".addBtn",
        productListHide: "#forhide",
        totalTL: "#total-tl",
        totalUSD: "#total-dollar",
        tl: "#tl",
        usd: "#usd"
    }
    return {
        createProductList: function (products) {
            let html = '';
            products.forEach(prd => {
                html += `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price}</td>
                    <td class="text-right">
                        <i class="far fa-edit edit-product"></i>
                    </td>
                </tr>`;
            });

            document.querySelector(Selectors.productList).innerHTML = html;
        },
        getSelectors: function () {
            return Selectors
        },
        addProduct: function (prd) {
            document.querySelector(Selectors.productListHide).style.display = 'flex';
            var item = `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price}</td>
                    <td class="text-right">
                        <i class="far fa-edit edit-product"></i>
                    </td>
                </tr>
            `;

            document.querySelector(Selectors.productList).innerHTML += item;
        },
        clearList: function(name,price){
            document.querySelector(Selectors.productName).value = '';
            document.querySelector(Selectors.productPrice).value = '';
        },
        hideCard: function(){
            document.querySelector(Selectors.productListHide).style.display = 'none';
        },
        showTotal: function(total){
            document.querySelector(Selectors.totalTL).textContent = total + 'TL';
            document.querySelector(Selectors.totalUSD).textContent = total*18,19;
        },
        addProductToForm: function(){
            const selectedProduct = ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
        }
    }
})();


//App Controller (Bizim ana modülümüz)
const App = (function (ProductCtrl, UICtrl) {
    const UISelectors = UIController.getSelectors();

    //Load Event Listeners
    const loadEventListeners = function () {
        //Add product Event
        document.querySelector(UISelectors.addButton).addEventListener('click', addProducts);

        //Modify Product
        document.querySelector(UISelectors.productList).addEventListener('click', editProducts);
    }

    const addProducts = function (e) {

        const ProdName = document.querySelector(UISelectors.productName).value;
        const ProdPrice = document.querySelector(UISelectors.productPrice).value;

        //Adding prod to List
        if (ProdName != ' ' && ProdPrice != ' ') {
            //Add product
            const newProduct = ProductCtrl.addProduct(ProdName, ProdPrice);

            UIController.addProduct(newProduct);
            
            //Get Total
            const total = ProductCtrl.getTotal();
            console.log(total)

            //Show Total

            UIController.showTotal(total);

            //Clear İnputs
            UIController.clearList();
        }

        e.preventDefault();
    }

    const editProducts = function(e){
        if(e.target.classList.contains('edit-product')){
            const id = (e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

            const product = ProductCtrl.getProductById(id);

            //Get selected product
            ProductCtrl.setCurrentProduct(product);

            //Add product to form
            UICtrl.addProductToForm();

            console.log(product);
        }
        e.preventDefault();
    }


    return {
        init: function () {
            console.log('App Starting...')
            const products = ProductCtrl.getProducts();

            if(products.length>0){
                UICtrl.createProductList(products);
                console.log("ürünler listelendi")
            }else{
                UIController.hideCard();
                console.log("card gizlendi")
            }


            data = ProductCtrl.getData();
            console.log(data.totalPrice);
            loadEventListeners();
        }
    }
})(ProductController, UIController);

App.init();


