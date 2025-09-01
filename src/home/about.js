import { Text, useWindowDimensions, View } from "react-native";

import { styles } from "./styles";
import { breakPoints } from "../styles/global-styles";

export default function About() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < breakPoints.small;

  return (
    <View style={styles.introContainer}>
      <View style={styles.aboutTextBox}>
        {/* Education Section */}
        <Text style={[styles.aboutTitle, isSmallScreen && { fontSize: 24 }]}>
          Education:
        </Text>
        <Text style={[styles.aboutSubtitle, isSmallScreen && { fontSize: 24 }]}>
          Stanford University
        </Text>

        {/* Grad School */}
        <Text
          style={[
            styles.aboutText,
            { marginLeft: "10px" },
            isSmallScreen && { fontSize: 18 },
          ]}
        >
          <i>
            M.S. in Computer Science, Human Computer Interaction Concentration
            (2024)
          </i>
        </Text>
        <Text
          style={[
            styles.aboutText,
            { marginLeft: "20px", marginBottom: "20px" },
            isSmallScreen && { fontSize: 18 },
          ]}
        >
          <u>Relevant Courses: </u> Understanding Users, Service Design,
          Designing Educational Explorables, Data Visualization, Computer
          Graphics, Computational Journalism, Digital Civil Society, Child
          Development and New Technologies
        </Text>

        {/* Undergrad */}
        <Text
          style={[
            styles.aboutText,
            { marginLeft: "10px" },
            isSmallScreen && { fontSize: 18 },
          ]}
        >
          <i>B.S.H. in Computer Science and Education (2023)</i>
        </Text>
        <Text
          style={[
            styles.aboutText,
            { marginLeft: "20px", marginBottom: "20px" },
            isSmallScreen && { fontSize: 18 },
          ]}
        >
          <u>Relevant Courses: </u> Cross-Platform Mobile Development, Web
          Applications, Design for Play, Social Computing, Intro to Computer
          Graphics and Imaging
        </Text>

        {/* Programming  */}
        <Text style={[styles.aboutTitle, isSmallScreen && { fontSize: 24 }]}>
          Programming Languages:
        </Text>
        <Text
          style={[
            styles.aboutText,
            { marginBottom: "20px" },
            isSmallScreen && { fontSize: 18 },
          ]}
        >
          Python, C++, C, Golang, JavaScript, Typescript, HTML, CSS
        </Text>

        {/* Technologies */}
        <Text style={[styles.aboutTitle, isSmallScreen && { fontSize: 24 }]}>
          Technologies:
        </Text>
        <Text style={[styles.aboutText, isSmallScreen && { fontSize: 18 }]}>
          Git, React, React Native, MongoDB, NodeJS, GraphQL, Expo, Unity,
          Blender, Canva
        </Text>
      </View>
    </View>
  );
}
