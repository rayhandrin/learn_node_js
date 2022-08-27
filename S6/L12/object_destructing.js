// Property Destructing
const user = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
}

// The line below uses destructuring
const { age, location: address } = user
console.log(age)
console.log(address)