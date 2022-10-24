// import { faker } from "@faker-js/faker";
const { faker } = require("@faker-js/faker");
let USERS = [
  {
    id: 1,
    email: "test@test.com",
    firstName: "test",
    lastName: "test",
    avatar: "test",
  },
];

const createRandomUser = (i) => {
  return {
    id: i,
    email: faker.internet.email(),
    firstName: faker.internet.userName(),
    lastName: faker.internet.userName(),
    avatar: faker.image.avatar(),
  };
};
let i = 1;
Array.from({ length: 10 }).forEach(() => {
  i += 1;
  USERS.push(createRandomUser(i));
});

const fs = require("fs");
fs.writeFile("./src/data/users.json", JSON.stringify(USERS), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});
