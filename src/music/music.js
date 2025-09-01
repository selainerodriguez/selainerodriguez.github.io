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
import { musicData } from "./musicData"; // <-- your dataset, like projectsData

export default function Music() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < breakPoints.small;

  // Image sizing logic
  function calculateImageWidth(images, isSmallScreen) {
    if (isSmallScreen) return 300; // stacked
    if (images.length < 3) return 400;
    return 250;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <NavBar page={"music"} />
        <Text style={styles.sectionTitle}>Music Portfolio</Text>

        {/* Intro Section */}
        <View style={{ ...styles.introContainer, marginBottom: "16px" }}>
          <View style={{ ...styles.introTextBox, width: "100%" }}>
            <Text
              style={[
                styles.regularText,
                isSmallScreen && { fontSize: "18px" },
              ]}
            >
              A showcase of my music work, including performances, compositions,
              and collaborations. Explore recordings, scores, and highlights
              from my journey as a musician.
            </Text>
          </View>
        </View>

        {/* Music Portfolio Cards */}
        {musicData.map((piece, idx) => (
          <View key={piece.id || idx} style={styles.projectCard}>
            <View style={styles.projectCardContent}>
              {/* Title */}
              <Text
                style={{
                  ...styles.aboutTitle,
                  marginBottom: 4,
                  textAlign: "center",
                }}
              >
                {piece.title}
              </Text>

              {/* Organization / Role (optional) */}
              {piece.role && (
                <Text style={[styles.aboutSubtitle, { textAlign: "center" }]}>
                  {piece.role} — {piece.location}
                </Text>
              )}

              {/* Images */}
              {piece.images && piece.images.length > 0 && (
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
                  {piece.images.map((img, i) => (
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
                              piece.images,
                              isSmallScreen
                            ),
                          },
                        ]}
                      />
                    </View>
                  ))}
                </View>
              )}

              {/* Description */}
              <Text
                style={[
                  styles.aboutText,
                  { marginTop: 10, marginBottom: "10px", textAlign: "center" },
                  isSmallScreen && { fontSize: "18px" },
                ]}
              >
                {piece.description}
              </Text>

              {/* Highlights */}
              {piece.highlights && piece.highlights.length > 0 && (
                <View style={{ marginTop: 12 }}>
                  {piece.highlights.map((point, hIdx) => (
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

              {/* Buttons */}
              {piece.buttons && piece.buttons.length > 0 && (
                <View
                  style={[styles.projectActionButtonRow, { marginTop: 10 }]}
                >
                  {piece.buttons.map((btn, j) => (
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
            {piece.timeline && (
              <Text style={styles.timelineFooter}>{piece.timeline}</Text>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
