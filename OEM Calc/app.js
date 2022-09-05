//Modüllerin Oluşturulması


//Storage Controller
const StorageController = (function () {

})();

// async function getCurrentRate() {
//     const api_key = "c736779b8afe6e31baef21be";
//     const url = `https://v6.exchangerate-api.com/v6/${api_key}`;
//     await fetch(url + "/latest/USD")
//         .then(res => res.json())
//         .then(data => {
//             const selectors = UIController.getSelectors();
//             const rateText = document.querySelector(selectors.currentRate);
//             const rate = data.conversion_rates["TRY"];
//             rateText.innerHTML = `Güncel Kur: ${rate.toFixed(2)}`
//             return rate
//         })
// }

const CurrentRate = (function () {
    return {
        getCurrentRate: function () {
            const api_key = "your_api_keyyyyyasdasd";
            const url = `https://v6.exchangerate-api.com/v6/${api_key}`;
            fetch(url + "/latest/USD", )
                .then(res => res.json())
                .then(data => {
                    const selectors = UIController.getSelectors();
                    const rateText = document.querySelector(selectors.currentRate);
                    const rate = data.conversion_rates["TRY"];
                    rateText.innerHTML = `${rate.toFixed(2)}`
                })
                .then(rate=>{
                    return rate
                })
        }
    }
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
        getTotal: function () {
            let total = 0;
            data.products.forEach(prd => {
                if (prd.price > 0) {
                    total += prd.price;
                }
            });
            
            data.totalPrice = total;
            let formatted = new Intl.NumberFormat().format(data.totalPrice);

            return formatted;
        },
        getProductById: function (id) {
            let product = null;

            data.products.forEach(prd => {
                if (prd.id == id) {
                    product = prd;
                }
            })

            return product;
        },
        setCurrentProduct: function (product) {
            data.selectedProduct = product;
        },
        getCurrentProduct: function () {
            return data.selectedProduct
        },
        updateProduct: function (prodName, prodPrice) {
            let product = null;

            data.products.forEach(prd => {
                if (prd.id == data.selectedProduct.id) {
                    prd.name = prodName;
                    prd.price = parseFloat(prodPrice);
                    product = prd;
                }
            })

            return product;
        },
        deleteProduct: function (product) {
            data.products.forEach(function (prd, index) {
                if (prd.id == product.id) {
                    data.products.splice(index, 1);
                }
            })
        },
        deleteAllProduct: function () {
            let lenght = data.products.length();
            data.products.forEach(function () {
                data.products.splice(1, lenght);
            })
        }
    }
})();


