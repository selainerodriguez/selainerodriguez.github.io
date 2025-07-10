import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
      
import { styles } from "./styles";

import CrosswordPic from "../images/projects/crosswordGenerator.png";
import TaskTogetherPic from "../images/projects/taskTogether.png";

const nameToPic = {
  "crosswordGenerator": CrosswordPic,
  "taskTogether": TaskTogetherPic,
};

export default function Project(props) {
  const image = nameToPic[props.photo];
  console.log(image);

  return (
    <View style={styles.projectInfo}>
      <img
        style={styles.projectPic}
        source={CrosswordPic}
      />
      <Text
        style={{
          ...styles.aboutSubtitle,
          marginBottom: "0px",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        {props.text}
      </Text>
    </View>
  );
}