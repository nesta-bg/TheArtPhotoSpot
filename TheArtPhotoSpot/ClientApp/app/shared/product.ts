//from postman http://localhost:54510/api/products to http://www.json2ts.com

export interface Product {
    id: number;
    category: string;
    size: string;
    price: number;
    title: string;
    artDescription: string;
    artDating: string;
    artId: string;
    artist: string;
    artistBirthDate: Date;
    artistDeathDate: Date;
    artistNationality: string;
} 