import { Image, Text, useWindowDimensions, View } from "react-native";

import { styles } from "./styles";
import { breakPoints } from "../styles/global-styles";

import MealPlanPic from "../images/projects/mealPlan.png";
import SavedGroupsPic from "../images/projects/savedGroups.png";
import FoodmarksPic from "../images/projects/foodmarks.png";
import TrumpetTutorialPic from "../images/projects/trumpetTutorial.png";

const nameToPic = {
  foodmarks: FoodmarksPic,
  mealPlan: MealPlanPic,
  savedGroups: SavedGroupsPic,
};

export default function Project(props) {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < breakPoints.small;
  const image = nameToPic[props.photo];

  return (
    <View
      style={[
        styles.projectInfo,
        isSmallScreen && { width: "100%", marginBottom: 20 },
      ]}
    >
      <Image style={styles.projectPic} source={image} />
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
