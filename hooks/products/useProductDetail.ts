import { useQuery } from '@tanstack/react-query';
import { fetchProductDetail } from '@/services/api';

export const useProductDetail = (slug: string) => {
    return useQuery({
        queryKey: ['product', slug],
        queryFn: () => fetchProductDetail(slug),
        enabled: !!slug,
        retry: 2, // Number of retries before failing
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    });
};