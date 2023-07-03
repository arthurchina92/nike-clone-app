import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import CartList from "../../components/CartList";
import { useSelector } from "react-redux";
import {
  selectSubtotal,
  selectDeliveryPrice,
  selectTotal,
} from "../../store/cartSlice";

const ShoppingCartTotals = () => {
  const subTotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);

  return (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text>Subtotal</Text>
        <Text style={styles.text}>$ {subTotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>$ {deliveryFee}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>$ {total}</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartList cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    padding: 10,
    borderColor: "gray",
    borderTopWidth: 1,
    marginBottom: 120,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ShoppingCart;
