import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BottomTabs from "../navigation/BottomTabs";

export default function Wishlist() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={20} color="#FFF" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Wishlist</Text>

        <View style={{ width: 32 }} />
      </View>

      {/* EMPTY CONTENT */}
      <View style={styles.emptyContainer}>
        <Image
          source={require("../../assets/img/wishlist-img.png")}
          style={styles.emptyImage}
        />

        <Text style={styles.emptyTitle}>There Is No Movie Yet!</Text>

        <Text style={styles.emptyDesc}>
          Find your movie by Type title,{"\n"}
          categories, years, etc
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D2B",
    paddingTop: 52,
    paddingHorizontal: 24,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backBtn: {
    width: 32,
    height: 32,
    borderRadius: 12,
    backgroundColor: "#252836",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "MontserratSemiBold",
    letterSpacing: 0.12,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },

  emptyImage: {
    width: 76,
    height: 76,
    resizeMode: "contain",
  },

  emptyTitle: {
    marginTop: 16,
    color: "#FFF",
    fontSize: 16,
    fontFamily: "MontserratSemiBold",
    letterSpacing: 0.12,
  },

  emptyDesc: {
    marginTop: 8,
    color: "#92929D",
    textAlign: "center",
    fontSize: 12,
    lineHeight: 19,
    fontFamily: "MontserratMedium",
    letterSpacing: 0.12,
  },
});
