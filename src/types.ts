export interface IProduct {
    "id": number,
    "title": "string",
    "price": number,
    "description": "string",
    "category": "string",
    "image": "string",
    rating: {
        rate: number,
        count: number
    }
}


// export interface IProduct {
//     availabilityStatus: string;
//     brand: string;
//     category: string;
//     description: string;
//     dimensions: { width: number; height: number; depth: number };
//     discountPercentage: number;
//     id: number;
//     images: string[];
//     minimumOrderQuantity: number;
//     price: number;
//     rating: number;
//     returnPolicy: string;
//     reviews: {
//         comment: string;
//         date: string;
//         rating: number;
//         reviewerEmail: string;
//         reviewerName: string;
//     }[];
//     shippingInformation: string;
//     sku: string;
//     stock: number;
//     tags: string[];
//     thumbnail: string;
//     title: string;
//     warrantyInformation: string;
//     weight: number;
// }
//
// export interface IProducts {
//     limit: number;
//     products: IProduct[];
//     skip: number;
//     total: number;
// }