import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import BottomTabs from "../navigation/BottomTabs";
import { useNavigation } from "@react-navigation/native";

const CAST = [
  {
    id: "1",
    name: "Jon Watts",
    role: "Directors",
    avatar: require("../../assets/icons/avatar.png"),
  },
  {
    id: "2",
    name: "Chris McKenna",
    role: "Writers",
    avatar: require("../../assets/img/avatar-2.png"),
  },
  {
    id: "3",
    name: "Matt Reeves",
    role: "Writers",
    avatar: require("../../assets/img/avatar-3.png"),
  },
];

const EPISODES = [
  {
    id: "1",
    title: "Episode 1",
    duration: "1h33m",
    badge: "Premium",
    thumbnail: require("../../assets/img/ep-img.png"),
    description:
      "Football player who longs to write his own music. It's not all smiles for this hunk though after he gets involved with his music teacher.",
  },
  {
    id: "2",
    title: "Episode 2",
    duration: "1h30m",
    badge: "Premium",
    thumbnail: require("../../assets/img/ep-img.png"),
    description:
      "Football player who longs to write his own music. It's not all smiles for this hunk though after he gets involved with his music teacher.",
  },
];

const SEASONS = ["Season 1", "Season 2", "Season 3", "Season 4"];

export default function SerialDetail() {
  const navigation = useNavigation();
  const [selectedSeason, setSelectedSeason] = useState("Season 2");
  const [seasonDropdown, setSeasonDropdown] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const storyLine =
    "Originally a story from Archie Comics which started in 1941, Riverdale centres around a group of high school students who are shocked by the death of classmate, Jason Blossom. Together they unravel the secrets of Riverdale and who";

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/riverdale-poster.png")}
        style={styles.background}
        blurRadius={2}
      >
        <View style={styles.overlay}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* HEADER */}
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={26} color="#fff" />
              </TouchableOpacity>

              <Text style={styles.headerTitle}>Riverdale</Text>

              <TouchableOpacity style={styles.heartBtn}>
                <Ionicons name="heart" size={24} color="#FB4141" />
              </TouchableOpacity>
            </View>

            {/* POSTER */}
            <View style={styles.posterContainer}>
              <Image
                source={require("../../assets/img/riverdale-poster.png")}
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
              <View style={styles.separator} />

              <View style={styles.infoItem}>
                <Image source={require("../../assets/icons/clock-icon.png")} />
                <Text style={styles.infoText}>148 Minutes</Text>
              </View>
              <View style={styles.separator} />

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
              <TouchableOpacity style={styles.trailerBtn}>
                <Ionicons name="play" size={18} color="#fff" />
                <Text style={styles.trailerText}>Trailer</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.circleBtn}>
                <Feather name="download" size={20} color="#12CDD9" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.circleBtn}>
                <Image source={require("../../assets/icons/share-icon.png")} />
              </TouchableOpacity>
            </View>

            {/* STORY LINE */}
            <View style={styles.storyContainer}>
              <Text style={styles.sectionTitle}>Story Line</Text>
              <Text style={styles.storyText}>
                Originally a story from Archie Comics which started in 1941,
                Riverdale centres around a group of high school students who are
                shocked by the death of classmate, Jason Blossom. Together
                theyunravel the secrets of Riverdale and who
                <Text style={styles.moreText}> More</Text>
              </Text>
            </View>

            {/* CAST AND CREW */}
            <View style={styles.castContainer}>
              <Text style={styles.sectionTitle}>Cast and Crew</Text>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.castRow}
            >
              {CAST.map((person) => (
                <View key={person.id} style={styles.castItem}>
                  <Image source={person.avatar} style={styles.castAvatar} />
                  <View style={styles.castInfo}>
                    <Text style={styles.castName}>{person.name}</Text>
                    <Text style={styles.castRole}>{person.role}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>

            {/* EPISODE */}
            <View style={styles.episodeContainer}>
              <Text style={styles.sectionTitle}>Episode</Text>

              {/* SEASON DROPDOWN */}
              <TouchableOpacity
                style={styles.seasonSelector}
                onPress={() => setSeasonDropdown(!seasonDropdown)}
              >
                <Text style={styles.seasonText}>{selectedSeason}</Text>
                <Ionicons
                  name={seasonDropdown ? "chevron-up" : "chevron-down"}
                  size={16}
                  color="#fff"
                />
              </TouchableOpacity>

              {/* DROPDOWN LIST */}
              {seasonDropdown && (
                <View style={styles.dropdownList}>
                  {SEASONS.map((season) => (
                    <TouchableOpacity
                      key={season}
                      style={styles.dropdownItem}
                      onPress={() => {
                        setSelectedSeason(season);
                        setSeasonDropdown(false);
                      }}
                    >
                      <Text
                        style={[
                          styles.dropdownItemText,
                          selectedSeason === season &&
                            styles.dropdownItemActive,
                        ]}
                      >
                        {season}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}

              {/* EPISODE LIST */}
              {EPISODES.map((ep) => (
                <View key={ep.id} style={styles.episodeCard}>
                  {/* THUMBNAIL */}
                  <View style={styles.thumbnailWrapper}>
                    <Image
                      source={ep.thumbnail}
                      style={styles.episodeThumbnail}
                    />
                    <TouchableOpacity style={styles.playBtn}>
                      <Ionicons name="play" size={20} color="#fff" />
                    </TouchableOpacity>

                    {/* BADGE + DURATION */}
                    <View style={styles.episodeMeta}>
                      <View style={styles.premiumBadge}>
                        <Text style={styles.premiumText}>{ep.badge}</Text>
                      </View>
                      <Text style={styles.durationText}>{ep.duration}</Text>
                    </View>
                  </View>

                  {/* EPISODE INFO */}
                  <View style={styles.episodeInfo}>
                    <View style={styles.episodeTitleRow}>
                      <Text style={styles.episodeTitle}>{ep.title}</Text>
                      <TouchableOpacity>
                        <Feather name="download" size={18} color="#FF8700" />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.episodeDesc} numberOfLines={3}>
                      {ep.description}
                    </Text>
                  </View>
                </View>
              ))}
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
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  headerTitle: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    fontWeight: "600",
  },

  heartBtn: {
    backgroundColor: "#252836",
    padding: 6,
    borderRadius: 12,
    opacity: 0.9,
  },

  /* POSTER */
  posterContainer: {
    alignItems: "center",
    marginTop: 28,
  },

  poster: {
    width: 200,
    height: 280,
    borderRadius: 24,
  },

  /* INFO ROW */
  infoRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    paddingHorizontal: 24,
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

  separator: {
    width: 1,
    height: 16,
    backgroundColor: "#92929D",
    marginHorizontal: 12,
    opacity: 0.5,
  },

  /* RATING */
  ratingRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },

  ratingText: {
    color: "#FF8700",
    fontFamily: "MontserratSemiBold",
    fontSize: 12,
    marginLeft: 4,
  },

  /* BUTTONS */
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },

  trailerBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#12CDD9",
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 30,
    marginRight: 16,
  },

  trailerText: {
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

  /* STORY LINE */
  storyContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  sectionTitle: {
    color: "#FFF",
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },

  storyText: {
    color: "#EBEBEF",
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.12,
  },

  moreText: {
    color: "#12CDD9",
    fontFamily: "MontserratSemiBold",
  },

  /* CAST */
  castContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },

  castRow: {
    paddingLeft: 24,
    paddingRight: 8,
    gap: 12,
    marginTop: 4,
  },

  castItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  castAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  castInfo: {
    justifyContent: "center",
  },

  castName: {
    color: "#FFF",
    fontFamily: "MontserratSemiBold",
    fontSize: 12,
    fontWeight: "600",
  },

  castRole: {
    color: "#92929D",
    fontFamily: "MontserratMedium",
    fontSize: 10,
  },

  /* EPISODE */
  episodeContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
    marginBottom: 120,
  },

  seasonSelector: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 16,
  },

  seasonText: {
    color: "#FFF",
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
    fontWeight: "600",
  },

  dropdownList: {
    backgroundColor: "#252836",
    borderRadius: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },

  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  dropdownItemText: {
    color: "#92929D",
    fontFamily: "MontserratMedium",
    fontSize: 14,
  },

  dropdownItemActive: {
    color: "#FF8700",
    fontFamily: "MontserratSemiBold",
  },

  /* EPISODE CARD */
  episodeCard: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 12,
  },

  thumbnailWrapper: {
    width: 112,
    height: 100,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },

  episodeThumbnail: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  playBtn: {
    position: "absolute",
    top: "35%",
    left: "35%",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 6,
  },

  episodeMeta: {
    position: "absolute",
    top: 8,
    left: 8,
    gap: 4,
  },

  premiumBadge: {
    backgroundColor: "#FF8700",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignSelf: "flex-start",
  },

  premiumText: {
    color: "#FFF",
    fontFamily: "MontserratMedium",
    fontSize: 9,
    fontWeight: "500",
  },

  durationText: {
    color: "#FFF",
    fontFamily: "MontserratMedium",
    fontSize: 10,
  },

  /* EPISODE INFO */
  episodeInfo: {
    flex: 1,
    justifyContent: "flex-start",
  },

  episodeTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },

  episodeTitle: {
    color: "#FFF",
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
    fontWeight: "600",
  },

  episodeDesc: {
    color: "#92929D",
    fontFamily: "MontserratRegular",
    fontSize: 12,
    lineHeight: 18,
  },
});
