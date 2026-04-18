const itineraries = [
  {
  cityId: "paris",
  days3: [
    {
      title: "Iconic Landmarks",
      morning: {
        activity: "Eiffel Tower at sunrise",
        description: "Arrive by 8am to beat the crowds. Take the stairs to the second level for the best value experience.",
        location: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris",
        cost: "$26",
        duration: "2-3 hours",
        tip: "Book the stairs ticket online — cheaper and you skip the longest queue",
        coordinates: { lat: 48.8584, lng: 2.2945 }
      },
      afternoon: {
        activity: "Louvre Museum",
        description: "Focus on the Denon wing to see the Mona Lisa, Venus de Milo, and Winged Victory in about 3 hours.",
        location: "Rue de Rivoli, 75001 Paris",
        cost: "$22",
        duration: "3-4 hours",
        tip: "Enter via the Carrousel du Louvre underground mall entrance to avoid the pyramid line",
        coordinates: { lat: 48.8606, lng: 2.3376 }
      },
      evening: {
        activity: "Seine River dinner cruise",
        description: "Book a sunset cruise departing near Pont de l'Alma. The city lights from the water are magical.",
        location: "Port de la Bourdonnais, 75007 Paris",
        cost: "$90-150",
        duration: "2-3 hours",
        tip: "Reserve at least a week ahead and request a window table for the best views",
        coordinates: { lat: 48.8600, lng: 2.3069 }
      }
    },
    {
      title: "Historic Heart",
      morning: {
        activity: "Notre-Dame area & Ile de la Cite",
        description: "Walk around the cathedral exterior, then cross to Sainte-Chapelle to see the stunning stained glass.",
        location: "6 Parvis Notre-Dame, Ile de la Cite, 75004 Paris",
        cost: "$12 (Sainte-Chapelle)",
        duration: "2-3 hours",
        tip: "Visit Sainte-Chapelle on a sunny day when the stained glass glows brightest",
        coordinates: { lat: 48.8530, lng: 2.3499 }
      },
      afternoon: {
        activity: "Le Marais neighborhood",
        description: "Explore Place des Vosges, visit the Picasso Museum, and grab a famous falafel on Rue des Rosiers.",
        location: "Rue des Rosiers, 75004 Paris",
        cost: "$15-25",
        duration: "3-4 hours",
        tip: "L'As du Fallafel is the most famous but Chez Marianne often has a shorter queue and is equally good",
        coordinates: { lat: 48.8566, lng: 2.3622 }
      },
      evening: {
        activity: "Montmartre & Sacre-Coeur",
        description: "Climb to the basilica for panoramic views, then wander the artistic Place du Tertre at dusk.",
        location: "35 Rue du Chevalier de la Barre, 75018 Paris",
        cost: "Free",
        duration: "2-3 hours",
        tip: "Take the funicular up if you don't want to climb all 300 steps — it uses a regular metro ticket",
        coordinates: { lat: 48.8867, lng: 2.3431 }
      }
    },
    {
      title: "Art & Elegance",
      morning: {
        activity: "Musee d'Orsay",
        description: "Housed in a former railway station, this museum has the world's best Impressionist collection.",
        location: "1 Rue de la Legion d'Honneur, 75007 Paris",
        cost: "$18",
        duration: "2-3 hours",
        tip: "The fifth-floor terrace behind the clock offers a stunning photo op overlooking the Seine",
        coordinates: { lat: 48.8600, lng: 2.3266 }
      },
      afternoon: {
        activity: "Champs-Elysees to Arc de Triomphe",
        description: "Stroll the famous avenue, then climb the Arc for another spectacular city view.",
        location: "Place Charles de Gaulle, 75008 Paris",
        cost: "$18",
        duration: "2-3 hours",
        tip: "Use the underground tunnel to reach the Arc — do not try to cross the roundabout on foot",
        coordinates: { lat: 48.8738, lng: 2.2950 }
      },
      evening: {
        activity: "Dinner in Saint-Germain",
        description: "End with a classic French bistro dinner in this elegant Left Bank neighborhood.",
        location: "Boulevard Saint-Germain, 75006 Paris",
        cost: "$40-70",
        duration: "2 hours",
        tip: "Reserve at a bistro on a side street off the main boulevard for better value and more authentic food",
        coordinates: { lat: 48.8530, lng: 2.3350 }
      }
    }
  ],
  days5: [
    {
      title: "Eiffel Tower & Surroundings",
      morning: {
        activity: "Eiffel Tower",
        description: "Take the elevator to the summit. The Champ de Mars gardens below are perfect for a picnic afterward.",
        location: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris",
        cost: "$30",
        duration: "2-3 hours",
        tip: "Summit tickets sell out fast — book online at least 2 months in advance for summer visits",
        coordinates: { lat: 48.8584, lng: 2.2945 }
      },
      afternoon: {
        activity: "Rodin Museum & Les Invalides",
        description: "Stroll the sculpture garden at the Rodin Museum, then visit Napoleon's tomb at Les Invalides.",
        location: "77 Rue de Varenne, 75007 Paris",
        cost: "$16 (Rodin) + $16 (Invalides)",
        duration: "3-4 hours",
        tip: "The Rodin sculpture garden ticket is cheaper than the full museum and includes The Thinker",
        coordinates: { lat: 48.8554, lng: 2.3160 }
      },
      evening: {
        activity: "Rue Cler market street",
        description: "Dine like a local on this charming market street filled with cheese shops, bakeries, and cafes.",
        location: "Rue Cler, 75007 Paris",
        cost: "$25-40",
        duration: "2 hours",
        tip: "Pick up cheese, bread, wine, and patisserie items for a DIY picnic on the Champ de Mars",
        coordinates: { lat: 48.8570, lng: 2.3050 }
      }
    },
    {
      title: "The Louvre & Tuileries",
      morning: {
        activity: "Louvre Museum deep dive",
        description: "Spend a full morning here. Don't miss the Egyptian antiquities and the Rembrandt galleries.",
        location: "Rue de Rivoli, 75001 Paris",
        cost: "$22",
        duration: "4-5 hours",
        tip: "Download the Louvre app for a themed trail — the 'Masterpieces in 90 minutes' route is great if you're short on time",
        coordinates: { lat: 48.8606, lng: 2.3376 }
      },
      afternoon: {
        activity: "Jardin des Tuileries & Place de la Concorde",
        description: "Relax in the formal gardens, then walk to the grand Place de la Concorde.",
        location: "Place de la Concorde, 75001 Paris",
        cost: "Free",
        duration: "2-3 hours",
        tip: "Rent a small sailboat to push across the Tuileries basin with a stick — a beloved Parisian tradition",
        coordinates: { lat: 48.8656, lng: 2.3212 }
      },
      evening: {
        activity: "Opera Garnier area",
        description: "Visit the stunning opera house, then explore the Galeries Lafayette rooftop for free city views.",
        location: "Place de l'Opera, 75009 Paris",
        cost: "$15 (Opera tour)",
        duration: "2-3 hours",
        tip: "Galeries Lafayette rooftop terrace is free and offers a great view of the Opera house and the Eiffel Tower",
        coordinates: { lat: 48.8720, lng: 2.3316 }
      }
    },
    {
      title: "Medieval Paris",
      morning: {
        activity: "Sainte-Chapelle & Conciergerie",
        description: "The Sainte-Chapelle stained glass will leave you speechless. The Conciergerie tells the story of Marie Antoinette.",
        location: "10 Boulevard du Palais, 75001 Paris",
        cost: "$20 (combo ticket)",
        duration: "2-3 hours",
        tip: "Buy the combo ticket that covers both Sainte-Chapelle and the Conciergerie — it saves you a few euros",
        coordinates: { lat: 48.8554, lng: 2.3451 }
      },
      afternoon: {
        activity: "Latin Quarter",
        description: "Visit the Pantheon, browse the bookshops along Rue de la Boucherie, and relax near the Sorbonne.",
        location: "Rue des Ecoles, 75005 Paris",
        cost: "$14 (Pantheon)",
        duration: "3-4 hours",
        tip: "Shakespeare & Company bookstore is a must — read a book in their upstairs library nook",
        coordinates: { lat: 48.8490, lng: 2.3470 }
      },
      evening: {
        activity: "Dinner in Le Marais",
        description: "Explore the Jewish quarter's eateries and trendy cocktail bars in this vibrant neighborhood.",
        location: "Rue des Rosiers, 75004 Paris",
        cost: "$30-50",
        duration: "2-3 hours",
        tip: "Try the falafel shops on Rue des Rosiers then head to a speakeasy like Little Red Door for cocktails",
        coordinates: { lat: 48.8566, lng: 2.3622 }
      }
    },
    {
      title: "Art & Fashion",
      morning: {
        activity: "Musee d'Orsay",
        description: "Arrive early for the Impressionist masterpieces by Monet, Renoir, and Van Gogh.",
        location: "1 Rue de la Legion d'Honneur, 75007 Paris",
        cost: "$18",
        duration: "2-3 hours",
        tip: "Go straight to the top floor when it opens to enjoy the Impressionist galleries before the crowds arrive",
        coordinates: { lat: 48.8600, lng: 2.3266 }
      },
      afternoon: {
        activity: "Palais Galliera Fashion Museum",
        description: "Explore Parisian fashion history, then walk through the nearby Trocadero for the best Eiffel Tower photo spot.",
        location: "10 Avenue Pierre 1er de Serbie, 75016 Paris",
        cost: "$15",
        duration: "2-3 hours",
        tip: "The Trocadero esplanade at golden hour gives you the most iconic Eiffel Tower photo in all of Paris",
        coordinates: { lat: 48.8654, lng: 2.3062 }
      },
      evening: {
        activity: "Canal Saint-Martin",
        description: "Join locals for apero along the canal. The iron footbridges and tree-lined waterway are perfectly Parisian.",
        location: "Canal Saint-Martin, 75010 Paris",
        cost: "$20-35",
        duration: "2-3 hours",
        tip: "Grab wine and cheese from a nearby fromagerie and sit along the canal like the locals do",
        coordinates: { lat: 48.8714, lng: 2.3650 }
      }
    },
    {
      title: "Montmartre & Beyond",
      morning: {
        activity: "Sacre-Coeur & Place du Tertre",
        description: "Start early to avoid crowds. Watch artists paint in the square where Picasso and Dali once worked.",
        location: "35 Rue du Chevalier de la Barre, 75018 Paris",
        cost: "Free",
        duration: "2-3 hours",
        tip: "Arrive by 9am to have Place du Tertre almost to yourself before the tour groups arrive at 10:30",
        coordinates: { lat: 48.8867, lng: 2.3431 }
      },
      afternoon: {
        activity: "Pere Lachaise Cemetery",
        description: "Find the graves of Jim Morrison, Edith Piaf, and Oscar Wilde in this atmospheric cemetery.",
        location: "16 Rue du Repos, 75020 Paris",
        cost: "Free",
        duration: "2-3 hours",
        tip: "Download a map before you go — the cemetery is huge and the grave locations are not always well marked",
        coordinates: { lat: 48.8625, lng: 2.3936 }
      },
      evening: {
        activity: "Moulin Rouge area dinner",
        description: "End your trip with dinner in Montmartre and consider booking the famous cabaret show.",
        location: "82 Boulevard de Clichy, 75018 Paris",
        cost: "$50-80 (dinner) | $120+ (show)",
        duration: "2-4 hours",
        tip: "If the Moulin Rouge show is sold out or too pricey, try the Au Lapin Agile cabaret in Montmartre for a more intimate experience",
        coordinates: { lat: 48.8842, lng: 2.3322 }
      }
    }
  ],
  days7: [
    {
      title: "Welcome to Paris",
      morning: {
        activity: "Eiffel Tower",
        description: "Start your trip with the iconic tower. Book summit access tickets online weeks in advance.",
        location: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris",
        cost: "$30",
        duration: "2-3 hours",
        tip: "Book summit access tickets online at least 4 weeks ahead for summer — they sell out immediately",
        coordinates: { lat: 48.8584, lng: 2.2945 }
      },
      afternoon: {
        activity: "Seine River walk",
        description: "Stroll along the river from the tower to Pont de l'Alma, crossing the romantic Pont des Arts.",
        location: "Pont de l'Alma, 75007 Paris",
        cost: "Free",
        duration: "2-3 hours",
        tip: "The Pont des Arts pedestrian bridge offers one of the best Seine viewpoints — perfect for photos",
        coordinates: { lat: 48.8600, lng: 2.3069 }
      },
      evening: {
        activity: "Rue Cler dinner",
        description: "Discover this authentic market street near the Eiffel Tower with wonderful neighborhood restaurants.",
        location: "Rue Cler, 75007 Paris",
        cost: "$30-50",
        duration: "2 hours",
        tip: "Cafe du Marche is a beloved local spot — arrive early as they don't take reservations",
        coordinates: { lat: 48.8570, lng: 2.3050 }
      }
    },
    {
      title: "Royal Art",
      morning: {
        activity: "Louvre Museum",
        description: "Dedicate the full morning to the world's largest museum. Focus on 2-3 wings to avoid exhaustion.",
        location: "Rue de Rivoli, 75001 Paris",
        cost: "$22",
        duration: "4-5 hours",
        tip: "The Porte des Lions entrance near the Tuileries is almost never crowded — skip the pyramid line entirely",
        coordinates: { lat: 48.8606, lng: 2.3376 }
      },
      afternoon: {
        activity: "Tuileries Garden & Place Vendome",
        description: "Rest in the gardens, then window-shop at the luxury boutiques around Place Vendome.",
        location: "Place Vendome, 75001 Paris",
        cost: "Free",
        duration: "2-3 hours",
        tip: "Grab a Berthillon ice cream from a vendor in the Tuileries and people-watch by the fountain",
        coordinates: { lat: 48.8634, lng: 2.3275 }
      },
      evening: {
        activity: "Palais Garnier",
        description: "Tour the opulent opera house or catch a ballet performance if tickets are available.",
        location: "Place de l'Opera, 75009 Paris",
        cost: "$15 (tour) | $40+ (show)",
        duration: "2-3 hours",
        tip: "The self-guided tour with audio guide lets you explore the grand staircase and Chagall ceiling at your own pace",
        coordinates: { lat: 48.8720, lng: 2.3316 }
      }
    },
    {
      title: "Gothic Glory",
      morning: {
        activity: "Sainte-Chapelle",
        description: "The 15 stained-glass windows depicting 1,113 biblical scenes are the finest in the world.",
        location: "10 Boulevard du Palais, 75001 Paris",
        cost: "$13",
        duration: "1-2 hours",
        tip: "Visit in the morning when sunlight streams through the eastern windows for the most vivid colors",
        coordinates: { lat: 48.8554, lng: 2.3451 }
      },
      afternoon: {
        activity: "Latin Quarter & Pantheon",
        description: "Wander the Sorbonne area, visit the Pantheon, and browse Shakespeare & Company bookstore.",
        location: "Rue Soufflot, 75005 Paris",
        cost: "$14 (Pantheon)",
        duration: "3-4 hours",
        tip: "The Pantheon's recently restored dome offers a panoramic terrace view of all of Paris",
        coordinates: { lat: 48.8462, lng: 2.3464 }
      },
      evening: {
        activity: "Dinner in Le Marais",
        description: "Enjoy the neighborhood's mix of historic architecture, trendy bars, and excellent dining.",
        location: "Rue des Rosiers, 75004 Paris",
        cost: "$35-60",
        duration: "2-3 hours",
        tip: "End the evening with a drink at Danico, a hidden bar inside a former Jean-Paul Gaultier boutique",
        coordinates: { lat: 48.8566, lng: 2.3622 }
      }
    },
    {
      title: "Impressionist Dreams",
      morning: {
        activity: "Musee d'Orsay",
        description: "The world's finest collection of Impressionist art in a stunning former railway station.",
        location: "1 Rue de la Legion d'Honneur, 75007 Paris",
        cost: "$18",
        duration: "2-3 hours",
        tip: "Don't miss the tiny pastel gallery on the top floor — works by Degas that most visitors walk right past",
        coordinates: { lat: 48.8600, lng: 2.3266 }
      },
      afternoon: {
        activity: "Musee de l'Orangerie",
        description: "Monet's enormous Water Lilies canvases in oval rooms designed to immerse you in the paintings.",
        location: "Jardin des Tuileries, 75001 Paris",
        cost: "$14",
        duration: "1.5-2 hours",
        tip: "Sit on the bench in the center of each oval room and let the Water Lilies envelop you — it's meditative",
        coordinates: { lat: 48.8634, lng: 2.3226 }
      },
      evening: {
        activity: "Canal Saint-Martin apero",
        description: "Relax by the canal with wine and cheese like a true Parisian.",
        location: "Canal Saint-Martin, 75010 Paris",
        cost: "$15-25",
        duration: "2-3 hours",
        tip: "Stop at Du Pain et des Idees bakery on Rue Yves Toudic for some of Paris' best croissants and pain des amis",
        coordinates: { lat: 48.8714, lng: 2.3650 }
      }
    },
    {
      title: "Versailles Day Trip",
      morning: {
        activity: "Palace of Versailles",
        description: "Take the RER C train (45 min) to tour the lavish Hall of Mirrors and royal apartments.",
        location: "Place d'Armes, 78000 Versailles",
        cost: "$22 (palace) + $8 (RER round trip)",
        duration: "3-4 hours",
        tip: "Book the 9am entry slot and go straight to the Hall of Mirrors before the tour groups arrive at 10am",
        coordinates: { lat: 48.8049, lng: 2.1204 }
      },
      afternoon: {
        activity: "Versailles Gardens & Marie Antoinette's Estate",
        description: "Rent a golf cart or bike to explore the massive gardens and the queen's pastoral hamlet.",
        location: "Domaine de Versailles, 78000 Versailles",
        cost: "$10 (gardens) + $15 (golf cart rental)",
        duration: "3-4 hours",
        tip: "The Musical Fountain Show on weekends is spectacular — check the schedule online before you go",
        coordinates: { lat: 48.8049, lng: 2.1204 }
      },
      evening: {
        activity: "Return to Paris — Champs-Elysees",
        description: "Walk the famous avenue at night, see the Arc de Triomphe illuminated.",
        location: "Avenue des Champs-Elysees, 75008 Paris",
        cost: "Free",
        duration: "1-2 hours",
        tip: "The Arc de Triomphe is most dramatic at night when it's lit up — cross via the underground tunnel to stand beneath it",
        coordinates: { lat: 48.8698, lng: 2.3076 }
      }
    },
    {
      title: "Bohemian Spirit",
      morning: {
        activity: "Montmartre walking tour",
        description: "Sacre-Coeur, Place du Tertre, the Moulin de la Galette, and Van Gogh's former house.",
        location: "Butte Montmartre, 75018 Paris",
        cost: "Free (self-guided)",
        duration: "3-4 hours",
        tip: "Follow the official Montmartre walking trail markers embedded in the sidewalks for a complete tour",
        coordinates: { lat: 48.8867, lng: 2.3431 }
      },
      afternoon: {
        activity: "Pigalle & SoPi",
        description: "Explore the trendy South Pigalle area with its concept stores and specialty coffee shops.",
        location: "Rue Henry Monnier, 75009 Paris",
        cost: "Free (window shopping)",
        duration: "2-3 hours",
        tip: "Check out Heroes for specialty coffee and Broken Biscuits for the best baked goods in the neighborhood",
        coordinates: { lat: 48.8828, lng: 2.3388 }
      },
      evening: {
        activity: "Moulin Rouge or jazz club",
        description: "See the world-famous cabaret or find a smoky jazz club in the neighborhood.",
        location: "82 Boulevard de Clichy, 75018 Paris",
        cost: "$120+ (Moulin Rouge) | $20-30 (jazz club)",
        duration: "2-3 hours",
        tip: "Le Caveau de la Bolhee is an intimate jazz club in a medieval cellar — authentic and unforgettable",
        coordinates: { lat: 48.8842, lng: 2.3322 }
      }
    },
    {
      title: "Farewell Paris",
      morning: {
        activity: "Pere Lachaise Cemetery",
        description: "A peaceful morning walk among the ornate tombs of artists, writers, and musicians.",
        location: "16 Rue du Repos, 75020 Paris",
        cost: "Free",
        duration: "2-3 hours",
        tip: "Pick up a free map at the main entrance — Oscar Wilde's tomb is covered in lipstick kisses so you can't miss it",
        coordinates: { lat: 48.8625, lng: 2.3936 }
      },
      afternoon: {
        activity: "Saint-Germain-des-Pres",
        description: "Cafe-hopping at Les Deux Magots and Cafe de Flore, followed by luxury shopping on Rue du Faubourg Saint-Honore.",
        location: "Boulevard Saint-Germain, 75006 Paris",
        cost: "$15-25 (cafe)",
        duration: "3-4 hours",
        tip: "Sit at Les Deux Magots where Sartre and Hemingway once wrote — the hot chocolate is legendary",
        coordinates: { lat: 48.8530, lng: 2.3350 }
      },
      evening: {
        activity: "Seine dinner cruise",
        description: "A final sunset cruise with dinner — the perfect farewell to the City of Light.",
        location: "Port de la Bourdonnais, 75007 Paris",
        cost: "$90-150",
        duration: "2-3 hours",
        tip: "Choose the Bateaux Parisiens or Vedettes du Pont Neuf — the smaller boats offer a more intimate experience",
        coordinates: { lat: 48.8600, lng: 2.3069 }
      }
    }
  ]
},
  {
  cityId: "tokyo",
  days3: [
    {
      title: "Traditional Tokyo",
      morning: {
        activity: "Senso-ji Temple in Asakusa",
        description: "Tokyo's oldest temple. Walk through the Kaminarimon gate and browse Nakamise shopping street.",
        location: "2-3-1 Asakusa, Taito City",
        cost: "Free",
        duration: "2 hours",
        tip: "Visit at 6am to experience the temple without crowds",
        coordinates: { lat: 35.7148, lng: 139.7967 }
      },
      afternoon: {
        activity: "Meiji Shrine & Harajuku",
        description: "Find serenity in the forested shrine, then cross to Takeshita Street for Tokyo's wildest fashion scene.",
        location: "1-1 Yoyogikamizonocho, Shibuya City",
        cost: "Free",
        duration: "3 hours",
        tip: "Write a wish on an ema wooden plaque at the shrine for good fortune",
        coordinates: { lat: 35.6764, lng: 139.6993 }
      },
      evening: {
        activity: "Shinjuku neon night",
        description: "Explore the bars of Golden Gai and the endless dining floors of Omoide Yokocho (Memory Lane).",
        location: "1-1 Nishishinjuku, Shinjuku City",
        cost: "3,000-5,000 JPY (drinks and food)",
        duration: "3 hours",
        tip: "Golden Gai bars charge a seating fee of 500-1000 JPY; carry cash as most don't accept cards",
        coordinates: { lat: 35.6938, lng: 139.7014 }
      }
    },
    {
      title: "Modern Marvels",
      morning: {
        activity: "Tsukiji Outer Market",
        description: "Fresh sushi breakfast and tamagoyaki (rolled omelet) from the legendary market stalls.",
        location: "4-16-2 Tsukiji, Chuo City",
        cost: "2,000-4,000 JPY",
        duration: "2 hours",
        tip: "Arrive by 7am for the freshest selections; many stalls close by 2pm",
        coordinates: { lat: 35.6654, lng: 139.7707 }
      },
      afternoon: {
        activity: "Shibuya Crossing & Harajuku",
        description: "Cross the world's busiest intersection, then explore the trendy Cat Street and Omotesando avenue.",
        location: "2-2-1 Dogenzaka, Shibuya City",
        cost: "Free",
        duration: "3 hours",
        tip: "Watch the scramble crossing from the Starbucks on the 2nd floor of the QFRONT building for the best vantage point",
        coordinates: { lat: 35.6595, lng: 139.7004 }
      },
      evening: {
        activity: "Tokyo Skytree",
        description: "Ride to the observation deck at 450m for a glittering night view of the endless city.",
        location: "1-1-2 Oshiage, Sumida City",
        cost: "2,100-3,100 JPY (depending on deck)",
        duration: "1.5 hours",
        tip: "Book tickets online in advance to skip the ticket line; the Tembo Galleria deck at 450m is worth the upgrade",
        coordinates: { lat: 35.7101, lng: 139.8107 }
      }
    },
    {
      title: "Pop Culture & Tech",
      morning: {
        activity: "Akihabara Electric Town",
        description: "Dive into multi-story arcades, anime shops, and the latest tech gadgets in this geek paradise.",
        location: "Sotokanda, Chiyoda City",
        cost: "Free to explore; budget 2,000+ JPY for arcades and shopping",
        duration: "3 hours",
        tip: "Visit the multi-floor retro game shops like Super Potato for classic Nintendo and Sega games",
        coordinates: { lat: 35.7023, lng: 139.7745 }
      },
      afternoon: {
        activity: "teamLab Borderless",
        description: "An immersive digital art museum where rooms of light and color respond to your movement.",
        location: "Odaiba, 2-3-6 Aomi, Koto City",
        cost: "3,800 JPY",
        duration: "2.5 hours",
        tip: "Wear comfortable shoes and light layers; some rooms use projectors on the floor and it gets warm",
        coordinates: { lat: 35.6267, lng: 139.7840 }
      },
      evening: {
        activity: "Ramen alley in Shinjuku",
        description: "Find your perfect bowl at one of the tiny ramen shops in this atmospheric alley.",
        location: "1-1 Nishishinjuku, Shinjuku City",
        cost: "900-1,500 JPY",
        duration: "1.5 hours",
        tip: "Buy your meal ticket from the vending machine before sitting; most shops have an English menu option",
        coordinates: { lat: 35.6935, lng: 139.6989 }
      }
    }
  ],
  days5: [
    {
      title: "Old Meets New",
      morning: {
        activity: "Senso-ji Temple",
        description: "Arrive at 6am to experience the temple in morning mist without the tourist crowds.",
        location: "2-3-1 Asakusa, Taito City",
        cost: "Free",
        duration: "2 hours",
        tip: "The temple grounds are open 24 hours; the main hall opens at 6am — dawn light through the incense smoke is magical",
        coordinates: { lat: 35.7148, lng: 139.7967 }
      },
      afternoon: {
        activity: "Ueno Park & museums",
        description: "Visit the Tokyo National Museum for Japanese art and stroll the park's beautiful paths.",
        location: "Uenokoen, Taito City",
        cost: "1,000 JPY (museum entry); park is free",
        duration: "3 hours",
        tip: "The Tokyo National Museum has English audio guides; don't miss the Honkan building's Japanese gallery",
        coordinates: { lat: 35.7146, lng: 139.7748 }
      },
      evening: {
        activity: "Ameyoko market street",
        description: "Browse this lively market under the train tracks for street food and bargains.",
        location: "4-7-8 Ueno, Taito City",
        cost: "1,000-3,000 JPY",
        duration: "1.5 hours",
        tip: "Haggle politely — it's expected here; great place for discount snacks, spices, and branded goods",
        coordinates: { lat: 35.7103, lng: 139.7835 }
      }
    },
    {
      title: "Fashion & Youth Culture",
      morning: {
        activity: "Harajuku & Omotesando",
        description: "Takeshita Street for quirky fashion, Cat Street for indie designers, Omotesando for luxury architecture.",
        location: "1-17-11 Jingumae, Shibuya City",
        cost: "Free to explore; budget for shopping",
        duration: "3 hours",
        tip: "Start with Takeshita Street before 10am to avoid wall-to-wall crowds, then wander Cat Street at your leisure",
        coordinates: { lat: 35.6702, lng: 139.7026 }
      },
      afternoon: {
        activity: "Meiji Shrine & Yoyogi Park",
        description: "A peaceful forest oasis in the city center. Watch rockabilly dancers on the park bridge on weekends.",
        location: "2-1 Yoyogikamizonocho, Shibuya City",
        cost: "Free",
        duration: "2.5 hours",
        tip: "On Sundays, rockabilly dancers gather near the park entrance bridge — a free and unforgettable spectacle",
        coordinates: { lat: 35.6715, lng: 139.6958 }
      },
      evening: {
        activity: "Shibuya nightlife",
        description: "Explore Nonbei Yokocho (Drunkard's Alley) and the bar towers around Shibuya station.",
        location: "1-25-6 Shibuya, Shibuya City",
        cost: "3,000-6,000 JPY",
        duration: "3 hours",
        tip: "Nonbei Yokocho has only a handful of tiny bars; arrive early (7pm) to get a seat and chat with locals",
        coordinates: { lat: 35.6590, lng: 139.6990 }
      }
    },
    {
      title: "Digital Dreams",
      morning: {
        activity: "teamLab Planets",
        description: "Wade barefoot through rooms of flowing water, mirrored spheres, and cascading digital flowers.",
        location: "6-1-16 Toyosu, Koto City",
        cost: "3,800 JPY",
        duration: "2 hours",
        tip: "You must remove shoes and roll up pants above the knee; shorts are ideal. Lockers provided for belongings",
        coordinates: { lat: 35.6267, lng: 139.7840 }
      },
      afternoon: {
        activity: "Odaiba entertainment island",
        description: "See the Gundam statue, explore the digital art Miraikan museum, and enjoy bay views.",
        location: "Odaiba, Koto City",
        cost: "Free to explore; Miraikan 630 JPY",
        duration: "3 hours",
        tip: "Don't miss the life-size Unicorn Gundam statue's transformation show — it moves every hour on the hour",
        coordinates: { lat: 35.6250, lng: 139.7750 }
      },
      evening: {
        activity: "Monzen-Nakacho izakayas",
        description: "A local nightlife area with traditional Japanese pubs serving yakitori and cold beer.",
        location: "Monzen-Nakacho, Koto City",
        cost: "3,000-5,000 JPY",
        duration: "2.5 hours",
        tip: "Order the omakase (chef's choice) yakitori set — locals favor the momo (thigh) and tsukune (meatball)",
        coordinates: { lat: 35.6725, lng: 139.7963 }
      }
    },
    {
      title: "Day Trip to Nikko",
      morning: {
        activity: "Train to Nikko",
        description: "A 2-hour train ride to this UNESCO World Heritage site of ornate shrines in a forest setting.",
        location: "Nikko, Tochigi Prefecture",
        cost: "Round-trip ~4,000 JPY (local train)",
        duration: "2 hours (travel time)",
        tip: "Take the Tobu Railway from Asakusa for the most convenient route; consider the Tobu Nikko Pass for savings",
        coordinates: { lat: 36.7580, lng: 139.5990 }
      },
      afternoon: {
        activity: "Toshogu Shrine & Kegon Falls",
        description: "The extravagantly decorated shrine complex and the dramatic 97m waterfall.",
        location: "2301 Sannai, Nikko, Tochigi",
        cost: "1,300 JPY (shrine); 570 JPY (elevator to falls viewpoint)",
        duration: "3 hours",
        tip: "Don't miss the 'see no evil, speak no evil, hear no evil' monkey carving on the stable at Toshogu Shrine",
        coordinates: { lat: 36.7300, lng: 139.4990 }
      },
      evening: {
        activity: "Return — Shinjuku dinner",
        description: "Back in Tokyo, explore the robot restaurant area or grab ramen in Kabukicho.",
        location: "1-1 Nishishinjuku, Shinjuku City",
        cost: "1,000-2,500 JPY",
        duration: "1.5 hours",
        tip: "Omoide Yokocho (Memory Lane) has some of the best yakitori in Shinjuku; look for the narrow alley with lanterns",
        coordinates: { lat: 35.6935, lng: 139.6989 }
      }
    },
    {
      title: "Tsukiji to Skytree",
      morning: {
        activity: "Tsukiji Outer Market breakfast",
        description: "The freshest sushi, grilled eel, and strawberry mochi — arrive hungry.",
        location: "4-16-2 Tsukiji, Chuo City",
        cost: "3,000-5,000 JPY",
        duration: "2 hours",
        tip: "Try the tamagoyaki (Japanese omelet) at Yamacho and the fresh oyster stand near the market entrance",
        coordinates: { lat: 35.6654, lng: 139.7707 }
      },
      afternoon: {
        activity: "Imperial Palace East Gardens",
        description: "Walk the beautiful gardens on the former site of Edo Castle's innermost circles.",
        location: "1-1 Chiyoda, Chiyoda City",
        cost: "Free",
        duration: "2 hours",
        tip: "Closed on Mondays and Fridays; enter through the Ote-mon Gate and pick up the free English walking map",
        coordinates: { lat: 35.6852, lng: 139.7528 }
      },
      evening: {
        activity: "Tokyo Skytree & Solamachi",
        description: "Sunset from the observation deck, then shop and dine in the massive Solamachi complex below.",
        location: "1-1-2 Oshiage, Sumida City",
        cost: "2,100-3,100 JPY (observation deck)",
        duration: "2.5 hours",
        tip: "Time your visit for 30 minutes before sunset to watch the city transition from day to the sea of night lights",
        coordinates: { lat: 35.7100, lng: 139.8100 }
      }
    }
  ],
  days7: [
    {
      title: "Welcome to Tokyo",
      morning: {
        activity: "Shibuya Crossing & Hachiko statue",
        description: "Start at the world's most famous intersection. Meet the loyal dog statue near the station.",
        location: "2-2-1 Dogenzaka, Shibuya City",
        cost: "Free",
        duration: "1.5 hours",
        tip: "The Hachiko statue is directly outside the Hachiko Exit of Shibuya Station — it's smaller than you'd expect",
        coordinates: { lat: 35.6595, lng: 139.7004 }
      },
      afternoon: {
        activity: "Yoyogi Park & Meiji Shrine",
        description: "Walk through the torii gate-lined forest path to this serene Shinto shrine.",
        location: "1-1 Yoyogikamizonocho, Shibuya City",
        cost: "Free",
        duration: "2.5 hours",
        tip: "Take the Harajuku Station exit to enter through the massive 12-meter-tall torii gate for the full approach",
        coordinates: { lat: 35.6715, lng: 139.6958 }
      },
      evening: {
        activity: "Harajuku Takeshita Street",
        description: "Crepes, cotton candy, and wild fashion — a perfect first-night energy boost.",
        location: "1-17-11 Jingumae, Shibuya City",
        cost: "1,000-3,000 JPY (snacks and shopping)",
        duration: "2 hours",
        tip: "Try the Marion Crepes shop — it's been a Harajuku institution since 1976 with over 50 flavor combinations",
        coordinates: { lat: 35.6702, lng: 139.7026 }
      }
    },
    {
      title: "Ancient Traditions",
      morning: {
        activity: "Senso-ji Temple at dawn",
        description: "The five-story pagoda and main hall are breathtaking in the soft morning light.",
        location: "2-3-1 Asakusa, Taito City",
        cost: "Free",
        duration: "2 hours",
        tip: "The temple grounds are illuminated at night too — return after dark for stunning photos with fewer people",
        coordinates: { lat: 35.7148, lng: 139.7967 }
      },
      afternoon: {
        activity: "Ueno Park & National Museum",
        description: "Japan's largest collection of samurai armor, ukiyo-e prints, and ancient ceramics.",
        location: "13-9 Uenokoen, Taito City",
        cost: "1,000 JPY (museum entry)",
        duration: "3 hours",
        tip: "The Honkan (Japanese Gallery) building alone deserves 2 hours; start on the 2nd floor with the chronological route",
        coordinates: { lat: 35.7146, lng: 139.7748 }
      },
      evening: {
        activity: "Izakaya hopping in Yurakucho",
        description: "Tiny pubs under the train tracks serving yakitori and highballs — a local favorite.",
        location: "Yurakucho, Chiyoda City",
        cost: "3,000-5,000 JPY",
        duration: "2.5 hours",
        tip: "Look for the red lanterns under the train tracks near Yurakucho Station — each izakaya has its own specialty",
        coordinates: { lat: 35.6742, lng: 139.7637 }
      }
    },
    {
      title: "Digital Frontier",
      morning: {
        activity: "teamLab Borderless",
        description: "An ever-changing digital art world where boundaries between artworks dissolve.",
        location: "Odaiba, 2-3-6 Aomi, Koto City",
        cost: "3,800 JPY",
        duration: "2.5 hours",
        tip: "There's no set path — let yourself get lost. The Forest of Resonating Lamps room often has the longest wait",
        coordinates: { lat: 35.6267, lng: 139.7840 }
      },
      afternoon: {
        activity: "Akihabara Electric Town",
        description: "Multi-story arcades, retro game shops, maid cafés, and the latest electronics.",
        location: "Sotokanda, Chiyoda City",
        cost: "Free to explore; budget for arcades and shopping",
        duration: "3 hours",
        tip: "Visit a maid café for the full Akihabara experience — @home café is the most foreigner-friendly",
        coordinates: { lat: 35.7023, lng: 139.7745 }
      },
      evening: {
        activity: "Ramen street at Tokyo Station",
        description: "Eight legendary ramen shops in one underground corridor — try the tsukemen dipping noodles.",
        location: "1-9-1 Marunouchi, Chiyoda City (B1F Tokyo Station)",
        cost: "900-1,500 JPY",
        duration: "1.5 hours",
        tip: "Rokurinsha is famous for tsukemen — arrive before 11:30am or after 8pm to avoid hour-long lines",
        coordinates: { lat: 35.6812, lng: 139.7671 }
      }
    },
    {
      title: "Day Trip: Kamakura",
      morning: {
        activity: "Great Buddha (Daibutsu)",
        description: "A 13m bronze Buddha statue dating to 1252, one of Japan's most iconic sights.",
        location: "4-2-28 Hase, Kamakura, Kanagawa",
        cost: "200 JPY",
        duration: "1.5 hours",
        tip: "Pay the extra 20 JPY to go inside the hollow Buddha and see the ancient construction technique from within",
        coordinates: { lat: 35.3167, lng: 139.5364 }
      },
      afternoon: {
        activity: "Bamboo forest & hiking trails",
        description: "Walk through Hokokuji Temple's bamboo grove and hike the scenic Daibutsu trail.",
        location: "2-7-4 Jomyoji, Kamakura, Kanagawa",
        cost: "300 JPY (Hokokuji Temple)",
        duration: "2.5 hours",
        tip: "Hokokuji Temple's bamboo grove has a small tea house where you can drink matcha surrounded by bamboo",
        coordinates: { lat: 35.3340, lng: 139.5505 }
      },
      evening: {
        activity: "Enoshima island sunset",
        description: "Take the Enoden coastal train to this island for sunset views and fresh seafood.",
        location: "Enoshima, Fujisawa, Kanagawa",
        cost: "Free (island access)",
        duration: "2 hours",
        tip: "Walk across the Benten Bridge to the island and climb to the Seaside Candle observation tower for panoramic sunset views",
        coordinates: { lat: 35.3010, lng: 139.4830 }
      }
    },
    {
      title: "Fish Markets & Gardens",
      morning: {
        activity: "Tsukiji Outer Market",
        description: "Sushi breakfast at the stalls — tuna, sea urchin, and the freshest fish you'll ever taste.",
        location: "4-16-2 Tsukiji, Chuo City",
        cost: "3,000-5,000 JPY",
        duration: "2 hours",
        tip: "Sushi Dai and Daiwa Sushi are legendary — arrive by 6am or expect a long wait",
        coordinates: { lat: 35.6654, lng: 139.7707 }
      },
      afternoon: {
        activity: "Imperial Palace East Gardens",
        description: "Beautifully manicured gardens with stone walls, moats, and seasonal flowers.",
        location: "1-1 Chiyoda, Chiyoda City",
        cost: "Free",
        duration: "2 hours",
        tip: "The Ninomaru Garden inside has seasonal plantings — cherry blossoms in spring, irises in early summer",
        coordinates: { lat: 35.6852, lng: 139.7528 }
      },
      evening: {
        activity: "Ginza shopping & dinner",
        description: "Tokyo's upscale district with department store basements full of exquisite food.",
        location: "Ginza, Chuo City",
        cost: "2,000-10,000+ JPY (depending on shopping and dining)",
        duration: "3 hours",
        tip: "Don't miss the depachika (department store basement food halls) at Mitsukoshi or Matsuya — they're like art galleries of food",
        coordinates: { lat: 35.6717, lng: 139.7649 }
      }
    },
    {
      title: "Pop Culture Deep Dive",
      morning: {
        activity: "Ghibli Museum (Mitaka)",
        description: "Hayao Miyazaki's whimsical museum — book tickets months in advance for this magical experience.",
        location: "1-1-83 Shimorenjaku, Mitaka, Tokyo",
        cost: "1,000 JPY (adults)",
        duration: "2.5 hours",
        tip: "Tickets sell out within hours on the 10th of each month for the following month — set a reminder and book on Lawson's website",
        coordinates: { lat: 35.6962, lng: 139.5684 }
      },
      afternoon: {
        activity: "Nakano Broadway",
        description: "A maze of vintage anime, manga, and retro toy shops — less crowded than Akihabara.",
        location: "5-52-15 Nakano, Nakano City",
        cost: "Free to explore; budget for collectibles",
        duration: "2.5 hours",
        tip: "Mandarake on the 2nd and 3rd floors has rare vintage anime cels, first-edition manga, and retro toys you won't find anywhere else",
        coordinates: { lat: 35.7085, lng: 139.6656 }
      },
      evening: {
        activity: "Golden Gai bar hopping",
        description: "Over 200 tiny bars crammed into six narrow alleys in Shinjuku — each seats only 6-10 people.",
        location: "1-1-6 Kabukicho, Shinjuku City",
        cost: "4,000-7,000 JPY (including cover charges)",
        duration: "3 hours",
        tip: "Some bars are Japanese-only but many welcome foreigners — look for English menus or welcoming signs outside; Albatross and Kenzo's are great starting points",
        coordinates: { lat: 35.6938, lng: 139.7014 }
      }
    },
    {
      title: "Skyline Farewell",
      morning: {
        activity: "Tsukishima Monja Street",
        description: "Try monjayaki, Tokyo's runnier cousin to okonomiyaki, cooked right at your table.",
        location: "Tsukishima, Chuo City",
        cost: "1,500-2,500 JPY",
        duration: "1.5 hours",
        tip: "Let the staff cook the first one for you on the iron griddle — it takes skill to get the crispy edges right",
        coordinates: { lat: 35.6627, lng: 139.7828 }
      },
      afternoon: {
        activity: "Roppongi Hills & Mori Art Museum",
        description: "Contemporary art and the Tokyo City View observation deck at 250m.",
        location: "6-10-1 Roppongi, Minato City",
        cost: "2,000 JPY (Mori Art Museum + Tokyo City View)",
        duration: "2.5 hours",
        tip: "The Mori Art Museum often has world-class rotating exhibitions; the sky deck (outdoor rooftop) is an additional 500 JPY but worth it",
        coordinates: { lat: 35.6604, lng: 139.7292 }
      },
      evening: {
        activity: "Tokyo Skytree at night",
        description: "End your trip with the city's highest viewpoint, watching Tokyo sparkle endlessly below.",
        location: "1-1-2 Oshiage, Sumida City",
        cost: "2,100-3,100 JPY",
        duration: "1.5 hours",
        tip: "On clear nights you can see Mount Fuji from the observation deck — look west toward the horizon",
        coordinates: { lat: 35.7101, lng: 139.8107 }
      }
    }
  ]
},
  {
    cityId: "new-york",
    days3: [
      {
        title: "Manhattan Classics",
        morning: {
          activity: "Central Park morning walk",
          description: "Enter at the south end and walk to Bethesda Fountain — about 2 hours of pure magic.",
          location: "Central Park, Manhattan",
          cost: "Free",
          duration: "2 hours",
          tip: "Start at the southeast corner near the Plaza Hotel for the most scenic route",
          coordinates: { lat: 40.7829, lng: -73.9654 }
        },
        afternoon: {
          activity: "Metropolitan Museum of Art",
          description: "One of the world's greatest museums. Focus on the Egyptian Temple of Dendur and the rooftop garden.",
          location: "Metropolitan Museum of Art, 1000 5th Ave, Manhattan",
          cost: "$30 (suggested admission)",
          duration: "3 hours",
          tip: "The rooftop garden cafe has incredible Central Park views — open May through October",
          coordinates: { lat: 40.7794, lng: -73.9632 }
        },
        evening: {
          activity: "Times Square & Broadway",
          description: "Experience the neon spectacle, then catch a Broadway show if you can score rush tickets.",
          location: "Times Square, Manhattan",
          cost: "$20–$150+ depending on show",
          duration: "4 hours",
          tip: "Visit the TKTS booth in Duffy Square for same-day discount Broadway tickets — up to 50% off",
          coordinates: { lat: 40.7580, lng: -73.9855 }
        }
      },
      {
        title: "Downtown & Waterfront",
        morning: {
          activity: "Statue of Liberty & Ellis Island",
          description: "Take the first ferry to beat crowds. Book pedestal access in advance for the best views.",
          location: "Statue of Liberty, Liberty Island",
          cost: "$24.30 (ferry + pedestal access)",
          duration: "4 hours",
          tip: "Book ferry tickets at least 2–3 weeks in advance through statuecruises.com — they sell out fast",
          coordinates: { lat: 40.6892, lng: -74.0445 }
        },
        afternoon: {
          activity: "Wall Street & 9/11 Memorial",
          description: "See the reflecting pools, visit the Oculus, and walk through historic Financial District.",
          location: "9/11 Memorial, Financial District, Manhattan",
          cost: "Free (memorial); $26–$33 (museum)",
          duration: "3 hours",
          tip: "The memorial is free to visit anytime; book museum tickets online to skip the line",
          coordinates: { lat: 40.7115, lng: -74.0134 }
        },
        evening: {
          activity: "Brooklyn Bridge at sunset",
          description: "Walk across the bridge as the sun sets behind the Manhattan skyline — unforgettable.",
          location: "Brooklyn Bridge, connecting Manhattan and Brooklyn",
          cost: "Free",
          duration: "1.5 hours",
          tip: "Enter from the Manhattan side at City Hall for the best sunset photo opportunities",
          coordinates: { lat: 40.7061, lng: -73.9969 }
        }
      },
      {
        title: "Brooklyn Vibes",
        morning: {
          activity: "Brooklyn Bridge Park",
          description: "Jane's Carousel, Pebble Beach, and the best photo of the Manhattan skyline.",
          location: "Brooklyn Bridge Park, Brooklyn",
          cost: "Free (carousel $2)",
          duration: "2 hours",
          tip: "Go early for the best lighting on the Manhattan skyline photos from Pebble Beach",
          coordinates: { lat: 40.7024, lng: -73.9969 }
        },
        afternoon: {
          activity: "Williamsburg exploration",
          description: "Vintage shops on Bedford Avenue, street art, and some of NYC's best coffee roasters.",
          location: "Williamsburg, Brooklyn",
          cost: "Free–$30 (depending on shopping)",
          duration: "3 hours",
          tip: "Don't miss Bedford Avenue between N 4th and N 8th Streets for the best vintage shops and cafes",
          coordinates: { lat: 40.7081, lng: -73.9571 }
        },
        evening: {
          activity: "DUMBO sunset & pizza",
          description: "Watch the sunset from the Washington Street framed bridge view, then grab a slice at Juliana's.",
          location: "DUMBO, Brooklyn",
          cost: "$20–$40 (dinner)",
          duration: "2.5 hours",
          tip: "The iconic Manhattan Bridge photo spot is at Washington St and Water St — go before sunset for the best light",
          coordinates: { lat: 40.7033, lng: -73.9894 }
        }
      }
    ],
    days5: [
      {
        title: "Welcome to NYC",
        morning: {
          activity: "Central Park deep dive",
          description: "Rent a bike and cover the full park from south to north — the Conservatory Garden is a hidden gem.",
          location: "Central Park, Manhattan",
          cost: "$15–$20 (bike rental)",
          duration: "3 hours",
          tip: "Rent bikes near the south entrance — the Conservatory Garden at the north end is peaceful and often empty",
          coordinates: { lat: 40.7829, lng: -73.9654 }
        },
        afternoon: {
          activity: "Fifth Avenue & Rockefeller Center",
          description: "Window shop the luxury stores, visit St. Patrick's Cathedral, and see the Rockefeller Plaza.",
          location: "Fifth Avenue & Rockefeller Center, Midtown Manhattan",
          cost: "Free",
          duration: "3 hours",
          tip: "Step inside St. Patrick's Cathedral — it's free, stunning, and a quiet escape from the bustling avenue",
          coordinates: { lat: 40.7547, lng: -73.9772 }
        },
        evening: {
          activity: "Top of the Rock sunset",
          description: "The best view in Manhattan — you can see Central Park, the Empire State Building, and beyond.",
          location: "Top of the Rock, Rockefeller Center, 30 Rockefeller Plaza",
          cost: "$40–$44",
          duration: "1.5 hours",
          tip: "Book the 30-minute-before-sunset time slot for both daylight and nighttime city views",
          coordinates: { lat: 40.7593, lng: -73.9794 }
        }
      },
      {
        title: "History & Harbor",
        morning: {
          activity: "Statue of Liberty & Ellis Island",
          description: "The first ferry departs at 9am. Explore the immigration museum on Ellis Island — deeply moving.",
          location: "Statue of Liberty, Liberty Island",
          cost: "$24.30 (ferry + pedestal access)",
          duration: "4 hours",
          tip: "Take the first ferry at 9am to avoid massive crowds — the island gets packed by noon",
          coordinates: { lat: 40.6892, lng: -74.0445 }
        },
        afternoon: {
          activity: "Financial District & 9/11 Memorial",
          description: "The reflecting pools, One World Observatory, and historic Trinity Church.",
          location: "Financial District, Manhattan",
          cost: "Free–$44 (One World Observatory optional)",
          duration: "3 hours",
          tip: "Visit Trinity Church's historic cemetery — Alexander Hamilton is buried there",
          coordinates: { lat: 40.7074, lng: -74.0113 }
        },
        evening: {
          activity: "South Street Seaport dinner",
          description: "Dine with views of the Brooklyn Bridge at the revitalized waterfront district.",
          location: "South Street Seaport, Financial District, Manhattan",
          cost: "$30–$60 (dinner)",
          duration: "2 hours",
          tip: "The Fulton Stall Market on weekends has great local artisanal food vendors",
          coordinates: { lat: 40.7065, lng: -74.0036 }
        }
      },
      {
        title: "Art & Culture",
        morning: {
          activity: "Metropolitan Museum of Art",
          description: "Spend the morning exploring world-class collections — don't miss the Arms and Armor exhibit.",
          location: "Metropolitan Museum of Art, 1000 5th Ave, Manhattan",
          cost: "$30 (suggested admission)",
          duration: "3 hours",
          tip: "Focus on 2–3 wings to avoid museum fatigue — the Arms and Armor and Temple of Dendur are must-sees",
          coordinates: { lat: 40.7794, lng: -73.9632 }
        },
        afternoon: {
          activity: "Museum Mile & Guggenheim",
          description: "Walk along Fifth Avenue's museum row. The Guggenheim's spiral building is art itself.",
          location: "Guggenheim Museum, 1071 5th Ave, Manhattan",
          cost: "$25–$30",
          duration: "2.5 hours",
          tip: "Walk the spiral ramp from top to bottom — take the elevator up first for the full Frank Lloyd Wright experience",
          coordinates: { lat: 40.7830, lng: -73.9590 }
        },
        evening: {
          activity: "Jazz in the Village",
          description: "Catch live jazz at the Village Vanguard or Blue Note — NYC's legendary music scene.",
          location: "Greenwich Village, Manhattan",
          cost: "$25–$45 (cover charge + minimum)",
          duration: "3 hours",
          tip: "The Village Vanguard has been hosting jazz since 1935 — arrive 30 minutes early for the best seats",
          coordinates: { lat: 40.7336, lng: -73.9990 }
        }
      },
      {
        title: "Brooklyn Day",
        morning: {
          activity: "Walk the Brooklyn Bridge",
          description: "Cross from Manhattan early for the best photos. Head into DUMBO for the iconic Washington Street shot.",
          location: "Brooklyn Bridge, connecting Manhattan and Brooklyn",
          cost: "Free",
          duration: "1.5 hours",
          tip: "Start walking by 8am to avoid the crowds and get the best light on the Manhattan skyline",
          coordinates: { lat: 40.7061, lng: -73.9969 }
        },
        afternoon: {
          activity: "Williamsburg & Greenpoint",
          description: "Explore Brooklyn's hipster heart — vintage shops, record stores, and incredible food scene.",
          location: "Williamsburg & Greenpoint, Brooklyn",
          cost: "$20–$50 (depending on shopping/dining)",
          duration: "4 hours",
          tip: "Check out the Brooklyn Flea Market on weekends — amazing vintage finds and artisanal food vendors",
          coordinates: { lat: 40.7081, lng: -73.9571 }
        },
        evening: {
          activity: "Brooklyn nightlife",
          description: "Rooftop bars with skyline views, or catch a show at the Brooklyn Steel music venue.",
          location: "Williamsburg, Brooklyn",
          cost: "$30–$80 (drinks + possible show ticket)",
          duration: "3 hours",
          tip: "Westlight rooftop bar offers incredible skyline views — arrive before sunset and grab a table by the edge",
          coordinates: { lat: 40.7081, lng: -73.9571 }
        }
      },
      {
        title: "Neighborhood Flavors",
        morning: {
          activity: "Chelsea Market & High Line",
          description: "Breakfast tacos at Los Tacos No.1, then walk the elevated High Line park.",
          location: "Chelsea Market, 75 9th Ave, Manhattan",
          cost: "$10–$25 (food)",
          duration: "2.5 hours",
          tip: "Los Tacos No. 1 often has a line but it moves fast — the adobada taco is the best thing you'll eat all day",
          coordinates: { lat: 40.7424, lng: -74.0061 }
        },
        afternoon: {
          activity: "Greenwich Village & SoHo",
          description: "Wander tree-lined streets, browse SoHo boutiques, and find a perfect sidewalk cafe.",
          location: "Greenwich Village & SoHo, Manhattan",
          cost: "Free–$50 (shopping)",
          duration: "3 hours",
          tip: "Explore the hidden courts and mews between the Village townhouses — look for Minetta Lane and MacDougal Alley",
          coordinates: { lat: 40.7336, lng: -73.9990 }
        },
        evening: {
          activity: "Chinatown & Little Italy dinner",
          description: "Dim sum in Chinatown followed by cannoli on Mulberry Street — the best of both worlds.",
          location: "Chinatown & Little Italy, Manhattan",
          cost: "$20–$40 (dinner)",
          duration: "3 hours",
          tip: "Start with soup dumplings at Joe's Shanghai in Chinatown, then walk to Ferrara Bakery in Little Italy for cannoli",
          coordinates: { lat: 40.7158, lng: -73.9970 }
        }
      }
    ],
    days7: [
      {
        title: "Welcome to Manhattan",
        morning: {
          activity: "Central Park south",
          description: "Start at the Pond and walk to Bethesda Terrace. Rent a rowboat at the Loeb Boathouse.",
          location: "Central Park, Manhattan",
          cost: "$15–$20 (boat rental)",
          duration: "2.5 hours",
          tip: "The Loeb Boathouse rowboat rental opens at 10am — get there early on weekends as boats sell out",
          coordinates: { lat: 40.7829, lng: -73.9654 }
        },
        afternoon: {
          activity: "Fifth Avenue to Grand Central",
          description: "The iconic train terminal's celestial ceiling and the Whispering Gallery are must-sees.",
          location: "Grand Central Terminal, 89 E 42nd St, Manhattan",
          cost: "Free (self-guided); $25 (guided tour)",
          duration: "2.5 hours",
          tip: "Test the Whispering Gallery outside the Oyster Bar — stand in diagonal corners and whisper; the acoustics carry your voice perfectly",
          coordinates: { lat: 40.7527, lng: -73.9772 }
        },
        evening: {
          activity: "Times Square first impression",
          description: "Let the neon overwhelm you, then grab dinner in nearby Hell's Kitchen.",
          location: "Times Square, Manhattan",
          cost: "$30–$60 (dinner)",
          duration: "3 hours",
          tip: "Head to 9th Avenue in Hell's Kitchen for amazing restaurants away from the Times Square tourist traps",
          coordinates: { lat: 40.7580, lng: -73.9855 }
        }
      },
      {
        title: "Harbor Views",
        morning: {
          activity: "Statue of Liberty ferry",
          description: "Book the first departure. The pedestal crown is worth the climb if you get tickets.",
          location: "Statue of Liberty, Liberty Island",
          cost: "$24.30 (ferry + pedestal)",
          duration: "4 hours",
          tip: "Crown tickets sell out months in advance — book as early as possible through recreation.gov",
          coordinates: { lat: 40.6892, lng: -74.0445 }
        },
        afternoon: {
          activity: "9/11 Memorial & Museum",
          description: "The memorial pools are powerful. The museum is extensive — allow at least 2 hours.",
          location: "9/11 Memorial, Financial District, Manhattan",
          cost: "Free (memorial); $26–$33 (museum)",
          duration: "3 hours",
          tip: "The memorial pools are free and open 24/7 — visit at night for a quieter, more reflective experience",
          coordinates: { lat: 40.7115, lng: -74.0134 }
        },
        evening: {
          activity: "Brooklyn Bridge walk",
          description: "Walk across at dusk when the lights come on. Have dinner waiting in DUMBO.",
          location: "Brooklyn Bridge, connecting Manhattan and Brooklyn",
          cost: "Free",
          duration: "1.5 hours",
          tip: "Time your walk so you're midway across at dusk — the transition from golden hour to city lights is magical",
          coordinates: { lat: 40.7061, lng: -73.9969 }
        }
      },
      {
        title: "Museum Day",
        morning: {
          activity: "Metropolitan Museum of Art",
          description: "The rooftop garden cafe has Central Park views. Focus on 2-3 wings to avoid museum fatigue.",
          location: "Metropolitan Museum of Art, 1000 5th Ave, Manhattan",
          cost: "$30 (suggested admission)",
          duration: "3 hours",
          tip: "Download the Met app for interactive maps — the museum is enormous and easy to get lost in",
          coordinates: { lat: 40.7794, lng: -73.9632 }
        },
        afternoon: {
          activity: "Guggenheim & Museum Mile",
          description: "Walk the Frank Lloyd Wright spiral. Continue to the Neue Galerie for Viennese art and cafe.",
          location: "Guggenheim Museum, 1071 5th Ave, Manhattan",
          cost: "$25–$30",
          duration: "2.5 hours",
          tip: "Pay what you wish on Saturdays from 4–5:30pm at the Guggenheim — a great budget-friendly option",
          coordinates: { lat: 40.7830, lng: -73.9590 }
        },
        evening: {
          activity: "Upper West Side dinner",
          description: "Dine near Lincoln Center — consider catching a performance if available.",
          location: "Lincoln Center, Upper West Side, Manhattan",
          cost: "$40–$80 (dinner); $30–$150+ (performance)",
          duration: "3 hours",
          tip: "Lincoln Center has rush tickets for many performances — check their website day-of for availability",
          coordinates: { lat: 40.7725, lng: -73.9835 }
        }
      },
      {
        title: "High Line & Chelsea",
        morning: {
          activity: "Chelsea Market breakfast",
          description: "Los Tacos No. 1, lobster rolls at Cull & Pistol, and brownies from Fat Witch Bakery.",
          location: "Chelsea Market, 75 9th Ave, Manhattan",
          cost: "$15–$30 (breakfast)",
          duration: "1.5 hours",
          tip: "Go on a weekday morning to avoid the weekend crowds — the lobster roll at Cull & Pistol is worth it",
          coordinates: { lat: 40.7424, lng: -74.0061 }
        },
        afternoon: {
          activity: "High Line & Hudson Yards",
          description: "Walk the elevated park north to the Vessel and Edge observation deck.",
          location: "High Line, Chelsea to Hudson Yards, Manhattan",
          cost: "Free (High Line); $36–$42 (Edge observation deck)",
          duration: "3 hours",
          tip: "Walk the High Line from south to north — the gardens and city views get better as you go",
          coordinates: { lat: 40.7480, lng: -74.0048 }
        },
        evening: {
          activity: "Meatpacking District",
          description: "Trendy bars and restaurants in converted warehouses — the Whitney Museum stays open late on Fridays.",
          location: "Meatpacking District, Manhattan",
          cost: "$40–$80 (dinner/drinks); $25 (Whitney Museum)",
          duration: "3 hours",
          tip: "The Whitney Museum has pay-what-you-wish on Fridays from 5–9:30pm — perfect for an art-filled evening",
          coordinates: { lat: 40.7425, lng: -74.0061 }
        }
      },
      {
        title: "Brooklyn Deep Dive",
        morning: {
          activity: "DUMBO & Brooklyn Bridge Park",
          description: "Jane's Carousel, the Pebble Beach view, and time-lapse shots of the Manhattan Bridge.",
          location: "DUMBO & Brooklyn Bridge Park, Brooklyn",
          cost: "Free (carousel $2)",
          duration: "2.5 hours",
          tip: "For the iconic Manhattan Bridge photo, stand at the intersection of Washington St and Water St",
          coordinates: { lat: 40.7033, lng: -73.9894 }
        },
        afternoon: {
          activity: "Williamsburg vintage & food",
          description: "Bedford Avenue shops, Smorgasburg food market (weekends), and Brooklyn Brewery.",
          location: "Williamsburg, Brooklyn",
          cost: "$20–$50 (food/shopping)",
          duration: "4 hours",
          tip: "Smorgasburg (April–October) has 100+ food vendors — go hungry and share dishes to try more",
          coordinates: { lat: 40.7081, lng: -73.9571 }
        },
        evening: {
          activity: "Bushwick bar crawl",
          description: "The Roberta's pizza compound and the underground bars of this artsy neighborhood.",
          location: "Bushwick, Brooklyn",
          cost: "$30–$60 (food/drinks)",
          duration: "3 hours",
          tip: "Roberta's pizza is legendary — expect a wait but it's worth it. Try the Famous Original while you're there",
          coordinates: { lat: 40.6944, lng: -73.9213 }
        }
      },
      {
        title: "Neighborhood Hopping",
        morning: {
          activity: "Greenwich Village walking tour",
          description: "Friends apartment building, Stonewall Inn, and the charming tree-lined streets.",
          location: "Greenwich Village, Manhattan",
          cost: "Free",
          duration: "2.5 hours",
          tip: "Pick up a coffee from Joe Coffee on Waverly Place and wander the tree-lined streets at your own pace",
          coordinates: { lat: 40.7336, lng: -73.9990 }
        },
        afternoon: {
          activity: "SoHo shopping & Chinatown",
          description: "Cast-iron architecture and designer shops, then dim sum and dumplings in Chinatown.",
          location: "SoHo & Chinatown, Manhattan",
          cost: "$20–$50 (food/shopping)",
          duration: "3.5 hours",
          tip: "SoHo's cast-iron architecture on Broadway and Prince Street is stunning — don't miss the cobblestone side streets",
          coordinates: { lat: 40.7233, lng: -73.9985 }
        },
        evening: {
          activity: "Little Italy & Nolita",
          description: "Mulberry Street cannoli, then craft cocktails in the hidden bars of Nolita.",
          location: "Little Italy & Nolita, Manhattan",
          cost: "$30–$60 (dinner/drinks)",
          duration: "3 hours",
          tip: "Skip the tourist traps on Mulberry Street's main drag — head to Nolita for hidden speakeasies like Attaboy",
          coordinates: { lat: 40.7191, lng: -73.9973 }
        }
      },
      {
        title: "Farewell NYC",
        morning: {
          activity: "Top of the Rock or Empire State",
          description: "One last panoramic view of the city that never sleeps.",
          location: "Top of the Rock, Rockefeller Center, Manhattan",
          cost: "$40–$44",
          duration: "1.5 hours",
          tip: "Top of the Rock offers the best view of Central Park — the Empire State Building view doesn't include itself",
          coordinates: { lat: 40.7593, lng: -73.9794 }
        },
        afternoon: {
          activity: "Harlem gospel & soul food",
          description: "Attend a gospel service, then have fried chicken and waffles at a legendary Harlem restaurant.",
          location: "Harlem, Manhattan",
          cost: "$20–$40 (dinner)",
          duration: "4 hours",
          tip: "Abyssinian Baptist Church has an incredible gospel choir — visitors are welcome at Sunday morning services",
          coordinates: { lat: 40.8116, lng: -73.9465 }
        },
        evening: {
          activity: "Broadway show",
          description: "End your trip with the magic of a Broadway performance — check TKTS for same-day discounts.",
          location: "Times Square / Theater District, Manhattan",
          cost: "$40–$150+ (tickets)",
          duration: "3 hours",
          tip: "The TKTS booth under the red steps in Duffy Square opens at 3pm — line up early for the best selection",
          coordinates: { lat: 40.7580, lng: -73.9855 }
        }
      }
    ]
  },
  {
    cityId: "london",
    days3: [
      {
        title: "Royal London",
        morning: {
          activity: "Buckingham Palace & Changing of the Guard",
          description: "Check the schedule — the guard change happens on specific days at 11am.",
          location: "Buckingham Palace, Westminster",
          cost: "Free (guard change); £30 (palace tour, summer only)",
          duration: "2 hours",
          tip: "The guard change happens on Mondays, Wednesdays, Fridays, and Sundays — check the official schedule online before you go",
          coordinates: { lat: 51.5014, lng: -0.1419 }
        },
        afternoon: {
          activity: "Westminster Abbey & Big Ben",
          description: "Tour the abbey where kings are crowned, then photograph Big Ben from Westminster Bridge.",
          location: "Westminster Abbey & Big Ben, Westminster",
          cost: "£29 (abbey entry); Free (Big Ben exterior)",
          duration: "2.5 hours",
          tip: "Book Westminster Abbey tickets online to skip the queue — the Cloisters and College Garden are included and often missed",
          coordinates: { lat: 51.4994, lng: -0.1273 }
        },
        evening: {
          activity: "South Bank sunset walk",
          description: "Walk from the London Eye to Tate Modern along the Thames as the city lights up.",
          location: "South Bank, London",
          cost: "Free",
          duration: "2 hours",
          tip: "Grab a drink at the Oxo Tower bar for one of the best river views in London — the terrace is stunning at sunset",
          coordinates: { lat: 51.5060, lng: -0.1107 }
        }
      },
      {
        title: "Museum Marathon",
        morning: {
          activity: "British Museum",
          description: "See the Rosetta Stone, Egyptian mummies, and the Parthenon Sculptures — all free.",
          location: "British Museum, Great Russell Street, Bloomsbury",
          cost: "Free",
          duration: "3 hours",
          tip: "Arrive right at opening time (10am) and head straight to the Rosetta Stone before the crowds build up",
          coordinates: { lat: 51.5194, lng: -0.1270 }
        },
        afternoon: {
          activity: "National Gallery & Trafalgar Square",
          description: "Van Gogh's Sunflowers, Turner's seascapes, and the iconic square with Nelson's Column.",
          location: "National Gallery, Trafalgar Square",
          cost: "Free",
          duration: "2.5 hours",
          tip: "Download the free National Gallery app for a self-guided highlights tour — 30 key paintings in 90 minutes",
          coordinates: { lat: 51.5089, lng: -0.1283 }
        },
        evening: {
          activity: "Covent Garden & West End",
          description: "Street performers, boutique shopping, and a world-class theater show.",
          location: "Covent Garden, London",
          cost: "Free–£15 (street performances); £20–£80 (theater)",
          duration: "4 hours",
          tip: "The TKTS booth in Leicester Square offers half-price same-day theater tickets — queue early for popular shows",
          coordinates: { lat: 51.5121, lng: -0.1227 }
        }
      },
      {
        title: "Eastside Edge",
        morning: {
          activity: "Tower of London & Tower Bridge",
          description: "See the Crown Jewels and walk across the glass floor of Tower Bridge's upper walkway.",
          location: "Tower of London & Tower Bridge, Tower Hill",
          cost: "£34.80 (Tower of London); £12.80 (Tower Bridge)",
          duration: "3.5 hours",
          tip: "Join the free Beefeater tour at the Tower — it's included in admission and both hilarious and informative",
          coordinates: { lat: 51.5081, lng: -0.0759 }
        },
        afternoon: {
          activity: "Shoreditch street art tour",
          description: "World-class graffiti and murals in London's creative hub. Check Brick Lane market on Sundays.",
          location: "Shoreditch & Brick Lane, East London",
          cost: "Free (self-guided); £12–£15 (guided tour)",
          duration: "2.5 hours",
          tip: "Download a street art map or join a walking tour — the art changes constantly so local guides know the newest pieces",
          coordinates: { lat: 51.5245, lng: -0.0810 }
        },
        evening: {
          activity: "Camden nightlife",
          description: "Live music venues, alternative pubs, and food from every corner of the world at Camden Market.",
          location: "Camden Market, Camden Town",
          cost: "$15–$40 (food/drinks/entry)",
          duration: "3 hours",
          tip: "Visit the Hawley Arms pub — a legendary music industry hangout where Amy Winehouse was a regular",
          coordinates: { lat: 51.5390, lng: -0.1427 }
        }
      }
    ],
    days5: [
      {
        title: "Classic Westminster",
        morning: {
          activity: "Westminster Abbey tour",
          description: "Arrive at opening time. The tombs of kings, queens, and poets are awe-inspiring.",
          location: "Westminster Abbey, 20 Deans Yard, Westminster",
          cost: "£29",
          duration: "2 hours",
          tip: "Book online for timed entry — the Poets' Corner and Henry VII's Chapel are the highlights most visitors rush past",
          coordinates: { lat: 51.4994, lng: -0.1273 }
        },
        afternoon: {
          activity: "St. James's Park & Buckingham Palace",
          description: "Walk through London's loveliest park to see the palace and the Queen's Gallery.",
          location: "St James's Park & Buckingham Palace, Westminster",
          cost: "Free (park); £17 (Queen's Gallery)",
          duration: "2.5 hours",
          tip: "The Queen's Gallery has rotating exhibitions from the Royal Collection — often more impressive than you'd expect",
          coordinates: { lat: 51.5025, lng: -0.1350 }
        },
        evening: {
          activity: "Dinner in Mayfair",
          description: "London's most elegant dining neighborhood with Michelin-starred options and classic pubs.",
          location: "Mayfair, London",
          cost: "£40–£100+ (dinner)",
          duration: "2.5 hours",
          tip: "The Guinea Grill in Mayfair is one of London's oldest pie-and-steak pubs — book ahead for the restaurant section",
          coordinates: { lat: 51.5115, lng: -0.1480 }
        }
      },
      {
        title: "Free Museum Day",
        morning: {
          activity: "British Museum deep dive",
          description: "Allow 3 hours minimum. The Enlightenment Gallery and Japanese collection are often overlooked gems.",
          location: "British Museum, Great Russell Street, Bloomsbury",
          cost: "Free",
          duration: "3 hours",
          tip: "The Enlightenment Gallery in the King's Library is a stunning room that most tourists walk right past",
          coordinates: { lat: 51.5194, lng: -0.1270 }
        },
        afternoon: {
          activity: "Tate Modern & Millennium Bridge",
          description: "Cross the river on the futuristic bridge to explore the world's best modern art gallery.",
          location: "Tate Modern, Southwark",
          cost: "Free (permanent collection)",
          duration: "3 hours",
          tip: "Cross the Millennium Bridge from St Paul's for the best approach — the turbine hall installations are always spectacular",
          coordinates: { lat: 51.5076, lng: -0.0994 }
        },
        evening: {
          activity: "Borough Market & Southwark",
          description: "Sample artisanal food at the market, then explore the historic pubs near Shakespeare's Globe.",
          location: "Borough Market, Southwark",
          cost: "£15–£30 (food)",
          duration: "2.5 hours",
          tip: "The market closes at 5pm — arrive by 3pm for the best selection. Try the Scotch eggs from The Ginger Pig",
          coordinates: { lat: 51.5055, lng: -0.0910 }
        }
      },
      {
        title: "Royal Greenwich",
        morning: {
          activity: "Cutty Sark & Royal Observatory",
          description: "Stand on the Prime Meridian line and explore the historic tea clipper ship.",
          location: "Royal Observatory & Cutty Sark, Greenwich",
          cost: "£18 (observatory); £18 (Cutty Sark)",
          duration: "3.5 hours",
          tip: "Buy a combined ticket for the Royal Observatory and Cutty Sark to save money — the DLR train ride to Greenwich is scenic",
          coordinates: { lat: 51.4829, lng: -0.0098 }
        },
        afternoon: {
          activity: "Greenwich Market & Park",
          description: "Browse the craft market, then climb the hill for the best view of the London skyline.",
          location: "Greenwich Market & Park, Greenwich",
          cost: "Free (park); varies (market)",
          duration: "2.5 hours",
          tip: "Climb the hill in Greenwich Park at sunset for an incredible free panorama of the Canary Wharf skyline",
          coordinates: { lat: 51.4826, lng: -0.0077 }
        },
        evening: {
          activity: "Thames Clipper boat ride",
          description: "Take the fast ferry back to central London — the river perspective is magical at dusk.",
          location: "Greenwich Pier to Central London (Thames Clipper)",
          cost: "£7–£10 (single fare)",
          duration: "45 minutes",
          tip: "Use your contactless card for the Uber Boat by Thames Clipper — sit on the upper deck for the best views",
          coordinates: { lat: 51.4826, lng: -0.0077 }
        }
      },
      {
        title: "Markets & Street Food",
        morning: {
          activity: "Camden Market exploration",
          description: "Over 1,000 stalls selling everything from vintage clothing to global street food.",
          location: "Camden Market, Camden Town",
          cost: "Free (browsing); £10–£25 (food/shopping)",
          duration: "3 hours",
          tip: "Explore the Stables Market section for the most unique finds — it's less crowded than the main Lock Market",
          coordinates: { lat: 51.5390, lng: -0.1427 }
        },
        afternoon: {
          activity: "Regent's Canal walk to Little Venice",
          description: "A peaceful towpath walk past houseboats and waterside cafes.",
          location: "Regent's Canal, Camden to Little Venice",
          cost: "Free",
          duration: "2.5 hours",
          tip: "The canal walk from Camden to Little Venice takes about 90 minutes — look out for the floating bookshop at Word on the Water",
          coordinates: { lat: 51.5340, lng: -0.1230 }
        },
        evening: {
          activity: "Notting Hill & Portobello Road",
          description: "Pastel houses, independent shops, and excellent restaurants in this charming neighborhood.",
          location: "Notting Hill & Portobello Road, West London",
          cost: "£25–£50 (dinner)",
          duration: "3 hours",
          tip: "Portobello Road antiques market is best on Saturdays — but the neighborhood is lovely any day for strolling",
          coordinates: { lat: 51.5155, lng: -0.1970 }
        }
      },
      {
        title: "Tower to Bridge",
        morning: {
          activity: "Tower of London",
          description: "The Beefeater tours are both hilarious and historically rich. Don't miss the ravens.",
          location: "Tower of London, Tower Hill",
          cost: "£34.80",
          duration: "3 hours",
          tip: "Head to the Crown Jewels first thing — the line grows rapidly and can take an hour by midday",
          coordinates: { lat: 51.5081, lng: -0.0759 }
        },
        afternoon: {
          activity: "Borough Market feast",
          description: "Lunch your way through the stalls — Scotch eggs, oysters, fresh bread, and artisan cheese.",
          location: "Borough Market, Southwark",
          cost: "£15–£30 (food)",
          duration: "2 hours",
          tip: "Stand at the oyster bar at Richard Haward for freshly shelled oysters — £15 for a half dozen",
          coordinates: { lat: 51.5055, lng: -0.0910 }
        },
        evening: {
          activity: "Sky Garden or Shard drinks",
          description: "Free or ticketed access to London's highest gardens with 360-degree city views.",
          location: "Sky Garden, 20 Fenchurch St (or The Shard, 32 London Bridge St)",
          cost: "Free (Sky Garden, book ahead); £25–£35 (Shard bar)",
          duration: "2 hours",
          tip: "Sky Garden tickets are free but book out weeks ahead — release dates are Mondays 10am for the following week",
          coordinates: { lat: 51.5114, lng: -0.0844 }
        }
      }
    ],
    days7: [
      {
        title: "Welcome to London",
        morning: {
          activity: "Big Ben & Westminster walk",
          description: "Start with the iconic sights along the Thames. Cross Westminster Bridge for the classic photo.",
          location: "Big Ben, Houses of Parliament, Westminster",
          cost: "Free",
          duration: "1.5 hours",
          tip: "The best photo of Big Ben is from the south side of Westminster Bridge — go early morning for fewer crowds",
          coordinates: { lat: 51.5007, lng: -0.1246 }
        },
        afternoon: {
          activity: "London Eye & South Bank",
          description: "The 30-minute wheel ride gives a perfect overview of the city layout.",
          location: "London Eye, South Bank",
          cost: "£30–£40",
          duration: "2 hours",
          tip: "Book London Eye tickets online in advance for significant savings — combine with a river cruise for the best value",
          coordinates: { lat: 51.5033, lng: -0.1195 }
        },
        evening: {
          activity: "Covent Garden dinner",
          description: "Restaurants around the piazza, street performers, and the Opera House nearby.",
          location: "Covent Garden, London",
          cost: "£30–£60 (dinner)",
          duration: "2.5 hours",
          tip: "Explore the hidden Neal's Yard just off Covent Garden — a tiny colorful courtyard with great cafes and shops",
          coordinates: { lat: 51.5121, lng: -0.1227 }
        }
      },
      {
        title: "Museum Culture",
        morning: {
          activity: "British Museum",
          description: "The Rosetta Stone and Egyptian mummies are highlights. The Great Court itself is stunning architecture.",
          location: "British Museum, Great Russell Street, Bloomsbury",
          cost: "Free",
          duration: "3 hours",
          tip: "Join one of the free 30-minute spotlight tours offered daily — they cover key highlights with expert guides",
          coordinates: { lat: 51.5194, lng: -0.1270 }
        },
        afternoon: {
          activity: "National Gallery",
          description: "Free entry to see masterworks by Da Vinci, Van Gogh, and Constable.",
          location: "National Gallery, Trafalgar Square",
          cost: "Free",
          duration: "2 hours",
          tip: "Don't miss Room 43 — it has Van Gogh's Sunflowers and several Monet water lilies in one intimate space",
          coordinates: { lat: 51.5089, lng: -0.1283 }
        },
        evening: {
          activity: "West End theater",
          description: "London's theater district rivals Broadway. Half-price tickets available at the TKTS booth in Leicester Square.",
          location: "West End, Leicester Square area",
          cost: "£15–£80 (tickets)",
          duration: "3 hours",
          tip: "The TKTS booth in Leicester Square is the only official half-price ticket booth — others may charge hidden fees",
          coordinates: { lat: 51.5080, lng: -0.1281 }
        }
      },
      {
        title: "Royal Heritage",
        morning: {
          activity: "Buckingham Palace State Rooms",
          description: "Open in summer — tour the lavishly decorated rooms used for official state events.",
          location: "Buckingham Palace, Westminster",
          cost: "£33.50",
          duration: "2.5 hours",
          tip: "State Rooms are only open July–October — book well in advance as timed slots sell out quickly",
          coordinates: { lat: 51.5014, lng: -0.1419 }
        },
        afternoon: {
          activity: "Tower of London",
          description: "The Crown Jewels and the White Tower's armor collection are extraordinary.",
          location: "Tower of London, Tower Hill",
          cost: "£34.80",
          duration: "3 hours",
          tip: "The White Tower's Line of Kings exhibition has displayed armor since 1658 — it's the world's longest-running museum display",
          coordinates: { lat: 51.5081, lng: -0.0759 }
        },
        evening: {
          activity: "Dinner at St. Katharine Docks",
          description: "A hidden marina next to the Tower with excellent waterside restaurants.",
          location: "St Katharine Docks, Tower Hill",
          cost: "£30–£60 (dinner)",
          duration: "2 hours",
          tip: "This peaceful marina is a hidden gem most tourists miss — the Dickens Inn is a historic pub in a converted timber warehouse",
          coordinates: { lat: 51.5056, lng: -0.0727 }
        }
      },
      {
        title: "East London Creative",
        morning: {
          activity: "Shoreditch street art tour",
          description: "See works by Banksy, Shepard Fairey, and local artists on Brick Lane and surrounding streets.",
          location: "Shoreditch, East London",
          cost: "Free (self-guided); £12–£15 (guided tour)",
          duration: "2.5 hours",
          tip: "Street art changes weekly — follow @shoreditchstreetart on Instagram for the latest pieces and locations",
          coordinates: { lat: 51.5245, lng: -0.0810 }
        },
        afternoon: {
          activity: "Old Spitalfields Market",
          description: "Designer stalls, vintage fashion, and excellent food under a Victorian market roof.",
          location: "Old Spitalfields Market, Spitalfields",
          cost: "Free (browsing); £10–£30 (food/shopping)",
          duration: "2 hours",
          tip: "Thursday is vintage day at Spitalfields — the best selection of retro clothing and collectibles",
          coordinates: { lat: 51.5196, lng: -0.0750 }
        },
        evening: {
          activity: "Dalston bars & clubs",
          description: "East London's nightlife hub with warehouse parties and intimate cocktail bars.",
          location: "Dalston, East London",
          cost: "£20–£40 (drinks/entry)",
          duration: "3 hours",
          tip: "Dalston Superstore and the surrounding bars on Kingsland Road are the heart of East London's nightlife scene",
          coordinates: { lat: 51.5475, lng: -0.0755 }
        }
      },
      {
        title: "Greenwich Day Trip",
        morning: {
          activity: "Royal Observatory & Prime Meridian",
          description: "Stand with one foot in each hemisphere and explore the timekeeping galleries.",
          location: "Royal Observatory, Greenwich",
          cost: "£18",
          duration: "2.5 hours",
          tip: "The Prime Meridian photo op is free outside the observatory gate if you don't want to pay for the full ticket",
          coordinates: { lat: 51.4769, lng: -0.0005 }
        },
        afternoon: {
          activity: "Greenwich Market & Cutty Sark",
          description: "Craft market browsing and touring the beautifully restored 19th-century sailing ship.",
          location: "Greenwich Market & Cutty Sark, Greenwich",
          cost: "Free (market); £18 (Cutty Sark)",
          duration: "3 hours",
          tip: "Try the Greenwich Market street food stalls for lunch — the Ethiopian injera and German bratwurst are local favorites",
          coordinates: { lat: 51.4829, lng: -0.0098 }
        },
        evening: {
          activity: "Uber Boat back to Westminster",
          description: "The river at dusk, with the city lights reflecting on the Thames.",
          location: "Greenwich Pier to Westminster Pier (Uber Boat)",
          cost: "£7–£10 (single fare)",
          duration: "45 minutes",
          tip: "Sit on the right side of the boat heading west for the best views of the Tower Bridge and London skyline",
          coordinates: { lat: 51.4826, lng: -0.0077 }
        }
      },
      {
        title: "Markets & Villages",
        morning: {
          activity: "Portobello Road Market",
          description: "Antique stalls, fashion, and street food in the heart of Notting Hill.",
          location: "Portobello Road, Notting Hill",
          cost: "Free (browsing); varies (shopping/food)",
          duration: "2.5 hours",
          tip: "Saturday is the main market day with full antique stalls — arrive before 10am to beat the crowds",
          coordinates: { lat: 51.5156, lng: -0.2050 }
        },
        afternoon: {
          activity: "Camden Town & Regent's Canal",
          description: "The market, the lock, and a canal-side walk to reggae-playing waterside pubs.",
          location: "Camden Market & Regent's Canal, Camden Town",
          cost: "Free (browsing); £10–£20 (food)",
          duration: "3 hours",
          tip: "Walk along Regent's Canal from Camden Lock — you'll pass houseboats, waterside pubs, and peaceful towpaths",
          coordinates: { lat: 51.5390, lng: -0.1427 }
        },
        evening: {
          activity: "Hampstead Heath sunset",
          description: "Climb Parliament Hill for the best free view of the London skyline at golden hour.",
          location: "Hampstead Heath, Hampstead",
          cost: "Free",
          duration: "2 hours",
          tip: "Parliament Hill gives you a panoramic view of the entire London skyline — bring a picnic and a blanket",
          coordinates: { lat: 51.5557, lng: -0.1649 }
        }
      },
      {
        title: "Farewell London",
        morning: {
          activity: "Borough Market breakfast",
          description: "Fresh pastries, artisan coffee, and the legendary Scotch eggs.",
          location: "Borough Market, Southwark",
          cost: "£10–£20 (breakfast)",
          duration: "1.5 hours",
          tip: "Borough Market opens at 10am Wednesday–Saturday — get there early for the freshest produce and shortest lines",
          coordinates: { lat: 51.5055, lng: -0.0910 }
        },
        afternoon: {
          activity: "Tate Modern & Shakespeare's Globe",
          description: "Modern art in a former power station, then a tour of the reconstructed Elizabethan theater.",
          location: "Tate Modern & Shakespeare's Globe, Southwark",
          cost: "Free (Tate Modern); £17 (Globe tour)",
          duration: "3 hours",
          tip: "The Globe theatre tour is fascinating — book the combined tour and exhibition ticket for the full experience",
          coordinates: { lat: 51.5080, lng: -0.0972 }
        },
        evening: {
          activity: "Sky Garden farewell drinks",
          description: "Book free tickets to London's highest public garden for a stunning final night view.",
          location: "Sky Garden, 20 Fenchurch St",
          cost: "Free (book in advance); £30+ (drinks)",
          duration: "2 hours",
          tip: "Free Sky Garden tickets are released online on Mondays at 10am for visits 3 weeks ahead — set a reminder",
          coordinates: { lat: 51.5114, lng: -0.0844 }
        }
      }
    ]
  },
  {
    cityId: "rio-de-janeiro",
    days3: [
      {
        title: "Iconic Rio",
        morning: {
          activity: "Christ the Redeemer by train",
          description: "Take the cog train through Tijuca Forest. Book the first departure for clear morning views.",
          location: "Christ the Redeemer, Corcovado Mountain",
          cost: "R$120 (train + entrance)",
          duration: "3 hours",
          tip: "Book the first train at 8am for the clearest views — clouds often roll in by midday",
          coordinates: { lat: -22.9519, lng: -43.2105 }
        },
        afternoon: {
          activity: "Copacabana Beach",
          description: "Walk the full 4km crescent. Grab acai from a beach vendor and watch the volleyball players.",
          location: "Copacabana Beach, Zona Sul",
          cost: "Free (R$10–$20 for acai)",
          duration: "3 hours",
          tip: "Buy acai from beach vendors in the blue coolers — it's cheaper and more authentic than cafe acai bowls",
          coordinates: { lat: -22.9711, lng: -43.1823 }
        },
        evening: {
          activity: "Sunset at Arpoador",
          description: "Join locals applauding the sunset from the rock between Copacabana and Ipanema.",
          location: "Arpoador Rock, between Copacabana and Ipanema",
          cost: "Free",
          duration: "1.5 hours",
          tip: "Arrive 30 minutes before sunset to get a good spot on the rock — it's a beloved Carioca tradition to applaud the setting sun",
          coordinates: { lat: -22.9850, lng: -43.1925 }
        }
      },
      {
        title: "Sugarloaf & History",
        morning: {
          activity: "Sugarloaf Mountain cable car",
          description: "Two-stage cable car ride. The first stop at Morro da Urca has great hiking trails too.",
          location: "Sugarloaf Mountain, Urca",
          cost: "R$120 (cable car round trip)",
          duration: "3 hours",
          tip: "Buy tickets online in advance to skip the ticket line — take the first cable car up for the clearest views",
          coordinates: { lat: -22.9511, lng: -43.1664 }
        },
        afternoon: {
          activity: "Santa Teresa neighborhood",
          description: "Ride the historic tram, browse art galleries, and admire colonial architecture.",
          location: "Santa Teresa, Rio de Janeiro",
          cost: "Free–R$20 (tram ride)",
          duration: "2.5 hours",
          tip: "Take the bondinho (yellow tram) from Largo da Carioca — it's a charming ride through the hilltop neighborhood",
          coordinates: { lat: -22.9390, lng: -43.1868 }
        },
        evening: {
          activity: "Lapa nightlife & samba",
          description: "The Arcos da Lapa arches light up at night. Find a samba club and dance until dawn.",
          location: "Lapa, Rio de Janeiro",
          cost: "R$30–R$80 (cover charge)",
          duration: "4 hours",
          tip: "Head to Rio Scenarium on Rua do Lavradio — it's the most famous samba club in Lapa with incredible atmosphere",
          coordinates: { lat: -22.9145, lng: -43.1799 }
        }
      },
      {
        title: "Beach & Culture",
        morning: {
          activity: "Ipanema Beach morning",
          description: "The most beautiful beach in Rio. Rent a chair, buy coconut water from a vendor, and relax.",
          location: "Ipanema Beach, Zona Sul",
          cost: "Free (R$5 for coconut water)",
          duration: "3 hours",
          tip: "Posto 9 is the trendy section — it's where the beautiful people go and has the best people-watching",
          coordinates: { lat: -22.9867, lng: -43.1985 }
        },
        afternoon: {
          activity: "Selaron Steps & Lapa",
          description: "The colorful tiled staircase is a work of art. Explore the surrounding bohemian streets.",
          location: "Selaron Steps, Santa Teresa/Lapa",
          cost: "Free",
          duration: "1.5 hours",
          tip: "The steps are a living artwork — artist Jorge Selaron dedicated his life to creating them with tiles sent from around the world",
          coordinates: { lat: -22.9150, lng: -43.1792 }
        },
        evening: {
          activity: "Feijoada dinner",
          description: "Brazil's national dish — a hearty black bean stew with pork, served with rice and farofa.",
          location: "Various restaurants in Lapa or Ipanema",
          cost: "R$60–R$100 (dinner)",
          duration: "2 hours",
          tip: "Saturday is the traditional day for feijoada — try Casa da Feijoada in Ipanema for an authentic experience",
          coordinates: { lat: -22.9867, lng: -43.1985 }
        }
      }
    ],
    days5: [
      {
        title: "Christ the Redeemer Day",
        morning: {
          activity: "Christ the Redeemer summit",
          description: "The train through Tijuca Forest is an experience itself. The statue is even more impressive up close.",
          location: "Christ the Redeemer, Corcovado Mountain",
          cost: "R$120 (train + entrance)",
          duration: "3 hours",
          tip: "Take the van option from Copacabana if the train is sold out — it's cheaper and often has availability",
          coordinates: { lat: -22.9519, lng: -43.2105 }
        },
        afternoon: {
          activity: "Tijuca Forest hike",
          description: "The world's largest urban forest. Hike to Cascatinha waterfall and spot monkeys in the canopy.",
          location: "Tijuca Forest National Park",
          cost: "Free",
          duration: "3 hours",
          tip: "Hire a local guide at the park entrance — trails are not well marked and the forest is deceptively large",
          coordinates: { lat: -22.9600, lng: -43.2600 }
        },
        evening: {
          activity: "Copacabana dinner on the strip",
          description: "Beachfront restaurants with live bossa nova music and fresh seafood.",
          location: "Copacabana Beachfront, Avenida Atlantica",
          cost: "R$80–R$150 (dinner)",
          duration: "2.5 hours",
          tip: "Try a seafood moqueca (fish stew) at one of the beachfront kiosks — many have live music on weekend evenings",
          coordinates: { lat: -22.9711, lng: -43.1823 }
        }
      },
      {
        title: "Sugarloaf & Downtown",
        morning: {
          activity: "Sugarloaf cable car",
          description: "Go early for clear views. The glass-walled cable car is an experience in itself.",
          location: "Sugarloaf Mountain, Urca",
          cost: "R$120 (cable car round trip)",
          duration: "3 hours",
          tip: "The sunset from Sugarloaf is legendary but crowded — morning visits offer clearer skies and fewer people",
          coordinates: { lat: -22.9511, lng: -43.1664 }
        },
        afternoon: {
          activity: "Museum of Tomorrow & MAR",
          description: "Two stunning modern museums in the revitalized Porto Maravilha district.",
          location: "Museum of Tomorrow, Praca Maua, Centro",
          cost: "R$30–R$40 (each museum)",
          duration: "3 hours",
          tip: "The Museum of Tomorrow's architecture by Santiago Calatrava is as impressive as the interactive exhibits inside",
          coordinates: { lat: -22.8965, lng: -43.1310 }
        },
        evening: {
          activity: "Pedra do Sal street party",
          description: "The birthplace of samba comes alive on Monday and Friday nights with live music.",
          location: "Pedra do Sal, Centro/Saude",
          cost: "Free",
          duration: "3 hours",
          tip: "Monday and Friday nights are when the street party happens — arrive by 8pm for the best atmosphere",
          coordinates: { lat: -22.8975, lng: -43.1775 }
        }
      },
      {
        title: "Beach Life",
        morning: {
          activity: "Ipanema & Leblon beaches",
          description: "Start at Posto 9 in Ipanema, walk the coastline to the more peaceful Leblon stretch.",
          location: "Ipanema & Leblon Beaches, Zona Sul",
          cost: "Free",
          duration: "3 hours",
          tip: "Walk from Posto 9 in Ipanema to Posto 12 in Leblon — the beach gets progressively quieter and more upscale",
          coordinates: { lat: -22.9867, lng: -43.1985 }
        },
        afternoon: {
          activity: "Rodrigo de Freitas Lagoon",
          description: "Rent a paddleboat or bike around the lagoon with Sugarloaf views.",
          location: "Rodrigo de Freitas Lagoon, Lagoa",
          cost: "R$30–R$50 (bike/paddleboat rental)",
          duration: "2.5 hours",
          tip: "Rent bikes and ride the full loop around the lagoon — it's about 7km with stunning mountain views the entire way",
          coordinates: { lat: -22.9730, lng: -43.2080 }
        },
        evening: {
          activity: "Arpoador sunset & beach dinner",
          description: "Watch the legendary sunset, then eat at a beachfront restaurant in Ipanema.",
          location: "Arpoador & Ipanema, Zona Sul",
          cost: "R$60–R$120 (dinner)",
          duration: "3 hours",
          tip: "Sit at a beachfront table at Garota de Ipanema — the restaurant where the famous song 'The Girl from Ipanema' was composed",
          coordinates: { lat: -22.9850, lng: -43.1925 }
        }
      },
      {
        title: "Santa Teresa & Lapa",
        morning: {
          activity: "Santa Teresa art walk",
          description: "Galleries, studios, and the Parque das Ruinas with its panoramic terrace.",
          location: "Santa Teresa, Rio de Janeiro",
          cost: "Free",
          duration: "2.5 hours",
          tip: "Visit Parque das Ruinas — the ruins of a mansion with a panoramic terrace offering 360-degree views of Rio",
          coordinates: { lat: -22.9390, lng: -43.1868 }
        },
        afternoon: {
          activity: "Escadaria Selaron",
          description: "The iconic tile steps connecting Santa Teresa to Lapa. Each tile was donated from around the world.",
          location: "Selaron Steps, Rua Manuel Carneiro, Santa Teresa",
          cost: "Free",
          duration: "1 hour",
          tip: "The steps are always open but best visited in daylight — look for tiles from your home country among the 2,000+ pieces",
          coordinates: { lat: -22.9150, lng: -43.1792 }
        },
        evening: {
          activity: "Lapa samba clubs",
          description: "Rio's nightlife heart — Carioca da Gema and Asa Branca are legendary samba venues.",
          location: "Lapa, Rio de Janeiro",
          cost: "R$40–R$80 (cover charge)",
          duration: "4 hours",
          tip: "Carioca da Gema has live samba every night — arrive before 10pm to avoid long lines",
          coordinates: { lat: -22.9145, lng: -43.1799 }
        }
      },
      {
        title: "Beyond the City",
        morning: {
          activity: "Niteroi Contemporary Art Museum",
          description: "Take the ferry across the bay to see Oscar Niemeyer's flying-saucer museum.",
          location: "Niteroi Contemporary Art Museum, Niteroi",
          cost: "R$20 (museum); R$8 (ferry)",
          duration: "3 hours",
          tip: "The ferry from Praca XV takes 20 minutes — the museum's viewing deck has one of the best views of Rio's skyline",
          coordinates: { lat: -22.9070, lng: -43.1255 }
        },
        afternoon: {
          activity: "Prainha Beach",
          description: "A secluded eco-beach 45 minutes from the city — popular with surfers and nature lovers.",
          location: "Prainha Beach, West Zone",
          cost: "Free (R$50–R$80 taxi each way)",
          duration: "3 hours",
          tip: "This protected eco-beach has no buildings — bring your own water and snacks as facilities are minimal",
          coordinates: { lat: -22.9880, lng: -43.4780 }
        },
        evening: {
          activity: "Farewell caipirinha on the beach",
          description: "End your trip watching the stars from Copacabana with Brazil's national cocktail.",
          location: "Copacabana Beach, Zona Sul",
          cost: "R$15–R$30 (caipirinha)",
          duration: "2 hours",
          tip: "Grab a caipirinha from a beach kiosk and sit on the sand — the stars over Copacabana are magical at night",
          coordinates: { lat: -22.9711, lng: -43.1823 }
        }
      }
    ],
    days7: [
      {
        title: "Welcome to Rio",
        morning: {
          activity: "Copacabana Beach walk",
          description: "Get your bearings with a full walk along the famous curved shoreline.",
          location: "Copacabana Beach, Zona Sul",
          cost: "Free",
          duration: "2 hours",
          tip: "Walk the full 4km from one end to the other — the wave-patterned Portuguese stone sidewalk is a work of art itself",
          coordinates: { lat: -22.9711, lng: -43.1823 }
        },
        afternoon: {
          activity: "Sugarloaf Mountain",
          description: "The two-stage cable car gives incredible views. Time it for late afternoon golden light.",
          location: "Sugarloaf Mountain, Urca",
          cost: "R$120 (cable car round trip)",
          duration: "3 hours",
          tip: "Time your visit for 4–5pm to catch the golden hour light — stay for sunset if it's a clear day",
          coordinates: { lat: -22.9511, lng: -43.1664 }
        },
        evening: {
          activity: "Urca neighborhood dinner",
          description: "A quiet, safe neighborhood with excellent seafood restaurants and bay views.",
          location: "Urca, Rio de Janeiro",
          cost: "R$80–R$150 (dinner)",
          duration: "2 hours",
          tip: "Urca is one of Rio's safest and most charming neighborhoods — try Bar Urca for seafood and bay views at sunset",
          coordinates: { lat: -22.9490, lng: -43.1600 }
        }
      },
      {
        title: "Christ & Forest",
        morning: {
          activity: "Christ the Redeemer",
          description: "The early train through the misty forest is magical. The statue appears through the clouds.",
          location: "Christ the Redeemer, Corcovado Mountain",
          cost: "R$120 (train + entrance)",
          duration: "3 hours",
          tip: "On cloudy days, wait 30 minutes at the summit — the clouds often part revealing stunning views below",
          coordinates: { lat: -22.9519, lng: -43.2105 }
        },
        afternoon: {
          activity: "Tijuca National Park",
          description: "Hike to the summit of Pico da Tijuca for a view that rivals Corcovado — with no crowds.",
          location: "Tijuca National Park",
          cost: "Free",
          duration: "3.5 hours",
          tip: "The hike to Pico da Tijuca (1,021m) is challenging but rewarding — hire a guide as the trail starts are not obvious",
          coordinates: { lat: -22.9600, lng: -43.2600 }
        },
        evening: {
          activity: "Santa Teresa dinner",
          description: "Bohemian restaurants with live MPB (Musica Popular Brasileira) in colonial settings.",
          location: "Santa Teresa, Rio de Janeiro",
          cost: "R$70–R$130 (dinner)",
          duration: "2.5 hours",
          tip: "Aprazivel restaurant has a stunning garden terrace with panoramic views — book a table by the edge",
          coordinates: { lat: -22.9390, lng: -43.1868 }
        }
      },
      {
        title: "Beach Paradise",
        morning: {
          activity: "Ipanema sunrise",
          description: "Join the early surfers and joggers. The morning light on the mountains is photographer's gold.",
          location: "Ipanema Beach, Zona Sul",
          cost: "Free",
          duration: "2 hours",
          tip: "Sunrise is around 5:30am in summer — the light hitting the Dois Irmaos mountains turns them golden",
          coordinates: { lat: -22.9867, lng: -43.1985 }
        },
        afternoon: {
          activity: "Arpoador rock & surf lesson",
          description: "Watch surfers from the famous rock, then try a lesson yourself at the gentle break.",
          location: "Arpoador, between Copacabana and Ipanema",
          cost: "R$80–R$120 (surf lesson)",
          duration: "3 hours",
          tip: "Arpoador has the most beginner-friendly waves in Rio — book a lesson for the morning when the swell is gentler",
          coordinates: { lat: -22.9850, lng: -43.1925 }
        },
        evening: {
          activity: "Sunset applause at Arpoador",
          description: "Every evening, hundreds of locals gather to applaud the sunset — a beautiful Rio ritual.",
          location: "Arpoador Rock, Zona Sul",
          cost: "Free",
          duration: "1.5 hours",
          tip: "Bring a cold drink and join the locals — the applause starts the moment the sun touches the horizon",
          coordinates: { lat: -22.9850, lng: -43.1925 }
        }
      },
      {
        title: "Culture & History",
        morning: {
          activity: "Museum of Tomorrow",
          description: "Santiago Calatrava's spaceship-like building with interactive exhibits about Earth's future.",
          location: "Museum of Tomorrow, Praca Maua, Centro",
          cost: "R$30",
          duration: "2.5 hours",
          tip: "Buy tickets online to skip the line — the main exhibit is a 40-minute interactive journey through Earth's history and future",
          coordinates: { lat: -22.8965, lng: -43.1310 }
        },
        afternoon: {
          activity: "Royal Portuguese Reading Room",
          description: "One of the most beautiful libraries in the world, with a stunning Gothic-Renaissance interior.",
          location: "Royal Portuguese Reading Room, Rua Luis de Camoes, Centro",
          cost: "R$10",
          duration: "1.5 hours",
          tip: "This hidden gem is often empty of tourists — the three-story stained glass skylight is breathtaking",
          coordinates: { lat: -22.9050, lng: -43.1810 }
        },
        evening: {
          activity: "Lapa arches & nightlife",
          description: "The neighborhood transforms at night — street vendors, live music, and dancing under the illuminated aqueduct.",
          location: "Lapa, Rio de Janeiro",
          cost: "Free–R$50 (drinks/cover)",
          duration: "4 hours",
          tip: "The Arcos da Lapa (Lapa Arches) are the iconic illuminated aqueduct — the area around them is the center of nightlife",
          coordinates: { lat: -22.9145, lng: -43.1799 }
        }
      },
      {
        title: "Santa Teresa Art Day",
        morning: {
          activity: "Historic tram ride",
          description: "The charming yellow tram rattles through the streets of Rio's most artistic neighborhood.",
          location: "Santa Teresa, Rio de Janeiro",
          cost: "R$20 (tram ride)",
          duration: "1.5 hours",
          tip: "The tram runs from Largo da Carioca — sit on the right side for the best views as it climbs through the neighborhood",
          coordinates: { lat: -22.9390, lng: -43.1868 }
        },
        afternoon: {
          activity: "Selaron Steps & galleries",
          description: "The colorful staircase and surrounding galleries showcase the best of Brazilian art.",
          location: "Selaron Steps, Santa Teresa/Lapa",
          cost: "Free",
          duration: "2 hours",
          tip: "Explore the galleries and studios on Rua Almirante Alexandrino — many local artists open their studios to visitors",
          coordinates: { lat: -22.9150, lng: -43.1792 }
        },
        evening: {
          activity: "Samba at Pedra do Sal",
          description: "The birthplace of samba hosts free outdoor parties — pure Carioca joy.",
          location: "Pedra do Sal, Centro/Saude",
          cost: "Free",
          duration: "3 hours",
          tip: "Bring cash for caipirinhas from the street vendors — the party starts around 8pm and goes until midnight",
          coordinates: { lat: -22.8975, lng: -43.1775 }
        }
      },
      {
        title: "Day Trip: Islands",
        morning: {
          activity: "Ferry to Ilha de Paqueta",
          description: "A car-free island in Guanabara Bay — rent a bicycle and explore the tropical lanes.",
          location: "Ilha de Paqueta, Guanabara Bay",
          cost: "R$8 (ferry); R$15 (bike rental)",
          duration: "3 hours",
          tip: "The ferry leaves from Praca XV — take the 8am departure for a full day on the island before afternoon crowds",
          coordinates: { lat: -22.7580, lng: -43.1085 }
        },
        afternoon: {
          activity: "Beach time on the island",
          description: "Quiet beaches, colonial churches, and a pace of life unchanged for decades.",
          location: "Ilha de Paqueta, Guanabara Bay",
          cost: "Free (R$20–$40 for food)",
          duration: "3 hours",
          tip: "Rent a bicycle at the ferry dock — no cars are allowed on the island so cycling is the best way to explore",
          coordinates: { lat: -22.7580, lng: -43.1085 }
        },
        evening: {
          activity: "Ferry back at sunset",
          description: "The return boat ride gives spectacular views of Rio's skyline as the sun sets behind Sugarloaf.",
          location: "Ilha de Paqueta to Praca XV (ferry)",
          cost: "R$8 (ferry)",
          duration: "1.5 hours",
          tip: "Sit on the upper deck on the left side for the iconic sunset view of Sugarloaf and Christ the Redeemer",
          coordinates: { lat: -22.7580, lng: -43.1085 }
        }
      },
      {
        title: "Farewell Rio",
        morning: {
          activity: "Hike Morro Dois Irmaos",
          description: "The two brothers peaks offer the most spectacular view of the city — the reward is worth the climb.",
          location: "Morro Dois Irmaos, Zona Sul",
          cost: "Free",
          duration: "3 hours",
          tip: "Start early morning for cooler temperatures — the trail begins at the Vidigal favela entrance, hire a local guide for safety",
          coordinates: { lat: -22.9890, lng: -43.2370 }
        },
        afternoon: {
          activity: "Leblon shopping & lunch",
          description: "Rio's most upscale neighborhood for a farewell meal — try a churrascaria (Brazilian steakhouse).",
          location: "Leblon, Zona Sul",
          cost: "R$100–R$200 (churrascaria lunch)",
          duration: "3 hours",
          tip: "A churrascaria rodizio is all-you-can-eat meat served at your table — come hungry and pace yourself",
          coordinates: { lat: -22.9840, lng: -43.2110 }
        },
        evening: {
          activity: "Caipirinha toast at Copacabana",
          description: "Watch the stars over the beach with Brazil's national cocktail. A perfect Rio goodbye.",
          location: "Copacabana Beach, Zona Sul",
          cost: "R$15–R$30 (caipirinha)",
          duration: "2 hours",
          tip: "Order a caipirinha de limao (classic lime) at a beach kiosk and toast to Rio — the beach is safe and lively at night",
          coordinates: { lat: -22.9711, lng: -43.1823 }
        }
      }
    ]
  },
  {
    cityId: "sydney",
    days3: [
      {
        title: "Harbour Icons",
        morning: {
          activity: "Sydney Opera House tour",
          description: "The behind-the-scenes tour reveals the concert halls and the building's fascinating story.",
          location: "Sydney Opera House, Bennelong Point",
          cost: "AUD 43",
          duration: "1 hour",
          tip: "Book the first tour of the day for smaller groups and better photo opportunities inside the theatres.",
          coordinates: { lat: -33.8568, lng: 151.2153 }
        },
        afternoon: {
          activity: "Harbour Bridge walk",
          description: "Walk across for free, or do the BridgeClimb for a thrilling overhead experience.",
          location: "Sydney Harbour Bridge",
          cost: "Free (walk) / AUD 174-403 (BridgeClimb)",
          duration: "30 minutes (walk) / 3.5 hours (BridgeClimb)",
          tip: "The pedestrian walkway is on the eastern side. Enter from Cumberland Street in The Rocks for the easiest access.",
          coordinates: { lat: -33.8523, lng: 151.2108 }
        },
        evening: {
          activity: "Circular Quay dinner",
          description: "Waterfront restaurants with Opera House views — magical at night when it's lit up.",
          location: "Circular Quay",
          cost: "AUD 30-80 per meal",
          duration: "1.5-2 hours",
          tip: "Reserve a table at Aria or Bennelong for fine dining, or grab fish and chips from the wharf for a budget option.",
          coordinates: { lat: -33.8616, lng: 151.2116 }
        }
      },
      {
        title: "Beach Day",
        morning: {
          activity: "Bondi to Coogee coastal walk",
          description: "A 6km cliff-top trail passing six beaches, rock pools, and dramatic ocean views.",
          location: "Bondi to Coogee Coastal Walk",
          cost: "Free",
          duration: "2-3 hours",
          tip: "Start early morning to avoid the midday sun. Bring water and wear sunscreen — there is little shade along the trail.",
          coordinates: { lat: -33.8908, lng: 151.2743 }
        },
        afternoon: {
          activity: "Surf lesson at Bondi",
          description: "Beginner-friendly waves and professional instructors make it easy to catch your first wave.",
          location: "Bondi Beach",
          cost: "AUD 70-100",
          duration: "2 hours",
          tip: "Book a group lesson at Lets Surf or Bondi Surf Experience. Wetsuits and boards are included in the price.",
          coordinates: { lat: -33.8908, lng: 151.2743 }
        },
        evening: {
          activity: "Bondi Beach sunset dinner",
          description: "Beachfront restaurants and bars come alive as the sun sets over the Pacific.",
          location: "Bondi Beach",
          cost: "AUD 40-90 per meal",
          duration: "1.5-2 hours",
          tip: "Icebergs Dining Room has the best ocean views. For a casual vibe, try North Bondi Fish.",
          coordinates: { lat: -33.8908, lng: 151.2743 }
        }
      },
      {
        title: "City Culture",
        morning: {
          activity: "Royal Botanic Garden",
          description: "Walk from the Opera House through the gardens — harbor views, exotic plants, and flying foxes.",
          location: "Royal Botanic Garden Sydney",
          cost: "Free",
          duration: "1.5-2 hours",
          tip: "Enter from the Opera House gate and walk to Mrs Macquarie's Chair for the best harbor panorama in Sydney.",
          coordinates: { lat: -33.8642, lng: 151.2166 }
        },
        afternoon: {
          activity: "Art Gallery of NSW & The Rocks",
          description: "Free art gallery, then explore Sydney's oldest neighborhood with its weekend markets.",
          location: "Art Gallery of NSW / The Rocks",
          cost: "Free (gallery) / varies (markets)",
          duration: "3-4 hours",
          tip: "The Rocks Markets run every Saturday and Sunday from 10am-5pm. The gallery's contemporary wing opened in 2022.",
          coordinates: { lat: -33.8682, lng: 151.2169 }
        },
        evening: {
          activity: "Darling Harbour",
          description: "Waterfront dining, the SEA LIFE Aquarium, and the spectacular Saturday night fireworks.",
          location: "Darling Harbour",
          cost: "AUD 30-70 per meal",
          duration: "2-3 hours",
          tip: "Saturday fireworks are at 9pm. Barangaroo Reserve nearby is a newer waterfront park with great sunset spots.",
          coordinates: { lat: -33.8724, lng: 151.1994 }
        }
      }
    ],
    days5: [
      {
        title: "Opera House & Harbour",
        morning: {
          activity: "Opera House guided tour",
          description: "Learn how Jorn Utzon's controversial masterpiece was built over 16 years.",
          location: "Sydney Opera House, Bennelong Point",
          cost: "AUD 43",
          duration: "1 hour",
          tip: "The Backstage Tour at 7am includes breakfast in the Green Room — worth the early start.",
          coordinates: { lat: -33.8568, lng: 151.2153 }
        },
        afternoon: {
          activity: "Taronga Zoo by ferry",
          description: "The ferry ride has the best harbour views. The zoo has native Australian animals including koalas.",
          location: "Taronga Zoo, Mosman",
          cost: "AUD 52 (zoo) + AUD 7 (ferry with Opal card)",
          duration: "3-4 hours",
          tip: "Take the Sky Safari cable car from the ferry wharf entrance to the top of the zoo, then walk downhill.",
          coordinates: { lat: -33.8427, lng: 151.2414 }
        },
        evening: {
          activity: "The Rocks historic pub",
          description: "Sydney's oldest pubs serve cold beer and hearty pub meals in colonial-era buildings.",
          location: "The Rocks",
          cost: "AUD 25-50 per meal",
          duration: "2 hours",
          tip: "The Hero of Waterloo (est. 1843) has hidden tunnels used by rum smugglers. The Glenmore Hotel rooftop has harbour views.",
          coordinates: { lat: -33.8590, lng: 151.2090 }
        }
      },
      {
        title: "Eastern Beaches",
        morning: {
          activity: "Bondi to Coogee walk",
          description: "Stop at Bronte Beach for a swim in the ocean pool — a local tradition.",
          location: "Bronte Beach",
          cost: "Free",
          duration: "2-3 hours",
          tip: "Bronte's natural rock pool is calmer than the surf. Grab coffee at Bronte Cafe before continuing south.",
          coordinates: { lat: -33.9030, lng: 151.2660 }
        },
        afternoon: {
          activity: "Surf or snorkel at Gordons Bay",
          description: "This hidden bay between Coogee and Clovelly has an underwater nature trail.",
          location: "Gordons Bay",
          cost: "Free (snorkel gear rental AUD 20)",
          duration: "1.5-2 hours",
          tip: "The underwater trail has chain markers to follow. Visibility is best on calm days. Clovelly Beach nearby is also great for snorkeling.",
          coordinates: { lat: -33.9120, lng: 151.2620 }
        },
        evening: {
          activity: "Coogee Beach dinner",
          description: "A more relaxed beachside dining scene than Bondi, popular with locals.",
          location: "Coogee Beach",
          cost: "AUD 30-60 per meal",
          duration: "1.5 hours",
          tip: "The Coogee Pavilion has a rooftop bar with ocean views. Sugarcane is great for brunch-style dinner.",
          coordinates: { lat: -33.9209, lng: 151.2582 }
        }
      },
      {
        title: "Blue Mountains Day Trip",
        morning: {
          activity: "Train to Katoomba",
          description: "A scenic 2-hour train ride into the World Heritage-listed Blue Mountains.",
          location: "Katoomba, Blue Mountains",
          cost: "AUD 5-8 (Opal card off-peak)",
          duration: "2 hours (train ride)",
          tip: "Sit on the left side of the train for canyon views as you approach Katoomba. Depart from Central Station.",
          coordinates: { lat: -33.7140, lng: 150.3120 }
        },
        afternoon: {
          activity: "Three Sisters & Scenic World",
          description: "The iconic rock formation and the world's steepest railway through the rainforest.",
          location: "Three Sisters / Scenic World, Katoomba",
          cost: "AUD 50 (Scenic World) / Free (Three Sisters lookout)",
          duration: "3-4 hours",
          tip: "Do the Scenic Railway first, then walk the boardwalk through the Jamison Valley, and ride the cableway back up.",
          coordinates: { lat: -33.7315, lng: 150.3120 }
        },
        evening: {
          activity: "Return to Sydney — Newtown dinner",
          description: "Explore King Street's eclectic restaurants in Sydney's alternative heart.",
          location: "Newtown",
          cost: "AUD 20-50 per meal",
          duration: "2 hours",
          tip: "Try Tibetan momos at Tibetan Kitchen, or a vegan feast at Golden Lotus. King Street has over 100 restaurants.",
          coordinates: { lat: -33.8930, lng: 151.1770 }
        }
      },
      {
        title: "Manly & Northern Beaches",
        morning: {
          activity: "Ferry to Manly Beach",
          description: "The 30-minute ferry is a harbor tour in itself — sit upstairs for the best views.",
          location: "Manly Beach",
          cost: "AUD 7 (Opal card)",
          duration: "30 minutes (ferry)",
          tip: "The Manly Fast Ferry is quicker but the regular F1 ferry is the scenic route. Depart from Circular Quay Wharf 3.",
          coordinates: { lat: -33.7940, lng: 151.2870 }
        },
        afternoon: {
          activity: "Manly to Shelly Beach snorkel",
          description: "Walk the headland trail and snorkel in the calm waters of Shelly Beach.",
          location: "Shelly Beach, Manly",
          cost: "Free",
          duration: "1.5-2 hours",
          tip: "The Cabbage Tree Bay aquatic reserve has abundant marine life including blue gropers and cuttlefish.",
          coordinates: { lat: -33.7880, lng: 151.2840 }
        },
        evening: {
          activity: "Manly Beach sunset drinks",
          description: "Beachfront bars with a laid-back surf town vibe. The ferry back at night is magical.",
          location: "Manly Beach",
          cost: "AUD 15-30 per drink",
          duration: "1.5 hours",
          tip: "The Manly Wharf Hotel has a rooftop deck. Take the last ferry back for the best night views of the harbour.",
          coordinates: { lat: -33.7940, lng: 151.2870 }
        }
      },
      {
        title: "Urban Exploration",
        morning: {
          activity: "Queen Victoria Building & CBD",
          description: "A stunning Victorian shopping arcade. Explore the Strand Arcade and Pitt Street Mall.",
          location: "Queen Victoria Building",
          cost: "Free to explore",
          duration: "1.5-2 hours",
          tip: "Don't miss the Royal Clock on the top level — it performs a scene from English history every hour on the hour.",
          coordinates: { lat: -33.8708, lng: 151.2065 }
        },
        afternoon: {
          activity: "Darling Harbour & Barangaroo",
          description: "The new waterfront precinct with restaurants, the casino, and harbour-side parks.",
          location: "Barangaroo Reserve",
          cost: "Free",
          duration: "2-3 hours",
          tip: "Barangaroo Reserve is built on the old container wharf. Walk to the top of the hill for harbour bridge views.",
          coordinates: { lat: -33.8630, lng: 151.2020 }
        },
        evening: {
          activity: "Bar 360 or Sydney Tower Eye",
          description: "End with a drink at the city's highest bar or observation deck for a 360-degree sunset.",
          location: "Sydney Tower Eye",
          cost: "AUD 30 (observation) / AUD 25+ per drink (Bar 360)",
          duration: "1-1.5 hours",
          tip: "Book the Sydney Tower Eye sunset slot in advance. Bar 360 rotates, giving you a full panorama over 90 minutes.",
          coordinates: { lat: -33.8705, lng: 151.2089 }
        }
      }
    ],
    days7: [
      {
        title: "Welcome to Sydney",
        morning: {
          activity: "Circular Quay & Opera House",
          description: "Start with the iconic shot from the ferry wharf. Do a guided tour inside the Opera House.",
          location: "Circular Quay / Sydney Opera House",
          cost: "AUD 43 (tour)",
          duration: "2-3 hours",
          tip: "Take the photo from the western side of Circular Quay for the classic Opera House + Harbour Bridge composition.",
          coordinates: { lat: -33.8616, lng: 151.2116 }
        },
        afternoon: {
          activity: "Royal Botanic Garden walk",
          description: "A peaceful harbourside walk from the Opera House to Mrs Macquarie's Chair viewpoint.",
          location: "Mrs Macquarie's Chair, Royal Botanic Garden",
          cost: "Free",
          duration: "1.5 hours",
          tip: "Mrs Macquarie's Chair is the best free viewpoint in Sydney — Opera House and Harbour Bridge in one frame.",
          coordinates: { lat: -33.8589, lng: 151.2222 }
        },
        evening: {
          activity: "The Rocks dinner",
          description: "Sydney's oldest neighborhood with historic pubs and waterfront restaurants.",
          location: "The Rocks",
          cost: "AUD 35-80 per meal",
          duration: "2 hours",
          tip: "Try The Australian Heritage Hotel for native meat pizzas (crocodile, emu) or Sake Restaurant for modern Asian.",
          coordinates: { lat: -33.8590, lng: 151.2090 }
        }
      },
      {
        title: "Harbour Adventure",
        morning: {
          activity: "Harbour Bridge climb or walk",
          description: "The BridgeClimb is a bucket-list experience. The free walkway is also spectacular.",
          location: "Sydney Harbour Bridge",
          cost: "Free (walk) / AUD 174-403 (BridgeClimb)",
          duration: "30 min (walk) / 3.5 hours (BridgeClimb)",
          tip: "BridgeClimb summit at dawn or twilight is magical. The free walkway is on the eastern side — enter via Cumberland St.",
          coordinates: { lat: -33.8523, lng: 151.2108 }
        },
        afternoon: {
          activity: "Luna Park & North Shore",
          description: "A vintage amusement park with harbour views. Explore the leafy North Shore neighborhoods.",
          location: "Luna Park, Milsons Point",
          cost: "AUD 32 (unlimited rides) / Free (entry only)",
          duration: "2-3 hours",
          tip: "The Wild Mouse roller coaster is one of only a few remaining in the world. Great harbour photos from the Ferris wheel.",
          coordinates: { lat: -33.8478, lng: 151.2090 }
        },
        evening: {
          activity: "Kirribilli sunset",
          description: "Watch the sunset with Opera House and Bridge silhouettes from this North Shore vantage point.",
          location: "Kirribilli",
          cost: "Free",
          duration: "1 hour",
          tip: "Walk past the Prime Minister's residence to Jeffrey Street for the best angle of the Opera House framed by the bridge.",
          coordinates: { lat: -33.8485, lng: 151.2130 }
        }
      },
      {
        title: "Bondi & Eastern Beaches",
        morning: {
          activity: "Bondi Beach morning",
          description: "Join the dawn swimmers and breakfast at one of the beachside cafes.",
          location: "Bondi Beach",
          cost: "AUD 20-30 (breakfast)",
          duration: "2 hours",
          tip: "The Bondi Icebergs ocean pool is free to watch swimmers. Breakfast at Bills or Trio for the best morning vibes.",
          coordinates: { lat: -33.8908, lng: 151.2743 }
        },
        afternoon: {
          activity: "Bondi to Coogee coastal walk",
          description: "The 6km trail is one of the world's great urban walks. Swim at Bronte Beach along the way.",
          location: "Bronte Beach",
          cost: "Free",
          duration: "2-3 hours",
          tip: "Stop at the Waverley Cemetery for dramatic cliff-top views. Bronte has a natural rock pool perfect for a midway swim.",
          coordinates: { lat: -33.9030, lng: 151.2660 }
        },
        evening: {
          activity: "Bondi Beach sunset session",
          description: "Beachfront drinks and live music as the sun sets over the Pacific.",
          location: "Bondi Beach",
          cost: "AUD 20-40 per drink",
          duration: "1.5 hours",
          tip: "The Bucket List bar often has live music. Grab a spot on the sand with take-away drinks for the budget option.",
          coordinates: { lat: -33.8908, lng: 151.2743 }
        }
      },
      {
        title: "Blue Mountains",
        morning: {
          activity: "Train to Katoomba",
          description: "The scenic rail journey climbs into eucalyptus forests that give the mountains their blue haze.",
          location: "Katoomba, Blue Mountains",
          cost: "AUD 5-8 (Opal card off-peak)",
          duration: "2 hours (train ride)",
          tip: "Take the 8:18am train from Central to arrive by 10:18am. The Blue Mountains Express is the most direct service.",
          coordinates: { lat: -33.7140, lng: 150.3120 }
        },
        afternoon: {
          activity: "Three Sisters, Scenic World & bushwalk",
          description: "See the iconic formation, ride the railway, and hike the Federal Pass trail.",
          location: "Three Sisters / Scenic World",
          cost: "AUD 50 (Scenic World) / Free (lookouts and walks)",
          duration: "4-5 hours",
          tip: "Combine Echo Point lookout with the Prince Henry Cliff Walk for free. Scenic World's railway has a 52-degree incline.",
          coordinates: { lat: -33.7290, lng: 150.3080 }
        },
        evening: {
          activity: "Echo Point sunset & return",
          description: "Watch the mountains turn gold before the train ride back to the city.",
          location: "Echo Point, Katoomba",
          cost: "Free",
          duration: "1 hour",
          tip: "Stay for the Three Sisters turning orange at sunset. The last train to Sydney leaves Katoomba around 9pm.",
          coordinates: { lat: -33.7315, lng: 150.3120 }
        }
      },
      {
        title: "Manly & North",
        morning: {
          activity: "Manly Ferry ride",
          description: "Often called the best value harbour tour in the world — the ferry passes the Opera House and heads open water.",
          location: "Manly Ferry (Circular Quay to Manly)",
          cost: "AUD 7 (Opal card)",
          duration: "30 minutes",
          tip: "Sit on the starboard (right) side going north for Opera House views. The open-air section at the back is breezy and fun.",
          coordinates: { lat: -33.7940, lng: 151.2870 }
        },
        afternoon: {
          activity: "Manly Beach & Shelly Beach walk",
          description: "Surf at Manly, walk the headland, snorkel at Shelly Beach's calm waters.",
          location: "Shelly Beach, Manly",
          cost: "Free",
          duration: "2-3 hours",
          tip: "The walk from Manly to Shelly Beach takes 15 minutes along the headland. Look for dolphins from the lookout point.",
          coordinates: { lat: -33.7880, lng: 151.2840 }
        },
        evening: {
          activity: "Manly Corso dining",
          description: "The pedestrian strip between ferry wharf and beach is lined with great restaurants.",
          location: "The Corso, Manly",
          cost: "AUD 30-60 per meal",
          duration: "1.5 hours",
          tip: "Hugos Pizza is a Manly institution. For something special, try The Pantry right on Manly Beach.",
          coordinates: { lat: -33.7940, lng: 151.2870 }
        }
      },
      {
        title: "Inner West Culture",
        morning: {
          activity: "Newtown exploration",
          description: "King Street's vintage shops, bookstores, and street art — Sydney's alternative soul.",
          location: "Newtown",
          cost: "Free to explore",
          duration: "2-3 hours",
          tip: "Start from Newtown Station and walk south. Look up — the best street art is above street level on building facades.",
          coordinates: { lat: -33.8930, lng: 151.1770 }
        },
        afternoon: {
          activity: "Carriageworks & Eveleigh Markets",
          description: "Contemporary art in converted railway workshops, plus a fantastic farmers' market on Saturdays.",
          location: "Carriageworks, Eveleigh",
          cost: "Free (Carriageworks) / AUD 15-30 (market food)",
          duration: "2 hours",
          tip: "The Saturday farmers' market runs 8am-1pm. Carriageworks hosts free contemporary art exhibitions year-round.",
          coordinates: { lat: -33.8887, lng: 151.1925 }
        },
        evening: {
          activity: "Glebe & Broadway bars",
          description: "A mix of old-school pubs and new cocktail bars along Glebe Point Road.",
          location: "Glebe",
          cost: "AUD 15-25 per drink",
          duration: "2-3 hours",
          tip: "The Friend in Hand pub has a mounted crocodile and wildlife trivia night. The Heritage Cocktail Bar for craft drinks.",
          coordinates: { lat: -33.8780, lng: 151.1870 }
        }
      },
      {
        title: "Farewell Sydney",
        morning: {
          activity: "Fish Market breakfast",
          description: "Fresh seafood at Sydney Fish Market — oysters, prawns, and Sydney rock oysters at dawn.",
          location: "Sydney Fish Market",
          cost: "AUD 25-50 per meal",
          duration: "1-1.5 hours",
          tip: "Arrive by 7:30am for the freshest selection. The Sydney Oyster Bar inside has the best oysters in the city.",
          coordinates: { lat: -33.8697, lng: 151.1953 }
        },
        afternoon: {
          activity: "Darling Harbour & SEA LIFE",
          description: "Walk the harbour, visit the aquarium, and browse the maritime museum.",
          location: "Darling Harbour",
          cost: "AUD 50 (SEA LIFE) / Free (harbour walk)",
          duration: "2-3 hours",
          tip: "The Australian National Maritime Museum has a real submarine and destroyer ship you can board.",
          coordinates: { lat: -33.8724, lng: 151.1994 }
        },
        evening: {
          activity: "Sunset ferry to Manly return",
          description: "One last harbour crossing as the sun sets — the perfect Sydney farewell.",
          location: "Circular Quay to Manly Ferry",
          cost: "AUD 7 (Opal card)",
          duration: "1 hour (round trip)",
          tip: "Take the F1 ferry at golden hour. The sunset behind the Opera House from the harbour is an unforgettable last image.",
          coordinates: { lat: -33.8616, lng: 151.2116 }
        }
      }
    ]
  },
  {
    cityId: "dubai",
    days3: [
      {
        title: "Modern Marvels",
        morning: {
          activity: "Burj Khalifa At the Top",
          description: "Book the earliest slot for the 148th-floor observation deck at 555m — clearest morning views.",
          location: "Burj Khalifa, Downtown Dubai",
          cost: "AED 149-399 (varies by floor and time)",
          duration: "1.5-2 hours",
          tip: "Book online at least 2 weeks in advance for sunrise slots. The 148th-floor lounge includes refreshments.",
          coordinates: { lat: 25.1972, lng: 55.2744 }
        },
        afternoon: {
          activity: "Dubai Mall & Aquarium",
          description: "The world's largest mall with an underwater zoo, ice rink, and the Dubai Fountain show.",
          location: "Dubai Mall",
          cost: "Free (mall) / AED 120 (aquarium tunnel)",
          duration: "3-4 hours",
          tip: "The aquarium tunnel is viewable for free from the ground floor. Paid access gets you behind-the-scenes tours.",
          coordinates: { lat: 25.1972, lng: 55.2796 }
        },
        evening: {
          activity: "Dubai Fountain & dinner",
          description: "Watch the world's tallest performing fountain dance to music — shows every 30 minutes after sunset.",
          location: "Dubai Fountain",
          cost: "Free (fountain show) / AED 65 (aboard ride)",
          duration: "1-2 hours",
          tip: "Best free views from the Dubai Mall waterfront promenade. Book a lake ride for an up-close soaking experience.",
          coordinates: { lat: 25.1955, lng: 55.2756 }
        }
      },
      {
        title: "Old Dubai",
        morning: {
          activity: "Al Fahidi Historical District",
          description: "Wind-tower architecture, art galleries, and the Coffee Museum in Dubai's oldest neighborhood.",
          location: "Al Fahidi Historical District, Bur Dubai",
          cost: "Free",
          duration: "2-3 hours",
          tip: "Start at the Dubai Museum entrance and wander the narrow lanes. The Coffee Museum serves traditional Arabic coffee.",
          coordinates: { lat: 25.2650, lng: 55.2972 }
        },
        afternoon: {
          activity: "Abra ride on Dubai Creek",
          description: "Cross the creek on a traditional wooden boat for 1 dirham — a timeless Dubai experience.",
          location: "Dubai Creek (Bur Dubai to Deira)",
          cost: "AED 1",
          duration: "10 minutes (crossing)",
          tip: "Board at Bur Dubai Abra Station. The ride to Deira is one of the cheapest and most authentic experiences in Dubai.",
          coordinates: { lat: 25.2660, lng: 55.3000 }
        },
        evening: {
          activity: "Gold Souk & Spice Souk",
          description: "The glittering gold market and aromatic spice stalls in Deira — haggle for the best prices.",
          location: "Gold Souk / Spice Souk, Deira",
          cost: "Free to browse",
          duration: "2 hours",
          tip: "Start at the Spice Souk for saffron and cardamom, then walk to the Gold Souk. Always negotiate — start at 40% of the asking price.",
          coordinates: { lat: 25.2695, lng: 55.2983 }
        }
      },
      {
        title: "Desert & Beach",
        morning: {
          activity: "Kite Beach morning",
          description: "Water sports, food trucks, and views of Burj Al Arab — the most vibrant beach in Dubai.",
          location: "Kite Beach, Jumeirah",
          cost: "Free (beach) / AED 20-50 (water sports)",
          duration: "2-3 hours",
          tip: "Salty coffee truck makes the best flat white. Kite surfing lessons are available for AED 250 for beginners.",
          coordinates: { lat: 25.1650, lng: 55.2080 }
        },
        afternoon: {
          activity: "Desert safari",
          description: "Dune bashing in a 4x4, followed by camel riding and a traditional Bedouin camp dinner.",
          location: "Lahbab Desert (Red Dunes)",
          cost: "AED 200-600 (depending on package)",
          duration: "5-6 hours",
          tip: "Book an evening safari with pick-up around 3pm. The red dunes at Lahbab are more dramatic than those closer to the city.",
          coordinates: { lat: 25.1972, lng: 55.2744 }
        },
        evening: {
          activity: "Desert stargazing",
          description: "After the touristy camp, stay for the incredible star-filled desert sky.",
          location: "Lahbab Desert Camp",
          cost: "Included in safari package",
          duration: "1-2 hours",
          tip: "Most safari packages include the camp dinner with entertainment. Overnight safari options let you sleep under the stars in luxury tents.",
          coordinates: { lat: 25.1972, lng: 55.2744 }
        }
      }
    ],
    days5: [
      {
        title: "Record-Breaking Heights",
        morning: {
          activity: "Burj Khalifa sunrise experience",
          description: "The 124th and 148th floor observation decks at sunrise are an unforgettable start to Dubai.",
          location: "Burj Khalifa, Downtown Dubai",
          cost: "AED 399 (At the Top SKY)",
          duration: "1.5 hours",
          tip: "The SKY lounge on 148th floor includes refreshments and a personal guide. Arrive 30 minutes before sunrise.",
          coordinates: { lat: 25.1972, lng: 55.2744 }
        },
        afternoon: {
          activity: "Dubai Opera District",
          description: "The dhow-shaped opera house and the surrounding waterfront promenade.",
          location: "Dubai Opera, Downtown Dubai",
          cost: "AED 75 (guided tour) / varies (performances)",
          duration: "1-2 hours",
          tip: "Even if you don't attend a show, the architecture is stunning from the waterfront. Book a backstage tour online.",
          coordinates: { lat: 25.1955, lng: 55.2786 }
        },
        evening: {
          activity: "Dubai Fountain boardwalk",
          description: "Get up close to the fountains on the floating boardwalk — you may get sprayed!",
          location: "Dubai Fountain Boardwalk",
          cost: "AED 30",
          duration: "30-45 minutes",
          tip: "The boardwalk puts you right at water level. Shows run every 30 minutes from 6pm. The 9pm and 10pm shows are the most crowded.",
          coordinates: { lat: 25.1955, lng: 55.2756 }
        }
      },
      {
        title: "Cultural Heart",
        morning: {
          activity: "Al Fahidi & Dubai Museum",
          description: "The restored heritage district and museum housed in the 18th-century Al Fahidi Fort.",
          location: "Al Fahidi Historical District, Bur Dubai",
          cost: "AED 3 (museum)",
          duration: "2-3 hours",
          tip: "The museum's dioramas of pre-oil Dubai life are fascinating. Combine with the Coin Museum and Sheikh Mohammed Centre for Cultural Understanding.",
          coordinates: { lat: 25.2650, lng: 55.2972 }
        },
        afternoon: {
          activity: "Creek abra rides & Deira souks",
          description: "Cross the creek on a traditional boat, then explore the Gold and Spice Souks.",
          location: "Dubai Creek / Deira Souks",
          cost: "AED 1 (abra)",
          duration: "3 hours",
          tip: "Take the abra from Bur Dubai station to Deira. The textile souk on the Bur Dubai side is also worth exploring.",
          coordinates: { lat: 25.2660, lng: 55.3000 }
        },
        evening: {
          activity: "Dhow cruise dinner",
          description: "A traditional wooden boat transformed into a floating restaurant along the illuminated creek.",
          location: "Dubai Creek Dhow Cruise",
          cost: "AED 150-400",
          duration: "2-3 hours",
          tip: "Book a smaller dhow for a more intimate experience. The Bateaux Dubai glass-boat is more luxurious but pricier.",
          coordinates: { lat: 25.2660, lng: 55.3000 }
        }
      },
      {
        title: "Palm & Marina",
        morning: {
          activity: "Palm Jumeirah & Atlantis",
          description: "Take the monorail to the crescent. Visit The Lost Chambers Aquarium at Atlantis.",
          location: "Palm Jumeirah / Atlantis The Palm",
          cost: "AED 120 (Lost Chambers) / AED 30 (monorail)",
          duration: "3-4 hours",
          tip: "The monorail from Gateway Station gives views of the palm trunk. Aquaventure waterpark is worth the extra cost if you love thrills.",
          coordinates: { lat: 25.1124, lng: 55.1390 }
        },
        afternoon: {
          activity: "Marina Walk & JBR Beach",
          description: "Stroll the marina promenade past luxury yachts, then relax on the JBR beach.",
          location: "Dubai Marina / JBR Beach",
          cost: "Free",
          duration: "3 hours",
          tip: "The Marina Walk is 7km long. JBR Beach has free public sections and paid beach clubs like Zero Gravity.",
          coordinates: { lat: 25.0780, lng: 55.1330 }
        },
        evening: {
          activity: "Marina dinner with skyline view",
          description: "Towering skyscrapers lit up at night with waterfront dining options at every price point.",
          location: "Dubai Marina",
          cost: "AED 80-250 per meal",
          duration: "2 hours",
          tip: "Pier 7 has seven floors of restaurants, each with a different cuisine. Asians or Somewhere are local favorites.",
          coordinates: { lat: 25.0805, lng: 55.1403 }
        }
      },
      {
        title: "Desert Adventure",
        morning: {
          activity: "Jumeirah Mosque tour",
          description: "One of the few mosques open to non-Muslims — a beautiful introduction to Islamic culture.",
          location: "Jumeirah Mosque",
          cost: "AED 35 (guided tour)",
          duration: "1.5 hours",
          tip: "Tours run at 10am on most days through the Sheikh Mohammed Centre for Cultural Understanding. Women should bring a scarf.",
          coordinates: { lat: 25.2336, lng: 55.2655 }
        },
        afternoon: {
          activity: "Desert dune bashing",
          description: "Professional drivers take you over red sand dunes in a thrilling 4x4 experience.",
          location: "Lahbab Desert",
          cost: "AED 200-400",
          duration: "4-5 hours",
          tip: "Morning safaris are less crowded and cooler. Evening safaris include BBQ dinner and entertainment at the camp.",
          coordinates: { lat: 25.1972, lng: 55.2744 }
        },
        evening: {
          activity: "Desert camp & BBQ",
          description: "Traditional dance shows, henna painting, and a feast under the stars.",
          location: "Desert Camp, Lahbab",
          cost: "Included in safari package",
          duration: "2-3 hours",
          tip: "Try the camel ride and sandboarding before dinner. The tanoura dance show is the highlight of the evening entertainment.",
          coordinates: { lat: 25.1972, lng: 55.2744 }
        }
      },
      {
        title: "Luxury & Leisure",
        morning: {
          activity: "Mall of the Emirates",
          description: "Shop and ski — yes, there's an indoor ski slope in the middle of the desert.",
          location: "Mall of the Emirates",
          cost: "Free (mall) / AED 210 (Ski Dubai)",
          duration: "3 hours",
          tip: "Ski Dubai includes all gear. The penguin encounter is an extra AED 100 but worth it for families.",
          coordinates: { lat: 25.1181, lng: 55.2004 }
        },
        afternoon: {
          activity: "La Mer beachfront",
          description: "A trendy beachfront destination with food trucks, water parks, and surf waves.",
          location: "La Mer, Jumeirah",
          cost: "Free (beach) / AED 150 (water park)",
          duration: "3 hours",
          tip: "Laguna Waterpark has a wave pool and lazy river. The food trucks along the promenade offer diverse cuisines.",
          coordinates: { lat: 25.2250, lng: 55.2470 }
        },
        evening: {
          activity: "City Walk & Downtown",
          description: "Trendy outdoor dining and entertainment complex near the Burj Khalifa.",
          location: "City Walk, Downtown Dubai",
          cost: "AUD 80-200 per meal",
          duration: "2-3 hours",
          tip: "City Walk has great street art and outdoor cafes. Head to the Dubai Mall rooftop at sunset for free Burj Khalifa views.",
          coordinates: { lat: 25.1955, lng: 55.2610 }
        }
      }
    ],
    days7: [
      {
        title: "Welcome to Dubai",
        morning: {
          activity: "Dubai Mall & Burj Khalifa",
          description: "Start with the world's tallest building — book the At the Top experience for stunning aerial views.",
          location: "Burj Khalifa / Dubai Mall",
          cost: "AED 149-399 (Burj Khalifa)",
          duration: "3-4 hours",
          tip: "Book Burj Khalifa tickets online in advance — they sell out days ahead. Start at the mall, then go up the tower.",
          coordinates: { lat: 25.1972, lng: 55.2744 }
        },
        afternoon: {
          activity: "Dubai Fountain & Opera District",
          description: "Watch a daytime fountain rehearsal, then explore the striking opera house area.",
          location: "Dubai Fountain / Dubai Opera",
          cost: "Free (fountain) / AED 75 (opera tour)",
          duration: "2 hours",
          tip: "Daytime fountain shows run every 30 minutes from 1pm-1:30pm. The opera district waterfront is great for photos.",
          coordinates: { lat: 25.1955, lng: 55.2756 }
        },
        evening: {
          activity: "Downtown Dubai dinner",
          description: "Dine with Burj Khalifa views at one of the many restaurants at Souk Al Bahar.",
          location: "Souk Al Bahar, Downtown Dubai",
          cost: "AED 100-300 per meal",
          duration: "2 hours",
          tip: "Souk Al Bahar restaurants have outdoor terraces with Burj Khalifa and fountain views. Book a table on the terrace.",
          coordinates: { lat: 25.1940, lng: 55.2770 }
        }
      },
      {
        title: "Old Dubai",
        morning: {
          activity: "Al Fahidi Historical Neighborhood",
          description: "The wind towers, narrow lanes, and art galleries reveal the Dubai that existed before oil.",
          location: "Al Fahidi Historical District",
          cost: "Free",
          duration: "2-3 hours",
          tip: "Visit the Sheikh Mohammed Centre for Cultural Understanding for a cultural breakfast or lunch with Emirati hosts.",
          coordinates: { lat: 25.2650, lng: 55.2972 }
        },
        afternoon: {
          activity: "Creek crossing & souks",
          description: "An abra boat ride, the Gold Souk's dazzling displays, and the Spice Souk's fragrant alleys.",
          location: "Dubai Creek / Gold Souk / Spice Souk",
          cost: "AED 1 (abra)",
          duration: "3 hours",
          tip: "Visit the Gold Souk first while you have energy for bargaining. The Spice Souk is more relaxed and sensory.",
          coordinates: { lat: 25.2680, lng: 55.3000 }
        },
        evening: {
          activity: "Dhow cruise dinner on the creek",
          description: "The old city from the water at night is a beautiful contrast to modern Dubai.",
          location: "Dubai Creek Dhow Cruise",
          cost: "AED 150-400",
          duration: "2-3 hours",
          tip: "Traditional dhows depart from Deira Creek side. The illuminated skyline of old and new Dubai from the water is magical.",
          coordinates: { lat: 25.2660, lng: 55.3000 }
        }
      },
      {
        title: "Beach & Islands",
        morning: {
          activity: "Kite Beach activities",
          description: "Kite surfing, paddle boarding, and the best shawarma food trucks in the city.",
          location: "Kite Beach, Jumeirah",
          cost: "Free (beach) / AED 100-250 (water sports)",
          duration: "2-3 hours",
          tip: "The Kite Beach food truck village has excellent options. Try Al Mallah for shawarma or Project Chaiwala for karak chai.",
          coordinates: { lat: 25.1650, lng: 55.2080 }
        },
        afternoon: {
          activity: "Palm Jumeirah monorail ride",
          description: "The monorail gives incredible views of the palm-shaped island and Atlantis resort.",
          location: "Palm Jumeirah Monorail",
          cost: "AED 30 (monorail round trip)",
          duration: "2-3 hours",
          tip: "Sit on the left going out for sea views, right coming back for skyline views. Stop at Nakheel Mall for shopping.",
          coordinates: { lat: 25.1124, lng: 55.1390 }
        },
        evening: {
          activity: "JBR Walk dinner",
          description: "The beachfront promenade with dozens of restaurants and street performers.",
          location: "JBR Beach / The Walk",
          cost: "AED 60-200 per meal",
          duration: "2 hours",
          tip: "The Walk at JBR has a Miami-beach vibe. Try Pf Chang's orCatch 22 for dinner with people-watching.",
          coordinates: { lat: 25.0780, lng: 55.1330 }
        }
      },
      {
        title: "Marina & Beyond",
        morning: {
          activity: "Dubai Marina Walk",
          description: "A morning stroll past luxury yachts and impressive skyscrapers along the waterfront.",
          location: "Dubai Marina Walk",
          cost: "Free",
          duration: "1.5-2 hours",
          tip: "Start from the Marina Mall end and walk toward JBR. The yacht-filled canal between the towers is stunning at golden hour.",
          coordinates: { lat: 25.0805, lng: 55.1403 }
        },
        afternoon: {
          activity: "Ain Dubai (Bluewaters Island)",
          description: "The world's largest observation wheel on a man-made island with restaurants and entertainment.",
          location: "Ain Dubai, Bluewaters Island",
          cost: "AED 130-300",
          duration: "1-2 hours",
          tip: "The 38-minute ride gives panoramic views. Check operating status in advance as maintenance closures are common.",
          coordinates: { lat: 25.0795, lng: 55.1330 }
        },
        evening: {
          activity: "Pier 7 dining",
          description: "A seven-story waterfront dining destination in the marina — each floor a different cuisine.",
          location: "Pier 7, Dubai Marina",
          cost: "AED 100-300 per meal",
          duration: "2 hours",
          tip: "The Treehouse on the top floor has the best views. Asians on the 5th floor serves excellent modern Asian cuisine.",
          coordinates: { lat: 25.0805, lng: 55.1403 }
        }
      },
      {
        title: "Desert Experience",
        morning: {
          activity: "Jumeirah Mosque cultural tour",
          description: "Learn about Emirati culture and Islamic traditions in this beautiful stone mosque.",
          location: "Jumeirah Mosque",
          cost: "AED 35",
          duration: "1.5 hours",
          tip: "Tours are at 10am most days. The SMCCU also offers cultural meals — book the Emirati breakfast for AED 80.",
          coordinates: { lat: 25.2336, lng: 55.2655 }
        },
        afternoon: {
          activity: "Red dunes desert safari",
          description: "An adrenaline-pumping ride over the Lahbab red sand dunes outside the city.",
          location: "Lahbab Desert",
          cost: "AED 250-500",
          duration: "5-6 hours",
          tip: "Choose a small-group or private safari for a better experience. Quad biking is an optional add-on for AED 150.",
          coordinates: { lat: 25.1972, lng: 55.2744 }
        },
        evening: {
          activity: "Bedouin-style desert camp",
          description: "Falconry demonstrations, henna art, and a traditional feast under the stars.",
          location: "Desert Camp, Lahbab",
          cost: "Included in safari package",
          duration: "2-3 hours",
          tip: "The premium camps offer star-gazing with telescopes. Try shisha (hookah) in multiple flavors after dinner.",
          coordinates: { lat: 25.1972, lng: 55.2744 }
        }
      },
      {
        title: "Abu Dhabi Day Trip",
        morning: {
          activity: "Sheikh Zayed Grand Mosque",
          description: "A 90-minute drive to one of the world's most beautiful mosques — the white marble is breathtaking.",
          location: "Sheikh Zayed Grand Mosque, Abu Dhabi",
          cost: "Free",
          duration: "1.5-2 hours",
          tip: "Women must wear abaya (provided free). Arrive at 9am opening for the best light on the white marble. Photography is allowed.",
          coordinates: { lat: 24.4127, lng: 54.4903 }
        },
        afternoon: {
          activity: "Louvre Abu Dhabi",
          description: "A stunning museum with a geometric dome that creates a 'rain of light' effect.",
          location: "Louvre Abu Dhabi, Saadiyat Island",
          cost: "AED 63",
          duration: "2-3 hours",
          tip: "The dome's geometric pattern creates over 7,800 stars of light. The universal narrative approach is unique among museums.",
          coordinates: { lat: 24.5336, lng: 54.3986 }
        },
        evening: {
          activity: "Corniche waterfront dinner",
          description: "Abu Dhabi's beautiful seaside promenade before driving back to Dubai.",
          location: "Abu Dhabi Corniche",
          cost: "AED 80-200 per meal",
          duration: "2 hours",
          tip: "The Corniche beach has free sections. Try Lebanese or Emirati cuisine along the waterfront before the drive back to Dubai.",
          coordinates: { lat: 24.4127, lng: 54.4903 }
        }
      },
      {
        title: "Farewell Dubai",
        morning: {
          activity: "Global Village",
          description: "A cultural theme park with pavilions from 90+ countries, shopping, and street food from around the world.",
          location: "Global Village, Dubai Land",
          cost: "AED 22.5 (entry)",
          duration: "3-4 hours",
          tip: "Open October to April only. The pavilions sell authentic products from each country. The stunt show is surprisingly good.",
          coordinates: { lat: 25.0740, lng: 55.3100 }
        },
        afternoon: {
          activity: "Dubai Frame",
          description: "A 150m-tall frame offering views of old Dubai on one side and new Dubai on the other.",
          location: "Dubai Frame, Zabeel Park",
          cost: "AED 50",
          duration: "1-1.5 hours",
          tip: "The glass-floored walkway at the top is thrilling. Look north for old Dubai and south for the modern skyline.",
          coordinates: { lat: 25.2355, lng: 55.3003 }
        },
        evening: {
          activity: "Farewell dinner at Atmosphere",
          description: "A restaurant on the 122nd floor of the Burj Khalifa — dining at 442m above the city.",
          location: "Atmosphere, Burj Khalifa",
          cost: "AED 600-1,500 per person",
          duration: "2-3 hours",
          tip: "Book at least 2 weeks in advance. The lounge menu is more affordable than the fine dining menu. Arrive before sunset.",
          coordinates: { lat: 25.1972, lng: 55.2744 }
        }
      }
    ]
  },
  {
    cityId: "bangkok",
    days3: [
      {
        title: "Temples & Palaces",
        morning: {
          activity: "Grand Palace & Emerald Buddha",
          description: "Dress modestly (long pants, covered shoulders). The intricate details are overwhelming — allow 3 hours.",
          location: "Grand Palace, Na Phra Lan Road",
          cost: "THB 500",
          duration: "3 hours",
          tip: "Arrive at 8:30am opening to beat the tour bus crowds. Long pants and covered shoulders are strictly enforced — no rentals inside.",
          coordinates: { lat: 13.7510, lng: 100.4927 }
        },
        afternoon: {
          activity: "Wat Pho & reclining Buddha",
          description: "The 46m gold-plated reclining Buddha and a traditional Thai massage at the temple's massage school.",
          location: "Wat Pho, Sanam Chai Road",
          cost: "THB 200 (entry) / THB 260-400 (massage)",
          duration: "2 hours",
          tip: "The massage school inside Wat Pho is the original Thai massage school. Book the 30-minute foot massage — best value in Bangkok.",
          coordinates: { lat: 13.7465, lng: 100.4930 }
        },
        evening: {
          activity: "Chao Phraya dinner cruise",
          description: "A rice barge cruise past illuminated temples and landmarks along the river of kings.",
          location: "Chao Phraya River",
          cost: "THB 1,200-2,500",
          duration: "2-3 hours",
          tip: "Book the Loy Nava or Wan Fah rice barge for a more intimate experience than the large party boats.",
          coordinates: { lat: 13.7400, lng: 100.5100 }
        }
      },
      {
        title: "Street Food & Markets",
        morning: {
          activity: "Chatuchak Weekend Market",
          description: "Over 15,000 stalls selling everything imaginable. Go early (9am) to beat the heat.",
          location: "Chatuchak Market, Kamphaeng Phet Road",
          cost: "Free (entry)",
          duration: "3-4 hours",
          tip: "Download the Chatuchak map app. The food court in Section 24 has the best mango sticky rice. Bring cash — no cards at most stalls.",
          coordinates: { lat: 13.7990, lng: 100.5532 }
        },
        afternoon: {
          activity: "Chinatown (Yaowarat) food tour",
          description: "Follow the smoke to the best street food — grilled seafood, bird's nest soup, and mango sticky rice.",
          location: "Chinatown, Yaowarat Road",
          cost: "THB 200-500 (food)",
          duration: "2-3 hours",
          tip: "Look for the stalls with the longest lines — that is where the best food is. T&K Seafood and Lek & Rut are legendary.",
          coordinates: { lat: 13.7400, lng: 100.5086 }
        },
        evening: {
          activity: "Khao San Road night market",
          description: "The backpacker hub with cheap eats, live music, and the chaotic energy that defines Bangkok.",
          location: "Khao San Road",
          cost: "THB 100-300 (food and drinks)",
          duration: "2-3 hours",
          tip: "The street comes alive after 8pm. Try the pad thai from the carts near the western end. Bargain hard for souvenirs.",
          coordinates: { lat: 13.7588, lng: 100.4974 }
        }
      },
      {
        title: "Modern Bangkok",
        morning: {
          activity: "Jim Thompson House",
          description: "The silk merchant's beautiful traditional Thai house and garden in the city center.",
          location: "Jim Thompson House, Rama I Road",
          cost: "THB 200",
          duration: "1.5 hours",
          tip: "The last entry is at 5pm. The guided tour covers Thompson's mysterious disappearance in Malaysia in 1967.",
          coordinates: { lat: 13.7488, lng: 100.5291 }
        },
        afternoon: {
          activity: "MBK Center & Siam shopping",
          description: "Bangkok's legendary shopping mall — 8 floors of bargains, from electronics to Thai silk.",
          location: "MBK Center, Phayathai Road",
          cost: "Free (entry) / varies (shopping)",
          duration: "2-3 hours",
          tip: "The 6th floor food court is cheap and excellent. The 7th floor has a cinema. bargaining is expected at smaller stalls.",
          coordinates: { lat: 13.7451, lng: 100.5289 }
        },
        evening: {
          activity: "Rooftop bar on Silom",
          description: "End your trip with cocktails above the skyline at Vertigo or Sala Rattanakosin.",
          location: "Siam area (rooftop)",
          cost: "THB 300-600 (drinks)",
          duration: "1.5-2 hours",
          tip: "Sala Rattanakosin has Wat Arun views. Vertigo at Banyan Tree has 360-degree city views. Dress code is smart casual.",
          coordinates: { lat: 13.7465, lng: 100.5345 }
        }
      }
    ],
    days5: [
      {
        title: "Royal Bangkok",
        morning: {
          activity: "Grand Palace & Wat Phra Kaew",
          description: "The most sacred site in Thailand. The Emerald Buddha changes outfits seasonally — three times a year.",
          location: "Grand Palace, Na Phra Lan Road",
          cost: "THB 500",
          duration: "3 hours",
          tip: "The Emerald Buddha's golden seasonal outfits are changed by the King himself. Photography is not allowed inside the chapel.",
          coordinates: { lat: 13.7510, lng: 100.4927 }
        },
        afternoon: {
          activity: "Wat Pho massage school",
          description: "Get a professional Thai massage at the temple where traditional massage was developed.",
          location: "Wat Pho Massage School",
          cost: "THB 260-400",
          duration: "1-2 hours",
          tip: "The 1-hour traditional Thai massage is THB 260. The 30-minute foot massage is THB 280. No reservations — first come, first served.",
          coordinates: { lat: 13.7465, lng: 100.4930 }
        },
        evening: {
          activity: "Asiatique riverfront",
          description: "A night market and entertainment complex on the river — ferris wheel, restaurants, and shopping.",
          location: "Asiatique The Riverfront",
          cost: "Free (entry) / THB 200 (ferris wheel)",
          duration: "2-3 hours",
          tip: "Take the free shuttle boat from Saphan Taksin BTS station. Open 4pm-midnight. The Calypso cabaret show is worth booking.",
          coordinates: { lat: 13.6947, lng: 100.5022 }
        }
      },
      {
        title: "Canals & Communities",
        morning: {
          activity: "Longtail boat canal tour",
          description: "Explore Bangkok's khlongs (canals) to see waterside communities, temples, and floating markets.",
          location: "Bangkok Canals (Khlongs)",
          cost: "THB 500-1,500 (private boat)",
          duration: "2-3 hours",
          tip: "Hire a longtail boat at Chang Pier near the Grand Palace. The Khlong Bangkok Yai route passes the most authentic communities.",
          coordinates: { lat: 13.7400, lng: 100.5100 }
        },
        afternoon: {
          activity: "Wat Arun (Temple of Dawn)",
          description: "Climb the steep steps of this riverside temple for incredible views. The porcelain mosaics sparkle in sunlight.",
          location: "Wat Arun, Arun Amarin Road",
          cost: "THB 100",
          duration: "1-1.5 hours",
          tip: "Take the 3-baht ferry from Tha Tien pier across the river. The central prang is 79m tall — the steep steps are worth the climb.",
          coordinates: { lat: 13.7437, lng: 100.4888 }
        },
        evening: {
          activity: "Chinatown street food",
          description: "Yaowarat Road transforms into a massive street food market every evening. Follow the crowds.",
          location: "Chinatown, Yaowarat Road",
          cost: "THB 200-500 (food)",
          duration: "2-3 hours",
          tip: "Start at the Charoen Krung intersection and walk east. The grilled seafood stalls and bird's nest soup shops are highlights.",
          coordinates: { lat: 13.7400, lng: 100.5086 }
        }
      },
      {
        title: "Market Madness",
        morning: {
          activity: "Chatuchak Market deep dive",
          description: "Arrive at opening time. Bring cash, wear comfortable shoes, and explore the sections systematically.",
          location: "Chatuchak Market",
          cost: "Free (entry)",
          duration: "4-5 hours",
          tip: "Sections are color-coded on the map: green for plants, red for food, blue for fashion. Start at Section 1 and work clockwise.",
          coordinates: { lat: 13.7990, lng: 100.5532 }
        },
        afternoon: {
          activity: "Or Tor Kor market",
          description: "Bangkok's premium food market — the most beautiful fruits, curries, and Thai desserts you'll ever see.",
          location: "Or Tor Kor Market, Kamphaeng Phet Road",
          cost: "Free (entry) / THB 200-500 (food)",
          duration: "1-2 hours",
          tip: "This is where Bangkok's top chefs shop. The durian here is the best quality in Thailand. Try the northern Thai sausage stall.",
          coordinates: { lat: 13.7960, lng: 100.5480 }
        },
        evening: {
          activity: "Sukhumvit nightlife",
          description: "Explore Soi 11's bars, the Thonglor cocktail scene, or catch live music at a local venue.",
          location: "Sukhumvit Road",
          cost: "THB 200-600 (drinks)",
          duration: "3-4 hours",
          tip: "Soi 11 for backpacker party vibe, Thonglor for craft cocktails, and Soi Cowboy for the neon spectacle.",
          coordinates: { lat: 13.7300, lng: 100.5700 }
        }
      },
      {
        title: "Culture & Calm",
        morning: {
          activity: "Jim Thompson House & Museum",
          description: "The mysterious disappearance of the silk king adds intrigue to this beautiful museum complex.",
          location: "Jim Thompson House, Rama I Road",
          cost: "THB 200",
          duration: "1.5 hours",
          tip: "The house is actually six traditional Thai teak houses reassembled together. The silk shop has high-quality products at fair prices.",
          coordinates: { lat: 13.7488, lng: 100.5291 }
        },
        afternoon: {
          activity: "Lumphini Park & paddle boats",
          description: "Bangkok's green lung — rent a paddle boat, spot monitor lizards, and escape the traffic noise.",
          location: "Lumphini Park",
          cost: "Free (entry) / THB 40 (paddle boat)",
          duration: "1.5-2 hours",
          tip: "Monitor lizards up to 2m long roam freely — they are harmless. The park is best early morning or late afternoon.",
          coordinates: { lat: 13.7317, lng: 100.5414 }
        },
        evening: {
          activity: "Siam Niramit show",
          description: "A spectacular stage performance of Thai history and culture with over 100 performers.",
          location: "Siam Niramit, Ratchada",
          cost: "THB 1,500-2,000",
          duration: "2.5 hours (including pre-show)",
          tip: "Arrive 90 minutes early for the pre-show village experience and traditional Thai buffet dinner.",
          coordinates: { lat: 13.7465, lng: 100.5345 }
        }
      },
      {
        title: "Day Trip: Ayutthaya",
        morning: {
          activity: "Train to Ayutthaya",
          description: "A 1.5-hour train ride to the ancient capital — a UNESCO World Heritage site of temple ruins.",
          location: "Ayutthaya Historical Park",
          cost: "THB 20-300 (train, depending on class)",
          duration: "1.5 hours (train)",
          tip: "Take the 3rd class train from Hua Lamphong for THB 20 — it is an authentic local experience. 2nd class is THB 65.",
          coordinates: { lat: 14.3692, lng: 100.5876 }
        },
        afternoon: {
          activity: "Temple ruins exploration",
          description: "Rent a bicycle to explore the headless Buddhas and crumbling towers of the former Siamese capital.",
          location: "Ayutthaya Temple Ruins",
          cost: "THB 50 (bike rental) / THB 50 per temple",
          duration: "4-5 hours",
          tip: "Must-see temples: Wat Mahathat (Buddha head in tree roots), Wat Phra Si Sanphet, and Wat Chaiwatthanaram.",
          coordinates: { lat: 14.3692, lng: 100.5876 }
        },
        evening: {
          activity: "Return — farewell dinner cruise",
          description: "A final evening on the Chao Phraya, watching Bangkok light up from the water.",
          location: "Chao Phraya River",
          cost: "THB 1,200-2,000",
          duration: "2-3 hours",
          tip: "Book the return train in advance or catch a minivan from Ayutthaya station. The dinner cruise is a perfect finale.",
          coordinates: { lat: 13.7400, lng: 100.5100 }
        }
      }
    ],
    days7: [
      {
        title: "Welcome to Bangkok",
        morning: {
          activity: "Grand Palace & Emerald Buddha",
          description: "Start with Thailand's most important site. The gold, the mosaics, and the mythology are overwhelming.",
          location: "Grand Palace, Na Phra Lan Road",
          cost: "THB 500",
          duration: "3 hours",
          tip: "The ticket includes entry to the Queen Sirikit Museum of Textiles inside the palace grounds. Keep your ticket — it is checked multiple times.",
          coordinates: { lat: 13.7510, lng: 100.4927 }
        },
        afternoon: {
          activity: "Wat Pho reclining Buddha",
          description: "The massive gold Buddha and the temple's famous massage school — both are unmissable.",
          location: "Wat Pho, Sanam Chai Road",
          cost: "THB 200",
          duration: "1.5-2 hours",
          tip: "Walk from the Grand Palace — it is only 10 minutes south. The feet of the reclining Buddha are inlaid with mother-of-pearl.",
          coordinates: { lat: 13.7465, lng: 100.4930 }
        },
        evening: {
          activity: "Riverside dinner at Tha Tien",
          description: "Eat with views of Wat Arun lit up across the river.",
          location: "Tha Tien Pier area",
          cost: "THB 200-600 per meal",
          duration: "1.5 hours",
          tip: "The restaurants across from Tha Tien pier have Wat Arun views. Tha Tien market during the day sells amulets and traditional items.",
          coordinates: { lat: 13.7437, lng: 100.4888 }
        }
      },
      {
        title: "Canal Life",
        morning: {
          activity: "Longtail boat canal tour",
          description: "See a side of Bangkok most tourists miss — stilt houses, floating kitchens, and temple ruins along the canals.",
          location: "Bangkok Canals (Khlongs)",
          cost: "THB 800-1,500 (private longtail boat)",
          duration: "2-3 hours",
          tip: "Hire boats at Phanfa Leelad or Chang Pier. Request the Khlong Mon route for a more authentic, less touristy experience.",
          coordinates: { lat: 13.7400, lng: 100.5100 }
        },
        afternoon: {
          activity: "Wat Arun climb",
          description: "The steep steps are worth it. The porcelain fragments covering the tower were once used ballast from Chinese ships.",
          location: "Wat Arun, Arun Amarin Road",
          cost: "THB 100",
          duration: "1-1.5 hours",
          tip: "The central prang steps are very steep — wear shoes with grip. Visit in late afternoon when the porcelain sparkles in golden light.",
          coordinates: { lat: 13.7437, lng: 100.4888 }
        },
        evening: {
          activity: "Asiatique night market",
          description: "Riverside shopping, dining, and entertainment with a panoramic Ferris wheel ride.",
          location: "Asiatique The Riverfront",
          cost: "Free (entry) / THB 200 (ferris wheel)",
          duration: "2-3 hours",
          tip: "The free shuttle boat leaves from Saphan Taksin pier every 15 minutes from 4pm. The Joe Louis puppet theatre here is unique.",
          coordinates: { lat: 13.6947, lng: 100.5022 }
        }
      },
      {
        title: "Market Day",
        morning: {
          activity: "Chatuchak Weekend Market",
          description: "15,000 stalls in 35 acres. Start with the plant section, then art, fashion, and food.",
          location: "Chatuchak Market",
          cost: "Free (entry)",
          duration: "4-5 hours",
          tip: "Wear light clothing and comfortable shoes. Bring a water bottle and cash. The coconut ice cream served in coconut shells is a must.",
          coordinates: { lat: 13.7990, lng: 100.5532 }
        },
        afternoon: {
          activity: "Or Tor Kor premium market",
          description: "The most photogenic food market in Thailand — perfect durian, exquisite mangoes, and ready-to-eat curries.",
          location: "Or Tor Kor Market",
          cost: "Free (entry) / THB 200-500 (food)",
          duration: "1-2 hours",
          tip: "Located right next to Chatuchak — walk there through Kamphaeng Phet MRT station. The mango sticky rice here is Thailand's best.",
          coordinates: { lat: 13.7960, lng: 100.5480 }
        },
        evening: {
          activity: "Chinatown (Yaowarat) feast",
          description: "Grilled river prawns, bird's nest soup, and the best mango sticky rice in the city.",
          location: "Chinatown, Yaowarat Road",
          cost: "THB 300-800 (food)",
          duration: "2-3 hours",
          tip: "The street food scene peaks after 6pm. Look for Lek & Rut for seafood and Sanguan Sri for bird's nest soup.",
          coordinates: { lat: 13.7400, lng: 100.5086 }
        }
      },
      {
        title: "Cultural Immersion",
        morning: {
          activity: "Jim Thompson House",
          description: "The beautiful teak house complex tells the story of the American who revived Thailand's silk industry.",
          location: "Jim Thompson House, Rama I Road",
          cost: "THB 200",
          duration: "1.5 hours",
          tip: "The guided tour explains how Thompson built a silk empire from nothing before vanishing in the Malaysian jungle in 1967.",
          coordinates: { lat: 13.7488, lng: 100.5291 }
        },
        afternoon: {
          activity: "Erawan Shrine & shopping district",
          description: "Watch traditional Thai dancers at this bustling shrine, then explore the Siam shopping area.",
          location: "Siam / Erawan Shrine",
          cost: "Free",
          duration: "2-3 hours",
          tip: "The Erawan Shrine is at the Ratchaprasong intersection. Traditional Thai dancers perform when someone's wish is granted.",
          coordinates: { lat: 13.7465, lng: 100.5345 }
        },
        evening: {
          activity: "Khao San Road experience",
          description: "The legendary backpacker strip with cheap eats, neon lights, and travelers from every corner of the globe.",
          location: "Khao San Road",
          cost: "THB 100-300 (food and drinks)",
          duration: "2-3 hours",
          tip: "The pad thai carts near the western end are the best. Try a bucket cocktail — a Khao San Road tradition.",
          coordinates: { lat: 13.7588, lng: 100.4974 }
        }
      },
      {
        title: "Ayutthaya Day Trip",
        morning: {
          activity: "Train to Ayutthaya",
          description: "The scenic 1.5-hour train ride follows the river north to the ancient capital.",
          location: "Ayutthaya (from Hua Lamphong Station)",
          cost: "THB 20-300 (train)",
          duration: "1.5 hours (train)",
          tip: "The 7:30am train from Hua Lamphong is reliable. Buy tickets at the station — no need to book in advance for 3rd class.",
          coordinates: { lat: 14.3692, lng: 100.5876 }
        },
        afternoon: {
          activity: "Temple ruins by bicycle",
          description: "Pedal between the crumbling prangs and chedis of this UNESCO site — the Buddha head wrapped in tree roots is iconic.",
          location: "Ayutthaya Historical Park",
          cost: "THB 50 (bike) / THB 50 per temple",
          duration: "4-5 hours",
          tip: "Rent a bicycle at the station for THB 50/day. The island circuit covers 8 major temples. Start with Wat Mahathat's famous Buddha head in banyan roots.",
          coordinates: { lat: 14.3692, lng: 100.5876 }
        },
        evening: {
          activity: "Return — Sukhumvit dinner",
          description: "Back in Bangkok, enjoy modern Thai cuisine in the upscale Sukhumvit district.",
          location: "Sukhumvit",
          cost: "THB 400-1,200 per meal",
          duration: "2 hours",
          tip: "Bo.lan on Sukhumvit 26 serves Michelin-quality traditional Thai. Nahm at the Metropolitan Hotel is another excellent option.",
          coordinates: { lat: 13.7300, lng: 100.5700 }
        }
      },
      {
        title: "Hidden Bangkok",
        morning: {
          activity: "Amulet Market & flower market",
          description: "Pak Khlong Talat is Bangkok's 24-hour flower market — a riot of color and jasmine scent.",
          location: "Pak Khlong Talat (Flower Market)",
          cost: "Free",
          duration: "2 hours",
          tip: "The market is busiest at 2-3am when fresh flowers arrive. Visit early morning for the best selection and cooler temperatures.",
          coordinates: { lat: 13.7400, lng: 100.4970 }
        },
        afternoon: {
          activity: "Bantha Thong food street",
          description: "The latest foodie hotspot where locals go for crispy pork, crab omelets, and bubble tea.",
          location: "Bantha Thong (Sam Yan area)",
          cost: "THB 100-300 (food)",
          duration: "2 hours",
          tip: "This street went viral on Thai social media. Try Jeh O Chula's crab omelet (Michelin Bib Gourmand) — expect a queue.",
          coordinates: { lat: 13.7440, lng: 100.5280 }
        },
        evening: {
          activity: "Thonglor cocktail bars",
          description: "Bangkok's most sophisticated nightlife strip with hidden speakeasies and rooftop terraces.",
          location: "Thonglor (Sukhumvit Soi 55)",
          cost: "THB 300-600 (drinks)",
          duration: "2-3 hours",
          tip: "Rabbit Hole is Bangkok's best cocktail bar. Iron Fairies is a whimsical multi-story bar with live jazz. Dress smart-casual.",
          coordinates: { lat: 13.7200, lng: 100.5850 }
        }
      },
      {
        title: "Farewell Bangkok",
        morning: {
          activity: "Lumphini Park morning walk",
          description: "Join the locals for tai chi, spot monitor lizards, and enjoy the greenery.",
          location: "Lumphini Park",
          cost: "Free",
          duration: "1-1.5 hours",
          tip: "Arrive before 7am to see groups practicing tai chi. The monitor lizards are most active in the morning near the lake.",
          coordinates: { lat: 13.7317, lng: 100.5414 }
        },
        afternoon: {
          activity: "MBK & Siam last shopping",
          description: "Pick up souvenirs, Thai silk, and snacks at Bangkok's most famous malls.",
          location: "MBK Center / Siam",
          cost: "Varies (shopping)",
          duration: "3 hours",
          tip: "MBK 6th floor for electronics and souvenirs. Jim Thompson on Surawong for quality Thai silk. Naraya for beautiful fabric bags.",
          coordinates: { lat: 13.7451, lng: 100.5289 }
        },
        evening: {
          activity: "Rooftop farewell dinner",
          description: "The highest restaurants in Bangkok — Vertigo, Sky Bar, or Siam@Siam for a golden hour toast.",
          location: "Siam area (rooftop)",
          cost: "THB 800-2,500 per person",
          duration: "2-3 hours",
          tip: "Sky Bar at Lebua is famous from The Hangover Part II. Book sunset slots. Dress code enforced — no shorts or sandals for men.",
          coordinates: { lat: 13.7465, lng: 100.5345 }
        }
      }
    ]
  },
  {
    cityId: "rome",
    days3: [
      {
        title: "Ancient Rome",
        morning: {
          activity: "Colosseum & Roman Forum",
          description: "Book a skip-the-line combo ticket. Walk where gladiators fought and emperors ruled the Western world.",
          location: "Colosseum, Piazza del Colosseo 1, Rome",
          cost: "16 EUR (combo ticket)",
          duration: "3 hours",
          tip: "Book the first entry slot at 8:30am to avoid massive crowds. The combo ticket includes the Roman Forum and Palatine Hill.",
          coordinates: { lat: 41.8902, lng: 12.4922 }
        },
        afternoon: {
          activity: "Pantheon & Piazza Navona",
          description: "The Pantheon's 2000-year-old dome is still the world's largest unreinforced concrete dome.",
          location: "Pantheon, Piazza della Rotonda, Rome",
          cost: "5 EUR (Pantheon entry)",
          duration: "2 hours",
          tip: "Visit the Pantheon first as it has timed entry, then enjoy a leisurely walk to Piazza Navona for gelato.",
          coordinates: { lat: 41.8986, lng: 12.4769 }
        },
        evening: {
          activity: "Trastevere dinner",
          description: "Cross the Tiber to Rome's most charming neighborhood for authentic pasta and lively atmosphere.",
          location: "Trastevere, Rome",
          cost: "25-40 EUR per person",
          duration: "2-3 hours",
          tip: "Avoid restaurants with photos on the menu. Head a few blocks deeper into Trastevere for the most authentic trattorias.",
          coordinates: { lat: 41.887, lng: 12.47 }
        }
      },
      {
        title: "Vatican City",
        morning: {
          activity: "Vatican Museums & Sistine Chapel",
          description: "Book the earliest entry slot. Michelangelo's ceiling is even more breathtaking than you imagine.",
          location: "Vatican Museums, Viale Vaticano, Rome",
          cost: "17 EUR (standard entry)",
          duration: "3-4 hours",
          tip: "Book the 'early entry' tour to see the Sistine Chapel with fewer people. No photography allowed inside the chapel.",
          coordinates: { lat: 41.9065, lng: 12.4536 }
        },
        afternoon: {
          activity: "St. Peter's Basilica & dome climb",
          description: "Climb to the top of Michelangelo's dome for the best view of Rome's rooftops.",
          location: "St. Peter's Basilica, Vatican City",
          cost: "Free (dome climb: 8 EUR stairs / 10 EUR elevator)",
          duration: "2 hours",
          tip: "Dress code enforced: covered shoulders and knees. The elevator only goes partway — 231 more steps to the top.",
          coordinates: { lat: 41.9022, lng: 12.4539 }
        },
        evening: {
          activity: "Castel Sant'Angelo sunset",
          description: "The emperor Hadrian's tomb offers a stunning sunset view over the city and St. Peter's.",
          location: "Castel Sant'Angelo, Lungotevere Castello 50, Rome",
          cost: "15 EUR",
          duration: "1.5 hours",
          tip: "Arrive 1 hour before closing for the best golden-hour photos from the terrace. The illuminated St. Peter's dome is magical.",
          coordinates: { lat: 41.9035, lng: 12.4655 }
        }
      },
      {
        title: "Roman Highlights",
        morning: {
          activity: "Trevi Fountain & Spanish Steps",
          description: "Throw a coin in the fountain (right hand over left shoulder) to ensure your return to Rome.",
          location: "Trevi Fountain, Piazza di Trevi, Rome",
          cost: "Free",
          duration: "1.5 hours",
          tip: "Visit before 9am for the best photos without crowds. The fountain is illuminated beautifully at night too.",
          coordinates: { lat: 41.9009, lng: 12.4833 }
        },
        afternoon: {
          activity: "Borghese Gallery & Gardens",
          description: "Bernini sculptures and Caravaggio paintings in a gorgeous villa — book tickets in advance.",
          location: "Borghese Gallery, Piazzale del Museo Borghese, Rome",
          cost: "13 EUR (plus 2 EUR booking fee)",
          duration: "2-3 hours",
          tip: "Tickets must be booked in advance — only 360 people allowed per 2-hour slot. Enter the gallery at your reserved time exactly.",
          coordinates: { lat: 41.9142, lng: 12.4921 }
        },
        evening: {
          activity: "Gelato crawl & Roman walk",
          description: "Visit at least 3 gelaterias and walk off the calories through Rome's lamplit streets.",
          location: "Historic Center, Rome",
          cost: "15-25 EUR total (3 gelato stops)",
          duration: "2 hours",
          tip: "Avoid places with fluffy mounded gelato — the best shops store it flat in metal tubs. Try Fatamorgana or Come il Latte.",
          coordinates: { lat: 41.8992, lng: 12.4731 }
        }
      }
    ],
    days5: [
      {
        title: "Colosseum Day",
        morning: {
          activity: "Colosseum underground tour",
          description: "The special access tour takes you into the gladiator tunnels and onto the arena floor.",
          location: "Colosseum, Piazza del Colosseo 1, Rome",
          cost: "24 EUR (underground tour add-on)",
          duration: "3 hours",
          tip: "The underground tour must be booked weeks in advance and is worth every penny. Wear comfortable shoes for uneven surfaces.",
          coordinates: { lat: 41.8902, lng: 12.4922 }
        },
        afternoon: {
          activity: "Roman Forum & Palatine Hill",
          description: "Walk through the political heart of ancient Rome. The view from Palatine Hill over the Forum is spectacular.",
          location: "Roman Forum & Palatine Hill, Via della Salara Vecchia, Rome",
          cost: "Included with Colosseum ticket",
          duration: "2.5 hours",
          tip: "Enter from the Palatine Hill entrance on Via di San Gregorio — it's less crowded than the Forum entrance.",
          coordinates: { lat: 41.8925, lng: 12.4853 }
        },
        evening: {
          activity: "Monti neighborhood dinner",
          description: "A trendy neighborhood behind the Forum with great restaurants and wine bars.",
          location: "Monti, Rome",
          cost: "25-40 EUR per person",
          duration: "2-3 hours",
          tip: "La Taverna dei Fori Imperiali is a local favorite. Book ahead — Monti restaurants fill up fast.",
          coordinates: { lat: 41.893, lng: 12.495 }
        }
      },
      {
        title: "Vatican Deep Dive",
        morning: {
          activity: "Vatican Museums early entry",
          description: "Skip the 2-hour queue with pre-booked tickets. The Raphael Rooms are as impressive as the Sistine Chapel.",
          location: "Vatican Museums, Viale Vaticano, Rome",
          cost: "17 EUR (plus booking fee)",
          duration: "4 hours",
          tip: "The Raphael Rooms and the Gallery of Maps are highlights many rush past. Take your time in these sections.",
          coordinates: { lat: 41.9065, lng: 12.4536 }
        },
        afternoon: {
          activity: "St. Peter's Basilica & dome",
          description: "The climb is 551 steps but the view of St. Peter's Square from the top is the best in Rome.",
          location: "St. Peter's Basilica, Vatican City",
          cost: "Free (dome climb: 8-10 EUR)",
          duration: "2 hours",
          tip: "Go to the dome climb entrance on the right side of the basilica. You can do this separately from the basilica visit.",
          coordinates: { lat: 41.9022, lng: 12.4539 }
        },
        evening: {
          activity: "Prati neighborhood dinner",
          description: "The elegant neighborhood near the Vatican with authentic trattorias away from tourist menus.",
          location: "Prati, Rome",
          cost: "25-35 EUR per person",
          duration: "2 hours",
          tip: "Via C. Colombo and Via Germanico have excellent restaurants favored by locals who work at the Vatican.",
          coordinates: { lat: 41.907, lng: 12.457 }
        }
      },
      {
        title: "Heart of Rome",
        morning: {
          activity: "Pantheon & Piazza della Rotonda",
          description: "The best-preserved Roman building — the oculus lets in a beam of light that moves across the interior.",
          location: "Pantheon, Piazza della Rotonda, Rome",
          cost: "5 EUR",
          duration: "1 hour",
          tip: "Visit when it rains to see water enter through the oculus and drain through the subtly sloped floor — an engineering marvel.",
          coordinates: { lat: 41.8986, lng: 12.4769 }
        },
        afternoon: {
          activity: "Trevi Fountain to Spanish Steps walk",
          description: "The classic Roman passeggiata route through the most beautiful squares and streets.",
          location: "Trevi Fountain to Spanish Steps, Rome",
          cost: "Free",
          duration: "2 hours",
          tip: "Stop at the Colonna dell'Immacolata and the church of Sant'Andrea delle Fratte along the way — hidden gems.",
          coordinates: { lat: 41.9058, lng: 12.4823 }
        },
        evening: {
          activity: "Trastevere wine & dine",
          description: "Start with wine at a enoteca, then dinner at a trattoria with outdoor seating on cobblestones.",
          location: "Trastevere, Rome",
          cost: "30-45 EUR per person",
          duration: "3 hours",
          tip: "Start at Enoteca Ferrara for wine, then walk to Da Enzo al 29 for the best cacio e pepe in Trastevere.",
          coordinates: { lat: 41.887, lng: 12.47 }
        }
      },
      {
        title: "Art & Gardens",
        morning: {
          activity: "Borghese Gallery",
          description: "Bernini's Apollo and Daphne — marble transformed into flesh, leaves, and flowing hair. Book well ahead.",
          location: "Borghese Gallery, Piazzale del Museo Borghese, Rome",
          cost: "13 EUR (plus 2 EUR booking fee)",
          duration: "2 hours",
          tip: "Your 2-hour slot is strict — arrive 30 minutes early. Start with Bernini's sculptures on the ground floor.",
          coordinates: { lat: 41.9142, lng: 12.4921 }
        },
        afternoon: {
          activity: "Villa Borghese gardens & bike rental",
          description: "Rent a bike to explore Rome's third-largest park. Stop at the Pincio Terrace for a panorama of the city.",
          location: "Villa Borghese Gardens, Rome",
          cost: "5 EUR (bike rental per hour)",
          duration: "2-3 hours",
          tip: "The Pincio Terrace at the southern edge of the park has the best free sunset view of Rome's dome-filled skyline.",
          coordinates: { lat: 41.9117, lng: 12.4762 }
        },
        evening: {
          activity: "Piazza Navona aperitivo",
          description: "Bernini's fountain, street artists, and a classic Italian aperitivo in one of Europe's great squares.",
          location: "Piazza Navona, Rome",
          cost: "10-18 EUR (aperitivo with drink)",
          duration: "1.5 hours",
          tip: "The bars on the square are pricier but the view is worth one drink. Move to side streets for better value dinner.",
          coordinates: { lat: 41.8992, lng: 12.4731 }
        }
      },
      {
        title: "Appian Way & Farewell",
        morning: {
          activity: "Appian Way bike ride",
          description: "Cycle along the ancient Roman road past catacombs, aqueducts, and umbrella pines.",
          location: "Appian Way, Via Appia Antica, Rome",
          cost: "15 EUR (bike rental) + 8 EUR (catacombs)",
          duration: "3-4 hours",
          tip: "Rent bikes near the Porta San Sebastiano gate. Sundays are car-free on the Appian Way — the best day to go.",
          coordinates: { lat: 41.856, lng: 12.529 }
        },
        afternoon: {
          activity: "Testaccio food market",
          description: "Rome's authentic food neighborhood — supplì, pizza al taglio, and the best carbonara.",
          location: "Testaccio Market, Piazza Testaccio, Rome",
          cost: "10-20 EUR",
          duration: "2 hours",
          tip: "Try the supplì at Mordi e Vai and the pizza al taglio at Volpetti. This is where Roman chefs eat.",
          coordinates: { lat: 41.877, lng: 12.474 }
        },
        evening: {
          activity: "Roman farewell dinner",
          description: "A final meal of cacio e pepe and Roman-style artichokes in a candlelit trattoria.",
          location: "Historic Center, Rome",
          cost: "35-50 EUR per person",
          duration: "2-3 hours",
          tip: "Order the Roman trifecta: cacio e pepe, carciofi alla romana, and finish with a maritozzi cream bun.",
          coordinates: { lat: 41.8956, lng: 12.4722 }
        }
      }
    ],
    days7: [
      {
        title: "Welcome to Rome",
        morning: {
          activity: "Colosseum",
          description: "Start where it all began. The underground and arena floor tours reveal the gladiator experience.",
          location: "Colosseum, Piazza del Colosseo 1, Rome",
          cost: "16-24 EUR",
          duration: "2.5 hours",
          tip: "The underground and arena floor add-on tours sell out quickly — book at least 2-3 weeks in advance online.",
          coordinates: { lat: 41.8902, lng: 12.4922 }
        },
        afternoon: {
          activity: "Roman Forum walk",
          description: "The political center of an empire. Walk the Sacred Way that victorious generals once paraded down.",
          location: "Roman Forum, Via della Salara Vecchia, Rome",
          cost: "Included with Colosseum ticket",
          duration: "2 hours",
          tip: "Don't miss the House of the Vestal Virgins and the Temple of Saturn. The Curia Julia has original marble floors.",
          coordinates: { lat: 41.8925, lng: 12.4853 }
        },
        evening: {
          activity: "Monti aperitivo",
          description: "Rome's hippest neighborhood for wine and cicchetti — the perfect Roman welcome.",
          location: "Monti, Rome",
          cost: "15-25 EUR",
          duration: "2 hours",
          tip: "Try the natural wine bars along Via del Boschetto. Ai Tre Scalini is a Monti institution for wine on tap.",
          coordinates: { lat: 41.893, lng: 12.495 }
        }
      },
      {
        title: "Vatican Day",
        morning: {
          activity: "Vatican Museums & Sistine Chapel",
          description: "Arrive early with pre-booked tickets. The map gallery alone is worth the visit.",
          location: "Vatican Museums, Viale Vaticano, Rome",
          cost: "17 EUR (plus booking fee)",
          duration: "3-4 hours",
          tip: "The Gallery of Maps has incredibly accurate 16th-century topographical maps of Italy — look for your home region.",
          coordinates: { lat: 41.9065, lng: 12.4536 }
        },
        afternoon: {
          activity: "St. Peter's Basilica",
          description: "The largest church in the world. Michelangelo's Pietà is protected by bulletproof glass.",
          location: "St. Peter's Basilica, Vatican City",
          cost: "Free (dome climb: 8-10 EUR)",
          duration: "2 hours",
          tip: "The Pietà is on the right as you enter — go early when the light is best. The bronze baldachin is Bernini's masterpiece.",
          coordinates: { lat: 41.9022, lng: 12.4539 }
        },
        evening: {
          activity: "Castel Sant'Angelo",
          description: "The papal fortress has a rooftop cafe with one of the best views in Rome.",
          location: "Castel Sant'Angelo, Lungotevere Castello 50, Rome",
          cost: "15 EUR",
          duration: "1.5 hours",
          tip: "The secret passage (Passetto) connecting the castle to the Vatican can sometimes be visited on special tours.",
          coordinates: { lat: 41.9035, lng: 12.4655 }
        }
      },
      {
        title: "Historic Center",
        morning: {
          activity: "Pantheon & surrounding squares",
          description: "The architectural marvel is free to enter. Nearby Piazza della Minerva has a Bernini elephant statue.",
          location: "Pantheon, Piazza della Rotonda, Rome",
          cost: "5 EUR",
          duration: "1.5 hours",
          tip: "The marble floor is original Roman — nearly 2,000 years old. The drains in the floor handle rain from the oculus perfectly.",
          coordinates: { lat: 41.8986, lng: 12.4769 }
        },
        afternoon: {
          activity: "Trevi Fountain & Spanish Steps",
          description: "Throw your coin, then climb the steps for views of the designer shopping district.",
          location: "Trevi Fountain, Piazza di Trevi & Spanish Steps, Rome",
          cost: "Free",
          duration: "2 hours",
          tip: "The Trevi Fountain collects about 3,000 EUR daily in coins, all donated to charity. Use your right hand over left shoulder.",
          coordinates: { lat: 41.9009, lng: 12.4833 }
        },
        evening: {
          activity: "Trastevere dinner",
          description: "The neighborhood comes alive at night — fairy lights, outdoor tables, and perfect pasta.",
          location: "Trastevere, Rome",
          cost: "25-40 EUR per person",
          duration: "2-3 hours",
          tip: "Cross the Ponte Sisto bridge at sunset for a beautiful walk into Trastevere. Tonnarello is popular for good reason.",
          coordinates: { lat: 41.887, lng: 12.47 }
        }
      },
      {
        title: "Art & Parks",
        morning: {
          activity: "Borghese Gallery",
          description: "Limited entry means an uncrowded experience. Bernini's sculptures are the highlight.",
          location: "Borghese Gallery, Piazzale del Museo Borghese, Rome",
          cost: "13 EUR (plus 2 EUR booking fee)",
          duration: "2 hours",
          tip: "Don't miss Caravaggio's 'Boy with a Basket of Fruit' and the ground-floor Bernini rooms — they are breathtaking.",
          coordinates: { lat: 41.9142, lng: 12.4921 }
        },
        afternoon: {
          activity: "Villa Borghese gardens",
          description: "Rent a rowboat on the lake, visit the Bioparco zoo, or bike to the Pincio Terrace viewpoint.",
          location: "Villa Borghese Gardens, Rome",
          cost: "5 EUR (bike rental per hour) / 3 EUR (rowboat)",
          duration: "2-3 hours",
          tip: "The Pincio Terrace at sunset gives you the iconic view of Piazza del Popolo with St. Peter's dome on the horizon.",
          coordinates: { lat: 41.9117, lng: 12.4762 }
        },
        evening: {
          activity: "Piazza Navona sunset",
          description: "The Four Rivers Fountain at golden hour, surrounded by street artists and café terraces.",
          location: "Piazza Navona, Rome",
          cost: "Free",
          duration: "1.5 hours",
          tip: "The Fountain of the Four Rivers represents the Nile, Ganges, Danube, and Rio de la Plata. Spot the hidden symbols.",
          coordinates: { lat: 41.8992, lng: 12.4731 }
        }
      },
      {
        title: "Underground Rome",
        morning: {
          activity: "Catacombs of Domitilla",
          description: "A 4th-century underground cemetery with early Christian frescoes — a haunting, fascinating experience.",
          location: "Catacombs of Domitilla, Via delle Sette Chiese 282, Rome",
          cost: "10 EUR",
          duration: "1.5 hours",
          tip: "The temperature underground is cool year-round — bring a light jacket. Guided tours only, no photography inside.",
          coordinates: { lat: 41.8695, lng: 12.512 }
        },
        afternoon: {
          activity: "Appian Way walk",
          description: "The ancient road is lined with tombs, ruins, and umbrella pines — rent a bike for the full experience.",
          location: "Appian Way, Via Appia Antica, Rome",
          cost: "Free (bike rental: 15 EUR)",
          duration: "3 hours",
          tip: "Sundays and holidays the road is closed to cars. The stretch from Porta San Sebastiano to the Church of Domine Quo Vadis is most scenic.",
          coordinates: { lat: 41.856, lng: 12.529 }
        },
        evening: {
          activity: "San Lorenzo student quarter",
          description: "Rome's alternative neighborhood with cheap eats and a youthful vibe.",
          location: "San Lorenzo, Rome",
          cost: "15-25 EUR per person",
          duration: "2-3 hours",
          tip: "This gritty but authentic neighborhood is where Sapienza University students hang out. Great pizza al taglio and craft beer.",
          coordinates: { lat: 41.899, lng: 12.515 }
        }
      },
      {
        title: "Food & Neighborhoods",
        morning: {
          activity: "Testaccio Market & food tour",
          description: "The birthplace of Roman cuisine — sample supplì, trippa, and the best maritozzi cream buns.",
          location: "Testaccio Market, Piazza Testaccio, Rome",
          cost: "20-30 EUR",
          duration: "2-3 hours",
          tip: "Start with a supplì at Mordi e Vai, get pizza at Volpetti Più, and finish with a maritozzi at Regoli — the perfect food crawl.",
          coordinates: { lat: 41.877, lng: 12.474 }
        },
        afternoon: {
          activity: "Jewish Ghetto & Tiber Island",
          description: "The oldest Jewish community in Europe. Try carciofi alla giudia (deep-fried artichokes).",
          location: "Jewish Ghetto, Via del Portico d'Ottavia, Rome",
          cost: "Free",
          duration: "2 hours",
          tip: "Nonna Betta and Piperno are legendary for carciofi alla giudia. The Portico d'Ottavia ruins are atmospheric at dusk.",
          coordinates: { lat: 41.8955, lng: 12.477 }
        },
        evening: {
          activity: "Campo de' Fiori nightlife",
          description: "The evening food market transforms into a lively bar scene with outdoor drinking.",
          location: "Campo de' Fiori, Rome",
          cost: "15-30 EUR",
          duration: "2-3 hours",
          tip: "The market closes by 2pm so the food stalls are gone by evening. The square's nightlife is best Thursday through Saturday.",
          coordinates: { lat: 41.8956, lng: 12.4722 }
        }
      },
      {
        title: "Farewell Rome",
        morning: {
          activity: "Gelato master tour",
          description: "Visit Fatamorgana, Giolitti, and Come il Latte — three of Rome's best gelaterias.",
          location: "Various gelaterias, Rome",
          cost: "15-20 EUR total",
          duration: "2 hours",
          tip: "Fatamorgana for creative flavors like celery-ginger-lime, Giolitti for classic Roman tradition, Come il Latte for creaminess.",
          coordinates: { lat: 41.9106, lng: 12.4762 }
        },
        afternoon: {
          activity: "Piazza del Popolo to Pincio",
          description: "The grand piazza and the hilltop terrace offer the classic final Roman panorama.",
          location: "Piazza del Popolo & Pincio Terrace, Rome",
          cost: "Free",
          duration: "1.5 hours",
          tip: "Climb the steps from the piazza to the Pincio for the iconic view. The twin churches at the south end frame the view perfectly.",
          coordinates: { lat: 41.9106, lng: 12.4762 }
        },
        evening: {
          activity: "Rooftop farewell dinner",
          description: "Dine with a view of the domes and rooftops — Les Etoiles or the Grand Hotel de la Minerve.",
          location: "Historic Center rooftops, Rome",
          cost: "50-80 EUR per person",
          duration: "2-3 hours",
          tip: "Book rooftop restaurants at least a week in advance. Les Etoiles at the Hotel de Russie has the best terrace garden setting.",
          coordinates: { lat: 41.8986, lng: 12.4769 }
        }
      }
    ]
  },
  {
    cityId: "cape-town",
    days3: [
      {
        title: "Table Mountain & City",
        morning: {
          activity: "Table Mountain cable car",
          description: "Go on the first clear morning of your trip — the mountain creates its own clouds. Book tickets online.",
          location: "Table Mountain Aerial Cableway, Tafelberg Road, Cape Town",
          cost: "400 ZAR (round trip)",
          duration: "2-3 hours",
          tip: "Check the webcam on the Table Mountain website before heading out — the top can be shrouded in cloud even when the city is clear.",
          coordinates: { lat: -33.9628, lng: 18.4098 }
        },
        afternoon: {
          activity: "Bo-Kaap colorful houses",
          description: "The cobblestone streets and bright Cape Malay houses are Cape Town's most photographed spot.",
          location: "Bo-Kaap, Cape Town",
          cost: "Free",
          duration: "1-2 hours",
          tip: "Visit the Bo-Kaap Museum on Wale Street to understand the Cape Malay community's history. Be respectful when photographing residents' homes.",
          coordinates: { lat: -33.92, lng: 18.41 }
        },
        evening: {
          activity: "V&A Waterfront dinner",
          description: "The vibrant waterfront with restaurants, live music, and Table Mountain as a backdrop.",
          location: "V&A Waterfront, Cape Town",
          cost: "200-400 ZAR per person",
          duration: "2-3 hours",
          tip: "Baia at the V&A has excellent seafood with harbour views. The Watershed has local artisan crafts for souvenirs.",
          coordinates: { lat: -33.9036, lng: 18.4232 }
        }
      },
      {
        title: "Peninsula Adventure",
        morning: {
          activity: "Cape of Good Hope",
          description: "Drive or take a tour to the southwestern tip of Africa. Look for wild ostriches and baboons.",
          location: "Cape of Good Hope, Cape Point Road, Cape Town",
          cost: "85 ZAR (conservation fee)",
          duration: "3 hours",
          tip: "Start early to avoid the tour bus crowds. Take the Flying Dutchman funicular up to the old lighthouse for panoramic views.",
          coordinates: { lat: -34.3568, lng: 18.474 }
        },
        afternoon: {
          activity: "Boulders Beach penguins",
          description: "Walk among 3,000 African penguins on this protected beach — absolutely charming.",
          location: "Boulders Beach, Simon's Town, Cape Town",
          cost: "152 ZAR",
          duration: "1.5 hours",
          tip: "Boardwalk viewing is included in the ticket. For a swim with penguins, pay extra for beach access. Best visited late afternoon when penguins return from fishing.",
          coordinates: { lat: -34.1976, lng: 18.449 }
        },
        evening: {
          activity: "Camps Bay sunset",
          description: "Watch the sun set over the Atlantic from Camps Bay's trendy beachfront bars.",
          location: "Camps Bay, Cape Town",
          cost: "100-250 ZAR (drinks)",
          duration: "2 hours",
          tip: "Café Caprice and The Codfather are iconic Camps Bay spots. Arrive before 5pm to secure a sunset-view table.",
          coordinates: { lat: -33.952, lng: 18.378 }
        }
      },
      {
        title: "Culture & Wine",
        morning: {
          activity: "Robben Island ferry",
          description: "The former prison where Nelson Mandela spent 18 years — a powerful and essential experience.",
          location: "Robben Island, Cape Town",
          cost: "600 ZAR (ferry + tour)",
          duration: "3.5 hours",
          tip: "Book at least 2 weeks ahead — tours sell out. The ferry departs from the V&A Waterfront. Take motion sickness pills if the wind is up.",
          coordinates: { lat: -33.8066, lng: 18.3712 }
        },
        afternoon: {
          activity: "Constantia wine estates",
          description: "South Africa's oldest wine region, 20 minutes from the city. Try Groot Constantia's award-winning wines.",
          location: "Constantia Wine Route, Cape Town",
          cost: "150-250 ZAR (tasting)",
          duration: "3 hours",
          tip: "Groot Constantia is the oldest estate (1685). Try the Jonkershuis restaurant for Cape Malay-influenced cuisine paired with local wines.",
          coordinates: { lat: -34.02, lng: 18.415 }
        },
        evening: {
          activity: "Long Street nightlife",
          description: "Cape Town's party street with live music, rooftop bars, and pan-African cuisine.",
          location: "Long Street, Cape Town",
          cost: "150-300 ZAR",
          duration: "3-4 hours",
          tip: "The Waiting Room rooftop bar is a Long Street institution. Start with dinner at Mama Africa for game meat and live music.",
          coordinates: { lat: -33.92, lng: 18.417 }
        }
      }
    ],
    days5: [
      {
        title: "Mountain & City",
        morning: {
          activity: "Table Mountain hiking",
          description: "Take the Platteklip Gorge trail (2-3 hours up) or the cable car for the views. Choose a clear day.",
          location: "Table Mountain, Tafelberg Road, Cape Town",
          cost: "Free (hiking) / 400 ZAR (cable car)",
          duration: "4-5 hours (hiking)",
          tip: "Start early morning to avoid the midday heat. Bring at least 2L of water per person. The India Venster route is more scenic but requires light scrambling.",
          coordinates: { lat: -33.9628, lng: 18.4098 }
        },
        afternoon: {
          activity: "Company's Garden & South African Museum",
          description: "The historic city center garden, museum, and the colorful Bo-Kaap neighborhood nearby.",
          location: "Company's Garden, Cape Town",
          cost: "Free (garden) / 50 ZAR (museum)",
          duration: "2 hours",
          tip: "The Company's Garden has resident squirrels you can feed. The South African National Gallery is also in the garden grounds.",
          coordinates: { lat: -33.927, lng: 18.418 }
        },
        evening: {
          activity: "V&A Waterfront & Zeitz MOCAA",
          description: "The world's largest museum of contemporary African art, in a converted grain silo.",
          location: "Zeitz MOCAA, V&A Waterfront, Cape Town",
          cost: "200 ZAR (museum entry)",
          duration: "2-3 hours",
          tip: "The museum is free on Wednesday evenings (4-9pm). The building's carved concrete silo architecture is as impressive as the art.",
          coordinates: { lat: -33.904, lng: 18.421 }
        }
      },
      {
        title: "Cape Peninsula",
        morning: {
          activity: "Chapman's Peak Drive",
          description: "One of the world's most spectacular coastal roads — 114 curves carved into the cliff face.",
          location: "Chapman's Peak Drive, Cape Town",
          cost: "57 ZAR (toll fee)",
          duration: "1-2 hours (drive)",
          tip: "Stop at the designated viewpoints — Chapman's Peak is one of the most photographed roads in the world. Check if the road is open as it closes in bad weather.",
          coordinates: { lat: -34.097, lng: 18.354 }
        },
        afternoon: {
          activity: "Cape Point & lighthouse",
          description: "Ride the Flying Dutchman funicular to the old lighthouse at the tip of the peninsula.",
          location: "Cape Point, Cape Peninsula",
          cost: "85 ZAR (reserve fee) + 70 ZAR (funicular)",
          duration: "2-3 hours",
          tip: "Walk from the old lighthouse to the new lighthouse for stunning cliff views. Look for dassies (rock hyraxes) sunning on the rocks.",
          coordinates: { lat: -34.349, lng: 18.475 }
        },
        evening: {
          activity: "Boulders Beach penguins at dusk",
          description: "The penguins are most active in the late afternoon — fewer crowds too.",
          location: "Boulders Beach, Simon's Town, Cape Town",
          cost: "152 ZAR",
          duration: "1.5 hours",
          tip: "Late afternoon light is perfect for photography. Penguins come back from fishing around 4pm — the best time to see them.",
          coordinates: { lat: -34.1976, lng: 18.449 }
        }
      },
      {
        title: "Winelands Day Trip",
        morning: {
          activity: "Stellenbosch wine route",
          description: "The historic university town surrounded by award-winning wine estates.",
          location: "Stellenbosch Wine Route, Stellenbosch",
          cost: "150-250 ZAR (tastings)",
          duration: "3 hours",
          tip: "Spier Wine Farm offers eagle encounters and Cheetah outreach alongside wine tasting. Stellenbosch itself has beautiful Cape Dutch architecture.",
          coordinates: { lat: -33.9321, lng: 18.8602 }
        },
        afternoon: {
          activity: "Franschhoek wine tram",
          description: "A hop-on-hop-off tram connecting vineyards in this beautiful French-founded valley.",
          location: "Franschhoek Wine Tram, Franschhoek",
          cost: "200 ZAR (tram ticket) + tastings",
          duration: "3-4 hours",
          tip: "Choose the Blue or Red line — each visits different estates. Le Quartier Français and La Petite Ferme have excellent lunch options.",
          coordinates: { lat: -33.872, lng: 19.117 }
        },
        evening: {
          activity: "Franschhoek fine dining",
          description: "The 'French Corner' has some of South Africa's best restaurants.",
          location: "Franschhoek Village, Franschhoek",
          cost: "400-800 ZAR per person",
          duration: "2-3 hours",
          tip: "Le Quartier Français and The Tasting Room are world-class. Book well in advance during peak season (December-March).",
          coordinates: { lat: -33.872, lng: 19.117 }
        }
      },
      {
        title: "History & Culture",
        morning: {
          activity: "Robben Island tour",
          description: "Former political prisoners give the tours — their personal stories make it unforgettable.",
          location: "Robben Island, Cape Town",
          cost: "600 ZAR",
          duration: "3.5 hours",
          tip: "The tour includes the bus ride around the island and Nelson Mandela's cell. Bring a jacket — it can be windy on the boat.",
          coordinates: { lat: -33.8066, lng: 18.3712 }
        },
        afternoon: {
          activity: "District Six Museum",
          description: "The heartbreaking story of forced removals during apartheid, told through residents' own photographs.",
          location: "District Six Museum, 25A Buitenkant Street, Cape Town",
          cost: "55 ZAR",
          duration: "1.5 hours",
          tip: "Many of the museum guides are former residents — their personal stories are incredibly moving. Allow time to absorb everything.",
          coordinates: { lat: -33.928, lng: 18.423 }
        },
        evening: {
          activity: "Woodstock street art & dinner",
          description: "Cape Town's creative hub with galleries, craft beer, and the famous Neighbourgoods Market.",
          location: "Woodstock, Cape Town",
          cost: "150-300 ZAR",
          duration: "2-3 hours",
          tip: "The Neighbourgoods Market runs on Saturdays. The Woodstock Exchange has local designer boutiques and craft beer at Woodstock Brewery.",
          coordinates: { lat: -33.917, lng: 18.443 }
        }
      },
      {
        title: "Adventure Day",
        morning: {
          activity: "Shark cage diving (Gansbaai)",
          description: "Face great white sharks from the safety of a cage — a once-in-a-lifetime adrenaline rush.",
          location: "Gansbaai, Western Cape",
          cost: "1500-2000 ZAR",
          duration: "4-5 hours (including boat ride)",
          tip: "The drive from Cape Town is 2 hours — many operators include transport. Book with a reputable company like Marine Dynamics. Underwater visibility is best May-September.",
          coordinates: { lat: -34.625, lng: 19.348 }
        },
        afternoon: {
          activity: "Hermanus whale watching",
          description: "Seasonal (June-November) southern right whales come close enough to see from shore.",
          location: "Hermanus, Western Cape",
          cost: "Free (from shore) / 800 ZAR (boat tour)",
          duration: "2-3 hours",
          tip: "The cliff path walk in Hermanus offers the best land-based whale watching in the world. The Whale Crier blows his kelp horn when whales are spotted.",
          coordinates: { lat: -34.4187, lng: 19.2345 }
        },
        evening: {
          activity: "Farewell dinner at Camps Bay",
          description: "The strip of beachfront restaurants with the Twelve Apostles mountain range as backdrop.",
          location: "Camps Bay, Cape Town",
          cost: "300-600 ZAR per person",
          duration: "2-3 hours",
          tip: "Book a table at The Roundhouse or Azure for a special farewell meal. The sunset over the Atlantic is unforgettable.",
          coordinates: { lat: -33.952, lng: 18.378 }
        }
      }
    ],
    days7: [
      {
        title: "Welcome to Cape Town",
        morning: {
          activity: "Table Mountain cable car",
          description: "Start with the iconic view. The revolving cable car takes just 5 minutes to the top.",
          location: "Table Mountain Aerial Cableway, Tafelberg Road, Cape Town",
          cost: "400 ZAR (round trip)",
          duration: "2-3 hours",
          tip: "The revolving cable car floor ensures everyone gets 360-degree views during the ascent. Go on your first clear morning.",
          coordinates: { lat: -33.9628, lng: 18.4098 }
        },
        afternoon: {
          activity: "Bo-Kaap & city center walk",
          description: "The colorful Cape Malay quarter and the historic Company's Garden.",
          location: "Bo-Kaap & Company's Garden, Cape Town",
          cost: "Free",
          duration: "2-3 hours",
          tip: "Start at the Bo-Kaap Museum, wander the colorful streets, then walk through Company's Garden to the South African National Gallery.",
          coordinates: { lat: -33.92, lng: 18.41 }
        },
        evening: {
          activity: "V&A Waterfront welcome dinner",
          description: "The working harbour with restaurants, shops, and street performers against the mountain backdrop.",
          location: "V&A Waterfront, Cape Town",
          cost: "200-400 ZAR per person",
          duration: "2-3 hours",
          tip: "Willowbridge at the V&A has excellent craft beer. The sunset from the pier with Table Mountain silhouetted is the perfect Cape Town welcome.",
          coordinates: { lat: -33.9036, lng: 18.4232 }
        }
      },
      {
        title: "Peninsula Road Trip",
        morning: {
          activity: "Chapman's Peak Drive",
          description: "Stop at every viewpoint — each curve reveals a more dramatic seascape than the last.",
          location: "Chapman's Peak Drive, Cape Town",
          cost: "57 ZAR (toll)",
          duration: "1-1.5 hours (drive)",
          tip: "The road closes in strong winds — check the Chapman's Peak website before departing. Sunrise drives have magical light on the cliffs.",
          coordinates: { lat: -34.097, lng: 18.354 }
        },
        afternoon: {
          activity: "Cape of Good Hope",
          description: "The southwestern tip of Africa — wild, windy, and awe-inspiring. Hike to the old lighthouse.",
          location: "Cape of Good Hope Nature Reserve",
          cost: "85 ZAR (conservation fee)",
          duration: "3 hours",
          tip: "The Diaz Beach walk down to the point is stunning but steep. Look for the Cape Point ostriches and eland antelope in the reserve.",
          coordinates: { lat: -34.3568, lng: 18.474 }
        },
        evening: {
          activity: "Boulders Beach penguins",
          description: "End the day with the charming African penguin colony. Stay for the golden hour light.",
          location: "Boulders Beach, Simon's Town, Cape Town",
          cost: "152 ZAR",
          duration: "1.5 hours",
          tip: "The golden hour light on the penguins and boulders is magical. This is one of the few places in the world you can swim with penguins.",
          coordinates: { lat: -34.1976, lng: 18.449 }
        }
      },
      {
        title: "History & Heritage",
        morning: {
          activity: "Robben Island",
          description: "The ferry takes 30 minutes. The prison tour by former inmates is deeply moving.",
          location: "Robben Island, Cape Town",
          cost: "600 ZAR",
          duration: "3.5 hours",
          tip: "Book the 9am ferry for the calmest seas. The 3-hour experience includes the bus tour of the island and Mandela's cell.",
          coordinates: { lat: -33.8066, lng: 18.3712 }
        },
        afternoon: {
          activity: "District Six & Apartheid history",
          description: "The museum and walking tour tell the story of 60,000 people forcibly removed from their homes.",
          location: "District Six Museum, 25A Buitenkant Street, Cape Town",
          cost: "55 ZAR (museum)",
          duration: "2 hours",
          tip: "Combine with a walk through the District Six area to see the empty lots where vibrant communities once lived. The street murals tell the story.",
          coordinates: { lat: -33.928, lng: 18.423 }
        },
        evening: {
          activity: "Long Street & Zulu Beer Hall",
          description: "Experience Cape Town's diverse nightlife — from traditional beer halls to rooftop cocktail bars.",
          location: "Long Street, Cape Town",
          cost: "150-300 ZAR",
          duration: "3-4 hours",
          tip: "Start at the Zulu Beer Hall for traditional umqombothi (sorghum beer), then head to The Waiting Room rooftop for craft cocktails.",
          coordinates: { lat: -33.92, lng: 18.417 }
        }
      },
      {
        title: "Winelands",
        morning: {
          activity: "Stellenbosch estate visits",
          description: "Historic Dutch colonial estates with world-class wines and mountain views.",
          location: "Stellenbosch Wine Route, Stellenbosch",
          cost: "150-300 ZAR (tastings)",
          duration: "3 hours",
          tip: "Rust en Vrede, Mulderbosch, and Delaire Graff are standout estates. Many offer food and wine pairings beyond just tastings.",
          coordinates: { lat: -33.9321, lng: 18.8602 }
        },
        afternoon: {
          activity: "Franschhoek wine tram",
          description: "The open-air tram winds through vineyards — hop off for tastings and pairings.",
          location: "Franschhoek Wine Tram, Franschhoek",
          cost: "200 ZAR (tram) + tastings",
          duration: "3-4 hours",
          tip: "The Hop-on-Hop-off format lets you visit 6-8 estates. Grande Provence and Rickety Bridge are highlights on the Blue Line.",
          coordinates: { lat: -33.872, lng: 19.117 }
        },
        evening: {
          activity: "Franschhoek dinner",
          description: "This tiny town punches way above its weight with award-winning restaurants.",
          location: "Franschhoek Village, Franschhoek",
          cost: "400-800 ZAR per person",
          duration: "2-3 hours",
          tip: "Pierneef à La Motte offers fine dining in a beautiful estate setting. Book at least a week in advance during high season.",
          coordinates: { lat: -33.872, lng: 19.117 }
        }
      },
      {
        title: "Atlantic Seaboard",
        morning: {
          activity: "Sea Kayak from Three Anchor Bay",
          description: "Paddle past the Mouille Point lighthouse with views of Lion's Head and the stadium.",
          location: "Three Anchor Bay, Cape Town",
          cost: "350-500 ZAR (guided kayak)",
          duration: "2 hours",
          tip: "Kayaks are very stable — beginners welcome. You may see dolphins, seals, and even penguins from the water. Book with Kaskazi Kayaks.",
          coordinates: { lat: -33.921, lng: 18.393 }
        },
        afternoon: {
          activity: "Camps Bay & Clifton Beaches",
          description: "Some of the world's most beautiful urban beaches — the water is freezing but the sand is golden.",
          location: "Camps Bay & Clifton Beach, Cape Town",
          cost: "Free",
          duration: "3 hours",
          tip: "Clifton 4th Beach is the most sheltered and popular. The water is cold (12-16°C) but the white sand and mountain backdrop are stunning.",
          coordinates: { lat: -33.946, lng: 18.376 }
        },
        evening: {
          activity: "Camps Bay sunset strip",
          description: "Sundowners at one of the beachfront bars with the Twelve Apostles turning pink at sunset.",
          location: "Camps Bay Promenade, Cape Town",
          cost: "100-250 ZAR (drinks)",
          duration: "2 hours",
          tip: "The sun sets over the Atlantic — Roast Cafe and Blues Restaurant have the best sunset tables. The Twelve Apostles turn pink at golden hour.",
          coordinates: { lat: -33.952, lng: 18.378 }
        }
      },
      {
        title: "Nature & Adventure",
        morning: {
          activity: "Lion's Head sunrise hike",
          description: "A 90-minute climb with chains and staples — the 360-degree sunrise view is Cape Town's best kept secret.",
          location: "Lion's Head, Cape Town",
          cost: "Free",
          duration: "2-3 hours",
          tip: "Start the hike by 5am for sunrise. The final section has chains and ladders — wear proper shoes. A headlamp is essential.",
          coordinates: { lat: -33.9555, lng: 18.3935 }
        },
        afternoon: {
          activity: "Kirstenbosch Botanical Garden",
          description: "One of the world's great botanical gardens, set against the eastern slopes of Table Mountain.",
          location: "Kirstenbosch National Botanical Garden, Cape Town",
          cost: "75 ZAR",
          duration: "2-3 hours",
          tip: "The Centenary Tree Canopy Walkway (the Boomslang) is a curved steel bridge through the treetops. Don't miss it.",
          coordinates: { lat: -33.987, lng: 18.427 }
        },
        evening: {
          activity: "Summer sunset concert",
          description: "On Sundays (Nov-Apr), bring a picnic to Kirstenbosch for live music on the lawns.",
          location: "Kirstenbosch Botanical Garden, Cape Town",
          cost: "75 ZAR (garden) + concert fee",
          duration: "3 hours",
          tip: "The Summer Sunset Concerts are a beloved Cape Town tradition. Bring a blanket and a picnic basket. Gates open at 4pm, music starts at 5:30pm.",
          coordinates: { lat: -33.987, lng: 18.427 }
        }
      },
      {
        title: "Farewell Cape Town",
        morning: {
          activity: "Hout Bay & Seal Island",
          description: "The fishing village harbour and a boat trip to see the Cape fur seal colony.",
          location: "Hout Bay Harbour, Cape Town",
          cost: "100 ZAR (boat to Seal Island)",
          duration: "2-3 hours",
          tip: "The boat ride to Duiker Island takes 15 minutes each way. The fish and chips at Fish on the Rocks in Hout Bay is legendary.",
          coordinates: { lat: -34.042, lng: 18.349 }
        },
        afternoon: {
          activity: "Woodstock art walk",
          description: "Street art, the Old Biscuit Mill, and local designer boutiques in the creative quarter.",
          location: "Woodstock, Cape Town",
          cost: "Free",
          duration: "2-3 hours",
          tip: "The Woodstock Exchange and The Old Biscuit Mill (Saturday Neighbourgoods Market) are must-visits. Pick up unique South African crafts here.",
          coordinates: { lat: -33.917, lng: 18.443 }
        },
        evening: {
          activity: "Farewell braai",
          description: "A traditional South African BBQ — the ultimate Cape Town farewell. Try Mzoli's in Gugulethu for the authentic experience.",
          location: "Mzoli's, Gugulethu, Cape Town",
          cost: "150-250 ZAR per person",
          duration: "2-3 hours",
          tip: "Mzoli's is an experience — you buy raw meat from the butchery, they braai it for you, and the party atmosphere is incredible. Go with a local guide if possible.",
          coordinates: { lat: -33.92, lng: 18.417 }
        }
      }
    ]
  },
  {
    cityId: "istanbul",
    days3: [
      {
        title: "Sultanahmet Classics",
        morning: {
          activity: "Hagia Sophia",
          description: "A church, then a mosque, then a museum, now a mosque again — 1,500 years of history in one building.",
          location: "Hagia Sophia, Sultanahmet Square, Istanbul",
          cost: "Free",
          duration: "1.5-2 hours",
          tip: "Arrive before 9am to avoid crowds. As an active mosque, women should bring a headscarf and all visitors should dress modestly.",
          coordinates: { lat: 41.0086, lng: 28.9802 }
        },
        afternoon: {
          activity: "Blue Mosque & Hippodrome",
          description: "The six-minaret mosque is free to enter. The Hippodrome outside was Constantinople's chariot racing arena.",
          location: "Blue Mosque, Sultanahmet Square, Istanbul",
          cost: "Free",
          duration: "1.5 hours",
          tip: "The Blue Mosque is closed to tourists during prayer times. The Hippodrome obelisks outside are from ancient Egypt and Greece.",
          coordinates: { lat: 41.0054, lng: 28.9768 }
        },
        evening: {
          activity: "Sultanahmet dinner under the arches",
          description: "Restaurants tucked under ancient arches with views of the Blue Mosque illuminated at night.",
          location: "Sultanahmet, Istanbul",
          cost: "200-400 TRY per person",
          duration: "2 hours",
          tip: "Tarihi Sultanahmet Koftecisi has been serving meatballs since 1920. For views, try one of the rooftop restaurants on Akbiyik Street.",
          coordinates: { lat: 41.0056, lng: 28.9758 }
        }
      },
      {
        title: "Palaces & Bazaars",
        morning: {
          activity: "Topkapi Palace & Harem",
          description: "The Ottoman sultans' residence for 400 years. The Harem tour reveals the private chambers.",
          location: "Topkapi Palace, Cankurtaran, Istanbul",
          cost: "320 TRY (palace + Harem)",
          duration: "3-4 hours",
          tip: "Buy the separate Harem ticket — many skip it but it's the most fascinating part. The Treasury has the 86-carat Spoonmaker's Diamond.",
          coordinates: { lat: 41.0115, lng: 28.9833 }
        },
        afternoon: {
          activity: "Grand Bazaar deep dive",
          description: "Over 4,000 shops in a covered maze since 1461. Start at half the asking price and enjoy the theater.",
          location: "Grand Bazaar, Beyazit, Istanbul",
          cost: "Free (budget for shopping)",
          duration: "2-3 hours",
          tip: "Haggling is expected — start at 40-50% of the asking price and meet in the middle. The ceramics and carpet shops have the best quality.",
          coordinates: { lat: 41.0107, lng: 28.9681 }
        },
        evening: {
          activity: "Bosphorus sunset ferry",
          description: "Take the public ferry from Eminönü for a sunset cruise between two continents.",
          location: "Eminönü Ferry Terminal, Istanbul",
          cost: "25 TRY (public ferry)",
          duration: "1.5-2 hours",
          tip: "The public ferry costs a fraction of tourist cruises and gives the same views. Take the Kadikoy or Uskudar route at sunset.",
          coordinates: { lat: 41.0165, lng: 28.9714 }
        }
      },
      {
        title: "Asian Side & Food",
        morning: {
          activity: "Ferry to Kadıköy",
          description: "Cross to the Asian side for a completely different vibe — younger, more relaxed, food-focused.",
          location: "Kadikoy Ferry Terminal, Istanbul",
          cost: "25 TRY (ferry)",
          duration: "30 minutes (ferry) + full day",
          tip: "Take the ferry from Eminönü or Karakoy. Sit on the upper deck for the best Bosphorus views. The ride is half the fun.",
          coordinates: { lat: 40.99, lng: 29.023 }
        },
        afternoon: {
          activity: "Kadıköy market & street food tour",
          description: "Fresh fish sandwiches, simit, Turkish delight, and the best baklava in the city.",
          location: "Kadikoy Market, Istanbul",
          cost: "100-200 TRY",
          duration: "2-3 hours",
          tip: "Try the fish sandwich at Kadikoy Balikcisi, pick up Turkish delight at Hafiz Mustafa, and don't miss the olive oil tastings.",
          coordinates: { lat: 40.99, lng: 29.023 }
        },
        evening: {
          activity: "Beyoğlu & İstiklal Street",
          description: "The vibrant pedestrian boulevard with live music, meyhanes (taverns), and rooftop bars.",
          location: "Istiklal Street, Beyoglu, Istanbul",
          cost: "150-300 TRY",
          duration: "3-4 hours",
          tip: "Take the historic red tram down Istiklal. Explore the side streets for hidden meyhanes — Yakup 2 is a local institution.",
          coordinates: { lat: 41.03, lng: 28.975 }
        }
      }
    ],
    days5: [
      {
        title: "Historic Peninsula",
        morning: {
          activity: "Hagia Sophia at opening",
          description: "Arrive before 9am to experience the vast interior in relative peace. The dome seems to float.",
          location: "Hagia Sophia, Sultanahmet Square, Istanbul",
          cost: "Free",
          duration: "1.5 hours",
          tip: "The golden mosaics on the upper gallery are best seen in morning light. The Deesis mosaic of Christ is the finest Byzantine artwork.",
          coordinates: { lat: 41.0086, lng: 28.9802 }
        },
        afternoon: {
          activity: "Basilica Cistern",
          description: "The eerie underground water reservoir with 336 columns — recently restored with atmospheric lighting.",
          location: "Basilica Cistern, Alemdar Mahallesi, Istanbul",
          cost: "190 TRY",
          duration: "45 minutes - 1 hour",
          tip: "Look for the Medusa head column bases — one is upside down, one sideways. The recent restoration added dramatic lighting effects.",
          coordinates: { lat: 41.0084, lng: 28.9779 }
        },
        evening: {
          activity: "Sultanahmet area dinner",
          description: "Eat in the historic quarter with rooftop views of the Sea of Marmara.",
          location: "Sultanahmet, Istanbul",
          cost: "200-400 TRY per person",
          duration: "2 hours",
          tip: "Seven Hills Restaurant has a rooftop terrace with Hagia Sophia views. Book a table on the terrace for sunset.",
          coordinates: { lat: 41.0056, lng: 28.9758 }
        }
      },
      {
        title: "Ottoman Splendor",
        morning: {
          activity: "Topkapi Palace & Treasury",
          description: "The 86-carat Spoonmaker's Diamond and the Prophet's relics are the highlights.",
          location: "Topkapi Palace, Cankurtaran, Istanbul",
          cost: "320 TRY (palace + Harem)",
          duration: "3-4 hours",
          tip: "The Sacred Relics section includes items attributed to Prophet Muhammad. The Harem rooms reveal the private lives of the sultans.",
          coordinates: { lat: 41.0115, lng: 28.9833 }
        },
        afternoon: {
          activity: "Grand Bazaar & Spice Bazaar",
          description: "The Grand Bazaar for jewelry and ceramics, the Spice Bazaar for Turkish delight and teas.",
          location: "Grand Bazaar & Spice Bazaar, Istanbul",
          cost: "Free (budget for shopping)",
          duration: "3 hours",
          tip: "The Spice Bazaar (Misir Carsisi) has better prices than the Grand Bazaar for edibles. Try the Turkish delight at Malatya Pazar.",
          coordinates: { lat: 41.0107, lng: 28.9681 }
        },
        evening: {
          activity: "Galata Bridge fish restaurants",
          description: "Eat fresh fish under the bridge while watching ferries cross the Golden Horn.",
          location: "Galata Bridge, Eminönü, Istanbul",
          cost: "150-300 TRY per person",
          duration: "1.5 hours",
          tip: "The restaurants under the bridge are atmospheric and affordable. The fish sandwich boats at Eminönü are even cheaper at 50 TRY.",
          coordinates: { lat: 41.0165, lng: 28.9714 }
        }
      },
      {
        title: "Bosphorus Day",
        morning: {
          activity: "Full Bosphorus cruise",
          description: "The 6-hour public ferry cruise goes all the way to the Black Sea — wooden mansions and Ottoman fortresses.",
          location: "Eminönü Ferry Terminal, Istanbul",
          cost: "100 TRY (full Bosphorus cruise)",
          duration: "6 hours (round trip)",
          tip: "The Sehir Hatlari public ferry is the best value. Get off at Anadolu Kavagi for 3 hours, have fish lunch, then catch the return ferry.",
          coordinates: { lat: 41.05, lng: 29.0 }
        },
        afternoon: {
          activity: "Ortaköy & Dolmabahçe Palace",
          description: "The ornate palace that replaced Topkapi as the sultan's residence, under the Bosphorus Bridge.",
          location: "Dolmabahce Palace, Besiktas, Istanbul",
          cost: "300 TRY (palace + Harem)",
          duration: "2 hours",
          tip: "The Ceremonial Hall has the world's largest Bohemian crystal chandelier at 4.5 tons. Photography is not allowed inside the palace.",
          coordinates: { lat: 41.0393, lng: 29.0007 }
        },
        evening: {
          activity: "Ortaköy waterfront waffle",
          description: "The neighborhood is famous for giant waffles loaded with fruit and chocolate.",
          location: "Ortakoy, Istanbul",
          cost: "80-120 TRY (waffle)",
          duration: "1-2 hours",
          tip: "Ortakoy's waffle stands are an Istanbul institution. The Ortakoy Mosque with the Bosphorus Bridge behind it is the iconic photo spot.",
          coordinates: { lat: 41.0498, lng: 29.0271 }
        }
      },
      {
        title: "Asian Side Discovery",
        morning: {
          activity: "Ferry to Kadıköy markets",
          description: "The produce market is one of the best in the city — olive oil, cheese, and fresh bread tastings.",
          location: "Kadikoy Market, Istanbul",
          cost: "25 TRY (ferry)",
          duration: "2-3 hours",
          tip: "The Kadikoy produce market is a food lover's paradise. Try the street simit, pick up some sucuk (Turkish sausage), and taste artisanal cheeses.",
          coordinates: { lat: 40.99, lng: 29.023 }
        },
        afternoon: {
          activity: "Moda seaside walk",
          description: "A charming neighborhood with Art Deco buildings, sea views, and excellent ice cream.",
          location: "Moda, Kadikoy, Istanbul",
          cost: "Free",
          duration: "2 hours",
          tip: "Walk the Moda seaside promenade for views of the Historic Peninsula across the water. Ali Usta ice cream shop is a local legend.",
          coordinates: { lat: 40.982, lng: 29.023 }
        },
        evening: {
          activity: "Çiya Sofrası dinner",
          description: "A legendary restaurant in Kadıköy serving forgotten regional recipes from across Turkey.",
          location: "Ciya Sofrasi, Kadikoy, Istanbul",
          cost: "200-350 TRY per person",
          duration: "2 hours",
          tip: "Ciya was featured on Netflix's Chef's Table. Try the seasonal dishes and the kebabs you won't find anywhere else. The sour kebab is a must.",
          coordinates: { lat: 40.9895, lng: 29.024 }
        }
      },
      {
        title: "Beyoğlu & Galata",
        morning: {
          activity: "Galata Tower panorama",
          description: "The medieval stone tower offers 360-degree views of Istanbul — both European and Asian sides.",
          location: "Galata Tower, Beyoglu, Istanbul",
          cost: "130 TRY",
          duration: "1 hour",
          tip: "Arrive at opening (8:30am) for the shortest queue. The 360-degree view encompasses the Golden Horn, Bosphorus, and two continents.",
          coordinates: { lat: 41.0256, lng: 28.9742 }
        },
        afternoon: {
          activity: "İstiklal Street & Pera Museum",
          description: "The bustling pedestrian street and an excellent museum of Orientalist art.",
          location: "Pera Museum, Istiklal Street, Istanbul",
          cost: "60 TRY (museum)",
          duration: "2-3 hours",
          tip: "The Pera Museum has an excellent Orientalist painting collection and Kutahya tile exhibits. Free admission on Wednesdays.",
          coordinates: { lat: 41.029, lng: 28.975 }
        },
        evening: {
          activity: "Meyhane dinner with raki",
          description: "A traditional Turkish tavern with meze plates, live fasıl music, and anise-flavored raki.",
          location: "Beyoglu Meyhanes, Istanbul",
          cost: "300-500 TRY per person",
          duration: "3 hours",
          tip: "Refik Meyhanesi on Nevizade Street is a classic. Order a selection of cold meze, then hot dishes, and sip raki slowly with ice and water.",
          coordinates: { lat: 41.029, lng: 28.976 }
        }
      }
    ],
    days7: [
      {
        title: "Welcome to Istanbul",
        morning: {
          activity: "Hagia Sophia",
          description: "Begin at the crossroads of civilization. The mosaics, the calligraphy, the immense dome — 1,500 years of history.",
          location: "Hagia Sophia, Sultanahmet Square, Istanbul",
          cost: "Free",
          duration: "1.5-2 hours",
          tip: "As an active mosque, entry is free but there are prayer-time closures. The morning call to prayer echoes beautifully inside.",
          coordinates: { lat: 41.0086, lng: 28.9802 }
        },
        afternoon: {
          activity: "Blue Mosque & Hippodrome",
          description: "The cascading domes and six minarets. The ancient chariot racing ground outside.",
          location: "Blue Mosque, Sultanahmet, Istanbul",
          cost: "Free",
          duration: "1.5 hours",
          tip: "The Blue Mosque reopened in 2023 after a 5-year restoration. The 20,000 blue Iznik tiles inside are now brilliantly restored.",
          coordinates: { lat: 41.0054, lng: 28.9768 }
        },
        evening: {
          activity: "Sultanahmet rooftop dinner",
          description: "Dine with floodlit views of both Hagia Sophia and the Blue Mosque.",
          location: "Sultanahmet, Istanbul",
          cost: "250-450 TRY per person",
          duration: "2-3 hours",
          tip: "Seven Hills and Tuğra restaurants both have stunning rooftop views of the illuminated monuments. Book terrace tables in advance.",
          coordinates: { lat: 41.0056, lng: 28.9758 }
        }
      },
      {
        title: "Palace & Cistern",
        morning: {
          activity: "Topkapi Palace full tour",
          description: "The Harem, the Treasury, the Islamic relics — allow a full morning for this vast complex.",
          location: "Topkapi Palace, Cankurtaran, Istanbul",
          cost: "320 TRY",
          duration: "3-4 hours",
          tip: "Don't miss the Pavilion of the Holy Mantle with sacred relics. The palace gardens overlooking the Bosphorus are a peaceful break.",
          coordinates: { lat: 41.0115, lng: 28.9833 }
        },
        afternoon: {
          activity: "Basilica Cistern",
          description: "Walk among the forest of columns reflected in water — the Medusa head bases are the famous detail.",
          location: "Basilica Cistern, Alemdar Mahallesi, Istanbul",
          cost: "190 TRY",
          duration: "45 minutes - 1 hour",
          tip: "After the 2022 renovation, the lighting is dramatic and the water reflections are mesmerizing. Visit on a hot day — it's wonderfully cool underground.",
          coordinates: { lat: 41.0084, lng: 28.9779 }
        },
        evening: {
          activity: "Sirkeci train station & waterfront",
          description: "Where the Orient Express once terminated. Nearby fish restaurants serve fresh catches from the Bosphorus.",
          location: "Sirkeci, Istanbul",
          cost: "150-300 TRY per person",
          duration: "2 hours",
          tip: "The Orient Express restaurant in Sirkeci station serves period-appropriate cuisine. The nearby waterfront has excellent fish restaurants.",
          coordinates: { lat: 41.014, lng: 28.981 }
        }
      },
      {
        title: "Bazaar Day",
        morning: {
          activity: "Grand Bazaar mastery",
          description: "Over 4,000 shops. Enjoy the carpet salesmen's tea ritual — you're not obligated to buy.",
          location: "Grand Bazaar, Beyazit, Istanbul",
          cost: "Free (budget for shopping)",
          duration: "2-3 hours",
          tip: "The Grand Bazaar has 61 streets and 4,000 shops. Focus on one section: ceramics, textiles, or jewelry. Tea is always offered — accepting is polite.",
          coordinates: { lat: 41.0107, lng: 28.9681 }
        },
        afternoon: {
          activity: "Spice Bazaar & surroundings",
          description: "Turkish delight, dried fruits, aphrodisiac spices, and the chaotic energy of the traders.",
          location: "Spice Bazaar, Eminönü, Istanbul",
          cost: "Free (budget for purchases)",
          duration: "2 hours",
          tip: "The shops on the streets behind the Spice Bazaar often have better prices than inside. Try the Turkish coffee at Kurukahveci Mehmet Efendi.",
          coordinates: { lat: 41.0166, lng: 28.9708 }
        },
        evening: {
          activity: "Eminönü fish sandwich",
          description: "Join the locals eating balık ekmek (fish in bread) from the boats docked at the waterfront.",
          location: "Eminönü Waterfront, Istanbul",
          cost: "50-80 TRY",
          duration: "1 hour",
          tip: "The fish sandwich boats are an Istanbul institution. Add lemon, onions, and pickled peppers. Best paired with a glass of pickle juice (turnsu).",
          coordinates: { lat: 41.0165, lng: 28.9714 }
        }
      },
      {
        title: "Bosphorus Explorer",
        morning: {
          activity: "Dolmabahçe Palace",
          description: "The European-style palace with the world's largest Bohemian crystal chandelier — 4.5 tons.",
          location: "Dolmabahce Palace, Besiktas, Istanbul",
          cost: "300 TRY",
          duration: "2 hours",
          tip: "The palace blends Baroque, Rococo, and Neoclassical styles. Mustafa Kemal Ataturk died here in 1938 — the clock in his room is stopped at 9:05am.",
          coordinates: { lat: 41.0393, lng: 29.0007 }
        },
        afternoon: {
          activity: "Full Bosphorus ferry cruise",
          description: "The public ferry to Anadolu Kavağı at the Black Sea — Ottoman fortresses, wooden yalıs, and seagulls.",
          location: "Eminönü to Anadolu Kavagi Ferry, Istanbul",
          cost: "100 TRY",
          duration: "6 hours (round trip)",
          tip: "Get off at Anadolu Kavagi, climb to the ruined Genoese fortress for Black Sea views, and have grilled fish at one of the waterfront restaurants.",
          coordinates: { lat: 41.13, lng: 29.073 }
        },
        evening: {
          activity: "Sunset from Anadolu Hisarı",
          description: "A Ottoman fortress on the Asian shore with a perfect Bosphorus sunset view.",
          location: "Anadolu Hisari, Istanbul",
          cost: "Free",
          duration: "1 hour",
          tip: "The fortress sits at the narrowest point of the Bosphorus. The waterfront cafes here are a local secret for sunset watching.",
          coordinates: { lat: 41.083, lng: 29.054 }
        }
      },
      {
        title: "Asian Side Deep Dive",
        morning: {
          activity: "Kadıköy market breakfast",
          description: "A traditional Turkish breakfast spread — cheeses, olives, honey, eggs, and endless çay.",
          location: "Kadikoy Market, Istanbul",
          cost: "100-200 TRY per person",
          duration: "2 hours",
          tip: "A proper Turkish breakfast has 15-20 small dishes. Try Baylan Pastanesi afterward — Istanbul's oldest patisserie since 1923.",
          coordinates: { lat: 40.99, lng: 29.023 }
        },
        afternoon: {
          activity: "Üsküdar & Maiden's Tower",
          description: "The conservative Asian shore and the iconic tower on its tiny island in the Bosphorus.",
          location: "Uskudar & Maiden's Tower, Istanbul",
          cost: "100 TRY (boat to tower)",
          duration: "2-3 hours",
          tip: "The Maiden's Tower (Kiz Kulesi) has a restaurant inside. The best photos are from the Uskudar waterfront at sunset with the tower silhouetted.",
          coordinates: { lat: 41.0215, lng: 29.0044 }
        },
        evening: {
          activity: "Çiya Sofrası feast",
          description: "The restaurant that put Anatolian home cooking on the world culinary map.",
          location: "Ciya Sofrasi, Kadikoy, Istanbul",
          cost: "200-350 TRY per person",
          duration: "2 hours",
          tip: "Order the seasonal specials — they change daily based on what's fresh. The sour kebab and the stuffed vegetables are legendary.",
          coordinates: { lat: 40.9895, lng: 29.024 }
        }
      },
      {
        title: "Art & Nightlife",
        morning: {
          activity: "Galata Tower & Karaköy",
          description: "The medieval tower, then explore the trendy Karaköy district with its specialty coffee scene.",
          location: "Galata Tower & Karakoy, Istanbul",
          cost: "130 TRY (tower entry)",
          duration: "2-3 hours",
          tip: "After the tower, explore Karakoy's hip coffee scene — Kronotrop and Montag are favorites. The neighborhood also has great street art.",
          coordinates: { lat: 41.0256, lng: 28.9742 }
        },
        afternoon: {
          activity: "İstanbul Modern & Pera Museum",
          description: "Turkey's leading contemporary art museums — one by the water, one on the hill.",
          location: "Istanbul Modern & Pera Museum, Istanbul",
          cost: "60-120 TRY per museum",
          duration: "3 hours",
          tip: "Istanbul Modern reopened in its new Renzo Piano-designed building. Both museums are free on certain days — check their websites.",
          coordinates: { lat: 41.023, lng: 28.983 }
        },
        evening: {
          activity: "Beyoğlu meyhane crawl",
          description: "İstiklal Street's side alleys hide the best meyhanes — meze, raki, and live fasıl music.",
          location: "Beyoglu, Istanbul",
          cost: "300-500 TRY per person",
          duration: "3-4 hours",
          tip: "Start at Refik Meyhanesi on Nevizade Street, then move to Asmalimescit for cocktail bars. The side streets have the best hidden spots.",
          coordinates: { lat: 41.029, lng: 28.976 }
        }
      },
      {
        title: "Farewell Istanbul",
        morning: {
          activity: "Süleymaniye Mosque",
          description: "Sinan's masterpiece with stunning Golden Horn views — the most beautiful mosque in Istanbul.",
          location: "Suleymaniye Mosque, Istanbul",
          cost: "Free",
          duration: "1.5 hours",
          tip: "The mosque complex includes a hamam, library, and hospital. The courtyard view over the Golden Horn is one of Istanbul's best.",
          coordinates: { lat: 41.0163, lng: 28.962 }
        },
        afternoon: {
          activity: "Balat colorful neighborhood",
          description: "The formerly Jewish and Greek quarter with colorful houses, vintage shops, and hip cafés.",
          location: "Balat, Fatih, Istanbul",
          cost: "Free",
          duration: "2-3 hours",
          tip: "Balat is Istanbul's most photogenic neighborhood — colorful houses, street art, and antique shops. Try the walk along the Golden Horn waterfront.",
          coordinates: { lat: 41.042, lng: 28.94 }
        },
        evening: {
          activity: "Bosphorus farewell dinner cruise",
          description: "A final night sailing between continents with dinner and traditional Turkish music.",
          location: "Bosphorus Dinner Cruise, Istanbul",
          cost: "500-1000 TRY per person",
          duration: "3-4 hours",
          tip: "Book a cruise that departs from Kabatas or Eminonu. The illuminated Bosphorus Bridge and Dolmabahce Palace from the water are magical.",
          coordinates: { lat: 41.05, lng: 29.0 }
        }
      }
    ]
  },
  {
    cityId: "marrakech",
    days3: [
      {
        title: "Medina Magic",
        morning: {
          activity: "Bahia Palace",
          description: "A stunning 19th-century palace with intricate mosaics, carved cedar ceilings, and peaceful courtyards.",
          location: "Bahia Palace, Rue Bahia, Marrakech",
          cost: "70 MAD",
          duration: "1.5 hours",
          tip: "Arrive at opening (9am) for the best light on the courtyard mosaics and fewer tourists. Hire a local guide at the entrance for richer context.",
          coordinates: { lat: 31.6215, lng: -7.9838 }
        },
        afternoon: {
          activity: "Medina souks exploration",
          description: "Follow the scent of spices through the labyrinth — leather, ceramics, lanterns, and textiles.",
          location: "Medina Souks, Marrakech",
          cost: "Free (budget for shopping)",
          duration: "2-3 hours",
          tip: "If you get lost, head downhill toward the Koutoubia Mosque — it's the compass point of the medina. Haggling is expected; aim for 40-50% of the first price.",
          coordinates: { lat: 31.63, lng: -7.988 }
        },
        evening: {
          activity: "Jemaa el-Fnaa at sunset",
          description: "The grand square erupts with snake charmers, musicians, henna artists, and food stalls.",
          location: "Jemaa el-Fnaa, Marrakech",
          cost: "Free (budget for food: 50-150 MAD)",
          duration: "2-3 hours",
          tip: "The square transforms completely from daytime to nighttime. Eat at stall #14 or #1 for the most popular (and safest) street food. Watch your belongings.",
          coordinates: { lat: 31.6258, lng: -7.9891 }
        }
      },
      {
        title: "Gardens & Culture",
        morning: {
          activity: "Majorelle Garden",
          description: "Yves Saint Laurent's cobalt-blue botanical paradise — an oasis of calm in the city.",
          location: "Majorelle Garden, Rue Yves Saint Laurent, Marrakech",
          cost: "70 MAD",
          duration: "1.5 hours",
          tip: "Arrive at 8am opening to avoid crowds and enjoy the garden in morning light. The cobalt blue (Majorelle blue) is striking against the greenery.",
          coordinates: { lat: 31.6415, lng: -8.0033 }
        },
        afternoon: {
          activity: "Saadian Tombs",
          description: "Rediscovered in 1917 after being sealed for centuries — a hidden gem of Moroccan architecture.",
          location: "Saadian Tombs, Rue de la Kasbah, Marrakech",
          cost: "70 MAD",
          duration: "1 hour",
          tip: "The tombs were sealed by a subsequent sultan who didn't want rivals' tombs visited. The Chamber of the 12 Pillars has extraordinary carved stucco.",
          coordinates: { lat: 31.62, lng: -7.987 }
        },
        evening: {
          activity: "Rooftop dinner with Atlas views",
          description: "Many riads offer rooftop dining with snow-capped Atlas Mountain views at sunset.",
          location: "Medina Rooftops, Marrakech",
          cost: "200-400 MAD per person",
          duration: "2 hours",
          tip: "Book a riad rooftop dinner in advance. Nomad restaurant and Cafe des Epices both have excellent views. The Atlas Mountains glow pink at sunset.",
          coordinates: { lat: 31.6258, lng: -7.9891 }
        }
      },
      {
        title: "Beyond the Medina",
        morning: {
          activity: "Jewish Quarter (Mellah) & Kasbah",
          description: "The historic Jewish neighborhood and the Kasbah Mosque — a different side of Marrakech.",
          location: "Mellah & Kasbah, Marrakech",
          cost: "Free",
          duration: "2 hours",
          tip: "The Mellah was founded in 1558 and once housed a large Jewish community. The cemetery on the hill has beautiful views. The Kasbah Mosque is not open to non-Muslims.",
          coordinates: { lat: 31.618, lng: -7.985 }
        },
        afternoon: {
          activity: "Hammam spa experience",
          description: "A traditional Moroccan steam bath with black soap scrub — the ultimate cultural relaxation.",
          location: "Traditional Hammam, Marrakech",
          cost: "150-500 MAD",
          duration: "1.5-2 hours",
          tip: "Heritage spas like Heritage Spa or Spa de la Kasbah offer authentic experiences. You'll be scrubbed, soaped, and massaged. Bring swimwear or go traditional.",
          coordinates: { lat: 31.616, lng: -7.984 }
        },
        evening: {
          activity: "Cooking class & dinner",
          description: "Learn to make tagine in a riad, then enjoy your creation by candlelight.",
          location: "Riad Cooking Class, Marrakech",
          cost: "400-600 MAD",
          duration: "3-4 hours",
          tip: "Most classes start with a market tour to buy ingredients. La Maison Arabe and Lal Ming offer excellent classes. You'll learn spice blending and tagine technique.",
          coordinates: { lat: 31.63, lng: -7.988 }
        }
      }
    ],
    days5: [
      {
        title: "Medina Immersion",
        morning: {
          activity: "Koutoubia Mosque & gardens",
          description: "The 12th-century minaret is Marrakech's landmark. The surrounding gardens are peaceful.",
          location: "Koutoubia Mosque, Marrakech",
          cost: "Free (gardens only — mosque closed to non-Muslims)",
          duration: "1 hour",
          tip: "The Koutoubia minaret inspired the Giralda in Seville. The gardens are a peaceful escape from the medina chaos. Visit at dawn for the call to prayer.",
          coordinates: { lat: 31.6238, lng: -7.9932 }
        },
        afternoon: {
          activity: "Souks deep dive with a guide",
          description: "A local guide navigates the maze to the best workshops — brass, leather, wool, and wood.",
          location: "Medina Souks, Marrakech",
          cost: "200-300 MAD (guide) + shopping",
          duration: "3-4 hours",
          tip: "A guide prevents you from getting lost and takes you to artisan workshops you'd never find alone. Negotiate the guide fee upfront.",
          coordinates: { lat: 31.63, lng: -7.988 }
        },
        evening: {
          activity: "Jemaa el-Fnaa full experience",
          description: "Start with orange juice at the market, progress to street food stalls, end with storytellers and musicians.",
          location: "Jemaa el-Fnaa, Marrakech",
          cost: "100-200 MAD (food and drinks)",
          duration: "3-4 hours",
          tip: "The orange juice stalls charge 4 MAD per glass — a fraction of restaurant prices. Try the snail soup, msemen bread, and grilled meats at the food stalls.",
          coordinates: { lat: 31.6258, lng: -7.9891 }
        }
      },
      {
        title: "Palaces & Tombs",
        morning: {
          activity: "Bahia Palace & Dar Si Said Museum",
          description: "The palace's 150 rooms and the museum's collection of Moroccan arts and crafts.",
          location: "Bahia Palace & Dar Si Said, Marrakech",
          cost: "70 MAD each",
          duration: "2-3 hours",
          tip: "Dar Si Said has an excellent collection of Moroccan carpets, jewelry, and woodworking. The two sites are a 10-minute walk apart.",
          coordinates: { lat: 31.6205, lng: -7.9845 }
        },
        afternoon: {
          activity: "Saadian Tombs & El Badi Palace",
          description: "The ornate tombs and the ruins of a once-great palace — now home to nesting storks.",
          location: "Saadian Tombs & El Badi Palace, Marrakech",
          cost: "70 MAD (tombs) + 70 MAD (palace)",
          duration: "2 hours",
          tip: "El Badi Palace is mostly ruins now, but climb the ramparts for panoramic views and to see the storks nesting on the walls. The underground passages are atmospheric.",
          coordinates: { lat: 31.6177, lng: -7.986 }
        },
        evening: {
          activity: "Gueliz modern Marrakech",
          description: "The French-built new town with art galleries, wine bars, and international cuisine.",
          location: "Gueliz, Marrakech",
          cost: "200-500 MAD per person",
          duration: "2-3 hours",
          tip: "A break from the medina chaos. The Comptoir Darna offers dinner with a belly dancing show. The Galerie 127 has rotating contemporary art exhibitions.",
          coordinates: { lat: 31.634, lng: -8.013 }
        }
      },
      {
        title: "Atlas Mountains Day Trip",
        morning: {
          activity: "Drive to Imlil Valley",
          description: "A 90-minute drive into the High Atlas Mountains — dramatic gorges and Berber villages.",
          location: "Imlil Valley, High Atlas Mountains",
          cost: "300-500 MAD (shared transport)",
          duration: "2-3 hours (drive + hike)",
          tip: "Hire a shared grand taxi or book a day trip through your riad. The drive itself is stunning — the landscape changes from palm groves to mountain gorges.",
          coordinates: { lat: 31.136, lng: -7.919 }
        },
        afternoon: {
          activity: "Berber village hike",
          description: "Walk through walnut groves to a traditional Berber village. Share mint tea with a local family.",
          location: "Imlil & surrounding villages, High Atlas",
          cost: "200-300 MAD (local guide)",
          duration: "3-4 hours",
          tip: "A local guide costs about 200 MAD and is worth it — they'll take you to a Berber home for tea and bread. The hike to Armoud is moderate and rewarding.",
          coordinates: { lat: 31.136, lng: -7.919 }
        },
        evening: {
          activity: "Return — riad hammam",
          description: "Soak away the hiking aches in a traditional hammam with argan oil massage.",
          location: "Riad Hammam, Marrakech",
          cost: "200-500 MAD",
          duration: "1.5-2 hours",
          tip: "After a day of hiking, the traditional hammam experience of steam, black soap scrub, and argan oil massage is the perfect recovery.",
          coordinates: { lat: 31.63, lng: -7.988 }
        }
      },
      {
        title: "Gardens & Wellness",
        morning: {
          activity: "Majorelle Garden & YSL Museum",
          description: "The electric-blue garden and the museum dedicated to the fashion designer who saved it.",
          location: "Majorelle Garden & YSL Museum, Marrakech",
          cost: "70 MAD (garden) + 100 MAD (museum)",
          duration: "2 hours",
          tip: "Book YSL Museum tickets online in advance — they sell out. The museum showcases Yves Saint Laurent's designs in a stunning building.",
          coordinates: { lat: 31.6418, lng: -8.003 }
        },
        afternoon: {
          activity: "Menara Gardens & olive groves",
          description: "The 12th-century pavilion with its reflecting pool, backed by the Atlas Mountains.",
          location: "Menara Gardens, Marrakech",
          cost: "20 MAD",
          duration: "1-1.5 hours",
          tip: "The reflecting pool with Atlas Mountain backdrop is iconic. The olive groves stretch for hectares. Visit late afternoon for the best mountain views.",
          coordinates: { lat: 31.608, lng: -8.009 }
        },
        evening: {
          activity: "Moroccan cooking class",
          description: "Market shopping with the chef, then prepare a four-course feast of traditional Moroccan dishes.",
          location: "Cooking Class, Marrakech",
          cost: "400-600 MAD",
          duration: "3-4 hours",
          tip: "La Maison Arabe's cooking class is the most renowned. You'll visit the market, learn spice blending, and cook a full Moroccan meal from scratch.",
          coordinates: { lat: 31.63, lng: -7.988 }
        }
      },
      {
        title: "Day Trip: Essaouira",
        morning: {
          activity: "Drive to Essaouira coast",
          description: "A 2.5-hour drive through argan forests — watch for goats climbing the trees!",
          location: "Essaouira Road, Morocco",
          cost: "200-400 MAD (shared transport)",
          duration: "2.5 hours (drive)",
          tip: "The goats climbing argan trees are a real (and touristy) phenomenon along the road. Stop at a women's argan oil cooperative for authentic products.",
          coordinates: { lat: 31.5085, lng: -9.7595 }
        },
        afternoon: {
          activity: "Essaouira medina & harbour",
          description: "A breezy blue-and-white coastal town with ramparts, fresh seafood, and Gnawa music.",
          location: "Essaouira Medina, Morocco",
          cost: "Free",
          duration: "3-4 hours",
          tip: "The harbor has the freshest seafood — pick your fish and they grill it on the spot. The medina is a UNESCO World Heritage Site with Portuguese ramparts.",
          coordinates: { lat: 31.5085, lng: -9.7595 }
        },
        evening: {
          activity: "Farewell dinner in Marrakech",
          description: "Return for a final tagine on a rooftop terrace with the call to prayer echoing across the city.",
          location: "Marrakech Medina Rooftops",
          cost: "200-500 MAD per person",
          duration: "2-3 hours",
          tip: "Nomad restaurant serves modern Moroccan cuisine with panoramic views of the Atlas Mountains. Book a rooftop table for the sunset call to prayer.",
          coordinates: { lat: 31.6258, lng: -7.9891 }
        }
      }
    ],
    days7: [
      {
        title: "Welcome to Marrakech",
        morning: {
          activity: "Koutoubia Mosque area",
          description: "Start at the 12th-century minaret — it's the compass point for the entire medina.",
          location: "Koutoubia Mosque, Marrakech",
          cost: "Free",
          duration: "1 hour",
          tip: "The mosque is visible from almost everywhere in the medina — use it as your navigation landmark. The gardens are a peaceful first stop.",
          coordinates: { lat: 31.6238, lng: -7.9932 }
        },
        afternoon: {
          activity: "First souk wander",
          description: "Get deliberately lost in the covered markets. The dyers' quarter and the copperworkers' area are highlights.",
          location: "Medina Souks, Marrakech",
          cost: "Free (budget for shopping)",
          duration: "2-3 hours",
          tip: "Don't buy anything on day one — use this first visit to get your bearings and understand prices. The dyers' quarter with colorful wool hanging overhead is magical.",
          coordinates: { lat: 31.63, lng: -7.988 }
        },
        evening: {
          activity: "Jemaa el-Fnaa initiation",
          description: "The world's most extraordinary public square — snake charmers, acrobats, and 100 food stalls.",
          location: "Jemaa el-Fnaa, Marrakech",
          cost: "100-200 MAD (food)",
          duration: "3 hours",
          tip: "The square is a UNESCO Masterpiece of Oral and Intangible Heritage. Start with fresh orange juice, try the snail soup, then settle at a food stall for grilled meats.",
          coordinates: { lat: 31.6258, lng: -7.9891 }
        }
      },
      {
        title: "Royal Heritage",
        morning: {
          activity: "Bahia Palace",
          description: "The grand rooms, the intricate zellige tilework, and the tranquil courtyard gardens.",
          location: "Bahia Palace, Rue Bahia, Marrakech",
          cost: "70 MAD",
          duration: "1.5-2 hours",
          tip: "The name means 'brilliance' — built for a grand vizier's favorite wife. The harem courtyard with its central basin is the highlight.",
          coordinates: { lat: 31.6215, lng: -7.9838 }
        },
        afternoon: {
          activity: "Saadian Tombs & El Badi ruins",
          description: "The sealed tombs rediscovered in 1917, and the stork-nested ruins of a golden palace.",
          location: "Saadian Tombs & El Badi Palace, Marrakech",
          cost: "140 MAD (both sites)",
          duration: "2 hours",
          tip: "El Badi Palace was once the most magnificent in Morocco — the sultan stripped it of all its wealth, leaving atmospheric ruins. Climb the walls for storks and views.",
          coordinates: { lat: 31.6177, lng: -7.986 }
        },
        evening: {
          activity: "Rooftop dinner at Dar Yacout",
          description: "A lavish Moroccan feast with panoramic views of the medina and mountains.",
          location: "Dar Yacout, Marrakech",
          cost: "400-600 MAD per person",
          duration: "2-3 hours",
          tip: "Dar Yacout is an iconic Marrakech dining experience — multiple courses of Moroccan specialties on a rooftop with sunset views. Reserve well ahead.",
          coordinates: { lat: 31.6258, lng: -7.9891 }
        }
      },
      {
        title: "Artisan Quarter",
        morning: {
          activity: "Tanneries visit",
          description: "The ancient leather dyeing pits — best viewed from the surrounding terrace shops (with a tip).",
          location: "Tanneries, Medina, Marrakech",
          cost: "Free (tip expected: 20-50 MAD)",
          duration: "1 hour",
          tip: "The tanneries are best viewed from the surrounding terrace shops. You'll be offered mint sprigs to counter the smell. Morning is when workers are most active.",
          coordinates: { lat: 31.632, lng: -7.987 }
        },
        afternoon: {
          activity: "Artisan workshops",
          description: "Watch masters at work — zellige tile cutting, brass engraving, and cedarwood carving.",
          location: "Artisan Quarter, Medina, Marrakech",
          cost: "Free",
          duration: "2-3 hours",
          tip: "The artisan workshops are in the deepest parts of the souks. Look for the metalworkers' quarter and the woodworking ateliers. Purchases support traditional crafts.",
          coordinates: { lat: 31.63, lng: -7.988 }
        },
        evening: {
          activity: "Kasbah neighborhood dinner",
          description: "The quieter southern medina with traditional restaurants and the Kasbah Mosque.",
          location: "Kasbah, Marrakech",
          cost: "150-300 MAD per person",
          duration: "2 hours",
          tip: "The Kasbah is calmer than the main medina. Cafe Kasbah has a lovely terrace. The Kasbah Mosque minaret dates from the 12th century.",
          coordinates: { lat: 31.616, lng: -7.984 }
        }
      },
      {
        title: "Atlas Mountains",
        morning: {
          activity: "Drive to Ourika Valley",
          description: "The lush valley in the High Atlas — a dramatic change from the red city.",
          location: "Ourika Valley, High Atlas Mountains",
          cost: "300-500 MAD (transport)",
          duration: "1.5 hours (drive)",
          tip: "The Ourika Valley is cooler and greener than Marrakech. Stop at the Berber Women's Argan Oil Cooperative on the way for authentic products.",
          coordinates: { lat: 31.46, lng: -7.73 }
        },
        afternoon: {
          activity: "Berber village & waterfall hike",
          description: "Trek to a seven-tier waterfall, share tea with Berber families, and see traditional argan oil production.",
          location: "Setti Fatma, Ourika Valley",
          cost: "200 MAD (local guide)",
          duration: "3-4 hours",
          tip: "The seven waterfalls of Setti Fatma range from easy to challenging. A guide costs 200 MAD and will take you to the best viewpoints and Berber homes.",
          coordinates: { lat: 31.46, lng: -7.73 }
        },
        evening: {
          activity: "Return — riad pool & rest",
          description: "Relax in your riad's courtyard pool after the mountain adventure.",
          location: "Riad, Marrakech",
          cost: "Free (if riad has pool)",
          duration: "2 hours",
          tip: "Most riads have rooftop terraces perfect for evening mint tea. After a day of hiking, the riad courtyard is the most peaceful place in Marrakech.",
          coordinates: { lat: 31.6258, lng: -7.9891 }
        }
      },
      {
        title: "Gardens Day",
        morning: {
          activity: "Majorelle Garden early",
          description: "Arrive at 8am to have the cobalt-blue paths almost to yourself.",
          location: "Majorelle Garden, Rue Yves Saint Laurent, Marrakech",
          cost: "70 MAD",
          duration: "1.5 hours",
          tip: "The garden opens at 8am and is quiet for the first hour. The electric blue walls against bougainvillea and cacti are photographer's paradise.",
          coordinates: { lat: 31.6415, lng: -8.0033 }
        },
        afternoon: {
          activity: "YSL Museum & Menara Gardens",
          description: "The fashion museum and the ancient olive grove pavilion with Atlas Mountain views.",
          location: "YSL Museum & Menara Gardens, Marrakech",
          cost: "100 MAD (museum) + 20 MAD (Menara)",
          duration: "2-3 hours",
          tip: "The YSL Museum building is as stunning as the fashion inside. At Menara, the Atlas Mountains are reflected in the 12th-century basin on clear days.",
          coordinates: { lat: 31.6418, lng: -8.003 }
        },
        evening: {
          activity: "Hammam & spa evening",
          description: "The full Moroccan hammam ritual — steam, scrub, rinse, and argan oil massage.",
          location: "Hammam, Marrakech",
          cost: "300-600 MAD",
          duration: "2 hours",
          tip: "Book the full package: steam room, savon noir scrub, ghassoul clay mask, and argan oil massage. Heritage Spa and Spa de la Kasbah are excellent.",
          coordinates: { lat: 31.63, lng: -7.988 }
        }
      },
      {
        title: "Coastal Escape: Essaouira",
        morning: {
          activity: "Drive through argan forests",
          description: "Stop to see the famous tree-climbing goats and visit a women's argan oil cooperative.",
          location: "Essaouira Road, Morocco",
          cost: "200-400 MAD (transport)",
          duration: "2.5 hours (drive)",
          tip: "The tree-climbing goats are unique to this region. The women's argan oil cooperatives along the road offer fair-trade products and demonstrations.",
          coordinates: { lat: 31.5085, lng: -9.7595 }
        },
        afternoon: {
          activity: "Essaouira medina & ramparts",
          description: "The windy city — fresh seafood at the port, Gnawa music shops, and blue-shuttered alleyways.",
          location: "Essaouira Medina, Morocco",
          cost: "Free",
          duration: "3-4 hours",
          tip: "The ramparts (skala) offer sweeping Atlantic views. Browse the Gnawa music shops for traditional instruments. The blue boats in the harbor are iconic.",
          coordinates: { lat: 31.5085, lng: -9.7595 }
        },
        evening: {
          activity: "Sunset from the ramparts",
          description: "The ancient sea walls offer views of the crashing Atlantic and purple island.",
          location: "Essaouira Ramparts, Morocco",
          cost: "Free",
          duration: "1 hour",
          tip: "The sunset from the ramparts watching the crashing Atlantic waves is magical. The purple island (Ile de Mogador) sits on the horizon. Return to Marrakech after dark.",
          coordinates: { lat: 31.5085, lng: -9.7595 }
        }
      },
      {
        title: "Farewell Marrakech",
        morning: {
          activity: "Cooking class & market tour",
          description: "Shop for spices with a chef, then learn to make perfect couscous and pastilla.",
          location: "Cooking Class, Marrakech",
          cost: "400-600 MAD",
          duration: "3-4 hours",
          tip: "The market tour teaches you to identify real saffron from fake. Pastilla (sweet and savory pie) is the most impressive dish to master.",
          coordinates: { lat: 31.63, lng: -7.988 }
        },
        afternoon: {
          activity: "Final souk shopping",
          description: "Last chance for leather goods, lanterns, and spices — remember to bargain with a smile.",
          location: "Medina Souks, Marrakech",
          cost: "Budget for shopping",
          duration: "2-3 hours",
          tip: "By day 7, you'll know the medina well and understand fair prices. Leather goods, brass lanterns, and spices are the best value souvenirs. Bargain with good humor.",
          coordinates: { lat: 31.63, lng: -7.988 }
        },
        evening: {
          activity: "Farewell feast on the rooftop",
          description: "A final tagine under the stars with the call to prayer echoing across the red city.",
          location: "Riad Rooftop, Marrakech",
          cost: "300-600 MAD per person",
          duration: "2-3 hours",
          tip: "End where you began — on a rooftop with the call to prayer, the Atlas Mountains turning pink, and a final tagine. Dar Yacout or Nomad are perfect farewell spots.",
          coordinates: { lat: 31.6258, lng: -7.9891 }
        }
      }
    ]
  }
];

export default itineraries;
