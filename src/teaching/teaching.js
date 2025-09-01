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
          <Text>
            This is my teaching page that's a work-in-progress.
          </Text>
        </ScrollView>
    </View>
  );
}