
interface Images {
    featured_image: string;
    gallery_images: string[];
}

interface Inventory {
    sku: string;
}

interface Stock {
    max: number;
}

interface Sale {
    currency: string;
    regular_price: number;
}

export interface Product {
    id: string;
    title: string;
    inventory: Inventory;
    images: Images;
    slug: string;
    type: string;
    rating: string;
    stock: Stock;
    sale: Sale
}
export interface PaginationState<T> {
    data: T[];
    page: number;
    loading: boolean;
    hasMore: boolean;
};

export type PaginationAction<T> =
    | { type: 'FETCH_START' }
    | { type: 'FETCH_SUCCESS'; payload: T[] }
    | { type: 'FETCH_ERROR' }
    | { type: 'RESET' };