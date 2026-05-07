import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MovieCard({ image, title, category, rating }) {
  return (
    <View style={styles.card}>
      {/* Image */}
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />

        {/* Rating */}
        <View style={styles.rating}>
          <Ionicons name="star" size={14} color="#FFA500" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.category}>{category}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 150,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#252836",
    marginRight: 12,
    marginTop: 16,
  },

  imageWrapper: {
    position: "relative",
  },

  image: {
    width: "100%",
  },

  rating: {
    position: "absolute",
    top: 10,
    right: 10,

    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,

    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  ratingText: {
    color: "#FF8700",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
    letterSpacing: 0.12,
    backgroundColor: "#25283652",
  },

  info: {
    paddingHorizontal: 8,
  },

  title: {
    color: "#FFFFFF",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    letterSpacing: 0.12,
    paddingTop: 12,
  },

  category: {
    color: "#92929D",
    fontFamily: "Montserrat-Medium",
    fontSize: 10,
    letterSpacing: 0.12,
    marginTop: 4,
    paddingBottom: 8,
  },
});
