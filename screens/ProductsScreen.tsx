import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { useProducts } from '@/hooks/products/useProducts';
import { ProductList } from '@/components/product/ProductList';
import { Product } from '@/types/product';


export default function ProductsScreen() {
    const router = useRouter();
    const {
        products,
        isLoading,
        loadMore,
        hasMore,
        isLoadingMore,
        refresh
    } = useProducts();

    const handleProductPress = (product: Product) => {
        console.log("screen-slug", product.slug)
        router.push(`/product/${product.slug}`);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ProductList
                products={products}
                isLoading={isLoading}
                isLoadingMore={isLoadingMore}
                onEndReached={() => hasMore && loadMore}
                onProductPress={handleProductPress}
            />
        </View>
    );

}