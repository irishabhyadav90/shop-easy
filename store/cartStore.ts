import { create } from 'zustand';
import { Product } from '@/types/product';

export interface CartItem {
    product: Product;
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],

    addToCart: (product, quantity = 1) => {
        set((state) => {
            const existingItem = state.items.find(
                item => item.product.id === product.id
            );

            if (existingItem) {
                return {
                    items: state.items.map(item =>
                        item.product.id === product.id
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    ),
                };
            }

            return {
                items: [...state.items, { product, quantity }],
            };
        });
    },

    removeFromCart: (productId) => {
        set((state) => ({
            items: state.items.filter(item => item.product.id !== productId),
        }));
    },

    updateQuantity: (productId, quantity) => {
        set((state) => ({
            items: state.items.map(item =>
                item.product.id === productId
                    ? { ...item, quantity }
                    : item
            ),
        }));
    },

    getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
    },

    getTotalPrice: () => {
        return get().items.reduce(
            (total, item) => total + (item.product.sale.regular_price * item.quantity),
            0
        );
    },
}));