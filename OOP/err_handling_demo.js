document.getElementById('myBtn').addEventListener('click',function(event){

    var name = document.getElementById('name');
    var age = document.getElementById('age');
    var errors = document.getElementById('errors');
    errors.innerHTML = '';

    // console.log(name.value);
    // console.log(age.value);

    try {
        if (name.value.length === 0) {
            throw new Error('name is required');
        }if(name.value.length > 20){
            throw new Error ('İsim 20 karakterden fazla olamaz')
        }
        console.log('form is valid');
    } catch (error) {
        errors.innerHTML = error.message; //yukarıda fırlattığımız hatayı burada html içine gömdük.
    }finally{
        name.value = '';
        age.value = '';
    }
    event.preventDefault();
})

