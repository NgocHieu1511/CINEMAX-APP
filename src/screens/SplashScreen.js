import React, { useEffect } from "react";
import { View, Text, StyleSheet, Animated, Image } from "react-native";

export default function SplashScreen({ navigation }) {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // animation fade in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // chuyển màn sau 2s
    const timer = setTimeout(() => {
      navigation.replace("Onboarding1");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image
        source={require("../../assets/img/logo.png")}
        style={styles.logoBox}
      ></Image>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D2B",
    justifyContent: "center",
    alignItems: "center",
  },
});
