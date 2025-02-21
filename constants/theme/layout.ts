import { scale } from 'react-native-size-matters';

export const layout = {
    borderRadius: {
        small: scale(4),
        medium: scale(8),
        large: scale(12)
    },
    shadow: {
        small: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,
            elevation: 1,
        },
        medium: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 3,
        }
    }
};