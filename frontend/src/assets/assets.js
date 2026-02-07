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
    {
        id: 1,
        name: "Ganapatipule Beach",
        description: "Ganpatipule Beach is one of the most serene and unspoiled beaches of Ratnagiri, known for its clean shoreline and breathtaking views of the Arabian Sea. The beach is famous for the Ganpatipule Temple, located just steps away, making it a perfect blend of spirituality and natural beauty. Visitors can enjoy peaceful walks, stunning sunsets, and a calm coastal atmosphere.",
        image: [Ganapatipule_Beach],
        mostlyVisited: true
    },
    {
        id: 2,
        name: 'Jaigad Fort',
        description: "Jaigad Fort stands proudly overlooking the Arabian Sea and the Shastri River, offering panoramic views of the Konkan coastline. This historic sea fort reflects the rich Maratha heritage and is a popular spot for history lovers and photographers. Its strong walls, ancient structures, and scenic surroundings make it an ideal destination for exploration and sightseeing.",
        image: [Jaigad_Fort],
        mostlyVisited: true
    },
    {
        id: 3,
        name: "Aare Ware Beach",
        description: "Aare Ware Beach is a hidden gem near Ratnagiri, known for its twin beaches and mesmerizing sunset views. Surrounded by hills and lush greenery, this beach offers a peaceful escape away from crowded tourist spots. The elevated viewpoints provide spectacular vistas of the coastline, making it a favorite location for nature lovers and photographers.",
        image: [Aare_Ware_Beach],
        mostlyVisited: true
    },
    {
        id: 4,
        name: "Thibaw Palace",
        description: "Thibaw Palace is a historical landmark that served as the residence of King Thibaw, the last ruler of Burma, during his exile. Built during the British era, the palace showcases colonial architecture and offers insight into Ratnagiri’s historical significance. Set amidst greenery, it is a calm and informative destination for history enthusiasts.",
        image: [Thibaw_Palace],
        mostlyVisited: true
    },
    {
        id: 5,
        name: 'Ratnadurg Fort',
        description: "Ratnadurg Fort is an ancient coastal fort located near Ratnagiri city and surrounded by the Arabian Sea on three sides. The fort played a crucial role during the Maratha period and is known for its strong fortifications and scenic views. Inside the fort, visitors can find the Bhagwati Temple, which adds spiritual significance to the site. The fort offers a perfect mix of history, spirituality, and natural beauty.",
        image: [Ratnadurg_Fort],
        mostlyVisited: true
    },
    {
        id: 6,
        name: 'Bhatye Beach',
        description: "Bhatye Beach is a long and wide beach located close to Ratnagiri city, making it a popular destination for families and tourists. The beach is known for its soft sand, gentle waves, and stunning sunset views. Visitors can enjoy leisure walks, horse rides, and local snacks sold by nearby vendors. Its accessibility and peaceful environment make it ideal for evening outings.",
        image: [Bhatye_Beach],
        mostlyVisited: true
    },
    {
        id: 7,
        name: 'Pawas (Swami Swaroopanand Ashram)',
        description: "Pawas is a serene village famous for the Swami Swaroopanand Ashram, a center for spiritual learning and meditation. Surrounded by greenery and silence, it offers a peaceful escape from city life. Many visitors come here to experience calmness, attend spiritual sessions, or simply relax in nature. Pawas is especially popular among devotees and those seeking inner peace.",
        image: [heroImg],
        mostlyVisited: false
    },
    {
        id: 8,
        name: 'Velneshwar Beach & Temple',
        description: "Velneshwar is a beautiful coastal village known for its clean beach and ancient Lord Shiva temple. The beach offers a tranquil environment with clear waters and soft sand, while the temple adds religious importance to the location. It is an ideal place for visitors who want to combine spirituality with a relaxing beach experience. The calm atmosphere makes it perfect for a peaceful getaway.",
        image: [Velneshwar_Temple],
        mostlyVisited: true
    }
]

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