var trafigeCikis = new Date('03/20/2022');
trafigeCikis.setHours(0, 0, 0, 0);
var trafiktekiMs = Date.now() /*Ms*/ - trafigeCikis.getTime(); //Ms
var trafiktekiGun = Math.floor(trafiktekiMs / (1000 * 60 * 60 * 24));

if (trafiktekiGun <= 365 && trafiktekiGun >= 0) {
    console.log('1. servis bakım süreniz geldi');
} else if (trafiktekiGun > 365 && trafiktekiGun <= 365 * 2) {
    console.log('2. servis bakım süreniz geldi');
} else if (trafiktekiGun > 365 * 2 && trafiktekiGun <= 365 * 3) {
    console.log('3. servis bakım süreniz geldi')
} else {
    console.log('süre hesaplanamıyor');
}

console.log(trafiktekiGun);

//Login ex

var result = prompt("Who's there ?");

if (result == 'cancel') {
    console.log('cancelled');
} else if (result == 'Admin') {
    var password = prompt('Enter password : ');

    if (password == 'cancel') {
        console.log('cancelled');
    } else if (password == '1234') {
        console.log('Login success admin');
    } else {
        console.log('Password is invalid');
    }

} else {
    console.log('Error 404')
}