import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@/constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.main,
    },
    scrollView: {
        flex: 1,
    },
    cartItem: {
        flexDirection: 'row',
        padding: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: spacing.sm,
    },
    details: {
        flex: 1,
        marginLeft: spacing.md,
    },
    title: {
        fontSize: typography.size.medium,
        fontWeight: typography.weight.medium,
        color: colors.text.primary,
        marginBottom: spacing.xs,
    },
    price: {
        fontSize: typography.size.regular,
        color: colors.primary,
        fontWeight: typography.weight.bold,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: spacing.sm,
    },
    removeButton: {
        padding: spacing.sm,
    },
    removeText: {
        color: colors.error,
        fontSize: typography.size.small,
    },
    // CartSummary styles
    summaryContainer: {
        padding: spacing.lg,
        backgroundColor: colors.background.main,
        borderTopWidth: 1,
        borderTopColor: colors.border,
    },
    summaryRow: {
        marginBottom: spacing.lg,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: spacing.sm,
    },
    totalRow: {
        marginTop: spacing.md,
        paddingTop: spacing.md,
        borderTopWidth: 1,
        borderTopColor: colors.border,
    },
    label: {
        fontSize: typography.size.regular,
        color: colors.text.secondary,
    },
    value: {
        fontSize: typography.size.regular,
        color: colors.text.primary,
        fontWeight: typography.weight.medium,
    },
    totalLabel: {
        fontSize: typography.size.medium,
        fontWeight: typography.weight.bold,
        color: colors.text.primary,
    },
    totalValue: {
        fontSize: typography.size.large,
        fontWeight: typography.weight.bold,
        color: colors.primary,
    },
    checkoutButton: {
        backgroundColor: colors.primary,
        padding: spacing.md,
        borderRadius: spacing.sm,
        alignItems: 'center',
    },
    checkoutText: {
        color: colors.background.main,
        fontSize: typography.size.medium,
        fontWeight: typography.weight.medium,
    },
    // EmptyCart Styles
    EmptyCartContainer: {
        flex: 1,
        backgroundColor: colors.background.main,
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.xl,
    },
    content: {
        alignItems: 'center',
        maxWidth: 300,
    },
    EmptyCartTitle: {
        fontSize: typography.size.xlarge,
        fontWeight: typography.weight.bold,
        color: colors.text.primary,
        marginBottom: spacing.sm,
        textAlign: 'center',
    },
    message: {
        fontSize: typography.size.regular,
        color: colors.text.secondary,
        textAlign: 'center',
        marginBottom: spacing.xl,
        lineHeight: typography.size.regular * 1.5,
    },
    button: {
        backgroundColor: colors.primary,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.xl,
        borderRadius: spacing.sm,
        width: '100%',
    },
    buttonText: {
        color: colors.background.main,
        fontSize: typography.size.medium,
        fontWeight: typography.weight.medium,
        textAlign: 'center',
    },

});