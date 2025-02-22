import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from 'react-native-reanimated';
import { Product } from '@/types/product';
import styles from './styles';
import { useCartStore } from '@/store/cartStore';
import { AddToCartButton } from '@/components/common/AddToCartButton/AddToCartButton';


interface ProductCardProps {
    product: Product;
    onPress: (product: Product) => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const ProductCard = ({ product, onPress }: ProductCardProps) => {
    const addToCart = useCartStore(state => state.addToCart);
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }));

    const handlePressIn = () => {
        scale.value = withSpring(0.98);
    };

    const handlePressOut = () => {
        scale.value = withSpring(1);
    };

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <AnimatedPressable
            style={[styles.container, animatedStyle]}
            onPress={() => onPress(product)}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Image
                source={{ uri: product.images?.featured_image }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.content}>
                <Text style={styles.name} numberOfLines={2}>
                    {product.title}
                </Text>
                <Text style={styles.price}>
                    {product?.sale?.regular_price.toFixed(2)}
                </Text>
            </View>
            <AddToCartButton
                onPress={handleAddToCart}
                isSmall
            />
        </AnimatedPressable>
    );
};