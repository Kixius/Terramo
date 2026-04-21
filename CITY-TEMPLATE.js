// ============================================================
// CITY TEMPLATE — Copy this when adding/editing a city
// Barcelona is the gold standard. Match this quality.
// ============================================================

// =============================================================
// PART 1: cities.js  (src/data/cities.js)
// Add this object BEFORE the closing `];` at the end of the array.
// =============================================================

  {
    id: "city-id",                          // lowercase, hyphenated, unique
    name: "City Name",
    country: "Country Name",
    continent: "Europe",                    // Europe | Asia | North America | South America | Africa | Oceania
    emoji: "🇪🇸",                           // flag emoji for the country
    tagline: "Short catchy slogan",         // max ~40 chars
    image: "https://images.unsplash.com/photo-XXXXX?w=800&q=80",  // hero image
    images: [
      { url: "https://images.unsplash.com/photo-XXXXX?w=800&q=80" },   // gallery 1
      { url: "https://images.unsplash.com/photo-XXXXX?w=800&q=80" },   // gallery 2
      { url: "https://images.unsplash.com/photo-XXXXX?w=800&q=80" }    // gallery 3
    ],
    coordinates: {
      lat: 41.3874,                         // Google Maps latitude
      lng: 2.1686                           // Google Maps longitude
    },
    budget: {
      low: {
        accommodation: 25,                  // USD per day
        food: 11,
        attractions: 5,
        transport: 4,
        total: 45                           // must equal sum of above
      },
      mid: {
        accommodation: 70,
        food: 32,
        attractions: 14,
        transport: 9,
        total: 125
      },
      high: {
        accommodation: 180,
        food: 68,
        attractions: 27,
        transport: 23,
        total: 298
      }
    },
    description: "2-3 sentences capturing the city's essence, history, and vibe. What makes it special and worth visiting?",
    highlights: [
      "Top landmark 1",
      "Top landmark 2",
      "Top landmark 3",
      "Top landmark 4",
      "Top landmark 5"
    ],
    bestTime: "Month to Month",
    currency: "Currency Name (Symbol)",
    language: "Language",
    tips: [
      "Real actionable tip — not generic advice",
      "Real actionable tip — something only a local would know",
      "Real actionable tip — practical, specific",
      "Real actionable tip — hidden gem or money-saver"
    ],
    foods: [
      "Signature Dish 1",
      "Signature Dish 2",
      "Signature Dish 3",
      "Signature Dish 4",
      "Signature Dish 5"
    ],
    neighborhoods: [
      { name: "Neighborhood 1", vibe: "Short description of atmosphere" },
      { name: "Neighborhood 2", vibe: "Short description of atmosphere" },
      { name: "Neighborhood 3", vibe: "Short description of atmosphere" }
    ]
  },


// =============================================================
// PART 2: itineraries.js  (src/data/itineraries.js)
// Add this object BEFORE the closing `];` at the end of the array.
// =============================================================

  {
    "cityId": "city-id",         // must match the id in cities.js
    "days3": [
      {
        "title": "Day 1 Theme",
        "morning": {
          "activity": "Activity Name",
          "description": "1-2 sentences describing the place and what makes it special",
          "location": "Full address or area",
          "cost": "€XX or Free",
          "duration": "X hours",
          "tip": "A real, actionable hint — NOT copied from the description. Something specific and useful.",
          "coordinates": { "lat": 41.4036, "lng": 2.1744 }
        },
        "afternoon": {
          "activity": "Activity Name",
          "description": "1-2 sentences",
          "location": "Address",
          "cost": "€XX or Free",
          "duration": "X hours",
          "tip": "Unique actionable hint",
          "coordinates": { "lat": 0.0, "lng": 0.0 }
        },
        "evening": {
          "activity": "Evening-Appropriate Activity",
          "description": "1-2 sentences — must be something open/enjoyable at night",
          "location": "Address",
          "cost": "€XX or Free",
          "duration": "X hours",
          "tip": "Unique actionable hint",
          "coordinates": { "lat": 0.0, "lng": 0.0 }
        }
      },
      // ... 2 more day objects for days3 (total 3 days = 9 activities)
    ],
    "days5": [
      // 5 day objects (total 15 activities)
    ],
    "days7": [
      // 7 day objects (total 21 activities)
    ]
  }


// =============================================================
// RULES — Read before editing any city
// =============================================================
//
// 1. NO RECURRING ACTIVITIES
//    - Zero repeats within any single plan (3-day, 5-day, or 7-day)
//    - 3-day plan = 9 unique activities
//    - 5-day plan = 15 unique activities
//    - 7-day plan = 21 unique activities
//
// 2. UNIQUE TIPS (never copy from description)
//    - Each tip is a real, actionable hint
//    - No two tips in the same city say the same thing
//    - Example GOOD tip: "Book the tower access — the extra €7 is worth the rooftop view"
//    - Example BAD tip: "Visit this famous landmark" (useless) or copying the description
//
// 3. EVENING SLOT RULES (opening hours)
//    - Museums, galleries, churches, markets → morning or afternoon ONLY
//    - Evening must be: restaurants, nightlife districts, waterfront walks,
//      light shows, observatories, night tours, concerts, neighborhood strolls
//
// 4. GEOGRAPHIC FLOW
//    - Activities on the same day should be near each other
//    - Group by neighborhood/area to minimize travel time
//
// 5. IMAGES
//    - Verify Unsplash URLs actually show the correct city
//    - Use format: https://images.unsplash.com/photo-XXXXX?w=800&q=80
//    - Test with: analyze_image tool or open in browser
//
// 6. TIPS vs DESCRIPTIONS (cities.js)
//    - Tips = practical advice (when to go, how to save money, hidden tricks)
//    - NOT generic ("visit this beautiful place") or restating the obvious
//
// 7. BUDGET TOTALS
//    - total must equal accommodation + food + attractions + transport
//    - All values in USD per day
