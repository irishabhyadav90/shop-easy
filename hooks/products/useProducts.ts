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
        queryFn: ({ pageParam = 1 }) => fetchProducts(pageParam),
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage?.data?.length < 20) return undefined;
            return allPages?.length + 1;
        },
        initialPageParam: 1
    });

    const products = data?.pages.flatMap(page => page.data)?.[0]?.products ?? [];

    return {
        products,
        isLoading,
        loadMore: fetchNextPage,
        hasMore: hasNextPage,
        isLoadingMore: isFetchingNextPage,
        refresh: refetch
    };
};