//UI Controller
const UIController = (function () {

    //Selectors
    const Selectors = {
        addButton: ".addBtn",
        productListItems: "#item-list tr", //All tr items above item-list class
        saveButton: ".saveBtn",
        deleteButton: ".deleteBtn",
        deleteAllButton: ".deleteAllBtn",
        cancelButton: ".cancelBtn",
        productList: "#item-list",
        productName: "#productName",
        productPrice: "#productPrice",
        productListHide: "#forhide",
        totalTL: "#total-tl",
        totalUSD: "#total-dollar",
        tl: "#tl",
        usd: "#usd",
        currentRate: ".current-rate"

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
                    <td>${prd.price} $</td>
                    <td class="text-right">
                        <i class="far fa-edit edit-product"></i>
                    </td>
                </tr>
            `;

            document.querySelector(Selectors.productList).innerHTML += item;
        },
        clearList: function (name, price) {
            document.querySelector(Selectors.productName).value = '';
            document.querySelector(Selectors.productPrice).value = '';
        },
        hideCard: function () {
            document.querySelector(Selectors.productListHide).style.display = 'none';
        },
        showTotal: function (total) {
            let rate = document.querySelector(Selectors.currentRate).textContent;
            document.querySelector(Selectors.totalTL).textContent = total + '$';
            document.querySelector(Selectors.totalUSD).textContent = `${total * rate} TL`;
            
        },
        addProductToForm: function () {
            const selectedProduct = ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
        },
        addingState: function (item) {
            UIController.clearList();
            document.querySelector(Selectors.addButton).style.display = 'inline';
            document.querySelector(Selectors.saveButton).style.display = 'none';
            document.querySelector(Selectors.deleteButton).style.display = 'none';
            document.querySelector(Selectors.cancelButton).style.display = 'none';
            document.querySelector(Selectors.deleteAllButton).style.display = 'none';
            if (item) {
                item.classList.remove('bg-info');
            }
        },
        editState: function (tr) {
            //Ne kadar tr elemanı varsa hepsine ait bg-info classList ini siliyoruz
            const parent = tr.parentNode;
            for (let i = 0; i < parent.children.length; i++) {
                parent.children[i].classList.remove('bg-info');
            }
            tr.classList.add('bg-info');
            document.querySelector(Selectors.addButton).style.display = 'none';
            document.querySelector(Selectors.saveButton).style.display = 'inline';
            document.querySelector(Selectors.deleteButton).style.display = 'inline';
            document.querySelector(Selectors.cancelButton).style.display = 'inline';
            document.querySelector(Selectors.deleteAllButton).style.display = 'inline';
        },
        updateProduct: function (prd) {
            let updatedItem = null;

            let items = document.querySelectorAll(Selectors.productListItems);

            items.forEach(item => {
                if (item.classList.contains('bg-info')) {
                    item.children[1].textContent = prd.name;
                    item.children[2].textContent = prd.price + ' $';
                    updatedItem = item;
                }
            })

            return updatedItem;
        },
        clearWarnings: function () {
            let items = document.querySelectorAll(Selectors.productListItems);

            items.forEach(item => {
                if (item.classList.contains('bg-info')) {
                    item.classList.remove('bg-info');
                }
            })
        },
        deleteProduct: function () {
            let items = document.querySelectorAll(Selectors.productListItems);

            items.forEach(item => {
                if (item.classList.contains('bg-info')) {
                    item.remove();
                }
            })
        },
        deleteAllProduct: function () {
            let items = document.querySelectorAll(Selectors.productListItems)

            items.forEach(item => {
                item.remove();
            })
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

        //Edit Product click
        document.querySelector(UISelectors.productList).addEventListener('click', editProductsClick);

        //Edit product submit
        document.querySelector(UISelectors.saveButton).addEventListener('click', editProductsSubmit);

        //Cancel product submit
        document.querySelector(UISelectors.cancelButton).addEventListener('click', cancelProductSubmit);

        //Delete product submit
        document.querySelector(UISelectors.deleteButton).addEventListener('click', deleteProductSubmit);

        //Delete all product submit
        document.querySelector(UISelectors.deleteAllButton).addEventListener('click', deleteAllProductSubmit);

    }

    const addProducts = function (e) {

        const ProdName = document.querySelector(UISelectors.productName).value;
        const ProdPrice = document.querySelector(UISelectors.productPrice).value;

        //Adding prod to List
        if (ProdName != '' && ProdPrice != '') {
            //Add product
            const newProduct = ProductCtrl.addProduct(ProdName, ProdPrice);

            UIController.addProduct(newProduct);

            //Get Total
            const total = ProductCtrl.getTotal();
            console.log(total)

            UICtrl.addingState();

            //Show Total

            UIController.showTotal(total);

            //Clear İnputs
            UIController.clearList();

        }

        e.preventDefault();
    }

    const editProductsClick = function (e) {
        if (e.target.classList.contains('edit-product')) {
            const id = (e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

            const product = ProductCtrl.getProductById(id);

            //Get selected product
            ProductCtrl.setCurrentProduct(product);

            //Add product to form
            UICtrl.addProductToForm();

            UICtrl.editState(e.target.parentNode.parentNode);

            console.log(product);
        }
        e.preventDefault();
    }

    const editProductsSubmit = function (e) {
        const ProdName = document.querySelector(UISelectors.productName).value;
        const ProdPrice = document.querySelector(UISelectors.productPrice).value;

        //Adding prod to List
        if (ProdName != '' && ProdPrice != '') {

            //Update Product
            const updatedProduct = ProductCtrl.updateProduct(ProdName, ProdPrice);

            //Update UI
            const item = UICtrl.updateProduct(updatedProduct);


            //Get Total
            const total = ProductCtrl.getTotal();

            //Show Total
            UIController.showTotal(total);

            UIController.addingState(item);

        }
        e.preventDefault();
    }

    const cancelProductSubmit = function (e) {
        UIController.addingState();
        UIController.clearWarnings();
        e.preventDefault();
    }

    const deleteProductSubmit = function (e) {

        //get selected product
        const selectedProduct = ProductCtrl.getCurrentProduct();

        //delete product
        ProductCtrl.deleteProduct(selectedProduct);

        //delete ui
        UIController.deleteProduct();

        //Get Total
        const total = ProductCtrl.getTotal();

        //Show Total
        UIController.showTotal(total);

        UIController.addingState();

        if (total == 0) {
            UIController.hideCard();
        }

        e.preventDefault();
    }

    const deleteAllProductSubmit = function (e) {
        //Delete from product
        ProductCtrl.deleteAllProduct();
        //Delete from ui
        UIController.deleteAllProduct();

        e.preventDefault();
    }


    return {
        init: function () {
            console.log('App Starting...')
            const products = ProductCtrl.getProducts();

            //İnitial Buttons
            UICtrl.addingState();

            if (products.length > 0) {
                UICtrl.createProductList(products);
                console.log("ürünler listelendi")
            } else {
                UICtrl.hideCard();
                console.log("card gizlendi")
            }

            //getCurrentRate();
            CurrentRate.getCurrentRate();


            data = ProductCtrl.getData();
            loadEventListeners();
        }
    }
})(ProductController, UIController);

App.init();


