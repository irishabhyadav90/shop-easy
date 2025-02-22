import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import type { Product } from '@/types/product';
import { styles } from './styles';

interface ProductDetailProps {
    product: Product;
}

const { width } = Dimensions.get('window');

export const ProductDetail = ({ product }: ProductDetailProps) => {
    return (
        <ScrollView style={styles.container}>
            {/* Product Image */}
            <Image
                source={{ uri: product.images.featured_image }}
                style={styles.image}
                resizeMode="contain"
            />

            {/* Product Info */}
            <View style={styles.infoContainer}>
                {/* Label if exists */}
                {product.label.active && (
                    <View
                        style={[
                            styles.labelContainer,
                            { backgroundColor: product.label.color_code }
                        ]}
                    >
                        <Text style={styles.labelText}>
                            {product.label.label_text}
                        </Text>
                    </View>
                )}

                {/* Title */}
                <Text style={styles.title}>{product.title}</Text>

                {/* Price */}
                <View style={styles.priceContainer}>
                    <Text style={styles.currency}>
                        {product.sale.currency}
                    </Text>
                    <Text style={styles.price}>
                        {product.sale.offer_price}
                    </Text>
                    {product.sale.regular_price !== product.sale.offer_price && (
                        <Text style={styles.regularPrice}>
                            {product.sale.regular_price}
                        </Text>
                    )}
                </View>

                {/* Rating */}
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>⭐ {product.rating}</Text>
                </View>

                {/* Stock Info */}
                <View style={styles.stockInfo}>
                    <Text style={styles.stockText}>
                        Max quantity: {product.stock.max}
                    </Text>
                    {product.stock.delivery_icons.map((delivery, index) => (
                        <Text key={index} style={styles.deliveryText}>
                            {delivery.label}
                        </Text>
                    ))}
                </View>

                {/* SKU */}
                <Text style={styles.sku}>
                    SKU: {product.inventory.sku}
                </Text>
            </View>
        </ScrollView>
    );
};

