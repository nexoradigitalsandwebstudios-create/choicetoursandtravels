// Every photo on the site, with its size and licence details.
//
// - src: path under /public. Files are optimised by `npm run images`.
// - width/height: the real pixel size of the optimised file. The build checks
//   these match, so aspect ratios are known up front and nothing shifts.
// - alt: describes the photo and names the place. Components pass alt=""
//   instead when a photo is purely decorative (behind a quote, for example).
// - focus: optional CSS object-position, e.g. "30% 50%", to keep the subject
//   in frame when the photo is cropped to fit a box.
// - credit: shown on the /credits page. Most licences require this.
//
// To add a photo: put the original in /image-sources, run `npm run images`,
// then add an entry here with the size the script prints.

export interface ImageCredit {
  author: string;
  source: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
  /** What we changed, which CC BY and CC BY-SA licences ask us to state */
  changes: string;
}

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  focus?: string;
  credit: ImageCredit;
}

export const images = {
  heroSunset: {
    src: "/images/hero/padmanabhaswamy-sunset.jpg",
    alt: "Sri Padmanabhaswamy Temple in Thiruvananthapuram at sunrise, with the temple tank and old houses in front",
    width: 1672,
    height: 941,
    // Supplied by the client. Keep a record of where it came from and its
    // licence; if it is not the client's own photo, add the credit here.
    focus: "45% 50%",
    credit: {
      author: "Choice Tours & Travels",
      source: "Supplied by Choice Tours & Travels",
      sourceUrl: "",
      license: "Used with permission",
      licenseUrl: "",
      changes: "Resized, compressed and colour-graded",
    },
  },
  vehicleDzire: {
    src: "/images/vehicles/dzire.jpg",
    alt: "A silver Maruti Suzuki Dzire sedan",
    width: 1000,
    height: 664,
    credit: {
      author: "Biswarup Ganguly",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Maruti_Suzuki_Dzire_VXi_VVT_-_Subcompact_Car_-_Kolkata_2018-01-17_7575.JPG",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  vehicleInnova: {
    src: "/images/vehicles/innova-crysta.jpg",
    alt: "A white Toyota Innova Crysta",
    width: 1000,
    height: 652,
    credit: {
      author: "Premnath Kudva",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Toyota_Innova_Crysta_2.4_Z_front_right.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  vehicleHycross: {
    src: "/images/vehicles/innova-hycross.jpg",
    // The photo shows the Toyota Innova Zenix, the overseas name for the
    // same car sold in India as the Innova Hycross.
    alt: "A white Toyota Innova Hycross",
    width: 1000,
    height: 750,
    credit: {
      author: "Ethan Llamas",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2024_Toyota_Zenix_2.0_Q_HEV_in_Platinum_Pearl_White_Mica,_07-13-2024.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  vehicleErtiga: {
    src: "/images/vehicles/ertiga.jpg",
    alt: "A white Maruti Suzuki Ertiga",
    width: 1000,
    height: 785,
    credit: {
      author: "Akashpbrahmavar",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Maruti_Suzuki_Ertiga(3).jpg",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0",
      changes: "Cropped, resized, compressed and colour-graded",
    },
  },
  vehicleRumion: {
    src: "/images/vehicles/toyota-rumion.jpg",
    alt: "A maroon Toyota Rumion",
    width: 1000,
    height: 601,
    // Keeps the front of the car, with its badge, in the 4:3 card.
    focus: "85% 50%",
    credit: {
      author: "عالم السيارات",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2022_Toyota_Rumion_Active_(Egypt)_front_view_04.png",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
      changes: "Resized, compressed to JPEG and colour-graded",
    },
  },
  vehicleUrbania: {
    src: "/images/vehicles/urbania.jpg",
    alt: "A dark grey Force Urbania van on a hill road",
    width: 1000,
    height: 590,
    // Keeps the whole van in view when the card crops the photo to 4:3.
    focus: "52% 50%",
    // Supplied by the client. It looks like a Force Motors promotional image:
    // TODO: confirm permission to use it, or replace with a photo of the
    // client's own Urbania. Upscaled 2x from a 502px original.
    credit: {
      author: "Choice Tours & Travels",
      source: "Supplied by Choice Tours & Travels",
      sourceUrl: "",
      license: "Used with permission",
      licenseUrl: "",
      changes: "Upscaled, sharpened, compressed and colour-graded",
    },
  },
  vehicleBus: {
    src: "/images/vehicles/tourist-bus.jpg",
    alt: "A white tourist bus on a hill road through the tea estates near Munnar",
    width: 1000,
    height: 750,
    credit: {
      author: "Shivamsp182",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:I%27m_taking_you_to_heaven.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Cropped, resized, compressed and colour-graded",
    },
  },
  destThirparappu: {
    src: "/images/destinations/thirparappu-falls.jpg",
    alt: "Thirparappu waterfalls on the Kodayar river, with visitors and gardens in front, Kanyakumari district",
    width: 1344,
    height: 1008,
    // Keeps the falls in view when the cards crop the photo to portrait.
    focus: "62% 35%",
    // Supplied by the client. TODO: confirm where it came from and that it may be used.
    // Upscaled from a 1080px original.
    credit: {
      author: "Choice Tours & Travels",
      source: "Supplied by Choice Tours & Travels",
      sourceUrl: "",
      license: "Used with permission",
      licenseUrl: "",
      changes: "Upscaled, sharpened and compressed",
    },
  },
  destNeyyar: {
    src: "/images/destinations/neyyar.jpg",
    alt: "The blue reservoir of Neyyar Dam with forested hills behind, near Thiruvananthapuram",
    width: 1132,
    height: 1600,
    credit: {
      author: "JVN5871",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Neyyar_dam_reservoir_1.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  templeAzhimala: {
    src: "/images/temples/azhimala-shiva.jpg",
    alt: "The giant Gangadhareshwara Shiva sculpture at Azhimala, above the rocks and the sea near Vizhinjam",
    width: 1280,
    height: 1600,
    focus: "50% 38%",
    // Supplied by the client. TODO: confirm where it came from and that it may be used.
    // Upscaled 2.5x from a 512px original.
    credit: {
      author: "Choice Tours & Travels",
      source: "Supplied by Choice Tours & Travels",
      sourceUrl: "",
      license: "Used with permission",
      licenseUrl: "",
      changes: "Upscaled, sharpened and compressed",
    },
  },
  doorDevotional: {
    src: "/images/home/door-devotional-meenakshi.jpg",
    alt: "A gopuram of Meenakshi Amman Temple in Madurai rising above the trees",
    width: 1344,
    height: 974,
    credit: {
      author: "Priya Singh",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/a-tall-tower-with-a-statue-on-top-of-it-euPcmfnuOe8",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      changes: "Resized, compressed and colour-graded",
    },
  },
  doorTours: {
    src: "/images/home/door-tours-backwaters.jpg",
    alt: "A houseboat on a palm-lined backwater canal in Kerala",
    width: 1344,
    height: 756,
    credit: {
      author: "Nature Photographer",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/brown-boat-on-body-of-water-near-green-trees-during-daytime-29ezCWtMtnM",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      changes: "Resized, compressed and colour-graded",
    },
  },
  jatayuStory: {
    src: "/images/home/jatayu-sculpture-head.jpg",
    alt: "The giant stone head of the Jatayu sculpture at Jatayu Earth's Center, Chadayamangalam",
    width: 1920,
    height: 1280,
    credit: {
      author: "BinoBose",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Jatayu_(1)_01.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  kathakaliBand: {
    src: "/images/home/kathakali-performer.jpg",
    alt: "A Kathakali performer in green make-up and a tall headdress, hands joined in prayer",
    width: 1920,
    height: 1080,
    credit: {
      author: "Divyanshi Verma",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/kathakali-performer-in-prayer-pose-h3SyJYsqYSo",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      changes: "Cropped, resized, compressed and colour-graded",
    },
  },
  destJatayu: {
    src: "/images/destinations/jatayu.jpg",
    alt: "The Jatayu bird sculpture on the rock summit at Jatayu Earth's Center, Kollam district",
    width: 1920,
    height: 1440,
    credit: {
      author: "Ariyavineeth",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Jatayu_earth_centre.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  destMunnar: {
    src: "/images/destinations/munnar.jpg",
    alt: "Tea plantations on rolling hills in Munnar under an orange evening sky",
    width: 1067,
    height: 1600,
    credit: {
      author: "Navi",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/tea-plantations-on-rolling-hills-nZniGS757fY",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      changes: "Resized, compressed and colour-graded",
    },
  },
  destThekkady: {
    src: "/images/destinations/thekkady.jpg",
    alt: "Periyar Lake at Thekkady, with old tree trunks standing in the water",
    width: 1728,
    height: 903,
    credit: {
      author: "Krishna Prasad T",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Periyar_Lake_(193226091).jpeg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Resized, compressed and colour-graded",
    },
  },
  destKovalam: {
    src: "/images/destinations/kovalam.jpg",
    alt: "The lighthouse above Kovalam beach at sunset",
    width: 1920,
    height: 1280,
    credit: {
      author: "mehul.antani",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:01KovalamBeach%26Kerala.jpg",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  destVarkala: {
    src: "/images/destinations/varkala-coast.jpg",
    alt: "The Varkala coastline from the clifftop: surf, a long beach, palm trees and cliffside cafes",
    width: 1200,
    height: 1600,
    // Keeps the beach and palms in view (not just sky) on the wide
    // destination-page banner.
    focus: "50% 68%",
    // Supplied by the client. TODO: confirm where it came from and that it may be used.
    // Upscaled from a 736px original.
    credit: {
      author: "Choice Tours & Travels",
      source: "Supplied by Choice Tours & Travels",
      sourceUrl: "",
      license: "Used with permission",
      licenseUrl: "",
      changes: "Upscaled, sharpened and compressed",
    },
  },
  destKappil: {
    src: "/images/destinations/kappil.jpg",
    alt: "Kappil beach, where the backwater lake meets the Arabian Sea",
    width: 1920,
    height: 1440,
    credit: {
      author: "Ikroos",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kappil_Beach.JPG",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
      changes: "Resized, compressed and colour-graded",
    },
  },
  destKanyakumari: {
    src: "/images/destinations/kanyakumari.jpg",
    alt: "Sunrise over the sea at Kanyakumari, with the Vivekananda Rock Memorial in silhouette",
    width: 1920,
    height: 1280,
    credit: {
      author: "Krishvino",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Sunrise_Kanyakumari_Indian_Ocean.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  destAlleppey: {
    src: "/images/destinations/alleppey.jpg",
    alt: "A houseboat on the Alleppey backwaters",
    width: 1728,
    height: 1149,
    credit: {
      author: "Paul Arps from The Netherlands",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Houseboat_on_Alleppey_backwaters_(Kerala,_India_2023)_(52703799587).jpg",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  templeKanyakumari: {
    src: "/images/temples/kanyakumari-bhagavathy.jpg",
    alt: "The Kanyakumari Bhagavathy Amman Temple on the shore at Kanyakumari",
    width: 1920,
    height: 1440,
    credit: {
      author: "Kainjock",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kanyakumari_Temple.JPG",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  templeSuchindram: {
    src: "/images/temples/suchindram.jpg",
    alt: "The temple tank and mandapam at Suchindram Thanumalayan Temple",
    width: 1200,
    height: 1600,
    credit: {
      author: "Vinayaraj",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Suchindram_Thanumalayan_Temple_2014_(33).jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  templeRameswaram: {
    src: "/images/temples/rameswaram.jpg",
    alt: "The long pillared corridor of Ramanathaswamy Temple, Rameswaram",
    width: 1063,
    height: 1600,
    credit: {
      author: "Jyothis",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Rameswaram_Temple_Corridor.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  templeMadurai: {
    src: "/images/temples/madurai-meenakshi.jpg",
    alt: "The temple tank and a gopuram of Meenakshi Amman Temple, Madurai",
    width: 1200,
    height: 1600,
    credit: {
      author: "Melissa Kumaresan",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/brown-concrete-building-with-waters-between-kFsWnzm-psY",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      changes: "Resized, compressed and colour-graded",
    },
  },
  templeGuruvayur: {
    src: "/images/temples/guruvayur.jpg",
    alt: "Guruvayur Sri Krishna Temple in Thrissur district, Kerala",
    width: 1536,
    height: 1126,
    credit: {
      author: "Ms Sarah Welch",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:009392022_Guruvayur_temple,_Kerala_057.jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Resized, compressed and colour-graded",
    },
  },
  pageDevotional: {
    src: "/images/pages/devotional-rameswaram-corridor.jpg",
    alt: "The thousand-pillar corridor of Ramanathaswamy Temple, Rameswaram",
    width: 1536,
    height: 1152,
    credit: {
      author: "rajaraman sundaram",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Thousand_pillar_corridor,Rameshwaram_temple,tamilnadu_-_panoramio.jpg",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  pageTours: {
    src: "/images/pages/tours-houseboats.jpg",
    alt: "Houseboats moored on the Alleppey backwaters in golden evening light",
    width: 1920,
    height: 1280,
    credit: {
      author: "Mohanrangaphotography",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Alleppey_Boat_houses.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  pageFleet: {
    src: "/images/pages/fleet-kerala-road.jpg",
    alt: "A car on a winding road through green hills in Kasaragod, Kerala",
    width: 1536,
    height: 1024,
    credit: {
      author: "Praswin Prakashan",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/a-car-driving-down-a-road-surrounded-by-trees-JSIhyHuTOy8",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      changes: "Resized, compressed and colour-graded",
    },
  },
  pageAbout: {
    src: "/images/pages/about-vagamon-hills.jpg",
    alt: "Misty hills and valleys near Vagamon, Kerala",
    width: 1920,
    height: 1278,
    credit: {
      author: "Avin CP",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/a-view-of-a-mountain-range-VSsgLjTIjko",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      changes: "Resized, compressed and colour-graded",
    },
  },
  galleryKathakali: {
    src: "/images/gallery/kathakali-pacha.jpg",
    alt: "A Kathakali performer in green pacha make-up and a tall golden crown",
    width: 1068,
    height: 1600,
    // Keeps the face and crown band in view in the big, nearly square gallery tile.
    focus: "50% 72%",
    // Supplied by the client. TODO: confirm where it came from and that it may be used.
    // Upscaled 2x from a 736px original.
    credit: {
      author: "Choice Tours & Travels",
      source: "Supplied by Choice Tours & Travels",
      sourceUrl: "",
      license: "Used with permission",
      licenseUrl: "",
      changes: "Upscaled, sharpened and compressed",
    },
  },
  galleryElephants: {
    src: "/images/gallery/temple-festival-elephants.jpg",
    alt: "Decorated elephants at a temple festival in Kerala",
    width: 1920,
    height: 1280,
    credit: {
      author: "Ajin K S",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/a-couple-of-elephants-standing-next-to-each-other-0tuzOfs-T3s",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      changes: "Resized, compressed and colour-graded",
    },
  },
  galleryMunnarMist: {
    src: "/images/gallery/munnar-misty-hills.jpg",
    alt: "Mist over the hills along the Munnar to Top Station road",
    width: 1920,
    height: 1220,
    credit: {
      author: "Navi",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/a-landscape-with-hills-and-trees-zVGUwPd8-lo",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      changes: "Resized, compressed and colour-graded",
    },
  },
  galleryVarkalaSunset: {
    src: "/images/gallery/varkala-cliff-sunset.jpg",
    alt: "Sunset over the Arabian Sea from the cliffs at Varkala",
    width: 1920,
    height: 1081,
    credit: {
      author: "Krissubh",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Varkala_Cliff_Sunset_by_KS.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  galleryCountryBoat: {
    src: "/images/gallery/backwater-country-boat.jpg",
    alt: "A wooden country boat moored on a Kerala backwater",
    width: 1536,
    height: 1024,
    credit: {
      author: "RANJIT MIRDHA | Alphawilds.IN",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/tropical-backwaters-with-a-wooden-boat-and-distant-houses-D3BVWixNZAw",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      changes: "Resized, compressed and colour-graded",
    },
  },
  galleryHouseboatSunset: {
    src: "/images/gallery/kumarakom-houseboat-sunset.jpg",
    alt: "A houseboat silhouetted against the sunset at Kumarakom",
    width: 1920,
    height: 1351,
    credit: {
      author: "Anil Jose Xavier",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/silhouette-of-boat-on-sea-during-sunset-Tp-kViKErbw",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      changes: "Resized, compressed and colour-graded",
    },
  },
  galleryLakshadeepam: {
    src: "/images/gallery/padmanabhaswamy-lakshadeepam.jpg",
    alt: "Sri Padmanabhaswamy Temple lit by lamps during the Lakshadeepam festival",
    width: 1057,
    height: 1600,
    credit: {
      author: "JVN5871",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Sree_Padmanabhaswamy_Temple_2.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  galleryHouseboatCanal: {
    src: "/images/gallery/alleppey-houseboat-canal.jpg",
    alt: "A houseboat on a canal in Alleppey",
    width: 1344,
    height: 896,
    credit: {
      author: "Saad Faruque from Bangalore, India",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Houseboat_in_Alleppey_(6917488382).jpg",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  galleryWaterfall: {
    src: "/images/gallery/athirappilly-waterfall.jpg",
    alt: "Athirappilly Falls in Thrissur district, seen from above",
    width: 1536,
    height: 864,
    credit: {
      author: "Rashi Raffi",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/aerial-photography-of-flowing-waterfall-pBx1VvMCL24",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      changes: "Resized, compressed and colour-graded",
    },
  },
  galleryPeriyarBoat: {
    src: "/images/gallery/periyar-lake-boat.jpg",
    alt: "A tour boat on Periyar Lake, Thekkady",
    width: 1728,
    height: 1152,
    credit: {
      author: "Yohannvt",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Periyar_Lake_12.JPG",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  gallerySuchindramGopuram: {
    src: "/images/gallery/suchindram-gopuram.jpg",
    alt: "The white gopuram of Suchindram Thanumalayan Temple",
    width: 1200,
    height: 1600,
    credit: {
      author: "Vinayaraj",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Suchindram_Thanumalayan_Temple_2014_(35).jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Resized, compressed and colour-graded",
    },
  },
  galleryMunnarTea: {
    src: "/images/gallery/munnar-tea-path.jpg",
    alt: "A path winding through the tea estates of Munnar, seen from above",
    width: 840,
    height: 1120,
    credit: {
      author: "Navi",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/photos/aerial-view-of-green-trees-and-river-vL0F-1-pruk",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      changes: "Resized, compressed and colour-graded",
    },
  },
} satisfies Record<string, SiteImage>;
