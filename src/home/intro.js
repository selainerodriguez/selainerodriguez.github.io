import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
  
import { styles } from "./styles";

// Import Images
import SelainePic from "../images/selaine.png";
import EmailLogo from "../images/logos/email.png";
import LinkedInLogo from "../images/logos/linkedin.png";
import GithubLogo from "../images/logos/github.png";
import InstagramLogo from "../images/logos/instagram.png";


export default function Intro() {
  // Allows us to direct to new page when buttons are clicked
  const onPressContactButton = (url) => {
    window.location.href = url;
  };
  
  return (
    <View style={styles.introContainer}>
      <View style={styles.introTextBox}>
        <View style={{marginTop: "10px"}}>
          <Text style={styles.nameTitle}>Selaine Rodriguez</Text>
          <Text style={styles.regularText}>
            Hey there! I'm currently a Master's Student at Stanford
            studying Computer Science -- specializing in Human Computer
            Interaction.
          </Text>
          <Text style={{...styles.regularText, marginTop: "10px"}}>
            I'm interested in education, accessibility, and game design. My previous
            experiences include Web Development, Mobile Development, Design, and other
            Front-End Technologies.
          </Text>
        </View>
        <View style={styles.buttonRow}>
          {/* Email */}
          <TouchableOpacity
            onPress={() => onPressContactButton("mailto:selaine@stanford.edu")}
          >
            <img src={EmailLogo} style={styles.buttonSizing}/>
          </TouchableOpacity>
          {/* LinkedIn */}
          <TouchableOpacity
            onPress={() => onPressContactButton("https://www.linkedin.com/in/selainerodriguez/")}
          >
            <img src={LinkedInLogo} style={styles.buttonSizing}/>
          </TouchableOpacity>
          {/* Github */}
          <TouchableOpacity
            onPress={() => onPressContactButton(("https://github.com/selainerodriguez/"))}
          >
            <img src={GithubLogo} style={styles.buttonSizing}/>
          </TouchableOpacity>
          {/* Instagram */}
          <TouchableOpacity
            onPress={() => onPressContactButton("https://www.instagram.com/selaine.rdgz/")}
          >
            <img src={InstagramLogo} style={styles.buttonSizing}/>
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
