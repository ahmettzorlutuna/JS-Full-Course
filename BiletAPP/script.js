const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

getFromLS();
calculateTotal();

container.addEventListener('click', function(e) {
   if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
       e.target.classList.toggle('selected');
       calculateTotal()      
    }
});

select.addEventListener('change', function(e) {
    calculateTotal();  
});

function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected');

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat) {
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function(seat) {
        seatsArr.push(seat);
    });

    // [1,7,20]
    let selectedSeatIndexs = selectedSeatsArr.map(function(seat) {
        return seatsArr.indexOf(seat);
    });

    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorage(selectedSeatIndexs);
}

function getFromLS(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats != null && selectedSeats.length > 0){
        seats.forEach(function(seat,index){
            console.log(`seat ${seat} index ${index}`)
            if(selectedSeats.indexOf(index) > -1){ //koltuk index i ile ls deki koltuk indexleri eşleşiyor mu ?
                console.log('seçildi');
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex != null){
        select.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}



