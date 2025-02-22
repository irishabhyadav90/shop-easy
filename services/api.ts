import Constants from 'expo-constants';
import axios from 'axios';

const baseURL = Constants.expoConfig?.extra?.BASE_URL || '';

const api = axios.create({
    baseURL,
    timeout: 10000
});

export const fetchProducts = async (skip = 0, take = 10) => {
    try {
        const response = await api.get('/v1/products');
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

