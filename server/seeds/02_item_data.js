/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("items").del();
  await knex("items").insert([
    {
      item_name: "shoes",
      description: "little bit of tis and that...",
      quantity: 8,
      users_id: 1,
    },
    {
      item_name: "shirts",
      description: "little bit of that and this...",
      quantity: 20,
      users_id: 1,
    },
    {
      item_name: "pants",
      description: "little bit of htis and that...",
      quantity: 15,
      users_id: 1,
    },
  ]);
};
