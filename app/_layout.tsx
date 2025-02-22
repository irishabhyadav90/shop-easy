import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/configs/QueryClient';
import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack>
                <Stack.Screen name='index' />
            </Stack>
        </QueryClientProvider>
    );
}