import heroImg from './RTHero.webp'
import img from '/placeholder.webp'
import Ganapatipule_Beach from './Ganapatipule_Beach.jpg'
import Jaigad_Fort from './Jaigad_Fort.webp'
import Thibaw_Palace from './thibaw_palace.jpg'
import Aare_Ware_Beach from './Aare_Ware_Beach.webp'
import Ratnadurg_Fort from './Ratnadurg_Fort.jpg'
import Bhatye_Beach from './Bhatye_Beach.webp'
import Velneshwar_Temple from './Velneshwar_Temple.jpg'
import Beach_Hopping from './Beach_Hopping.jpg'
import Explore_Forts from './Explore_Forts.jpg'
import Magical_Sunset from './Magical_Sunset.webp'
import Konkan_Cuisine from './Konkan_Cuisine.webp'
import Heritage_Sites from './Heritage_Sites.jpg'
import Village_Life from './Village_Life.jpg'

export const assets = {
    heroImg, img
}

export const attractions = [
  // Original 20 objects
  {
    id: 1,
    name: "Ganapatipule Beach",
    category: "Beaches",
    description:
      "Ganapatipule Beach is known for its clean shoreline, calm waves, and peaceful surroundings. The nearby Ganpatipule Temple adds a spiritual charm to the place. It is perfect for relaxing walks and beautiful sunset views.",
    image: [Ganapatipule_Beach],
    mostlyVisited: true
  },
  {
    id: 50,
    name: "Thibaw Palace",
    category: "Temples",
    description: 
        "Thibaw Palace is a historic royal residence known for its exquisite architecture and cultural heritage. Once home to the last king of Burma, the palace reflects intricate carvings, grand halls, and regal charm. Visitors can explore the palace grounds to experience a glimpse of royal life and historical significance.",
    image: [Thibaw_Palace],
    mostlyVisited: true
  },
  {
    id: 23,
    name: "Velneshwar Temple",
    category: "Temples",
    description:
      "Velneshwar Temple is an ancient Shiva temple located close to the seashore. The calm environment and rhythmic sound of waves create a peaceful spiritual experience. Visitors often combine temple visits with time at the nearby beach.",
    image: [Velneshwar_Temple],
    mostlyVisited: true
  },
  {
    id: 11,
    name: "Jaigad Fort",
    category: "Forts",
    description:
      "Jaigad Fort stands at the meeting point of the Shastri River and the Arabian Sea. The fort offers breathtaking panoramic views and reflects the region’s rich Maratha history. It is a favorite spot for photography lovers.",
    image: [Jaigad_Fort],
    mostlyVisited: true
  },
  {
    id: 3,
    name: "Bhatye Beach",
    category: "Beaches",
    description:
      "Bhatye Beach is a long and wide beach located close to Ratnagiri city. Its gentle waves and open shoreline make it ideal for family outings. The beach is especially beautiful during evening sunsets.",
    image: [Bhatye_Beach],
    mostlyVisited: false
  },
  {
    id: 22,
    name: "Pawas Ashram",
    category: "Temples",
    description:
      "Pawas Ashram is a peaceful spiritual retreat founded by Swami Swaroopanand. Surrounded by greenery and silence, it attracts visitors seeking calmness and inner peace. The ashram offers a refreshing break from busy city life.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 18,
    name: "Mandangad Fort",
    category: "Forts",
    description:
      "Mandangad Fort is a hill fort known for its trekking routes and scenic views. The fort offers a glimpse into ancient military architecture. It is ideal for adventure lovers and nature enthusiasts.",
    image: [heroImg],
    mostlyVisited: true
  },
  {
    id: 2,
    name: "Aare Ware Beach",
    category: "Beaches",
    description:
      "Aare Ware Beach consists of two beautiful beaches separated by a hill. The viewpoint above the beach offers stunning views of the coastline. It is a popular spot for sunset watching and photography.",
    image: [Aare_Ware_Beach],
    mostlyVisited: true
  },
  {
    id: 25,
    name: "Parshuram Temple",
    category: "Temples",
    description:
      "Parshuram Temple is located on a hilltop surrounded by lush greenery. The temple offers a calm spiritual atmosphere along with scenic views. It is believed to be associated with Lord Parshuram.",
    image: [heroImg],
    mostlyVisited: true
  },
  {
    id: 12,
    name: "Ratnadurg Fort",
    category: "Forts",
    description:
      "Ratnadurg Fort is an ancient fort surrounded by the Arabian Sea on three sides. The fort has strong walls and historic structures. Inside the fort, visitors can also find the Bhagwati Temple.",
    image: [Ratnadurg_Fort],
    mostlyVisited: false
  },
  {
    id: 4,
    name: "Velneshwar Beach",
    category: "Beaches",
    description:
      "Velneshwar Beach is known for its clean sand and calm waters. The beach offers a peaceful environment away from crowds. It is often visited along with the nearby Velneshwar Temple.",
    image: [Velneshwar_Temple],
    mostlyVisited: false
  },
  {
    id: 26,
    name: "Marleshwar Temple",
    category: "Temples",
    description:
      "Marleshwar Temple is a cave temple surrounded by dense forests. During the monsoon season, nearby waterfalls enhance its beauty. The temple offers a unique spiritual experience close to nature.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 15,
    name: "Vijaydurg Fort",
    category: "Forts",
    description:
      "Vijaydurg Fort is one of the strongest sea forts of the Maratha Empire. It played a major role in naval defense. The fort showcases impressive architecture and rich historical importance.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 6,
    name: "Ganeshgule Beach",
    category: "Beaches",
    description:
      "Ganeshgule Beach is a quiet and less crowded beach near Ganpatipule. The beach offers clean surroundings and a relaxing atmosphere. It is ideal for visitors looking for peace and solitude.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 29,
    name: "Shree Dev Ravalnath Temple",
    category: "Temples",
    description:
      "Shree Dev Ravalnath Temple is a traditional village temple with cultural importance. It reflects the strong faith of the local community. The peaceful surroundings add to its spiritual charm.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 14,
    name: "Bankot Fort",
    category: "Forts",
    description:
      "Bankot Fort is located near the Savitri River and offers scenic river views. The fort has historical significance and calm surroundings. It is a good spot for history lovers and photographers.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 7,
    name: "Purnagad Beach",
    category: "Beaches",
    description:
      "Purnagad Beach is a peaceful beach located near Purnagad Fort. The beach offers a natural and untouched environment. It is ideal for relaxing walks and enjoying coastal beauty.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 30,
    name: "Datta Mandir, Pawas",
    category: "Temples",
    description:
      "Datta Mandir in Pawas is a quiet spiritual place surrounded by greenery. Visitors often come here for meditation and peace. The calm environment makes it ideal for spiritual reflection.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 13,
    name: "Purnagad Fort",
    category: "Forts",
    description:
      "Purnagad Fort is a coastal fort reflecting the region’s naval history. The fort offers scenic sea views and historic remains. It is a peaceful place to explore history and nature together.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 9,
    name: "Anjarle Beach",
    category: "Beaches",
    description:
      "Anjarle Beach is clean, quiet, and less crowded compared to popular beaches. It offers calm waters and a relaxed atmosphere. The beach is perfect for nature lovers and peaceful travelers.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 28,
    name: "Chandika Mandir",
    category: "Temples",
    description:
      "Chandika Mandir is a small local temple known for its peaceful environment. It holds cultural significance for nearby villages. Visitors often experience a calm and spiritual atmosphere here.",
    image: [heroImg],
    mostlyVisited: false
  },

  // Additional 30 objects
  {
    id: 31,
    name: "Kunkeshwar Beach",
    category: "Beaches",
    description:
      "Kunkeshwar Beach is known for its long coastline and peaceful surroundings. The beach is clean and ideal for quiet walks. It is often visited along with the nearby Kunkeshwar Temple.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 32,
    name: "Kunkeshwar Temple",
    category: "Temples",
    description:
      "Kunkeshwar Temple is an ancient Shiva temple located near the Arabian Sea. The temple is surrounded by coconut trees and calm surroundings. It offers a serene spiritual experience.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 33,
    name: "Ambolgad Fort",
    category: "Forts",
    description:
      "Ambolgad Fort is a small coastal fort with scenic sea views. It reflects the historical importance of the Konkan coastline. The fort is peaceful and less crowded.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 34,
    name: "Guhagar Beach",
    category: "Beaches",
    description:
      "Guhagar Beach is a clean and wide beach famous for its white sand. The calm environment makes it suitable for family visits. The beach is ideal for relaxing evenings.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 35,
    name: "Hedvi Dashbhuja Temple",
    category: "Temples",
    description:
      "Hedvi Dashbhuja Temple is dedicated to Goddess Dashbhuja. The temple is located in a quiet village setting. It is known for its spiritual and cultural significance.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 36,
    name: "Yashwantgad Fort",
    category: "Forts",
    description:
      "Yashwantgad Fort is a hill fort surrounded by dense greenery. The fort offers scenic views and trekking opportunities. It is ideal for adventure seekers.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 37,
    name: "Velas Beach",
    category: "Beaches",
    description:
      "Velas Beach is famous for its clean sand and calm waters. The beach is also known for turtle conservation activities. It offers a peaceful natural experience.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 38,
    name: "Karhateshwar Temple",
    category: "Temples",
    description:
      "Karhateshwar Temple is an ancient Shiva temple located near the coast. The temple architecture is simple yet spiritually powerful. The surroundings are calm and quiet.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 39,
    name: "Sakhargad Fort",
    category: "Forts",
    description:
      "Sakhargad Fort is located on a hilltop offering panoramic views. The fort has historical importance and natural beauty. It is suitable for trekking lovers.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 40,
    name: "Kelshi Beach",
    category: "Beaches",
    description:
      "Kelshi Beach is a long and peaceful beach with soft sand. The calm waves make it ideal for relaxation. It is perfect for a quiet getaway.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 41,
    name: "Vyaghreshwar Temple",
    category: "Temples",
    description:
      "Vyaghreshwar Temple is a historic temple dedicated to Lord Shiva. The temple is located amidst greenery and silence. It offers a tranquil spiritual atmosphere.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 42,
    name: "Palgad Fort",
    category: "Forts",
    description:
      "Palgad Fort is a lesser-known fort surrounded by forests. It offers a peaceful trekking experience. The fort provides scenic views of the surrounding region.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 43,
    name: "Murud Beach",
    category: "Beaches",
    description:
      "Murud Beach is known for its clean shoreline and calm environment. The beach is suitable for peaceful walks. It is a good spot for sunset views.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 44,
    name: "Shri Keshavraj Temple",
    category: "Temples",
    description:
      "Shri Keshavraj Temple is a quiet spiritual place located in a forest area. The temple is known for its calm and natural surroundings. It attracts peaceful visitors.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 45,
    name: "Sumargad Fort",
    category: "Forts",
    description:
      "Sumargad Fort is a hill fort offering scenic valley views. It is surrounded by dense greenery. The fort is ideal for nature and trekking enthusiasts.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 46,
    name: "Aadgaon Beach",
    category: "Beaches",
    description:
      "Aadgaon Beach is a quiet and untouched beach. The beach offers clean surroundings and a peaceful atmosphere. It is ideal for solitude seekers.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 47,
    name: "Shivaji Maharaj Smarak",
    category: "Temples",
    description:
      "Shivaji Maharaj Smarak is a memorial honoring Chhatrapati Shivaji Maharaj. It reflects historical pride and cultural heritage. Visitors experience inspiration and respect.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 48,
    name: "Bhavangad Fort",
    category: "Forts",
    description:
      "Bhavangad Fort is a hill fort surrounded by dense forests. It offers peaceful trekking routes. The fort has historical significance.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 49,
    name: "Madban Beach",
    category: "Beaches",
    description:
      "Madban Beach is known for its rocky shoreline and scenic beauty. The beach is calm and less crowded. It is suitable for peaceful visits.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 51,
    name: "Shri Devi Bhavani Temple",
    category: "Temples",
    description:
      "Shri Devi Bhavani Temple is a local village temple with spiritual importance. The temple has a calm and devotional atmosphere. It is culturally significant.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 52,
    name: "Gopalgad Fort",
    category: "Forts",
    description:
      "Gopalgad Fort is a sea fort offering stunning ocean views. It has strong walls and historical structures. The fort is peaceful and scenic.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 53,
    name: "Kajir Bhati Beach",
    category: "Beaches",
    description:
      "Kajir Bhati Beach is a small and quiet beach. It is surrounded by greenery and natural beauty. The beach is ideal for peaceful relaxation.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 54,
    name: "Shri Ram Mandir",
    category: "Temples",
    description:
      "Shri Ram Mandir is a peaceful temple dedicated to Lord Ram. The temple offers a calm spiritual environment. It is visited by local devotees.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 55,
    name: "Mahipatgad Fort",
    category: "Forts",
    description:
      "Mahipatgad Fort is a hill fort known for its scenic trekking routes. The fort offers panoramic views of Konkan. It is rich in history.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 56,
    name: "Dabhol Beach",
    category: "Beaches",
    description:
      "Dabhol Beach is a peaceful beach near a fishing village. The beach offers clean surroundings and calm waters. It is ideal for relaxed visits.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 57,
    name: "Shri Datta Temple",
    category: "Temples",
    description:
      "Shri Datta Temple is a quiet place for meditation and devotion. The temple is surrounded by greenery. It offers a peaceful spiritual atmosphere.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 58,
    name: "Rasalgad Fort",
    category: "Forts",
    description:
      "Rasalgad Fort is a hill fort with strong historical importance. The fort offers scenic views and trekking paths. It attracts history lovers.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 59,
    name: "Ladghar Beach",
    category: "Beaches",
    description:
      "Ladghar Beach is also known as Tamas Teertha. The beach is clean and family-friendly. It is suitable for swimming and relaxing.",
    image: [heroImg],
    mostlyVisited: false
  },
  {
    id: 60,
    name: "Shri Ganesh Temple",
    category: "Temples",
    description:
      "Shri Ganesh Temple is a small and peaceful temple. The temple has a calm devotional environment. It is visited by locals regularly.",
    image: [heroImg],
    mostlyVisited: false
  }
];



