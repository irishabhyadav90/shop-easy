import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProductList } from '@/components/product/ProductList';

const mockProducts = [
    {
        id: '1',
        title: 'Product 1',
        images: { featured_image: 'test1.jpg' },
        sale: { regular_price: 99.99, currency: 'AED' },
        slug: 'product-1'
    },
    {
        id: '2',
        title: 'Product 2',
        images: { featured_image: 'test2.jpg' },
        sale: { regular_price: 149.99, currency: 'AED' },
        slug: 'product-2'
    }
];

describe('ProductList', () => {
    it('renders loading state correctly', () => {
        const { getByTestId } = render(
            <ProductList
                products={[]}
                onProductPress={jest.fn()}
                isLoading={true}
            />
        );

        expect(getByTestId('loading-spinner')).toBeTruthy();
    });

    it('renders products correctly', () => {
        const { getAllByTestId } = render(
            <ProductList
                // @ts-ignore
                products={mockProducts}
                onProductPress={jest.fn()}
                isLoading={false}
            />
        );

        expect(getAllByTestId('product-card')).toHaveLength(2);
    });
});