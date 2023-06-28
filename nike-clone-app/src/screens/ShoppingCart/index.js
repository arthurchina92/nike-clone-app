import { View, Text, FlatList } from "react-native";
import React from "react";
import cart from "../../data/cart";
import CartList from "../../components/CartList";

const ShoppingCart = () => {
  return (
    <FlatList
      data={cart}
      renderItem={({ item }) => <CartList cartItem={item} />}
    />
  );
};

export default ShoppingCart;
