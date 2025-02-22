import { Stack } from 'expo-router';
import CartScreen from '@/screens/CartScreen';

export default function CartRoute() {
    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Shopping Cart',
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerShadowVisible: false,
                }}
            />
            <CartScreen />
        </>
    );
}