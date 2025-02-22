import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@/constants/theme';

export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: spacing.sm,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallButton: {
        padding: spacing.sm,
    },
    largeButton: {
        padding: spacing.md,
    },
    buttonText: {
        color: colors.background.main,
        fontWeight: typography.weight.medium,
    },
    smallText: {
        fontSize: typography.size.small,
    },
    largeText: {
        fontSize: typography.size.medium,
    },
});