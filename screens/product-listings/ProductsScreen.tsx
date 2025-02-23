import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { useProducts } from '@/hooks/products/useProducts';
import { ProductList } from '@/components/product/ProductList';
import { Product } from '@/types/product';
import { useSearch } from '@/hooks/products/useSearch';
import { SearchBar } from '@/components/search';

import { styles } from './styles';

const ProductsScreen = () => {
    const router = useRouter();
    const {
        searchTerm,
        setSearchTerm,
        searchResults,
        isLoading: isSearching
    } = useSearch();

    const {
        products,
        isLoading: isLoadingProducts,
        loadMore,
        hasMore,
        isLoadingMore
    } = useProducts();

    const handleProductPress = (product: Product) => {
        console.log("screen-slug", product.slug)
        router.push(`/product/${product.slug}`);
    };

    const displayData = searchTerm ? searchResults : products;
    const isLoading = searchTerm ? isSearching : isLoadingProducts;

    const handleEndReached = () => {
        if (!isLoading && hasMore) {
            loadMore();
        }
    };

    return (
        <View style={styles.container}>
            <SearchBar
                value={searchTerm}
                onChangeText={setSearchTerm}
                isLoading={isSearching}
            />
            <ProductList
                products={displayData}
                isLoading={isLoading}
                isLoadingMore={isLoadingMore}
                onEndReached={handleEndReached}
                onProductPress={handleProductPress}
            />
        </View>
    );

}

export default ProductsScreen;