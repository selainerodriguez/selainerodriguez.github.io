import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

import { styles } from "./styles";
import { breakPoints } from "../styles/global-styles";

// Import Images
import SelainePic from "../images/Selaine_2026.jpg";
import EmailLogo from "../images/logos/email.png";
import LinkedInLogo from "../images/logos/linkedin.png";
import GithubLogo from "../images/logos/github.png";

export default function Intro() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < breakPoints.small;
  return isSmallScreen ? <IntroMobile /> : <IntroDesktop />;
}

function IntroDesktop() {
  // Allows us to direct to new page when buttons are clicked
  const onPressContactButton = (url) => {
    window.location.href = url;
  };

  return (
    <View style={styles.introContainer}>
      <View style={styles.introTextBox}>
        <View style={{ marginTop: "10px" }}>
          <Text style={styles.nameTitle}>Selaine Rodriguez</Text>
          <Text style={styles.regularText}>
            Hey there! I'm currently a Software Engineer at{" "}
            <Text style={{ fontWeight: "bold" }}>Uber</Text>. I graduated from{" "}
            <Text style={{ fontWeight: "bold" }}>Stanford</Text> with bachelor's
            and master's degrees in Computer Science -- specializing in{" "}
            <Text style={{ fontWeight: "bold" }}>
              Human Computer Interaction
            </Text>
            .
          </Text>
          <Text style={{ ...styles.regularText, marginTop: "10px" }}>
            I'm interested in education, accessibility, and game design. My
            previous experiences include Web Development, Mobile Development,
            Design, and other Front-End Technologies.
          </Text>
        </View>
        <View style={styles.buttonRow}>
          {/* Email */}
          <TouchableOpacity
            onPress={() =>
              onPressContactButton("mailto:selaine@alumni.stanford.edu")
            }
          >
            <img src={EmailLogo} style={styles.buttonSizing} />
          </TouchableOpacity>
          {/* LinkedIn */}
          <TouchableOpacity
            onPress={() =>
              onPressContactButton(
                "https://www.linkedin.com/in/selainerodriguez/",
              )
            }
          >
            <img src={LinkedInLogo} style={styles.buttonSizing} />
          </TouchableOpacity>
          {/* Github */}
          <TouchableOpacity
            onPress={() =>
              onPressContactButton("https://github.com/selainerodriguez/")
            }
          >
            <img src={GithubLogo} style={styles.buttonSizing} />
          </TouchableOpacity>
        </View>
      </View>
      <img
        src={SelainePic}
        style={styles.introPic}
        alt="Selaine in White Dress in Stanford Main Quad"
      />
    </View>
  );
}

function IntroMobile() {
  // Allows us to direct to new page when buttons are clicked
  const onPressContactButton = (url) => {
    window.location.href = url;
  };

  return (
    <View style={{ ...styles.introContainer, flexDirection: "column" }}>
      <View style={{ ...styles.introTextBox, width: "100%" }}>
        <View style={{ marginTop: "10px" }}>
          <Text
            style={{
              ...styles.nameTitle,
              fontSize: "32px",
              marginBottom: "8px",
            }}
          >
            Selaine Rodriguez
          </Text>
          <Text style={{ ...styles.regularText, fontSize: "18px" }}>
            Hey there! I'm currently a Software Engineer at{" "}
            <Text style={{ fontWeight: "bold" }}>Uber</Text>. I graduated from{" "}
            <Text style={{ fontWeight: "bold" }}>Stanford</Text> with a
            bachelor's and master's degrees in Computer Science -- specializing
            in{" "}
            <Text style={{ fontWeight: "bold" }}>
              Human Computer Interaction
            </Text>
            .
          </Text>
          <Text
            style={{
              ...styles.regularText,
              fontSize: "18px",
              marginTop: "10px",
            }}
          >
            I'm interested in education, accessibility, and game design. My
            previous experiences include Web Development, Mobile Development,
            Design, and other Front-End Technologies.
          </Text>
        </View>
        <img
          src={SelainePic}
          style={{
            ...styles.introPic,
            margin: "12px 0px 12px 0px",
            width: "100%",
          }}
          alt="Selaine in White Dress in Stanford Main Quad"
        />
        <View style={{ ...styles.buttonRow }}>
          {/* Email */}
          <TouchableOpacity
            onPress={() =>
              onPressContactButton("mailto:selaine@alumni.stanford.edu")
            }
          >
            <img src={EmailLogo} style={styles.buttonSizing} />
          </TouchableOpacity>
          {/* LinkedIn */}
          <TouchableOpacity
            onPress={() =>
              onPressContactButton(
                "https://www.linkedin.com/in/selainerodriguez/",
              )
            }
          >
            <img src={LinkedInLogo} style={styles.buttonSizing} />
          </TouchableOpacity>
          {/* Github */}
          <TouchableOpacity
            onPress={() =>
              onPressContactButton("https://github.com/selainerodriguez/")
            }
          >
            <img src={GithubLogo} style={styles.buttonSizing} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
