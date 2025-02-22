import { StyleSheet, Dimensions } from 'react-native';
import { colors, spacing } from '@/constants/theme';

const { width } = Dimensions.get('window');
const THUMB_SIZE = 60;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background.main,
    },
    mainImage: {
        width: width,
        height: width,
        backgroundColor: colors.background.secondary,
    },
    thumbnailList: {
        padding: spacing.md,
    },
    thumbnail: {
        width: THUMB_SIZE,
        height: THUMB_SIZE,
        marginRight: spacing.sm,
        borderRadius: spacing.xs,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: colors.border,
    },
    activeThumbnail: {
        borderColor: colors.primary,
    },
    thumbnailImage: {
        width: '100%',
        height: '100%',
    },
});