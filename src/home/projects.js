import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { useNavigate } from "react-router-dom";

import Project from "./project";

import { styles } from "./styles";
import { breakPoints } from "../styles/global-styles";

export default function Projects() {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const isSmallScreen = width < breakPoints.small;

  return (
    <View style={{ ...styles.projectContainer, padding: "0px" }}>
      <View
        style={
          isSmallScreen
            ? { flexDirection: "column", margin: "2%" }
            : {
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "2%",
              }
        }
      >
        <Project photo={"savedGroups"} text={"Uber Saved Groups"} />
        <Project photo={"foodmarks"} text={"Foodmarks"} />
        <Project
          photo={"trumpetTutorial"}
          text={"Trumpet Educational Explorable"}
        />
      </View>
      <TouchableOpacity
        style={styles.moreButton}
        onPress={() => navigate("/portfolio")}
      >
        <Text style={{ ...styles.sectionTitle, color: "white", margin: "8px" }}>
          See All Projects
        </Text>
      </TouchableOpacity>
    </View>
  );
}
