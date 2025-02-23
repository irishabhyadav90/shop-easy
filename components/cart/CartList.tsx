import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import { CartItem } from '@/store/cartStore';

export const CartList = ({ items }: { items: CartItem[] }) => {

    return (
        <View style={styles.container}>
            {items.map((item: CartItem) => (
                <View key={item.product.id} style={styles.cartItem}>
                    <Image
                        source={{ uri: item.product.images.featured_image }}
                        style={styles.image}
                    />
                    <View style={styles.details}>
                        <Text style={styles.title} numberOfLines={2}>
                            {item.product.title}
                        </Text>
                        <Text style={styles.price}>
                            {item.product?.sale?.currency} {item?.product?.sale?.regular_price}
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );
};