// ES5 Standard Function
// const square function (x) {
// return x * x
// }

// Arrow Function
const square = (x) => {
    return x * x
}

// Shorthand Syntax
const squareAlt = (x) => x * x

console.log(squareAlt(2)) // Will print: 4
console.log(square(2)) // Will print: 4

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()