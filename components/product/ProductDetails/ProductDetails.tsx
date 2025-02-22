import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import type { ProductDetail as ProductDetailInterface } from '@/types/productDetails';
import { ImageGallery } from '../ImageGallery';
import { styles } from './styles';
import { parseDescription } from '@/utils/descriptionParser';
interface pdp {
    product_details: ProductDetailInterface
}
interface ProductDetailProps {
    product: pdp;
}

export const ProductDetail = ({ product: { product_details } }: ProductDetailProps) => {
    const formattedDescription = parseDescription(product_details.description);
    return (
        <ScrollView style={styles.container}>
            <ImageGallery
                featured_image={product_details.images.featured_image}
                gallery_images={product_details.images.gallery_images}
            />

            <View style={styles.content}>
                {/* Brand */}
                <Animated.View
                    entering={FadeInDown.delay(200)}
                    style={styles.brandContainer}
                >
                    <Text style={styles.brandName}>{product_details?.brand?.name}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>⭐ {product_details.rating}</Text>
                    </View>
                </Animated.View>

                {/* Title */}
                <Animated.Text
                    entering={FadeInDown.delay(300)}
                    style={styles.title}
                >
                    {product_details.title}
                </Animated.Text>

                {/* Price */}
                <Animated.View
                    entering={FadeInDown.delay(400)}
                    style={styles.priceContainer}
                >
                    <Text style={styles.currency}>{product_details?.sale?.currency}</Text>
                    <Text style={styles.price}>{product_details?.sale?.offer_price}</Text>
                    <Text style={styles.vatText}>{product_details?.sale?.vat_text}</Text>
                </Animated.View>

                {/* Stock Info */}
                <Animated.View
                    entering={FadeInDown.delay(500)}
                    style={styles.stockInfo}
                >
                    <Text style={styles.stockText}>
                        Maximum quantity: {product_details?.stock?.max}
                    </Text>
                    {product_details?.stock?.delivery_icons?.map((icon, index) => (
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
            </View>
        </ScrollView>
    );
};

