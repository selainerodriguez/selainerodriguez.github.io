import { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import NavBar from "./navBar";
import { styles as homeStyles } from "./home/styles";

export default function PageShell({ page, children }) {
  const [scrolled, setScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const handleScroll = ({ nativeEvent }) => {
    setScrolled(nativeEvent.contentOffset.y > 0);
  };

  return (
    <View style={pageShellStyles.root}>
      <NavBar page={page} scrolled={scrolled} onLayout={setNavHeight} />
      <ScrollView
        style={pageShellStyles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: navHeight }}
      >
        <View style={homeStyles.container}>{children}</View>
      </ScrollView>
    </View>
  );
}

const pageShellStyles = StyleSheet.create({
  root: {
    backgroundColor: "#e0d8e7",
    flex: 1,
    height: "100vh",
  },
  scrollView: {
    flex: 1,
  },
});
