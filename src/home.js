import {
  Text,
  View,
} from "react-native";

import NavBar from "./navBar";
  
export default function Home() {
  return (
    <View>
      <NavBar page={"home"}/>
      <Text>
        This is my home page that's a work-in-progress.
      </Text>
    </View>
  );
}