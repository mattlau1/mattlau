// generates a hashed string for manual database insertion
// Usage: node hash.js <string>
const bcrypt = require("bcryptjs")

if (process.argv.length !== 3) {
  console.log("Usage: node hash.js <password>");
  return;
}

bcrypt.hash(process.argv[2], 8, (_, hash) => {
  bcrypt.compare(process.argv[2], hash, (_, result) => {
    if (result === true) {
      console.log(hash);
      return;
    }
    console.log("Unexpected Error");
  })
});