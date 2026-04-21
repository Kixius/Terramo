const emergencyContacts = {
  // --- Country-level defaults ---
  "Albania": { general: "112", police: "129", ambulance: "127", fire: "128" },
  "Andorra": { general: "112", police: "110", ambulance: "116", fire: "118" },
  "Armenia": { general: "112", police: "102", ambulance: "103", fire: "101" },
  "Australia": { general: "000", police: "000", ambulance: "000", fire: "000" },
  "Austria": { general: "112", police: "133", ambulance: "144", fire: "122" },
  "Azerbaijan": { general: "112", police: "102", ambulance: "103", fire: "101" },
  "Belarus": { general: "112", police: "102", ambulance: "103", fire: "101" },
  "Belgium": { general: "112", police: "101", ambulance: "100", fire: "100" },
  "Bosnia and Herzegovina": { general: "112", police: "122", ambulance: "124", fire: "123" },
  "Brazil": { general: "192", police: "190", ambulance: "192", fire: "193" },
  "Bulgaria": { general: "112", police: "166", ambulance: "150", fire: "160" },
  "Croatia": { general: "112", police: "192", ambulance: "194", fire: "193" },
  "Cyprus": { general: "112", police: "112", ambulance: "112", fire: "112" },
  "Czechia": { general: "112", police: "158", ambulance: "155", fire: "150" },
  "Denmark": { general: "112", police: "114", ambulance: "112", fire: "112" },
  "Estonia": { general: "112", police: "110", ambulance: "112", fire: "112" },
  "Finland": { general: "112", police: "112", ambulance: "112", fire: "112" },
  "France": { general: "112", police: "17", ambulance: "15", fire: "18" },
  "Georgia": { general: "112", police: "102", ambulance: "103", fire: "101" },
  "Germany": { general: "112", police: "110", ambulance: "112", fire: "112" },
  "Greece": { general: "112", police: "100", ambulance: "166", fire: "199" },
  "Hungary": { general: "112", police: "107", ambulance: "104", fire: "105" },
  "Iceland": { general: "112", police: "112", ambulance: "112", fire: "112" },
  "Ireland": { general: "112", police: "112", ambulance: "112", fire: "112" },
  "Italy": { general: "112", police: "113", ambulance: "118", fire: "115" },
  "Japan": { general: "110", police: "110", ambulance: "119", fire: "119" },
  "Kazakhstan": { general: "112", police: "102", ambulance: "103", fire: "101" },
  "Kosovo": { general: "112", police: "192", ambulance: "194", fire: "193" },
  "Latvia": { general: "112", police: "110", ambulance: "113", fire: "111" },
  "Liechtenstein": { general: "112", police: "117", ambulance: "144", fire: "118" },
  "Lithuania": { general: "112", police: "112", ambulance: "112", fire: "112" },
  "Luxembourg": { general: "112", police: "113", ambulance: "112", fire: "121" },
  "Malta": { general: "112", police: "112", ambulance: "112", fire: "112" },
  "Moldova": { general: "112", police: "902", ambulance: "903", fire: "901" },
  "Monaco": { general: "112", police: "17", ambulance: "15", fire: "18" },
  "Montenegro": { general: "112", police: "122", ambulance: "124", fire: "123" },
  "Morocco": { general: "19", police: "19", ambulance: "15", fire: "15" },
  "Netherlands": { general: "112", police: "0900-8844", ambulance: "112", fire: "112" },
  "North Macedonia": { general: "112", police: "192", ambulance: "194", fire: "193" },
  "Norway": { general: "112", police: "02800", ambulance: "113", fire: "110" },
  "Poland": { general: "112", police: "997", ambulance: "999", fire: "998" },
  "Portugal": { general: "112", police: "112", ambulance: "112", fire: "112" },
  "Romania": { general: "112", police: "955", ambulance: "961", fire: "981" },
  "Russia": { general: "112", police: "102", ambulance: "103", fire: "101" },
  "San Marino": { general: "113", police: "113", ambulance: "118", fire: "115" },
  "Serbia": { general: "112", police: "192", ambulance: "194", fire: "193" },
  "Slovakia": { general: "112", police: "158", ambulance: "155", fire: "150" },
  "Slovenia": { general: "112", police: "113", ambulance: "112", fire: "112" },
  "South Africa": { general: "10111", police: "10111", ambulance: "10177", fire: "10177" },
  "Spain": { general: "112", police: "091", ambulance: "061", fire: "080" },
  "Sweden": { general: "112", police: "114 14", ambulance: "112", fire: "112" },
  "Switzerland": { general: "112", police: "117", ambulance: "144", fire: "118" },
  "Thailand": { general: "1669", police: "191", ambulance: "1669", fire: "199" },
  "Turkey": { general: "112", police: "155", ambulance: "112", fire: "110" },
  "Ukraine": { general: "112", police: "102", ambulance: "103", fire: "101" },
  "United Arab Emirates": { general: "999", police: "999", ambulance: "998", fire: "997" },
  "United Kingdom": { general: "999", police: "999", ambulance: "999", fire: "999" },
  "United States": { general: "911", police: "911", ambulance: "911", fire: "911" },

  // --- City-level overrides with hospitals ---
  "Paris": {
    hospitals: [
      { name: "Hotel-Dieu (APHP)", phone: "+33 1 42 34 82 34", address: "1 Parvis Notre-Dame, 75004" },
      { name: "Hopital Cochin", phone: "+33 1 58 41 23 40", address: "27 Rue du Faubourg Saint-Jacques, 75014" }
    ],
    notes: "Look for pharmacies with a green cross — they are on every block and the pharmacien can advise on minor issues"
  },
  "London": {
    hospitals: [
      { name: "St Thomas' Hospital", phone: "+44 20 7188 7188", address: "Westminster Bridge Rd, SE1 7EH" },
      { name: "University College Hospital", phone: "+44 20 3456 7890", address: "235 Euston Rd, NW1 2BU" }
    ],
    notes: "A&E (Accident & Emergency) is free for everyone at NHS hospitals. Call 111 for non-emergency medical advice"
  },
  "Tokyo": {
    hospitals: [
      { name: "St. Luke's International Hospital", phone: "+81 3 3541 5151", address: "9-1 Akashi-cho, Chuo City" },
      { name: "Japan Red Cross Medical Center", phone: "+81 3 3400 1311", address: "4-1-22 Hiroo, Shibuya City" }
    ],
    notes: "AMDAS (03-5285-8181) provides 24/7 medical information in English. Many hospitals have international clinics"
  },
  "New York": {
    hospitals: [
      { name: "NYU Langone Health", phone: "+1 212 263 7300", address: "550 First Ave, NY 10016" },
      { name: "Mount Sinai Hospital", phone: "+1 212 241 6500", address: "1468 Madison Ave, NY 10029" }
    ],
    notes: "Emergency rooms must treat you regardless of insurance. Urgent care clinics are cheaper for non-life-threatening issues"
  },
  "Barcelona": {
    hospitals: [
      { name: "Hospital Clinic", phone: "+34 93 227 54 00", address: "Carrer de Villarroel, 170" },
      { name: "Hospital de la Santa Creu i Sant Pau", phone: "+34 93 291 90 00", address: "Carrer de Sant Quinti, 89" }
    ],
    notes: "The EU European Health Insurance Card (EHIC) gives you access to public healthcare at the same cost as locals"
  },
  "Rome": {
    hospitals: [
      { name: "Ospedale Santo Spirito", phone: "+39 06 6835 21", address: "Largo Santo Spirito, 3" },
      { name: "Policlinico Umberto I", phone: "+39 06 499 71", address: "Viale del Policlinico, 155" }
    ]
  },
  "Berlin": {
    hospitals: [
      { name: "Charite Universitatsmedizin", phone: "+49 30 450 50", address: "Chariteplatz 1, 10117" },
      { name: "Vivantes Klinikum", phone: "+49 30 130 220", address: "Arendsestr. 3, 13507" }
    ],
    notes: "The EHIC card works here. Apotheken (pharmacies) have a rotating night/weekend duty schedule posted on doors"
  },
  "Amsterdam": {
    hospitals: [
      { name: "Amsterdam UMC", phone: "+31 20 566 9111", address: "Meibergdreef 9, 1105 AZ" },
      { name: "OLVG", phone: "+31 20 599 9111", address: "Oosterpark 9, 1091 AC" }
    ]
  },
  "Vienna": {
    hospitals: [
      { name: "AKH (Allgemeines Krankenhaus)", phone: "+43 1 404 00", address: "Wahringer Gurtel 18-20, 1090" },
      { name: "SMZ-Ost (Donauspital)", phone: "+43 1 288 02", address: "Langobardenstr. 122, 1220" }
    ]
  },
  "Prague": {
    hospitals: [
      { name: "Nemocnice Na Homolce", phone: "+420 257 271 111", address: "Roentgenova 2, 15030" },
      { name: "General University Hospital", phone: "+420 224 961 111", address: "U Nemocnice 2, 12000" }
    ]
  },
  "Madrid": {
    hospitals: [
      { name: "Hospital Universitario La Paz", phone: "+34 91 727 70 00", address: "Paseo de la Castellana, 261" },
      { name: "Hospital Gregorio Maranon", phone: "+34 91 586 80 00", address: "Calle del Dr. Esquerdo, 46" }
    ]
  },
  "Lisbon": {
    hospitals: [
      { name: "Hospital de Santa Maria", phone: "+351 217 805 000", address: "Av. Prof. Egas Moniz, 1649-035" },
      { name: "Hospital de Sao Jose", phone: "+351 218 841 400", address: "Rua Jose Antnio Serrano, 1150-199" }
    ]
  },
  "Budapest": {
    hospitals: [
      { name: "Semmelweis University Clinic", phone: "+36 1 210 0280", address: "Ulloi ut 78/a, 1082" },
      { name: "Saint Istvan Hospital", phone: "+36 1 465 1800", address: "Nagyvarad ter 1, 1096" }
    ]
  },
  "Dubai": {
    hospitals: [
      { name: "Rashid Hospital", phone: "+971 4 219 2000", address: "Oud Metha Rd, Bur Dubai" },
      { name: "Mediclinic City Hospital", phone: "+971 4 348 6000", address: "Dubai Healthcare City" }
    ],
    notes: "Medical care is excellent but expensive — ensure you have travel insurance before arriving"
  },
  "Istanbul": {
    hospitals: [
      { name: "American Hospital", phone: "+90 212 311 2000", address: "Guzelbahce Sokak, Nisantasi" },
      { name: "Florence Nightingale Hospital", phone: "+90 212 224 9150", address: "Abide-i Hurriyet Cad. No:290" }
    ]
  },
  "Bangkok": {
    hospitals: [
      { name: "Bumrungrad International Hospital", phone: "+66 2 066 8888", address: "33 Sukhumvit 3, Khlong Toei" },
      { name: "Bangkok Hospital", phone: "+66 2 310 3100", address: "2 Soi Soonvijai 7, New Petchburi Rd" }
    ],
    notes: "Thailand has world-class private hospitals at a fraction of Western prices. Bumrungrad is popular with medical tourists"
  },
  "Marrakech": {
    hospitals: [
      { name: "Clinique du Souiss", phone: "+212 5244 33207", address: "Route de Casablanca, Souiss" },
      { name: "Polyclinique du Sud", phone: "+212 5244 46666", address: "Bd Allal El Fassi, Marrakech" }
    ],
    notes: "Private clinics are better equipped than public hospitals. Pharmacies are well-stocked and pharmacists speak French"
  },
  "Cape Town": {
    hospitals: [
      { name: "Groote Schuur Hospital", phone: "+27 21 404 6296", address: "Main Rd, Observatory, 7925" },
      { name: "Netcare Christiaan Barnard Hospital", phone: "+27 21 424 2100", address: "Cnr DF Malan & Longmarket St" }
    ],
    notes: "Private hospitals offer excellent care but require payment or insurance. Emergency: 082 911 for Netcare paramedics"
  },
  "Sydney": {
    hospitals: [
      { name: "Royal Prince Alfred Hospital", phone: "+61 2 9515 6111", address: "Missenden Rd, Camperdown NSW 2050" },
      { name: "St Vincent's Hospital", phone: "+61 2 8382 1111", address: "390 Victoria St, Darlinghurst NSW 2010" }
    ],
    notes: "Medicare reciprocal agreements cover some countries. Call 1800 022 222 for healthdirect advice"
  },
  "Rio de Janeiro": {
    hospitals: [
      { name: "Hospital Copa D'Or", phone: "+55 21 2545 3600", address: "Rua Figueiredo Magalhaes, 875, Copacabana" },
      { name: "Hospital Samaritano", phone: "+55 21 2266 9191", address: "Rua Sao Salvador 107, Laranjeiras" }
    ],
    notes: "SAMU ambulance service: 192. Private hospitals are recommended over public for tourists"
  },
  "Moscow": {
    hospitals: [
      { name: "European Medical Center", phone: "+7 495 933 66 55", address: "Spiridonyevsky Pereulok, 5/1" },
      { name: "GMS Clinic", phone: "+7 495 781 55 77", address: "1st Tverskaya-Yamskaya, 13" }
    ],
    notes: "Private international clinics have English-speaking staff. Public hospitals require payment for foreigners"
  },
  "Dublin": {
    hospitals: [
      { name: "St. James's Hospital", phone: "+353 1 410 3000", address: "James's St, Dublin 8" },
      { name: "Beaumont Hospital", phone: "+353 1 809 3000", address: "Beaumont Rd, Dublin 9" }
    ],
    notes: "The EU EHIC card covers public healthcare. Emergency departments can have long wait times"
  },
  "Edinburgh": {
    hospitals: [
      { name: "Royal Infirmary of Edinburgh", phone: "+44 131 536 1000", address: "51 Little France Cres, EH16 4SA" },
    ],
    notes: "NHS Scotland provides emergency care free of charge. Minor Injuries Units are faster for non-critical issues"
  },
  "Athens": {
    hospitals: [
      { name: "Evangelismos General Hospital", phone: "+30 210 720 1200", address: "Ipsilandou 45-47, Kolonaki" },
      { name: "Hygeia Hospital", phone: "+30 210 686 7000", address: "4 Erithrou Stavrou St, Marousi" }
    ],
    notes: "EKAB ambulance: 166. EU EHIC card accepted at public hospitals"
  },
  "Copenhagen": {
    hospitals: [
      { name: "Rigshospitalet", phone: "+45 35 45 35 45", address: "Blegdamsvej 9, 2100" },
      { name: "Bispebjerg Hospital", phone: "+45 38 63 63 63", address: "Bispebjerg Bakke 23, 2400" }
    ]
  },
  "Stockholm": {
    hospitals: [
      { name: "Karolinska University Hospital", phone: "+46 8 517 700 00", address: "Solnavagen 4, 171 64 Solna" },
      { name: "Sodersjukhuset", phone: "+46 8 616 100 00", address: "Sjukhusbacken 10, 118 83" }
    ]
  },
  "Helsinki": {
    hospitals: [
      { name: "Helsinki University Hospital (HUS)", phone: "+358 9 4711", address: "Haartmaninkatu 4, 00290" },
    ]
  },
  "Oslo": {
    hospitals: [
      { name: "Oslo University Hospital (Rikshospitalet)", phone: "+47 23 07 00 00", address: "Sognsvannsveien 20, 0372" },
      { name: "Aker Hospital", phone: "+47 23 07 80 00", address: "Trondheimsveien 235, 0514" }
    ]
  },
  "Warsaw": {
    hospitals: [
      { name: "Szpital Praski (Praga Hospital)", phone: "+48 22 619 66 66", address: "ul. Sierakowskiego 7, 03-713" },
      { name: "American Heart of Poland", phone: "+48 22 318 99 99", address: "ul. Starynkiewicza 6, 02-105" }
    ]
  },
  "Zurich": {
    hospitals: [
      { name: "Universitatsspital Zurich", phone: "+41 44 255 11 11", address: "Ramistrasse 100, 8091" },
      { name: "Hirslanden Klinik", phone: "+41 44 388 36 36", address: "Witellikerstrasse 40, 8029" }
    ],
    notes: "Medical care in Switzerland is excellent but very expensive — travel insurance is essential"
  },
  "Milan": {
    hospitals: [
      { name: "Ospedale Maggiore Policlinico", phone: "+39 02 5503 1", address: "Via Francesco Sforza 35, 20122" },
      { name: "San Raffaele Hospital", phone: "+39 02 2643 1", address: "Via Olgettina 60, 20132" }
    ]
  },
  "Munich": {
    hospitals: [
      { name: "Klinikum Grosshadern (LMU)", phone: "+49 89 7095 0", address: "Marchioninistr. 15, 81377" },
      { name: "Klinikum rechts der Isar (TUM)", phone: "+49 89 4140 0", address: "Ismaninger Str. 22, 81675" }
    ]
  },
  "Brussels": {
    hospitals: [
      { name: "Erasme Hospital", phone: "+32 2 555 31 11", address: "Route de Lennik 808, 1070" },
      { name: "UZ Brussel", phone: "+32 2 477 41 11", address: "Laarbeeklaan 101, 1090" }
    ],
    notes: "Belgium has excellent healthcare. The EHIC card is accepted at public hospitals"
  },
  "Hamburg": {
    hospitals: [
      { name: "UKE (Universitatsklinikum Eppendorf)", phone: "+49 40 7410 0", address: "Martinistr. 52, 20246" },
    ]
  },
  "Florence": {
    hospitals: [
      { name: "Ospedale di Santa Maria Nuova", phone: "+39 055 275 81", address: "Piazza di Santa Maria Nuova 1, 50122" },
      { name: "Careggi University Hospital", phone: "+39 055 794 111", address: "Largo Piero Palagi 1, 50139" }
    ]
  },
  "Naples": {
    hospitals: [
      { name: "Ospedale Cardarelli", phone: "+39 081 747 1111", address: "Via Antonio Cardarelli 9, 80131" },
    ]
  },
};

export default emergencyContacts;
