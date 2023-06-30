import {
  View,
  Text,
  StyleSheet,
  Image,
  Flatlist,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import products from "../../data/products";
import styles from "./styles";
import { useSelector } from "react-redux";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const { width } = useWindowDimensions();
  const addToCart = () => {
    console.warn("Add to cart");
  };
  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.scrollview}
        contentInset={{ bottom: 100 }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price} </Text>
          <Text style={styles.description}>{product.description} </Text>
        </View>
      </ScrollView>
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailsScreen;
