import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useCartStore } from '@/store/cartStore';
import { CartSummary } from '@/components/cart/CartSummary';
import { EmptyCart } from '@/components/cart/EmptyCart';
import { colors } from '@/constants/theme';
import { CartList } from '@/components/cart/CartList';

const CartScreen = () => {
    const { items, getTotalPrice } = useCartStore();
    if (items.length === 0) {
        return <EmptyCart />;
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <CartList items={items} />
            </ScrollView>
            <CartSummary totalAmount={getTotalPrice()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.main,
    },
    scrollView: {
        flex: 1,
    },
});

export default CartScreen;