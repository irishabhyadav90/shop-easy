import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/configs/QueryClient';
import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: '#fff' },
                    headerShadowVisible: false,
                }}>
                <Stack.Screen
                    name="index"
                    options={{ title: 'Products' }}
                />
                <Stack.Screen
                    name="product/[product-slug]"
                    options={{ title: 'Product Details' }}
                />
            </Stack>
        </QueryClientProvider>
    );
}