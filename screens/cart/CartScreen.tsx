import React from 'react';
import { View, ScrollView } from 'react-native';
import { useCartStore } from '@/store/cartStore';
import { CartSummary } from '@/components/cart/CartSummary';
import { EmptyCart } from '@/components/cart/EmptyCart';
import { CartList } from '@/components/cart/CartList';
import { styles } from './styles';

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


export default CartScreen;