import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

import {
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

import BottomTabs from "../navigation/BottomTabs";

export default function MovieDetail() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/spider-man-poster.png")}
        style={styles.background}
        blurRadius={2}
      >
        <View style={styles.overlay}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* HEADER */}
            <View style={styles.header}>
              <TouchableOpacity>
                <Ionicons name="chevron-back" size={26} color="#fff" />
              </TouchableOpacity>

              <Text style={styles.headerTitle}>Spider-Man No Way...</Text>

              <TouchableOpacity style={styles.heartBtn}>
                <Ionicons name="heart" size={24} color="#FB4141" />
              </TouchableOpacity>
            </View>

            {/* POSTER */}
            <View style={styles.posterContainer}>
              <Image
                source={require("../../assets/img/spider-man-poster.png")}
                style={styles.poster}
              />
            </View>

            {/* MOVIE INFO */}
            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <Image
                  source={require("../../assets/icons/calendar-icon.png")}
                />
                <Text style={styles.infoText}>2021</Text>
              </View>

              <View style={styles.infoItem}>
                <Image source={require("../../assets/icons/clock-icon.png")} />
                <Text style={styles.infoText}>148 Minutes</Text>
              </View>

              <View style={styles.infoItem}>
                <Image source={require("../../assets/icons/film-icon.png")} />
                <Text style={styles.infoText}>Action</Text>
              </View>
            </View>

            {/* RATING */}
            <View style={styles.ratingRow}>
              <FontAwesome name="star" size={16} color="#FF8700" />
              <Text style={styles.ratingText}>4.5</Text>
            </View>

            {/* BUTTONS */}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.playBtn}>
                <Ionicons name="play" size={18} color="#fff" />
                <Text style={styles.playText}>Play</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.circleBtn}>
                <Feather name="download" size={20} color="#FF8700" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.circleBtn}>
                <Image source={require("../../assets/icons/share-icon.png")} />
              </TouchableOpacity>
            </View>

            {/* STORY LINE */}
            <View style={styles.storyContainer}>
              <Text style={styles.sectionTitle}>Story Line</Text>

              <Text style={styles.storyText}>
                For the first time in the cinematic history of Spider-Man, our
                friendly neighborhood hero's identity is revealed, bringing his
                Super Hero responsibilities into conflict with his normal life
                and putting those he cares about most at risk.
                <Text style={styles.moreText}> More</Text>
              </Text>
            </View>

            {/* CAST */}
            <View style={styles.castContainer}>
              <Text style={styles.sectionTitle}>Cast and Crew</Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>

      <BottomTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D2B",
  },

  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(20,20,35,0.85)",
    paddingTop: 52,
    paddingHorizontal: 28,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
  },
  heartBtn: {
    backgroundColor: "#2A2A3D",
    padding: 4,
    borderRadius: 12,
    backgroundColor: "#252836",
    opacity: 0.8,
  },

  posterContainer: {
    alignItems: "center",
    marginTop: 28,
  },

  poster: {
    width: 200,
    height: 300,
    borderRadius: 24,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },

  infoItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  infoText: {
    marginLeft: 4,
    color: "#92929D",
    fontFamily: "MontserratMedium",
    fontSize: 12,
  },

  ratingRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: "rgba(37, 40, 54, 0.32)",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },

  ratingText: {
    color: "#FF8700",
    fontFamily: "MontserratSemiBold",
    fontSize: 12,
    marginLeft: 4,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
  },

  playBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF8700",
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 30,
    marginRight: 16,
  },

  playText: {
    color: "#FFF",
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    marginLeft: 8,
  },

  circleBtn: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#252836",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
  },

  storyContainer: {
    marginTop: 32,
  },

  sectionTitle: {
    color: "#FFF",
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    marginBottom: 12,
  },

  storyText: {
    color: "#EBEBEF",
    fontFamily: "MontserratRegular",
    fontSize: 14,
    letterSpacing: 0.12,
  },

  moreText: {
    color: "#12CDD9",
    fontFamily: "MontserratSemiBold",
  },

  castContainer: {
    marginTop: 24,
    marginBottom: 120,
  },
});
