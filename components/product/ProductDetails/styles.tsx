import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@/constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.main,
    },
    content: {
        padding: spacing.lg,
        // backgroundColor: 'red'
    },
    brandContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.sm,
    },
    brandName: {
        fontSize: typography.size.regular,
        color: colors.text.secondary,
        fontWeight: typography.weight.medium,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        fontSize: typography.size.small,
        color: colors.text.secondary,
    },
    title: {
        fontSize: typography.size.large,
        fontWeight: typography.weight.bold,
        color: colors.text.primary,
        marginBottom: spacing.md,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: spacing.lg,
    },
    currency: {
        fontSize: typography.size.regular,
        color: colors.text.primary,
        marginRight: spacing.xs,
    },
    price: {
        fontSize: typography.size.xlarge,
        fontWeight: typography.weight.bold,
        color: colors.primary,
    },
    vatText: {
        fontSize: typography.size.small,
        color: colors.text.light,
        marginLeft: spacing.sm,
    },
    stockInfo: {
        backgroundColor: colors.background.secondary,
        padding: spacing.md,
        borderRadius: spacing.sm,
        marginBottom: spacing.lg,
    },
    stockText: {
        fontSize: typography.size.regular,
        color: colors.text.primary,
        marginBottom: spacing.xs,
    },
    deliveryInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: spacing.xs,
    },
    deliveryText: {
        fontSize: typography.size.small,
        color: colors.text.secondary,
    },
    descriptionContainer: {
        borderTopWidth: 1,
        borderTopColor: colors.border,
        paddingTop: spacing.lg,
    },
    descriptionTitle: {
        fontSize: typography.size.medium,
        fontWeight: typography.weight.bold,
        color: colors.text.primary,
        marginBottom: spacing.sm,
    },
    description: {
        fontSize: typography.size.regular,
        color: colors.text.secondary,
        lineHeight: typography.size.regular * 1.5,
    },
    footer: {
        padding: spacing.lg,
        paddingBottom: spacing.xl,
        backgroundColor: colors.background.main,
        borderTopWidth: 1,
        borderTopColor: colors.border,
    },
});