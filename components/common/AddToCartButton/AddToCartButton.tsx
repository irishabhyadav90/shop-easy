import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Animated, {
    useAnimatedStyle,
    withSpring
} from 'react-native-reanimated';
import { styles } from './style';
import { Spinner } from '@/components/spinner';
import { colors } from '@/constants/theme';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

interface AddToCartButtonProps {
    onPress: () => void;
    isSmall?: boolean;
    loading?: boolean;
}

export const AddToCartButton = ({
    onPress,
    isSmall,
    loading
}: AddToCartButtonProps) => {
    const scale = useAnimatedStyle(() => ({
        transform: [{ scale: withSpring(loading ? 0.95 : 1) }]
    }));

    return (
        <AnimatedTouchable
            style={[
                styles.button,
                isSmall ? styles.smallButton : styles.largeButton,
                scale
            ]}
            onPress={onPress}
            disabled={loading}
        >
            {loading ? (
                <Spinner color={colors.primary} size="large" />
            ) : (
                <Text style={[
                    styles.buttonText,
                    isSmall ? styles.smallText : styles.largeText
                ]}>
                    Add to Cart
                </Text>
            )}
        </AnimatedTouchable>
    );
};

