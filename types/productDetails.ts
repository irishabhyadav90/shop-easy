interface ProductImages {
    featured_image: string;
    gallery_images: {
        image: string;
        thumbnail: string;
        medium: string;
        full: string;
    }[];
}

interface ProductSale {
    currency: string;
    regular_price: number;
    offer_price: number;
    vat_text: string;
}

interface ProductStock {
    max: number;
    delivery_icons: {
        until: string;
        icon: string;
        label: string;
    }[];
}

interface ProductBrand {
    name: string;
    logo?: string;
}

export interface ProductDetail {
    id: string;
    title: string;
    images: ProductImages;
    sale: ProductSale;
    stock: ProductStock;
    brand: ProductBrand;
    description: string;
    short_description: string;
    rating: string;
    slug: string;
}