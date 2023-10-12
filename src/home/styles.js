import { StyleSheet } from "react-native";

const breakPoints = {
  tiny: '400px',
  small: '600px',
  medium: '800px',
  large: '1000px',
};

export const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
  },
  buttonSizing: {
    height: "50px",
    marginRight: "10px",
    width: "50px",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#e0d8e7",
    flex: 1,
    flexDirection: "column",
    height: "100vw",
    minHeight: "100vw",

  },
  introContainer: {
    border: "2px solid black",
    flexDirection: "row",
    // justifyContent: "space-between",
    padding: "2%",
    width: "90%",
  },
  introPic: {
    marginLeft: "10px",
    objectFit: "cover",
    width: "30%",
  },
  introTextBox: {
    flexDirection: "column",
    // flexWrap: "wrap",
    justifyContent: "space-between",
    // minHeight: "400px",
    width: "70%",
  },
  nameTitle: {
    color: "#574369",
    fontFamily: "AgrandirTextBold",
    fontSize: 50,

    // TODO: Fix this
    // "@media screen and (min-width: 600px)": {
    //   backgroundColor: "red",
    // },

    // Add breakpoints for different sized screens
    // "@media only screen and (max-width: 1000px)": {
    //   fontSize: 40,
    // },
  },
  regularText: {
      color: "#231f20",
      fontFamily: "AgrandirRegular",
      fontSize: 25,
  }
});