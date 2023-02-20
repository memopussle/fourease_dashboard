import bcrypt from " bcryptjs";

const data = {
  //test users

  users: [
    {
      name: "ExampleAdmin",
      email: "testemail@admin.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "ExampleUser",
      email: "testemail@user.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
};

//exports data so App.ts can render it
export default data;
