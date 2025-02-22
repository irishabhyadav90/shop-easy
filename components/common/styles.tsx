import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@/constants/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.lg,
        backgroundColor: colors.background.main
    },
    errorText: {
        fontSize: typography.size.medium,
        color: colors.text.secondary,
        textAlign: 'center',
        marginBottom: spacing.md
    },
    retryButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.sm,
        borderRadius: spacing.xs
    },
    retryText: {
        color: colors.background.main,
        fontSize: typography.size.regular,
        fontWeight: typography.weight.medium
    }
});


export default styles;