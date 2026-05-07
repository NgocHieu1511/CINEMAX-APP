import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomTabs from "../navigation/BottomTabs";
import MovieCard from "../components/MovieCard";

const data = [
  {
    id: "1",
    title: "Spider-Man No Way Home",
    year: "2021",
    duration: "148 Minutes",
    type: "Action | Movie",
    image: require("../../assets/img/spider-man-poster.png"),
  },
];

const recommend = [
  {
    id: "1",
    title: "The Jungle Waiting",
    category: "Adventure", // ✅ thêm
    rating: "4.8", // ✅ thêm
    image: require("../../assets/img/jungle-poster.png"),
  },
  {
    id: "2",
    title: "Life of Pi",
    category: "Drama",
    rating: "4.7",
    image: require("../../assets/img/life-poster.png"),
  },
  {
    id: "3",
    title: "The Lion King",
    category: "Animation",
    rating: "4.6",
    image: require("../../assets/img/spider-man-poster.png"),
  },
];

export default function Search() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SEARCH INPUT */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#999" />
          <TextInput
            placeholder="Type title, categories, years, etc"
            placeholderTextColor="#999"
            style={styles.input}
          />
        </View>

        {/* CATEGORY */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categories}>
            <Text style={styles.activeCategory}>All</Text>
            <Text style={styles.category}>Comedy</Text>
            <Text style={styles.category}>Animation</Text>
            <Text style={styles.category}>Dokument</Text>
          </View>
        </ScrollView>

        {/* TODAY */}
        <Text style={styles.sectionTitle}>Today</Text>

        {data.map((item) => (
          <View key={item.id} style={styles.cardRow}>
            <Image source={item.image} style={styles.poster} />

            <View style={styles.info}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Premium</Text>
              </View>

              <Text style={styles.title} numberOfLines={1}>
                {item.title}
              </Text>

              <Text style={styles.meta}>
                <Image
                  source={require("../../assets/icons/calendar-icon.png")}
                />{" "}
                {item.year}
              </Text>
              <View style={styles.row}>
                <Text style={styles.meta}>
                  <Image
                    source={require("../../assets/icons/clock-icon.png")}
                  />{" "}
                  {item.duration}
                </Text>
                <View style={styles.pg}>
                  <Text style={styles.pgText}>PG-13</Text>
                </View>
              </View>

              <Text style={styles.meta}>
                <Image source={require("../../assets/icons/film-icon.png")} />{" "}
                Action | <Text style={styles.type}>Movie</Text>
              </Text>
            </View>
          </View>
        ))}

        {/* RECOMMEND */}
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Recommend for you</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        <FlatList
          data={recommend}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MovieCard
              image={item.image}
              title={item.title}
              category={item.category}
              rating={item.rating}
            />
          )}
        />
      </ScrollView>
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

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252836",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    color: "#92929D",
    fontFamily: "MontserratMedium",
    fontSize: 14,
    letterSpacing: 0.12,
  },

  categories: {
    flexDirection: "row",
    marginTop: 24,
    alignItems: "center",
  },

  activeCategory: {
    backgroundColor: "#2A2A3D",
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginRight: 10,
    color: "#12CDD9",
    fontFamily: "MontserratMedium",
    fontSize: 12,
    letterSpacing: 0.12,
  },

  category: {
    color: "#EBEBEF",
    fontFamily: "MontserratMedium",
    fontSize: 12,
    letterSpacing: 0.12,
    marginRight: 15,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    letterSpacing: 0.12,
    marginTop: 24,
  },

  cardRow: {
    flexDirection: "row",
    marginTop: 16,
  },

  poster: {
    width: 100,
    height: 140,
    borderRadius: 12,
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  badge: {
    backgroundColor: "#FF8700",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  badgeText: {
    color: "#FFF",
    fontFamily: "MontserratMedium", // ✅ dùng đúng key đã import
    fontSize: 10,
    letterSpacing: 0.12,
  },

  title: {
    color: "#FFF",
    fontFamily: "MontserratSemiBold", // ✅ đúng với font-weight: 600
    fontSize: 16,
    letterSpacing: 0.12,
    marginTop: 12,
  },

  meta: {
    color: "#92929D",
    fontFamily: "MontserratMedium",
    fontSize: 12,
    letterSpacing: 0.12,
    marginTop: 14,
    marginRight: 12,
    marginTop: 14,
  },
  type: {
    color: "#FFF",
    fontFamily: "MontserratMedium", // ✅ tương ứng font-weight: 500
    fontSize: 12,
    letterSpacing: 0.12,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  pg: {
    marginTop: 12,
    borderColor: "#12CDD9",
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },

  pgText: {
    color: "#12CDD9",
    fontFamily: "MontserratMedium", // ✅ font-weight: 500
    fontSize: 12,
    letterSpacing: 0.12,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 71,
    marginBottom: 16,
  },

  seeAll: {
    color: "#12CDD9",
    fontFamily: "MontserratMedium", // ✅ 500
    fontSize: 14,

    marginTop: 18,
  },

  recommendCard: {
    marginRight: 12,
    marginTop: 16,
    width: 120,
  },

  recommendImg: {
    width: "100%",
    height: 160,
    borderRadius: 12,
  },

  recommendTitle: {
    color: "#fff",
    marginTop: 6,
  },
});