export const activities = [
    {
        id: 1,
        name: "Beach Hopping",
        image: [Beach_Hopping],
        description: "Beach hopping in Ratnagiri is all about exploring a chain of untouched, serene beaches along the Konkan coast. From the spiritual calm of Ganpatipule Beach to the twin shores of Aare–Ware, each beach offers a unique vibe—golden sands, clear blue waters, and breathtaking sunsets. Ideal for long walks, photography, and peaceful relaxation, Ratnagiri’s beaches are perfect for travelers who love nature away from crowded tourist spots."
    },
    {
        id: 2,
        name: "Explore Historic Forts",
        image: [Explore_Forts],
        description: "Ratnagiri is home to magnificent sea forts that stand tall along the Arabian Sea, telling stories of Maratha pride and coastal defense. Jaigad Fort and Ratnadurg Fort offer breathtaking sea views, ancient architecture, and a glimpse into the region’s rich history. Walking through these forts is a journey through time, surrounded by cool sea breezes and dramatic coastal landscapes."
    },
    {
        id: 3,
        name: "Watch Magical Sunset",
        image: [Magical_Sunset],
        description: "Sunsets in Ratnagiri are truly magical, painting the sky with shades of orange, pink, and gold. Beaches like Ganpatipule and Aare–Ware provide the perfect setting to relax and watch the sun slowly dip into the sea. The peaceful atmosphere, gentle waves, and cool evening breeze make sunset watching an unforgettable experience for every traveler."
    },
    {
        id: 4,
        name: "Taste Authentic Konkan Cuisine",
        image: [Konkan_Cuisine],
        description: "Konkan cuisine is a flavorful blend of fresh seafood, aromatic spices, and traditional coastal recipes. From spicy fish curry and crispy fried pomfret to soothing sol kadhi and coconut-based curries, every meal reflects the rich culinary heritage of Ratnagiri. Tasting authentic Konkan food is not just a meal—it’s a cultural experience that every traveler must enjoy."
    },
    {
        id: 5,
        name: "Visit Spiritual & Heritage Sites",
        image: [Heritage_Sites],
        description: "Ratnagiri is deeply rooted in spirituality and history, offering serene temples and majestic heritage sites. The famous Ganpatipule Temple, historic forts like Ratnadurg, and royal landmarks such as Thibaw Palace showcase the region’s spiritual calm and royal past. Visiting these sites allows travelers to experience peace, devotion, and history all in one journey."
    },
    {
        id: 6,
        name: "Experience Village Life & Nature",
        image: [Village_Life],
        description: "Experience the true essence of Ratnagiri by immersing yourself in its peaceful village life and natural beauty. Surrounded by lush greenery, mango orchards, paddy fields, and gentle hill views, village life here offers a slow and refreshing escape from city chaos. Warm hospitality, simple living, and close connection with nature make this experience deeply relaxing and memorable."
    }
]

