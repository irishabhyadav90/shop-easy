import { useState } from 'react';
import { View, Image, FlatList, Pressable } from 'react-native';
import Animated, {
    useAnimatedStyle, withSpring, useSharedValue
} from 'react-native-reanimated';
import { styles } from './styles';

interface GalleryImage {
    image: string;
    thumbnail: string;
}

export const ImageGallery = ({
    featured_image,
    gallery_images
}: {
    featured_image: string;
    gallery_images: GalleryImage[];
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scale = useSharedValue(1);

    const images = [{ image: featured_image }, ...gallery_images];

    const mainImageStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }));

    const handleImagePress = (index: number) => {
        setActiveIndex(index);
        scale.value = withSpring(0.95, {}, () => {
            scale.value = withSpring(1);
        });
    };

    return (
        <View style={styles.container}>
            <Animated.Image
                source={{ uri: images[activeIndex].image }}
                style={[styles.mainImage, mainImageStyle]}
                resizeMode="cover"
            />
            <FlatList
                data={images}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.thumbnailList}
                renderItem={({ item, index }) => (
                    <Pressable
                        onPress={() => handleImagePress(index)}
                        style={[
                            styles.thumbnail,
                            activeIndex === index && styles.activeThumbnail
                        ]}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={styles.thumbnailImage}
                        />
                    </Pressable>
                )}
            />
        </View>
    );
};