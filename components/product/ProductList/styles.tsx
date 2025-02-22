import { StyleSheet } from 'react-native';
import { spacing } from '@/constants/theme';

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        padding: spacing.sm,
    },
    footerLoader: {
        padding: spacing.md,
    }
});

export default styles;