import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import PageShell from "../pageShell";
import { styles } from "../home/styles";
import { breakPoints } from "../styles/global-styles";
import { projectsData } from "./projectsData";

export default function Portfolio() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < breakPoints.small;

  // For up to 3 images, adjust appropriately
  function calculateImageWidth(images, isSmallScreen) {
    // For small screens, will all be the same due to being in a column
    if (isSmallScreen) return 300;

    // Otherwise, adjust appropriately
    if (images.length < 3) {
      return 400;
    } else {
      return 300;
    }
  }

  return (
    <PageShell page="portfolio">
      <Text
        style={[
          styles.sectionTitle,
          { textAlign: "center" },
          isSmallScreen && { marginTop: 0 },
        ]}
      >
        Portfolio
      </Text>

      {/* Welcome Section */}
      <View style={{ ...styles.introContainer, marginBottom: "16px" }}>
        <View style={{ ...styles.introTextBox, width: "100%" }}>
          <Text
            style={[
              styles.regularText,
              { textAlign: "center" },
              isSmallScreen && { fontSize: "18px" },
            ]}
          >
            Here's a recap of some of the projects I am the most proud on since
            I started coding six years ago! Feel free to reach out if you have
            any specific questions about any of these!
          </Text>
        </View>
      </View>

      <View></View>

      {projectsData.map((proj, idx) => (
        <View key={proj.id || idx} style={styles.projectCard}>
          {/* Inner content with padding */}
          <View style={styles.projectCardContent}>
            {/* Title */}
            <Text
              style={{
                ...styles.aboutTitle,
                marginBottom: "8px",
                textAlign: "center",
              }}
            >
              {proj.title}
            </Text>

            {/* Images */}
            <View
              style={
                isSmallScreen
                  ? {
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                    }
                  : {
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      width: "90%",
                    }
              }
            >
              {proj.images.map((img, i) => (
                <View
                  key={i}
                  style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                    elevation: 5,
                    backgroundColor: "white", // needed for shadow on Web
                  }}
                >
                  <Image
                    source={{ uri: img }}
                    style={[
                      styles.projectPic,
                      {
                        width: calculateImageWidth(proj.images, isSmallScreen),
                      },
                    ]}
                  />
                </View>
              ))}
            </View>

            {/* Description */}
            <Text
              style={[
                styles.aboutText,
                { marginTop: 10, textAlign: "center" },
                isSmallScreen && { fontSize: "18px" },
              ]}
            >
              {proj.description}
            </Text>

            {/* Tools */}
            {proj.tools && proj.tools.length > 0 && (
              <Text
                style={[
                  styles.regularText,
                  { marginTop: 10, textAlign: "center" },
                  isSmallScreen && { fontSize: "18px" },
                ]}
              >
                <Text style={{ fontWeight: "bold" }}>Tools: </Text>{" "}
                {proj.tools.join(", ")}
              </Text>
            )}

            {/* Buttons */}
            {proj.buttons && proj.buttons.length > 0 && (
              <View style={[styles.projectActionButtonRow, { marginTop: 10 }]}>
                {proj.buttons.map((btn, j) => (
                  <TouchableOpacity
                    key={j}
                    style={styles.projectActionButton}
                    onPress={() => {
                      if (btn.link.startsWith("/")) {
                        window.location.href = btn.link;
                      } else {
                        window.open(btn.link, "_blank");
                      }
                    }}
                  >
                    <Text
                      style={{
                        ...styles.projectActionButtonText,
                        fontWeight: "bold",
                        color: "white",
                        margin: "8px",
                      }}
                    >
                      {btn.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Timeline as full-width footer outside inner padding */}
          {proj.timeline && (
            <Text style={styles.timelineFooter}>{proj.timeline}</Text>
          )}
        </View>
      ))}
    </PageShell>
  );
}
