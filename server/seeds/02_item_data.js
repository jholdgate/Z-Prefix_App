/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("items").del();
  await knex("items").insert([
    {
      item_name: "coffee grinder",
      description: "Precision burr grinder with 40 adjustable settings for the perfect grind every time. Features a quiet DC motor and anti-static technology for mess-free grinding.",
      quantity: 12,
      users_id: 3
    },
    {
      item_name: "ergonomic office chair",
      description: "High-back mesh chair with lumbar support, adjustable armrests, and tilt tension control. Promotes proper posture and reduces fatigue during long work hours.",
      quantity: 8,
      users_id: 2
    },
    {
      item_name: "wireless earbuds",
      description: "True wireless earbuds with active noise cancellation, touch controls, and 24-hour battery life. IPX7 water-resistant for worry-free workouts.",
      quantity: 25,
      users_id: 4
    },
    {
      item_name: "smart thermostat",
      description: "Wi-Fi enabled thermostat with learning capabilities, voice control, and energy-saving features. Compatible with major smart home ecosystems for seamless integration.",
      quantity: 15,
      users_id: 1
    },
    {
      item_name: "air fryer",
      description: "Digital air fryer with 6-quart capacity and 8 preset cooking functions. Cooks food with up to 75% less fat while maintaining a crispy exterior.",
      quantity: 20,
      users_id: 5
    },
    {
      item_name: "yoga mat",
      description: "Extra-thick, non-slip yoga mat made from eco-friendly TPE material. Features alignment lines for proper pose positioning and comes with a carrying strap.",
      quantity: 30,
      users_id: 2
    },
    {
      item_name: "portable power bank",
      description: "20000mAh high-capacity power bank with dual USB ports and fast charging capability. Compact design with LED display showing remaining battery percentage.",
      quantity: 40,
      users_id: 3
    },
    {
      item_name: "blender",
      description: "Professional-grade blender with variable speed control and pulse function. Comes with a 64-oz BPA-free container and patented blade design for smooth blends.",
      quantity: 18,
      users_id: 1
    },
    {
      item_name: "smart door lock",
      description: "Keyless entry door lock with fingerprint scanner, PIN code, and smartphone app control. Auto-lock feature and tamper alarm for enhanced security.",
      quantity: 10,
      users_id: 4
    },
    {
      item_name: "wireless mouse",
      description: "Ergonomic wireless mouse with adjustable DPI settings and silent click technology. Features a rechargeable battery with up to 3 months of use per charge.",
      quantity: 50,
      users_id: 2
    },
    {
      item_name: "indoor herb garden kit",
      description: "Self-watering indoor garden system with LED grow lights and smart soil pods. Includes 6 pre-seeded herb pods and a companion app for care instructions.",
      quantity: 22,
      users_id: 5
    },
    {
      item_name: "robot vacuum cleaner",
      description: "Smart robot vacuum with mapping technology, voice control, and automatic dirt disposal. Self-charging with up to 120 minutes of runtime per charge.",
      quantity: 14,
      users_id: 3
    },
    {
      item_name: "fitness tracker",
      description: "Water-resistant fitness tracker with heart rate monitor, sleep tracking, and 20+ exercise modes. Features a color touchscreen and 7-day battery life.",
      quantity: 35,
      users_id: 1
    },
    {
      item_name: "portable bluetooth speaker",
      description: "Rugged, waterproof bluetooth speaker with 360-degree sound and deep bass. Offers 20 hours of playtime and can be paired with a second speaker for stereo sound.",
      quantity: 28,
      users_id: 4
    },
    {
      item_name: "electric kettle",
      description: "Stainless steel electric kettle with variable temperature control and keep-warm function. Features a gooseneck spout for precise pouring and 1.0L capacity.",
      quantity: 16,
      users_id: 2
    },
    {
      item_name: "wireless charging pad",
      description: "Slim, fast-charging wireless pad compatible with Qi-enabled devices. Features overcharge protection and a non-slip surface for secure charging.",
      quantity: 45,
      users_id: 5
    },
    {
      item_name: "smart light bulbs",
      description: "Wi-Fi enabled LED bulbs with millions of colors and dimmable white light. Can be controlled via smartphone app or voice commands for custom lighting scenes.",
      quantity: 60,
      users_id: 3
    },
    {
      item_name: "food processor",
      description: "Versatile food processor with 11-cup capacity and multiple attachments for slicing, shredding, and kneading. Includes a pulse function for precise control.",
      quantity: 13,
      users_id: 1
    },
    {
      item_name: "leather laptop sleeve",
      description: "Premium leather laptop sleeve with soft microfiber interior and magnetic closure. Features an extra pocket for accessories and fits laptops up to 15 inches.",
      quantity: 24,
      users_id: 4
    },
    {
      item_name: "sous vide precision cooker",
      description: "Wifi-enabled sous vide cooker with precision temperature control and smartphone app. Clamps onto any pot for easy setup and storage.",
      quantity: 9,
      users_id: 2
    },
    {
      item_name: "smart scale",
      description: "Bluetooth-connected scale measuring weight, body fat percentage, and other metrics. Syncs data with fitness apps and supports multiple user profiles.",
      quantity: 19,
      users_id: 5
    },
    {
      item_name: "noise-cancelling headphones",
      description: "Over-ear headphones with adaptive noise cancellation and high-resolution audio. Features touch controls, 30-hour battery life, and foldable design for portability.",
      quantity: 21,
      users_id: 3
    },
    {
      item_name: "cold brew coffee maker",
      description: "Large capacity cold brew maker with fine-mesh filter and airtight lid. Produces smooth, low-acid coffee concentrate that stays fresh in the fridge for up to 2 weeks.",
      quantity: 17,
      users_id: 1
    },
    {
      item_name: "smart indoor camera",
      description: "1080p HD indoor security camera with two-way audio and night vision. Features motion detection alerts, cloud storage options, and works with major smart home systems.",
      quantity: 11,
      users_id: 4
    },
    {
      item_name: "reusable water bottle",
      description: "Vacuum-insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. Features a wide mouth for easy cleaning and filling with ice.",
      quantity: 55,
      users_id: 2
    },
    {
      item_name: "portable projector",
      description: "Mini LED projector with 1080p support and built-in speakers. Offers wireless screen mirroring and 3 hours of battery life for on-the-go entertainment.",
      quantity: 7,
      users_id: 5
    },
    {
      item_name: "smart smoke detector",
      description: "Wi-Fi connected smoke and carbon monoxide detector with voice alerts and smartphone notifications. Features a split-spectrum sensor for early detection.",
      quantity: 23,
      users_id: 3
    },
    {
      item_name: "air purifier",
      description: "HEPA air purifier with activated carbon filter and UV-C light sanitizer. Quietly removes 99.97% of airborne particles and covers rooms up to 300 sq. ft.",
      quantity: 16,
      users_id: 1
    },
    {
      item_name: "electric toothbrush",
      description: "Rechargeable sonic toothbrush with 5 cleaning modes and pressure sensor. Includes a travel case and 2-minute timer with 30-second interval notifications.",
      quantity: 32,
      users_id: 4
    },
    {
      item_name: "slow cooker",
      description: "Programmable slow cooker with 6-quart capacity and removable stoneware insert. Features a 24-hour timer, keep-warm function, and locking lid for easy transport.",
      quantity: 14,
      users_id: 2
    },
    {
      item_name: "smart doorbell",
      description: "Video doorbell with 1080p HD camera, two-way audio, and motion detection. Offers night vision, cloud storage options, and integration with smart home devices.",
      quantity: 18,
      users_id: 5
    },
    {
      item_name: "wireless keyboard",
      description: "Slim, backlit wireless keyboard with multi-device connectivity. Features a rechargeable battery, adjustable backlight brightness, and ergonomic design for comfort.",
      quantity: 26,
      users_id: 3
    },
    {
      item_name: "digital food scale",
      description: "Precise digital kitchen scale with 11 lb capacity and 0.1 oz increments. Features a large LCD display, tare function, and multiple unit conversions.",
      quantity: 29,
      users_id: 1
    },
    {
      item_name: "smart light switch",
      description: "Wi-Fi enabled light switch compatible with existing wiring. Offers scheduling, voice control, and away mode for enhanced home automation and energy savings.",
      quantity: 20,
      users_id: 4
    },
    {
      item_name: "travel adapter",
      description: "All-in-one international travel adapter with 4 USB ports and 1 USB-C port. Compatible with outlets in 150+ countries and features built-in safety shutters.",
      quantity: 38,
      users_id: 2
    },
    {
      item_name: "foam roller",
      description: "High-density foam roller for muscle recovery and myofascial release. Features a textured surface for deep tissue massage and comes in multiple size options.",
      quantity: 27,
      users_id: 5
    },
    {
      item_name: "smart garden sensor",
      description: "Wireless plant sensor that monitors soil moisture, light, and temperature. Syncs with a smartphone app to provide care recommendations for optimal plant growth.",
      quantity: 12,
      users_id: 3
    },
    {
      item_name: "portable hand warmer",
      description: "Rechargeable electric hand warmer with 3 heat settings and power bank function. Provides up to 12 hours of warmth on a single charge for outdoor activities.",
      quantity: 33,
      users_id: 1
    },
    {
      item_name: "gaming mouse pad",
      description: "Large, RGB gaming mouse pad with 16.8 million color options and multiple lighting effects. Features a micro-textured cloth surface and non-slip rubber base.",
      quantity: 42,
      users_id: 4
    },
    {
      item_name: "milk frother",
      description: "Electric milk frother with hot and cold frothing options for perfect lattes and cappuccinos. Features a non-stick interior and auto-off function for safety.",
      quantity: 15,
      users_id: 2
    },
    {
      item_name: "smart plug",
      description: "Wi-Fi enabled smart plug that turns any outlet into a smart outlet. Offers scheduling, voice control, and energy monitoring through a smartphone app.",
      quantity: 48,
      users_id: 5
    },
    {
      item_name: "electric wine opener",
      description: "Rechargeable electric wine opener that effortlessly removes corks with the push of a button. Includes a foil cutter and opens up to 30 bottles on a single charge.",
      quantity: 19,
      users_id: 3
    },
    {
      item_name: "car phone mount",
      description: "Adjustable car phone mount with strong suction cup base and telescopic arm. Compatible with most smartphones and features one-handed operation for easy use.",
      quantity: 36,
      users_id: 1
    },
    {
      item_name: "beard trimmer",
      description: "Waterproof beard trimmer with 20 length settings and self-sharpening blades. Includes multiple attachments for versatile grooming and offers 90 minutes of cordless use.",
      quantity: 22,
      users_id: 4
    },
    {
      item_name: "bamboo cutting board",
      description: "Large bamboo cutting board with juice grooves and carrying handles. Naturally antimicrobial and knife-friendly, perfect for food prep and serving.",
      quantity: 31,
      users_id: 2
    },
    {
      item_name: "smart water bottle",
      description: "Stainless steel water bottle with LED smart lid that tracks water intake and glows to remind you to stay hydrated. Syncs with fitness apps for comprehensive health tracking.",
      quantity: 13,
      users_id: 5
    },
    {
      item_name: "laptop stand",
      description: "Adjustable aluminum laptop stand with ventilated design for improved cooling. Raises screen to eye level for better posture and folds flat for easy portability.",
      quantity: 25,
      users_id: 3
    },
    {
      item_name: "digital meat thermometer",
      description: "Instant-read digital meat thermometer with backlit display and foldable probe. Provides accurate temperature readings in 2-3 seconds for perfect cooking results.",
      quantity: 39,
      users_id: 1
    }
  ]);
};
