import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchProducts } from '@/services/api';
import { useDebounce } from '../common/useDebounce';

export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedTerm = useDebounce(searchTerm, 500);

    const { data, isLoading, error } = useQuery({
        queryKey: ['search', debouncedTerm],
        queryFn: () => searchProducts(debouncedTerm),
        enabled: debouncedTerm.length > 0,
    });

    return {
        searchTerm,
        setSearchTerm,
        searchResults: data?.data?.products || [],
        isLoading,
        error
    };
};