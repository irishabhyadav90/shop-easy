import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useCartStore } from '@/store/cartStore';
import { useRouter } from 'expo-router';
import { styles } from './styles';

export const CartIcon = () => {
    const router = useRouter();
    const totalItems = useCartStore(state => state.getTotalItems());

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => router.push('/cart')}
        >
            <Text style={styles.icon}>🛒</Text>
            {totalItems > 0 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{totalItems}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};