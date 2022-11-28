//Chef
//Customer
//Deliver
function printAllBookings(passenger) {
    //With For Loop ver.
    /* for (let i = 0; i < passenger.bookings.length; i++) {
        console.log(`${passenger.bookings[i].passenger.name} is going ${passenger.bookings[i].destination} from ${passenger.bookings[i].origin} now. Estimated time not calculated yet.`)
    } */
    passenger.bookings.forEach(booking => {
        console.log(`${booking.passenger.name} is going ${booking.destination} from ${booking.origin} now. Estimated time not calculated yet.`)
    });
}

class Driver {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
}

class Passenger {
    constructor(name, location) {
        this.name = name
        this.bookings = []
        this.location = location
    }
    book(driver, origin, destination) {
        const booking = new Booking(driver, this, origin, destination)

        this.bookings.push(booking);

        return booking
    }
    printBookingHistory(){
        this.bookings.forEach(printBooking)
    }
    
}

class Booking {
    constructor(driver, passenger, origin, destination) {
        this.driver = driver;
        this.passenger = passenger;
        this.origin = origin;
        this.destination = destination;
    }
}

const ahmet = new Passenger("Ahmet", "Miami")
const tuna = new Passenger("Tuna", "NJ")
const cj = new Driver("Cj", "Enderson Tower");


const booking1 = ahmet.book(cj, "Miami", "LosAngeles")
const booking2 = ahmet.book(cj, "İstanbul", "Esengeless")
const booking3 = ahmet.book(cj, "İzmir", "Boston")
const booking4 = tuna.book(cj, "LA", "Miami")
const booking5 = tuna.book(cj, "İstanbul", "Boston")
//ahmet.book(cj, "LA", "Texas")
function printBooking(booking) {
    console.log(`${booking.passenger.name} is going ${booking.destination} from ${booking.origin} now. Estimated time not calculated yet.`)
}

//cj.drive(booking.origin);

//console.log(ahmet.bookings[0])


//console.log(`${ahmet.name} has ${ahmet.bookings.length} bookings`)

//printBooking(booking2)
printAllBookings(ahmet)
printAllBookings(tuna)

ahmet.printBookingHistory()
tuna.printBookingHistory()

