import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import BottomTabs from "../navigation/BottomTabs";
import { useNavigation } from "@react-navigation/native";

export default function Download() {
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

        <Text style={styles.headerTitle}>Download</Text>

        <View style={{ width: 32 }} />
      </View>

      {/* EMPTY */}
      <View style={styles.emptyContainer}>
        <Image
          source={require("../../assets/img/folder-img.png")}
          style={styles.emptyImage}
        />

        <Text style={styles.emptyTitle}>There Is No Movie Yet!</Text>

        <Text style={styles.emptyDesc}>
          Find your movie by Type title,{"\n"}
          categories, years, etc
        </Text>
      </View>

      {/* BOTTOM TAB */}
      <BottomTabs />
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
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
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
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    letterSpacing: 0.12,
  },

  emptyDesc: {
    marginTop: 8,
    color: "#92929D",
    textAlign: "center",
    fontFamily: "MontserratMedium",
    fontSize: 12,
    lineHeight: 19.2,
    letterSpacing: 0.12,
  },
});
