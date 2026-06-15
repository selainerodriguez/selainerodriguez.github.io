import { Text } from "react-native";

import { styles } from "./styles";

import About from "./about";
import Intro from "./intro";
import Projects from "./projects";
import Teaching from "./teaching";

export default function Home() {
  return (
    <>
      <Intro />
      <Text style={styles.sectionTitle}>About Me</Text>
      <About />
      <Text style={styles.sectionTitle}>Recent Projects</Text>
      <Projects />
      <Text style={styles.sectionTitle}>Recent Teaching</Text>
      <Teaching />
    </>
  );
}
