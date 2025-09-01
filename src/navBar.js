import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  useWindowDimensions,
  Animated,
  Easing,
} from "react-native";

import { Link } from "react-router-dom";
import { breakPoints } from "../src/styles/global-styles";

export default function NavBar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowDimensions();

  const isSmallScreen = width < breakPoints.small;

  const animation = useRef(new Animated.Value(0)).current; // 0 = closed, 1 = open

  // Handles drop-down effect of hamburger menu
  useEffect(() => {
    Animated.timing(animation, {
      toValue: menuOpen ? 1 : 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false, // height animations need false
    }).start();
  }, [menuOpen, animation]);

  const menuHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 160],
  });

  const menuOpacity = animation;

  // All links in NavBar
  const renderLinks = () => (
    <>
      <Link
        style={
          props.page === "home"
            ? styles.navBarSelected
            : styles.navBarUnselected
        }
        to="/"
        onClick={() => setMenuOpen(false)}
      >
        HOME
      </Link>
      <Link
        style={
          props.page === "portfolio"
            ? styles.navBarSelected
            : styles.navBarUnselected
        }
        to="/portfolio"
        onClick={() => setMenuOpen(false)}
      >
        PORTFOLIO
      </Link>
      <Link
        style={
          props.page === "teaching"
            ? styles.navBarSelected
            : styles.navBarUnselected
        }
        to="/teaching"
        onClick={() => setMenuOpen(false)}
      >
        TEACHING
      </Link>
      <Link
        style={
          props.page === "music"
            ? styles.navBarSelected
            : styles.navBarUnselected
        }
        to="/music"
        onClick={() => setMenuOpen(false)}
      >
        MUSIC
      </Link>
      <Link
        style={styles.navBarUnselected}
        to="/Selaine-Rodriguez-CV-July-2025.pdf"
        target="_blank"
        download
        onClick={() => setMenuOpen(false)}
      >
        CV
      </Link>
    </>
  );

  return (
    <View style={styles.navBarContainer}>
      {isSmallScreen ? (
        <>
          <View style={styles.mobileHeader}>
            <Text style={styles.nameText}>Selaine Rodriguez</Text>
            <Pressable onPress={() => setMenuOpen(!menuOpen)}>
              <Text style={styles.hamburgerText}>☰</Text>
            </Pressable>
          </View>
          <Animated.View
            style={[
              styles.mobileMenu,
              {
                height: menuHeight,
                opacity: menuOpacity,
                overflow: "hidden",
              },
            ]}
          >
            {renderLinks()}
          </Animated.View>
        </>
      ) : (
        <View style={styles.navBar}>{renderLinks()}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  navBarContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: "100%",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navBarSelected: {
    color: "#90839c",
    fontFamily: "AgrandirTextBold",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "none",
    marginVertical: 5,
  },
  navBarUnselected: {
    color: "#231f20",
    fontFamily: "AgrandirTextBold",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "none",
    marginVertical: 5,
  },
  mobileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#231f20",
    fontFamily: "AgrandirTextBold",
  },
  mobileMenu: {
    marginTop: 10,
    flexDirection: "column",
    gap: 8,
  },
  hamburgerText: {
    fontSize: 28,
    color: "#231f20",
    paddingHorizontal: 10,
  },
});