export const planTrip = [
    {
        id: 1,
        icon: "🚆",
        title: "How to Reach Ratnagiri",
        description: [
            "By Train: Ratnagiri is well connected via Konkan Railway from Mumbai, Pune, and Goa.",
            "By Road: Scenic road journeys via NH66 offer beautiful coastal views.",
            "By Air: Nearest airport is Ratnagiri Airport (limited flights); Mumbai Airport is the best alternative."
        ]
    },
    {
        id: 2,
        icon: "🗓️",
        title: "Best Time to Visit",
        description: [
            "October to March: Ideal for sightseeing, beaches, and festivals.",
            "June to September: Lush greenery and waterfalls (Monsoon lovers 🌧️).",
            "April to May: Mango season🥭(but warm weather).",
        ]
    },
    {
        id: 3,
        icon: "🏨",
        title: "Stay & Local Transport",
        description: [
            "Choose beachside stays or homestays for a local experience.",
            "Auto-rickshaws, buses, and taxis are available.",
            "Renting a bike or car is best for exploring nearby beaches and forts."
        ]
    }, 
    {
        id: 4,
        icon: "🍽️",
        title: "Food & Dining Tips",
        description: [
            "Try Malvani seafood, veg thalis, and Sol kadhi.",
            "Inform restaurants in advance if you prefer less spicy food.",
            "Many local eateries accept cash only."
        ]
    },
    {
        id: 5,
        icon: "⚠️",
        title: "Safety & Local Etiquette",
        description: [
            "Avoid swimming in rough sea conditions.",
            "Respect religious places and local customs.",
            "Follow local advice during monsoon travel."
        ]
    }
]
