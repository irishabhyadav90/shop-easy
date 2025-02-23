import Constants from 'expo-constants';
import axios from 'axios';

const baseURL = Constants.expoConfig?.extra?.BASE_URL || '';

const api = axios.create({
    baseURL,
    timeout: 30000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export const fetchProducts = async (skip = 0, take = 20) => {
    console.log("fetching skp", skip, "take", take)
    try {
        const response = await api.get(`/v1/products`, {
            params: {
                skip,
                take
            }
        });
        return response.data;
    } catch (error) {
        console.log("error", error);
    }
};

export const fetchProductDetail = async (slug: string) => {
    try {
        const response = await api.get(`/v1/product/${slug}`);
        return response.data.data;
    } catch (error) {
        console.log("error", error)
    }
};

export const searchProducts = async (term: string, skip: number = 0, take: number = 10) => {
    try {
        const response = await api.get(`/v2/search`, {
            params: {
                term,
                skip,
                take
            }
        });
        return response.data;
    } catch (error) {
        console.error('error:', error);
        throw error;
    }
};
