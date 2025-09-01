import {
  Text,
  View,
} from "react-native";

import NavBar from "../navBar";

export default function Music() {
  return (
    <View>
        <NavBar page={"music"}/>
        <Text>
            This is my music page that's a work-in-progress.
        </Text>
    </View>
  );
}