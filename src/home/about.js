import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
    
import { styles } from "./styles";

export default function About() {
  return (
    <View style={styles.introContainer}>
      <View style={styles.aboutTextBox}>
        {/* Education Section */}
        <Text style={styles.aboutTitle}>Education:</Text>
        <Text style={styles.aboutSubtitle}>Stanford University</Text>

        {/* Grad School */}
        <Text style={{ ...styles.aboutText, marginLeft: "10px" }}>
          <i>
            M.S. in Computer Science, Human Computer Interaction
            Concentration (2024)
          </i>
        </Text>
        <Text
          style={{
            ...styles.aboutText,
            marginLeft: "20px",
            marginBottom: "20px",
          }}
        >
          <u>Relevant Courses: </u> Computer Graphics (Rendering,
          Geometry, and Image Manipulation) Computational Journalism,
          Digital Civil Society, Child Development and New Technologies
        </Text>

        {/* Undergrad */}
        <Text style={{ ...styles.aboutText, marginLeft: "10px" }}>
          <i>B.S.H. in Computer Science and Education (2023)</i>
        </Text>
        <Text
          style={{
            ...styles.aboutText,
            marginLeft: "20px",
            marginBottom: "20px",
          }}
        >
          <u>Relevant Courses: </u> Cross-Platform Mobile Development, Web
          Applications, Design for Play, Social Computing, Intro to
          Computer Graphics and Imaging
        </Text>

        {/* Programming  */}
        <Text style={styles.aboutTitle}>Programming Languages:</Text>
        <Text style={{ ...styles.aboutText, marginBottom: "20px" }}>
          Python, C++, C, Golang, JavaScript, Typescript, HTML, CSS
        </Text>

        {/* Technologies */}
        <Text style={styles.aboutTitle}>Technologies:</Text>
        <Text style={styles.aboutText}>
          Git, React, React Native, MongoDB, NodeJS, GraphQL, Expo, Unity,
          Blender, Canva
        </Text>
      </View>
    </View>
  );
}
