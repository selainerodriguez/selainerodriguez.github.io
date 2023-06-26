// import logo from './logo.svg';
import './App.css';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


function App() {
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
      <View style={styles.navBar}>
        <Text style={styles.navBarSelected}>
          HOME
        </Text>
        <Text style={styles.navBarUnselected}>
          PORTFOLIO
        </Text>
        <Text style={styles.navBarUnselected}>
          TEACHING
        </Text>
        <Text style={styles.navBarUnselected}>
          RESUME
        </Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.introContainer}>
            <View style={styles.introTextBox}>
              <Text style={styles.introTitle}>
                Selaine Rodriguez
              </Text>
              <Text style={styles.introText}>
                Hey there! I'm currently a Master's Student at Stanford studying Computer Science -- specializing in Human Computer Interaction.

                I'm interested in education, accessibility, and game design.
              </Text>
            </View>
            <Image style={styles.introPic} source={require("./media/intro_pic.JPG")} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0d8e7",
    flex: 1,
    height: "100vw",
    minHeight: "100vw",
    minWidth: "100vw",
    width: "100vw",
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
  },
  introContainer: {
    border: "2px solid black",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5%",
    width: "90%"
  },
  introPic: {
    height: "30%",
    width: "30%",
  },
  introTitle: {
    color: "#574368",
    fontFamily: "Inter",
    fontSize: 50,
    fontWeight: 600,
  },
  introText: {
    color: "#231f20",
    fontFamily: "Inter",
    fontSize: 22,
    fontWeight: 400,
  },
  introTextBox: {
    flexDirection: "column",
    flexWrap: "wrap"
  },
  navBar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "2%",
    marginBottom: "2%"
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
  }

});

export default App;
