import React from 'react';
import { FlatList, View } from 'react-native';
import { ProductCard } from '@/components/product/ProductCard';
import { Spinner } from '@/components/spinner';
import { colors } from '@/constants/theme';
import { Product } from '@/types/product';
import styles from './styles';

interface ProductListProps {
    products: Product[];
    onProductPress: (product: Product) => void;
    onEndReached?: () => void;
    isLoading?: boolean;
    isLoadingMore?: boolean;
}

export const ProductList = ({
    products,
    onProductPress,
    onEndReached,
    isLoading,
    isLoadingMore
}: ProductListProps) => {
    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <Spinner color={colors.primary} size="large" />
            </View>
        );
    }

    const renderItem = ({ item }: { item: Product }) => {
        return (
            <ProductCard
                product={item}
                onPress={() => onProductPress(item)}
            />
        )
    }

    const ListFooterComponent = () => {
        if (!isLoadingMore) return null;
        return <Spinner color={colors.primary} size="large" />
    }

    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.list}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
            ListFooterComponent={ListFooterComponent}
        />
    );
};