import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const CartList = ({ cartItem }) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productId: cartItem.product.id,
        amount: 1,
      })
    );
  };

  const decreaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productId: cartItem.product.id,
        amount: -1,
      })
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.product.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>

        <View style={styles.footer}>
          <Feather
            onPress={decreaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Feather
            onPress={increaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.itemTotal}>$300</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingHorizontal: 10,
    flexDirection: "row",
    marginVertical: 10,
  },
  contentContainer: {
    marginLeft: 25,
    justifyContent: "center",
  },
  image: {
    width: "50%",
    aspectRatio: 1,
  },
  name: {
    fontWeight: "500",
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: "gray",
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "gray",
  },
  footer: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: "auto",
    fontWeight: "500",
    marginLeft: 30,
  },
});

export default CartList;
