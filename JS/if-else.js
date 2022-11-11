// if/else statements

const firstName='Max';
const age = 19;
const isStudent = false;
const school = 'university';

if (firstName === 'Sena') {
    console.log('Merhaba Max')
}

if (age===19) {
    console.log('Yaşınız 19');
}

if (isStudent) {
    console.log('Sen öğrencisin g.o')
}else{
    console.log('Öğrenci değilsin helal')
}

if (age=>18) {
    if ((school == 'university') || (school == 'high school')) {
        console.log('ehliyet alabilirsiniz')
    }else{
        console.log('eğitim durumunuz yetersiz')
    }
    
}else{
    console.log('ehliyet alamazasınız');
}

if (age > 0 && age < 12){
    console.log(`${firstName} is a child`);
}else if (age >=13 && age <20){
    console.log(`${firstName} is a teenager`);
}else{
    console.log(`${firstName} is a adult`);
}

//undefined

if (typeof id !== 'undefined'){
    console.log('id: '+id);
}else{
    console.log('no id');
}