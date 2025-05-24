const bcrypt = require("bcrypt");

const password = process.argv[2];
const saltRounds = 10;

if (!password) {
  console.error("Usage: npm run hash <password>");
  process.exit(1);
}

bcrypt.hash(password, saltRounds).then((hash) => {
  console.log(hash);
});
