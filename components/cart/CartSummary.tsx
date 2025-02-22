import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';

export const CartSummary = ({ totalAmount }: { totalAmount: number }) => {
    return (
        <View style={styles.summaryContainer}>
            <View style={styles.summaryRow}>
                <View style={styles.row}>
                    <Text style={styles.label}>Subtotal</Text>
                    <Text style={styles.value}>AED {totalAmount.toFixed(2)}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Shipping</Text>
                    <Text style={styles.value}>Free</Text>
                </View>
                <View style={[styles.row, styles.totalRow]}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>AED {totalAmount.toFixed(2)}</Text>
                </View>
            </View>
            <Pressable style={styles.checkoutButton}>
                <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </Pressable>
        </View>
    );
};