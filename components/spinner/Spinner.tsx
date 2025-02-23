import { ActivityIndicator } from "react-native";

interface spinner {
    color: string,
    size: number | "small" | "large" | undefined
}

export const Spinner = ({ size, color }: spinner) => <ActivityIndicator testID={'loading-spinner'} size={size} color={color} />