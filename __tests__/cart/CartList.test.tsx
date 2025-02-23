import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CartList } from '@/components/cart/CartList';

const mockCartItems = [
    {
        product: {
            id: '1',
            title: 'Test Product',
            images: { featured_image: 'test.jpg' },
            sale: { regular_price: 99.99, currency: 'AED' },
            slug: 'test-product'
        },
    }
];

describe('CartList', () => {
    it('renders cart items correctly', () => {
        // @ts-ignore
        const { getByText } = render(<CartList items={mockCartItems} />);

        expect(getByText('Test Product')).toBeTruthy();
        expect(getByText('AED 99.99')).toBeTruthy();
    });
});