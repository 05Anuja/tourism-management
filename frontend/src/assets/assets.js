import heroImg from './RTHero.webp'
import img from '/placeholder.webp'
import Ganapatipule_Beach from './Ganapatipule_Beach.jpg'
import Jaigad_Fort from './Jaigad_Fort.webp'
import Thibaw_Palace from './thibaw_palace.jpg'
import Aare_Ware_Beach from './Aare_Ware_Beach.webp'
import Ratnadurg_Fort from './Ratnadurg_Fort.jpg'
import Bhatye_Beach from './Bhatye_Beach.webp'
import Velneshwar_Temple from './Velneshwar_Temple.jpg'

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