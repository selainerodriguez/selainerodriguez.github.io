import {
  StyleSheet,
  View,
} from "react-native";
  
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <View style={styles.navBar}>
      <Link style={ props.page === "home" ? styles.navBarSelected : styles.navBarUnselected } to="/">HOME</Link>
      <Link style={ props.page === "portfolio" ? styles.navBarSelected : styles.navBarUnselected } to="/portfolio">PORTFOLIO</Link>
      <Link style={ props.page === "teaching" ? styles.navBarSelected : styles.navBarUnselected } to="/teaching">TEACHING</Link>
      <Link style={styles.navBarUnselected} to="/resume.pdf" target="_blank" download>RESUME</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "2%",
    marginBottom: "2%",
    width: "100%",
  },
  navBarSelected: {
    color: "#90839c",
    fontFamily: "AgrandirTextBold",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "none",
  },
  navBarUnselected: {
    color: "#231f20",
    fontFamily: "AgrandirTextBold",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "none",
  },
});
  