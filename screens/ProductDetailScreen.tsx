import { useProductDetail } from '@/hooks/products/useProductDetail';
import { ProductDetail } from '@/components/product/ProductDetails';
import { Spinner } from '@/components/spinner';
import { colors } from '@/constants/theme';
import { ErrorView } from '@/components/common/ErrorView/ErrorView';

export const ProductDetailScreen = ({ slug }: { slug: string }) => {
    const {
        data: product,
        isLoading,
        error,
        refetch
    } = useProductDetail(slug);

    if (isLoading) {
        return <Spinner color={colors.primary} size="large" />
    }

    if (error || !product) {
        return (
            <ErrorView
                message="Failed to load product details"
                onRetry={refetch}
            />
        );
    }

    return <ProductDetail product={product.product_details} />;
};