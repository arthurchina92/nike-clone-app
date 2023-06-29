import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Router from "./src/screens/Router/Router";

export default function App(props) {
  return (
    <>
      <Router />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
