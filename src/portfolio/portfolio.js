import {
  Text,
  View,
} from "react-native";

import NavBar from "../navBar";

export default function Portfolio() {
  return (
    <View>
        <NavBar page={"portfolio"}/>
        <Text>
            This is my portfolio page that's a work-in-progress.
        </Text>
    </View>
  );
}