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
      username: "anna.smith",
      firstName: "Anna",
      lastName: "Smith",
      password: "abcd",
      auth_token: ""
    },
    {
      username: "brian.johnson",
      firstName: "Brian",
      lastName: "Johnson",
      password: "efgh",
      auth_token: ""
    },
    {
      username: "catherine.williams",
      firstName: "Catherine",
      lastName: "Williams",
      password: "ijkl",
      auth_token: ""
    },
    {
      username: "david.brown",
      firstName: "David",
      lastName: "Brown",
      password: "mnop",
      auth_token: ""
    },
    {
      username: "emily.jones",
      firstName: "Emily",
      lastName: "Jones",
      password: "qrst",
      auth_token: ""
    }
  ]);
};
