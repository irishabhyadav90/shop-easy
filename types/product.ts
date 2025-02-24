interface DeliveryIcon {
    until: string;
    icon: string;
    label: string;
}

interface Stock {
    max: number;
    delivery_icons: DeliveryIcon[];
}

interface Sale {
    currency: string;
    regular_price: number;
    offer_price: number;
    offer_label: string | null;
    offer_type: string | null;
    member_price: number;
    subscription_price: number;
    vat_text: string;
}

interface Category {
    id: string;
    name: string;
    parent_id: string;
    slug: string;
}

interface Images {
    featured_image: string;
    gallery_images: {
        image: string;
        thumbnail: string;
        medium: string;
        full: string;
    }[];
}

interface Inventory {
    sku: string;
}

interface Label {
    label_text: string;
    sub_label_text: string | null;
    icon_type: string;
    color_code: string;
    active: boolean;
}

interface ProductBrand {
    name: string;
    logo?: string;
}
export interface Product {
    id: string;
    title: string;
    inventory: Inventory;
    images: Images;
    categories: Category[];
    slug: string;
    label: Label;
    pre_order: boolean;
    type: string;
    rating: string;
    stock: Stock;
    sale: Sale;
    brand: ProductBrand
}