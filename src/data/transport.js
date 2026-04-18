const transport = {
  // === COUNTRY-LEVEL DEFAULTS ===
  // Lookup: transport[cityName] first, then transport[countryName]

  "Germany": {
    currency: "EUR",
    busSingle: "2.90 EUR",
    busDayPass: "8.80 EUR",
    metroAvailable: true,
    taxiBase: "3.50 EUR",
    taxiPerKm: "2.30 EUR",
    bikeRental: "Nextbike by TIER / Call-a-Bike",
    bikeRentalCost: "1 EUR/30min",
    walkability: "high",
    walkNote: "Most city centers are compact and walkable. Excellent bike lanes in all major cities."
  },
  "France": {
    currency: "EUR",
    busSingle: "1.70 EUR",
    busDayPass: "5.80 EUR",
    metroAvailable: true,
    taxiBase: "4.00 EUR",
    taxiPerKm: "1.80 EUR",
    bikeRental: "Velib / Velo'V / V'Lille",
    bikeRentalCost: "1.70 EUR/day (first 30min free)",
    walkability: "high",
    walkNote: "French city centers are pedestrian-friendly. Walking is the best way to explore historic quarters."
  },
  "United Kingdom": {
    currency: "GBP",
    busSingle: "2.00 GBP",
    busDayPass: "5.00 GBP",
    metroAvailable: true,
    taxiBase: "3.00 GBP",
    taxiPerKm: "1.80 GBP",
    bikeRental: "Santander Cycles / Nextbike",
    bikeRentalCost: "1.65 GBP/30min",
    walkability: "high",
    walkNote: "Compact city centers are best explored on foot. Use buses or trains between neighborhoods."
  },
  "Italy": {
    currency: "EUR",
    busSingle: "1.50 EUR",
    busDayPass: "5.00 EUR",
    metroAvailable: true,
    taxiBase: "3.50 EUR",
    taxiPerKm: "1.40 EUR",
    bikeRental: "BikeMi / various local schemes",
    bikeRentalCost: "2 EUR/hour",
    walkability: "high",
    walkNote: "Italian cities are very walkable. Historic centers are often pedestrian-only zones."
  },
  "Spain": {
    currency: "EUR",
    busSingle: "1.50 EUR",
    busDayPass: "5.00 EUR",
    metroAvailable: true,
    taxiBase: "3.00 EUR",
    taxiPerKm: "1.20 EUR",
    bikeRental: "Bicing / BiciMAD / various local schemes",
    bikeRentalCost: "1 EUR/30min",
    walkability: "high",
    walkNote: "Spanish cities have vibrant pedestrian zones. Evening walks (paseo) are a local tradition."
  },
  "Netherlands": {
    currency: "EUR",
    busSingle: "2.50 EUR",
    busDayPass: "8.00 EUR",
    metroAvailable: true,
    taxiBase: "3.50 EUR",
    taxiPerKm: "2.20 EUR",
    bikeRental: "OV-fiets / Swapfiets",
    bikeRentalCost: "4.55 EUR/day (OV-fiets)",
    walkability: "high",
    walkNote: "The Netherlands is cycling heaven. Rent a bike — it's the fastest and most authentic way to explore."
  },
  "Switzerland": {
    currency: "CHF",
    busSingle: "2.70 CHF",
    busDayPass: "8.80 CHF",
    metroAvailable: true,
    taxiBase: "6.00 CHF",
    taxiPerKm: "3.80 CHF",
    bikeRental: "PubliBike / SBB Rent a Bike",
    bikeRentalCost: "11 CHF/day",
    walkability: "high",
    walkNote: "Swiss cities are compact and very walkable. Excellent public transport everywhere. Get a Swiss Travel Pass."
  },
  "Poland": {
    currency: "PLN",
    busSingle: "3.40 PLN",
    busDayPass: "11.60 PLN",
    metroAvailable: true,
    taxiBase: "8.00 PLN",
    taxiPerKm: "2.40 PLN",
    bikeRental: "Nextbike / Veturilo / Wavelo",
    bikeRentalCost: "Free first 20min, then 1 PLN/30min",
    walkability: "high",
    walkNote: "Polish city centers are compact and walkable. Old Towns are best explored on foot."
  },
  "Belgium": {
    currency: "EUR",
    busSingle: "2.10 EUR",
    busDayPass: "7.50 EUR",
    metroAvailable: true,
    taxiBase: "3.50 EUR",
    taxiPerKm: "2.00 EUR",
    bikeRental: "Villo / Blue-bike",
    bikeRentalCost: "1.70 EUR/day (first 30min free)",
    walkability: "high",
    walkNote: "Belgian cities are compact and very walkable. Brussels, Bruges, and Ghent are ideal for walking tours."
  },
  "Sweden": {
    currency: "SEK",
    busSingle: "36 SEK",
    busDayPass: "130 SEK",
    metroAvailable: true,
    taxiBase: "45 SEK",
    taxiPerKm: "18 SEK",
    bikeRental: "Stockholm City Bikes / Donkey Republic",
    bikeRentalCost: "25 SEK/30min",
    walkability: "medium",
    walkNote: "City centers are walkable, but distances between attractions can be large. Use public transport for outer areas."
  },
  "Norway": {
    currency: "NOK",
    busSingle: "40 NOK",
    busDayPass: "125 NOK",
    metroAvailable: true,
    taxiBase: "60 NOK",
    taxiPerKm: "20 NOK",
    bikeRental: "Oslo City Bike / Donkey Republic",
    bikeRentalCost: "15 NOK/30min",
    walkability: "medium",
    walkNote: "City centers are walkable but hilly in some areas. Public transport is excellent and worth the cost."
  },
  "Denmark": {
    currency: "DKK",
    busSingle: "24 DKK",
    busDayPass: "80 DKK",
    metroAvailable: true,
    taxiBase: "40 DKK",
    taxiPerKm: "16 DKK",
    bikeRental: "Donkey Republic / Bycyklen",
    bikeRentalCost: "25 DKK/hour",
    walkability: "high",
    walkNote: "Copenhagen is one of the most bike-friendly cities in the world. Walk or cycle everywhere."
  },
  "Finland": {
    currency: "EUR",
    busSingle: "2.90 EUR",
    busDayPass: "8.00 EUR",
    metroAvailable: true,
    taxiBase: "5.90 EUR",
    taxiPerKm: "2.00 EUR",
    bikeRental: "Helsinki City Bikes",
    bikeRentalCost: "Free first 30min, then 1 EUR/30min",
    walkability: "high",
    walkNote: "Helsinki is compact and walkable. Great tram network for longer distances."
  },
  "Austria": {
    currency: "EUR",
    busSingle: "2.40 EUR",
    busDayPass: "5.80 EUR",
    metroAvailable: true,
    taxiBase: "3.80 EUR",
    taxiPerKm: "2.00 EUR",
    bikeRental: "Citybike Wien / Nextbike",
    bikeRentalCost: "1 EUR/30min (first hour free in Vienna)",
    walkability: "high",
    walkNote: "Austrian cities are compact and pedestrian-friendly. Vienna's Ringstraße is a beautiful walk."
  },
  "Portugal": {
    currency: "EUR",
    busSingle: "1.50 EUR",
    busDayPass: "4.50 EUR",
    metroAvailable: true,
    taxiBase: "3.25 EUR",
    taxiPerKm: "1.10 EUR",
    bikeRental: "Gira / MobiCascais",
    bikeRentalCost: "2 EUR/day",
    walkability: "medium",
    walkNote: "Lisbon is very hilly — walking can be strenuous. Use trams and funiculars. Porto and flatter cities are very walkable."
  },
  "Czechia": {
    currency: "CZK",
    busSingle: "30 CZK",
    busDayPass: "110 CZK",
    metroAvailable: true,
    taxiBase: "40 CZK",
    taxiPerKm: "28 CZK",
    bikeRental: "Nextbike / Rekola",
    bikeRentalCost: "Free first 15min, then 1 CZK/min",
    walkability: "high",
    walkNote: "Prague's center is very walkable. Use trams for hills. Cobblestone streets everywhere — wear good shoes."
  },
  "Greece": {
    currency: "EUR",
    busSingle: "1.20 EUR",
    busDayPass: "4.50 EUR",
    metroAvailable: true,
    taxiBase: "3.50 EUR",
    taxiPerKm: "1.00 EUR",
    bikeRental: " Athens by Bike / various local",
    bikeRentalCost: "5 EUR/hour",
    walkability: "medium",
    walkNote: "Athens center is walkable but hot in summer. Acropolis area requires comfortable shoes."
  },
  "Hungary": {
    currency: "HUF",
    busSingle: "350 HUF",
    busDayPass: "950 HUF",
    metroAvailable: true,
    taxiBase: "700 HUF",
    taxiPerKm: "280 HUF",
    bikeRental: "MOL Bubi",
    bikeRentalCost: "Free first 30min, then 500 HUF/hour",
    walkability: "high",
    walkNote: "Budapest's center is walkable. Buda side is hilly, Pest side is flat. Great tram along the Danube."
  },
  "Ireland": {
    currency: "EUR",
    busSingle: "2.00 EUR",
    busDayPass: "5.60 EUR",
    metroAvailable: false,
    taxiBase: "4.20 EUR",
    taxiPerKm: "1.50 EUR",
    bikeRental: "Dublin Bikes",
    bikeRentalCost: "Free first 30min, then 0.50 EUR/30min",
    walkability: "high",
    walkNote: "Dublin city center is compact and walkable. Walk along the Liffey and through Temple Bar."
  },
  "Romania": {
    currency: "RON",
    busSingle: "3.00 RON",
    busDayPass: "10.00 RON",
    metroAvailable: true,
    taxiBase: "2.50 RON",
    taxiPerKm: "2.00 RON",
    bikeRental: "I'Velo / various local",
    bikeRentalCost: "5 RON/hour",
    walkability: "high",
    walkNote: "Bucharest's center is walkable. Old Town area is best explored on foot."
  },
  "Bulgaria": {
    currency: "BGN",
    busSingle: "1.60 BGN",
    busDayPass: "4.00 BGN",
    metroAvailable: true,
    taxiBase: "1.00 BGN",
    taxiPerKm: "1.00 BGN",
    bikeRental: "Various local schemes",
    bikeRentalCost: "2 BGN/hour",
    walkability: "high",
    walkNote: "Sofia center is compact and walkable. Very affordable taxis as backup."
  },
  "Croatia": {
    currency: "EUR",
    busSingle: "0.93 EUR",
    busDayPass: "4.65 EUR",
    metroAvailable: false,
    taxiBase: "2.00 EUR",
    taxiPerKm: "1.00 EUR",
    bikeRental: "Nextbike / various local",
    bikeRentalCost: "1 EUR/hour",
    walkability: "high",
    walkNote: "Zagreb's center is compact and walkable. The Upper Town is reachable by funicular."
  },
  "Serbia": {
    currency: "RSD",
    busSingle: "80 RSD",
    busDayPass: "300 RSD",
    metroAvailable: false,
    taxiBase: "170 RSD",
    taxiPerKm: "65 RSD",
    bikeRental: "Various local schemes",
    bikeRentalCost: "100 RSD/hour",
    walkability: "high",
    walkNote: "Belgrade's center is walkable. Use buses or trams for outer neighborhoods."
  },
  "Slovakia": {
    currency: "EUR",
    busSingle: "0.90 EUR",
    busDayPass: "3.50 EUR",
    metroAvailable: false,
    taxiBase: "3.00 EUR",
    taxiPerKm: "1.00 EUR",
    bikeRental: "White Bikes / Slovnaft BAjk",
    bikeRentalCost: "1 EUR/hour",
    walkability: "high",
    walkNote: "Bratislava's Old Town is very compact and walkable. Walk up to the castle for great views."
  },
  "Slovenia": {
    currency: "EUR",
    busSingle: "1.30 EUR",
    busDayPass: "4.00 EUR",
    metroAvailable: false,
    taxiBase: "2.00 EUR",
    taxiPerKm: "1.20 EUR",
    bikeRental: "BicikeLJ",
    bikeRentalCost: "Free first hour, then 1 EUR/hour",
    walkability: "high",
    walkNote: "Ljubljana is one of Europe's most walkable cities. The entire center is car-free."
  },
  "Estonia": {
    currency: "EUR",
    busSingle: "Free (residents) / 1.50 EUR (tourists)",
    busDayPass: "3.00 EUR",
    metroAvailable: false,
    taxiBase: "3.00 EUR",
    taxiPerKm: "0.80 EUR",
    bikeRental: "Sixt bikes / various local",
    bikeRentalCost: "2 EUR/hour",
    walkability: "high",
    walkNote: "Tallinn's Old Town is compact and best explored on foot. Free public transport for registered residents."
  },
  "Latvia": {
    currency: "EUR",
    busSingle: "1.15 EUR",
    busDayPass: "3.00 EUR",
    metroAvailable: false,
    taxiBase: "2.50 EUR",
    taxiPerKm: "0.70 EUR",
    bikeRental: "Sixt bikes / various local",
    bikeRentalCost: "2 EUR/hour",
    walkability: "high",
    walkNote: "Riga's Old Town is very walkable. Compact center with Art Nouveau district nearby."
  },
  "Lithuania": {
    currency: "EUR",
    busSingle: "0.65 EUR",
    busDayPass: "2.50 EUR",
    metroAvailable: false,
    taxiBase: "2.00 EUR",
    taxiPerKm: "0.60 EUR",
    bikeRental: "Cyclocity / various local",
    bikeRentalCost: "1 EUR/hour",
    walkability: "high",
    walkNote: "Vilnius Old Town is UNESCO-listed and very walkable. Compact and charming."
  },
  "Russia": {
    currency: "RUB",
    busSingle: "50 RUB",
    busDayPass: "230 RUB",
    metroAvailable: true,
    taxiBase: "100 RUB",
    taxiPerKm: "14 RUB",
    bikeRental: "Moscow Bike / various local",
    bikeRentalCost: "50 RUB/30min",
    walkability: "medium",
    walkNote: "Moscow is vast — use the excellent metro. City center around Red Square is walkable."
  },
  "Ukraine": {
    currency: "UAH",
    busSingle: "8 UAH",
    busDayPass: "30 UAH",
    metroAvailable: true,
    taxiBase: "50 UAH",
    taxiPerKm: "12 UAH",
    bikeRental: "Nextbike Kyiv",
    bikeRentalCost: "20 UAH/hour",
    walkability: "high",
    walkNote: "Kyiv's center is walkable but hilly. Use funicular and metro for longer distances."
  },
  "Turkey": {
    currency: "TRY",
    busSingle: "15 TRY",
    busDayPass: "60 TRY",
    metroAvailable: true,
    taxiBase: "20 TRY",
    taxiPerKm: "12 TRY",
    bikeRental: "Istanbul Bike / Isbike",
    bikeRentalCost: "5 TRY/30min",
    walkability: "medium",
    walkNote: "Istanbul is hilly and vast — use trams and metro. Historic peninsula is walkable."
  },
  "Iceland": {
    currency: "ISK",
    busSingle: "490 ISK",
    busDayPass: "1,500 ISK",
    metroAvailable: false,
    taxiBase: "800 ISK",
    taxiPerKm: "350 ISK",
    bikeRental: "Reykjavik City Bike",
    bikeRentalCost: "1,000 ISK/hour",
    walkability: "high",
    walkNote: "Reykjavik is very compact. Walk everywhere in the city center."
  },
  "Luxembourg": {
    currency: "EUR",
    busSingle: "Free",
    busDayPass: "Free",
    metroAvailable: false,
    taxiBase: "3.00 EUR",
    taxiPerKm: "2.00 EUR",
    bikeRental: "Vel'OH!",
    bikeRentalCost: "Free first 30min, then 1 EUR/hour",
    walkability: "high",
    walkNote: "All public transport is FREE in Luxembourg since 2020. Walk the compact old town."
  },
  "Malta": {
    currency: "EUR",
    busSingle: "1.50 EUR (winter) / 2.00 EUR (summer)",
    busDayPass: "3.00 EUR",
    metroAvailable: false,
    taxiBase: "3.50 EUR",
    taxiPerKm: "1.40 EUR",
    bikeRental: "Nextbike Malta",
    bikeRentalCost: "2 EUR/hour",
    walkability: "medium",
    walkNote: "Valletta is very compact and walkable. Use buses for other towns. Very hot in summer."
  },
  "Cyprus": {
    currency: "EUR",
    busSingle: "1.50 EUR",
    busDayPass: "4.00 EUR",
    metroAvailable: false,
    taxiBase: "3.50 EUR",
    taxiPerKm: "1.20 EUR",
    bikeRental: "Various local schemes",
    bikeRentalCost: "2 EUR/hour",
    walkability: "medium",
    walkNote: "Nicosia's old town is walkable. Use buses or car for longer distances."
  },
  "Albania": {
    currency: "ALL",
    busSingle: "40 ALL",
    busDayPass: "100 ALL",
    metroAvailable: false,
    taxiBase: "200 ALL",
    taxiPerKm: "100 ALL",
    bikeRental: "Various local schemes",
    bikeRentalCost: "200 ALL/hour",
    walkability: "high",
    walkNote: "Tirana center is compact and walkable. Very affordable taxis as backup."
  },
  "Bosnia and Herzegovina": {
    currency: "BAM",
    busSingle: "1.60 BAM",
    busDayPass: "5.00 BAM",
    metroAvailable: false,
    taxiBase: "1.50 BAM",
    taxiPerKm: "1.00 BAM",
    bikeRental: "Various local schemes",
    bikeRentalCost: "2 BAM/hour",
    walkability: "high",
    walkNote: "Sarajevo's old town (Bascarsija) is compact and walkable. Very affordable city."
  },
  "Montenegro": {
    currency: "EUR",
    busSingle: "1.00 EUR",
    busDayPass: "3.00 EUR",
    metroAvailable: false,
    taxiBase: "1.50 EUR",
    taxiPerKm: "0.80 EUR",
    bikeRental: "Various local schemes",
    bikeRentalCost: "1 EUR/hour",
    walkability: "high",
    walkNote: "Podgorica is small. Most destinations reachable on foot."
  },
  "North Macedonia": {
    currency: "MKD",
    busSingle: "35 MKD",
    busDayPass: "100 MKD",
    metroAvailable: false,
    taxiBase: "50 MKD",
    taxiPerKm: "30 MKD",
    bikeRental: "Various local schemes",
    bikeRentalCost: "50 MKD/hour",
    walkability: "high",
    walkNote: "Skopje's center is compact and walkable. Old Bazaar and fortress area are best on foot."
  },
  "Kosovo": {
    currency: "EUR",
    busSingle: "0.50 EUR",
    busDayPass: "1.50 EUR",
    metroAvailable: false,
    taxiBase: "1.50 EUR",
    taxiPerKm: "0.70 EUR",
    bikeRental: "Various local schemes",
    bikeRentalCost: "1 EUR/hour",
    walkability: "high",
    walkNote: "Pristina is compact. Walk the city center and use cheap taxis."
  },
  "Moldova": {
    currency: "MDL",
    busSingle: "3 MDL",
    busDayPass: "12 MDL",
    metroAvailable: false,
    taxiBase: "25 MDL",
    taxiPerKm: "8 MDL",
    bikeRental: "Various local schemes",
    bikeRentalCost: "20 MDL/hour",
    walkability: "high",
    walkNote: "Chisinau is compact and very affordable. Walk the center and take cheap taxis."
  },
  "Georgia": {
    currency: "GEL",
    busSingle: "0.50 GEL",
    busDayPass: "1.50 GEL",
    metroAvailable: true,
    taxiBase: "2.50 GEL",
    taxiPerKm: "1.00 GEL",
    bikeRental: "Various local schemes",
    bikeRentalCost: "3 GEL/hour",
    walkability: "medium",
    walkNote: "Tbilisi is hilly — use the metro and funicular. Old town is walkable."
  },
  "Armenia": {
    currency: "AMD",
    busSingle: "100 AMD",
    busDayPass: "250 AMD",
    metroAvailable: true,
    taxiBase: "600 AMD",
    taxiPerKm: "100 AMD",
    bikeRental: "Various local schemes",
    bikeRentalCost: "300 AMD/hour",
    walkability: "medium",
    walkNote: "Yerevan center is walkable and flat. Use metro for outer areas."
  },
  "Azerbaijan": {
    currency: "AZN",
    busSingle: "0.30 AZN",
    busDayPass: "1.00 AZN",
    metroAvailable: true,
    taxiBase: "2.00 AZN",
    taxiPerKm: "0.70 AZN",
    bikeRental: "Various local schemes",
    bikeRentalCost: "1 AZN/hour",
    walkability: "medium",
    walkNote: "Baku's Old Town (Icherisheher) is walkable. Boulevard area is great for walking."
  },
  "Belarus": {
    currency: "BYN",
    busSingle: "0.80 BYN",
    busDayPass: "2.50 BYN",
    metroAvailable: true,
    taxiBase: "2.50 BYN",
    taxiPerKm: "0.70 BYN",
    bikeRental: "Various local schemes",
    bikeRentalCost: "1 BYN/hour",
    walkability: "high",
    walkNote: "Minsk's center is spacious and walkable. Wide Soviet-era avenues."
  },
  "Andorra": {
    currency: "EUR",
    busSingle: "1.90 EUR",
    busDayPass: "5.00 EUR",
    metroAvailable: false,
    taxiBase: "3.50 EUR",
    taxiPerKm: "1.50 EUR",
    bikeRental: "Various local schemes",
    bikeRentalCost: "3 EUR/hour",
    walkability: "high",
    walkNote: "Andorra la Vella is small and walkable. Mountainous terrain — wear good shoes."
  },
  "Liechtenstein": {
    currency: "CHF",
    busSingle: "2.80 CHF",
    busDayPass: "8.00 CHF",
    metroAvailable: false,
    taxiBase: "8.00 CHF",
    taxiPerKm: "4.00 CHF",
    bikeRental: "Various local schemes",
    bikeRentalCost: "5 CHF/hour",
    walkability: "high",
    walkNote: "Vaduz is tiny and walkable. The entire principality is small enough to explore on foot."
  },
  "San Marino": {
    currency: "EUR",
    busSingle: "1.50 EUR",
    busDayPass: "5.00 EUR",
    metroAvailable: false,
    taxiBase: "4.00 EUR",
    taxiPerKm: "1.50 EUR",
    bikeRental: "Various local schemes",
    bikeRentalCost: "3 EUR/hour",
    walkability: "high",
    walkNote: "San Marino's historic center is small and walkable. Steep but rewarding walks."
  },
  "Monaco": {
    currency: "EUR",
    busSingle: "2.00 EUR",
    busDayPass: "5.50 EUR",
    metroAvailable: false,
    taxiBase: "5.00 EUR",
    taxiPerKm: "2.50 EUR",
    bikeRental: "MonaBike",
    bikeRentalCost: "2 EUR/30min",
    walkability: "high",
    walkNote: "Monaco is tiny — walk everywhere. Use elevators and escalators to navigate the steep terrain."
  },
  "Kazakhstan": {
    currency: "KZT",
    busSingle: "90 KZT",
    busDayPass: "250 KZT",
    metroAvailable: false,
    taxiBase: "300 KZT",
    taxiPerKm: "50 KZT",
    bikeRental: "Various local schemes",
    bikeRentalCost: "100 KZT/hour",
    walkability: "medium",
    walkNote: "Nur-Sultan (Astana) is spread out. Use buses and affordable taxis."
  },

  // === CITY-LEVEL OVERRIDES ===

  "Berlin": {
    busSingle: "3.20 EUR (AB zone)",
    busDayPass: "9.90 EUR (AB zone)",
    metroAvailable: true,
    metroDayPass: "9.90 EUR (AB zone, BVG)",
    walkNote: "Very walkable center with U-Bahn for longer distances. Alexanderplatz to Brandenburg Gate is a pleasant 20-min walk."
  },
  "Munich": {
    busSingle: "3.20 EUR (inner zone)",
    busDayPass: "7.70 EUR (inner zone, MVV)",
    metroAvailable: true,
    walkNote: "Compact center — Marienplatz to Englischer Garten is an easy walk."
  },
  "Hamburg": {
    busSingle: "3.50 EUR (AB zone)",
    busDayPass: "7.90 EUR (HVV day ticket)",
    metroAvailable: true,
    walkNote: "Harbor area and city center are walkable. Use U-Bahn/S-Bahn for outer areas."
  },
  "Paris": {
    busSingle: "2.15 EUR",
    busDayPass: "16.90 EUR (zones 1-5)",
    metroAvailable: true,
    metroDayPass: "16.90 EUR (Navigo Jour)",
    taxiBase: "4.00 EUR",
    taxiPerKm: "1.80 EUR",
    bikeRental: "Velib Metropole",
    bikeRentalCost: "1.70 EUR/day (first 30min free)",
    walkNote: "Paris is very walkable — Seine banks, Marais, and Latin Quarter are perfect for strolling."
  },
  "London": {
    busSingle: "1.75 GBP (bus) / 2.80 GBP (Tube)",
    busDayPass: "Daily cap: 8.50 GBP (Tube + bus, zones 1-2)",
    metroAvailable: true,
    metroDayPass: "Daily cap: 8.50 GBP (zones 1-2)",
    taxiBase: "3.80 GBP",
    taxiPerKm: "2.00 GBP",
    bikeRental: "Santander Cycles",
    bikeRentalCost: "1.65 GBP/30min",
    walkNote: "Central London is walkable. Use Tube for longer distances. South Bank is a great walk."
  },
  "Edinburgh": {
    busSingle: "1.80 GBP",
    busDayPass: "4.50 GBP",
    metroAvailable: false,
    walkNote: "Very walkable but hilly. Royal Mile is best on foot. Wear sturdy shoes."
  },
  "Amsterdam": {
    busSingle: "3.20 EUR",
    busDayPass: "9.00 EUR (GVB day pass)",
    metroAvailable: true,
    metroDayPass: "9.00 EUR (GVB day pass)",
    bikeRental: "Swapfiets / MacBike / Yellow Bike",
    bikeRentalCost: "10 EUR/day (Swapfiets)",
    walkNote: "Very walkable canal ring area. But rent a bike — it's the Amsterdam way."
  },
  "Rome": {
    busSingle: "1.50 EUR",
    busDayPass: "7.00 EUR (Roma 24h)",
    metroAvailable: true,
    metroDayPass: "7.00 EUR (Roma 24h)",
    walkNote: "Rome's historic center is very walkable. Colosseum to Pantheon is a 20-min walk."
  },
  "Madrid": {
    busSingle: "1.50 EUR",
    busDayPass: "6.10 EUR (zone A)",
    metroAvailable: true,
    metroDayPass: "6.10 EUR (zone A)",
    walkNote: "Compact center — Puerta del Sol to Plaza Mayor to Royal Palace is an easy walk."
  },
  "Barcelona": {
    busSingle: "2.40 EUR",
    busDayPass: "11.15 EUR (T-Casual)",
    metroAvailable: true,
    metroDayPass: "11.15 EUR (T-Casual, 10 rides)",
    walkNote: "Very walkable along La Rambla and Gothic Quarter. Use metro for Sagrada Familia and Park Guell."
  },
  "Vienna": {
    busSingle: "2.40 EUR",
    busDayPass: "5.80 EUR (24h ticket)",
    metroAvailable: true,
    metroDayPass: "5.80 EUR (24h ticket)",
    walkNote: "Very walkable Ringstrasse and Innere Stadt. Compact, flat center."
  },
  "Prague": {
    busSingle: "30 CZK",
    busDayPass: "110 CZK (24h)",
    metroAvailable: true,
    metroDayPass: "110 CZK (24h)",
    walkNote: "Old Town and Lesser Town are walkable. Cobblestones everywhere — wear comfortable shoes."
  },
  "Budapest": {
    busSingle: "350 HUF",
    busDayPass: "950 HUF (24h)",
    metroAvailable: true,
    metroDayPass: "950 HUF (24h)",
    walkNote: "Pest side is flat and walkable. Buda side is hilly. Great tram ride along the Danube."
  },
  "Warsaw": {
    busSingle: "3.40 PLN",
    busDayPass: "11.60 PLN (24h)",
    metroAvailable: true,
    metroDayPass: "11.60 PLN (24h)",
    walkNote: "Old Town is compact and walkable. Modern center is spread out — use metro."
  },
  "Brussels": {
    busSingle: "2.10 EUR",
    busDayPass: "7.50 EUR (STIB 24h)",
    metroAvailable: true,
    metroDayPass: "7.50 EUR (STIB 24h)",
    walkNote: "Compact center — Grand Place to Manneken Pis is a 5-min walk."
  },
  "Stockholm": {
    busSingle: "36 SEK",
    busDayPass: "130 SEK (24h)",
    metroAvailable: true,
    metroDayPass: "130 SEK (24h)",
    walkNote: "Gamla Stan (Old Town) is walkable. Use metro for island-hopping."
  },
  "Copenhagen": {
    busSingle: "24 DKK",
    busDayPass: "80 DKK (24h)",
    metroAvailable: true,
    metroDayPass: "80 DKK (24h)",
    walkNote: "Very walkable and bike-friendly. Nyhavn to Amalienborg is a pleasant walk."
  },
  "Oslo": {
    busSingle: "40 NOK",
    busDayPass: "125 NOK (24h)",
    metroAvailable: true,
    metroDayPass: "125 NOK (24h)",
    walkNote: "City center is walkable. Use trams for Frogner and Vigeland Park."
  },
  "Zurich": {
    busSingle: "2.70 CHF",
    busDayPass: "8.80 CHF (24h zone 110)",
    metroAvailable: true,
    metroDayPass: "8.80 CHF (24h zone 110)",
    walkNote: "Compact old town along the Limmat. Very walkable along the lake."
  },
  "Athens": {
    busSingle: "1.20 EUR",
    busDayPass: "4.50 EUR (24h)",
    metroAvailable: true,
    metroDayPass: "4.50 EUR (24h)",
    walkNote: "Center is walkable but very hot in summer. Acropolis requires good shoes."
  },
  "Lisbon": {
    busSingle: "1.50 EUR",
    busDayPass: "4.50 EUR (24h Carris/Metro)",
    metroAvailable: true,
    metroDayPass: "4.50 EUR (24h)",
    walkNote: "Very hilly — take the famous Tram 28. Baixa and Chiado areas are walkable."
  },
  "Dublin": {
    busSingle: "2.00 EUR",
    busDayPass: "5.60 EUR (Leap 1-day)",
    metroAvailable: false,
    walkNote: "Compact center — Trinity College to Temple Bar to Grafton Street in 15 min."
  },
  "Tallinn": {
    busSingle: "1.50 EUR",
    busDayPass: "3.00 EUR",
    metroAvailable: false,
    walkNote: "Medieval Old Town is UNESCO-listed and entirely walkable. Free public transport for residents."
  },
  "Riga": {
    busSingle: "1.15 EUR",
    busDayPass: "3.00 EUR",
    metroAvailable: false,
    walkNote: "Compact Old Town and beautiful Art Nouveau district, both walkable."
  },
  "Vilnius": {
    busSingle: "0.65 EUR",
    busDayPass: "2.50 EUR",
    metroAvailable: false,
    walkNote: "UNESCO Old Town is one of the largest in Europe — very walkable."
  },
  "Moscow": {
    busSingle: "50 RUB",
    busDayPass: "230 RUB (1 day)",
    metroAvailable: true,
    metroDayPass: "230 RUB (1 day)",
    walkNote: "City center around Red Square is walkable. Moscow is vast — the metro is essential and beautiful."
  },
  "Istanbul": {
    busSingle: "15 TRY",
    busDayPass: "60 TRY (Istanbulkart)",
    metroAvailable: true,
    metroDayPass: "60 TRY (Istanbulkart daily)",
    walkNote: "Sultanahmet area is walkable. City is vast and hilly — use trams, metro, and ferries."
  },
  "Skopje": {
    busSingle: "35 MKD",
    busDayPass: "100 MKD",
    metroAvailable: false,
    walkNote: "Very compact center — Old Bazaar, Macedonia Square, and fortress are all within walking distance."
  }
};

export default transport;
