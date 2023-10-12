import {
  ScrollView,
  Text,
  View,
} from "react-native";

import { styles } from "./styles";

import About from "./about";
import Intro from "./intro";
import NavBar from "../navBar";
  
export default function Home() {
  return (
    <View style={styles.container}>
      <NavBar page={"home"}/>
      <Intro />
      <Text style={styles.sectionTitle}>
        About Me
      </Text>
      <About />
    </View>
  );
}