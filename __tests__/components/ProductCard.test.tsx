import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProductCard } from '@/components/product/ProductCard';

const mockProduct = {
    id: '1',
    title: 'Test Product',
    images: {
        featured_image: 'test.jpg'
    },
    sale: {
        regular_price: 99.99
    },
    slug: 'test-product'
};

describe('ProductCard', () => {
    it('renders correctly', () => {
        const onPress = jest.fn();
        // @ts-ignore
        const { getByText } = render(<ProductCard product={mockProduct} onPress={onPress} />);

        expect(getByText('Test Product')).toBeTruthy();
        expect(getByText('99.99')).toBeTruthy();
    });

    it('calls onPress when pressed', () => {
        const onPress = jest.fn();
        // @ts-ignore
        const { getByTestId } = render(<ProductCard product={mockProduct} onPress={onPress} />);

        fireEvent.press(getByTestId('product-card'));
        expect(onPress).toHaveBeenCalledWith(mockProduct);
    });
});