import React from 'react';
import { View, TextInput } from 'react-native';
import { colors } from '@/constants/theme';
import { Spinner } from '@/components/spinner';
import styles from './styles';


interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    isLoading?: boolean;
}

export const SearchBar = ({ value, onChangeText, isLoading }: SearchBarProps) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder="Search products..."
                style={styles.input}
                placeholderTextColor={colors.text.secondary}
            />
            {isLoading && (
                <Spinner color={colors.primary} size="small" />
            )}
        </View>
    );
};

