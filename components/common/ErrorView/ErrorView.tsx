import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface ErrorViewProps {
    message?: string;
    onRetry?: () => void;
}

export const ErrorView = ({
    message = 'Something went wrong',
    onRetry
}: ErrorViewProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>
                {message}
            </Text>
            {onRetry && (
                <TouchableOpacity
                    style={styles.retryButton}
                    onPress={onRetry}
                >
                    <Text style={styles.retryText}>Try Again</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};