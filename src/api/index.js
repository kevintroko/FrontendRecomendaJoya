export default class API {
    constructor({host = "http://localhost:3000/", logger = console } = {}) {
        this.host = host;
        this.logger = logger;
    }

    getSuggestions({ category = "default_category", minPrice = 0, maxPrice = 10000} = {}) {
        this.logger.log("Query by", category, [minPrice, maxPrice]);
        return Promise.resolve([
            {
                "precio": 35664.0,
                "peso": 1.7,
                "subcategoria": "dama",
                "categoria": "anillo",
                "kilates": "14",
                "id": "1",
                "nombre": "anillo rosa"
            },
            {
                "precio": 100.50,
                "peso": 2.9,
                "subcategoria": "xv",
                "categoria": "argolla",
                "kilates": "10",
                "id": "2",
                "nombre": "anillo rosa"
            },
            {
                "precio": 1233.0,
                "peso": 1.5,
                "subcategoria": "caballero",
                "categoria": "anillo",
                "kilates": "18",
                "id": "3",
                "nombre": "anillo rosa"
            }
        ]);
    }
}