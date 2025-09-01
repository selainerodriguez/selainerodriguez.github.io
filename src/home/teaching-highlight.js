import { Image, Text, useWindowDimensions, View } from "react-native";

import { styles } from "./styles";
import { breakPoints } from "../styles/global-styles";

import DinkelspielPic from "../images/projects/dinkelspiel.png";
import CS278WebsitePic from "../images/projects/cs278Website.png";
import SSEAClassPic from "../images/projects/sseaClass.png";

const nameToPic = {
  dinkelspiel: DinkelspielPic,
  cs278Website: CS278WebsitePic,
  sseaClass: SSEAClassPic,
};

export default function TeachingHighlight(props) {
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
