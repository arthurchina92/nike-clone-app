import { StatusBar } from "expo-status-bar";
import Router from "./src/screens/Router/Router";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App(props) {
  return (
    <Provider store={store}>
      <>
        <Router />
        <StatusBar style="auto" />
      </>
    </Provider>
  );
}
