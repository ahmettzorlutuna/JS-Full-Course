const Passenger = require('./passenger')
const Driver = require('./driver')


const ahmet = new Passenger("Ahmet", "Miami")
const tuna = new Passenger("Tuna", "NJ")
const cj = new Driver("Cj", "Enderson Tower");

const booking1 = ahmet.book(cj, "Miami", "LosAngeles")
const booking2 = ahmet.book(cj, "İstanbul", "Esengeless")
const booking3 = ahmet.book(cj, "İzmir", "Boston")
const booking4 = tuna.book(cj, "LA", "Miami")
const booking5 = tuna.book(cj, "İstanbul", "Boston")


printAllBookings(ahmet)
printAllBookings(tuna)

function printAllBookings(passenger) {
    passenger.bookings.forEach(printBooking);
}

function printBooking(booking) {
    console.log(`${booking.passenger.name} is going ${booking.destination} from ${booking.origin} now. Estimated time not calculated yet.`)
}

module.exports = {
    Passenger,
    Driver
}



