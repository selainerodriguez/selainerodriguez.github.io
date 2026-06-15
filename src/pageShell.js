import { useState, useRef, useEffect } from "react";
import { ScrollView, View, StyleSheet, Animated } from "react-native";
import { useLocation } from "react-router-dom";

import NavBar from "./navBar";
import { styles as homeStyles } from "./home/styles";

export default function PageShell({ page, children }) {
  const [scrolled, setScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const scrollRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const location = useLocation();

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: false,
    });

    fadeAnim.setValue(0);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [location.pathname]);

  const handleScroll = ({ nativeEvent }) => {
    setScrolled(nativeEvent.contentOffset.y > 0);
  };

  return (
    <View style={pageShellStyles.root}>
      <NavBar page={page} scrolled={scrolled} onLayout={setNavHeight} />

      <ScrollView
        ref={scrollRef}
        style={pageShellStyles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingTop: navHeight,
        }}
      >
        <Animated.View
          style={[
            homeStyles.container,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          {children}
        </Animated.View>
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
