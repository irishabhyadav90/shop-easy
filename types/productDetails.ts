import { Product } from "./product";
export interface ProductDetail extends Product {
    description: string;
    short_description: string;
}