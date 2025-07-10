import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
    
import Project from "./projectFeature";

import { styles } from "./styles";

export default function Projects() {
return (
  <View style={{...styles.introContainer, justifyContent: "space-between"}}>
    <Project photo={"crosswordGenerator"} text={"Crossword Generator"}/>
    <Project photo={"taskTogether"} text={"Task Together"}/>
    <Project photo={"crossword"} text={"Cardinal3D Software"}/>
  </View>
);
}