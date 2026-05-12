import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import BottomTabs from "../navigation/BottomTabs";
import MovieCard from "../components/MovieCard";
import Banner from "../components/Banner";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const movies = [
  {
    id: "1",
    title: "Spider-Man No Way Home",
    image: require("../../assets/img/spider-man-poster.png"),
    rating: 4.5,
    category: "Action",
  },
  {
    id: "2",
    title: "Life of Pi",
    image: require("../../assets/img/spider-man-poster.png"),
    rating: 4.5,
    category: "Action",
  },
  {
    id: "3",
    title: "Riverdale",
    image: require("../../assets/img/spider-man-poster.png"),
    rating: 4.2,
    category: "Action",
  },
];
const banners = [
  {
    id: "1",
    title: "",
    date: "",
    image: require("../../assets/img/banner3.jpg"),
  },
  {
    id: "2",
    title: "Black Panther: Wakanda Forever",
    date: "On Dec 16, 2022",
    image: require("../../assets/img/banner1.1.png"),
  },
  {
    id: "3",
    title: "",
    date: "",
    image: require("../../assets/img/banner1.jpg"),
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileRow}>
            <Image
              source={require("../../assets/icons/avatar.png")}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.hello}>Hello, Smith</Text>
              <Text style={styles.subText}>
                Let’s stream your favorite movie
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.heartBtn}
            onPress={() => navigation.navigate("Wishlist")}
          >
            <Ionicons name="heart" size={24} color="#FB4141" />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#999" />
          <TextInput
            placeholder="Search a title..."
            placeholderTextColor="#999"
            style={styles.input}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Genre")}>
            <Image source={require("../../assets/icons/filter-icon.png")} />
          </TouchableOpacity>
        </View>

        {/* Banner */}
        <View style={{ marginTop: 24 }}>
          <FlatList
            data={banners}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Banner image={item.image} title={item.title} date={item.date} />
            )}
          />
        </View>

        {/* Dots */}
        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categories}>
            <TouchableOpacity style={styles.activeCategory}>
              <Text style={styles.activeCategoryText}>All</Text>
            </TouchableOpacity>
            <Text style={styles.category}>Comedy</Text>
            <Text style={styles.category}>Animation</Text>
            <Text style={styles.category}>Dokument</Text>
          </View>
        </ScrollView>

        {/* Popular */}
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Most popular</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        <FlatList
          data={movies}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MovieCard
              image={item.image}
              title={item.title}
              category={item.category}
              rating={item.rating}
              onPress={() => navigation.navigate("MovieDetail")}
            />
          )}
        />
        {/* Upcoming Movies */}
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Upcoming Movies</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("UpcomingMovies")}
          >
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomTabs />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D2B",
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 16,
  },

  hello: {
    color: "#FFFFFF",
    fontFamily: "Montserrat-SemiBold", // nên dùng đúng file font
    fontSize: 16,
    letterSpacing: 0.12,
    lineHeight: 22,
  },

  subText: {
    color: "#92929D",
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
    letterSpacing: 0.12,
    lineHeight: 16,
  },

  heartBtn: {
    backgroundColor: "#2A2A3D",
    padding: 4,
    borderRadius: 12,
    backgroundColor: "#252836",
    opacity: 0.8,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2A2A3D",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 33,
  },

  input: {
    flex: 1,

    marginHorizontal: 10,
    borderRightWidth: 1,
    borderRightColor: "grey",
    marginRight: 8,
    color: "#92929D",
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 18,
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 12,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: "#19545F",
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: "#12CDD9",
    width: 24,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    letterSpacing: 0.12,
    marginTop: 20,
  },

  categories: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
  },

  activeCategory: {
    backgroundColor: "#2A2A3D",
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginRight: 10,
  },

  activeCategoryText: {
    color: "#12CDD9",
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
  },

  category: {
    color: "#EBEBEF",
    fontFamily: "Montserrat-Medium",
    fontSize: 12,

    marginRight: 15,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  seeAll: {
    color: "#12CDD9",
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    marginTop: 15,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#1F1D2B",
    borderTopWidth: 0.5,
    borderTopColor: "#333",
  },
});
