import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import NavBar from "../navBar";
import { styles } from "../home/styles";
import { breakPoints } from "../styles/global-styles";
import { teachingData } from "./teachingData";

export default function TeachingPortfolio() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < breakPoints.small;

  // For up to 3 images, adjust appropriately
  function calculateImageWidth(images, isSmallScreen) {
    if (isSmallScreen) return 300; // column mode
    if (images.length < 3) return 400;
    return 250;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <NavBar page={"teaching"} />
        <Text
          style={[
            styles.sectionTitle,
            { textAlign: "center" },
            isSmallScreen && { marginTop: 0 },
          ]}
        >
          Teaching Experience
        </Text>

        {/* Intro Section */}
        <View style={{ ...styles.introContainer, marginBottom: "16px" }}>
          <View style={{ ...styles.introTextBox, width: "100%" }}>
            <Text
              style={[
                styles.regularText,
                { textAlign: "center" },
                isSmallScreen && { fontSize: "18px" },
              ]}
            >
              I've taught a little bit of everything, from university-level
              courses to community programs. Check that out here!
            </Text>
          </View>
        </View>

        {/* Teaching Experience Cards */}
        {teachingData.map((exp, idx) => (
          <View key={exp.id || idx} style={styles.projectCard}>
            {/* Inner content with padding */}
            <View style={styles.projectCardContent}>
              {/* Title */}
              <Text
                style={{
                  ...styles.aboutTitle,
                  marginBottom: 4,
                  textAlign: "center",
                }}
              >
                {exp.role}
              </Text>

              {/* Organization */}
              <Text style={[styles.aboutSubtitle, { textAlign: "center" }]}>
                {exp.organization} — {exp.location}
              </Text>

              {/* Description */}
              <Text
                style={[
                  styles.aboutText,
                  { marginTop: 10, marginBottom: "10px", textAlign: "center" },
                  isSmallScreen && { fontSize: "18px" },
                ]}
              >
                {exp.description}
              </Text>

              {/* Images */}
              {exp.images && exp.images.length > 0 && (
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
                  {exp.images.map((img, i) => (
                    <View
                      key={i}
                      style={{
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 5,
                        elevation: 5,
                        backgroundColor: "white",
                      }}
                    >
                      <Image
                        source={{ uri: img }}
                        style={[
                          styles.projectPic,
                          {
                            width: calculateImageWidth(
                              exp.images,
                              isSmallScreen
                            ),
                          },
                        ]}
                      />
                    </View>
                  ))}
                </View>
              )}

              {/* Highlights */}
              {exp.highlights && exp.highlights.length > 0 && (
                <View style={{ marginTop: 12 }}>
                  {exp.highlights.map((point, hIdx) => (
                    <Text
                      key={hIdx}
                      style={[
                        styles.regularText,
                        {
                          marginBottom: 10,
                          lineHeight: 20,
                          textAlign: "center",
                        },
                        isSmallScreen && { fontSize: "18px" },
                      ]}
                    >
                      • {point}
                    </Text>
                  ))}
                </View>
              )}

              {/* Buttons for honors thesis */}
              {exp.buttons && exp.buttons.length > 0 && (
                <View style={[styles.projectActionButtonRow]}>
                  {exp.buttons.map((btn, j) => (
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

            {/* Timeline */}
            {exp.timeline && (
              <Text style={styles.timelineFooter}>{exp.timeline}</Text>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
