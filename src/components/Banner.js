import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function Banner({ image, title, date }) {
  return (
    <View style={styles.banner}>
      <ImageBackground source={image} style={styles.bannerImg}>
        {/* Overlay */}
        <View style={styles.overlay} />

        {/* Text */}
        <View style={styles.bannerText}>
          <Text style={styles.bannerTitle}>{title}</Text>
          <Text style={styles.bannerDate}>{date}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: 300,
    marginRight: 12,
    borderRadius: 16,
    overflow: "hidden",
  },

  bannerImg: {
    width: "100%",
    height: 180,
    justifyContent: "flex-end",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  bannerText: {
    padding: 16,
  },

  bannerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  bannerDate: {
    color: "#ccc",
    fontSize: 12,
    marginTop: 4,
  },
});
