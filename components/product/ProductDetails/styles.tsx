import { StyleSheet, Dimensions } from 'react-native';
import { colors, spacing, typography } from '@/constants/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.main,
    },
    image: {
        width: width,
        height: width,
        backgroundColor: colors.background.secondary,
    },
    infoContainer: {
        padding: spacing.lg,
    },
    labelContainer: {
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        borderRadius: spacing.xs,
        alignSelf: 'flex-start',
        marginBottom: spacing.sm,
    },
    labelText: {
        color: colors.background.main,
        fontSize: typography.size.small,
        fontWeight: typography.weight.medium,
    },
    title: {
        fontSize: typography.size.large,
        fontWeight: typography.weight.bold,
        marginBottom: spacing.md,
        color: colors.text.primary,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: spacing.md,
    },
    currency: {
        fontSize: typography.size.medium,
        fontWeight: typography.weight.medium,
        color: colors.text.primary,
        marginRight: spacing.xs,
    },
    price: {
        fontSize: typography.size.xlarge,
        fontWeight: typography.weight.bold,
        color: colors.primary,
    },
    regularPrice: {
        fontSize: typography.size.medium,
        color: colors.text.light,
        textDecorationLine: 'line-through',
        marginLeft: spacing.sm,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing.md,
    },
    rating: {
        fontSize: typography.size.regular,
        color: colors.text.secondary,
    },
    stockInfo: {
        marginBottom: spacing.md,
    },
    stockText: {
        fontSize: typography.size.regular,
        color: colors.text.secondary,
        marginBottom: spacing.xs,
    },
    deliveryText: {
        fontSize: typography.size.regular,
        color: colors.text.secondary,
    },
    sku: {
        fontSize: typography.size.small,
        color: colors.text.light,
    },
});