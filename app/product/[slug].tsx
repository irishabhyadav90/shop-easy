import { useLocalSearchParams } from 'expo-router';
import { ProductDetailScreen } from '@/screens/ProductDetailScreen';

export default function ProductDetailRoute() {
    const { slug } = useLocalSearchParams<{ slug: string }>();
    console.log("slug----", slug)
    return <ProductDetailScreen slug={slug} />;
}