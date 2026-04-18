const cities = [
  {
    id: "paris",
    name: "Paris",
    country: "France",
    continent: "Europe",
    emoji: "🇫🇷",
    tagline: "The City of Light",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    coordinates: { lat: 48.8566, lng: 2.3522 },
    description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Champs-Élysées", "Montmartre"],
    bestTime: "April to June, September to October",
    currency: "Euro (€)",
    language: "French",
    tips: [
      "Buy a museum pass to skip lines at major attractions",
      "The metro is the fastest way to get around — get a Navigo weekly pass",
      "Try a croissant from a local boulangerie, not a tourist café",
      "Book Eiffel Tower tickets online in advance"
    ],
    foods: ["Croissant", "Coq au Vin", "Crème Brûlée", "French Onion Soup", "Macarons"],
    neighborhoods: [
      { name: "Le Marais", vibe: "Historic & trendy, great shopping and falafel" },
      { name: "Saint-Germain-des-Prés", vibe: "Intellectual & elegant, classic cafés" },
      { name: "Montmartre", vibe: "Bohemian & artistic, stunning hilltop views" }
    ]
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    emoji: "🇯🇵",
    tagline: "Where Tradition Meets the Future",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    coordinates: { lat: 35.6762, lng: 139.6503 },
    description: "Tokyo, Japan's busy capital, mixes ultramodern and traditional, from neon-lit skyscrapers to historic temples. The city's many museums offer exhibits ranging from classical art to a reconstructed kabuki theater.",
    highlights: ["Senso-ji Temple", "Shibuya Crossing", "Meiji Shrine", "Akihabara", "Tokyo Skytree"],
    bestTime: "March to May (cherry blossom), October to November",
    currency: "Japanese Yen (¥)",
    language: "Japanese",
    tips: [
      "Get a Suica or Pasmo card for seamless train travel",
      "Convenience store food (konbini) is surprisingly excellent",
      "Bow slightly when greeting people — it's a sign of respect",
      "Carry cash — many small restaurants don't accept cards"
    ],
    foods: ["Sushi", "Ramen", "Tempura", "Takoyaki", "Matcha Everything"],
    neighborhoods: [
      { name: "Shibuya", vibe: "Youth culture, shopping, nightlife" },
      { name: "Asakusa", vibe: "Traditional, temples, old-town charm" },
      { name: "Shinjuku", vibe: "Busy, entertainment, neon lights" }
    ]
  },
  {
    id: "new-york",
    name: "New York City",
    country: "United States",
    continent: "North America",
    emoji: "🇺🇸",
    tagline: "The City That Never Sleeps",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    coordinates: { lat: 40.7128, lng: -74.0060 },
    description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial, and cultural centers.",
    highlights: ["Central Park", "Statue of Liberty", "Times Square", "Brooklyn Bridge", "Metropolitan Museum of Art"],
    bestTime: "April to June, September to November",
    currency: "US Dollar ($)",
    language: "English",
    tips: [
      "Walk or take the subway — taxis are slow in traffic",
      "Many museums have 'pay what you wish' days",
      "Eat your way through the boroughs — NYC has the best food diversity on Earth",
      "Catch a sunset from the Top of the Rock or Brooklyn Bridge Park"
    ],
    foods: ["New York Pizza", "Bagels", "Pastrami Sandwich", "Cheesecake", "Hot Dogs"],
    neighborhoods: [
      { name: "Williamsburg", vibe: "Hipster, vintage shops, waterfront bars" },
      { name: "West Village", vibe: "Charming, tree-lined streets, jazz clubs" },
      { name: "Harlem", vibe: "Rich culture, soul food, gospel music" }
    ]
  },
  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "🇬🇧",
    tagline: "A World in One City",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    coordinates: { lat: 51.5074, lng: -0.1278 },
    description: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. Its center contains the imposing Houses of Parliament, the iconic Big Ben, and Westminster Abbey.",
    highlights: ["British Museum", "Tower of London", "Buckingham Palace", "Big Ben", " Tate Modern"],
    bestTime: "May to September",
    currency: "British Pound (£)",
    language: "English",
    tips: [
      "Most major museums and galleries are free to enter",
      "Get an Oyster card or use contactless for public transport",
      "Afternoon tea is a must — try smaller tearooms for better value",
      "Explore on foot — many landmarks are within walking distance of each other"
    ],
    foods: ["Fish & Chips", "Full English Breakfast", "Pie & Mash", "Afternoon Tea", "Sunday Roast"],
    neighborhoods: [
      { name: "Camden", vibe: "Alternative, markets, live music" },
      { name: "Notting Hill", vibe: "Pastel houses, Portobello Market, charming" },
      { name: "Shoreditch", vibe: "Street art, tech scene, nightlife" }
    ]
  },
  {
    id: "rio-de-janeiro",
    name: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
    emoji: "🇧🇷",
    tagline: "The Marvelous City",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
    coordinates: { lat: -22.9068, lng: -43.1729 },
    description: "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, the 38m Christ the Redeemer statue atop Mount Corcovado, and Sugarloaf Mountain, a granite peak with cable cars to its summit.",
    highlights: ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana Beach", "Tijuca Forest", "Selarón Steps"],
    bestTime: "December to March (summer), February for Carnival",
    currency: "Brazilian Real (R$)",
    language: "Portuguese",
    tips: [
      "Take the train up to Christ the Redeemer early morning to avoid crowds",
      "Carnival is unforgettable but book months in advance",
      "Be cautious with valuables on the beach — leave what you can't afford to lose",
      "Try açaí from a beach vendor — it's nothing like the frozen kind back home"
    ],
    foods: ["Feijoada", "Pão de Queijo", "Brigadeiro", "Coxinha", "Açaí"],
    neighborhoods: [
      { name: "Santa Teresa", vibe: "Artistic, colonial architecture, tram rides" },
      { name: "Ipanema", vibe: "Beachy, upscale, great restaurants" },
      { name: "Lapa", vibe: "Nightlife, samba, arches (Arcos da Lapa)" }
    ]
  },
  {
    id: "sydney",
    name: "Sydney",
    country: "Australia",
    continent: "Oceania",
    emoji: "🇦🇺",
    tagline: "The Harbour City",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    coordinates: { lat: -33.8688, lng: 151.2093 },
    description: "Sydney, capital of New South Wales, is one of Australia's largest cities. Best known for its harbour-front Sydney Opera House, with a distinctive sail-shaped design, and the massive Darling Harbour and Circular Quay.",
    highlights: ["Sydney Opera House", "Harbour Bridge", "Bondi Beach", "Royal Botanic Garden", "Taronga Zoo"],
    bestTime: "September to November, March to May",
    currency: "Australian Dollar (A$)",
    language: "English",
    tips: [
      "Do the Bondi to Coogee coastal walk — it's free and stunning",
      "Take the ferry across the harbour for the best views of the Opera House",
      "SLANG (Sydney Language) — 'arvo' = afternoon, 'brekkie' = breakfast",
      "Wear sunscreen — the UV index is extremely high year-round"
    ],
    foods: ["Meat Pie", "Vegemite Toast", "Barramundi", "Pavlova", "Tim Tam"],
    neighborhoods: [
      { name: "Surry Hills", vibe: "Café culture, vintage, weekend markets" },
      { name: "Manly", vibe: "Surf town feel, beachside dining" },
      { name: "Newtown", vibe: "Eclectic, street art, alternative" }
    ]
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    continent: "Asia",
    emoji: "🇦🇪",
    tagline: "The City of Gold",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    coordinates: { lat: 25.2048, lng: 55.2708 },
    description: "Dubai is a city and emirate in the UAE known for luxury shopping, ultramodern architecture, and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyline.",
    highlights: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Dubai Marina", "Gold Souk"],
    bestTime: "November to March",
    currency: "UAE Dirham (AED)",
    language: "Arabic (English widely spoken)",
    tips: [
      "Friday is the weekend in Dubai — plan accordingly",
      "Dress modestly in public places outside tourist resorts",
      "The metro is clean, cheap, and connects most major attractions",
      "Visit the old town (Al Fahidi) for a break from the glitz"
    ],
    foods: ["Shawarma", "Al Harees", "Luqaimat", "Camel Milk Chocolate", "Machboos"],
    neighborhoods: [
      { name: "Downtown Dubai", vibe: "Glamorous, iconic landmarks, luxury" },
      { name: "Al Fahidi", vibe: "Historic, art galleries, wind towers" },
      { name: "JBR Walk", vibe: "Beachfront dining, lively, family-friendly" }
    ]
  },
  {
    id: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    emoji: "🇹🇭",
    tagline: "The City of Angels",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
    coordinates: { lat: 13.7563, lng: 100.5018 },
    description: "Bangkok, Thailand's capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district.",
    highlights: ["Grand Palace", "Wat Arun", "Chatuchak Market", "Khao San Road", "Jim Thompson House"],
    bestTime: "November to February",
    currency: "Thai Baht (฿)",
    language: "Thai",
    tips: [
      "Street food is safe and incredible — follow the locals",
      "Use the BTS Skytrain and river boats to avoid traffic",
      "Always remove shoes before entering temples",
      "Negotiate tuk-tuk prices before getting in"
    ],
    foods: ["Pad Thai", "Som Tum (Papaya Salad)", "Tom Yum Goong", "Mango Sticky Rice", "Green Curry"],
    neighborhoods: [
      { name: "Old City (Rattanakosin)", vibe: "Temples, history, grand architecture" },
      { name: "Sukhumvit", vibe: "Modern, shopping, international dining" },
      { name: "Chinatown (Yaowarat)", vibe: "Street food paradise, bustling, gold shops" }
    ]
  },
  {
    id: "rome",
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    emoji: "🇮🇹",
    tagline: "The Eternal City",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    coordinates: { lat: 41.9028, lng: 12.4964 },
    description: "Rome, Italy's capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture, and culture. Ancient ruins such as the Roman Forum and the Colosseum recall the power of the former Roman Empire.",
    highlights: ["Colosseum", "Vatican Museums", "Trevi Fountain", "Pantheon", "Roman Forum"],
    bestTime: "April to June, September to October",
    currency: "Euro (€)",
    language: "Italian",
    tips: [
      "Book Vatican and Colosseum tickets online well in advance",
      "Drink from the public nasoni fountains — the water is excellent",
      "Have aperitivo (like Aperol Spritz) before dinner — it's a ritual",
      "Never order cappuccino after 11am — Romans consider it a breakfast drink"
    ],
    foods: ["Cacio e Pepe", "Supplì", "Carbonara", "Gelato", "Pizza al Taglio"],
    neighborhoods: [
      { name: "Trastevere", vibe: "Romantic, cobblestone streets, nightlife" },
      { name: "Monti", vibe: "Hip, vintage shops, great restaurants" },
      { name: "Testaccio", vibe: "Authentic food scene, local market" }
    ]
  },
  {
    id: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    emoji: "🇿🇦",
    tagline: "The Mother City",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    coordinates: { lat: -33.9249, lng: 18.4241 },
    description: "Cape Town is a port city on the southwest coast of South Africa, on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain's flat top, from which sweeping views of the city await.",
    highlights: ["Table Mountain", "Cape of Good Hope", "Robben Island", "V&A Waterfront", "Boulders Beach Penguins"],
    bestTime: "October to March",
    currency: "South African Rand (R)",
    language: "English, Afrikaans, Xhosa",
    tips: [
      "Book the Table Mountain cable car for a clear morning",
      "Drive Chapman's Peak for one of the world's best coastal roads",
      "Visit Boulders Beach to walk among African penguins",
      "Try a braai (South African BBQ) — it's a cultural experience"
    ],
    foods: ["Bobotie", "Biltong", "Braai", "Malva Pudding", "Cape Malay Curry"],
    neighborhoods: [
      { name: "Bo-Kaap", vibe: "Colorful houses, Cape Malay culture, spice shops" },
      { name: "Woodstock", vibe: "Creative hub, street art, markets" },
      { name: "Camps Bay", vibe: "Beachfront, upscale, sunset bars" }
    ]
  },
  {
    id: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    continent: "Europe",
    emoji: "🇹🇷",
    tagline: "Where East Meets West",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
    coordinates: { lat: 41.0082, lng: 28.9784 },
    description: "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here, with the iconic Hagia Sophia and Blue Mosque.",
    highlights: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar", "Topkapi Palace", "Bosphorus Cruise"],
    bestTime: "April to May, September to November",
    currency: "Turkish Lira (₺)",
    language: "Turkish",
    tips: [
      "Get an Istanbulkart for discounted public transport",
      "Bargain at the Grand Bazaar — start at half the asking price",
      "Take a Bosphorus ferry ride at sunset for magical views",
      "Turkish breakfast is an event — find a local spot and linger"
    ],
    foods: ["Kebabs", "Baklava", "Turkish Breakfast", "Lahmacun", "Simit"],
    neighborhoods: [
      { name: "Sultanahmet", vibe: "Historic heart, major sights, atmospheric" },
      { name: "Kadıköy", vibe: "Asian side, food markets, youthful" },
      { name: "Beyoğlu", vibe: "Artsy, nightlife, İstiklal Street" }
    ]
  },
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    continent: "Africa",
    emoji: "🇲🇦",
    tagline: "The Red City",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80",
    coordinates: { lat: 31.6295, lng: -7.9811 },
    description: "Marrakech, a former imperial city in western Morocco, is a major economic center and home to mosques, palaces, and gardens. The medina is a densely packed, walled medieval city dating to the Berber Empire.",
    highlights: ["Jemaa el-Fnaa", "Majorelle Garden", "Bahia Palace", "Koutoubia Mosque", "Souks"],
    bestTime: "March to May, September to November",
    currency: "Moroccan Dirham (MAD)",
    language: "Arabic, French, Berber",
    tips: [
      "Haggling in the souks is expected — enjoy it as part of the experience",
      "Stay in a traditional riad for an authentic experience",
      "Visit Jemaa el-Fnaa at sunset for the full spectacle",
      "Hire a local guide for the medina — it's easy to get lost"
    ],
    foods: ["Tagine", "Couscous", "Pastilla", "Mint Tea", "Harira Soup"],
    neighborhoods: [
      { name: "Medina", vibe: "Labyrinthine souks, riads, bustling energy" },
      { name: "Gueliz", vibe: "Modern, French-influenced, galleries" },
      { name: "Kasbah", vibe: "Historic, quieter, traditional tanneries" }
    ]
  }
];

export default cities;
