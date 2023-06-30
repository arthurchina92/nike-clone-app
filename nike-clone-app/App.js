import { StatusBar } from "expo-status-bar";
import Router from "./src/screens/Router/Router";

export default function App(props) {
  return (
    <>
      <Router />
      <StatusBar style="auto" />
    </>
  );
}
