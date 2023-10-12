import {
  ScrollView,
  Text,
  View,
} from "react-native";

import NavBar from "../navBar";

export default function Teaching() {
  return (
    <View>
        <NavBar page={"teaching"}/>
        <ScrollView style={{ width: `100%` }}>
        </ScrollView>
    </View>
  );
}