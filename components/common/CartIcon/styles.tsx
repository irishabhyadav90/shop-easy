import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@/constants/theme';

export const styles = StyleSheet.create({
    container: {
        padding: spacing.sm,
        marginRight: spacing.sm,
    },
    icon: {
        fontSize: typography.size.large,
    },
    badge: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: colors.primary,
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: colors.background.main,
        fontSize: typography.size.small,
        fontWeight: typography.weight.bold,
    },
});
