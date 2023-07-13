// import logo from './logo.svg';
import "./App.css";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

function App() {
  // Allows us to direct to new page when buttons are clicked
  const onPressContactButton = (url) => {
    window.location.href = url;
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Text style={styles.navBarSelected}>HOME</Text>
        <Text style={styles.navBarUnselected}>PORTFOLIO</Text>
        <Text style={styles.navBarUnselected}>TEACHING</Text>
        <Text style={styles.navBarUnselected}>RESUME</Text>
      </View>

      {/* Intro Box */}
      <ScrollView style={{ width: `100%` }}>
        <View style={styles.content}>
          {/* Intro Box */}
          <View style={styles.introContainer}>
            <View style={styles.introTextBox}>
              {/* Text */}
              <View>
                <Text style={styles.introTitle}>Selaine Rodriguez</Text>
                <Text style={styles.introText}>
                  Hey there! I'm currently a Master's Student at Stanford
                  studying Computer Science -- specializing in Human Computer
                  Interaction. I'm interested in education, accessibility, and
                  game design.
                </Text>
              </View>

              {/* Contact Buttons */}
              <View style={styles.buttonGroup}>
                {/* Email */}
                <TouchableOpacity
                  onPress={() =>
                    onPressContactButton("mailto:selaine@stanford.edu")
                  }
                >
                  <Image
                    style={styles.buttonSizing}
                    source={require("./media/icons/email_icon.png")}
                  />
                </TouchableOpacity>

                {/* LinkedIn */}
                <TouchableOpacity
                  onPress={() =>
                    onPressContactButton(
                      "https://www.linkedin.com/in/selainerodriguez/"
                    )
                  }
                >
                  <Image
                    style={styles.buttonSizing}
                    source={require("./media/icons/linkedin_icon.png")}
                  />
                </TouchableOpacity>

                {/* Github */}
                <TouchableOpacity
                  onPress={() =>
                    onPressContactButton("https://github.com/selainerodriguez/")
                  }
                >
                  <Image
                    style={styles.buttonSizing}
                    source={require("./media/icons/github_icon.png")}
                  />
                </TouchableOpacity>

                {/* Instagram */}
                <TouchableOpacity
                  onPress={() =>
                    onPressContactButton(
                      "https://www.instagram.com/selaine.rdgz/"
                    )
                  }
                >
                  <Image
                    style={styles.buttonSizing}
                    source={require("./media/icons/instagram_icon.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Profile Pic */}
            <Image
              style={styles.introPic}
              source={require("./media/intro_pic.JPG")}
            />
          </View>

          <Text style={styles.sectionTitle}>About Me</Text>

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
                Python, C++, C, Golang, JavaScript, HTML, CSS
              </Text>

              {/* Technologies */}
              <Text style={styles.aboutTitle}>Technologies:</Text>
              <Text style={styles.aboutText}>
                Git, React, React Native, MongoDB, NodeJS, Expo, Unity, Blender,
                Canva
              </Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Recent Projects</Text>

          <View style={styles.projectContainer}>
            <View style={styles.projectRow}>
              <View style={styles.projectInfo}>
                <Image
                  style={styles.projectPic}
                  source={require("./media/projects/crossword.png")}
                />
                <Text
                  style={{
                    ...styles.aboutSubtitle,
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  Crossword Generator
                </Text>
              </View>
              <View style={styles.projectInfo}>
                <Image
                  style={styles.projectPic}
                  source={require("./media/projects/task_together.png")}
                />
                <Text
                  style={{
                    ...styles.aboutSubtitle,
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  Task Together
                </Text>
              </View>
              <View style={styles.projectInfo}>
                <Image
                  style={styles.projectPic}
                  source={require("./media/projects/cardinal3D.png")}
                />
                <Text
                  style={{
                    ...styles.aboutSubtitle,
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  Cardinal3D Software
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "#90839C",
                  width: "100%",
                }}
              >
                <Text style={styles.projectButton}>See All Projects</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Recent Teaching</Text>

          <View style={{ ...styles.projectContainer, marginBottom: "40px" }}>
            <View style={styles.projectRow}>
              <View style={styles.projectInfo}>
                <Image
                  style={styles.projectPic}
                  source={require("./media/teaching/thesis.png")}
                />
                <Text
                  style={{
                    ...styles.aboutSubtitle,
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  Honors Thesis Work
                </Text>
              </View>
              <View style={styles.projectInfo}>
                <Image
                  style={styles.projectPic}
                  source={require("./media/teaching/web_dev.png")}
                />
                <Text
                  style={{
                    ...styles.aboutSubtitle,
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  Web Development Curriculum
                </Text>
              </View>
              <View style={styles.projectInfo}>
                <Image
                  style={styles.projectPic}
                  source={require("./media/teaching/breakout.png")}
                />
                <Text
                  style={{
                    ...styles.aboutSubtitle,
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  CS 106A Section Leading
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "#90839C",
                  width: "100%",
                }}
              >
                <Text style={styles.projectButton}>See All Teaching</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#90839C",
              width: "100%",
            }}
          >
            <Text style={{ ...styles.projectButton, fontSize: 20 }}>
              Designed and Created by Selaine Rodriguez - Last Updated 7/13/23
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutSubtitle: {
    color: "#90839C",
    fontFamily: "Inter",
    fontSize: 25,
    fontWeight: 600,
  },
  aboutTextBox: {
    flexDirection: "column",
    flexWrap: "wrap",
    minHeight: "400px",
    width: "100%",
  },
  aboutTitle: {
    color: "#574369",
    fontFamily: "Inter",
    fontSize: 25,
    fontWeight: 600,
  },
  aboutText: {
    color: "#231f20",
    fontFamily: "Inter",
    fontSize: 25,
    fontWeight: 400,
  },
  buttonGroup: {
    flexDirection: "row",
  },
  buttonSizing: {
    height: "60px",
    marginRight: "10px",
    width: "60px",
  },
  container: {
    backgroundColor: "#e0d8e7",
    flex: 1,
    height: "100vw",
    minHeight: "100vw",
    minWidth: "100vw",
    width: "100vw",
  },
  content: {
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  introContainer: {
    border: "2px solid black",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "2%",
    width: "90%",
  },
  introPic: {
    marginLeft: "15px",
    objectFit: "cover",
    width: "30%",
  },
  introTitle: {
    color: "#574369",
    fontFamily: "Inter",
    fontSize: 50,
    fontWeight: 600,
  },
  introText: {
    color: "#231f20",
    fontFamily: "Inter",
    fontSize: 25,
    fontWeight: 400,
    marginTop: 20,
  },
  introTextBox: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: "400px",
    width: "70%",
  },
  navBar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "2%",
    marginBottom: "2%",
  },
  navBarSelected: {
    color: "#90839c",
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: 600,
  },
  navBarUnselected: {
    color: "#231f20",
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: 600,
  },
  projectButton: {
    color: "#FFFFFF",
    fontFamily: "Inter",
    fontSize: 30,
    fontWeight: 600,
    margin: 5,
  },
  projectContainer: {
    border: "2px solid black",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
  },
  projectInfo: {
    alignItems: "center",
    flexDirection: "column",
    width: "30%",
  },
  projectPic: {
    boxShadow: "10px 10px 5px lightblue",
    height: "265px",
    objectFit: "contain",
    width: "100%",
  },
  projectRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: "10px",
    marginTop: "10px",
  },
  sectionTitle: {
    color: "#574369",
    fontFamily: "Inter",
    fontSize: 40,
    fontWeight: 600,
    margin: 20,
  },
});

export default App;
