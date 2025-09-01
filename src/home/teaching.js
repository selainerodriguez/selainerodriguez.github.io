import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { useNavigate } from "react-router-dom";

import TeachingHighlight from "./teaching-highlight";

import { styles } from "./styles";
import { breakPoints } from "../styles/global-styles";

export default function Teaching() {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const isSmallScreen = width < breakPoints.small;

  return (
    <View
      style={{
        ...styles.projectContainer,
        padding: "0px",
        marginBottom: "24px",
      }}
    >
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
        <TeachingHighlight
          photo={"dinkelspiel"}
          text={"Lloyd W. Dinkelspiel Award"}
        />
        <TeachingHighlight
          photo={"cs278Website"}
          text={"Graduate Teaching Assistant"}
        />
        <TeachingHighlight photo={"sseaClass"} text={"Lecturer"} />
      </View>
      <TouchableOpacity
        style={styles.moreButton}
        onPress={() => navigate("/teaching")}
      >
        <Text style={{ ...styles.sectionTitle, color: "white", margin: "8px" }}>
          See All Teaching
        </Text>
      </TouchableOpacity>
    </View>
  );
}
