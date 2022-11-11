const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');
const reservedseats = document.querySelectorAll('.seat.reserved');
const seatsnormal = document.querySelectorAll('.seat');
const kaydet = document.getElementById('kaydet');
const temizle = document.getElementById('temizle');

let reservedSeats;
let reservedSeatsArr;
let seatsArr;
let reservedSeatCount;

getFromLS();
calculateTotal();
calculateReserved();

temizle.addEventListener('click',function(e){
    localStorage.clear();
    location.reload();
})

kaydet.addEventListener('click', function (e) {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats != null && selectedSeats.length > 0) {
        seats.forEach(function (seat, index) {
            console.log(`seat ${seat} index ${index}`)
            if (selectedSeats.indexOf(index) > -1) { //koltuk index i ile ls deki koltuk indexleri eşleşiyor mu ?
                seat.classList.add('reserved');
                calculateReserved();
                getFromLS();
            }
        })
    }

    
});

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        calculateTotal()
    }
});

select.addEventListener('change', function (e) {
    calculateTotal();
});

function calculateReserved(){
    reservedSeats = container.querySelectorAll('.seat.reserved');


    reservedSeatsArr = [];
    seatsArr = [];


    reservedSeats.forEach(function(seat){
        reservedSeatsArr.push(seat)
    })

    seats.forEach(function (seat) {
        seatsArr.push(seat);
    });

    let reservedSeatsIndex = reservedSeatsArr.map(function (seat) {
        return seatsArr.indexOf(seat);
    });

    reservedSeatCount = reservedSeatsArr.length;

    saveToLocalStorageReserved(reservedSeatsIndex);

}

function saveToLocalStorageReserved(indexs){
    localStorage.setItem('reservedSeats', JSON.stringify(indexs));
}

function calculateTotal() {
    selectedSeats = container.querySelectorAll('.seat.selected');

    selectedSeatsArr = [];
    seatsArr = [];

    selectedSeats.forEach(function (seat) {
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function (seat) {
        seatsArr.push(seat);
    });

    // [1,7,20]
    let selectedSeatIndexs = selectedSeatsArr.map(function (seat) {
        return seatsArr.indexOf(seat);
    });

    let selectedSeatCount = selectedSeats.length;
    if(selectedSeatCount && reservedSeatCount){
        count.innerText = selectedSeatCount - reservedSeatCount;
        amount.innerText = (selectedSeatCount - reservedSeatCount) * select.value;
    }
    

    saveToLocalStorage(selectedSeatIndexs);
}

function getFromLS() {
    selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    reservedSeats = JSON.parse(localStorage.getItem('reservedSeats'))

    if (selectedSeats != null && selectedSeats.length > 0) {
        seats.forEach(function (seat, index) {
            console.log(`seat ${seat} index ${index}`)
            if (selectedSeats.indexOf(index) > -1) { //koltuk index i ile ls deki koltuk indexleri eşleşiyor mu ?
                console.log('seçildi');
                seat.classList.add('selected');
            }
        })
    };

    if(reservedSeats != null && reservedSeats.length > 0){
        seatsnormal.forEach(function(seat,index){
            if(reservedSeats.indexOf(index) > -1){
                seat.classList.add('reserved');
                selectedSeatsArr = [];
            }
        });
    }


    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex != null) {
        select.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}


