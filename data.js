/**
 * Germany Travel Brochure & Transport Plan - Data Store
 */

const GERMANY_DATA = {
  heroSlides: [
    {
      id: "bavaria",
      index: "01",
      name: "Bavaria",
      germanName: "Bayern",
      tagline: "Historic Castles & Alpine Peaks",
      headline: "Germany",
      subheadline: "Timeless traditions, fairy-tale castles, and unforgettable experiences.",
      description: "From King Ludwig II’s iconic Neuschwanstein Castle perched against the jagged Alps to Munich’s historic beer halls and the emerald waters of Lake Königssee.",
      accentTag: "Fairy-Tale Castles & Alps",
      badgeIcon: "castle",
      cardImage: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&w=1200&q=85",
      heroBg: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=2400&q=85",
      gradient: "linear-gradient(135deg, rgba(20, 24, 38, 0.75) 0%, rgba(15, 12, 28, 0.85) 100%)",
      highlights: ["Neuschwanstein Castle", "Munich Marienplatz", "Lake Königssee & Berchtesgaden", "Zugspitze Peak (2,962m)", "Rothenburg ob der Tauber"],
      bestTime: "May – October & Dec (Christkindlmarkt)",
      nearestHub: "München Hauptbahnhof",
      dTicketValid: true,
      scenicScore: 5
    },
    {
      id: "berlin",
      index: "02",
      name: "Berlin",
      germanName: "Berlin & Brandenburg",
      tagline: "Culture, History & Vibrant Modernity",
      headline: "Berlin",
      subheadline: "Monumental history, boundless creativity, and pulsating urban energy.",
      description: "A world capital where monumental 20th-century history intertwines with visionary architecture, UNESCO Museum Island, and Europe's most vibrant culinary and arts scenes.",
      accentTag: "Vibrant City & Heritage",
      badgeIcon: "landmark",
      cardImage: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1200&q=85",
      heroBg: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=2400&q=85",
      gradient: "linear-gradient(135deg, rgba(24, 20, 32, 0.75) 0%, rgba(10, 15, 30, 0.85) 100%)",
      highlights: ["Brandenburg Gate", "Museum Island (UNESCO)", "Reichstag Glass Dome", "East Side Gallery", "Sanssouci Palace (Potsdam)"],
      bestTime: "May – September (Warm open-air terraces)",
      nearestHub: "Berlin Hauptbahnhof",
      dTicketValid: true,
      scenicScore: 4
    },
    {
      id: "black-forest",
      index: "03",
      name: "Black Forest",
      germanName: "Schwarzwald",
      tagline: "Nature, Misty Trails & Thermal Spas",
      headline: "Schwarzwald",
      subheadline: "Deep evergreen canopies, whispering waterfalls, and timeless artisan hamlets.",
      description: "Immerse yourself in folklore and serene nature. Hike through sun-dappled fir forests, relax in Roman-Irish thermal baths at Baden-Baden, and take the legendary Schwarzwaldbahn rail.",
      accentTag: "Nature & Onsen Spas",
      badgeIcon: "trees",
      cardImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=85",
      heroBg: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=85",
      gradient: "linear-gradient(135deg, rgba(16, 30, 24, 0.75) 0%, rgba(10, 18, 16, 0.85) 100%)",
      highlights: ["Triberg Waterfalls", "Lake Titisee", "Baden-Baden Thermal Baths", "Schwarzwaldbahn Scenic Line", "Cuckoo Clock Workshops"],
      bestTime: "Year-Round (Hiking in summer, snow in winter)",
      nearestHub: "Freiburg (Breisgau) Hbf",
      dTicketValid: true,
      scenicScore: 5
    },
    {
      id: "rhine-valley",
      index: "04",
      name: "Rhine Gorge",
      germanName: "Mittelrheintal & Mosel",
      tagline: "Cliffside Castles & Terraced Vineyards",
      headline: "Rhine Valley",
      subheadline: "Steep slate vineyards, riverboats, and the world's densest cluster of medieval fortresses.",
      description: "The UNESCO Upper Middle Rhine Valley and twisting Moselle River feature dramatic cliff-top castles overlooking ancient vineyards that produce Germany's world-famous Riesling wines.",
      accentTag: "River Cruises & Castles",
      badgeIcon: "wine",
      cardImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85",
      heroBg: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=2400&q=85",
      gradient: "linear-gradient(135deg, rgba(28, 22, 18, 0.75) 0%, rgba(15, 12, 10, 0.85) 100%)",
      highlights: ["Burg Eltz Castle", "Marksburg Fortress", "Lorelei Rock & Legend", "Cochem Reichsburg", "KD Rhine River Steamers"],
      bestTime: "June – October (Wine harvest festivals)",
      nearestHub: "Koblenz Hbf & Mainz Hbf",
      dTicketValid: true,
      scenicScore: 5
    },
    {
      id: "hamburg",
      index: "05",
      name: "Hamburg",
      germanName: "Freie und Hansestadt Hamburg",
      tagline: "Canals, Maritime Charm & Grand Architecture",
      headline: "Hamburg",
      subheadline: "Maritime grandeur, historic brick canals, and cutting-edge waterfront culture.",
      description: "With more bridges than Venice and Amsterdam combined, Hamburg enchants with its red-brick UNESCO Speicherstadt, glistening Elbphilharmonie concert hall, and bustling harbor ferries.",
      accentTag: "Maritime & Architecture",
      badgeIcon: "anchor",
      cardImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=85",
      heroBg: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=2400&q=85",
      gradient: "linear-gradient(135deg, rgba(14, 24, 38, 0.75) 0%, rgba(8, 14, 24, 0.85) 100%)",
      highlights: ["Speicherstadt Warehouses", "Elbphilharmonie Plaza", "HADAG Harbor Ferries", "Miniatur Wunderland", "Planten un Blomen Park"],
      bestTime: "May – September (Long maritime evenings)",
      nearestHub: "Hamburg Hauptbahnhof",
      dTicketValid: true,
      scenicScore: 4
    }
  ],

  marqueeItems: [
    "Scenic High-Speed ICE Railway (300 km/h)",
    "Fairy-Tale Neuschwanstein Castle",
    "Deutschlandticket Unlimited Travel Pass",
    "Romantic Rhine River Gorge & Lorelei",
    "Bavarian Alpine Panoramas & Zugspitze",
    "UNESCO Speicherstadt Canals",
    "Historic Timbered Altstadt Towns",
    "Black Forest Cuckoo Clocks & Thermal Baths",
    "Authentic Bavarian Biergärten & Brezeln"
  ],

  transportModes: [
    {
      name: "ICE (Intercity-Express)",
      speed: "Up to 300 km/h (186 mph)",
      scope: "Long-distance & Cross-country",
      description: "The flagship high-speed train of Deutsche Bahn (DB). Connects major metropolitan hubs with ultra-smooth ride quality, onboard Bordrestaurant, free high-speed WiFi, and power outlets.",
      dTicket: "Excluded (Requires ICE ticket or German Rail Pass)",
      features: ["300 km/h peak speed", "Bordbistro dining", "Free DB Media Portal WiFi", "Quiet Zones (Ruhebereich)", "Seat reservation €5.20"],
      badgeClass: "badge-ice"
    },
    {
      name: "RE & RB (Regional-Express / Regionalbahn)",
      speed: "120 – 160 km/h (75 – 100 mph)",
      scope: "Inter-city, Rural & Scenic Valley Routes",
      description: "The backbone of regional German travel. Frequent double-decker coaches that wind through scenic river gorges, forests, and charming towns. Fantastic panoramic upper-deck views.",
      dTicket: "100% Free & Unlimited with Deutschlandticket!",
      features: ["Double-decker coaches", "Bicycle carriages", "Panoramic river views", "No reservation needed", "Included in D-Ticket"],
      badgeClass: "badge-re"
    },
    {
      name: "S-Bahn & U-Bahn / City Transit",
      speed: "40 – 80 km/h (25 – 50 mph)",
      scope: "Metropolitan Inner & Outer Rings",
      description: "S-Bahn (suburban commuter rail) and U-Bahn (underground metro), alongside trams and city buses. Precision-timed connections covering every corner of German cities.",
      dTicket: "100% Free & Unlimited with Deutschlandticket!",
      features: ["High frequency (every 3-10 min)", "Integrated transfer hubs", "City center direct access", "Includes Hamburg harbor ferries"],
      badgeClass: "badge-subway"
    },
    {
      name: "Scenic & Cogwheel Railways",
      speed: "30 – 70 km/h (Scenic mountain pace)",
      scope: "Alps, Harz Mountains, Rhine Gorge",
      description: "Historic steam locomotives and high-altitude mountain cogwheels like the Bavarian Zugspitze Railway and Harz Brockenbahn ascending to pristine alpine peaks.",
      dTicket: "Varies (Some standard lines included; cogwheels require alpine pass)",
      features: ["Steam locomotives available", "Climbs up to 2,962m elevation", "Spectacular mountain viaducts", "Photographer's dream"],
      badgeClass: "badge-scenic"
    }
  ],

  deutschlandTicketGuide: {
    name: "Deutschlandticket (D-Ticket / 49€-58€ Pass)",
    summary: "The single best travel pass in modern European tourism history: unlimited travel on all local and regional public transport across every single state in Germany.",
    cost: "€49 – €58 per calendar month (subscription model)",
    covered: [
      "All Regional-Express (RE) and Regionalbahn (RB) trains nationwide",
      "All S-Bahn (commuter trains) and U-Bahn (underground metros)",
      "All public streetcars, trams, and urban city buses",
      "Hamburg HADAG harbor ferries on the River Elbe",
      "Trips crossing into nearby border stations (e.g., Salzburg Hbf in Austria!)"
    ],
    notCovered: [
      "High-speed ICE (Intercity-Express) trains",
      "IC (Intercity) and EC (Eurocity) long-distance trains",
      "Private commercial coaches (FlixBus, FlixTrain)",
      "Tourist mountain cable cars (e.g., Zugspitze cable car)"
    ],
    touristTips: [
      "Buy via DB Navigator app, MVGO (Munich app), or RMV (Frankfurt app) using any international credit card.",
      "The ticket is a monthly subscription; if traveling for 1–2 weeks, simply cancel in the app right after purchase to prevent next month's renewal.",
      "Save your digital QR code to Apple Wallet / Google Wallet or keep DB Navigator offline mode enabled.",
      "Always carry your official passport/ID along with your ticket — conductors match names!"
    ]
  },

  scenicRoutes: [
    {
      id: "black-forest-railway",
      title: "The Black Forest Railway (Schwarzwaldbahn)",
      route: "Offenburg ⇄ Hausach ⇄ Triberg ⇄ Donaueschingen ⇄ Konstanz",
      duration: "2 hours 15 mins",
      highlights: "Climbs 650 meters, traverses 39 dark tunnels through fir-clad valleys, double-loop engineering marvel.",
      trainType: "Regional-Express (RE 2)",
      dTicket: "100% Covered by Deutschlandticket",
      scenicRating: "⭐⭐⭐⭐⭐",
      tip: "Sit on the right side when heading south for the most dramatic gorge panoramas near Triberg."
    },
    {
      id: "middle-rhine-valley",
      title: "The Middle Rhine Gorge Valley Line",
      route: "Koblenz ⇄ Boppard ⇄ St. Goar ⇄ Bingen ⇄ Mainz",
      duration: "55 mins",
      highlights: "Runs directly alongside the Rhine River, passing over 20 medieval clifftop castles and the mythical Lorelei Rock.",
      trainType: "Mittelrheinbahn (RB 26) / RE 2",
      dTicket: "100% Covered by Deutschlandticket",
      scenicRating: "⭐⭐⭐⭐⭐",
      tip: "Take the left-bank train (RB 26) southbound and sit on the left to watch riverboats and castles glide past your window."
    },
    {
      id: "bavarian-alps-mittenwald",
      title: "Bavarian Alpine & Karwendel Line",
      route: "München Hbf ⇄ Garmisch-Partenkirchen ⇄ Mittenwald ⇄ Innsbruck",
      duration: "1 hour 45 mins",
      highlights: "Spectacular approaches to the sheer rock faces of the Zugspitze and Karwendel alpine mountain ranges.",
      trainType: "Werdenfelsbahn (RB 6)",
      dTicket: "100% Covered to Mittenwald / Border",
      scenicRating: "⭐⭐⭐⭐⭐",
      tip: "Pair with the Zugspitzbahn cogwheel train in Garmisch to summit Germany's highest mountain peak."
    },
    {
      id: "harz-steam-railway",
      title: "Harz Narrow-Gauge Brocken Steam Railway",
      route: "Wernigerode ⇄ Drei Annen Hohe ⇄ Brocken Summit",
      duration: "1 hour 40 mins",
      highlights: "Authentic steam locomotive billowing smoke through dense spruce forests up to the mist-shrouded Brocken peak (1,141m).",
      trainType: "HSB Steam Locomotive",
      dTicket: "Special steam surcharge applies",
      scenicRating: "⭐⭐⭐⭐⭐",
      tip: "Stand on the open-air viewing platform between train carriages for raw engine sound and mountain breeze."
    }
  ],

  routePlannerMatrix: [
    {
      from: "Berlin Hbf",
      to: "München Hbf (Munich)",
      iceTime: "3h 55m",
      reTime: "8h 20m (2 transfers)",
      distance: "623 km",
      frequency: "Every 60 mins (ICE Sprinter)",
      icePrice: "From €29.99 (Sparpreis)",
      dTicketValid: "RE option 100% Free on D-Ticket; ICE requires separate ticket",
      scenicLevel: "High speed through Thuringian Forest tunnels & Bavarian plains",
      recommended: "ICE Sprinter for speed; stop at Nuremberg Hbf for gingerbread & castle!"
    },
    {
      from: "München Hbf",
      to: "Füssen (Neuschwanstein Castle)",
      iceTime: "N/A (Regional line)",
      reTime: "2h 04m (Direct)",
      distance: "132 km",
      frequency: "Every 60 mins",
      icePrice: "From €27.00",
      dTicketValid: "100% Free with Deutschlandticket!",
      scenicLevel: "Superb Bavarian rolling hills, dairy meadows, and alpine peaks",
      recommended: "Direct BRB (Bayerische Regiobahn). Bus 73/78 to castle from Füssen station is also D-Ticket valid!"
    },
    {
      from: "Frankfurt (Main) Hbf",
      to: "Heidelberg Hbf",
      iceTime: "48m (Direct ICE/EC)",
      reTime: "58m (Direct RE/S-Bahn)",
      distance: "88 km",
      frequency: "Every 20 mins",
      icePrice: "From €19.90",
      dTicketValid: "RE & S-Bahn 100% Free on D-Ticket!",
      scenicLevel: "Vineyards along the Bergstraße and the Neckar River valley",
      recommended: "Take the RE/S-Bahn directly — it's almost as fast as ICE and completely free on D-Ticket!"
    },
    {
      from: "Köln Hbf (Cologne)",
      to: "Koblenz & Rhine Gorge",
      iceTime: "46m",
      reTime: "55m (Direct RE 5 / RB 26)",
      distance: "92 km",
      frequency: "Every 30 mins",
      icePrice: "From €17.90",
      dTicketValid: "100% Free with Deutschlandticket!",
      scenicLevel: "Unbeatable! Follows the Rhine past Bonn, Siebengebirge hills, and vineyard cliffs",
      recommended: "Board the Mittelrheinbahn (RB 26) upper deck for panoramic castle photography."
    },
    {
      from: "Hamburg Hbf",
      to: "Berlin Hbf",
      iceTime: "1h 45m (Direct ICE)",
      reTime: "3h 40m (RE relay via Wittenberge)",
      distance: "288 km",
      frequency: "Every 30 mins",
      icePrice: "From €19.99 (Super Sparpreis)",
      dTicketValid: "RE 100% Free on D-Ticket; ICE ticket recommended for time savings",
      scenicLevel: "Gliding through the Northern German plain and Elbe biosphere reserve",
      recommended: "The 1h 45m ICE is one of Germany's smoothest flagship rail corridors."
    },
    {
      from: "München Hbf",
      to: "Berchtesgaden & Lake Königssee",
      iceTime: "N/A (Scenic branch line)",
      reTime: "2h 28m (Transfer at Freilassing)",
      distance: "155 km",
      frequency: "Every 60 mins",
      icePrice: "From €26.00",
      dTicketValid: "100% Free with Deutschlandticket! (Local RVO bus 841 to Königssee also included)",
      scenicLevel: "Emerald lake reflections, Watzmann mountain massif (2,713m)",
      recommended: "Board the electric wooden boat across Lake Königssee to the St. Bartholomä chapel."
    }
  ],

  ticketComparison: [
    {
      name: "Deutschlandticket",
      price: "€49 – €58 / month",
      bestFor: "Budget-conscious travelers, regional exploration, cities, day trips",
      validTrains: "RE, RB, S-Bahn, U-Bahn, Trams, City Buses, Harburg Ferries",
      iceIncluded: false,
      flexibility: "Unlimited rides nationwide, hop-on hop-off anytime",
      verdict: "Essential for 90% of local travel, castle hops, and scenic regional trains."
    },
    {
      name: "German Rail Pass (Eurail / DB Pass)",
      price: "From ~€175 (3-day flexi) to €350+",
      bestFor: "Fast long-distance travelers prioritizing high-speed ICE cross-country hops",
      validTrains: "ALL DB trains including high-speed ICE, IC, EC, and Regional",
      iceIncluded: true,
      flexibility: "Hop on any ICE without reservation; travel Berlin-Munich-Hamburg with ease",
      verdict: "Best if crossing entire country across 3+ cities in a few days."
    },
    {
      name: "DB Sparpreis / Super Sparpreis",
      price: "From €17.90 to €29.99 per leg (Advance purchase)",
      bestFor: "Specific long-distance ICE legs booked 2 to 8 weeks in advance",
      validTrains: "Specific booked ICE/IC train (Zugbindung)",
      iceIncluded: true,
      flexibility: "Tied to specific train time; changes cost extra",
      verdict: "Combine this for 1-2 major ICE hops + Deutschlandticket for local travel!"
    },
    {
      name: "Länder-Tickets (e.g. Bayern-Ticket)",
      price: "€29 for 1 person + €10 per extra person",
      bestFor: "Small groups (up to 5 people) traveling together within one state for a single day",
      validTrains: "All regional trains (RE, RB, S-Bahn, U-Bahn, Bus) within state borders",
      iceIncluded: false,
      flexibility: "Valid for 1 calendar day from 9:00 AM on weekdays, all day on weekends",
      verdict: "Great for single-day family or friend excursions if not holding D-Ticket."
    }
  ],

  itineraries: [
    {
      id: "itinerary-bavaria",
      title: "7-Day Imperial Castles & Alpine Wonders",
      route: "Munich → Füssen (Neuschwanstein) → Garmisch & Zugspitze → Berchtesgaden → Nuremberg",
      days: 7,
      transportPass: "Deutschlandticket (100% of this itinerary is covered on regional trains!)",
      overview: "Experience fairy-tale castles, glacial alpine lakes, medieval walled towns, and Bavarian hospitality.",
      schedule: [
        { day: "Day 1", title: "Munich: Palaces & Beer Gardens", details: "Explore Marienplatz, Residenz Palace, English Garden. Transit: S-Bahn / U-Bahn from airport." },
        { day: "Day 2", title: "Neuschwanstein & Hohenschwangau", details: "Direct BRB train to Füssen (2h), then local bus to King Ludwig’s fairy-tale castle. Back to Munich." },
        { day: "Day 3", title: "Garmisch-Partenkirchen & Zugspitze", details: "RB train to Garmisch (1h 20m). Take the cogwheel train to Germany’s highest point at 2,962m." },
        { day: "Day 4", title: "Emerald Waters of Lake Königssee", details: "Morning train to Berchtesgaden (2h 30m). Whisper boat ride across Königssee to St. Bartholomä." },
        { day: "Day 5", title: "Berchtesgaden Salt Mines & Kehlsteinhaus", details: "Historic salt mine wooden slides and alpine meadows." },
        { day: "Day 6", title: "Medieval Imperial Nuremberg", details: "RE train to Nuremberg (1h 10m). Tour the Imperial Castle (Kaiserburg) and Albrecht Dürer house." },
        { day: "Day 7", title: "Rothenburg ob der Tauber & Return", details: "Scenic local train relay to the world-famous medieval walled village of Rothenburg." }
      ]
    },
    {
      id: "itinerary-grand",
      title: "10-Day Grand Germany Rail Odyssey",
      route: "Hamburg → Berlin → Dresden → Rhine Gorge → Black Forest → Munich",
      days: 10,
      transportPass: "Hybrid: 2x DB Sparpreis ICE tickets + Deutschlandticket for all regions",
      overview: "The quintessential German grand tour from the Baltic maritime north to the Bavarian alpine south.",
      schedule: [
        { day: "Days 1–2", title: "Hamburg Hanseatic Port & Canals", details: "Speicherstadt brick warehouses, Elbphilharmonie concert hall, harbor cruise." },
        { day: "Days 3–4", title: "Berlin: Capital of History & Art", details: "1h 45m ICE to Berlin. Brandenburg Gate, Museum Island, Berlin Wall memorial." },
        { day: "Day 5", title: "Dresden: Florence on the Elbe", details: "2h train to Dresden. Zwinger Baroque Palace, Frauenkirche, scenic Elbe terrace." },
        { day: "Days 6–7", title: "The Romantic Rhine River & Castles", details: "ICE to Koblenz. Scenic Mittelrheinbahn train hopping between cliffside castles and vineyard wine tastings." },
        { day: "Day 8", title: "Black Forest & Baden-Baden Thermal Spas", details: "Scenic Schwarzwaldbahn rail to Triberg waterfalls, then relax in Caracalla thermal springs." },
        { day: "Days 9–10", title: "Bavaria & Neuschwanstein Finale", details: "Train to Munich. Day trip to Neuschwanstein Castle and farewell banquet at Augustiner-Bräu." }
      ]
    },
    {
      id: "itinerary-culture",
      title: "5-Day Cultural Heartbeat: Berlin & Saxon Gems",
      route: "Berlin → Potsdam (Sanssouci) → Leipzig → Dresden",
      days: 5,
      transportPass: "Deutschlandticket + optional ICE upgrade",
      overview: "A masterclass in music, architecture, philosophy, and German Enlightenment heritage.",
      schedule: [
        { day: "Day 1", title: "Berlin Modern Landmarks", details: "Reichstag glass dome, Tiergarten stroll, Checkpoint Charlie museum." },
        { day: "Day 2", title: "Potsdam Royal Palaces (Sanssouci)", details: "Take S-Bahn S7 direct to Potsdam (30m). Stroll Frederick the Great’s terraced vineyard palace." },
        { day: "Day 3", title: "Leipzig: City of Bach & Books", details: "1h 15m train to Leipzig. St. Thomas Church (Bach’s tomb), vibrant creative Spinnerei art center." },
        { day: "Day 4", title: "Dresden Baroque Splendor", details: "1h 10m train to Dresden. Green Vault royal treasures, Semperoper opera house." },
        { day: "Day 5", title: "Saxon Switzerland Bastei Bridge", details: "35m S-Bahn S1 to Kurort Rathen. Hike across the dramatic sandstone Bastei bridge high above the Elbe." }
      ]
    }
  ],

  practicalTips: [
    {
      category: "Train Navigation",
      title: "The DB Navigator App",
      content: "Download the official DB Navigator app. It shows live platform numbers (Gleis), real-time train formation (*Wagenreihung*) so you know exactly where your coach will stop, and platform changes."
    },
    {
      category: "Onboard Etiquette",
      title: "Quiet Zones (Ruhebereich)",
      content: "ICE trains have dedicated 'Ruhebereich' coaches where phone calls, loud music, and noisy conversations are strictly discouraged. Look for the little whisper icon on the car door!"
    },
    {
      category: "Local Transit",
      title: "Ticket Validation (Entwerter)",
      content: "Single paper tickets bought at metro stations must be stamped in the little red or yellow stamping machine (*Entwerter*) at the platform before boarding! Deutschlandticket QR codes do not require stamping."
    },
    {
      category: "Baggage & Storage",
      title: "Luggage Lockers (Schließfächer)",
      content: "Nearly every major Hauptbahnhof in Germany has secure automatic luggage lockers (*Schließfächer*) costing ~€3 to €6 for 24 hours. Perfect for exploring a town during a train layover."
    },
    {
      category: "Dining & Refreshment",
      title: "Bordbistro & Bringing Food",
      content: "German long-distance ICE trains feature full Bordbistros serving draft German beer, pretzels, currywurst, and coffee. You are also welcome to bring your own bakery treats and beverages onboard."
    },
    {
      category: "Sunday Quietness",
      title: "Ruhetag (Quiet Sundays)",
      content: "In Germany, Sundays are designated rest days (*Ruhetag*). Most retail stores, supermarkets, and pharmacies are closed. Train stations (*Hauptbahnhöfe*), however, have open bakeries, convenience marts, and restaurants."
    }
  ],

  faq: [
    {
      q: "Can international tourists buy the €49 Deutschlandticket?",
      a: "Yes! There is no requirement to be a German citizen or EU resident. You can purchase it digitally through the DB Navigator app, MVGO app, or RMV app using an international credit card. Just remember it's an auto-renewing monthly subscription, so simply tap cancel right after purchasing if you only need it for one calendar month."
    },
    {
      q: "Do I need to reserve seats on German trains?",
      a: "Seat reservations are optional on Deutsche Bahn trains. On high-speed ICE trains, a seat reservation costs ~€5.20 and is highly recommended during Friday afternoons, Sunday evenings, and peak summer holidays. On regional trains (RE, RB), reservations are generally not offered—you simply find any open seat."
    },
    {
      q: "How does the train compare to renting a car on the Autobahn?",
      a: "Germany's high-speed rail network connects city centers in a fraction of driving time (e.g., Berlin to Munich takes under 4 hours by ICE, compared to 6.5+ hours driving with traffic and parking hassles). Trains also let you relax, enjoy scenic views, drink local wines, and reduce your carbon footprint by up to 85%."
    },
    {
      q: "What is the best way to visit Neuschwanstein Castle from Munich?",
      a: "Take the direct BRB regional train from München Hbf to Füssen (2 hours). From outside Füssen station, hop on Bus 73 or 78 (10 mins) to the village of Hohenschwangau at the castle foot. Both the train and the connecting bus are 100% free with the Deutschlandticket!"
    }
  ]
};

