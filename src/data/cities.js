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
  },
{
    id: "aachen",
    name: "Aachen",
    country: "Germany",
    continent: "Europe",
    emoji: "🇩🇪",
    tagline: "Charlemagne's Imperial City",
    image: "https://images.unsplash.com/photo-1555990538-1e15f46bf516?w=800&q=80",
    coordinates: { lat: 50.7753, lng: 6.0839 },
    description: "Aachen is a historic spa city in western Germany, renowned as the favored residence of Charlemagne and the coronation site of German kings for centuries. Its stunning cathedral, a UNESCO World Heritage Site, stands as one of the oldest in Europe.",
    highlights: ["Aachen Cathedral", "Elisenbrunnen", "Couven Museum", "Carolus Thermen Spa", "Ludwig Forum"],
    bestTime: "May to September",
    currency: "Euro (€)",
    language: "German",
    tips: [
      "Visit the cathedral early morning to avoid tour groups",
      "Try Aachener Printen — the city's famous spiced gingerbread",
      "The Christmas market around the cathedral is one of Germany's most beautiful",
      "Relax at Carolus Thermen thermal baths after a day of sightseeing"
    ],
    foods: ["Aachener Printen", "Sauerbraten", "Reibekuchen", "Rheinischer Sauerbraten", "Puffert"],
    neighborhoods: [
      { name: "Altstadt", vibe: "Historic center, cathedral, charming squares" },
      { name: "Pontviertel", vibe: "Student quarter, lively bars and cafés" },
      { name: "Frankenberg", vibe: "Green, residential, close to nature trails" }
    ]
  },
  {
    id: "aarhus",
    name: "Aarhus",
    country: "Denmark",
    continent: "Europe",
    emoji: "🇩🇰",
    tagline: "The City of Smiles",
    image: "https://images.unsplash.com/photo-1599069530861-0399738d5460?w=800&q=80",
    coordinates: { lat: 56.1629, lng: 10.2039 },
    description: "Aarhus is Denmark's second-largest city, a vibrant university town blending Viking history with cutting-edge architecture. Its cultural scene punches well above its weight, with world-class museums and a thriving food movement.",
    highlights: ["ARoS Art Museum", "Den Gamle By", "Aarhus Cathedral", "Moesgaard Museum", "The Iceberg Building"],
    bestTime: "June to August",
    currency: "Danish Krone (kr)",
    language: "Danish",
    tips: [
      "Don't miss the rainbow panorama walkway atop ARoS museum",
      "Rent a bike — Aarhus is incredibly cyclist-friendly",
      "Visit Den Gamle By (The Old Town) for a living history experience",
      "Try smørrebrød (open-faced sandwiches) at a local café"
    ],
    foods: ["Smørrebrød", "Stegt Flæsk", "Frikadeller", "Æbleskiver", "Rødgrød med Fløde"],
    neighborhoods: [
      { name: "Latinerkvarteret", vibe: "Latin Quarter, cobblestone streets, boutiques" },
      { name: "Åboulevarden", vibe: "Riverfront cafés, nightlife, canal walks" },
      { name: "Frederiksbjerg", vibe: "Trendy, food markets, local shops" }
    ]
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    continent: "Europe",
    emoji: "🇳🇱",
    tagline: "The Venice of the North",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5571?w=800&q=80",
    coordinates: { lat: 52.3676, lng: 4.9041 },
    description: "Amsterdam, the capital of the Netherlands, is known for its artistic heritage, elaborate canal system, and narrow houses with gabled facades. The city's museums house works by Rembrandt, Vermeer, and Van Gogh.",
    highlights: ["Rijksmuseum", "Van Gogh Museum", "Anne Frank House", "Vondelpark", "Jordaan Canal Ring"],
    bestTime: "April to May (tulip season), June to September",
    currency: "Euro (€)",
    language: "Dutch",
    tips: [
      "Book Anne Frank House tickets weeks in advance — they sell out fast",
      "Rent a bicycle to explore like a local — but watch out for tram tracks",
      "Visit the Rijksmuseum on a weekday morning for fewer crowds",
      "Explore the Jordaan neighborhood for hidden courtyards and brown cafés"
    ],
    foods: ["Stroopwafel", "Bitterballen", "Herring (Haring)", "Poffertjes", "Dutch Cheese (Gouda/Edam)"],
    neighborhoods: [
      { name: "Jordaan", vibe: "Quaint canals, art galleries, cozy brown cafés" },
      { name: "De Pijp", vibe: "Bohemian, diverse food, Albert Cuyp Market" },
      { name: "Oud-Zuid", vibe: "Elegant, museums, leafy streets" }
    ]
  },
  {
    id: "andorra-la-vella",
    name: "Andorra la Vella",
    country: "Andorra",
    continent: "Europe",
    emoji: "🇦🇩",
    tagline: "Pyrenean Paradise",
    image: "https://images.unsplash.com/photo-1559113202-c916b8e44373?w=800&q=80",
    coordinates: { lat: 42.5063, lng: 1.5218 },
    description: "Andorra la Vella is the capital of the tiny Principality of Andorra, nestled high in the Pyrenees between France and Spain. It's known as a shopping haven with duty-free goods and as a gateway to excellent ski resorts.",
    highlights: ["Casa de la Vall", "Church of Sant Esteve", "Vallnord Ski Resort", "Caldea Spa", "Pont de Paris"],
    bestTime: "December to March (skiing), June to September (hiking)",
    currency: "Euro (€)",
    language: "Catalan",
    tips: [
      "Shop duty-free — electronics, alcohol, and perfume are significantly cheaper",
      "Visit Caldea thermal spa for the largest spa complex in Southern Europe",
      "Bring hiking boots — the Pyrenean trails are spectacular in summer",
      "Learn a few Catalan phrases — locals appreciate the effort"
    ],
    foods: ["Trinxat", "Escudella", "Coca Andorrana", "Formatge de Tupí", "Crema Andorrana"],
    neighborhoods: [
      { name: "Barri Antic", vibe: "Old town, stone buildings, historic charm" },
      { name: "Avinguda Meritxell", vibe: "Main shopping street, commercial buzz" },
      { name: "La Massana", vibe: "Mountain village feel, ski access, nature" }
    ]
  },
  {
    id: "ankara",
    name: "Ankara",
    country: "Turkey",
    continent: "Europe",
    emoji: "🇹🇷",
    tagline: "Turkey's Historic Capital",
    image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=800&q=80",
    coordinates: { lat: 39.9334, lng: 32.8597 },
    description: "Ankara is Turkey's modern capital and second-largest city, a blend of ancient history and contemporary government architecture. The city sits at the heart of the Anatolian plateau and houses the stunning Anıtkabir, Mustafa Kemal Atatürk's monumental mausoleum.",
    highlights: ["Anıtkabir", "Museum of Anatolian Civilizations", "Ankara Castle", "Kocatepe Mosque", "Atakule Tower"],
    bestTime: "April to June, September to November",
    currency: "Turkish Lira (₺)",
    language: "Turkish",
    tips: [
      "Allocate at least half a day for Anıtkabir — the changing of the guard is moving",
      "The Museum of Anatolian Civilizations is one of the world's finest archaeological museums",
      "Take the cable car up Atakule for panoramic city views",
      "Explore the old citadel neighborhood for authentic atmosphere"
    ],
    foods: ["Ankara Tandır", "Beypazarı Kurusu", "Döner Kebab", "Bazlama", "Simit"],
    neighborhoods: [
      { name: "Kızılay", vibe: "City center, shopping, bustling squares" },
      { name: "Ulus", vibe: "Historic core, government buildings, traditional markets" },
      { name: "Çankaya", vibe: "Diplomatic quarter, embassies, green and quiet" }
    ]
  },
  {
    id: "antwerp",
    name: "Antwerp",
    country: "Belgium",
    continent: "Europe",
    emoji: "🇧🇪",
    tagline: "The Diamond Capital of the World",
    image: "https://images.unsplash.com/photo-1608159477800-eeb264f9ef60?w=800&q=80",
    coordinates: { lat: 51.2194, lng: 4.4025 },
    description: "Antwerp is a port city in Belgium known as a global diamond trading hub and the home of Baroque master Peter Paul Rubens. Its medieval architecture, cutting-edge fashion scene, and legendary beer culture make it one of Europe's most underrated destinations.",
    highlights: ["Cathedral of Our Lady", "Rubens House", "Antwerp Central Station", "MAS Museum", "Grote Markt"],
    bestTime: "April to September",
    currency: "Euro (€)",
    language: "Dutch",
    tips: [
      "Antwerp Central Station is stunning — arrive early just to admire the architecture",
      "Visit the Rubens House to see where the master lived and worked",
      "Explore the fashion district around Nationalestraat for cutting-edge Belgian design",
      "Belgian fries should be eaten with mayonnaise — trust the locals"
    ],
    foods: ["Belgian Waffles", "Moules-frites", "Stoofvlees", "Belgian Chocolate", "Elixir d'Anvers"],
    neighborhoods: [
      { name: "Het Zuid", vibe: "Artistic, museums, trendy restaurants" },
      { name: "Eilandje", vibe: "Docklands reborn, MAS museum, waterfront bars" },
      { name: "De Coninckplein", vibe: "Diverse, literary, antiques district" }
    ]
  },
  {
    id: "athens",
    name: "Athens",
    country: "Greece",
    continent: "Europe",
    emoji: "🇬🇷",
    tagline: "The Cradle of Western Civilization",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80",
    coordinates: { lat: 37.9838, lng: 23.7275 },
    description: "Athens, the capital of Greece, is one of the world's oldest cities with a recorded history spanning over 3,400 years. Dominated by the iconic Parthenon atop the Acropolis, it seamlessly weaves ancient ruins into a vibrant modern metropolis.",
    highlights: ["Acropolis & Parthenon", "Plaka District", "National Archaeological Museum", "Monastiraki Square", "Temple of Olympian Zeus"],
    bestTime: "March to May, September to November",
    currency: "Euro (€)",
    language: "Greek",
    tips: [
      "Visit the Acropolis right at opening time (8am) to beat the heat and crowds",
      "Wear sturdy shoes — ancient marble paths are extremely slippery",
      "Watch the sunset from Lycabettus Hill for panoramic city views",
      "Eat at a taverna in Plaka for authentic Greek cuisine with a view of the Acropolis"
    ],
    foods: ["Souvlaki", "Moussaka", "Spanakopita", "Greek Salad", "Baklava"],
    neighborhoods: [
      { name: "Plaka", vibe: "Historic, neoclassical, tourist-friendly" },
      { name: "Psyrri", vibe: "Edgy, street art, nightlife and mezé bars" },
      { name: "Koukaki", vibe: "Local, residential, up-and-coming cafés" }
    ]
  },
  {
    id: "baku",
    name: "Baku",
    country: "Azerbaijan",
    continent: "Europe",
    emoji: "🇦🇿",
    tagline: "The City of Winds",
    image: "https://images.unsplash.com/photo-1580309237429-661ea0007a29?w=800&q=80",
    coordinates: { lat: 40.4093, lng: 49.8671 },
    description: "Baku, the capital of Azerbaijan, is a fascinating city where futuristic flame-shaped skyscrapers rise alongside a UNESCO-listed medieval old city. Set on the Caspian Sea, it offers a unique blend of Eastern and Western influences.",
    highlights: ["Old City (İçəri Şəhər)", "Flame Towers", "Heydar Aliyev Center", "Boulevard", "Maiden Tower"],
    bestTime: "April to June, September to November",
    currency: "Azerbaijani Manat (₼)",
    language: "Azerbaijani",
    tips: [
      "The Flame Towers light show at night is a must-see from the boulevard",
      "Explore the Old City's narrow alleys — it's a UNESCO World Heritage Site",
      "Take a taxi to the top of Martyrs' Lane for the best panoramic view",
      "Azerbaijani tea is served in pear-shaped glasses (armudu) — a local tradition"
    ],
    foods: ["Plov", "Dolma", "Kebab", "Qutab", "Pakhlava"],
    neighborhoods: [
      { name: "İçəri Şəhər", vibe: "Medieval walled city, historic, atmospheric" },
      { name: "Nizami Street", vibe: "Shopping, dining, lively pedestrian zone" },
      { name: "Seaside Boulevard", vibe: "Waterfront promenade, parks, sea views" }
    ]
  },
  {
    id: "barcelona",
    name: "Barcelona",
    country: "Spain",
    continent: "Europe",
    emoji: "🇪🇸",
    tagline: "Where Art Meets the Sea",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    coordinates: { lat: 41.3874, lng: 2.1686 },
    description: "Barcelona, the cosmopolitan capital of Spain's Catalonia region, is defined by the whimsical modernist architecture of Antoni Gaudí. From the unfinished Sagrada Família to the lively La Rambla, the city pulses with art, food, and Mediterranean energy.",
    highlights: ["Sagrada Família", "Park Güell", "La Rambla", "Gothic Quarter", "Casa Batlló"],
    bestTime: "May to June, September to October",
    currency: "Euro (€)",
    language: "Spanish, Catalan",
    tips: [
      "Book Sagrada Família tickets online well in advance — it always sells out",
      "Beware of pickpockets on La Rambla — keep valuables secure",
      "Eat lunch at 2pm and dinner at 9pm to dine like a local",
      "Take the cable car to Montjuïc for sweeping views of the port and city"
    ],
    foods: ["Paella", "Tapas", "Crema Catalana", "Patatas Bravas", "Jamón Ibérico"],
    neighborhoods: [
      { name: "Barri Gòtic", vibe: "Medieval labyrinth, cathedral, hidden squares" },
      { name: "El Born", vibe: "Trendy, design shops, nightlife" },
      { name: "Gràcia", vibe: "Village feel, plazas, local festivals" }
    ]
  },
  {
    id: "basel",
    name: "Basel",
    country: "Switzerland",
    continent: "Europe",
    emoji: "🇨🇭",
    tagline: "Switzerland's Cultural Capital",
    image: "https://images.unsplash.com/photo-1572453784507-3e59c8a5cfe4?w=800&q=80",
    coordinates: { lat: 47.5596, lng: 7.5886 },
    description: "Basel sits at the crossroads of Switzerland, France, and Germany, offering an extraordinary concentration of world-class museums within its compact medieval core. The Rhine River flows through the city, providing a picturesque backdrop for its vibrant art and architecture scene.",
    highlights: ["Kunstmuseum", "Basel Minster", "Tinguely Fountain", "Fondation Beyeler", "Rhine River Promenade"],
    bestTime: "June to September",
    currency: "Swiss Franc (CHF)",
    language: "German",
    tips: [
      "The Basel Card gives free public transport and museum discounts",
      "In summer, join locals swimming or floating down the Rhine with a Wickelfisch waterproof bag",
      "Art Basel in June is the world's premier contemporary art fair",
      "Cross the Rhine on the small passenger ferries powered by river current — it's charming"
    ],
    foods: ["Basler Läckerli", "Rösti", "Mehlsuppe", "Zwiebelkuchen", "Fondue"],
    neighborhoods: [
      { name: "Großbasel Altstadt", vibe: "Cathedral quarter, museums, Rhine views" },
      { name: "Kleinbasel", vibe: "Alternative, diverse, nightlife" },
      { name: "St. Alban", vibe: "Residential, canals, peaceful walks" }
    ]
  },
  {
    id: "belfast",
    name: "Belfast",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "🇬🇧",
    tagline: "The Rising Star of the North",
    image: "https://images.unsplash.com/photo-1526212500797-47e2e7e59a29?w=800&q=80",
    coordinates: { lat: 54.5973, lng: -5.9301 },
    description: "Belfast, the capital of Northern Ireland, has transformed itself into a vibrant cultural destination. From the Titanic Quarter to its thriving food scene and legendary pub culture, the city offers a warm welcome and rich history.",
    highlights: ["Titanic Belfast", "Giant's Causeway (day trip)", "Belfast Castle", "St. George's Market", "Crumlin Road Gaol"],
    bestTime: "May to September",
    currency: "British Pound (£)",
    language: "English",
    tips: [
      "Titanic Belfast is extraordinary — allow at least 3 hours for the full experience",
      "Take a Black Cab political tour to understand the city's complex history",
      "St. George's Market on weekends is perfect for local food and live music",
      "The Giant's Causeway is 90 minutes away and absolutely worth the trip"
    ],
    foods: ["Ulster Fry", "Soda Bread", "Irish Stew", "Champ", "Yellowman Honeycomb"],
    neighborhoods: [
      { name: "Cathedral Quarter", vibe: "Arts, pubs, street art, festivals" },
      { name: "Titanic Quarter", vibe: "Maritime heritage, modern development" },
      { name: "Queen's Quarter", vibe: "University area, bookshops, cafés" }
    ]
  },
  {
    id: "belgrade",
    name: "Belgrade",
    country: "Serbia",
    continent: "Europe",
    emoji: "🇷🇸",
    tagline: "The White City at the Crossroads",
    image: "https://images.unsplash.com/photo-1580119340379-16b35686ef56?w=800&q=80",
    coordinates: { lat: 44.7866, lng: 20.4489 },
    description: "Belgrade, the capital of Serbia, sits at the confluence of the Danube and Sava rivers. A city of resilience and raw energy, it offers legendary nightlife, Ottoman and Austro-Hungarian architecture, and one of Europe's most vibrant street cultures.",
    highlights: ["Kalemegdan Fortress", "Church of Saint Sava", "Skadarlija", "Belgrade Waterfront", "Nikola Tesla Museum"],
    bestTime: "April to October",
    currency: "Serbian Dinar (RSD)",
    language: "Serbian",
    tips: [
      "Sunset at Kalemegdan Fortress overlooking the river confluence is unforgettable",
      "Belgrade's floating river clubs (splavovi) host some of Europe's best nightlife",
      "The Nikola Tesla Museum is small but fascinating — book the interactive demonstration",
      "Explore Skadarliya, the bohemian quarter, for traditional kafana restaurants"
    ],
    foods: ["Ćevapi", "Pljeskavica", "Karađorđeva Šnicla", "Burek", "Ajvar"],
    neighborhoods: [
      { name: "Skadarlija", vibe: "Bohemian, cobblestone, live music" },
      { name: "Dorćol", vibe: "Hip, cafés, galleries, multicultural" },
      { name: "Savamala", vibe: "Creative, nightlife, street art" }
    ]
  },
  {
    id: "berlin",
    name: "Berlin",
    country: "Germany",
    continent: "Europe",
    emoji: "🇩🇪",
    tagline: "Poor but Sexy",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    coordinates: { lat: 52.5200, lng: 13.4050 },
    description: "Berlin, Germany's capital, is a city reborn from division, where remnants of the Wall stand alongside cutting-edge architecture. Its legendary nightlife, world-class museums on Museum Island, and creative energy make it Europe's most dynamic metropolis.",
    highlights: ["Brandenburg Gate", "Berlin Wall Memorial", "Museum Island", "Reichstag Dome", "East Side Gallery"],
    bestTime: "May to September",
    currency: "Euro (€)",
    language: "German",
    tips: [
      "Visit the Reichstag dome at sunset — it's free but book ahead online",
      "Get a Museum Island day pass to explore the Pergamon, Neues Museum, and more",
      "Berlin's club scene is world-famous — dress in black and arrive after midnight",
      "Curry 36 in Kreuzberg serves the city's most iconic currywurst"
    ],
    foods: ["Currywurst", "Döner Kebab", "Pretzel", "Schnitzel", "Berliner Pfannkuchen"],
    neighborhoods: [
      { name: "Kreuzberg", vibe: "Alternative, street art, nightlife, Turkish markets" },
      { name: "Mitte", vibe: "Central, museums, historic landmarks" },
      { name: "Prenzlauer Berg", vibe: "Family-friendly, cafés, Sunday flea markets" }
    ]
  },
  {
    id: "bern",
    name: "Bern",
    country: "Switzerland",
    continent: "Europe",
    emoji: "🇨🇭",
    tagline: "A Medieval Masterpiece",
    image: "https://images.unsplash.com/photo-1555899145-7c8c36a0e292?w=800&q=80",
    coordinates: { lat: 46.9480, lng: 7.4474 },
    description: "Bern, the capital of Switzerland, is a UNESCO World Heritage Site renowned for its remarkably preserved medieval old town. Surrounded by the turquoise Aare River, it offers a surprisingly relaxed pace for a capital city, with world-class museums and stunning Alpine views.",
    highlights: ["Zytglogge Clock Tower", "Bern Minster", "Bear Park", "Rosengarten", "Einstein House"],
    bestTime: "June to September",
    currency: "Swiss Franc (CHF)",
    language: "German",
    tips: [
      "Watch the Zytglogge clock's animated figures at the top of the hour",
      "Visit the Bear Park — Bern's namesake bears have lived here since the 1500s",
      "The Rosengarten offers the best panoramic view of the old town",
      "Einstein developed his theory of relativity while living in Bern — visit his former apartment"
    ],
    foods: ["Bernese Rösti", "Berner Platte", "Emmentaler Cheese", "Meringues with Double Cream", "Brunsli"],
    neighborhoods: [
      { name: "Altstadt", vibe: "UNESCO medieval core, arcades, fountains" },
      { name: "Mattequartier", vibe: "Historic, riverside, alternative feel" },
      { name: "Länggasse", vibe: "University area, student cafés, multicultural" }
    ]
  },
  {
    id: "bilbao",
    name: "Bilbao",
    country: "Spain",
    continent: "Europe",
    emoji: "🇪🇸",
    tagline: "The Guggenheim Transformation",
    image: "https://images.unsplash.com/photo-1580997840893-6b4ecafa64e4?w=800&q=80",
    coordinates: { lat: 43.2630, lng: -2.9350 },
    description: "Bilbao, the largest city in Spain's Basque Country, underwent a dramatic transformation when Frank Gehry's titanium-clad Guggenheim Museum opened in 1997. Today it balances industrial heritage with bold architecture and one of Spain's most celebrated food scenes.",
    highlights: ["Guggenheim Museum", "Casco Viejo", "Ribera Market", "Bilbao Fine Arts Museum", "Zubizuri Bridge"],
    bestTime: "May to September",
    currency: "Euro (€)",
    language: "Spanish, Basque",
    tips: [
      "Pintxos (Basque tapas) are the star — bar-hop through Casco Viejo eating at each stop",
      "The Guggenheim is stunning outside as well as inside — walk all the way around it",
      "Take the funicular up Artxanda for a panoramic view of the city",
      "Visit the Ribera Market, Europe's largest covered market"
    ],
    foods: ["Pintxos", "Bacalao al Pil-Pil", "Marmitako", "Chorizo a la Sidra", "Arroz con Leche"],
    neighborhoods: [
      { name: "Casco Viejo", vibe: "Old quarter, pintxo bars, medieval streets" },
      { name: "Abando", vibe: "Commercial center, Guggenheim, modern" },
      { name: "Bilbao La Vieja", vibe: "Bohemian, galleries, alternative scene" }
    ]
  },
  {
    id: "birmingham",
    name: "Birmingham",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "🇬🇧",
    tagline: "The Workshop of the World",
    image: "https://images.unsplash.com/photo-1597832834186-3b29ab1d3c7e?w=800&q=80",
    coordinates: { lat: 52.4862, lng: -1.8904 },
    description: "Birmingham is England's second-largest city, an industrial powerhouse turned cultural hotspot with one of the youngest populations in Europe. Its canal network rivals Venice, and the city's culinary scene has earned it the title of Britain's most exciting food destination.",
    highlights: ["Birmingham Museum & Art Gallery", "Cadbury World", "Library of Birmingham", "Balti Triangle", "Jewellery Quarter"],
    bestTime: "May to September",
    currency: "British Pound (£)",
    language: "English",
    tips: [
      "The Library of Birmingham's rooftop garden offers fantastic free views",
      "Eat a balti in the Balti Triangle — Birmingham invented the dish",
      "The Jewellery Quarter produces 40% of the UK's jewellery — great for unique souvenirs",
      "Explore the canal network on foot or by narrowboat for a different side of the city"
    ],
    foods: ["Balti Curry", "Pork Scratchings", "Birmingham Bun", "Faggots and Peas", "Cadbury Chocolate"],
    neighborhoods: [
      { name: "Digbeth", vibe: "Creative, street art, independent venues" },
      { name: "Jewellery Quarter", vibe: "Historic, craft workshops, galleries" },
      { name: "Brindleyplace", vibe: "Canal-side dining, cultural venues, lively" }
    ]
  },
  {
    id: "bologna",
    name: "Bologna",
    country: "Italy",
    continent: "Europe",
    emoji: "🇮🇹",
    tagline: "La Dotta, La Grassa, La Rossa",
    image: "https://images.unsplash.com/photo-1559113202-c916b8e44373?w=800&q=80",
    coordinates: { lat: 44.4949, lng: 11.3426 },
    description: "Bologna is Italy's culinary capital, known as La Dotta (the learned) for its ancient university, La Grassa (the fat) for its incredible food, and La Rossa (the red) for its terracotta rooftops. Its medieval porticoes are a UNESCO World Heritage Site.",
    highlights: ["Two Towers (Torre degli Asinelli)", "Piazza Maggiore", "Bologna University", "Archiginnasio", "Santo Stefano"],
    bestTime: "April to June, September to October",
    currency: "Euro (€)",
    language: "Italian",
    tips: [
      "Never ask for spaghetti bolognese here — it's tagliatelle al ragù",
      "Walk under the 40km of UNESCO-listed porticoes that define the city",
      "Climb the Torre degli Asinelli for the best view of the red rooftops",
      "Visit the Quadrilatero for the oldest food market in the city"
    ],
    foods: ["Tagliatelle al Ragù", "Tortellini in Brodo", "Mortadella", "Lasagna Verde", "Crescentine"],
    neighborhoods: [
      { name: "Quadrilatero", vibe: "Ancient food market, delicatessens, buzzing" },
      { name: "University District", vibe: "Student life, bookshops, youthful energy" },
      { name: "Santo Stefano", vibe: "Atmospheric, seven churches complex, elegant" }
    ]
  },
  {
    id: "bonn",
    name: "Bonn",
    country: "Germany",
    continent: "Europe",
    emoji: "🇩🇪",
    tagline: "Beethoven's Birthplace",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80",
    coordinates: { lat: 50.7374, lng: 7.0982 },
    description: "Bonn, the former capital of West Germany, sits along the Rhine River and is celebrated as the birthplace of Ludwig van Beethoven. The city blends political history with a relaxed university-town atmosphere and serves as a gateway to the Romantic Rhine Valley.",
    highlights: ["Beethoven House", "Bonn Minster", "Museum Mile", "Poppelsdorf Palace", "Rhine Promenade"],
    bestTime: "May to September",
    currency: "Euro (€)",
    language: "German",
    tips: [
      "The Beethoven House museum is intimate and moving — a must for music lovers",
      "Walk the Rhine Promenade for lovely river views and wine gardens",
      "Visit during the Beethoven Festival in autumn for world-class concerts",
      "Take a boat trip along the Rhine to see the castles of the Lorelei Valley"
    ],
    foods: ["Rheinischer Sauerbraten", "Himmel und Ääd", "Reibekuchen", "Bonn Schokolade", "Kölsch Beer"],
    neighborhoods: [
      { name: "Altstadt", vibe: "Historic, Beethoven's house, cozy pubs" },
      { name: "Poppelsdorf", vibe: "University area, botanical garden, student life" },
      { name: "Bad Godesberg", vibe: "Diplomatic quarter, villas, Rhine views" }
    ]
  },
  {
    id: "bordeaux",
    name: "Bordeaux",
    country: "France",
    continent: "Europe",
    emoji: "🇫🇷",
    tagline: "The World Capital of Wine",
    image: "https://images.unsplash.com/photo-1565961662928-05e34e0e9c4d?w=800&q=80",
    coordinates: { lat: 44.8378, lng: -0.5792 },
    description: "Bordeaux is a port city in southwestern France, globally renowned for its wine production and elegant 18th-century architecture. The entire historic center is a UNESCO World Heritage Site, offering grand squares, world-class cuisine, and access to legendary vineyards.",
    highlights: ["Place de la Bourse", "Cité du Vin", "Bordeaux Cathedral", "Grand Théâtre", "Pont de Pierre"],
    bestTime: "June to September",
    currency: "Euro (€)",
    language: "French",
    tips: [
      "Cité du Vin is an extraordinary interactive wine museum — plan 3-4 hours",
      "Take a day trip to Saint-Émilion for wine tasting in a medieval village",
      "The water mirror at Place de la Bourse creates stunning reflections — go at sunset",
      "Rent a bike to explore the city — Bordeaux is flat and very cyclist-friendly"
    ],
    foods: ["Canelé", "Entrecôte Bordelaise", "Oysters from Arcachon", "Duck Confit", "Macarons de Bordeaux"],
    neighborhoods: [
      { name: "Chartrons", vibe: "Antique shops, wine merchants, trendy cafés" },
      { name: "Saint-Pierre", vibe: "Old town, historic squares, restaurant hub" },
      { name: "Saint-Michel", vibe: "Diverse, bustling market, Basilica spire" }
    ]
  },
  {
    id: "bournemouth",
    name: "Bournemouth",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "🇬🇧",
    tagline: "The Sunny South Coast Gem",
    image: "https://images.unsplash.com/photo-1580309237429-661ea0007a29?w=800&q=80",
    coordinates: { lat: 50.7196, lng: -1.8808 },
    description: "Bournemouth is a vibrant coastal resort town in southern England, famous for its seven miles of golden sandy beaches and Victorian architecture. With a lively student population and growing tech scene, it blends traditional seaside charm with modern energy.",
    highlights: ["Bournemouth Pier", "Russell-Cotes Art Gallery", "Lower Gardens", "Oceanarium", "Hengistbury Head"],
    bestTime: "June to September",
    currency: "British Pound (£)",
    language: "English",
    tips: [
      "Walk from the pier to Boscombe along the promenade for beautiful sea views",
      "Take the Bournemouth Balloon ride for aerial views of the coast",
      "The Russell-Cotes Art Gallery is a hidden gem — a Victorian collector's dream",
      "Day trip to the Jurassic Coast, a UNESCO World Heritage Site just to the west"
    ],
    foods: ["Fish and Chips on the Pier", "Cream Tea", "Dorset Apple Cake", "Seafood Platter", "Scones with Clotted Cream"],
    neighborhoods: [
      { name: "Westbourne", vibe: "Independent shops, cafés, village atmosphere" },
      { name: "Boscombe", vibe: "Surf culture, vintage, regeneration" },
      { name: "Town Centre", vibe: "Shopping, gardens, beach access" }
    ]
  },
  {
    id: "bratislava",
    name: "Bratislava",
    country: "Slovakia",
    continent: "Europe",
    emoji: "🇸🇰",
    tagline: "The Little Big City",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80",
    coordinates: { lat: 48.1486, lng: 17.1077 },
    description: "Bratislava, Slovakia's capital, sits on the Danube River near the borders of Austria and Hungary. Its compact, colorful old town features medieval towers, Baroque palaces, and quirky statues, all overshadowed by a stark rectangular castle on the hill.",
    highlights: ["Bratislava Castle", "St. Martin's Cathedral", "Old Town Hall", "Blue Church", "Devin Castle"],
    bestTime: "April to October",
    currency: "Euro (€)",
    language: "Slovak",
    tips: [
      "Bratislava is one of Europe's most affordable capitals — enjoy it while it lasts",
      "Look out for Čumil, the bronze man peeking from a manhole — the city's favorite statue",
      "Take a boat to Devin Castle at the confluence of the Danube and Morava rivers",
      "Vienna is just an hour away by train — easy day trip combination"
    ],
    foods: ["Bryndzové Halušky", "Kapustnica", "Schnitzel", "Trdelník", "Bryndza Cheese"],
    neighborhoods: [
      { name: "Staré Mesto", vibe: "Old town, statues, restaurants, compact" },
      { name: "Ružinov", vibe: "Residential, parks, local markets" },
      { name: "Petržalka", vibe: "Brutalist housing blocks, Danube views" }
    ]
  },
  {
    id: "bremen",
    name: "Bremen",
    country: "Germany",
    continent: "Europe",
    emoji: "🇩🇪",
    tagline: "City of the Town Musicians",
    image: "https://images.unsplash.com/photo-1555899145-7c8c36a0e292?w=800&q=80",
    coordinates: { lat: 53.0793, lng: 8.8017 },
    description: "Bremen is a historic Hanseatic city in northwestern Germany, famous for the Brothers Grimm fairy tale of the Bremen Town Musicians. Its UNESCO-listed town hall and Roland statue anchor a charming old town along the Weser River.",
    highlights: ["Town Hall & Roland Statue", "Böttcherstraße", "Schnoor Quarter", "Bremen Cathedral", "Universum Science Center"],
    bestTime: "May to September",
    currency: "Euro (€)",
    language: "German",
    tips: [
      "Rub the legs of the Town Musicians statue for good luck",
      "Walk through Böttcherstraße — an extraordinary expressionist alleyway",
      "Explore the Schnoor quarter for the oldest houses in the city",
      "Try Beck's Brewery tour — the beer was born here"
    ],
    foods: ["Bremer Knipp", "Kohl und Pinkel", "Bremer Klaben", "Fischbrötchen", "Rote Grütze"],
    neighborhoods: [
      { name: "Schnoor", vibe: "Oldest quarter, artisan shops, medieval lanes" },
      { name: "Böttcherstraße", vibe: "Expressionist architecture, art, golden coffered ceiling" },
      { name: "Viertel", vibe: "Alternative, student bars, second-hand shops" }
    ]
  },
  {
    id: "bristol",
    name: "Bristol",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "🇬🇧",
    tagline: "Where Creativity Runs Wild",
    image: "https://images.unsplash.com/photo-1597832834186-3b29ab1d3c7e?w=800&q=80",
    coordinates: { lat: 51.4545, lng: -2.5879 },
    description: "Bristol is a creative, fiercely independent city in southwest England, renowned for its street art heritage (including works by Banksy), historic maritime legacy, and thriving music scene. Its harbor-side setting and green hills give it a distinctive character.",
    highlights: ["Clifton Suspension Bridge", "SS Great Britain", "Bristol Museum & Art Gallery", "Bristol Cathedral", "Street Art Walking Tour"],
    bestTime: "May to September",
    currency: "British Pound (£)",
    language: "English",
    tips: [
      "Take a Banksy street art walking tour — the city is his open-air gallery",
      "Walk across the Clifton Suspension Bridge at sunset for iconic views",
      "Visit the SS Great Britain — Brunel's revolutionary ship is brilliantly restored",
      "Explore Stokes Croft for independent shops, murals, and the best night out"
    ],
    foods: ["Bristol Cream Sherry", "Pieminster Pies", "West Country Cheddar", "Bath Buns", "Cider"],
    neighborhoods: [
      { name: "Clifton", vibe: "Georgian elegance, suspension bridge, village feel" },
      { name: "Stokes Croft", vibe: "Alternative, street art, independent spirit" },
      { name: "Harbourside", vibe: "Waterfront museums, bars, boat trips" }
    ]
  },
  {
    id: "brussels",
    name: "Brussels",
    country: "Belgium",
    continent: "Europe",
    emoji: "🇧🇪",
    tagline: "The Heart of Europe",
    image: "https://images.unsplash.com/photo-1559113202-c916b8e44373?w=800&q=80",
    coordinates: { lat: 50.8503, lng: 4.3517 },
    description: "Brussels, the capital of Belgium and the European Union, is a city of grand squares, comic-strip murals, and extraordinary culinary traditions. The magnificent Grand-Place, ornate Art Nouveau buildings, and world-class chocolate make it a feast for all senses.",
    highlights: ["Grand-Place", "Atomium", "Manneken Pis", "Royal Palace", "Comic Strip Center"],
    bestTime: "April to October",
    currency: "Euro (€)",
    language: "French, Dutch",
    tips: [
      "Grand-Place is breathtaking at night when the guildhalls are illuminated",
      "Follow the Comic Strip Trail — murals of Tintin and more are scattered across the city",
      "Belgian chocolate shops are everywhere — look for small artisan makers",
      "Try at least five different Belgian beers — there are over 1,500 varieties"
    ],
    foods: ["Belgian Waffles", "Moules-frites", "Belgian Chocolate", "Stoofvlees", "Speculoos"],
    neighborhoods: [
      { name: "Ixelles", vibe: "Cosmopolitan, Art Nouveau, vibrant nightlife" },
      { name: "Marolles", vibe: "Working-class heart, flea market, authentic" },
      { name: "Sablon", vibe: "Elegant, antique shops, chocolate boutiques" }
    ]
  },
  {
    id: "bucharest",
    name: "Bucharest",
    country: "Romania",
    continent: "Europe",
    emoji: "🇷🇴",
    tagline: "The Little Paris of the East",
    image: "https://images.unsplash.com/photo-1526212500797-47e2e7e59a29?w=800&q=80",
    coordinates: { lat: 44.4268, lng: 26.1025 },
    description: "Bucharest, Romania's capital, is a city of striking contrasts where Belle Époque buildings stand alongside brutalist communist architecture. The enormous Palace of Parliament dominates the skyline, while the old town's charming streets buzz with cafés and nightlife.",
    highlights: ["Palace of Parliament", "Old Town (Lipscani)", "Village Museum", "Romanian Athenaeum", "Cărturești Carusel Bookstore"],
    bestTime: "April to June, September to October",
    currency: "Romanian Leu (RON)",
    language: "Romanian",
    tips: [
      "Book a tour of the Palace of Parliament — it's the heaviest building in the world",
      "The Old Town comes alive at night with bars, clubs, and restaurants",
      "Visit Cărturești Carusel — one of the most beautiful bookstores in the world",
      "Romanian food is hearty and affordable — try a local bistro in the old town"
    ],
    foods: ["Sarmale", "Mămăligă", "Mici", "Ciorbă", "Papanași"],
    neighborhoods: [
      { name: "Lipscani (Old Town)", vibe: "Historic, nightlife, cobblestone streets" },
      { name: "Dorobanți", vibe: "Upscale, fashion boutiques, fine dining" },
      { name: "Cotroceni", vibe: "Leafy, museums, presidential palace area" }
    ]
  },
  {
    id: "budapest",
    name: "Budapest",
    country: "Hungary",
    continent: "Europe",
    emoji: "🇭🇺",
    tagline: "The Pearl of the Danube",
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80",
    coordinates: { lat: 47.4979, lng: 19.0402 },
    description: "Budapest, Hungary's capital, is divided by the Danube River into the hilly Buda and flat Pest sides. Famous for its thermal baths, stunning Parliament building, and ruin bar scene, it offers grand architecture and vibrant culture at remarkably affordable prices.",
    highlights: ["Hungarian Parliament", "Széchenyi Thermal Bath", "Buda Castle", "Fisherman's Bastion", "Great Market Hall"],
    bestTime: "March to May, September to November",
    currency: "Hungarian Forint (HUF)",
    language: "Hungarian",
    tips: [
      "Szimpla Kert is the original ruin bar — go on Sunday for the farmers' market",
      "Soak in Széchenyi baths at night — the outdoor pools are magical under the stars",
      "Take the funicular up to Castle Hill for postcard views of Parliament",
      "Eat lángos at the Great Market Hall — the ultimate Hungarian street food"
    ],
    foods: ["Goulash", "Lángos", "Chimney Cake (Kürtőskalács)", "Chicken Paprikash", "Dobos Torte"],
    neighborhoods: [
      { name: "District VII (Jewish Quarter)", vibe: "Ruin bars, street art, nightlife" },
      { name: "Castle District", vibe: "Historic, panoramic views, royal heritage" },
      { name: "District XIII", vibe: "Up-and-coming, parks, modern restaurants" }
    ]
  },
  {
    id: "cardiff",
    name: "Cardiff",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "🇬🇧",
    tagline: "The Welsh Capital of Cool",
    image: "https://images.unsplash.com/photo-1526212500797-47e2e7e59a29?w=800&q=80",
    coordinates: { lat: 51.4816, lng: -3.1791 },
    description: "Cardiff, the capital of Wales, is a compact and friendly city with a mighty medieval castle at its center. Its regenerated waterfront at Cardiff Bay, world-class sporting events, and thriving arts scene make it one of the UK's most dynamic smaller capitals.",
    highlights: ["Cardiff Castle", "Cardiff Bay", "Principality Stadium", "National Museum Cardiff", "Cardiff Market"],
    bestTime: "May to September",
    currency: "British Pound (£)",
    language: "English, Welsh",
    tips: [
      "Cardiff Castle sits on 2,000 years of history — the Norman keep and Victorian interiors are both stunning",
      "Cardiff Bay has great restaurants and the striking Wales Millennium Centre",
      "If there's a rugby match on, the atmosphere in the city is electric",
      "Try Welsh cakes from Cardiff Market — they're made fresh on the griddle"
    ],
    foods: ["Welsh Cakes", "Cawl", "Welsh Rarebit", "Laverbread", "Glamorgan Sausages"],
    neighborhoods: [
      { name: "Cardiff Bay", vibe: "Waterfront, restaurants, Millennium Centre" },
      { name: "Pontcanna", vibe: "Leafy, independent shops, café culture" },
      { name: "Roath", vibe: "Student area, diverse, Roath Park" }
    ]
  },
  {
    id: "chisinau",
    name: "Chișinău",
    country: "Moldova",
    continent: "Europe",
    emoji: "🇲🇩",
    tagline: "Europe's Best-Kept Secret",
    image: "https://images.unsplash.com/photo-1555899145-7c8c36a0e292?w=800&q=80",
    coordinates: { lat: 47.0105, lng: 28.8638 },
    description: "Chișinău, the capital of Moldova, is one of Europe's least-visited and most affordable capital cities. Surrounded by some of the world's best wine regions, it offers Soviet-era architecture, lush green parks, and a surprisingly vibrant café culture.",
    highlights: ["Triumphal Arch", "Stephen the Great Monument", "National Museum of History", "Central Market", "Cricova Winery"],
    bestTime: "May to September",
    currency: "Moldovan Leu (MDL)",
    language: "Romanian",
    tips: [
      "Visit Cricova or Mileștii Mici — underground wine cities with millions of bottles",
      "Moldovan wine is world-class and incredibly affordable — stock up",
      "The central market is great for local produce and people-watching",
      "Moldova is one of Europe's safest and cheapest destinations"
    ],
    foods: ["Mămăligă", "Plăcintă", "Zeamă", "Sarmale", "Moldovan Wine"],
    neighborhoods: [
      { name: "Centru", vibe: "City center, parks, main boulevards" },
      { name: "Botanica", vibe: "Green, residential, botanical garden" },
      { name: "Râșcani", vibe: "Local, markets, authentic daily life" }
    ]
  },
  {
    id: "cologne",
    name: "Cologne",
    country: "Germany",
    continent: "Europe",
    emoji: "🇩🇪",
    tagline: "Where Cathedral Spires Touch the Sky",
    image: "https://images.unsplash.com/photo-1555990538-1e15f46bf516?w=800&q=80",
    coordinates: { lat: 50.9375, lng: 6.9603 },
    description: "Cologne is a vibrant city on the Rhine River, dominated by its breathtaking Gothic cathedral that took over 600 years to complete. Known for its warm and jovial locals (Kölner), legendary Carnival celebrations, and the world-famous Eau de Cologne fragrance.",
    highlights: ["Cologne Cathedral", "Hohenzollern Bridge", "Old Town", "Ludwig Museum", "Chocolate Museum"],
    bestTime: "May to October, February for Carnival",
    currency: "Euro (€)",
    language: "German",
    tips: [
      "Climb the cathedral's south tower for panoramic views of the Rhine",
      "Walk across the Hohenzollern Bridge covered in love locks for great photos",
      "Drink Kölsch beer in a traditional Brauhaus — the waiters (Köbes) will keep refilling your glass",
      "Carnival in February is wild — the city shuts down for days of celebration"
    ],
    foods: ["Himmel un Ääd", "Halver Hahn", "Rievkooche", "Kölsch Beer", "Reibekuchen"],
    neighborhoods: [
      { name: "Altstadt", vibe: "Medieval charm, Brauhäuser, Rhine views" },
      { name: "Belgisches Viertel", vibe: "Trendy, boutiques, café culture" },
      { name: "Ehrenfeld", vibe: "Creative, street art, multicultural food" }
    ]
  },
  {
    id: "copenhagen",
    name: "Copenhagen",
    country: "Denmark",
    continent: "Europe",
    emoji: "🇩🇰",
    tagline: "The Happiest City on Earth",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80",
    coordinates: { lat: 55.6761, lng: 12.5683 },
    description: "Copenhagen, Denmark's capital, seamlessly blends royal history with modern Scandinavian design and an unmatched commitment to sustainability. From the colorful Nyhavn harbor to the innovative Noma restaurant, it sets the standard for quality of life.",
    highlights: ["Tivoli Gardens", "Nyhavn", "The Little Mermaid", "Rosenborg Castle", "Strøget Shopping Street"],
    bestTime: "June to August",
    currency: "Danish Krone (kr)",
    language: "Danish",
    tips: [
      "Rent a bicycle — Copenhagen is built for cyclists and it's the best way to explore",
      "Tivoli Gardens is magical in the evening when thousands of lights illuminate the park",
      "Try a smørrebrød lunch at a traditional lunch restaurant (frokostrestaurant)",
      "Explore Christianshavn and climb the spiral spire of the church for free city views"
    ],
    foods: ["Smørrebrød", "Danish Pastry (Wienerbrød)", "Frikadeller", "Pickled Herring", "Hot Dog (Pølsevogn)"],
    neighborhoods: [
      { name: "Nyhavn", vibe: "Colorful canals, tourist hub, waterfront dining" },
      { name: "Vesterbro", vibe: "Trendy, food scene, Meatpacking district" },
      { name: "Nørrebro", vibe: "Multicultural, hip cafés, Superkilen park" }
    ]
  },
{
    id: "dresden",
    name: "Dresden",
    country: "Germany",
    continent: "Europe",
    emoji: "\u{1F1E9}\u{1F1EA}",
    tagline: "Florence on the Elbe",
    image: "https://images.unsplash.com/photo-1619120810930-6ca5048deee1?w=800&q=80",
    coordinates: { lat: 51.0504, lng: 13.7373 },
    description: "Dresden, the capital of Saxony, is renowned for its stunning Baroque architecture and world-class art collections. Rebuilt after WWII, the city's historic center features the magnificent Frauenkirche and the Zwinger Palace along the banks of the Elbe River.",
    highlights: ["Frauenkirche", "Zwinger Palace", "Semperoper", "Br\u{00FC}hl's Terrace", "Green Vault"],
    bestTime: "May to September",
    currency: "Euro (\u20AC)",
    language: "German",
    tips: [
      "Visit the Frauenkirche at sunset for golden light on the dome",
      "Walk along Br\u{00FC}hl's Terrace for panoramic Elbe River views",
      "Get a combined ticket for the Zwinger museums to save money",
      "Take a steamboat cruise on the Elbe to see the city from the water"
    ],
    foods: ["Dresdner Stollen", "Eierschecke", "S\u00E4chsische Kartoffelsuppe", "Qu\u00E4ke", "Pulsnitzer Pfefferkuchen"],
    neighborhoods: [
      { name: "Altstadt (Old Town)", vibe: "Baroque splendor, museums, historic landmarks" },
      { name: "Neustadt", vibe: "Bohemian, street art, alternative culture, nightlife" },
      { name: "Blasewitz", vibe: "Elegant villas, riverside walks, residential charm" }
    ]
  },
  {
    id: "dublin",
    name: "Dublin",
    country: "Ireland",
    continent: "Europe",
    emoji: "\u{1F1EE}\u{1F1EA}",
    tagline: "The Fair City",
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?w=800&q=80",
    coordinates: { lat: 53.3498, lng: -6.2603 },
    description: "Dublin, Ireland's vibrant capital, seamlessly blends centuries of literary history with a thriving modern culture. From the cobbled streets of Temple Bar to the grand Georgian squares, the city pulses with music, storytelling, and legendary pub culture.",
    highlights: ["Trinity College & Book of Kells", "Guinness Storehouse", "Kilmainham Gaol", "St. Patrick's Cathedral", "Phoenix Park"],
    bestTime: "June to August",
    currency: "Euro (\u20AC)",
    language: "English, Irish",
    tips: [
      "Book Trinity College Library tickets online to avoid massive queues",
      "The Guinness Storehouse is best visited in the late afternoon",
      "Walk the Liberties for craft distilleries and local markets",
      "Pub crawls in Temple Bar are touristy \u2014 try the local pubs in Rathmines instead"
    ],
    foods: ["Irish Stew", "Boxty", "Coddle", "Soda Bread", "Full Irish Breakfast"],
    neighborhoods: [
      { name: "Temple Bar", vibe: "Touristy, colorful, live music, bustling" },
      { name: "Stoneybatter", vibe: "Hipster, craft coffee, village feel" },
      { name: "Ranelagh", vibe: "Upscale dining, Georgian charm, leafy streets" }
    ]
  },
  {
    id: "dusseldorf",
    name: "D\u00FCsseldorf",
    country: "Germany",
    continent: "Europe",
    emoji: "\u{1F1E9}\u{1F1EA}",
    tagline: "Where Fashion Meets the Rhine",
    image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&q=80",
    coordinates: { lat: 51.2277, lng: 6.7735 },
    description: "D\u00FCsseldorf is a stylish city on the Rhine known for its fashion industry, cutting-edge architecture, and vibrant arts scene. The historic Altstadt boasts one of the longest bar counters in the world with nearly 300 pubs and bars.",
    highlights: ["Rheinturm Tower", "Media Harbour", "K\u00F6nigsallee", "Altstadt (Old Town)", "Kunstsammlung Nordrhein-Westfalen"],
    bestTime: "May to September",
    currency: "Euro (\u20AC)",
    language: "German",
    tips: [
      "Stroll the K\u00F6nigsallee for luxury shopping and people-watching",
      "Try Altbier in the historic brewhouses of the Altstadt",
      "The Media Harbour showcases stunning Gehry architecture",
      "Visit during Karneval in February for wild street celebrations"
    ],
    foods: ["Altbier", "Rheinischer Sauerbraten", "Senfrostbraten", "Halve Hahn", "Pillekuchen"],
    neighborhoods: [
      { name: "Altstadt", vibe: "Historic, breweries, nightlife, cobblestone charm" },
      { name: "Media Harbour", vibe: "Modern architecture, upscale dining, waterfront" },
      { name: "Flingern", vibe: "Artsy, galleries, vintage shops, caf\u00E9s" }
    ]
  },
  {
    id: "edinburgh",
    name: "Edinburgh",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "\u{1F1EC}\u{1F1E7}",
    tagline: "Athens of the North",
    image: "https://images.unsplash.com/photo-1594929109002-01e2e17a964d?w=800&q=80",
    coordinates: { lat: 55.9533, lng: -3.1883 },
    description: "Edinburgh, Scotland's dramatic capital, is a city of volcanic hills, medieval closes, and grand Georgian avenues. Its UNESCO-listed Old and New Towns frame a world-famous castle perched atop an ancient rock, while the annual Fringe Festival transforms the city each August.",
    highlights: ["Edinburgh Castle", "Royal Mile", "Arthur's Seat", "National Museum of Scotland", "Palace of Holyroodhouse"],
    bestTime: "August (for festivals), June to September",
    currency: "British Pound (\u00A3)",
    language: "English",
    tips: [
      "Book Fringe Festival shows early \u2014 accommodation fills up months ahead",
      "Climb Arthur's Seat at sunrise for breathtaking city views",
      "Explore the closes (alleyways) off the Royal Mile for hidden gems",
      "The National Museum of Scotland is free and exceptional"
    ],
    foods: ["Haggis", "Full Scottish Breakfast", "Cullen Skink", "Scotch Pie", "Tablet"],
    neighborhoods: [
      { name: "Old Town", vibe: "Medieval, atmospheric, castle, winding streets" },
      { name: "New Town", vibe: "Georgian elegance, shopping, refined dining" },
      { name: "Leith", vibe: "Waterfront, Michelin-starred restaurants, maritime heritage" }
    ]
  },
  {
    id: "eindhoven",
    name: "Eindhoven",
    country: "Netherlands",
    continent: "Europe",
    emoji: "\u{1F1F3}\u{1F1F1}",
    tagline: "City of Design and Innovation",
    image: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&q=80",
    coordinates: { lat: 51.4416, lng: 5.4697 },
    description: "Eindhoven is the Netherlands' technology and design hub, home to Philips and a thriving creative scene. Each autumn, the city transforms during Dutch Design Week, showcasing cutting-edge innovation across every discipline.",
    highlights: ["Van Abbemuseum", "Strijp-S Design District", "Phillips Museum", "Evoluon", "St. Catherine's Church"],
    bestTime: "April to September, October for Dutch Design Week",
    currency: "Euro (\u20AC)",
    language: "Dutch",
    tips: [
      "Visit Strijp-S for the best of Dutch design, shops, and restaurants",
      "Dutch Design Week in October is the largest design event in Northern Europe",
      "Rent a bike \u2014 Eindhoven is very cycle-friendly",
      "Check out the murals in the inner city from the GLOW light festival"
    ],
    foods: ["Stroopwafel", "Bitterballen", "Erwtensoep", "Kroket", "Pannenkoeken"],
    neighborhoods: [
      { name: "Strijp-S", vibe: "Creative, design studios, converted factory spaces" },
      { name: "City Center", vibe: "Modern shopping, lively squares, weekly markets" },
      { name: "De Bergen", vibe: "Artistic, galleries, intimate caf\u00E9s" }
    ]
  },
  {
    id: "florence",
    name: "Florence",
    country: "Italy",
    continent: "Europe",
    emoji: "\u{1F1EE}\u{1F1F9}",
    tagline: "Cradle of the Renaissance",
    image: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?w=800&q=80",
    coordinates: { lat: 43.7696, lng: 11.2558 },
    description: "Florence, the jewel of Tuscany, is a living museum of Renaissance art and architecture. The city's compact historic center overflows with masterpieces by Michelangelo, Botticelli, and Brunelleschi, all framed by terracotta rooftops and the rolling Tuscan hills.",
    highlights: ["Uffizi Gallery", "Duomo (Santa Maria del Fiore)", "Ponte Vecchio", "Accademia Gallery (David)", "Pitti Palace"],
    bestTime: "April to June, September to October",
    currency: "Euro (\u20AC)",
    language: "Italian",
    tips: [
      "Book Uffizi and Accademia tickets weeks in advance",
      "Climb the Duomo dome at Brunelleschi's level for incredible views",
      "Cross to Oltrarno for authentic artisans and fewer crowds",
      "Eat a panino at All'Antico Vinaio \u2014 the line moves fast"
    ],
    foods: ["Bistecca alla Fiorentina", "Ribollita", "Lampredotto", "Cantucci e Vin Santo", "Gelato"],
    neighborhoods: [
      { name: "Santa Croce", vibe: "Lively, leather markets, student energy" },
      { name: "Oltrarno", vibe: "Artisan workshops, local feel, romantic piazzas" },
      { name: "San Lorenzo", vibe: "Central Market, food halls, bustling" }
    ]
  },
  {
    id: "frankfurt",
    name: "Frankfurt",
    country: "Germany",
    continent: "Europe",
    emoji: "\u{1F1E9}\u{1F1EA}",
    tagline: "Mainhattan on the River Main",
    image: "https://images.unsplash.com/photo-1513368721824-d066c966c4c2?w=800&q=80",
    coordinates: { lat: 50.1109, lng: 8.6821 },
    description: "Frankfurt am Main is Germany's financial powerhouse, famous for its futuristic skyline and the European Central Bank. Yet beneath the glass towers lies a charming city with a reconstructed medieval old town, world-class museums along the River Main, and the beloved Apfelwein taverns of Sachsenhausen.",
    highlights: ["R\u00F6merberg (Old Town)", "St\u00E4del Museum", "Main Tower", "Palmengarten", "Sachsenhausen"],
    bestTime: "May to September",
    currency: "Euro (\u20AC)",
    language: "German",
    tips: [
      "Take the elevator up the Main Tower for panoramic skyline views",
      "Walk the Museumsufer (Museum Embankment) along the River Main",
      "Try Apfelwein (apple wine) in a traditional Sachsenhausen tavern",
      "The Kleinmarkthalle is a foodie paradise \u2014 don't miss the sausage stand"
    ],
    foods: ["Frankfurter W\u00FCrstchen", "Gr\u00FCne So\u00DFe", "Apfelwein", "Handk\u00E4se mit Musik", "Frankfurter Kranz"],
    neighborhoods: [
      { name: "Sachsenhausen", vibe: "Traditional cider houses, cobblestone streets, local flavor" },
      { name: "Bornheim", vibe: "Village-like, farmers market, Berger Stra\u00DFe caf\u00E9s" },
      { name: "Bahnhofsviertel", vibe: "Edgy, diverse food scene, repurposed spaces" }
    ]
  },
  {
    id: "freiburg",
    name: "Freiburg",
    country: "Germany",
    continent: "Europe",
    emoji: "\u{1F1E9}\u{1F1EA}",
    tagline: "Green City of the Black Forest",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80",
    coordinates: { lat: 47.9990, lng: 7.8421 },
    description: "Freiburg im Breisgau is Germany's sunniest city, nestled at the edge of the Black Forest. Known for its sustainability, medieval cathedral, and charming B\u00E4chle (small water channels running through the streets), it is a delightful blend of university-town energy and natural beauty.",
    highlights: ["Freiburg M\u00FCnster", "Schlossberg Hill", "Historic Merchants' Hall", "Augustiner Museum", "Black Forest trails"],
    bestTime: "May to October",
    currency: "Euro (\u20AC)",
    language: "German",
    tips: [
      "Climb the M\u00FCnster tower for views of the Black Forest and Vosges mountains",
      "Don't step in the B\u00E4chle \u2014 legend says you'll marry a Freiburger",
      "The Saturday market around the M\u00FCnster is one of Germany's best",
      "Take a day trip into the Black Forest for hiking and cuckoo clocks"
    ],
    foods: ["Schwarzw\u00E4lder Kirschtorte", "Flammkuchen", "Badischer Sch\u00E4ufele", "K\u00E4sesp\u00E4tzle", "Marktst\u00E4ndle Bratwurst"],
    neighborhoods: [
      { name: "Altstadt", vibe: "Medieval charm, cathedral square, streams, markets" },
      { name: "St\u00FChlinger", vibe: "Young, student-heavy, street art, multicultural" },
      { name: "Wiehre", vibe: "Wilhelminian architecture, quiet residential, caf\u00E9s" }
    ]
  },
  {
    id: "gdansk",
    name: "Gda\u0144sk",
    country: "Poland",
    continent: "Europe",
    emoji: "\u{1F1F5}\u{1F1F1}",
    tagline: "Pearl of the Baltic",
    image: "https://images.unsplash.com/photo-1593238739364-18cfde865926?w=800&q=80",
    coordinates: { lat: 54.3520, lng: 18.6466 },
    description: "Gda\u0144sk is a stunning Baltic port city with a rich Hanseatic heritage, colorful merchant houses, and a pivotal place in modern European history. The city's meticulously reconstructed Old Town along the Mot\u0142awa River is one of Poland's most beautiful urban landscapes.",
    highlights: ["Long Market (D\u0142ugi Targ)", "St. Mary's Church", "Westerplatte", "European Solidarity Centre", "Gda\u0144sk Crane"],
    bestTime: "June to August",
    currency: "Polish Zloty (PLN)",
    language: "Polish",
    tips: [
      "Visit the European Solidarity Centre to understand the fall of Communism",
      "Climb St. Mary's Church tower for panoramic red-roof views",
      "Try pierogi at one of the milk bars (bar mleczny) for an authentic cheap meal",
      "Take a boat to Westerplatte where WWII began"
    ],
    foods: ["Pierogi", "Zapiekanka", "\u015Aledzie (Herring)", "Gda\u0144skie Nale\u015Bniki", "Oscypek"],
    neighborhoods: [
      { name: "Old Town", vibe: "Colorful facades, Neptune Fountain, maritime history" },
      { name: "Oliwa", vibe: "Cathedral, park gardens, peaceful residential" },
      { name: "Wrzeszcz", vibe: "Local life, Art Nouveau buildings, street markets" }
    ]
  },
  {
    id: "geneva",
    name: "Geneva",
    country: "Switzerland",
    continent: "Europe",
    emoji: "\u{1F1E8}\u{1F1ED}",
    tagline: "Peace Capital of the World",
    image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?w=800&q=80",
    coordinates: { lat: 46.2044, lng: 6.1432 },
    description: "Geneva sits at the foot of the Alps on the shores of Lake Geneva, combining international diplomacy with Swiss elegance. The iconic Jet d'Eau fountain, flower-lined promenades, and a rich watchmaking heritage make it one of Europe's most refined cities.",
    highlights: ["Jet d'Eau", "Old Town", "United Nations Office", "P\u00E2quis Baths", "St. Pierre Cathedral"],
    bestTime: "June to September",
    currency: "Swiss Franc (CHF)",
    language: "French",
    tips: [
      "Switzerland is expensive \u2014 buy a Geneva Transport Card from your hotel for free transit",
      "Swim at the Bains des P\u00E2quis for a local summer experience on the lake",
      "The Old Town's Place du Bourg-de-Four is perfect for a coffee break",
      "Take a boat across the lake to see Mont Blanc on a clear day"
    ],
    foods: ["Fondue", "Raclette", "Longeole", "Tarte aux Pruneaux", "Papet Vaudois"],
    neighborhoods: [
      { name: "Old Town (Vieille Ville)", vibe: "Cobblestone, antique shops, cathedral, history" },
      { name: "Carouge", vibe: "Bohemian, Italianate, artisan workshops, nightlife" },
      { name: "P\u00E2quis", vibe: "Multicultural, lakefront, lively, diverse dining" }
    ]
  },
  {
    id: "ghent",
    name: "Ghent",
    country: "Belgium",
    continent: "Europe",
    emoji: "\u{1F1E7}\u{1F1EA}",
    tagline: "Belgium's Best-Kept Secret",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
    coordinates: { lat: 51.0543, lng: 3.7174 },
    description: "Ghent is a captivating medieval city where Gothic cathedrals, a formidable castle, and scenic canals meet a thriving student population and cutting-edge cultural scene. Often overshadowed by Bruges, it offers all the charm with fewer crowds and more local character.",
    highlights: ["Gravensteen Castle", "St. Bavo's Cathedral (Ghent Altarpiece)", "Graslei & Korenlei", "Belfry of Ghent", "St. Bavo's Abbey"],
    bestTime: "April to September",
    currency: "Euro (\u20AC)",
    language: "Dutch",
    tips: [
      "Book ahead to see the Ghent Altarpiece at St. Bavo's Cathedral",
      "Walk the Graslei and Korenlei at night when the buildings are illuminated",
      "Try a Gentse Kop \u2014 a local meat dish found in traditional restaurants",
      "Rent a bike to explore like a local \u2014 Ghent is very cycle-friendly"
    ],
    foods: ["Gentse Waterzooi", "Neuzekes (Cuberdon)", "Gentse Stoverij", "Stofvlees", "Belgian Fries with Mayo"],
    neighborhoods: [
      { name: "Patershol", vibe: "Medieval alleyways, restaurant row, intimate" },
      { name: "Graslei", vibe: "Scenic waterfront, guildhalls, postcard-perfect" },
      { name: "Sint-Pieters", vibe: "University area, student bars, MSK museum" }
    ]
  },
  {
    id: "glasgow",
    name: "Glasgow",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "\u{1F1EC}\u{1F1E7}",
    tagline: "People Make Glasgow",
    image: "https://images.unsplash.com/photo-1512426935935-d0e7583f7b3b?w=800&q=80",
    coordinates: { lat: 55.8642, lng: -4.2518 },
    description: "Glasgow is Scotland's largest city and a cultural powerhouse, famed for its Victorian architecture, thriving music scene, and legendary friendliness. From the kelvingrove Museum to the vibrant West End, Glasgow delivers grit and warmth in equal measure.",
    highlights: ["Kelvingrove Museum", "Glasgow Cathedral", "Riverside Museum", "The Necropolis", " Buchanan Street"],
    bestTime: "May to September",
    currency: "British Pound (\u00A3)",
    language: "English",
    tips: [
      "Most museums in Glasgow are free \u2014 Kelvingrove is world-class",
      "Catch live music at King Tut's Wah Wah Hut where Oasis were discovered",
      "Explore the Necropolis for dramatic Victorian gothic atmosphere",
      "The West End is perfect for a Sunday afternoon \u2014 caf\u00E9s, vintage, parks"
    ],
    foods: ["Deep-Fried Mars Bar", "Haggis Neeps & Tatties", "Cullen Skink", "Tattie Scone", "Cranachan"],
    neighborhoods: [
      { name: "West End", vibe: "Bohemian, caf\u00E9s, Kelvingrove, university life" },
      { name: "Merchant City", vibe: "Upscale dining, galleries, stylish bars" },
      { name: "Finnieston", vibe: "Trendy restaurants, craft beer, hipster central" }
    ]
  },
  {
    id: "gothenburg",
    name: "Gothenburg",
    country: "Sweden",
    continent: "Europe",
    emoji: "\u{1F1F8}\u{1F1EA}",
    tagline: "Gateway to the Archipelago",
    image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800&q=80",
    coordinates: { lat: 57.7089, lng: 11.9746 },
    description: "Gothenburg, Sweden's second-largest city, sits on the west coast with a charming canal-lined center and easy access to a stunning archipelago. Known for its seafood, Volvo heritage, and laid-back vibe, it offers a distinctly Swedish coastal experience.",
    highlights: ["Liseberg Amusement Park", "Feskek\u00F4rka Fish Market", "Archipelago Islands", "Universeum", "Haga District"],
    bestTime: "June to August",
    currency: "Swedish Krona (SEK)",
    language: "Swedish",
    tips: [
      "Take a tram to S\u00F6dra Sk\u00E4rg\u00E5rden for stunning island day trips",
      "Visit Feskek\u00F4rka for the freshest seafood in town",
      "Stroll through Haga for wooden houses, caf\u00E9s, and the best cinnamon buns",
      "Get a Göteborg City Card for free attractions and transport"
    ],
    foods: ["Havskr\u00E4ft (Langoustine)", "R\u00E4kor (Shrimp)", "Kanelbullar", "Sm\u00F6rg\u00E5st\u00E5rta", "Pickled Herring"],
    neighborhoods: [
      { name: "Haga", vibe: "Historic wooden houses, artisan shops, cozy caf\u00E9s" },
      { name: "Linn\u00E9", vibe: "Trendy restaurants, bars, youthful energy" },
      { name: "Majorna", vibe: "Alternative, vintage, creative, community-driven" }
    ]
  },
  {
    id: "graz",
    name: "Graz",
    country: "Austria",
    continent: "Europe",
    emoji: "\u{1F1E6}\u{1F1F9}",
    tagline: "Austria's Culinary Capital",
    image: "https://images.unsplash.com/photo-1578950435899-d1c1bf932ab2?w=800&q=80",
    coordinates: { lat: 47.0707, lng: 15.4395 },
    description: "Graz, Austria's second-largest city, combines a beautifully preserved medieval old town with bold contemporary architecture. Surrounded by vineyards and dubbed the culinary capital of Austria, it rewards visitors with outstanding food, wine, and a relaxed Styrian atmosphere.",
    highlights: ["Schlossberg & Uhrturm", "Kunsthaus Graz", "Eggenberg Palace", "Grazer Landhaus", "Murinsel"],
    bestTime: "April to October",
    currency: "Euro (\u20AC)",
    language: "German",
    tips: [
      "Climb or take the funicular to the Schlossberg for panoramic views",
      "The Kunsthaus (Friendly Alien) is a must for contemporary art lovers",
      "Visit the Kaiser-Josef-Platz market for local Styrian products",
      "Pumpkin seed oil (K\u00FCrbiskern\u00F6l) is the local liquid gold \u2014 buy some to take home"
    ],
    foods: ["Steirisches K\u00FCrbiskern\u00F6l", "Verhackert", "Sterz", "Backhendl", "K\u00E4ferbohnensalat"],
    neighborhoods: [
      { name: "Innere Stadt", vibe: "UNESCO old town, Renaissance courtyards, vibrant" },
      { name: "Gries", vibe: "Multicultural, street food, creative spaces" },
      { name: "Geidorf", vibe: "Elegant, university quarter, caf\u00E9 culture" }
    ]
  },
  {
    id: "hamburg",
    name: "Hamburg",
    country: "Germany",
    continent: "Europe",
    emoji: "\u{1F1E9}\u{1F1EA}",
    tagline: "Gateway to the World",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    coordinates: { lat: 53.5511, lng: 9.9937 },
    description: "Hamburg is Germany's largest port city and one of Europe's most dynamic urban centers. The city seamlessly blends maritime heritage with bold modern architecture, from the stunning Elbphilharmonie to the historic Speicherstadt warehouse district.",
    highlights: ["Elbphilharmonie", "Speicherstadt", "Miniatur Wunderland", "Port of Hamburg", "St. Michael's Church"],
    bestTime: "May to September",
    currency: "Euro (\u20AC)",
    language: "German",
    tips: [
      "Book Elbphilharmonie plaza tickets online for free harbor views",
      "Miniatur Wunderland is the world's largest model railway \u2014 book ahead",
      "Take a harbor boat tour to see the massive container ships up close",
      "Explore the Schanze district for Hamburg's best caf\u00E9s and nightlife"
    ],
    foods: ["Fischbr\u00F6tchen", "Labskaus", "Franzbr\u00F6tchen", "Hamburger Aalsuppe", "Rote Gr\u00FCtze"],
    neighborhoods: [
      { name: "St. Pauli", vibe: "Reeperbahn nightlife, gritty, legendary" },
      { name: "Sternschanze", vibe: "Hipster, caf\u00E9s, vintage, street art" },
      { name: "HafenCity", vibe: "Modern, waterfront, Elbphilharmonie, sleek" }
    ]
  },
  {
    id: "hanover",
    name: "Hanover",
    country: "Germany",
    continent: "Europe",
    emoji: "\u{1F1E9}\u{1F1EA}",
    tagline: "The Green Metropolis",
    image: "https://images.unsplash.com/photo-1565457388055-7a39e0a7dca0?w=800&q=80",
    coordinates: { lat: 52.3759, lng: 9.7320 },
    description: "Hanover (Hannover) is a surprisingly green city with the largest urban forest in Europe and the magnificent Herrenhausen Gardens. As a major trade fair hub, it blends business energy with Lower Saxon charm and a vibrant cultural scene.",
    highlights: ["Herrenhausen Gardens", "New Town Hall (Neues Rathaus)", "Hanover Zoo", "Maschsee Lake", "Old Town"],
    bestTime: "May to September",
    currency: "Euro (\u20AC)",
    language: "German",
    tips: [
      "The Herrenhausen Gardens are stunning \u2014 visit in summer for the festivals",
      "Walk the Red Thread \u2014 a painted line that guides you to 36 city sights",
      "Rent a boat on the Maschsee for a relaxing afternoon",
      "The zoo is one of the best in Germany and great for families"
    ],
    foods: ["Calenberger Pfannenschlag", "Welfenspeise", "Gr\u00FCnkohl mit Bregenwurst", "Rote Gr\u00FCtze", "Springerle"],
    neighborhoods: [
      { name: "Altstadt", vibe: "Reconstructed half-timbered houses, cozy pubs, history" },
      { name: "Linden", vibe: "Alternative, multicultural, student bars, street art" },
      { name: "List", vibe: "Upscale residential, boutique shopping, elegant" }
    ]
  },
  {
    id: "helsinki",
    name: "Helsinki",
    country: "Finland",
    continent: "Europe",
    emoji: "\u{1F1EB}\u{1F1EE}",
    tagline: "Daughter of the Baltic",
    image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=800&q=80",
    coordinates: { lat: 60.1699, lng: 24.9384 },
    description: "Helsinki, Finland's seaside capital, is a masterpiece of Nordic design where functionalist architecture meets raw Baltic beauty. The city combines world-class design museums, a thriving food scene, and a unique island fortress \u2014 all within reach of pristine nature.",
    highlights: ["Suomenlinna Fortress", "Helsinki Cathedral", "Temppeliaukio Church", "Market Square", "Design Museum"],
    bestTime: "June to August (for midnight sun)",
    currency: "Euro (\u20AC)",
    language: "Finnish, Swedish",
    tips: [
      "Take the ferry to Suomenlinna \u2014 the island sea fortress is a UNESCO site",
      "Visit a public sauna and jump in the Baltic Sea like a local",
      "The Design District is perfect for Nordic design shopping",
      "Try salmon soup (lohikeitto) at Market Square"
    ],
    foods: ["Lohikeitto", "Karjalanpiirakka", "Lihaekal\u00E4erikko", "Korvapuusti", "Gravlax"],
    neighborhoods: [
      { name: "Design District", vibe: "Nordic design shops, galleries, creative energy" },
      { name: "Kallio", vibe: "Hipster, vintage bars, multicultural, youthful" },
      { name: "Kaartinkaupunki", vibe: "Elegant waterfront, cathedral neighborhood, stately" }
    ]
  },
  {
    id: "krakow",
    name: "Krak\u00F3w",
    country: "Poland",
    continent: "Europe",
    emoji: "\u{1F1F5}\u{1F1F1}",
    tagline: "Poland's Royal City",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8d7e28?w=800&q=80",
    coordinates: { lat: 50.0647, lng: 19.9450 },
    description: "Krak\u00F3w is Poland's cultural heart, a city of kings and dragons where the magnificent Wawel Castle presides over one of Europe's best-preserved medieval squares. Its rich history, thriving caf\u00E9 culture, and vibrant nightlife make it one of Eastern Europe's most beloved destinations.",
    highlights: ["Wawel Castle", "Main Market Square (Rynek)", "Kazimierz Jewish Quarter", "St. Mary's Basilica", "Wieliczka Salt Mine"],
    bestTime: "April to June, September to October",
    currency: "Polish Zloty (PLN)",
    language: "Polish",
    tips: [
      "Book Wieliczka Salt Mine tickets online \u2014 it's a UNESCO marvel",
      "Hear the Hejna\u0142 trumpet call from St. Mary's Tower every hour",
      "Explore Kazimierz for the best bars, street art, and Jewish history",
      "Eat at a milk bar (bar mleczny) for authentic, cheap Polish food"
    ],
    foods: ["Obwarzanek", "Pierogi", "Zapiekanka", "Maczanka", "Oscypek"],
    neighborhoods: [
      { name: "Old Town", vibe: "Grand medieval square, Cloth Hall, historic churches" },
      { name: "Kazimierz", vibe: "Jewish heritage, hip bars, street art, Schindler's Factory" },
      { name: "Podg\u00F3rze", vibe: "Gritty history, Ghetto Heroes Square, emerging creative scene" }
    ]
  },
  {
    id: "kyiv",
    name: "Kyiv",
    country: "Ukraine",
    continent: "Europe",
    emoji: "\u{1F1FA}\u{1F1E6}",
    tagline: "City of Golden Domes",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    coordinates: { lat: 50.4501, lng: 30.5234 },
    description: "Kyiv, Ukraine's capital, is a city of golden-domed churches, tree-lined boulevards, and a resilient spirit. Its ancient monasteries, vibrant street art, and legendary nightlife create an unforgettable blend of deep history and contemporary energy.",
    highlights: ["Kyiv Pechersk Lavra", "St. Sophia's Cathedral", "Independence Square (Maidan)", "Andriyivskyy Descent", "Motherland Monument"],
    bestTime: "May to September",
    currency: "Ukrainian Hryvnia (UAH)",
    language: "Ukrainian",
    tips: [
      "Visit the Lavra's cave monastery \u2014 bring a candle and wear modest clothing",
      "Walk down Andriyivskyy Descent for art vendors and street performers",
      "Ride the funicular for cheap views over the Dnipro River",
      "Check current travel advisories before planning your visit"
    ],
    foods: ["Borscht", "Varenyky", "Chicken Kyiv", "Holubtsi", "Syrnyky"],
    neighborhoods: [
      { name: "Podil", vibe: "Historic merchants' quarter, trendy caf\u00E9s, waterfront" },
      { name: "Pechersk", vibe: "Monasteries, government buildings, panoramic views" },
      { name: "Lypky", vibe: "Diplomatic quarter, elegant streets, quiet prestige" }
    ]
  },
  {
    id: "lausanne",
    name: "Lausanne",
    country: "Switzerland",
    continent: "Europe",
    emoji: "\u{1F1E8}\u{1F1ED}",
    tagline: "Olympic Capital by the Lake",
    image: "https://images.unsplash.com/photo-1572445271230-a78b5e8d5981?w=800&q=80",
    coordinates: { lat: 46.5197, lng: 6.6323 },
    description: "Lausanne drapes across steep hills above Lake Geneva, offering dramatic Alpine views and the home of the International Olympic Committee. This vibrant university city combines medieval charm with a cutting-edge cultural scene and world-class vineyards just outside town.",
    highlights: ["Olympic Museum", "Lausanne Cathedral", "Ouchy Waterfront", "Sauvabelin Tower", "Collection de l'Art Brut"],
    bestTime: "June to September",
    currency: "Swiss Franc (CHF)",
    language: "French",
    tips: [
      "The Art Brut museum houses the world's finest collection of outsider art",
      "Take the M2 metro \u2014 it's one of the steepest in the world",
      "Walk the lakeside in Ouchy at sunset for stunning Alpine views",
      "Explore Lavaux vineyards (UNESCO) just minutes from the city"
    ],
    foods: ["Papet Vaudois", "Fondue", "Saucisson Vaudois", "Cro\u00FBte au Fromage", "Tarte aux Pruneaux"],
    neighborhoods: [
      { name: "Old Town (Cit\u00E9)", vibe: "Medieval cathedral, winding alleys, student energy" },
      { name: "Ouchy", vibe: "Lakeside promenade, boat docks, relaxed, family-friendly" },
      { name: "Flon", vibe: "Industrial-chic, nightlife, galleries, creative hub" }
    ]
  },
  {
    id: "leeds",
    name: "Leeds",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "\u{1F1EC}\u{1F1E7}",
    tagline: "Yorkshire's Rising Star",
    image: "https://images.unsplash.com/photo-1595391598582-37939f4f8ef2?w=800&q=80",
    coordinates: { lat: 53.8008, lng: -1.5491 },
    description: "Leeds is a dynamic northern English city renowned for its Victorian architecture, thriving independent food scene, and legendary nightlife. Once an industrial powerhouse, it has reinvented itself as a cultural and shopping destination with Yorkshire warmth at its core.",
    highlights: ["Royal Armouries Museum", "Kirkstall Abbey", "Leeds Art Gallery", "Victoria Quarter", "Roundhay Park"],
    bestTime: "May to September",
    currency: "British Pound (\u00A3)",
    language: "English",
    tips: [
      "The Victoria Quarter has stunning Victorian arcades for shopping",
      "Kirkstall Abbey hosts outdoor cinema and markets in summer",
      "Explore the Call Lane area for the best nightlife",
      "Leeds Kirkgate Market is one of Europe's largest indoor markets"
    ],
    foods: ["Yorkshire Pudding", "Parkin", "Wensleydale Cheese", "Pie & Mash", "Liquorice (Pontefract Cakes)"],
    neighborhoods: [
      { name: "Headingley", vibe: "Student-heavy, cricket ground, lively pubs" },
      { name: "Call Lane", vibe: "Nightlife capital, cocktail bars, live music" },
      { name: "Hyde Park", vibe: "Bohemian, vintage shops, community feel" }
    ]
  },
  {
    id: "leicester",
    name: "Leicester",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "\u{1F1EC}\u{1F1E7}",
    tagline: "City of Discovery",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&q=80",
    coordinates: { lat: 52.6369, lng: -1.1398 },
    description: "Leicester is one of England's most diverse cities, famous as the final resting place of King Richard III and home to the National Space Centre. Its multicultural population has created one of the UK's best curry scenes and a vibrant cultural tapestry.",
    highlights: ["King Richard III Visitor Centre", "National Space Centre", "Leicester Cathedral", "New Walk Museum", "Abbey Park"],
    bestTime: "May to September",
    currency: "British Pound (\u00A3)",
    language: "English",
    tips: [
      "The Golden Mile on Belgrave Road is the best place for Indian food in the UK",
      "Book the King Richard III Visitor Centre to see where the king was found",
      "Diwali celebrations in Leicester are the largest outside India",
      "The National Space Centre is fantastic for families"
    ],
    foods: ["Leicester Cheese", "Melton Mowbray Pork Pie", "Chicken Tikka Masala", "Stilton Cheese", "Balti"],
    neighborhoods: [
      { name: "Belgrave (Golden Mile)", vibe: "South Asian culture, sari shops, incredible curry" },
      { name: "Clarendon Park", vibe: "Student area, independent caf\u00E9s, vintage shops" },
      { name: "St. Martins", vibe: "Historic, cathedral quarter, Old Town charm" }
    ]
  },
  {
    id: "leipzig",
    name: "Leipzig",
    country: "Germany",
    continent: "Europe",
    emoji: "\u{1F1E9}\u{1F1EA}",
    tagline: "The New Berlin",
    image: "https://images.unsplash.com/photo-1598902468171-43e82808dbab?w=800&q=80",
    coordinates: { lat: 51.3397, lng: 12.3731 },
    description: "Leipzig is a city of music, art, and revolution \u2014 Bach and Mendelssohn worked here, and the peaceful protests that ended the GDR began at its churches. Today, it's one of Germany's coolest cities, with a booming arts scene and some of Europe's most spectacular industrial-revival spaces.",
    highlights: ["St. Thomas Church (Bach's Grave)", "Monument to the Battle of the Nations", "Spinnerei Art Complex", "Leipzig Gewandhaus", "St. Nicholas Church"],
    bestTime: "May to October",
    currency: "Euro (\u20AC)",
    language: "German",
    tips: [
      "Visit Spinnerei \u2014 a former cotton mill turned massive art complex",
      "Attend a Thomanchor service at St. Thomas Church where Bach was cantor",
      "Explore Plagwitz for canals, caf\u00E9s, and industrial charm",
      "The Panometer offers a breathtaking 360-degree panoramic experience"
    ],
    foods: ["Leipziger Allerlei", "Leipziger Lerche", "Gose Beer", "S\u00E4chsische S\u00FClze", "Quarkkeulchen"],
    neighborhoods: [
      { name: "Plagwitz", vibe: "Industrial-chic, canals, alternative art scene" },
      { name: "S\u00FCdvorstadt", vibe: "Student quarter, vibrant bars, multicultural" },
      { name: "Zentrum", vibe: "Historic churches, Gewandhaus, shopping streets" }
    ]
  },
  {
    id: "liege",
    name: "Li\u00E8ge",
    country: "Belgium",
    continent: "Europe",
    emoji: "\u{1F1E7}\u{1F1EA}",
    tagline: "The Fiery City",
    image: "https://images.unsplash.com/photo-1588759698949-60817923e231?w=800&q=80",
    coordinates: { lat: 50.6326, lng: 5.5797 },
    description: "Li\u00E8ge is a passionate Walloon city along the Meuse River, known for its hearty cuisine, independent spirit, and the spectacular Guillemins railway station by Santiago Calatrava. It offers authentic Belgian culture without the tourist crowds of Brussels or Bruges.",
    highlights: ["Guillemins Station", "Montagne de Bueren", "Prince-Bishops' Palace", "Curtius Museum", "La Batte Market"],
    bestTime: "April to September",
    currency: "Euro (\u20AC)",
    language: "French",
    tips: [
      "Climb the 374 steps of Montagne de Bueren for panoramic city views",
      "La Batte Sunday market is Belgium's largest riverside market",
      "Try a Li\u00E8geoise waffle \u2014 it's different from the Brussels version",
      "The Guillemins station is an architectural masterpiece worth seeing"
    ],
    foods: ["Waffle de Li\u00E8ge", "Boulets \u00E0 la Li\u00E9geoise", "P\u00E2k\u00E8ye", "Caf\u00E9 Li\u00E9geois", "Sirop de Li\u00E8ge"],
    neighborhoods: [
      { name: "Le Carr\u00E9", vibe: "Student quarter, vibrant nightlife, restaurants" },
      { name: "Outremeuse", vibe: "Authentic local life, folklore, neighborhood pubs" },
      { name: "Guillemins", vibe: "Modern architecture hub, transport connections, riverside" }
    ]
  },
  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    continent: "Europe",
    emoji: "\u{1F1F5}\u{1F1F9}",
    tagline: "City of Seven Hills",
    image: "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800&q=80",
    coordinates: { lat: 38.7223, lng: -9.1393 },
    description: "Lisbon, Europe's sunniest capital, cascades down seven hills to the Tagus River in a glorious mosaic of pastel facades, azulejo tiles, and rattling vintage trams. The city blends centuries of maritime history with a contemporary creative energy that makes it one of Europe's most magnetic destinations.",
    highlights: ["Bel\u00E9m Tower", "Jer\u00F3nimos Monastery", "Alfama District", "S\u00E3o Jorge Castle", "Pra\u00E7a do Com\u00E9rcio"],
    bestTime: "March to June, September to November",
    currency: "Euro (\u20AC)",
    language: "Portuguese",
    tips: [
      "Get a Lisboa Card for free transport and museum entries",
      "Take Tram 28 through Alfama for the most scenic city ride",
      "Eat past\u00E9is de nata at the original bakery in Bel\u00E9m",
      "Explore the Miradouros (viewpoints) at sunset with a beer"
    ],
    foods: ["Past\u00E9is de Nata", "Bacalhau \u00E0 Br\u00E1s", "Sardinhas Assadas", "Francesinha", "Bifana"],
    neighborhoods: [
      { name: "Alfama", vibe: "Oldest quarter, fado music, labyrinthine streets" },
      { name: "Bairro Alto", vibe: "Nightlife, rooftop bars, eclectic energy" },
      { name: "LX Factory", vibe: "Creative hub, restaurants, bookshops in industrial spaces" }
    ]
  },
  {
    id: "liverpool",
    name: "Liverpool",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "\u{1F1EC}\u{1F1E7}",
    tagline: "World Capital of Pop",
    image: "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800&q=80",
    coordinates: { lat: 53.4084, lng: -2.9916 },
    description: "Liverpool is a city of legendary music, fierce football passion, and maritime grandeur. The UNESCO-listed waterfront, birthplace of The Beatles, and famously warm Scouse hospitality make it one of England's most characterful and visit-worthy cities.",
    highlights: ["Albert Dock", "The Beatles Story", "Liverpool Cathedral", "Royal Liver Building", "Anfield Stadium"],
    bestTime: "May to September",
    currency: "British Pound (\u00A3)",
    language: "English",
    tips: [
      "The Beatles Story at Albert Dock is a must for any music fan",
      "Climb Liverpool Cathedral tower for free panoramic views",
      "Take the Mersey Ferry for iconic waterfront views",
      "Explore the Baltic Triangle for Liverpool's best independent venues"
    ],
    foods: ["Scouse", "Wet Nelly", "Scouse Egg", "Lobscouse", "Panacalty"],
    neighborhoods: [
      { name: "Baltic Triangle", vibe: "Creative, street art, independent bars, digital hub" },
      { name: "Ropewalks", vibe: "Nightlife, music venues, Bold Street restaurants" },
      { name: "Mathew Street", vibe: "Beatles heritage, Cavern Club, tourist nightlife" }
    ]
  },
  {
    id: "ljubljana",
    name: "Ljubljana",
    country: "Slovenia",
    continent: "Europe",
    emoji: "\u{1F1F8}\u{1F1EE}",
    tagline: "Europe's Hidden Gem",
    image: "https://images.unsplash.com/photo-1567225591450-06036b3392a6?w=800&q=80",
    coordinates: { lat: 46.0569, lng: 14.5058 },
    description: "Ljubljana is a charming miniature capital where a dragon-guarded bridge spans the Ljubljanica River, pedestrian-only streets wind past Art Nouveau facades, and a hilltop castle surveys it all. Compact, green, and culturally rich, it's one of Europe's most delightful small cities.",
    highlights: ["Ljubljana Castle", "Triple Bridge", "Dragon Bridge", "Tivoli Park", "National Gallery"],
    bestTime: "May to September",
    currency: "Euro (\u20AC)",
    language: "Slovenian",
    tips: [
      "The city center is car-free \u2014 perfect for walking everywhere",
      "Take the funicular to the castle or walk up for views",
      "Visit the Open Kitchen (Odprta Kuhna) Friday food market",
      "Ljubljana is a perfect base for day trips to Lake Bled"
    ],
    foods: ["\u017Dlikrofi", "Kranjska Klobasa", "Potica", "\u017Dganci", "Prekmurska Gibanica"],
    neighborhoods: [
      { name: "Old Town", vibe: "Pedestrian-only, bridges, caf\u00E9s, castle views" },
      { name: "Trnovo", vibe: "Bohemian, riverside, artistic, student life" },
      { name: "Metelkova", vibe: "Alternative culture, street art, nightlife in former barracks" }
    ]
  },
  {
    id: "luxembourg",
    name: "Luxembourg",
    country: "Luxembourg",
    continent: "Europe",
    emoji: "\u{1F1F1}\u{1F1FA}",
    tagline: "The Green Heart of Europe",
    image: "https://images.unsplash.com/photo-1581789180593-0211c3e4b71c?w=800&q=80",
    coordinates: { lat: 49.6117, lng: 6.1300 },
    description: "Luxembourg City is a tiny but mighty capital perched on dramatic cliffs above deep river valleys. Its fortified old town and ancient casemates are UNESCO-listed, while the modern Kirchberg quarter houses EU institutions and cutting-edge architecture.",
    highlights: ["Bock Casemates", "Grand Ducal Palace", "Adolphe Bridge", "Grund Valley", "Mudam Museum"],
    bestTime: "May to September",
    currency: "Euro (\u20AC)",
    language: "Luxembourgish, French, German",
    tips: [
      "Public transport is completely free throughout the entire country",
      "Walk down to the Grund for a fairy-tale view of the old town above",
      "The Bock Casemates offer underground tunnels with stunning views",
      "Visit on National Day (June 23) for torchlight parades and fireworks"
    ],
    foods: ["Judd mat Gaardebounen", "Bouch\u00E9e \u00E0 la Reine", "Gromperekichelcher", "Quetschentaart", "Rieslingspascht\u00E9it"],
    neighborhoods: [
      { name: "Ville Haute (Upper Town)", vibe: "Grand Ducal Palace, shops, caf\u00E9s, historic" },
      { name: "Grund", vibe: "Valley-level charm, riverside pubs, postcard views" },
      { name: "Kirchberg", vibe: "EU quarter, modern museums, glass architecture" }
    ]
  },
  {
    id: "lyon",
    name: "Lyon",
    country: "France",
    continent: "Europe",
    emoji: "\u{1F1EB}\u{1F1F7}",
    tagline: "Capital of French Gastronomy",
    image: "https://images.unsplash.com/photo-1551866411-2883ce3d0c2e?w=800&q=80",
    coordinates: { lat: 45.7640, lng: 4.8357 },
    description: "Lyon, France's third-largest city, is universally regarded as the nation's gastronomic capital. Set at the confluence of the Rh\u00F4ne and Sa\u00F4ne rivers, it offers Renaissance quarters, hidden passageways (traboules), and a culinary tradition that has shaped the entire world of French cooking.",
    highlights: ["Vieux Lyon", "Basilica of Notre-Dame de Fourvi\u00E8re", "Mus\u00E9e des Confluences", "Traboules", "Parc de la T\u00EAte d'Or"],
    bestTime: "April to June, September to October",
    currency: "Euro (\u20AC)",
    language: "French",
    tips: [
      "Eat at a traditional Bouchon Lyonnais for the authentic local experience",
      "Walk through the traboules (hidden passageways) in Vieux Lyon",
      "Take the funicular up to Fourvi\u00E8re for spectacular city views",
      "The Halles de Paul Bocuse is a food market paradise"
    ],
    foods: ["Coq au Vin", "Quenelles de Brochet", "Tablier de Sapeur", "Cervelle de Canut", "Tarte aux Pralines"],
    neighborhoods: [
      { name: "Vieux Lyon", vibe: "Renaissance quarter, traboules, bouchons, historic" },
      { name: "La Croix-Rousse", vibe: "Former silk workers' hill, bohemian, markets" },
      { name: "Confluence", vibe: "Modern waterfront, museums, contemporary architecture" }
    ]
  },
  {
    id: "madrid",
    name: "Madrid",
    country: "Spain",
    continent: "Europe",
    emoji: "\u{1F1EA}\u{1F1F8}",
    tagline: "Heart of Spain",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
    coordinates: { lat: 40.4168, lng: -3.7038 },
    description: "Madrid, Spain's vibrant capital, is a city that lives life to the fullest. From the Prado's masterpieces to the electric atmosphere of a tapas crawl through La Latina, Madrid combines world-class art, legendary nightlife, and an infectious passion for living well.",
    highlights: ["Prado Museum", "Royal Palace", "Retiro Park", "Plaza Mayor", "Reina Sof\u00EDa Museum"],
    bestTime: "March to June, September to November",
    currency: "Euro (\u20AC)",
    language: "Spanish",
    tips: [
      "The Prado is free in the evening \u2014 go after 6pm",
      "Eat tapas in La Latina on a Sunday for the best atmosphere",
      "Rent a rowboat in Retiro Park for a peaceful city escape",
      "Dinner starts at 9pm in Madrid \u2014 don't arrive earlier or you'll be alone"
    ],
    foods: ["Cocido Madrile\u00F1o", "Bocadillo de Calamares", "Tortilla Espa\u00F1ola", "Churros con Chocolate", "Huevos Rotos"],
    neighborhoods: [
      { name: "La Latina", vibe: "Tapas bars, El Rastro flea market, Sunday tradition" },
      { name: "Malasa\u00F1a", vibe: "Hipster, vintage, nightlife, counter-culture" },
      { name: "Barrio de las Letras", vibe: "Literary quarter, golden age history, elegant dining" }
    ]
  },
  {
    id: "malaga",
    name: "M\u00E1laga",
    country: "Spain",
    continent: "Europe",
    emoji: "\u{1F1EA}\u{1F1F8}",
    tagline: "Costa del Sol Capital",
    image: "https://images.unsplash.com/photo-1592424000937-4160e7867acc?w=800&q=80",
    coordinates: { lat: 36.7213, lng: -4.4214 },
    description: "M\u00E1laga, birthplace of Picasso, is far more than a beach resort gateway. This Andalusian city boasts a stunning Moorish fortress, a vibrant art scene, and a revitalized historic center with some of southern Spain's best tapas and nightlife.",
    highlights: ["Alcazaba Fortress", "Picasso Museum", "M\u00E1laga Cathedral", "Gibralfaro Castle", "Muelle Uno"],
    bestTime: "March to June, September to November",
    currency: "Euro (\u20AC)",
    language: "Spanish",
    tips: [
      "The Picasso Museum is a must \u2014 book online for timed entry",
      "Walk up to Gibralfaro for the best views over the port and city",
      "Eat espetos (sardine skewers) at a beachside chiringuito",
      "The Atarazanas Market is perfect for fresh produce and tapas"
    ],
    foods: ["Espetos de Sardinas", "Gazpachuelo", "Porra Antequerana", "Ajoblanco", "Torta Malague\u00F1a"],
    neighborhoods: [
      { name: "Centro Hist\u00F3rico", vibe: "Pedestrian streets, tapas bars, cathedral, vibrant" },
      { name: "La Merced", vibe: "Picasso's birthplace, student bars, lively squares" },
      { name: "Pedregalejo", vibe: "Fisherman's quarter, beachside restaurants, relaxed" }
    ]
  },
  {
    id: "malmo",
    name: "Malm\u00F6",
    country: "Sweden",
    continent: "Europe",
    emoji: "\u{1F1F8}\u{1F1EA}",
    tagline: "Sweden's Southern Star",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&q=80",
    coordinates: { lat: 55.6050, lng: 13.0038 },
    description: "Malm\u00F6, Sweden's third-largest city, sits at the southern tip of the country connected to Copenhagen by the iconic \u00D8resund Bridge. A diverse and creative city, it offers striking modern architecture, a historic Dutch-Renaissance center, and a growing reputation as Scandinavia's most multicultural city.",
    highlights: ["Turning Torso", "Malm\u00F6hus Castle", "Lilla Torg", "Ribersborg Beach", "Moderna Museet Malm\u00F6"],
    bestTime: "June to August",
    currency: "Swedish Krona (SEK)",
    language: "Swedish",
    tips: [
      "Walk along Ribersborg beach for views of the \u00D8resund Bridge",
      "Lilla Torg is the heart of Malm\u00F6's nightlife and outdoor dining",
      "The city is very bike-friendly \u2014 rent a cycle to explore",
      "Take the train to Copenhagen in 35 minutes across the famous bridge"
    ],
    foods: ["Sm\u00F6rg\u00E5sbord", "Falukorv", "K\u00F6ttbullar", "Gr\u00E4ddt\u00E5rta", "Sk\u00E5nsk Apple Cake"],
    neighborhoods: [
      { name: "Lilla Torg", vibe: "Cobblestone square, outdoor dining, nightlife" },
      { name: "V\u00E4stra Hamnen", vibe: "Modern, Turning Torso, waterfront, sustainable" },
      { name: "M\u00F6llev\u00E5ngen", vibe: "Multicultural, food markets, street art, diverse" }
    ]
  },
  {
    id: "manchester",
    name: "Manchester",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "\u{1F1EC}\u{1F1E7}",
    tagline: "Cradle of the Industrial Revolution",
    image: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=800&q=80",
    coordinates: { lat: 53.4808, lng: -2.2426 },
    description: "Manchester is a city of industrial heritage, musical legend, and relentless innovation. From the world's first railway station to the iconic Hacienda nightclub, this northern powerhouse has always been at the forefront of cultural change, with world-class football, museums, and an infectious can-do attitude.",
    highlights: ["Museum of Science and Industry", "Manchester Cathedral", "Old Trafford", "Northern Quarter", "Manchester Art Gallery"],
    bestTime: "May to September",
    currency: "British Pound (\u00A3)",
    language: "English",
    tips: [
      "The Museum of Science and Industry is free and fascinating",
      "Explore the Northern Quarter for vinyl shops, street art, and caf\u00E9s",
      "Book a stadium tour at Old Trafford or Etihad well in advance",
      "The Christmas Markets are among the best in Europe"
    ],
    foods: ["Manchester Tart", "Eccles Cake", "Bury Black Pudding", "Pasty", "Vimto"],
    neighborhoods: [
      { name: "Northern Quarter", vibe: "Vinyl, street art, caf\u00E9s, indie shops" },
      { name: "Spinningfields", vibe: "Business district, upscale dining, cocktail bars" },
      { name: "Castlefield", vibe: "Roman ruins, canals, pubs, heritage" }
    ]
  },
  {
    id: "marseille",
    name: "Marseille",
    country: "France",
    continent: "Europe",
    emoji: "\u{1F1EB}\u{1F1F7}",
    tagline: "Mediterranean Melting Pot",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&q=80",
    coordinates: { lat: 43.2965, lng: 5.3698 },
    description: "Marseille, France's oldest city, is a raw and passionate Mediterranean port where North African, Italian, and Proven\u00E7al cultures collide. From the fish markets of the Vieux-Port to the limestone cliffs of the Calanques, it offers an untamed beauty unlike any other French city.",
    highlights: ["Vieux-Port", "Notre-Dame de la Garde", "Calanques National Park", "Le Panier", "MuCEM"],
    bestTime: "May to October",
    currency: "Euro (\u20AC)",
    language: "French",
    tips: [
      "Climb to Notre-Dame de la Garde for the best city and sea views",
      "Take a boat to the Calanques for spectacular limestone coves",
      "Explore Le Panier for street art, galleries, and local workshops",
      "Try bouillabaisse at a authentic restaurant on the Vieux-Port"
    ],
    foods: ["Bouillabaisse", "Navettes", "Pissaladi\u00E8re", "Pastis", "Aioli"],
    neighborhoods: [
      { name: "Le Panier", vibe: "Oldest quarter, artistic, narrow streets, colorful" },
      { name: "Vieux-Port", vibe: "Harbor, fish markets, boat watching, lively" },
      { name: "Cours Julien", vibe: "Street art, bars, alternative, multicultural" }
    ]
  },
  {
    id: "milan",
    name: "Milan",
    country: "Italy",
    continent: "Europe",
    emoji: "\u{1F1EE}\u{1F1F9}",
    tagline: "Fashion and Design Capital",
    image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=800&q=80",
    coordinates: { lat: 45.4642, lng: 9.1900 },
    description: "Milan is Italy's city of style, where the breathtaking Duomo, Leonardo da Vinci's Last Supper, and world-class fashion houses coexist with a modern, forward-thinking energy. It's a city that works hard and plays hard, with aperitivo culture at its sophisticated heart.",
    highlights: ["Duomo di Milano", "The Last Supper", "Galleria Vittorio Emanuele II", "Sforza Castle", "Brera Art Gallery"],
    bestTime: "April to June, September to October",
    currency: "Euro (\u20AC)",
    language: "Italian",
    tips: [
      "Book Last Supper tickets months in advance \u2014 they sell out fast",
      "Go to the Duomo rooftop at sunset for cathedral spires against the skyline",
      "Aperitivo in the Navigli district is the quintessential Milanese experience",
      "The Brera district is perfect for art, antiques, and intimate dining"
    ],
    foods: ["Risotto alla Milanese", "Cotoletta alla Milanese", "Panettone", "Ossobuco", "Aperol Spritz"],
    neighborhoods: [
      { name: "Navigli", vibe: "Canal-side aperitivo, vintage, nightlife, artsy" },
      { name: "Brera", vibe: "Art gallery, cobblestone, elegant, romantic" },
      { name: "Porta Nuova", vibe: "Skyscrapers, vertical forest, modern Milan" }
    ]
  },
  {
    id: "minsk",
    name: "Minsk",
    country: "Belarus",
    continent: "Europe",
    emoji: "\u{1F1E7}\u{1F1FE}",
    tagline: "Soviet Grandeur Reborn",
    image: "https://images.unsplash.com/photo-1565457388055-7a39e0a7dca0?w=800&q=80",
    coordinates: { lat: 53.9006, lng: 27.5590 },
    description: "Minsk is a city of monumental Stalinist architecture, broad avenues, and an unexpectedly vibrant modern scene. Nearly destroyed in WWII and rebuilt in Soviet grandeur, it now offers a fascinating blend of Soviet heritage, emerging caf\u00E9 culture, and warm Belarusian hospitality.",
    highlights: ["Independence Avenue", "National Library", "Island of Tears", "Victory Square", "Troitskoye Predmestye"],
    bestTime: "May to September",
    currency: "Belarusian Ruble (BYN)",
    language: "Belarusian, Russian",
    tips: [
      "The National Library's observation deck offers great city panoramas",
      "Walk the full length of Independence Avenue for the full Soviet experience",
      "Troitskoye Predmestye is the charming reconstructed old quarter",
      "Check current travel advisories and visa requirements before visiting"
    ],
    foods: ["Draniki", "Machanka", "Kalduny", "Zatzarka", "Babka"],
    neighborhoods: [
      { name: "Independence Avenue", vibe: "Stalinist grandeur, shops, theaters, monumental" },
      { name: "Troitskoye Predmestye", vibe: "Reconstructed old town, caf\u00E9s, riverside charm" },
      { name: "Kastrychnitskaya", vibe: "Industrial art space, creative, contemporary culture" }
    ]
  },
  {
    id: "monaco",
    name: "Monaco",
    country: "Monaco",
    continent: "Europe",
    emoji: "\u{1F1F2}\u{1F1E8}",
    tagline: "Playground of the Rich and Famous",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
    coordinates: { lat: 43.7384, lng: 7.4246 },
    description: "Monaco is the world's most glamorous microstate, a glittering strip of Mediterranean coastline where superyachts fill the harbor, the Grand Prix thunders through the streets, and the legendary Casino de Monte-Carlo sparkles under the Riviera sun.",
    highlights: ["Casino de Monte-Carlo", "Prince's Palace", "Oceanographic Museum", "Exotic Garden", "Harbour (Port Hercules)"],
    bestTime: "May to September, May for Grand Prix",
    currency: "Euro (\u20AC)",
    language: "French",
    tips: [
      "Watch the changing of the guard at the Prince's Palace at 11:55am",
      "The Exotic Garden offers stunning views and remarkable succulent plants",
      "Dress up for the Casino \u2014 there's a strict dress code in the main rooms",
      "You can walk the entire country in about an hour"
    ],
    foods: ["Barbajuan", "Socca", "Fougasse", "Pissaladi\u00E8re", "Stocafi"],
    neighborhoods: [
      { name: "Monte-Carlo", vibe: "Casino, luxury boutiques, grand hotels, glamorous" },
      { name: "Monaco-Ville (Le Rocher)", vibe: "Old town, palace, cathedral, historic" },
      { name: "La Condamine", vibe: "Harbor, market, local life, maritime" }
    ]
  },
  {
    id: "montpellier",
    name: "Montpellier",
    country: "France",
    continent: "Europe",
    emoji: "\u{1F1EB}\u{1F1F7}",
    tagline: "Sun-Drenched Student City",
    image: "https://images.unsplash.com/photo-1578926288207-aa8bc080685c?w=800&q=80",
    coordinates: { lat: 43.6108, lng: 3.8767 },
    description: "Montpellier is one of France's fastest-growing cities, a sun-sooked Languedoc gem with a massive student population that keeps its medieval center buzzing with energy. Its elegant Place de la Com\u00E9die, modern Antigone district, and proximity to Mediterranean beaches make it irresistible.",
    highlights: ["Place de la Com\u00E9die", "Fabre Museum", "Antigone District", "Promenade du Peyrou", "Saint-Pierre Cathedral"],
    bestTime: "April to October",
    currency: "Euro (\u20AC)",
    language: "French",
    tips: [
      "The Fabre Museum has an outstanding collection in a beautiful setting",
      "Wander the \u00E9cusson (old town) for hidden courtyards and boutiques",
      "Take a tram to the beach \u2014 the Mediterranean is just 20 minutes away",
      "The student population means great, affordable food everywhere"
    ],
    foods: ["Tielle S\u00E9toise", "Huitres de Bouzigues", "Brandade de Morue", "Petits P\u00E2t\u00E9s de P\u00E9zenas", "Fougasse"],
    neighborhoods: [
      { name: "\u00C9cusson (Old Town)", vibe: "Medieval streets, boutiques, caf\u00E9s, buzzing" },
      { name: "Antigone", vibe: "Modern neoclassical, riverside, striking architecture" },
      { name: "Beaux-Arts", vibe: "Artistic, galleries, the Fabre Museum, charming" }
    ]
  },
  {
    id: "moscow",
    name: "Moscow",
    country: "Russia",
    continent: "Europe",
    emoji: "\u{1F1F7}\u{1F1FA}",
    tagline: "Heart of the Bear",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80",
    coordinates: { lat: 55.7558, lng: 37.6173 },
    description: "Moscow is a city of epic scale and staggering beauty, where the candy-colored domes of St. Basil's Cathedral rise above Red Square and the Kremlin's towers command the skyline. From the opulent Metro stations to the modern skyscrapers of Moscow City, it is a capital of immense grandeur.",
    highlights: ["Red Square & Kremlin", "St. Basil's Cathedral", "Bolshoi Theatre", "Tretyakov Gallery", "Moscow Metro"],
    bestTime: "May to September",
    currency: "Russian Ruble (RUB)",
    language: "Russian",
    tips: [
      "The Moscow Metro stations are free art galleries \u2014 ride the full circle line",
      "Book Kremlin and Armoury tickets online to skip long queues",
      "Gorky Park is perfect for summer strolls and winter ice skating",
      "Check current travel advisories before planning your visit"
    ],
    foods: ["Borscht", "Beef Stroganoff", "Pelmeni", "Blini with Caviar", "Shchi"],
    neighborhoods: [
      { name: "Kitai-Gorod", vibe: "Historic, vibrant, Zaryadye Park, old merchant quarter" },
      { name: "Patriarshiye Prudy", vibe: "Literary, chic restaurants, Bulgakov's Moscow" },
      { name: "Krasny Oktyabr", vibe: "Former chocolate factory, galleries, nightlife, creative" }
    ]
  },
  {
    id: "munich",
    name: "Munich",
    country: "Germany",
    continent: "Europe",
    emoji: "\u{1F1E9}\u{1F1EA}",
    tagline: "Millionendorf (City of a Million Villages)",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
    coordinates: { lat: 48.1351, lng: 11.5820 },
    description: "Munich is Bavaria's elegant capital, where Oktoberfest beer tents, high-tech industry, and Alpine proximity create a uniquely attractive city. Its grand architecture, world-class museums, English Garden, and legendary beer culture offer an irresistible mix of tradition and modernity.",
    highlights: ["Marienplatz & Glockenspiel", "Nymphenburg Palace", "English Garden", "BMW Museum", "Pinakothek Museums"],
    bestTime: "June to September, late September for Oktoberfest",
    currency: "Euro (\u20AC)",
    language: "German",
    tips: [
      "Visit Marienplatz at 11am or noon to see the Glockenspiel performance",
      "Surfing on the Eisbach wave in the English Garden is free to watch",
      "Book Oktoberfest accommodation a year in advance",
      "The Viktualienmarkt is Munich's gourmet paradise"
    ],
    foods: ["Wei\u00DFwurst", "Pretzel", "Schweinshaxe", "Obatzda", "Leberk\u00E4se"],
    neighborhoods: [
      { name: "Altstadt-Lehel", vibe: "Historic center, Marienplatz, luxury shopping" },
      { name: "Schwabing", vibe: "Bohemian heritage, caf\u00E9s, English Garden, artistic" },
      { name: "Glockenbachviertel", vibe: "Trendy, nightlife, LGBTQ+ friendly, street art" }
    ]
  },
{
    id: "nantes",
    name: "Nantes",
    country: "France",
    continent: "Europe",
    emoji: "\u{1F1EB}\u{1F1F7}",
    tagline: "Where Art Meets the Loire",
    image: "https://images.unsplash.com/photo-1583571985035-2c73e7148fcd?w=800&q=80",
    coordinates: { lat: 47.2184, lng: -1.5536 },
    description: "Nantes, nestled along the Loire River in western France, is a vibrant city known for its artistic spirit and innovative public art installations. Once the capital of the Duchy of Brittany, it blends medieval heritage with cutting-edge creativity, exemplified by the fantastical Machines of the Isle of Nantes.",
    highlights: ["Machines of the Isle of Nantes", "Chateau des Ducs de Bretagne", "Jardin des Plantes", "Passage Pommeraye", "Les Machines de l'ile"],
    bestTime: "June to September",
    currency: "Euro (\u20AC)",
    language: "French",
    tips: [
      "Rent a bike to explore the Loire a Velo cycle routes along the river",
      "Visit the Machines of the Isle early to avoid crowds",
      "Try the local Muscadet wine with seafood",
      "The city's tram system is efficient and easy to navigate"
    ],
    foods: ["Galette Nantaise", "Muscadet Wine", "Crepe Bretonne", "Gateau Nantais", "Rillauds d'Anjou"],
    neighborhoods: [
      { name: "Bouffay", vibe: "Medieval quarter, lively bars and restaurants" },
      { name: "Ile de Nantes", vibe: "Creative district, mechanical elephants, street art" },
      { name: "Talensac", vibe: "Market area, foodie paradise, local produce" }
    ]
  },
  {
    id: "naples",
    name: "Naples",
    country: "Italy",
    continent: "Europe",
    emoji: "\u{1F1EE}\u{1F1F9}",
    tagline: "The Soul of Southern Italy",
    image: "https://images.unsplash.com/photo-1610024804356-f814d8969399?w=800&q=80",
    coordinates: { lat: 40.8518, lng: 14.2681 },
    description: "Naples, sprawling along the Bay of Naples beneath Mount Vesuvius, is one of Italy's most passionate and authentic cities. Birthplace of pizza, it boasts a UNESCO-listed historic center, world-class archaeological museums, and an energy that is raw, chaotic, and utterly captivating.",
    highlights: ["Pompeii Ruins", "Naples National Archaeological Museum", "Spaccanapoli", "Castel dell'Ovo", "Underground Naples"],
    bestTime: "April to June, September to October",
    currency: "Euro (\u20AC)",
    language: "Italian",
    tips: [
      "Eat pizza at L'Antica Pizzeria da Michele or Sorbillo for the real deal",
      "Take the Circumvesuviana train to Pompeii and Herculaneum",
      "Explore the underground catacombs for a unique perspective on the city",
      "Watch your belongings in crowded areas, especially around the train station"
    ],
    foods: ["Neapolitan Pizza", "Sfogliatella", "Ragu Napoletano", "Cuoppo Napoletano", "Pasta e Fagioli"],
    neighborhoods: [
      { name: "Spaccanapoli", vibe: "Historic heart, narrow streets, bustling energy" },
      { name: "Chiaia", vibe: "Upscale, waterfront, elegant shopping" },
      { name: "Vomero", vibe: "Hilltop views, residential, local life" }
    ]
  },
  {
    id: "newcastle",
    name: "Newcastle",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "\u{1F1EC}\u{1F1E7}",
    tagline: "The Party Capital of the North",
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=80",
    coordinates: { lat: 54.9783, lng: -1.6178 },
    description: "Newcastle upon Tyne, perched on the banks of the River Tyne in northeast England, is famous for its iconic bridges, world-class nightlife, and passionate Geordie spirit. The city blends industrial heritage with a thriving arts scene and some of the friendliest locals in the UK.",
    highlights: ["Tyne Bridge", "Newcastle Castle", "BALTIC Centre for Contemporary Art", "The Quayside", "St. James' Park"],
    bestTime: "May to September",
    currency: "British Pound (\u00A3)",
    language: "English",
    tips: [
      "Walk along the Quayside at sunset for stunning bridge views",
      "Visit the BALTIC art gallery, it's free and has great rooftop views",
      "Try a Newcastle Brown Ale in a traditional pub",
      "The Metro system is the easiest way to get around the city"
    ],
    foods: ["Stottie Cake", "Pease Pudding", "Newcastle Brown Ale", "Pan Haggerty", "Saveloy Dip"],
    neighborhoods: [
      { name: "Jesmond", vibe: "Leafy, cafes, student life" },
      { name: "Ouseburn", vibe: "Creative hub, breweries, music venues" },
      { name: "Quayside", vibe: "Waterfront dining, bars, iconic bridges" }
    ]
  },
  {
    id: "nice",
    name: "Nice",
    country: "France",
    continent: "Europe",
    emoji: "\u{1F1EB}\u{1F1F7}",
    tagline: "The Pearl of the French Riviera",
    image: "https://images.unsplash.com/photo-1503696967350-ad1874122058?w=800&q=80",
    coordinates: { lat: 43.7102, lng: 7.2620 },
    description: "Nice, the jewel of the Cote d'Azur, enchants visitors with its azure Mediterranean waters, elegant Promenade des Anglais, and a charming Old Town bursting with color. This sophisticated Riviera capital blends French chic with Italian flair, offering world-class museums, vibrant markets, and sun-drenched beaches.",
    highlights: ["Promenade des Anglais", "Vieux Nice (Old Town)", "Castle Hill", "Matisse Museum", "Cours Saleya Market"],
    bestTime: "May to September",
    currency: "Euro (\u20AC)",
    language: "French",
    tips: [
      "Climb Castle Hill at sunset for panoramic views of the Baie des Anges",
      "Explore the Cours Saleya market in the morning for fresh produce and flowers",
      "Take a day trip to nearby Antibes, Cannes, or Monaco by train",
      "Swim at Castel Plage for a private beach experience under the old town"
    ],
    foods: ["Socca", "Salade Nicoise", "Pissaladiere", "Ratatouille", "Tourte aux Blettes"],
    neighborhoods: [
      { name: "Vieux Nice", vibe: "Colorful, bustling markets, narrow alleys" },
      { name: "Promenade des Anglais", vibe: "Elegant, beachfront, iconic hotels" },
      { name: "Cimiez", vibe: "Residential, museums, Roman ruins" }
    ]
  },
  {
    id: "nicosia",
    name: "Nicosia",
    country: "Cyprus",
    continent: "Europe",
    emoji: "\u{1F1E8}\u{1F1FE}",
    tagline: "The World's Last Divided Capital",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    coordinates: { lat: 35.1856, lng: 33.3823 },
    description: "Nicosia, the capital of Cyprus, is the world's last divided capital city, split between the Greek Cypriot south and the Turkish Cypriot north. This unique city offers a fascinating blend of cultures, with Venetian walls enclosing a charming old town filled with museums, cafes, and centuries of history.",
    highlights: ["Ledra Street Crossing", "Cyprus Museum", "Venetian Walls", "Selimiye Mosque", "Laiki Geitonia"],
    bestTime: "March to May, September to November",
    currency: "Euro (\u20AC)",
    language: "Greek, Turkish",
    tips: [
      "Bring your passport to cross between the Greek and Turkish sides at Ledra Street",
      "Visit the Shacolas Tower Observatory for panoramic views of both sides",
      "Explore the Buffer Zone for a unique geopolitical experience",
      "Try both Greek and Turkish Cypriot cuisine while you can"
    ],
    foods: ["Souvlaki", "Halloumi", "Meze", "Kleftiko", "Baklava"],
    neighborhoods: [
      { name: "Laiki Geitonia", vibe: "Restored pedestrian quarter, traditional crafts" },
      { name: "Ledra Street", vibe: "Shopping hub, crossing point, vibrant" },
      { name: "Old City (North)", vibe: "Ottoman architecture, bazaars, mosques" }
    ]
  },
  {
    id: "nottingham",
    name: "Nottingham",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "\u{1F1EC}\u{1F1E7}",
    tagline: "Legendary Home of Robin Hood",
    image: "https://images.unsplash.com/photo-1599038362728-548ce27a146f?w=800&q=80",
    coordinates: { lat: 52.9548, lng: -1.1581 },
    description: "Nottingham, famously linked to the legendary Robin Hood, is a vibrant East Midlands city with a rich history, impressive cave networks, and a thriving cultural scene. The city combines its medieval heritage with modern shopping, award-winning restaurants, and a legendary music and nightlife culture.",
    highlights: ["Nottingham Castle", "City of Caves", "Wollaton Hall", "Old Market Square", "Ye Olde Trip to Jerusalem"],
    bestTime: "May to September",
    currency: "British Pound (\u00A3)",
    language: "English",
    tips: [
      "Explore the City of Caves for a unique underground experience",
      "Visit Wollaton Hall, the setting for Wayne Manor in The Dark Knight Rises",
      "Have a pint at Ye Olde Trip to Jerusalem, one of England's oldest pubs",
      "Check out the Lace Market area for great independent restaurants"
    ],
    foods: ["Notshire Pie", "Bramley Apple Pie", "Stilton Cheese", "Local Ale", "Goose Fair Treats"],
    neighborhoods: [
      { name: "Lace Market", vibe: "Historic, boutique hotels, trendy bars" },
      { name: "Hockley", vibe: "Creative, independent shops, street art" },
      { name: "West Bridgford", vibe: "Leafy suburb, riverside walks, cafes" }
    ]
  },
  {
    id: "nur-sultan",
    name: "Nur-Sultan",
    country: "Kazakhstan",
    continent: "Europe",
    emoji: "\u{1F1F0}\u{1F1FF}",
    tagline: "The Futuristic Steppe Capital",
    image: "https://images.unsplash.com/photo-1586613835341-52b442e0d8e1?w=800&q=80",
    coordinates: { lat: 51.1694, lng: 71.4491 },
    description: "Nur-Sultan (formerly Astana) is Kazakhstan's purpose-built capital, rising from the vast Kazakh steppe as a showcase of futuristic architecture and bold urban planning. Designed by world-renowned architects, its skyline is filled with gleaming towers, golden domes, and avant-garde structures that make it one of the most unique cities in Central Asia.",
    highlights: ["Bayterek Tower", "Khan Shatyr Entertainment Center", "Palace of Peace and Reconciliation", "Hazrat Sultan Mosque", "Astana Opera"],
    bestTime: "May to September",
    currency: "Kazakhstani Tenge (KZT)",
    language: "Kazakh, Russian",
    tips: [
      "Visit Bayterek Tower at sunset for panoramic views of the city",
      "Winters are brutally cold, pack accordingly if visiting November to March",
      "The Khan Shatyr mall has an indoor beach for year-round relaxation",
      "Learn a few phrases in Kazakh or Russian to connect with locals"
    ],
    foods: ["Beshbarmak", "Kazy", "Manty", "Baursak", "Shubat"],
    neighborhoods: [
      { name: "Left Bank", vibe: "Modern, government buildings, futuristic architecture" },
      { name: "Right Bank", vibe: "Older, traditional, local markets" },
      { name: "Esil District", vibe: "New development, parks, residential" }
    ]
  },
  {
    id: "nuremberg",
    name: "Nuremberg",
    country: "Germany",
    continent: "Europe",
    emoji: "\u{1F1E9}\u{1F1EA}",
    tagline: "Where History Lives in Every Stone",
    image: "https://images.unsplash.com/photo-1555882850-614104b49439?w=800&q=80",
    coordinates: { lat: 49.4521, lng: 11.0767 },
    description: "Nuremberg, Bavaria's second-largest city, is a place where medieval charm meets profound modern history. Its imposing castle, half-timbered houses, and famous Christmas market draw millions, while the Nazi rally grounds and Documentation Center offer sobering lessons from the 20th century.",
    highlights: ["Nuremberg Castle", "Documentation Center Nazi Party Rally Grounds", "St. Sebaldus Church", "Germanisches Nationalmuseum", "Christkindlesmarkt"],
    bestTime: "May to September, December for Christmas market",
    currency: "Euro (\u20AC)",
    language: "German",
    tips: [
      "Visit the Christkindlesmarkt in December for one of Germany's best Christmas markets",
      "Walk the castle walls for panoramic views of the old town",
      "Take the underground tour to explore medieval beer cellars",
      "Try the famous Nuremberg bratwurst, they're smaller than typical German sausages"
    ],
    foods: ["Nurnberger Bratwurst", "Lebkuchen", "Schäufele", "Drei im Weckla", "Nurnberger Lebkuchen"],
    neighborhoods: [
      { name: "Altstadt (Old Town)", vibe: "Medieval, castle, half-timbered houses" },
      { name: "St. Johannis", vibe: "Historic cemetery, artisan shops, peaceful" },
      { name: "Gostenhof", vibe: "Alternative, multicultural, street art" }
    ]
  },
  {
    id: "oslo",
    name: "Oslo",
    country: "Norway",
    continent: "Europe",
    emoji: "\u{1F1F3}\u{1F1F4}",
    tagline: "The Nordic Capital of Cool",
    image: "https://images.unsplash.com/photo-1433757741270-94a3bcadc2f3?w=800&q=80",
    coordinates: { lat: 59.9139, lng: 10.7522 },
    description: "Oslo, Norway's capital, sits at the head of the Oslofjord, seamlessly blending cutting-edge architecture with deep Nordic traditions. The city's world-class museums, vibrant food scene, and proximity to pristine nature make it a compelling destination that proves Scandinavian cool is more than just a design aesthetic.",
    highlights: ["Oslo Opera House", "Vigeland Park", "Munch Museum", "Aker Brygge", "Holmenkollen Ski Museum"],
    bestTime: "June to August",
    currency: "Norwegian Krone (NOK)",
    language: "Norwegian",
    tips: [
      "Walk on the roof of the Opera House for fjord views, it's designed for it",
      "Get an Oslo Pass for free museum entry and public transport",
      "Take a ferry to the islands in the Oslofjord for a swim",
      "Explore the Vinmonopolet (wine monopoly) for Norwegian craft drinks"
    ],
    foods: ["Gravlaks", "Kjottkaker", "Lefse", "Rakfisk", "Waffles with Brown Cheese"],
    neighborhoods: [
      { name: "Grunerlokka", vibe: "Hipster, vintage shops, riverside parks" },
      { name: "Aker Brygge", vibe: "Waterfront dining, modern architecture" },
      { name: "Gamlebyen", vibe: "Historic, medieval ruins, local charm" }
    ]
  },
  {
    id: "oxford",
    name: "Oxford",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "\u{1F1EC}\u{1F1E7}",
    tagline: "The City of Dreaming Spires",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    coordinates: { lat: 51.7520, lng: -1.2577 },
    description: "Oxford, home to the oldest university in the English-speaking world, is a city where centuries of academic excellence echo through honey-colored college walls. Beyond the dreaming spires, it offers world-class museums, punting on the Cherwell, lively pubs, and the magical atmosphere that inspired both Tolkien and Lewis Carroll.",
    highlights: ["Bodleian Library", "Christ Church College", "Radcliffe Camera", "Ashmolean Museum", "Botanic Garden"],
    bestTime: "April to September",
    currency: "British Pound (\u00A3)",
    language: "English",
    tips: [
      "Take a guided tour of the colleges to see areas normally closed to visitors",
      "Try punting on the River Cherwell on a sunny afternoon",
      "Visit the Ashmolean Museum, it's free and world-class",
      "Have a pint at The Turf Tavern, a hidden 13th-century pub"
    ],
    foods: ["Oxford Sausage", "Oxford Blue Cheese", "Bananoffee Pie", "Afternoon Tea", "Real Ale"],
    neighborhoods: [
      { name: "Jericho", vibe: "Trendy, canal-side, independent cinemas" },
      { name: "Cowley Road", vibe: "Multicultural, live music, street food" },
      { name: "Headington", vibe: "Literary connections, C.S. Lewis trail" }
    ]
  },
  {
    id: "palma",
    name: "Palma",
    country: "Spain",
    continent: "Europe",
    emoji: "\u{1F1EA}\u{1F1F8}",
    tagline: "Mediterranean Island Elegance",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80",
    coordinates: { lat: 39.5696, lng: 2.6502 },
    description: "Palma de Mallorca, the capital of the Balearic Islands, is a stunning Mediterranean city that combines Gothic grandeur with beachside relaxation. Its magnificent cathedral, vibrant old town, stylish marinas, and easy access to pristine coves make it one of Spain's most desirable destinations.",
    highlights: ["Cathedral of Santa Maria (La Seu)", "Bellver Castle", "Royal Palace of La Almudaina", "Palma Old Town", "Passeig del Born"],
    bestTime: "May to October",
    currency: "Euro (\u20AC)",
    language: "Spanish, Catalan",
    tips: [
      "Visit La Seu Cathedral designed partly by Gaudi, go in the morning for best light",
      "Explore the narrow streets of the old town on foot or by bicycle",
      "Take the vintage train to Soller for a scenic ride through orange groves",
      "The local markets like Mercat de l'Olivar are great for fresh produce and tapas"
    ],
    foods: ["Sobrasada", "Ensaïmada", "Tumbet", "Pa Amb Oli", "Caldereta de Langosta"],
    neighborhoods: [
      { name: "La Llotja", vibe: "Historic, seafood restaurants, marina views" },
      { name: "Santa Catalina", vibe: "Foodie district, trendy bars, cosmopolitan" },
      { name: "Casco Antiguo", vibe: "Medieval streets, hidden courtyards, boutiques" }
    ]
  },
  {
    id: "podgorica",
    name: "Podgorica",
    country: "Montenegro",
    continent: "Europe",
    emoji: "\u{1F1F2}\u{1F1EA}",
    tagline: "Gateway to Montenegrin Adventures",
    image: "https://images.unsplash.com/photo-1555882850-614104b49439?w=800&q=80",
    coordinates: { lat: 42.4411, lng: 19.2636 },
    description: "Podgorica, Montenegro's capital, is a city of contrasts where Ottoman-era bridges cross turquoise rivers and modern blocks sit alongside ancient ruins. While often overlooked in favor of the coast, it serves as an excellent base for exploring Montenegro's dramatic mountains, canyons, and vineyards.",
    highlights: ["Millennium Bridge", "Old Ribnica River Bridge", "King Nikola's Palace", "Cathedral of the Resurrection", "Lake Skadar"],
    bestTime: "May to October",
    currency: "Euro (\u20AC)",
    language: "Montenegrin",
    tips: [
      "Use Podgorica as a base to explore Lake Skadar, the Balkans' largest lake",
      "Visit the Moraca Canyon and Monastery for stunning natural scenery",
      "Try wine tasting in the nearby Crmnica wine region",
      "The city is very hot in summer, plan outdoor activities for morning or evening"
    ],
    foods: ["Njegusi Prosciutto", "Kacamak", "Cevapi", "Burek", "Rakija"],
    neighborhoods: [
      { name: "Stara Varos", vibe: "Ottoman heritage, mosques, traditional architecture" },
      { name: "Centar", vibe: "Modern, government buildings, cafes" },
      { name: "Zabjelo", vibe: "Residential, local restaurants, community feel" }
    ]
  },
  {
    id: "porto",
    name: "Porto",
    country: "Portugal",
    continent: "Europe",
    emoji: "\u{1F1F5}\u{1F1F9}",
    tagline: "Where Port Wine Flows Like Water",
    image: "https://images.unsplash.com/photo-1569959595862-1c84553361c1?w=800&q=80",
    coordinates: { lat: 41.1579, lng: -8.6291 },
    description: "Porto, Portugal's second city, cascades down steep hillsides to the Douro River in a glorious jumble of colorful tiles, wine lodges, and atmospheric alleyways. Famous worldwide for its namesake port wine, the city also captivates with its azulejo-tiled churches, ribeira waterfront, and an increasingly sophisticated food scene.",
    highlights: ["Ribeira District", "Dom Luis I Bridge", "Livraria Lello", "Clerigos Tower", "Port Wine Cellars"],
    bestTime: "May to October",
    currency: "Euro (\u20AC)",
    language: "Portuguese",
    tips: [
      "Cross the Dom Luis I Bridge on the upper deck for stunning views",
      "Book a port wine tasting at one of the Vila Nova de Gaia cellars",
      "Visit Livraria Lello early to avoid the long queues",
      "Ride the historic Tram 1 along the riverfront for a scenic journey"
    ],
    foods: ["Francesinha", "Bacalhau a Gomes de Sa", "Tripas a Moda do Porto", "Pastel de Nata", "Sandes de Pernil"],
    neighborhoods: [
      { name: "Ribeira", vibe: "UNESCO-listed waterfront, colorful buildings, lively" },
      { name: "Vila Nova de Gaia", vibe: "Port wine lodges, riverfront cellars" },
      { name: "Baixa", vibe: "Downtown shopping, grand avenues, historic cafes" }
    ]
  },
  {
    id: "portsmouth",
    name: "Portsmouth",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "\u{1F1EC}\u{1F1E7}",
    tagline: "Britain's Historic Naval Fortress",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    coordinates: { lat: 50.8198, lng: -1.0880 },
    description: "Portsmouth, the UK's only island city, is steeped in naval history and maritime heritage. Home to the Historic Dockyard and the legendary HMS Victory, it also offers vibrant waterfront dining, a thriving creative scene, and sweeping views across the Solent to the Isle of Wight.",
    highlights: ["Historic Dockyard", "Spinnaker Tower", "HMS Victory", "Southsea Castle", "Mary Rose Museum"],
    bestTime: "May to September",
    currency: "British Pound (\u00A3)",
    language: "English",
    tips: [
      "Get a ticket for the Historic Dockyard to see multiple attractions",
      "Take the lift up the Spinnaker Tower for views across the Solent",
      "Explore Southsea's independent shops and cafes along Albert Road",
      "Catch the hovercraft to the Isle of Wight for a unique experience"
    ],
    foods: ["Fish and Chips", "Southsea Ice Cream", "Portsmouth Gin", "Solent Oysters", "Traditional Pie"],
    neighborhoods: [
      { name: "Southsea", vibe: "Beachfront, independent shops, creative energy" },
      { name: "Gunwharf Quays", vibe: "Outlet shopping, waterfront dining, Spinnaker Tower" },
      { name: "Old Portsmouth", vibe: "Historic, cobbled streets, centuries-old pubs" }
    ]
  },
  {
    id: "poznan",
    name: "Poznan",
    country: "Poland",
    continent: "Europe",
    emoji: "\u{1F1F5}\u{1F1F1}",
    tagline: "The Cradle of Polish Statehood",
    image: "https://images.unsplash.com/photo-1583907157059-b7b36a6b7877?w=800&q=80",
    coordinates: { lat: 52.4064, lng: 16.9252 },
    description: "Poznan, one of Poland's oldest and most dynamic cities, is where the Polish state was born. Its stunning Renaissance-style Old Market Square, vibrant culinary scene, and entrepreneurial spirit make it a hidden gem that rivals better-known Polish cities. The famous mechanical goats on the town hall clock are a beloved symbol of the city.",
    highlights: ["Old Market Square", "Poznan Town Hall", "Imperial Castle", "Ostrów Tumski", "Lake Malta"],
    bestTime: "May to September",
    currency: "Polish Zloty (PLN)",
    language: "Polish",
    tips: [
      "Watch the mechanical goats butt heads at noon on the Town Hall clock",
      "Try St. Martin's croissants (rogal swietomarcinski), a local specialty",
      "Walk to Ostrow Tumski, the island where Poland was baptized",
      "Visit the food trucks at KontenerART by the Warta River"
    ],
    foods: ["Pyry z gzikiem", "Rogal Swietomarcinski", "Kaczka", "Kaszanka", "Zurek"],
    neighborhoods: [
      { name: "Stare Miasto", vibe: "Renaissance square, restaurants, nightlife" },
      { name: "Srodka", vibe: "Hipster cafes, murals, Poznan's best croissants" },
      { name: "Lazarz", vibe: "Art Nouveau architecture, parks, residential charm" }
    ]
  },
  {
    id: "prague",
    name: "Prague",
    country: "Czechia",
    continent: "Europe",
    emoji: "\u{1F1E8}\u{1F1FF}",
    tagline: "The City of a Hundred Spires",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80",
    coordinates: { lat: 50.0755, lng: 14.4378 },
    description: "Prague, the capital of the Czech Republic, is a fairy-tale city of Gothic spires, Baroque palaces, and cobblestone streets that have inspired artists and writers for centuries. From the iconic Charles Bridge to the astronomical clock, every corner reveals architectural treasures and a rich history that spans over a millennium.",
    highlights: ["Charles Bridge", "Prague Castle", "Old Town Square", "Astronomical Clock", "Josefov (Jewish Quarter)"],
    bestTime: "April to June, September to October",
    currency: "Czech Koruna (CZK)",
    language: "Czech",
    tips: [
      "Visit Charles Bridge at dawn to avoid the crowds",
      "Czech beer is among the world's best, try Pilsner Urquell at a local pub",
      "Skip the tourist trap restaurants near Old Town Square, explore side streets instead",
      "Prague Castle is free to enter the grounds, only interior sites require tickets"
    ],
    foods: ["Trdelnik", "Svickova", "Gulas", "Koleno", "Palačinky"],
    neighborhoods: [
      { name: "Mala Strana", vibe: "Baroque charm, embassy district, castle views" },
      { name: "Vinohrady", vibe: "Elegant, wine gardens, Art Nouveau buildings" },
      { name: "Zizkov", vibe: "Gritty, alternative, best nightlife in Prague" }
    ]
  },
  {
    id: "pristina",
    name: "Pristina",
    country: "Kosovo",
    continent: "Europe",
    emoji: "\u{1F1FD}\u{1F1F0}",
    tagline: "Europe's Youngest Capital",
    image: "https://images.unsplash.com/photo-1555882850-614104b49439?w=800&q=80",
    coordinates: { lat: 42.6629, lng: 21.1655 },
    description: "Pristina, the capital of Kosovo, is one of Europe's youngest and most energetic cities. With a predominantly youthful population, it pulses with an entrepreneurial spirit, vibrant cafe culture, and a growing arts scene. The city's mix of Ottoman remnants, communist-era architecture, and modern developments tells the complex story of a nation finding its identity.",
    highlights: ["National Library", "Ethnographic Museum", "Newborn Monument", "Gracanica Monastery", "Mother Teresa Boulevard"],
    bestTime: "May to September",
    currency: "Euro (\u20AC)",
    language: "Albanian, Serbian",
    tips: [
      "Take a photo at the NEWBORN monument, repainted annually with a new design",
      "Visit the National Library, its unique brutalist architecture is fascinating",
      "Day trip to Gracanica Monastery, a UNESCO World Heritage Site",
      "Cafe culture is huge, spend an afternoon people-watching on Mother Teresa Boulevard"
    ],
    foods: ["Flija", "Tavce Gravce", "Cevapi", "Burek", "Baklava"],
    neighborhoods: [
      { name: "Qendra (Center)", vibe: "Main boulevard, cafes, government buildings" },
      { name: "Dardania", vibe: "Residential, local eateries, community feel" },
      { name: "Ulpiana", vibe: "Quiet, parks, family-friendly" }
    ]
  },
  {
    id: "rennes",
    name: "Rennes",
    country: "France",
    continent: "Europe",
    emoji: "\u{1F1EB}\u{1F1F7}",
    tagline: "Brittany's Vibrant Capital",
    image: "https://images.unsplash.com/photo-1634658522830-58debe2b3ea9?w=800&q=80",
    coordinates: { lat: 48.1173, lng: -1.6778 },
    description: "Rennes, the capital of Brittany in northwest France, is a dynamic university city that seamlessly blends medieval half-timbered houses with modern architecture. Known for its thriving student population, excellent food scene, and the famous Les Champs Libres cultural center, it offers authentic Breton culture without the tourist crowds.",
    highlights: ["Parlement de Bretagne", "Thabor Garden", "Les Champs Libres", "Place des Lices", "Rennes Cathedral"],
    bestTime: "June to September",
    currency: "Euro (\u20AC)",
    language: "French",
    tips: [
      "Visit the Marche des Lices on Saturday morning, one of France's best markets",
      "Explore the medieval streets around Place du Champ Jacquet",
      "Try a traditional Breton galette and cider at a local creperie",
      "The Thabor Garden is perfect for a peaceful afternoon stroll"
    ],
    foods: ["Galette Bretonne", "Kouign-Amann", "Far Breton", "Cidre Breton", "Andouille de Guemene"],
    neighborhoods: [
      { name: "Centre Historique", vibe: "Medieval half-timbered houses, cobblestone streets" },
      { name: "Sainte-Anne", vibe: "Student life, vibrant bars, affordable eats" },
      { name: "Thabor", vibe: "Elegant, botanical garden, residential calm" }
    ]
  },
  {
    id: "reykjavik",
    name: "Reykjavik",
    country: "Iceland",
    continent: "Europe",
    emoji: "\u{1F1EE}\u{1F1F8}",
    tagline: "Where Fire Meets Ice",
    image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&q=80",
    coordinates: { lat: 64.1466, lng: -21.9426 },
    description: "Reykjavik, the world's northernmost capital, is a small but mighty city packed with colorful corrugated-iron houses, world-class restaurants, and an infectious creative energy. Surrounded by volcanic landscapes and the North Atlantic, it serves as the gateway to Iceland's otherworldly natural wonders, from geysers to glaciers.",
    highlights: ["Hallgrimskirkja", "Harpa Concert Hall", "Sun Voyager Sculpture", "Laugavegur Shopping Street", "Whale Watching Tours"],
    bestTime: "June to August (midnight sun), September to March (northern lights)",
    currency: "Icelandic Krona (ISK)",
    language: "Icelandic",
    tips: [
      "Book the Golden Circle day tour to see geysers, waterfalls, and tectonic plates",
      "Reykjavik is expensive, save money by eating at hot dog stands like Baejarins Beztu",
      "Visit the Secret Lagoon or Blue Lagoon for geothermal bathing",
      "Walk up to the top of Hallgrimskirkja tower for panoramic city views"
    ],
    foods: ["Skyr", "Plokkfiskur", "Icelandic Lamb Soup", "Rye Bread Ice Cream", "Hot Dog (Pylsur)"],
    neighborhoods: [
      { name: "Laugavegur Area", vibe: "Main shopping street, bars, restaurants, colorful" },
      { name: "Old Harbor", vibe: "Whale watching, seafood restaurants, maritime charm" },
      { name: "101 District", vibe: "Central, galleries, nightlife, creative energy" }
    ]
  },
  {
    id: "riga",
    name: "Riga",
    country: "Latvia",
    continent: "Europe",
    emoji: "\u{1F1F1}\u{1F1FB}",
    tagline: "The Pearl of the Baltics",
    image: "https://images.unsplash.com/photo-1573152143968-3cb0b5b79608?w=800&q=80",
    coordinates: { lat: 56.9496, lng: 24.1052 },
    description: "Riga, Latvia's capital, is the largest city in the Baltics and a treasure trove of Art Nouveau architecture, with over 750 buildings in the style. Its UNESCO-listed Old Town, vibrant Central Market housed in old zeppelin hangars, and a dynamic food and arts scene make it one of Northern Europe's most underrated destinations.",
    highlights: ["Old Town (Vecriga)", "Art Nouveau District", "Riga Central Market", "House of the Black Heads", "Freedom Monument"],
    bestTime: "May to September",
    currency: "Euro (\u20AC)",
    language: "Latvian",
    tips: [
      "Explore Alberta Street for the finest Art Nouveau architecture in Europe",
      "Visit the Central Market for local foods, especially in the old zeppelin hangars",
      "Try Riga Black Balsam, a traditional herbal liqueur dating from 1752",
      "Take a free walking tour of the Old Town for historical context"
    ],
    foods: ["Rupjmaize", "Grey Peas with Bacon", "Pelmeni", "Riga Black Balsam", "Sklandrausis"],
    neighborhoods: [
      { name: "Vecriga (Old Town)", vibe: "Medieval, cobblestone streets, Gothic spires" },
      { name: "Centrs", vibe: "Art Nouveau masterpieces, elegant boulevards" },
      { name: "Miera Iela", vibe: "Hipster, craft beer, independent shops" }
    ]
  },
  {
    id: "rotterdam",
    name: "Rotterdam",
    country: "Netherlands",
    continent: "Europe",
    emoji: "\u{1F1F3}\u{1F1F1}",
    tagline: "The City That Rebuilt Itself",
    image: "https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=800&q=80",
    coordinates: { lat: 51.9244, lng: 4.4777 },
    description: "Rotterdam, Europe's largest port city, was rebuilt from the ashes of WWII with bold modern architecture that makes it unlike any other Dutch city. Its futuristic skyline, innovative food halls, thriving arts scene, and raw urban energy give it a distinctly different character from Amsterdam's canal-house charm.",
    highlights: ["Cube Houses", "Markthal", "Erasmus Bridge", "Museum Boijmans Van Beuningen", "Euromast Tower"],
    bestTime: "April to September",
    currency: "Euro (\u20AC)",
    language: "Dutch",
    tips: [
      "Visit the Markthal for stunning architecture and diverse food stalls",
      "Take a harbor tour to appreciate the scale of Europe's largest port",
      "Explore the Cube Houses, one is open to the public as a museum",
      "Rotterdam's food scene is the most diverse in the Netherlands, explore it"
    ],
    foods: ["Kapsalon", "Bitterballen", "Stroopwafel", "Haring", "Erwtensoep"],
    neighborhoods: [
      { name: "Kralingen", vibe: "Leafy, lake, student area, cafes" },
      { name: "Katendrecht", vibe: "Former red-light district, now trendy foodie hotspot" },
      { name: "Witte de Withstraat", vibe: "Art, nightlife, galleries, restaurants" }
    ]
  },
  {
    id: "san-marino",
    name: "San Marino",
    country: "San Marino",
    continent: "Europe",
    emoji: "\u{1F1F8}\u{1F1F2}",
    tagline: "The Most Serene Microstate",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    coordinates: { lat: 43.9424, lng: 12.4578 },
    description: "San Marino, one of the world's oldest and smallest republics, sits atop a dramatic mountain in the heart of Italy. Its medieval fortresses, stunning Apennine views, and well-preserved historic center make this tiny microstate a fascinating day trip or weekend escape from the Italian mainland.",
    highlights: ["Three Towers of San Marino", "Palazzo Pubblico", "Basilica di San Marino", "Guaita Fortress", "Mount Titano"],
    bestTime: "April to October",
    currency: "Euro (\u20AC)",
    language: "Italian",
    tips: [
      "Walk between the Three Towers on Mount Titano for spectacular views",
      "San Marino stamps are collectible, send a postcard from the post office",
      "Visit the State Museum for the history of this ancient republic",
      "The city is very hilly, wear comfortable shoes"
    ],
    foods: ["Torta Tre Monti", "Piadina", "Nidi di Rondine", "Faggioli con le Cotiche", "Bustrengo"],
    neighborhoods: [
      { name: "Citta di San Marino", vibe: "Medieval mountaintop capital, fortresses, panoramic views" },
      { name: "Borgo Maggiore", vibe: "Market town at the base, cable car access" },
      { name: "Serravalle", vibe: "Modern shopping, sports, residential" }
    ]
  },
  {
    id: "sarajevo",
    name: "Sarajevo",
    country: "Bosnia and Herzegovina",
    continent: "Europe",
    emoji: "\u{1F1E7}\u{1F1E6}",
    tagline: "The Jerusalem of Europe",
    image: "https://images.unsplash.com/photo-1555882850-614104b49439?w=800&q=80",
    coordinates: { lat: 43.8563, lng: 18.4131 },
    description: "Sarajevo, cradled in a valley surrounded by mountains, is a city where East truly meets West. Mosques, churches, and synagogues stand within walking distance of each other, earning it the nickname 'Jerusalem of Europe.' Despite its turbulent recent history, Sarajevo's resilient spirit, incredible food, and warm hospitality make it one of the Balkans' most captivating cities.",
    highlights: ["Bascarsija (Old Bazaar)", "Latin Bridge", "Tunnel of Hope", "Yellow Fortress", "City Hall (Vijecnica)"],
    bestTime: "April to October",
    currency: "Bosnian Mark (BAM)",
    language: "Bosnian",
    tips: [
      "Walk through Bascarsija, the old Ottoman bazaar, and try Bosnian coffee",
      "Visit the Tunnel of Hope Museum to understand the siege of Sarajevo",
      "Watch the sunset from the Yellow Fortress overlooking the city",
      "Try Cevapi, Bosnia's national dish, at one of the many grill houses"
    ],
    foods: ["Cevapi", "Burek", "Bosanski Lonac", "Tufahija", "Baklava"],
    neighborhoods: [
      { name: "Bascarsija", vibe: "Ottoman bazaar, coppersmiths, traditional cafes" },
      { name: "Marijin Dvor", vibe: "Austro-Hungarian architecture, government buildings" },
      { name: "Grbavica", vibe: "Rebuilt post-war, local life, resilient community" }
    ]
  },
  {
    id: "seville",
    name: "Seville",
    country: "Spain",
    continent: "Europe",
    emoji: "\u{1F1EA}\u{1F1F8}",
    tagline: "The Soul of Andalusia",
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&q=80",
    coordinates: { lat: 37.3891, lng: -5.9845 },
    description: "Seville, the capital of Andalusia, is Spain at its most passionate. The city of flamenco, bullfighting, and tapas overflows with ornate Moorish architecture, orange-tree-lined streets, and a festival culture that lights up the calendar. Its cathedral, the largest Gothic building in the world, and the exquisite Alcazar are UNESCO treasures.",
    highlights: ["Royal Alcazar", "Seville Cathedral and Giralda", "Plaza de Espana", "Triana District", "Metropol Parasol"],
    bestTime: "March to May, September to November",
    currency: "Euro (\u20AC)",
    language: "Spanish",
    tips: [
      "Book Alcazar tickets online in advance to skip the long queues",
      "Visit Plaza de Espana early morning for photos without crowds",
      "Cross the river to Triana for authentic flamenco and ceramic workshops",
      "Summer temperatures regularly exceed 40C, plan indoor activities midday"
    ],
    foods: ["Tapas", "Gazpacho", "Salmorejo", "Churros con Chocolate", "Flamenco Eggs"],
    neighborhoods: [
      { name: "Santa Cruz", vibe: "Jewish quarter, narrow streets, flower-filled patios" },
      { name: "Triana", vibe: "Flamenco heartland, ceramic studios, riverside" },
      { name: "La Macarena", vibe: "Local, traditional, religious processions" }
    ]
  },
  {
    id: "sheffield",
    name: "Sheffield",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "\u{1F1EC}\u{1F1E7}",
    tagline: "The Outdoor City",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    coordinates: { lat: 53.3811, lng: -1.4701 },
    description: "Sheffield, nestled between seven hills at the edge of the Peak District, uniquely combines vibrant urban culture with immediate access to some of England's finest countryside. Once the steel capital of the world, it has reinvented itself as a city of independent businesses, craft breweries, and outdoor enthusiasts.",
    highlights: ["Peak District National Park", "Winter Garden", "Kelham Island Museum", "Sheffield Botanical Gardens", "Millennium Gallery"],
    bestTime: "May to September",
    currency: "British Pound (\u00A3)",
    language: "English",
    tips: [
      "The Peak District is just a short bus ride from the city center, go hiking",
      "Explore Kelham Island for the best craft beer scene in the UK",
      "Visit the Winter Garden, one of the largest temperate glasshouses in the UK",
      "Sheffield has more trees per person than any other European city, enjoy the green spaces"
    ],
    foods: ["Sheffield Fishcake", "Henderson's Relish", "Yorkshire Pudding", "Parkin", "Local Craft Beer"],
    neighborhoods: [
      { name: "Kelham Island", vibe: "Industrial heritage, craft breweries, street food" },
      { name: "Ecclesall Road", vibe: "Student area, bars, restaurants, botanical gardens" },
      { name: "Sharrow Vale", vibe: "Independent shops, community feel, farmers market" }
    ]
  },
  {
    id: "skopje",
    name: "Skopje",
    country: "North Macedonia",
    continent: "Europe",
    emoji: "\u{1F1F2}\u{1F1F0}",
    tagline: "Where Antiquity Meets Kitsch",
    image: "https://images.unsplash.com/photo-1555882850-614104b49439?w=800&q=80",
    coordinates: { lat: 41.9973, lng: 21.4280 },
    description: "Skopje, North Macedonia's capital, is a city of fascinating contrasts where an Ottoman-era bazaar meets an ambitious neoclassical makeover. The historic Old Bazaar, one of the oldest in the Balkans, sits across the Stone Bridge from a city center filled with grandiose statues and modern buildings, creating a uniquely eclectic atmosphere.",
    highlights: ["Old Bazaar", "Stone Bridge", "Kale Fortress", "Mother Teresa Memorial", "Matka Canyon"],
    bestTime: "May to October",
    currency: "Macedonian Denar (MKD)",
    language: "Macedonian",
    tips: [
      "Explore the Old Bazaar for traditional crafts, Turkish coffee, and kebabs",
      "Take a day trip to Matka Canyon for boat rides through stunning gorges",
      "Visit Kale Fortress for panoramic views of the city",
      "Skopje is very affordable compared to Western European capitals"
    ],
    foods: ["Tavce Gravce", "Ajvar", "Shopska Salad", "Pastrmajlija", "Rakija"],
    neighborhoods: [
      { name: "Old Bazaar", vibe: "Ottoman-era, mosques, traditional crafts, street food" },
      { name: "City Center", vibe: "Neoclassical statues, bridges, modern squares" },
      { name: "Debar Maalo", vibe: "Bohemian, cafes, bars, local hangout" }
    ]
  },
  {
    id: "sofia",
    name: "Sofia",
    country: "Bulgaria",
    continent: "Europe",
    emoji: "\u{1F1E7}\u{1F1EC}",
    tagline: "Europe's Most Affordable Capital",
    image: "https://images.unsplash.com/photo-1591905869-30d8ad6e4972?w=800&q=80",
    coordinates: { lat: 42.6977, lng: 23.3219 },
    description: "Sofia, Bulgaria's capital, sits at the foot of Mount Vitosha and layers thousands of years of history from Roman ruins to Ottoman mosques to Soviet-era monuments. One of Europe's most affordable capitals, it offers incredible value with outstanding food, vibrant nightlife, and a growing contemporary arts scene.",
    highlights: ["Alexander Nevsky Cathedral", "Vitosha Mountain", "Serdica Roman Ruins", "National Palace of Culture", "Boyana Church"],
    bestTime: "May to October",
    currency: "Bulgarian Lev (BGN)",
    language: "Bulgarian",
    tips: [
      "Take the cable car up Vitosha Mountain for hiking with city views",
      "Explore the Roman ruins of Serdica right under the city center for free",
      "Bulgarian yogurt is world-famous, try it with honey and walnuts",
      "Sofia is one of Europe's best-value cities for dining out"
    ],
    foods: ["Shopska Salad", "Banitsa", "Tarator", "Kavarma", "Rakia"],
    neighborhoods: [
      { name: "Lozenets", vibe: "Upscale, parks, embassy district" },
      { name: "Vitosha Boulevard Area", vibe: "Main shopping, cafes, street life" },
      { name: "Studentski Grad", vibe: "Student district, budget nightlife" }
    ]
  },
  {
    id: "southampton",
    name: "Southampton",
    country: "United Kingdom",
    continent: "Europe",
    emoji: "\u{1F1EC}\u{1F1E7}",
    tagline: "Gateway to the Seas",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    coordinates: { lat: 50.9097, lng: -1.4044 },
    description: "Southampton, a major port city on England's south coast, is forever linked to maritime history as the departure point of the Titanic. Today it is a vibrant, multicultural city with excellent shopping, a thriving cultural quarter, and easy access to the New Forest and the Isle of Wight.",
    highlights: ["SeaCity Museum", "Tudor House and Garden", "Southampton City Walls", "Ocean Village", "Solent Sky Museum"],
    bestTime: "May to September",
    currency: "British Pound (\u00A3)",
    language: "English",
    tips: [
      "Visit the SeaCity Museum to learn about the Titanic's connection to Southampton",
      "Walk the medieval town walls, the best-preserved in England",
      "Take a ferry to the Isle of Wight for a day trip",
      "Ocean Village has great waterside restaurants and marina views"
    ],
    foods: ["Fish and Chips", "Southampton Scone", "Nettle Beer", "Hampshire Pork", "Solent Crab"],
    neighborhoods: [
      { name: "Ocean Village", vibe: "Marina, restaurants, cinema, modern living" },
      { name: "Bedford Place", vibe: "Cafe culture, independent shops, creative" },
      { name: "Old Town", vibe: "Medieval walls, Tudor architecture, historic pubs" }
    ]
  },
  {
    id: "stockholm",
    name: "Stockholm",
    country: "Sweden",
    continent: "Europe",
    emoji: "\u{1F1F8}\u{1F1EA}",
    tagline: "Beauty on Water",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80",
    coordinates: { lat: 59.3293, lng: 18.0686 },
    description: "Stockholm, spread across 14 islands connected by bridges, is Scandinavia's most elegant capital. The city seamlessly combines its medieval Gamla Stan old town with cutting-edge design, world-class restaurants, and a progressive, eco-conscious culture. Surrounded by water and green spaces, it consistently ranks among the world's most livable cities.",
    highlights: ["Gamla Stan (Old Town)", "Vasa Museum", "Skansen Open-Air Museum", "Stockholm Palace", "ABBA Museum"],
    bestTime: "June to August",
    currency: "Swedish Krona (SEK)",
    language: "Swedish",
    tips: [
      "Get the Stockholm Pass for free entry to museums and boat tours",
      "Explore Gamla Stan's narrowest alley, Marten Trotzigs Grand, just 90cm wide",
      "Take a ferry to the archipelago islands for a quintessential Swedish experience",
      "Fika (coffee break with pastry) is a cultural must-do tradition"
    ],
    foods: ["Meatballs with Lingonberries", "Gravlax", "Kanelbullar", "Smorgasbord", "Prinsesstarta"],
    neighborhoods: [
      { name: "Gamla Stan", vibe: "Medieval old town, cobblestone streets, royal palace" },
      { name: "Sodermalm", vibe: "Hipster, vintage shops, viewpoints, nightlife" },
      { name: "Ostermalm", vibe: "Upscale, food hall, designer shopping" }
    ]
  },
  {
    id: "strasbourg",
    name: "Strasbourg",
    country: "France",
    continent: "Europe",
    emoji: "\u{1F1EB}\u{1F1F7}",
    tagline: "Where France Meets Germany",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
    coordinates: { lat: 48.5734, lng: 7.7521 },
    description: "Strasbourg, the capital of the Alsace region and seat of the European Parliament, is a city where French and German cultures blend harmoniously. Its stunning UNESCO-listed Grande Ile features a magnificent cathedral, picturesque canals in La Petite France, and half-timbered houses that look straight from a fairy tale.",
    highlights: ["Strasbourg Cathedral", "La Petite France", "European Parliament", "Palais Rohan", "Covered Bridges"],
    bestTime: "May to October, December for Christmas market",
    currency: "Euro (\u20AC)",
    language: "French",
    tips: [
      "Visit the Cathedral at night to see the astronomical clock in action",
      "Take a boat tour through the canals of La Petite France",
      "The Christmas market is one of Europe's oldest and most beautiful",
      "Try Alsatian wine along the Route des Vins d'Alsace"
    ],
    foods: ["Choucroute Garnie", "Tarte Flambee", "Kugelhopf", "Baeckeoffe", "Pain d'Epices"],
    neighborhoods: [
      { name: "La Petite France", vibe: "Canal-side, half-timbered houses, postcard-perfect" },
      { name: "Grande Ile", vibe: "UNESCO-listed island, cathedral, shops" },
      { name: "Neustadt", vibe: "Imperial German architecture, grand avenues" }
    ]
  },
  {
    id: "stuttgart",
    name: "Stuttgart",
    country: "Germany",
    continent: "Europe",
    emoji: "\u{1F1E9}\u{1F1EA}",
    tagline: "The Cradle of the Automobile",
    image: "https://images.unsplash.com/photo-1583907157059-b7b36a6b7877?w=800&q=80",
    coordinates: { lat: 48.7758, lng: 9.1829 },
    description: "Stuttgart, nestled in a valley surrounded by vineyards, is the birthplace of the automobile and home to both Mercedes-Benz and Porsche. Beyond its automotive heritage, the city surprises with excellent wine culture, green spaces, a vibrant cultural scene, and some of Germany's best Swabian cuisine.",
    highlights: ["Mercedes-Benz Museum", "Porsche Museum", "Wilhelma Zoo", "Stuttgart TV Tower", "Neues Schloss"],
    bestTime: "May to September",
    currency: "Euro (\u20AC)",
    language: "German",
    tips: [
      "The Mercedes-Benz Museum is one of the world's best corporate museums",
      "Stuttgart is surrounded by vineyards, join a wine hike (Weinwanderweg)",
      "Visit the Wilhelma, a zoo and botanical garden in one stunning park",
      "Try Maultaschen, the Swabian answer to ravioli"
    ],
    foods: ["Maultaschen", "Spatzle", "Linsen mit Spatzle", "Schwabischer Rostbraten", "Zwiebelkuchen"],
    neighborhoods: [
      { name: "Mitte", vibe: "City center, shopping, museums, Schlossplatz" },
      { name: "Bad Cannstatt", vibe: "Oldest neighborhood, mineral springs, Wasen festival" },
      { name: "West", vibe: "Alternative, galleries, multicultural dining" }
    ]
  },
  {
    id: "tallinn",
    name: "Tallinn",
    country: "Estonia",
    continent: "Europe",
    emoji: "\u{1F1EA}\u{1F1E7}",
    tagline: "Medieval Meets Digital",
    image: "https://images.unsplash.com/photo-1555882850-614104b49439?w=800&q=80",
    coordinates: { lat: 59.4370, lng: 24.7536 },
    description: "Tallinn, Estonia's capital, is a remarkable city where a perfectly preserved medieval old town sits alongside one of the world's most digitally advanced societies. Its UNESCO-listed Old Town is a maze of cobblestone streets, Gothic spires, and atmospheric courtyards, while the modern district of Telliskivi showcases the country's tech-savvy creative culture.",
    highlights: ["Old Town (Vanalinn)", "Toompea Hill", "Kumu Art Museum", "Telliskivi Creative City", "Kadriorg Palace"],
    bestTime: "May to September",
    currency: "Euro (\u20AC)",
    language: "Estonian",
    tips: [
      "Walk up to Toompea Hill for free panoramic views of the red rooftops",
      "Telliskivi Creative City is the hipster heart of modern Tallinn",
      "Estonia is a digital pioneer, free WiFi is available almost everywhere",
      "Try the medieval-themed restaurant Olde Hansa for an atmospheric meal"
    ],
    foods: ["Verivorst", "Rye Bread", "Kama", "Herring", "Mulgi Puder"],
    neighborhoods: [
      { name: "Vanalinn (Old Town)", vibe: "Medieval walls, Gothic spires, cobblestone magic" },
      { name: "Telliskivi", vibe: "Creative hub, street art, vintage markets" },
      { name: "Kalamaja", vibe: "Wooden houses, hipster cafes, seaside charm" }
    ]
  },
  {
    id: "tbilisi",
    name: "Tbilisi",
    country: "Georgia",
    continent: "Europe",
    emoji: "\u{1F1EC}\u{1F1EA}",
    tagline: "Where Europe Meets Asia",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    coordinates: { lat: 41.7151, lng: 44.8271 },
    description: "Tbilisi, Georgia's capital, is a city of warm sulfur baths, ancient churches, and a wine culture that predates any in Europe. Straddling the Mtkvari River in a dramatic valley setting, it enchants visitors with its mix of Art Nouveau, Soviet modernism, and traditional Georgian architecture, all bathed in legendary Georgian hospitality.",
    highlights: ["Old Town (Kala)", "Narikala Fortress", "Sulfur Baths", "Holy Trinity Cathedral", "Bridge of Peace"],
    bestTime: "May to October",
    currency: "Georgian Lari (GEL)",
    language: "Georgian",
    tips: [
      "Take the cable car to Narikala Fortress for panoramic city views",
      "Visit a traditional sulfur bath in the Abanotubani district",
      "Georgian wine is 8,000 years old, take a wine tour",
      "The food is incredible and incredibly affordable, feast on khinkali and khachapuri"
    ],
    foods: ["Khachapuri", "Khinkali", "Badrijani", "Lobio", "Churchkhela"],
    neighborhoods: [
      { name: "Kala (Old Town)", vibe: "Sulfur baths, mosques, synagogues, churches side by side" },
      { name: "Vera", vibe: "Bohemian, bookshops, art cafes" },
      { name: "Fabrika", vibe: "Creative hub, Soviet-era factory turned cultural space" }
    ]
  },
  {
    id: "the-hague",
    name: "The Hague",
    country: "Netherlands",
    continent: "Europe",
    emoji: "\u{1F1F3}\u{1F1F1}",
    tagline: "Royal City by the Sea",
    image: "https://images.unsplash.com/photo-1583907157059-b7b36a6b7877?w=800&q=80",
    coordinates: { lat: 52.0705, lng: 4.3007 },
    description: "The Hague, seat of the Dutch government and home to the International Court of Justice, is a sophisticated city where royal palaces meet wide North Sea beaches. Its elegant streets house world-class museums, while the seaside resort of Scheveningen offers the best of coastal living within a major city.",
    highlights: ["Mauritshuis Museum", "Peace Palace", "Scheveningen Beach", "Binnenhof", "Madurodam"],
    bestTime: "May to September",
    currency: "Euro (\u20AC)",
    language: "Dutch",
    tips: [
      "Visit the Mauritshuis to see Vermeer's Girl with a Pearl Earring",
      "Take a free tour of the Binnenhof, the Dutch parliament complex",
      "Scheveningen beach is perfect for a sunset stroll",
      "The Hague has some of the best Indonesian food outside Indonesia"
    ],
    foods: ["Haring", "Dutch Pancakes", "Bitterballen", "Indonesian Rijsttafel", "Kibbeling"],
    neighborhoods: [
      { name: "Centrum", vibe: "Government buildings, royal palace, upscale shopping" },
      { name: "Scheveningen", vibe: "Beach resort, seafood restaurants, pier" },
      { name: "Zeeheldenkwartier", vibe: "Hip, independent shops, cafes, galleries" }
    ]
  },
  {
    id: "the-ruhr",
    name: "The Ruhr",
    country: "Germany",
    continent: "Europe",
    emoji: "\u{1F1E9}\u{1F1EA}",
    tagline: "From Coal to Culture",
    image: "https://images.unsplash.com/photo-1583907157059-b7b36a6b7877?w=800&q=80",
    coordinates: { lat: 51.4344, lng: 7.0040 },
    description: "The Ruhr region, Germany's former industrial heartland, has transformed itself from a landscape of coal mines and steelworks into one of Europe's most exciting cultural destinations. The UNESCO-listed Zeche Zollverein coal mine, world-class museums, and vibrant urban spaces now define a region that celebrates its industrial heritage while embracing the future.",
    highlights: ["Zeche Zollverein", "Gasometer Oberhausen", "Landschaftspark Duisburg-Nord", "Museum Folkwang", "Tetraeder Bottrop"],
    bestTime: "May to September",
    currency: "Euro (\u20AC)",
    language: "German",
    tips: [
      "Zeche Zollverein is the region's crown jewel, allow a full day",
      "Visit Landschaftspark Duisburg-Nord at night when it's dramatically lit",
      "The Ruhr Museum offers the best introduction to the region's transformation",
      "Explore by bike on the extensive Route der Industriekultur network"
    ],
    foods: ["Currywurst", "Pfefferpotthast", "Rheinischer Sauerbraten", "Frikadellen", "Pilsner Beer"],
    neighborhoods: [
      { name: "Essen", vibe: "Cultural hub, Zollverein, museums" },
      { name: "Duisburg", vibe: "Industrial landscape park, world's largest inland port" },
      { name: "Bochum", vibe: "University city, theaters, vibrant nightlife" }
    ]
  },
  {
    id: "tirana",
    name: "Tirana",
    country: "Albania",
    continent: "Europe",
    emoji: "\u{1F1E6}\u{1F1F1}",
    tagline: "The Colorful Balkan Surprise",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    coordinates: { lat: 41.3275, lng: 19.8187 },
    description: "Tirana, Albania's energetic capital, has reinvented itself from a drab communist outpost into a vibrant, colorful city. Buildings painted in bold hues, a thriving cafe culture, and an infectious youthful energy make this one of the Balkans' most exciting cities. Surrounded by mountains, it offers both urban exploration and easy access to nature.",
    highlights: ["Skanderbeg Square", "Bunk'Art Museum", "Dajti Mountain Cable Car", "Et'hem Bey Mosque", "Blloku District"],
    bestTime: "May to October",
    currency: "Albanian Lek (ALL)",
    language: "Albanian",
    tips: [
      "Take the Dajti Express cable car for spectacular views of the city and mountains",
      "Visit Bunk'Art in a Cold War bunker for Albania's fascinating history",
      "Blloku is the trendy district for nightlife, cafes, and restaurants",
      "Tirana is one of Europe's most affordable capitals"
    ],
    foods: ["Tave Kosi", "Byrek", "Fergese", "Qofte", "Raki"],
    neighborhoods: [
      { name: "Blloku", vibe: "Trendy, nightlife, cafes, former communist elite zone" },
      { name: "Pazari i Ri", vibe: "New Bazaar, traditional restaurants, local market" },
      { name: "Pedonale", vibe: "Pedestrian area, street life, cultural events" }
    ]
  },
  {
    id: "toulouse",
    name: "Toulouse",
    country: "France",
    continent: "Europe",
    emoji: "\u{1F1EB}\u{1F1F7}",
    tagline: "La Ville Rose",
    image: "https://images.unsplash.com/photo-1634658638671-e9cffa0ce7c9?w=800&q=80",
    coordinates: { lat: 43.6047, lng: 1.4442 },
    description: "Toulouse, known as La Ville Rose for its distinctive brick architecture, is France's fourth-largest city and the capital of the European aerospace industry. This vibrant university city blends a rich medieval heritage with cutting-edge technology, offering excellent food, a lively student atmosphere, and the romantic Canal du Midi running through its heart.",
    highlights: ["Capitole de Toulouse", "Cite de l'Espace", "Basilique Saint-Sernin", "Canal du Midi", "Les Abattoirs Museum"],
    bestTime: "May to October",
    currency: "Euro (\u20AC)",
    language: "French",
    tips: [
      "Visit the Capitole building and its stunning Salle des Illustres for free",
      "Stroll along the Canal du Midi, a UNESCO World Heritage Site",
      "Cite de l'Espace is fantastic for space enthusiasts of all ages",
      "Toulouse has one of France's best student food scenes, explore the Rue Saint-Rome"
    ],
    foods: ["Cassoulet", "Saucisse de Toulouse", "Foie Gras", "Violet Candy", "Roquefort Cheese"],
    neighborhoods: [
      { name: "Capitole", vibe: "Historic center, grand square, shopping" },
      { name: "Les Carmes", vibe: "Charming, boutiques, gastronomy, lively squares" },
      { name: "Saint-Cyprien", vibe: "Across the Garonne, artsy, diverse, affordable" }
    ]
  },
  {
    id: "utrecht",
    name: "Utrecht",
    country: "Netherlands",
    continent: "Europe",
    emoji: "\u{1F1F3}\u{1F1F1}",
    tagline: "Amsterdam's Charming Little Sister",
    image: "https://images.unsplash.com/photo-1583907157059-b7b36a6b7877?w=800&q=80",
    coordinates: { lat: 52.0907, lng: 5.1214 },
    description: "Utrecht, the Netherlands' fourth-largest city, offers canal-side charm without Amsterdam's tourist crowds. Its unique wharf-level cellars along the Oudegracht are now home to cozy cafes and restaurants, while the iconic Dom Tower dominates the skyline. A vibrant student city with a rich history, it feels both cosmopolitan and intimately livable.",
    highlights: ["Dom Tower", "Oudegracht Canal", "Rietveld Schroder House", "Centraal Museum", "De Haar Castle"],
    bestTime: "April to September",
    currency: "Euro (\u20AC)",
    language: "Dutch",
    tips: [
      "Climb the Dom Tower for the best views of the city",
      "Have drinks or dinner at the wharf-level cellars along the Oudegracht",
      "The Rietveld Schroder House is a UNESCO-listed masterpiece of modern architecture",
      "Utrecht is the cycling capital of the Netherlands, rent a bike"
    ],
    foods: ["Bitterballen", "Stroopwafel", "Erwtensoep", "Oliebollen", "Kaassouflé"],
    neighborhoods: [
      { name: "Binnenstad", vibe: "Canal ring, wharf cellars, Dom Tower" },
      { name: "Wijk C", vibe: "Oldest neighborhood, community feel, trendy spots" },
      { name: "Lombok", vibe: "Multicultural, food markets, friendly atmosphere" }
    ]
  },
  {
    id: "vaduz",
    name: "Vaduz",
    country: "Liechtenstein",
    continent: "Europe",
    emoji: "\u{1F1F1}\u{1F1EE}",
    tagline: "A Tiny Kingdom in the Alps",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    coordinates: { lat: 47.1410, lng: 9.5215 },
    description: "Vaduz, the capital of Liechtenstein, is one of the world's smallest national capitals. Nestled in the Rhine Valley with the Alps as a backdrop, this diminutive city offers a surprising cultural richness with excellent museums, a hilltop prince's castle, and the unique experience of exploring a country smaller than many cities.",
    highlights: ["Vaduz Castle", "Kunstmuseum Liechtenstein", "Liechtenstein National Museum", "Postage Stamp Museum", "Alpine Hiking Trails"],
    bestTime: "June to September",
    currency: "Swiss Franc (CHF)",
    language: "German",
    tips: [
      "Vaduz Castle is the prince's residence and not open to the public, but hike up for views",
      "Get your passport stamped at the Tourist Office for a unique souvenir",
      "The Kunstmuseum has an impressive collection of modern and contemporary art",
      "Liechtenstein is tiny, you can explore the entire country in a day trip"
    ],
    foods: ["Käsknöpfle", "Ribel", "Hafalab", "Liechtenstein Wine", "Rösti"],
    neighborhoods: [
      { name: "Vaduz Town Center", vibe: "Compact, museums, cafes, shopping street" },
      { name: "Sareis", vibe: "Mountain area, chairlift access, hiking" },
      { name: "Mitteldorf", vibe: "Historic village feel, vineyards, traditional houses" }
    ]
  },
  {
    id: "valencia",
    name: "Valencia",
    country: "Spain",
    continent: "Europe",
    emoji: "\u{1F1EA}\u{1F1F8}",
    tagline: "Where Paella Was Born",
    image: "https://images.unsplash.com/photo-1599825133408-0d7e2b37a4e4?w=800&q=80",
    coordinates: { lat: 39.4699, lng: -0.3763 },
    description: "Valencia, Spain's third-largest city, is a sun-drenched Mediterranean gem where futuristic architecture meets historic grandeur. Birthplace of paella and home to the spectacular City of Arts and Sciences, it offers golden beaches, lush parks in a former riverbed, and a vibrant cultural scene without the crowds of Barcelona or Madrid.",
    highlights: ["City of Arts and Sciences", "Valencia Cathedral", "Central Market", "Turia Gardens", "La Malvarrosa Beach"],
    bestTime: "March to June, September to November",
    currency: "Euro (\u20AC)",
    language: "Spanish",
    tips: [
      "Visit the Central Market in the morning for the freshest produce and tapas",
      "The Turia Gardens, a park in a former riverbed, are perfect for cycling",
      "Try authentic paella valenciana at a restaurant near the Malvarrosa beach",
      "Las Fallas festival in March is wild, fiery, and unforgettable"
    ],
    foods: ["Paella Valenciana", "Fideua", "Horchata", "Agua de Valencia", "Buñuelos"],
    neighborhoods: [
      { name: "Ciutat Vella", vibe: "Historic center, cathedral, bustling markets" },
      { name: "Ruzafa", vibe: "Trendy, galleries, brunch spots, nightlife" },
      { name: "Cabanyal", vibe: "Beachside, street art, seafood restaurants" }
    ]
  },
  {
    id: "valletta",
    name: "Valletta",
    country: "Malta",
    continent: "Europe",
    emoji: "\u{1F1F2}\u{1F1F9}",
    tagline: "A Fortress City of Knights",
    image: "https://images.unsplash.com/photo-1573152143968-3cb0b5b79608?w=800&q=80",
    coordinates: { lat: 35.8989, lng: 14.5146 },
    description: "Valletta, the tiny capital of Malta, is a UNESCO World Heritage fortress city built by the Knights of St. John in the 16th century. Its golden limestone buildings, grand churches, and fortified walls pack an extraordinary amount of history, art, and culture into one of the world's smallest capital cities.",
    highlights: ["St. John's Co-Cathedral", "Grand Master's Palace", "Upper Barrakka Gardens", "Fort St. Elmo", "Manoel Theatre"],
    bestTime: "March to June, September to November",
    currency: "Euro (\u20AC)",
    language: "Maltese, English",
    tips: [
      "St. John's Co-Cathedral contains two Caravaggio masterpieces, don't miss them",
      "Watch the cannon salute at the Upper Barrakka Gardens at noon",
      "Valletta is walkable end to end in about 20 minutes",
      "Take a harbor cruise to appreciate the city's dramatic fortifications from the water"
    ],
    foods: ["Pastizzi", "Rabbit Stew (Fenek)", "Lampuki Pie", "Hobz biz-Zejt", "Imqaret"],
    neighborhoods: [
      { name: "City Gate Area", vibe: "Modern entrance, Parliament, Renzo Piano design" },
      { name: "Strait Street", vibe: "Historic bar strip, now revived with trendy bars" },
      { name: "Waterfront", vibe: "Grand Harbour, cruise ships, restaurants" }
    ]
  },
  {
    id: "vatican-city",
    name: "Vatican City",
    country: "Vatican City",
    continent: "Europe",
    emoji: "\u{1F1FB}\u{1F1E6}",
    tagline: "The Smallest Sovereign State",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    coordinates: { lat: 41.9029, lng: 12.4534 },
    description: "Vatican City, the world's smallest independent state, is the spiritual center of the Catholic Church and home to some of humanity's greatest artistic treasures. Within its tiny 44-hectare walls lie the Sistine Chapel, St. Peter's Basilica, and the Vatican Museums, containing one of the most extraordinary art collections ever assembled.",
    highlights: ["Sistine Chapel", "St. Peter's Basilica", "Vatican Museums", "St. Peter's Square", "Vatican Gardens"],
    bestTime: "October to March (fewer crowds)",
    currency: "Euro (\u20AC)",
    language: "Italian, Latin",
    tips: [
      "Book Vatican Museums tickets online well in advance to skip massive queues",
      "Dress modestly, shoulders and knees must be covered to enter St. Peter's",
      "Visit on Wednesday for the Pope's general audience (free tickets required)",
      "The Vatican Museums are vast, allow at least half a day"
    ],
    foods: ["Roman-style Pizza", "Suppli", "Gelato", "Cacio e Pepe", "Maritozzi"],
    neighborhoods: [
      { name: "St. Peter's Square", vibe: "Grand, spiritual, Bernini's colonnade" },
      { name: "Vatican Museums Complex", vibe: "Artistic treasure trove, Raphael Rooms, Sistine Chapel" },
      { name: "Vatican Gardens", vibe: "Peaceful, manicured, historic fountains" }
    ]
  },
  {
    id: "venice",
    name: "Venice",
    country: "Italy",
    continent: "Europe",
    emoji: "\u{1F1EE}\u{1F1F9}",
    tagline: "The Floating City",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
    coordinates: { lat: 45.4408, lng: 12.3155 },
    description: "Venice, built on 118 small islands connected by bridges and canals, is one of the most extraordinary cities ever created. Its labyrinthine streets lead to magnificent palaces, art-filled churches, and hidden squares, all reflected in the waters of its legendary canals. A city without cars, it remains as magical and disorienting as ever.",
    highlights: ["St. Mark's Square", "Rialto Bridge", "Doge's Palace", "Grand Canal", "St. Mark's Basilica"],
    bestTime: "April to June, September to November",
    currency: "Euro (\u20AC)",
    language: "Italian",
    tips: [
      "Get lost in the back streets, that's where the real Venice is",
      "Take a vaporetto (water bus) down the Grand Canal instead of an expensive gondola",
      "Visit in late afternoon when day-trippers leave and Venice becomes magical",
      "Try cicchetti (Venetian tapas) at a bacaro for an authentic local experience"
    ],
    foods: ["Cicchetti", "Risotto al Nero di Seppia", "Fritto Misto", "Tiramisu", "Spritz"],
    neighborhoods: [
      { name: "San Marco", vibe: "Grand, tourist hub, St. Mark's, Doge's Palace" },
      { name: "Dorsoduro", vibe: "Art galleries, university, Peggy Guggenheim" },
      { name: "Cannaregio", vibe: "Local life, Jewish ghetto, authentic restaurants" }
    ]
  },
  {
    id: "vienna",
    name: "Vienna",
    country: "Austria",
    continent: "Europe",
    emoji: "\u{1F1E6}\u{1F1F9}",
    tagline: "The City of Music",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80",
    coordinates: { lat: 48.2082, lng: 16.3738 },
    description: "Vienna, the former capital of the Habsburg Empire, is a city of imperial grandeur, musical heritage, and coffeehouse culture. Its magnificent Ringstrasse boulevard encircles a historic center packed with palaces, museums, and concert halls, while its legendary Kaffeehaus tradition ensures there is always time for a slice of Sachertorte.",
    highlights: ["Schonbrunn Palace", "St. Stephen's Cathedral", "Belvedere Palace", "Hofburg Palace", "Vienna State Opera"],
    bestTime: "April to October",
    currency: "Euro (\u20AC)",
    language: "German",
    tips: [
      "Standing tickets for the Vienna State Opera cost just a few euros",
      "Visit a traditional coffeehouse for the full Viennese experience",
      "Schonbrunn Palace gardens are free and stunning",
      "Take the Ringstrasse tram to see all the major imperial buildings"
    ],
    foods: ["Wiener Schnitzel", "Sachertorte", "Apfelstrudel", "Tafelspitz", "Kaiserschmarrn"],
    neighborhoods: [
      { name: "Innere Stadt", vibe: "Historic center, imperial palaces, luxury shopping" },
      { name: "Naschmarkt", vibe: "Food market, international cuisine, flea market" },
      { name: "Leopoldstadt", vibe: "Island district, Prater park, multicultural" }
    ]
  },
  {
    id: "vilnius",
    name: "Vilnius",
    country: "Lithuania",
    continent: "Europe",
    emoji: "\u{1F1F1}\u{1F1F9}",
    tagline: "Baltic Baroque Beauty",
    image: "https://images.unsplash.com/photo-1555882850-614104b49439?w=800&q=80",
    coordinates: { lat: 54.6872, lng: 25.2797 },
    description: "Vilnius, Lithuania's capital, has one of the largest and best-preserved medieval old towns in Eastern Europe, a UNESCO World Heritage Site brimming with Baroque churches, hidden courtyards, and cobbled lanes. This compact, affordable city also boasts a vibrant arts scene, excellent restaurants, and a republic within its borders, the bohemian Uzupis.",
    highlights: ["Vilnius Old Town", "Gediminas Tower", "Uzupis Republic", "Vilnius Cathedral", "Gate of Dawn"],
    bestTime: "May to September",
    currency: "Euro (\u20AC)",
    language: "Lithuanian",
    tips: [
      "Explore Uzupis, a self-declared independent republic with its own constitution",
      "Climb Gediminas Tower for panoramic views of the Baroque skyline",
      "Vilnius is one of Europe's most affordable capitals for dining and drinking",
      "Visit the KGB Museum for a sobering look at Soviet occupation"
    ],
    foods: ["Cepelinai", "Saltibarsciai", "Kibinai", "Vederiai", "Sakotis"],
    neighborhoods: [
      { name: "Senamiestis (Old Town)", vibe: "UNESCO-listed, Baroque churches, cobblestone streets" },
      { name: "Uzupis", vibe: "Bohemian republic, artists, galleries, quirky" },
      { name: "Station District", vibe: "Emerging, street art, hipster cafes" }
    ]
  },
  {
    id: "warsaw",
    name: "Warsaw",
    country: "Poland",
    continent: "Europe",
    emoji: "\u{1F1F5}\u{1F1F1}",
    tagline: "The Phoenix City",
    image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=800&q=80",
    coordinates: { lat: 52.2297, lng: 21.0122 },
    description: "Warsaw, Poland's capital, is a city that has risen from the ashes of wartime destruction to become one of Europe's most dynamic metropolises. Its meticulously reconstructed Old Town stands alongside bold modern architecture, a thriving food scene, and an energetic cultural life that reflects Poland's remarkable resilience and optimism.",
    highlights: ["Old Town (Stare Miasto)", "Royal Castle", "Wilanow Palace", "POLIN Museum", "Lazienki Park"],
    bestTime: "May to September",
    currency: "Polish Zloty (PLN)",
    language: "Polish",
    tips: [
      "The POLIN Museum of the History of Polish Jews is extraordinary, allow several hours",
      "Visit Lazienki Park on a summer Sunday for free Chopin concerts",
      "Explore the Praga district for an unpolished, authentic Warsaw experience",
      "Warsaw has one of the best value food scenes in Europe"
    ],
    foods: ["Pierogi", "Zurek", "Kotlet Schabowy", "Paczki", "Zapiekanka"],
    neighborhoods: [
      { name: "Stare Miasto (Old Town)", vibe: "Reconstructed medieval, castle, charming squares" },
      { name: "Praga", vibe: "Raw, artistic, pre-war architecture, authentic" },
      { name: "Nowy Swiat", vibe: "Elegant boulevard, cafes, shops, nightlife" }
    ]
  },
  {
    id: "wroclaw",
    name: "Wroclaw",
    country: "Poland",
    continent: "Europe",
    emoji: "\u{1F1F5}\u{1F1F1}",
    tagline: "The City of Dwarfs",
    image: "https://images.unsplash.com/photo-1583907157059-b7b36a6b7877?w=800&q=80",
    coordinates: { lat: 51.1079, lng: 17.0385 },
    description: "Wroclaw, spread across islands on the Oder River in southwest Poland, is one of the country's most charming and progressive cities. Famous for its hundreds of tiny dwarf statues scattered throughout the city, it offers a stunning market square, a unique pantheon of painted tenants' houses, and a vibrant student atmosphere.",
    highlights: ["Market Square (Rynek)", "Ostrow Tumski", "Panorama of Raclawice", "Centennial Hall", "Wroclaw Dwarfs"],
    bestTime: "May to September",
    currency: "Polish Zloty (PLN)",
    language: "Polish",
    tips: [
      "Hunt for the bronze dwarf statues scattered around the city, there are over 600",
      "Visit Ostrow Tumski (Cathedral Island) at sunset when a lamplighter still lights gas lamps",
      "The Panorama of Raclawice is a massive 360-degree painting, truly unique",
      "Wroclaw's Zoo is one of the largest and best in Poland"
    ],
    foods: ["Schlesisches Himmelreich", "Pierogi", "Kluszki Slaskie", "Zurek", "Strudel"],
    neighborhoods: [
      { name: "Rynek (Market Square)", vibe: "Colorful townhouses, restaurants, street performers" },
      { name: "Nadodrze", vibe: "Up-and-coming, art nouveau buildings, galleries" },
      { name: "Ostrow Tumski", vibe: "Sacred island, cathedral, gas-lit streets" }
    ]
  },
  {
    id: "yerevan",
    name: "Yerevan",
    country: "Armenia",
    continent: "Europe",
    emoji: "\u{1F1E6}\u{1F1F2}",
    tagline: "The Pink City",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    coordinates: { lat: 40.1792, lng: 44.4991 },
    description: "Yerevan, one of the world's oldest continuously inhabited cities, is built from pink volcanic tufa stone that gives it the nickname 'The Pink City.' With the snow-capped peak of Mount Ararat as its eternal backdrop, Armenia's capital offers a captivating mix of ancient history, Soviet-era grandeur, and a burgeoning contemporary arts and food scene.",
    highlights: ["Republic Square", "Cascade Complex", "Matenadaran Manuscript Museum", "Tsitsernakaberd (Armenian Genocide Memorial)", "Vernissage Market"],
    bestTime: "May to October",
    currency: "Armenian Dram (AMD)",
    language: "Armenian",
    tips: [
      "Climb the Cascade for panoramic views of the city and Mount Ararat",
      "Visit the Armenian Genocide Memorial for a profound historical understanding",
      "Armenian brandy is world-class, take a tour of the Ararat Brandy Factory",
      "Vernissage market is perfect for traditional crafts and souvenirs"
    ],
    foods: ["Lavash", "Khorovats", "Dolma", "Harissa", "Gata"],
    neighborhoods: [
      { name: "Kentron (Center)", vibe: "Republic Square, Cascade, museums, grand avenues" },
      { name: "Saryan Street", vibe: "Wine bars, cafes, the city's nightlife hub" },
      { name: "Kond", vibe: "Old Yerevan, narrow streets, traditional houses" }
    ]
  },
  {
    id: "zagreb",
    name: "Zagreb",
    country: "Croatia",
    continent: "Europe",
    emoji: "\u{1F1ED}\u{1F1F7}",
    tagline: "Croatia's Cultural Heart",
    image: "https://images.unsplash.com/photo-1555882850-614104b49439?w=800&q=80",
    coordinates: { lat: 45.8150, lng: 15.9819 },
    description: "Zagreb, Croatia's capital, is a city of elegant Austro-Hungarian architecture, leafy parks, and a thriving cafe culture that rivals Vienna's. Split between the medieval Upper Town and the more modern Lower Town, it offers world-class museums, vibrant street markets, and a culinary scene that has blossomed into one of Central Europe's best.",
    highlights: ["Ban Jelacic Square", "Upper Town (Gornji Grad)", "Museum of Broken Relationships", "Dolac Market", "St. Mark's Church"],
    bestTime: "April to October",
    currency: "Euro (\u20AC)",
    language: "Croatian",
    tips: [
      "The Museum of Broken Relationships is unique and surprisingly moving",
      "Visit Dolac open-air market on Saturday morning for the full experience",
      "Ride the funicular, one of the shortest in the world, to the Upper Town",
      "Zagreb's cafe culture is legendary, spend an afternoon on Tkalceva Street"
    ],
    foods: ["Strukli", "Purica s Mlincima", "Kremšnite", "Celevapi", "Mimice"],
    neighborhoods: [
      { name: "Gornji Grad (Upper Town)", vibe: "Medieval, parliament, St. Mark's Church, romantic" },
      { name: "Tkalceva Street", vibe: "Cafe society, nightlife, street food" },
      { name: "Marticeva", vibe: "Design shops, Art Nouveau, creative energy" }
    ]
  },
  {
    id: "zurich",
    name: "Zurich",
    country: "Switzerland",
    continent: "Europe",
    emoji: "\u{1F1E8}\u{1F1ED}",
    tagline: "Where Precision Meets Beauty",
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&q=80",
    coordinates: { lat: 47.3769, lng: 8.5417 },
    description: "Zurich, Switzerland's largest city, combines financial power with artistic soul in a stunning lakeside setting. Its well-preserved medieval Altstadt, world-class museums, pristine lake, and nearby Alps make it far more than a banking hub. The city consistently ranks among the world's most livable, with a quality of life that is palpable in every street and square.",
    highlights: ["Lake Zurich", "Old Town (Altstadt)", "Kunsthaus Zurich", "Bahnhofstrasse", "Uetliberg Mountain"],
    bestTime: "June to September",
    currency: "Swiss Franc (CHF)",
    language: "German",
    tips: [
      "Zurich is expensive, save money with the Zurich Card for transport and museum discounts",
      "Take a boat ride on Lake Zurich for stunning Alpine views",
      "Explore the Niederdorf area in the Old Town for restaurants and nightlife",
      "Hike or take the train up Uetliberg for panoramic city and mountain views"
    ],
    foods: ["Zurcher Geschnetzeltes", "Fondue", "Raclette", "Luxemburgerli", "Birchermuesli"],
    neighborhoods: [
      { name: "Altstadt (Old Town)", vibe: "Medieval lanes, guild houses, river views" },
      { name: "Zurich West", vibe: "Industrial-chic, galleries, nightlife, Freitag Tower" },
      { name: "Seefeld", vibe: "Lakeside, upscale, art galleries, parks" }
    ]
  }
];

export default cities;
