//İmmidiate funct (bir kerelik çalışacak fonksiyonlar)

// (function(){

// })();

(function (name) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var today = new Date();
    var msg = 'Welcome. Today is ' + days[today.getDay()] + ' for' + name;
    console.log(msg);
}('Ahmet'));
