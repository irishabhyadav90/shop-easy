import { moderateScale } from 'react-native-size-matters';

export const typography = {
    size: {
        small: moderateScale(12),
        regular: moderateScale(14),
        medium: moderateScale(16),
        large: moderateScale(18),
        xlarge: moderateScale(20)
    },
    weight: {
        regular: '400' as const,
        medium: '500' as const,
        bold: '700' as const
    }
};