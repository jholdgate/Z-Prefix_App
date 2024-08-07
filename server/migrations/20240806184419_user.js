/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("name"); //delete just name and add below references
    // table.string('firstName', 250).notNullable();
    // table.string('lastName', 250);
    // table.string('username', 250);
    // table.string('password', 250);
    // table.string('auth_token', 250);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
