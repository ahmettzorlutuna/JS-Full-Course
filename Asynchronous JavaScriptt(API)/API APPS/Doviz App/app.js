//Source = https://app.exchangerate-api.com

const api_key = "your_api_key";
const url = `https://v6.exchangerate-api.com/v6/${api_key}`;

//Elements

const currency_one = document.getElementById("currency-one");
const currency_two = document.getElementById("currency-two");
const list_one = document.getElementById("list-one");
const list_two = document.getElementById("list-two");
const amount = document.getElementById("amount");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

fetch(url + "/codes")
    .then(res => res.json())
    .then(data => {
        const items = data.supported_codes;
        let options;
        for(let item of items){
            options += `<option value=${item[0]}>${item[1]}</option>`;
        }

        list_one.innerHTML = options;
        list_two.innerHTML = options;
    });

calculate.addEventListener("click", function(){
    const doviz1 = currency_one.value;
    const doviz2 = currency_two.value;
    const miktar = amount.value;
    

    fetch(url + "/latest/" + doviz1)
        .then(res => res.json())
        .then(data =>{
            const res = (data.conversion_rates[doviz2] * miktar).toFixed(2);
            result.innerHTML = `
                <div class="card border-danger">
                    <div class="card-body text-center" style="font-size: 30px;">${miktar} ${doviz1} = ${res} ${doviz2}</div>
                </div>
            `;
            
        })
});