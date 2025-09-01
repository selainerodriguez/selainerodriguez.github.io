import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  aboutSubtitle: {
    color: "#90839C",
    fontFamily: "AgrandirTextBold",
    fontSize: 25,
    fontWeight: 600,
  },
  aboutTextBox: {
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
  },
  aboutText: {
    color: "#231f20",
    fontFamily: "AgrandirRegular",
    fontSize: 25,
  },
  aboutTitle: {
    color: "#574369",
    fontFamily: "AgrandirTextBold",
    fontSize: 30,
  },
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
    border: "1px solid black",
    flexDirection: "row",
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
    justifyContent: "space-between",
    width: "70%",
  },
  moreButton: {
    alignItems: "center",
    backgroundColor: "#90839C",
    justifyContent: "center",
    width: "100%",
  },
  nameTitle: {
    color: "#574369",
    fontFamily: "AgrandirTextBold",
    fontSize: 50,
  },
  projectContainer: {
    border: "1px solid black",
    flexDirection: "column",
    padding: "2%",
    width: "90%",
  },
  projectCard: {
    border: "1px solid black",
    flexDirection: "column",
    alignItems: "stretch",
    marginBottom: 24,
    width: "90%",
  },
  projectCardContent: {
    padding: "2%",
    alignItems: "center",
  },
  timelineFooter: {
    width: "100%",
    backgroundColor: "#574369",
    color: "white",
    padding: 10,
    textAlign: "center",
    fontFamily: "AgrandirTextBold",
    fontSize: 20,
  },
  projectActionButtonRow: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 12,
  },
  projectActionButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#90839C",
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  projectActionButtonText: {
    color: "#fff",
    fontFamily: "AgrandirTextBold",
    fontSize: 20,
    textAlign: "center",
  },
  projectInfo: {
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
    marginBottom: 10,
  },
  projectPic: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.5,
    resizeMode: "contain",
  },
  regularText: {
    color: "#231f20",
    fontFamily: "AgrandirRegular",
    fontSize: 25,
  },
  sectionTitle: {
    color: "#574369",
    fontFamily: "AgrandirTextBold",
    fontSize: 40,
    margin: 20,
  },
});
