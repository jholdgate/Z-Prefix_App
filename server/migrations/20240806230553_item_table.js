/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id");
    table.integer("users_id").unsigned(); //foreign key from users table
    table.foreign("users_id").references("users.id").onDelete("CASCADE");
    table.string("item_name");
    table.string("description", 500);
    table.integer("quantity");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable("items", (table) => {
      return knex.schema.hasColumn("items", "users_id").then((exists) => {
        if (exists) {
          table.dropForeign("users_id");
        }
      });
    })
    .then(function () {
      return knex.schema.dropTableIfExists("items");
    });
};
