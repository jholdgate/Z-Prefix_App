/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("items").del();
  await knex("items").insert([
    {
      item_name: "backpack",
      description: "Durable and spacious for all your carrying needs.",
      quantity: 12,
      users_id: 3
    },
    {
      item_name: "lamp",
      description: "Bright LED lamp with adjustable brightness.",
      quantity: 6,
      users_id: 2
    },
    {
      item_name: "notebook",
      description: "A5 size with 100 pages for notes and sketches.",
      quantity: 15,
      users_id: 4
    },
    {
      item_name: "coffee maker",
      description: "Brews up to 12 cups of coffee at once.",
      quantity: 4,
      users_id: 1
    },
    {
      item_name: "water bottle",
      description: "Stainless steel, keeps drinks cold for 24 hours.",
      quantity: 20,
      users_id: 5
    },
    {
      item_name: "umbrella",
      description: "Compact and wind-resistant, perfect for rainy days.",
      quantity: 10,
      users_id: 2
    },
    {
      item_name: "keyboard",
      description: "Mechanical keyboard with RGB backlighting.",
      quantity: 8,
      users_id: 3
    },
    {
      item_name: "headphones",
      description: "Noise-cancelling with high-fidelity sound.",
      quantity: 7,
      users_id: 4
    },
    {
      item_name: "charger",
      description: "Fast-charging cable for smartphones.",
      quantity: 25,
      users_id: 1
    },
    {
      item_name: "mug",
      description: "Ceramic mug with a unique design.",
      quantity: 30,
      users_id: 5
    },
    {
      item_name: "planner",
      description: "Weekly planner to organize your schedule.",
      quantity: 11,
      users_id: 2
    },
    {
      item_name: "bottle opener",
      description: "Handheld tool for opening bottles easily.",
      quantity: 5,
      users_id: 3
    },
    {
      item_name: "mouse pad",
      description: "Soft surface with a non-slip backing.",
      quantity: 18,
      users_id: 4
    },
    {
      item_name: "desk organizer",
      description: "Keeps your desk tidy with compartments for pens and paper.",
      quantity: 9,
      users_id: 1
    },
    {
      item_name: "sunglasses",
      description: "UV-protected lenses for sunny days.",
      quantity: 13,
      users_id: 5
    },
    {
      item_name: "flashlight",
      description: "Portable flashlight with adjustable beam.",
      quantity: 22,
      users_id: 2
    },
    {
      item_name: "travel pillow",
      description: "Memory foam pillow for comfortable travel.",
      quantity: 6,
      users_id: 3
    },
    {
      item_name: "notepad",
      description: "Sticky notes for quick reminders and messages.",
      quantity: 16,
      users_id: 4
    },
    {
      item_name: "keychain",
      description: "Stylish keychain with a built-in flashlight.",
      quantity: 14,
      users_id: 1
    },
    {
      item_name: "waterproof case",
      description: "Protects your phone from water damage.",
      quantity: 7,
      users_id: 5
    },
    {
      item_name: "tote bag",
      description: "Eco-friendly bag for everyday use.",
      quantity: 19,
      users_id: 2
    },
    {
      item_name: "cushion",
      description: "Soft cushion for added comfort on chairs.",
      quantity: 8,
      users_id: 3
    },
    {
      item_name: "blanket",
      description: "Warm and cozy blanket for cold nights.",
      quantity: 11,
      users_id: 4
    },
    {
      item_name: "thermos",
      description: "Keeps drinks hot or cold for hours.",
      quantity: 9,
      users_id: 1
    },
    {
      item_name: "umbrella stand",
      description: "Holds multiple umbrellas, sturdy and stylish.",
      quantity: 5,
      users_id: 5
    },
    {
      item_name: "notebook stand",
      description: "Adjustable stand for comfortable note-taking.",
      quantity: 12,
      users_id: 2
    },
    {
      item_name: "blender",
      description: "High-power blender for smoothies and soups.",
      quantity: 3,
      users_id: 3
    },
    {
      item_name: "wristwatch",
      description: "Classic design with a leather strap.",
      quantity: 8,
      users_id: 4
    },
    {
      item_name: "scissors",
      description: "Sharp scissors for precise cutting.",
      quantity: 15,
      users_id: 1
    },
    {
      item_name: "flash drive",
      description: "16GB USB flash drive for data storage.",
      quantity: 20,
      users_id: 5
    },
    {
      item_name: "pillow",
      description: "Soft and comfortable pillow for a good night’s sleep.",
      quantity: 18,
      users_id: 2
    },
    {
      item_name: "thermometer",
      description: "Digital thermometer with quick reading.",
      quantity: 7,
      users_id: 3
    },
    {
      item_name: "alarm clock",
      description: "Wake up on time with this classic alarm clock.",
      quantity: 10,
      users_id: 4
    },
    {
      item_name: "camera",
      description: "High-resolution camera for capturing memories.",
      quantity: 5,
      users_id: 1
    },
    {
      item_name: "mouse",
      description: "Ergonomic mouse with extra buttons.",
      quantity: 14,
      users_id: 5
    },
    {
      item_name: "laptop stand",
      description: "Adjustable stand for improved ergonomics.",
      quantity: 9,
      users_id: 2
    },
    {
      item_name: "candle",
      description: "Scented candle for a relaxing atmosphere.",
      quantity: 13,
      users_id: 3
    },
    {
      item_name: "exercise mat",
      description: "Non-slip mat for comfortable workouts.",
      quantity: 6,
      users_id: 4
    },
    {
      item_name: "spatula",
      description: "Silicone spatula for easy cooking and baking.",
      quantity: 21,
      users_id: 1
    },
    {
      item_name: "salt grinder",
      description: "Adjustable grinder for seasoning.",
      quantity: 8,
      users_id: 5
    },
    {
      item_name: "rug",
      description: "Soft and stylish rug for home decor.",
      quantity: 7,
      users_id: 2
    },
    {
      item_name: "hair dryer",
      description: "Powerful hair dryer with multiple heat settings.",
      quantity: 12,
      users_id: 3
    },
    {
      item_name: "screwdriver set",
      description: "Includes various sizes for all your needs.",
      quantity: 16,
      users_id: 4
    },
    {
      item_name: "book light",
      description: "Clip-on light for reading in low light.",
      quantity: 10,
      users_id: 1
    },
    {
      item_name: "scarf",
      description: "Warm scarf made from soft wool.",
      quantity: 14,
      users_id: 5
    },
    {
      item_name: "notepad holder",
      description: "Holder for keeping notepads organized.",
      quantity: 11,
      users_id: 2
    },
    {
      item_name: "pocket knife",
      description: "Compact multi-tool with several functions.",
      quantity: 9,
      users_id: 3
    },
    {
      item_name: "desk lamp",
      description: "Adjustable lamp with LED lighting.",
      quantity: 6,
      users_id: 4
    },
    {
      item_name: "guitar",
      description: "Acoustic guitar with a full range of tones.",
      quantity: 3,
      users_id: 1
    },
    {
      item_name: "jacket",
      description: "Warm and stylish jacket for winter.",
      quantity: 8,
      users_id: 5
    },
    {
      item_name: "tumbler",
      description: "Insulated tumbler for hot or cold drinks.",
      quantity: 17,
      users_id: 2
    },
    {
      item_name: "coffee grinder",
      description: "Grinds coffee beans fresh for each brew.",
      quantity: 12,
      users_id: 3
    },
    {
      item_name: "air purifier",
      description: "Cleans the air for a healthier environment.",
      quantity: 5,
      users_id: 4
    },
  ]);
};
