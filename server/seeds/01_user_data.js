/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.schema.raw("TRUNCATE  users CASCADE");
  await knex("users").del();
  await knex("users").insert([
    {
      username: "e",
      firstName: "Jacob",
      lastName: "A",
      password: "1234",
      auth_token: "",
    },
    {
      username: "d",
      firstName: "Jon",
      lastName: "S",
      password: "1245",
      auth_token: "",
    },
    {
      username: "s",
      firstName: "Kyle",
      lastName: "F",
      password: "1474",
      auth_token: "",
    },
    {
      username: "g",
      firstName: "Tiffany",
      lastName: "W",
      password: "9586",
      auth_token: "",
    },
    {
      username: "w",
      firstName: "Steph",
      lastName: "Q",
      password: "4487",
      auth_token: "",
    },
  ]);
};
