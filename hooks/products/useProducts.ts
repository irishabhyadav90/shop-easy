import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/services/api';

export const useProducts = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        refetch
    } = useInfiniteQuery({
        queryKey: ['products'],
        queryFn: ({ pageParam = 0 }) => fetchProducts(pageParam),
        getNextPageParam: (_, allPages) => {
            return allPages.length * 19;
        },
        initialPageParam: 0
    });

    const products = data?.pages.reduce((acc, page) => {
        return [...acc, ...(page?.data?.products ?? [])];
    }, []) ?? [];

    return {
        products,
        isLoading,
        loadMore: fetchNextPage,
        hasMore: hasNextPage,
        isLoadingMore: isFetchingNextPage,
        refresh: refetch
    };
};