/**
 * UrbanNexus Data Store
 * In-memory & seedable state for Malls, Stores, Movies, Parking, Food Court,
 * Home Utility Services, Technicians, and Bookings.
 */

const initialData = {
  malls: [
    {
      id: "mall-1",
      name: "Phoenix Grand Galleria",
      tagline: "Ultra-Luxury Shopping, IMAX & Fine Dining",
      city: "Metro Central",
      address: "108 Outer Ring Road, Central Business District",
      timings: "10:00 AM - 11:30 PM",
      rating: 4.8,
      reviewsCount: 14200,
      totalFloors: 5,
      liveOccupancyPercent: 68,
      parkingTotal: 650,
      parkingAvailable: 198,
      evChargersTotal: 32,
      evChargersAvailable: 11,
      image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80",
      featuredDeals: "Flat 40% Weekend Luxe Sale + 20% on Food Court"
    },
    {
      id: "mall-2",
      name: "Orion SkyTech Mall",
      tagline: "Premier Electronics, 4DX Multiplex & Family Hub",
      city: "North Cyber City",
      address: "24 Innovation Parkway, Tech Park Zone",
      timings: "09:30 AM - 11:00 PM",
      rating: 4.7,
      reviewsCount: 11800,
      totalFloors: 4,
      liveOccupancyPercent: 74,
      parkingTotal: 520,
      parkingAvailable: 145,
      evChargersTotal: 24,
      evChargersAvailable: 7,
      image: "https://images.unsplash.com/photo-1567449303078-57ad995bd301?auto=format&fit=crop&w=1200&q=80",
      featuredDeals: "Tech Fest 2026: Up to $200 Trade-In Bonus"
    },
    {
      id: "mall-3",
      name: "Horizon Central Galleria",
      tagline: "High Street Fashion, Gourmet Avenue & Lifestyle",
      city: "South Riverfront",
      address: "55 Waterfront Boulevard, Marina Bay",
      timings: "10:00 AM - 11:00 PM",
      rating: 4.6,
      reviewsCount: 9500,
      totalFloors: 4,
      liveOccupancyPercent: 52,
      parkingTotal: 480,
      parkingAvailable: 230,
      evChargersTotal: 20,
      evChargersAvailable: 14,
      image: "https://images.unsplash.com/photo-1581404476143-fb31d742929f?auto=format&fit=crop&w=1200&q=80",
      featuredDeals: "Free 2-Hour Valet Parking with orders over $75"
    }
  ],

  stores: [
    {
      id: "store-1",
      mallId: "mall-1",
      name: "Zara Signature",
      category: "Fashion & Apparel",
      floor: "Level 1 - Central Atrium",
      contact: "+1 (555) 234-8901",
      rating: 4.7,
      offer: "End of Season Sale - Up to 50% Off",
      canDeliverHome: true,
      deliveryTimeHours: "2 - 3 hrs",
      products: [
        { id: "p1", name: "Structured Tailored Blazer", price: 129, category: "Apparel", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80" },
        { id: "p2", name: "Premium Knit Crewneck Sweater", price: 69, category: "Apparel", image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "store-2",
      mallId: "mall-1",
      name: "Apple Store Atrium",
      category: "Electronics & Gadgets",
      floor: "Ground Floor - East Wing",
      contact: "+1 (555) 432-1100",
      rating: 4.9,
      offer: "Complimentary Genius Bar Diagnostics Today",
      canDeliverHome: true,
      deliveryTimeHours: "90 mins",
      products: [
        { id: "p3", name: "AirPods Pro (2nd Gen)", price: 249, category: "Audio", image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80" },
        { id: "p4", name: "MagSafe Battery Pack", price: 99, category: "Accessories", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "store-3",
      mallId: "mall-1",
      name: "Sephora Luxe Beauty",
      category: "Beauty & Wellness",
      floor: "Level 2 - West Corridor",
      contact: "+1 (555) 987-6543",
      rating: 4.8,
      offer: "Buy 2 Skincare essentials, Get 1 Luxury sample free",
      canDeliverHome: true,
      deliveryTimeHours: "2 hrs",
      products: [
        { id: "p5", name: "Hydra-Luxe Botanical Night Cream", price: 78, category: "Skincare", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80" },
        { id: "p6", name: "Rosewater Radiance Facial Mist", price: 42, category: "Beauty", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "store-4",
      mallId: "mall-1",
      name: "Nike Flagship Superstore",
      category: "Sports & Fitness",
      floor: "Level 3 - Sports Arena",
      contact: "+1 (555) 555-8711",
      rating: 4.8,
      offer: "20% off all Running Footwear with Mall Pass",
      canDeliverHome: true,
      deliveryTimeHours: "2 hrs",
      products: [
        { id: "p7", name: "Air Zoom Pegasus 41 Pro", price: 140, category: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" },
        { id: "p8", name: "Dri-FIT Breathe Athletic Tee", price: 45, category: "Sportswear", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "store-5",
      mallId: "mall-2",
      name: "Sony Center & PlayStation Lounge",
      category: "Electronics & Gadgets",
      floor: "Level 1 - Cyber Hub",
      contact: "+1 (555) 765-4321",
      rating: 4.9,
      offer: "Bundle Deal: DualSense Wireless Controller + Game 15% Off",
      canDeliverHome: true,
      deliveryTimeHours: "90 mins",
      products: [
        { id: "p9", name: "WH-1000XM5 Noise Canceling Headphones", price: 348, category: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80" },
        { id: "p10", name: "DualSense Edge Wireless Controller", price: 199, category: "Gaming", image: "https://images.unsplash.com/photo-1606318801954-d46846092b2d?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "store-6",
      mallId: "mall-2",
      name: "Samsung Galaxy Experience Space",
      category: "Electronics & Gadgets",
      floor: "Ground Floor - Tech Plaza",
      contact: "+1 (555) 321-9988",
      rating: 4.7,
      offer: "Free Screen Care Plus with Galaxy Book4 Pro",
      canDeliverHome: true,
      deliveryTimeHours: "2 hrs",
      products: [
        { id: "p11", name: "Galaxy Watch Ultra GPS", price: 399, category: "Wearables", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "store-7",
      mallId: "mall-3",
      name: "Marks & Spencer London",
      category: "Fashion & Apparel",
      floor: "Level 1 - Grand Promenade",
      contact: "+1 (555) 443-8822",
      rating: 4.6,
      offer: "Flat 25% Off on Pure Linen & Autumn Wardrobe",
      canDeliverHome: true,
      deliveryTimeHours: "3 hrs",
      products: [
        { id: "p12", name: "Pure Cotton Regular Fit Oxford Shirt", price: 55, category: "Apparel", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80" }
      ]
    }
  ],

  movies: [
    {
      id: "mov-1",
      mallId: "mall-1",
      theatreName: "PVR Superplex IMAX & 4DX",
      title: "Interstellar: Chrono Horizon",
      genre: "Sci-Fi / Adventure",
      duration: "165 mins",
      rating: "PG-13",
      imdb: 9.1,
      poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
      showtimes: [
        { time: "01:30 PM", screen: "Audi 1 - IMAX 3D with Laser", price: 18, availableSeats: 42, totalSeats: 120 },
        { time: "05:00 PM", screen: "Audi 1 - IMAX 3D with Laser", price: 22, availableSeats: 18, totalSeats: 120 },
        { time: "08:45 PM", screen: "Audi 4 - Dolby Atmos Prime", price: 16, availableSeats: 56, totalSeats: 140 }
      ]
    },
    {
      id: "mov-2",
      mallId: "mall-1",
      theatreName: "PVR Superplex IMAX & 4DX",
      title: "Neon Velocity: Cyber Racers",
      genre: "Action / Thriller",
      duration: "135 mins",
      rating: "PG-13",
      imdb: 8.4,
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
      showtimes: [
        { time: "02:15 PM", screen: "Audi 2 - 4DX Dynamic Motion", price: 20, availableSeats: 24, totalSeats: 90 },
        { time: "06:30 PM", screen: "Audi 2 - 4DX Dynamic Motion", price: 20, availableSeats: 12, totalSeats: 90 },
        { time: "09:40 PM", screen: "Audi 3 - Gold Class Lounge", price: 28, availableSeats: 8, totalSeats: 40 }
      ]
    },
    {
      id: "mov-3",
      mallId: "mall-2",
      theatreName: "Cinepolis VIP TechCity",
      title: "The Phantom of Kyoto",
      genre: "Mystery / Neo-Noir",
      duration: "142 mins",
      rating: "R",
      imdb: 8.7,
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      showtimes: [
        { time: "03:00 PM", screen: "Screen 1 - VIP Recliner Suite", price: 24, availableSeats: 30, totalSeats: 60 },
        { time: "07:15 PM", screen: "Screen 1 - VIP Recliner Suite", price: 26, availableSeats: 14, totalSeats: 60 }
      ]
    }
  ],

  foodOutlets: [
    {
      id: "food-1",
      mallId: "mall-1",
      name: "Tuscan Artisan Pizzeria & Pasta",
      court: "Level 4 - Gourmet Food Terrace",
      stallNumber: "F-12",
      cuisine: "Italian / Woodfired",
      rating: 4.8,
      avgPrepTime: "15-20 mins",
      pickupBuzzerAvailable: true,
      items: [
        { id: "fd-1", name: "Truffle Burrata Margherita", price: 19.5, dietary: "Vegetarian", prepTime: "15 mins", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80" },
        { id: "fd-2", name: "Handmade Tagliatelle Bolognese", price: 21.0, dietary: "Non-Veg", prepTime: "18 mins", image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "food-2",
      mallId: "mall-1",
      name: "Tokyo Ramen & Bao House",
      court: "Level 4 - Asian Village",
      stallNumber: "F-08",
      cuisine: "Japanese / Asian Fusion",
      rating: 4.9,
      avgPrepTime: "12-15 mins",
      pickupBuzzerAvailable: true,
      items: [
        { id: "fd-3", name: "Rich Tonkotsu Black Garlic Ramen", price: 17.5, dietary: "Non-Veg", prepTime: "12 mins", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80" },
        { id: "fd-4", name: "Crispy Shiitake Truffle Dumplings (6 pcs)", price: 12.0, dietary: "Vegan", prepTime: "10 mins", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "food-3",
      mallId: "mall-1",
      name: "Blue Tokai Craft Coffee & Crepes",
      court: "Ground Floor Atrium",
      stallNumber: "K-02",
      cuisine: "Artisan Coffee / Bakery",
      rating: 4.7,
      avgPrepTime: "8-10 mins",
      pickupBuzzerAvailable: true,
      items: [
        { id: "fd-5", name: "Oat Cortado with Caramel Drizzle", price: 6.5, dietary: "Vegan", prepTime: "5 mins", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80" },
        { id: "fd-6", name: "Belgian Chocolate Hazelnut Crepe", price: 10.5, dietary: "Vegetarian", prepTime: "10 mins", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "food-4",
      mallId: "mall-2",
      name: "Smashburger & Craft Shakes",
      court: "Level 3 - Food Junction",
      stallNumber: "FJ-04",
      cuisine: "American Diner",
      rating: 4.6,
      avgPrepTime: "12-15 mins",
      pickupBuzzerAvailable: true,
      items: [
        { id: "fd-7", name: "Double Angus Truffle Melt Burger", price: 15.0, dietary: "Non-Veg", prepTime: "14 mins", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" },
        { id: "fd-8", name: "Parmesan Herb Crispy Fries", price: 6.0, dietary: "Vegetarian", prepTime: "8 mins", image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80" }
      ]
    }
  ],

  parkingZones: [
    {
      id: "park-b1-mall1",
      mallId: "mall-1",
      zoneName: "Basement B1 - Express / VIP",
      totalSlots: 150,
      occupiedSlots: 132,
      hourlyRate: 5.0,
      features: ["Closest to Atrium Elevators", "Automated Numberplate Sensor", "Valet Option"],
      hasEvCharging: false
    },
    {
      id: "park-b2-mall1",
      mallId: "mall-1",
      zoneName: "Basement B2 - Standard & Family Parking",
      totalSlots: 300,
      occupiedSlots: 210,
      hourlyRate: 3.5,
      features: ["Extra Wide Family Bays", "Direct Access to PVR Multiplex", "CCTV Surveillance 24/7"],
      hasEvCharging: false
    },
    {
      id: "park-ev-mall1",
      mallId: "mall-1",
      zoneName: "Basement B2 East - EV Fast-Charge Hub",
      totalSlots: 32,
      occupiedSlots: 21,
      hourlyRate: 6.5,
      features: ["60kW DC Fast Chargers", "Type 2 & CCS2 Compatible", "Complimentary 30-min idle grace"],
      hasEvCharging: true
    },
    {
      id: "park-b3-mall1",
      mallId: "mall-1",
      zoneName: "Basement B3 - Economy Long Stay",
      totalSlots: 168,
      occupiedSlots: 89,
      hourlyRate: 2.5,
      features: ["Lowest hourly pricing", "All-day discount cap at $15", "Well-lit and secure"],
      hasEvCharging: false
    },
    {
      id: "park-b1-mall2",
      mallId: "mall-2",
      zoneName: "Level P1 - SkyTech Smart Bay",
      totalSlots: 260,
      occupiedSlots: 195,
      hourlyRate: 4.0,
      features: ["Fast Sensor Ingress", "Near Electronics Hub", "App-guided space locator"],
      hasEvCharging: true
    }
  ],

  homeServices: [
    {
      id: "srv-ac",
      category: "AC & Refrigeration",
      title: "AC Deep Jet Foam Wash & Servicing",
      badge: "High Demand Season",
      icon: "Wind",
      rating: 4.9,
      reviewsCount: 3840,
      startingPrice: 49,
      estimatedMinutes: 60,
      warranty: "30-Day Cooling Warranty",
      description: "Thorough 360-degree high-pressure jet pump cleaning of indoor coil, condenser, blower, tray sanitization and gas leak test.",
      included: [
        "High pressure jet water & foam wash of indoor unit",
        "Outdoor unit anti-rust coil wash",
        "Drain tray and drain pipe anti-clog flush",
        "Gas level & refrigerant pressure check",
        "Temperature drop & amp consumption verification"
      ],
      pricingTiers: [
        { name: "Single Split AC Jet Wash", price: 49, time: "60 mins" },
        { name: "Dual Split AC Jet Wash (Save $15)", price: 83, time: "90 mins" },
        { name: "Master Package: AC Jet Wash + Gas Top-Up", price: 99, time: "105 mins" }
      ]
    },
    {
      id: "srv-electrician",
      category: "Electrical Solutions",
      title: "Rapid Master Electrician & Safety Inspection",
      badge: "Emergency Dispatch in 45m",
      icon: "Zap",
      rating: 4.85,
      reviewsCount: 4210,
      startingPrice: 35,
      estimatedMinutes: 45,
      warranty: "60-Day Workmanship Warranty",
      description: "Certified master electricians for power trips, short circuits, switchboard repairs, chandeliers, MCB breaker upgrades & appliance wiring.",
      included: [
        "Thorough voltage & earth leakage audit",
        "Diagnosis of short circuit or tripping issues",
        "Replacement of faulty switches / sockets / breakers",
        "Full safety check of distribution board"
      ],
      pricingTiers: [
        { name: "Diagnostic & Minor Fault Repair", price: 35, time: "45 mins" },
        { name: "Switchboard / MCB Replacement Service", price: 55, time: "60 mins" },
        { name: "Full Home Electrical Safety & Load Audit", price: 85, time: "90 mins" }
      ]
    },
    {
      id: "srv-plumbing",
      category: "Plumbing & Sanitary",
      title: "Emergency Plumbing & Leak Resolution",
      badge: "Water Damage Protection",
      icon: "Droplets",
      rating: 4.88,
      reviewsCount: 2950,
      startingPrice: 39,
      estimatedMinutes: 50,
      warranty: "45-Day Leak-Free Guarantee",
      description: "Specialist plumbers for burst pipes, tap leaks, concealed water seepage, toilet cistern malfunction, motorized pump repair & shower installs.",
      included: [
        "Acoustic leak detection for hidden pipes",
        "Replacement of washers, cartridges, or valves",
        "Sink & drain unblocking with high-flow auger",
        "Pressure optimization and valve recalibration"
      ],
      pricingTiers: [
        { name: "Tap / Faucet / Pipe Leak Repair", price: 39, time: "45 mins" },
        { name: "Drain De-clogging & Siphon Restoration", price: 49, time: "60 mins" },
        { name: "Toilet Cistern & Flush Valve Overhaul", price: 65, time: "75 mins" }
      ]
    },
    {
      id: "srv-cleaning",
      category: "Deep Cleaning & Sanitization",
      title: "Comprehensive Deep Home Sanitization",
      badge: "Eco-Friendly Safe Clean",
      icon: "Sparkles",
      rating: 4.92,
      reviewsCount: 5120,
      startingPrice: 89,
      estimatedMinutes: 180,
      warranty: "100% Satisfaction Re-clean Guarantee",
      description: "Hospital-grade deep cleaning of your entire apartment, including degreasing kitchen exhaust, bathroom scrubbing, floor buffing & dust extraction.",
      included: [
        "Heavy kitchen oil & grease degreasing",
        "Bathroom tile descaling and fixture polishing",
        "HEPA filter vacuuming of mattresses & rugs",
        "Balcony pressure wash & floor buffing"
      ],
      pricingTiers: [
        { name: "1 BHK / Studio Complete Deep Clean", price: 89, time: "150 mins" },
        { name: "2 BHK Full Apartment Deep Clean", price: 135, time: "210 mins" },
        { name: "3 BHK Deluxe Deep Clean & Sanitization", price: 185, time: "270 mins" }
      ]
    },
    {
      id: "srv-appliances",
      category: "Appliance Care",
      title: "Washing Machine & Refrigerator Repair",
      badge: "Genuine Spares Guaranteed",
      icon: "Wrench",
      rating: 4.79,
      reviewsCount: 2100,
      startingPrice: 45,
      estimatedMinutes: 60,
      warranty: "90-Day Parts & Service Guarantee",
      description: "Troubleshooting drum noise, drainage errors, compressor cooling failure, thermostat calibration and PCB logic board fixes.",
      included: [
        "OEM diagnostic protocol",
        "Motor and belt inspection",
        "PCB and electronic sensor calibration",
        "Safety grounding and insulation check"
      ],
      pricingTiers: [
        { name: "Diagnostic & Minor Calibration", price: 45, time: "50 mins" },
        { name: "Drum / Motor / Pump Mechanism Repair", price: 79, time: "90 mins" },
        { name: "Inverter Compressor / Circuit Repair", price: 110, time: "120 mins" }
      ]
    },
    {
      id: "srv-pest",
      category: "Pest Defense",
      title: "Odorless Pest & Termite Shield Protection",
      badge: "Child & Pet Friendly Chemicals",
      icon: "ShieldCheck",
      rating: 4.82,
      reviewsCount: 1670,
      startingPrice: 55,
      estimatedMinutes: 60,
      warranty: "90-Day Free Respray Guarantee",
      description: "Herbal odorless gel baiting for cockroaches, ant barriers, bedbug eradication, and sub-surface anti-termite chemical injection.",
      included: [
        "Food-safe odorless gel application in cupboards",
        "Drainage barrier spray against flying pests",
        "Baseboard perimeter chemical barrier",
        "Follow-up inspection voucher"
      ],
      pricingTiers: [
        { name: "Cockroach & Ant Defense (1-2 BHK)", price: 55, time: "60 mins" },
        { name: "Intense Bedbug Thermal & Chemical Treatment", price: 89, time: "90 mins" },
        { name: "Comprehensive Multi-Pest + Termite Shield", price: 130, time: "120 mins" }
      ]
    },
    {
      id: "srv-carpentry",
      category: "Carpentry & Fitments",
      title: "Master Carpenter & Modular Furniture Assembly",
      badge: "Laser Precision Leveling",
      icon: "Hammer",
      rating: 4.84,
      reviewsCount: 1420,
      startingPrice: 38,
      estimatedMinutes: 60,
      warranty: "30-Day Fitment Guarantee",
      description: "Door lock replacement, hinge repair, IKEA / modular cabinet assembly, curtain rod and wall shelf laser leveling installation.",
      included: [
        "Heavy-duty laser-guided wall anchoring",
        "Hardware alignment and lubrication",
        "Precision door lock & handle fitting",
        "Post-service cleanup of wood shavings"
      ],
      pricingTiers: [
        { name: "Lock / Hinge / Small Fitment Repair", price: 38, time: "45 mins" },
        { name: "Curtain Rods & 3x Wall Shelves Mount", price: 52, time: "60 mins" },
        { name: "Bed / Wardrobe Assembly & Alignment", price: 79, time: "90 mins" }
      ]
    }
  ],

  technicians: [
    {
      id: "tech-1",
      name: "David 'Dave' Vance",
      category: "AC & Refrigeration",
      specialty: "HVAC & Inverter Specialist",
      rating: 4.94,
      jobsCompleted: 1240,
      badge: "Diamond Master Technician",
      phone: "+1 (555) 019-4821",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      status: "On Job (Completing soon)"
    },
    {
      id: "tech-2",
      name: "Marcus Rodriguez",
      category: "Electrical Solutions",
      specialty: "Master Electrician & Smart Home",
      rating: 4.96,
      jobsCompleted: 1890,
      badge: "Police-Verified & Certified",
      phone: "+1 (555) 018-7729",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      status: "Available for Dispatch"
    },
    {
      id: "tech-3",
      name: "Vikram Malhotra",
      category: "Plumbing & Sanitary",
      specialty: "High-Pressure & Concealed Leaks",
      rating: 4.88,
      jobsCompleted: 1420,
      badge: "Master Plumber License #882",
      phone: "+1 (555) 012-9933",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      status: "Available for Dispatch"
    },
    {
      id: "tech-4",
      name: "Elena Rostova",
      category: "Deep Cleaning & Sanitization",
      specialty: "Eco-Hospital Grade Sanitization",
      rating: 4.98,
      jobsCompleted: 2150,
      badge: "Lead Cleaning Supervisor",
      phone: "+1 (555) 014-3321",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      status: "Available for Dispatch"
    },
    {
      id: "tech-5",
      name: "Carlos Gomez",
      category: "Appliance Care",
      specialty: "Appliance Circuitry & Motors",
      rating: 4.86,
      jobsCompleted: 980,
      badge: "OEM Factory Certified",
      phone: "+1 (555) 017-8890",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80",
      status: "Available for Dispatch"
    }
  ],

  bookings: [
    {
      id: "BK-8091",
      type: "home_service",
      serviceTitle: "AC Deep Jet Foam Wash & Servicing",
      category: "AC & Refrigeration",
      tier: "Dual Split AC Jet Wash",
      price: 83.0,
      scheduledDate: "Today",
      scheduledTime: "04:30 PM - 06:00 PM",
      status: "in_progress", // 'pending', 'assigned', 'en_route', 'in_progress', 'completed'
      statusLabel: "Service In Progress",
      progressPercent: 75,
      technician: {
        id: "tech-1",
        name: "David 'Dave' Vance",
        phone: "+1 (555) 019-4821",
        rating: 4.94,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
      },
      address: "Flat 402, Tower Emerald, Horizon Heights, South Riverfront",
      urgent: false,
      etaMinutes: 0,
      createdAt: new Date(Date.now() - 3600000).toISOString()
    },
    {
      id: "PK-4421",
      type: "mall_parking",
      mallId: "mall-1",
      mallName: "Phoenix Grand Galleria",
      zoneName: "Basement B2 East - EV Fast-Charge Hub",
      slotCode: "B2-E14",
      vehicleNumber: "KA-05-EV-9922",
      bookingDate: "Today",
      durationHours: 3,
      price: 19.5,
      status: "confirmed",
      statusLabel: "Active Parking Pass",
      qrData: "NEXUS-PARK-B2-E14-VALID",
      validUntil: "08:30 PM Today",
      createdAt: new Date(Date.now() - 5400000).toISOString()
    },
    {
      id: "MV-9912",
      type: "cinema_ticket",
      mallId: "mall-1",
      mallName: "Phoenix Grand Galleria",
      theatreName: "PVR Superplex IMAX & 4DX",
      movieTitle: "Interstellar: Chrono Horizon",
      screen: "Audi 1 - IMAX 3D with Laser",
      showtime: "08:45 PM Tonight",
      seats: ["G11", "G12"],
      seatCount: 2,
      price: 36.0,
      status: "confirmed",
      statusLabel: "Tickets Confirmed",
      qrData: "NEXUS-CINEMA-G11-G12-IMAX",
      createdAt: new Date(Date.now() - 7200000).toISOString()
    },
    {
      id: "DL-3304",
      type: "mall_to_home_delivery",
      mallId: "mall-1",
      mallName: "Phoenix Grand Galleria",
      storeName: "Nike Flagship Superstore",
      item: "Air Zoom Pegasus 41 Pro (Size US 10)",
      price: 140.0,
      deliveryOption: "Express Hyperlocal (Under 2 hrs)",
      deliveryFee: 4.99,
      status: "en_route",
      statusLabel: "Courier Out for Delivery",
      progressPercent: 60,
      courier: {
        name: "Samir K.",
        vehicle: "Electric Cargo Scooter #44"
      },
      deliveryAddress: "Flat 402, Tower Emerald, Horizon Heights",
      etaMinutes: 28,
      createdAt: new Date(Date.now() - 4200000).toISOString()
    }
  ],

  promotions: [
    {
      id: "promo-1",
      code: "NEXUSNEW",
      title: "Welcome to UrbanNexus",
      discount: "$15 OFF",
      minOrder: 50,
      description: "Valid across any Mall pre-order or Home Utility Service booking."
    },
    {
      id: "promo-2",
      code: "EVCHARGE50",
      title: "Green Mobility Discount",
      discount: "50% OFF Parking",
      minOrder: 10,
      description: "Special rate for EV Fast Charging bays at all partner malls."
    },
    {
      id: "promo-3",
      code: "SUMMERCLEAN",
      title: "Home Refresh Special",
      discount: "20% OFF",
      minOrder: 80,
      description: "Enjoy 20% discount on Deep Cleaning & AC Servicing packages."
    }
  ],

  wallet: {
    pointsBalance: 1250,
    pointValueUsd: 12.5,
    tier: "Nexus Gold VIP",
    cashbackPending: 4.8,
    transactions: [
      { id: "tx-1", desc: "Cashback from Nike Order #DL-3304", amount: "+70 pts", date: "Today" },
      { id: "tx-2", desc: "Redeemed for AC Jet Wash #BK-8091", amount: "-250 pts", date: "Today" },
      { id: "tx-3", desc: "IMAX Weekend Bonus #MV-9912", amount: "+50 pts", date: "Yesterday" }
    ]
  }
};

// Deep clone to keep fresh state in memory
let state = JSON.parse(JSON.stringify(initialData));

module.exports = {
  getMalls: () => state.malls,
  
  getMallById: (id) => state.malls.find(m => m.id === id) || state.malls[0],
  
  getStores: (mallId, category, search) => {
    let list = state.stores;
    if (mallId) list = list.filter(s => s.mallId === mallId);
    if (category && category !== "All") list = list.filter(s => s.category.toLowerCase().includes(category.toLowerCase()));
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.category.toLowerCase().includes(q) || 
        s.products.some(p => p.name.toLowerCase().includes(q))
      );
    }
    return list;
  },

  getMovies: (mallId) => {
    if (!mallId) return state.movies;
    return state.movies.filter(m => m.mallId === mallId);
  },

  bookMovie: (data) => {
    const bookingId = "MV-" + Math.floor(1000 + Math.random() * 9000);
    const movie = state.movies.find(m => m.id === data.movieId) || state.movies[0];
    const mall = state.malls.find(m => m.id === movie.mallId) || state.malls[0];

    const newBooking = {
      id: bookingId,
      type: "cinema_ticket",
      mallId: mall.id,
      mallName: mall.name,
      theatreName: movie.theatreName,
      movieTitle: movie.title,
      screen: data.screen || "Audi 1 - IMAX 3D with Laser",
      showtime: data.showtime || "08:45 PM Tonight",
      seats: data.seats && data.seats.length ? data.seats : ["F14", "F15"],
      seatCount: (data.seats && data.seats.length) || 2,
      price: (data.price || 18) * ((data.seats && data.seats.length) || 2),
      status: "confirmed",
      statusLabel: "Tickets Confirmed",
      qrData: `NEXUS-CINEMA-${bookingId}`,
      createdAt: new Date().toISOString()
    };

    state.bookings.unshift(newBooking);
    state.wallet.pointsBalance += 40;
    return newBooking;
  },

  getFoodOutlets: (mallId) => {
    if (!mallId) return state.foodOutlets;
    return state.foodOutlets.filter(f => f.mallId === mallId);
  },

  orderFood: (data) => {
    const orderId = "FD-" + Math.floor(1000 + Math.random() * 9000);
    const outlet = state.foodOutlets.find(f => f.id === data.outletId) || state.foodOutlets[0];
    const mall = state.malls.find(m => m.id === outlet.mallId) || state.malls[0];
    const buzzerToken = "BUZZ-" + Math.floor(10 + Math.random() * 90);

    const newBooking = {
      id: orderId,
      type: "food_order",
      mallId: mall.id,
      mallName: mall.name,
      outletName: outlet.name,
      stallNumber: outlet.stallNumber,
      items: data.items || [{ name: "Artisan Pizza", qty: 1, price: 19.5 }],
      price: data.totalPrice || 24.5,
      buzzerToken: buzzerToken,
      prepTime: outlet.avgPrepTime,
      pickupType: data.pickupType || "Express Self-Pickup",
      status: "preparing",
      statusLabel: "Kitchen Preparing (Token " + buzzerToken + ")",
      progressPercent: 40,
      createdAt: new Date().toISOString()
    };

    state.bookings.unshift(newBooking);
    state.wallet.pointsBalance += 25;
    return newBooking;
  },

  getParkingZones: (mallId) => {
    let zones = state.parkingZones;
    if (mallId) zones = zones.filter(z => z.mallId === mallId);
    return zones.map(z => ({
      ...z,
      availableSlots: Math.max(0, z.totalSlots - z.occupiedSlots),
      occupancyPercent: Math.round((z.occupiedSlots / z.totalSlots) * 100)
    }));
  },

  reserveParking: (data) => {
    const passId = "PK-" + Math.floor(1000 + Math.random() * 9000);
    const zone = state.parkingZones.find(z => z.id === data.zoneId) || state.parkingZones[0];
    const mall = state.malls.find(m => m.id === zone.mallId) || state.malls[0];

    // Decrement available slots
    zone.occupiedSlots = Math.min(zone.totalSlots, zone.occupiedSlots + 1);

    const slotPrefix = zone.hasEvCharging ? "EV-" : zone.zoneName.includes("B1") ? "B1-" : "B2-";
    const slotCode = slotPrefix + Math.floor(10 + Math.random() * 89);
    const duration = data.durationHours || 3;
    const price = Math.round(zone.hourlyRate * duration * 10) / 10;

    const newBooking = {
      id: passId,
      type: "mall_parking",
      mallId: mall.id,
      mallName: mall.name,
      zoneName: zone.zoneName,
      slotCode: slotCode,
      vehicleNumber: data.vehicleNumber || "ABC-1234",
      bookingDate: data.bookingDate || "Today",
      durationHours: duration,
      price: price,
      status: "confirmed",
      statusLabel: "Active Parking Pass",
      qrData: `NEXUS-PARK-${slotCode}-${passId}`,
      validUntil: "Valid for " + duration + " hrs",
      createdAt: new Date().toISOString()
    };

    state.bookings.unshift(newBooking);
    state.wallet.pointsBalance += 15;
    return newBooking;
  },

  getHomeServices: (category) => {
    if (!category || category === "All") return state.homeServices;
    return state.homeServices.filter(s => 
      s.category.toLowerCase().includes(category.toLowerCase()) || 
      s.title.toLowerCase().includes(category.toLowerCase())
    );
  },

  getHomeServiceById: (id) => state.homeServices.find(s => s.id === id),

  getTechnicians: () => state.technicians,

  bookHomeService: (data) => {
    const bookingId = "BK-" + Math.floor(1000 + Math.random() * 9000);
    const service = state.homeServices.find(s => s.id === data.serviceId) || state.homeServices[0];
    
    // Pick an available tech or match category
    const tech = state.technicians.find(t => t.category === service.category) || state.technicians[1];

    const isUrgent = !!data.urgent;
    const etaMinutes = isUrgent ? 35 : (data.scheduledTime ? null : 60);

    const newBooking = {
      id: bookingId,
      type: "home_service",
      serviceId: service.id,
      serviceTitle: service.title,
      category: service.category,
      tier: data.tierName || (service.pricingTiers[0] && service.pricingTiers[0].name) || "Standard Service",
      price: Number(data.price || service.startingPrice),
      scheduledDate: data.scheduledDate || "Today",
      scheduledTime: data.scheduledTime || (isUrgent ? "Immediate (Under 45m)" : "02:00 PM - 04:00 PM"),
      status: isUrgent ? "en_route" : "assigned",
      statusLabel: isUrgent ? "Emergency Dispatch - En Route" : "Technician Assigned & Confirmed",
      progressPercent: isUrgent ? 40 : 25,
      technician: {
        id: tech.id,
        name: tech.name,
        specialty: tech.specialty,
        phone: tech.phone,
        rating: tech.rating,
        badge: tech.badge,
        avatar: tech.avatar
      },
      address: data.address || "1204 Skyline Towers, Central District",
      customerName: data.customerName || "Alex Sterling",
      customerPhone: data.customerPhone || "+1 (555) 789-0123",
      urgent: isUrgent,
      etaMinutes: etaMinutes,
      notes: data.notes || "Please call upon arrival at gate.",
      createdAt: new Date().toISOString()
    };

    state.bookings.unshift(newBooking);
    state.wallet.pointsBalance += 50;
    return newBooking;
  },

  orderMallDelivery: (data) => {
    const orderId = "DL-" + Math.floor(1000 + Math.random() * 9000);
    const mall = state.malls.find(m => m.id === data.mallId) || state.malls[0];

    const newBooking = {
      id: orderId,
      type: "mall_to_home_delivery",
      mallId: mall.id,
      mallName: mall.name,
      storeName: data.storeName || "Zara Signature",
      item: data.itemName || "Selected Mall Merchandise",
      price: Number(data.itemPrice || 69.0),
      deliveryOption: data.deliveryOption || "Express Hyperlocal (Under 2 hrs)",
      deliveryFee: 4.99,
      status: "assigned",
      statusLabel: "Order Received at Store",
      progressPercent: 30,
      courier: {
        name: "Express Courier Fleet",
        vehicle: "Hyperlocal Dispatch"
      },
      deliveryAddress: data.address || "1204 Skyline Towers, Central District",
      etaMinutes: 75,
      createdAt: new Date().toISOString()
    };

    state.bookings.unshift(newBooking);
    state.wallet.pointsBalance += 35;
    return newBooking;
  },

  getBookings: (type) => {
    if (!type || type === "all") return state.bookings;
    return state.bookings.filter(b => b.type === type);
  },

  getBookingById: (id) => state.bookings.find(b => b.id === id),

  updateBookingStatus: (id, status, notes) => {
    const booking = state.bookings.find(b => b.id === id);
    if (!booking) return null;

    booking.status = status;
    if (notes) booking.statusNotes = notes;

    // Update labels and progress
    if (status === "assigned") {
      booking.statusLabel = "Technician Assigned";
      booking.progressPercent = 25;
    } else if (status === "en_route") {
      booking.statusLabel = "Professional En Route";
      booking.progressPercent = 50;
      booking.etaMinutes = 15;
    } else if (status === "in_progress") {
      booking.statusLabel = "Service In Progress";
      booking.progressPercent = 75;
      booking.etaMinutes = 0;
    } else if (status === "completed") {
      booking.statusLabel = "Service Completed & Verified";
      booking.progressPercent = 100;
    } else if (status === "cancelled") {
      booking.statusLabel = "Cancelled";
      booking.progressPercent = 0;
    }

    return booking;
  },

  getWallet: () => state.wallet,

  getPromotions: () => state.promotions,

  getStats: () => {
    const totalBookings = state.bookings.length;
    const activeBookings = state.bookings.filter(b => b.status !== "completed" && b.status !== "cancelled").length;
    const occupiedParking = state.parkingZones.reduce((acc, z) => acc + z.occupiedSlots, 0);
    const totalParking = state.parkingZones.reduce((acc, z) => acc + z.totalSlots, 0);

    return {
      totalBookings,
      activeBookings,
      homeServicesCompleted: 1420,
      activeTechniciansOnField: 18,
      parkingOccupancyRate: Math.round((occupiedParking / totalParking) * 100),
      parkingAvailableSlots: totalParking - occupiedParking,
      partnerMallsCount: state.malls.length,
      partnerStoresCount: state.stores.length,
      averageSatisfactionRating: 4.88,
      activeDiscounts: state.promotions.length
    };
  },

  resetToDefaults: () => {
    state = JSON.parse(JSON.stringify(initialData));
    return true;
  }
};
