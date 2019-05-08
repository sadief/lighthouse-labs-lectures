const bcrypt = require('bcrypt');
const saltRounds = 12;
const myPlaintextPassword = 'bacon';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
        // Store hash in your password DB.
    });
});

const hashed = bcrypt.hashSync(myPlaintextPassword, saltRounds)

console.log(myPlaintextPassword, hashed)

console.log(bcrypt.compareSync(myPlaintextPassword, hashed))
console.log(bcrypt.compareSync(someOtherPlaintextPassword, hashed))