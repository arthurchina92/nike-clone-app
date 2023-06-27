import { ImageBackgroundComponent, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: "100",
    marginVertical: 20,
  },
  price: {
    fontWeight: 500,
    fontSize: 18,
  },
  description: {
    marginVertical: 10,
    fontSize: 15,
    lineHeight: 30,
    fontWeight: 300,
    marginBottom: 100,
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

export default styles;
