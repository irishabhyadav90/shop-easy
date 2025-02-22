import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/configs/QueryClient';
import { Stack } from 'expo-router';
import { CartIcon } from '@/components/common/CartIcon/CartIcon';

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: '#fff' },
                    headerShadowVisible: false,
                    headerRight: () => <CartIcon />,
                }}>
                <Stack.Screen
                    name="index"
                    options={{ title: 'Products' }}
                />
                <Stack.Screen
                    name="product/[slug]"
                    options={{ title: 'Product Details' }}
                />
            </Stack>
        </QueryClientProvider>
    );
}