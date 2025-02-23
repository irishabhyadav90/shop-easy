import { StyleSheet } from 'react-native';
import { colors, spacing, typography, layout } from '@/constants/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.main,
        borderRadius: layout.borderRadius.medium,
        margin: spacing.xs,
        ...layout.shadow.medium
    },
    image: {
        width: '100%',
        height: 180,
        borderTopLeftRadius: layout.borderRadius.medium,
        borderTopRightRadius: layout.borderRadius.medium,
    },
    content: {
        padding: spacing.md,
        minHeight: 100
    },
    name: {
        fontSize: typography.size.regular,
        fontWeight: typography.weight.medium,
        color: colors.text.primary,
        marginBottom: spacing.xs,
    },
    price: {
        fontSize: typography.size.medium,
        fontWeight: typography.weight.bold,
        color: colors.primary,
    }
});


export default styles;