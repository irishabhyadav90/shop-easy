import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import type { ProductDetail as ProductDetailInterface } from '@/types/productDetails';
import { ImageGallery } from '../ImageGallery';
import { styles } from './styles';
import { parseDescription } from '@/utils/descriptionParser';
import { AddToCartButton } from '@/components/common/AddToCartButton/AddToCartButton';
import { useCartStore } from '@/store/cartStore';

interface ProductDetailProps {
    product: ProductDetailInterface;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
    const addToCart = useCartStore(state => state.addToCart);

    const formattedDescription = parseDescription(product.description);

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <ScrollView style={styles.container}>
            <ImageGallery
                featured_image={product.images.featured_image}
                gallery_images={product.images.gallery_images}
            />

            <View style={styles.content}>
                {/* Brand */}
                <Animated.View
                    entering={FadeInDown.delay(200)}
                    style={styles.brandContainer}
                >
                    <Text style={styles.brandName}>{product?.brand?.name}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>⭐ {product.rating}</Text>
                    </View>
                </Animated.View>

                {/* Title */}
                <Animated.Text
                    entering={FadeInDown.delay(300)}
                    style={styles.title}
                >
                    {product.title}
                </Animated.Text>

                {/* Price */}
                <Animated.View
                    entering={FadeInDown.delay(400)}
                    style={styles.priceContainer}
                >
                    <Text style={styles.currency}>{product?.sale?.currency}</Text>
                    <Text style={styles.price}>{product?.sale?.offer_price}</Text>
                    <Text style={styles.vatText}>{product?.sale?.vat_text}</Text>
                </Animated.View>

                {/* Stock Info */}
                <Animated.View
                    entering={FadeInDown.delay(500)}
                    style={styles.stockInfo}
                >
                    <Text style={styles.stockText}>
                        Maximum quantity: {product?.stock?.max}
                    </Text>
                    {product?.stock?.delivery_icons?.map((icon, index) => (
                        <View key={index} style={styles.deliveryInfo}>
                            <Text style={styles.deliveryText}>
                                {icon.label}
                            </Text>
                        </View>
                    ))}
                </Animated.View>

                {/* Description */}
                <Animated.View
                    entering={FadeInUp.delay(600)}
                    style={styles.descriptionContainer}
                >
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.description}>
                        {formattedDescription}
                    </Text>
                </Animated.View>
                <View style={styles.footer}>
                    <AddToCartButton onPress={handleAddToCart} />
                </View>
            </View>
        </ScrollView>
    );
};

