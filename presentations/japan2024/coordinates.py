from dataclasses import dataclass

@dataclass
class Location:
    name: str
    latitude: float
    longitude: float
    description: str = ""

class JapanTripLocations:
    LAX = Location("Los Angeles International Airport", 33.9416, -118.4085, "Starting point")
    HONOLULU = Location("Honolulu International Airport", 21.3187, -157.9225, "Stopover in Hawaii")
    TOKYO = Location("Tokyo", 35.6762, 139.6503, "First week in Japan")
    KYOTO = Location("Kyoto", 35.0116, 135.7681, "Second week in Japan")
    
    # Tokyo locations
    AKIHABARA = Location("Akihabara", 35.7022, 139.7741, "Electric Town, anime and manga culture")
    GHIBLI_MUSEUM = Location("Ghibli Museum", 35.6962, 139.5704, "Studio Ghibli museum in Mitaka")
    TEAMLAB_PLANETS = Location("teamLab Planets", 35.6649, 139.7968, "Digital art museum")
    MIRAIKAN = Location("Miraikan", 35.6190, 139.7758, "National Museum of Emerging Science and Innovation")
    POKEMON_CENTER = Location("Pokémon Center Mega Tokyo", 35.7294, 139.7181, "Largest Pokémon Center in Tokyo")
    
    # Kyoto locations
    FUSHIMI_INARI = Location("Fushimi Inari Shrine", 34.9671, 135.7727, "Famous for thousands of torii gates")
    KINKAKUJI = Location("Kinkaku-ji (Golden Pavilion)", 35.0394, 135.7292, "Zen temple with golden pavilion")
    ARASHIYAMA = Location("Arashiyama Bamboo Grove", 35.0170, 135.6710, "Famous bamboo forest")
    MANGA_MUSEUM = Location("Kyoto International Manga Museum", 35.0113, 135.7594, "Manga culture and history")
    NIJO_CASTLE = Location("Nijo Castle", 35.0142, 135.7480, "UNESCO World Heritage site, former shogun residence")

    @classmethod
    def get_all_locations(cls) -> list[Location]:
        return [value for name, value in vars(cls).items() if isinstance(value, Location)]

    @classmethod
    def get_main_route(cls) -> list[Location]:
        return [cls.LAX, cls.HONOLULU, cls.TOKYO, cls.KYOTO, cls.LAX]

    @classmethod
    def get_tokyo_locations(cls) -> list[Location]:
        return [cls.TOKYO, cls.AKIHABARA, cls.GHIBLI_MUSEUM, cls.TEAMLAB_PLANETS, cls.MIRAIKAN, cls.POKEMON_CENTER]

    @classmethod
    def get_kyoto_locations(cls) -> list[Location]:
        return [cls.KYOTO, cls.FUSHIMI_INARI, cls.KINKAKUJI, cls.ARASHIYAMA, cls.MANGA_MUSEUM, cls.NIJO_CASTLE]