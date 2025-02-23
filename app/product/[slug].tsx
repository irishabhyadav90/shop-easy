import { useLocalSearchParams } from 'expo-router';
import ProductDetailScreen from '@/screens/pdp';

export default function ProductDetailRoute() {
    const { slug } = useLocalSearchParams<{ slug: string }>();
    return <ProductDetailScreen slug={slug} />;
}