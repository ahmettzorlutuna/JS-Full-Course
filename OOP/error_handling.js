//Error Handling


//Reference Error
try { //Hatanın geleceği muhtemel blok
    console.log(myFunc());
} catch (error) { //Hata alınırsa çalışacak blok
    console.log(error);
    console.log(error.message);
    console.log(error.name);
    console.log(error instanceof ReferenceError); //Alınan hata RefenceError hatası mı (İnstance'ı mı?) /evet
    console.log(error instanceof TypeError); //Alınan hata TypeError hatası mı (İnstance'ı mı?) /hayır
}

//Undefined Handling 

var user = {
    name : 'Noname'
}

try {
    console.log(user.name);
    if(!user.no){
        throw new Error('User no is not available');
    }
    
} catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
    console.log(error instanceof ReferenceError); 
    console.log(error instanceof TypeError);
}
finally{
    console.log('finally block')//Finally block try true dönsün veya dönmesin her zaman çalışır
}