import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './styles';

export const EmptyCart = () => {
    const router = useRouter();

    return (
        <View style={styles.EmptyCartContainer}>
            {/* Optional: Add an icon or illustration here */}
            <View style={styles.content}>
                <Text style={styles.EmptyCartTitle}>Your Cart is Empty</Text>
                <Text style={styles.message}>
                    Looks like you haven't added anything to your cart yet
                </Text>
                <Pressable
                    style={styles.button}
                    onPress={() => router.back()}
                >
                    <Text style={styles.buttonText}>Start Shopping</Text>
                </Pressable>
            </View>
        </View>
    );
};
