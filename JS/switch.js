//Switch 

let team = 'haas';

switch (team) {
    case 'haas':
        console.log('Haas F1 Team');
        break;
    case 'ferrari':
        console.log('Ferrari F1 Team');
    default:
        console.log('nothing detected')
}


let day;

switch (new Date().getDay()) {
    case 0:
        day = 'Pazar';
        break;
    case 1:
        day = 'Pazartesi';
        break;
    case 2:
        day = 'Salı';
        break;
    case 3:
        day = 'Çarşamba';
        break;
    case 4:
        day = 'Perşembe';
        break;
    case 5:
        day = 'Cuma';
        break;
    case 6:
        day = 'Cumartesi';
        break;
    //İç içe case
    // case1:
    // case2:
    // case3:
    // case4:
    // case5:
    //     day = 'Hafta içi';
    //     break;

    default:
        break;
}

console.log(`Bugün ${day}`);


const age = 9;
const firstName ='Sena';

switch(true){
    case age>=0 && age<=12:
       console.log(`${firstName} is a child`);
    break;
    case (age >=13 && age <=19):
       console.log(`${firstName} is a teenager`);
    break;
    default:
       console.log(`${firstName} is an adult`);
}