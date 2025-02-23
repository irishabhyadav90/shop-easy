import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@/constants/theme';

const styles = StyleSheet.create({
    container: {
        padding: spacing.sm,
        backgroundColor: colors.background.main,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: colors.background.secondary,
        padding: spacing.md,
        borderRadius: spacing.sm,
        fontSize: typography.size.regular,
        color: colors.text.primary,
    },
    loader: {
        marginLeft: spacing.sm,
    },
});

export default styles;