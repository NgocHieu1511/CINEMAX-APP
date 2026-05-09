// src/screens/UpcommingMovie.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const upcomingMovies = [
  {
    id: "1",
    title: "The Batman",
    date: "March 2, 2022",
    genre: "Action",
    duration: "148 Minutes",
    rating: "4.8",
    image: require("../../assets/img/spider-man-poster.png"),
  },
  {
    id: "2",
    title: "Doctor Strange 2",
    date: "May 6, 2022",
    genre: "Fantasy",
    duration: "126 Minutes",
    rating: "4.7",
    image: require("../../assets/img/spider-man-poster.png"),
  },
  {
    id: "3",
    title: "Thor: Love and Thunder",
    date: "July 8, 2022",
    genre: "Action",
    duration: "119 Minutes",
    rating: "4.6",
    image: require("../../assets/img/spider-man-poster.png"),
  },
  {
    id: "4",
    title: "Black Panther 2",
    date: "November 11, 2022",
    genre: "Action",
    duration: "161 Minutes",
    rating: "4.9",
    image: require("../../assets/img/spider-man-poster.png"),
  },
  {
    id: "5",
    title: "Aquaman 2",
    date: "December 16, 2022",
    genre: "Action",
    duration: "135 Minutes",
    rating: "4.5",
    image: require("../../assets/img/spider-man-poster.png"),
  },
];

const categories = ["All", "Action", "Fantasy", "Comedy", "Animation", "Drama"];

export default function UpcommingMovie() {
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMovies =
    activeCategory === "All"
      ? upcomingMovies
      : upcomingMovies.filter((m) => m.genre === activeCategory);

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity
      style={styles.movieItem}
      onPress={() => navigation.navigate("MovieDetail", { movie: item })}
    >
      <Image source={item.image} style={styles.poster} />
      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Text style={styles.movieDate}>📅 {item.date}</Text>
        <Text style={styles.movieGenre}>🎬 {item.genre}</Text>
        <View style={styles.row}>
          <Text style={styles.movieDuration}>⏱ {item.duration}</Text>
          <View style={styles.rating}>
            <Ionicons name="star" size={12} color="#FFB800" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
        <View style={styles.pg}>
          <Text style={styles.pgText}>PG-13</Text>
        </View>
      </View>
      <Ionicons name="play-circle" size={40} color="#12CDD9" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Upcoming Movie</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
      >
        <View style={styles.categories}>
          {categories.map((cat) => (
            <TouchableOpacity key={cat} onPress={() => setActiveCategory(cat)}>
              <Text
                style={[
                  styles.category,
                  activeCategory === cat && styles.activeCategory,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Movie List */}
      <FlatList
        data={filteredMovies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="film-outline" size={60} color="#92929D" />
            <Text style={styles.emptyText}>No movies found</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D2B",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "MontserratSemiBold",
  },
  categoriesScroll: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  categories: {
    flexDirection: "row",
    gap: 16,
  },
  category: {
    color: "#EBEBEF",
    fontFamily: "MontserratMedium",
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginRight: 16,
  },
  activeCategory: {
    color: "#12CDD9",
    borderBottomWidth: 2,
    borderBottomColor: "#12CDD9",
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 10,
  },
  movieItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252836",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
  },
  poster: {
    width: 80,
    height: 110,
    borderRadius: 12,
  },
  movieInfo: {
    flex: 1,
    marginLeft: 12,
  },
  movieTitle: {
    color: "#FFF",
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
  },
  movieDate: {
    color: "#92929D",
    fontFamily: "MontserratMedium",
    fontSize: 12,
    marginTop: 4,
  },
  movieGenre: {
    color: "#92929D",
    fontFamily: "MontserratMedium",
    fontSize: 12,
    marginTop: 4,
  },
  movieDuration: {
    color: "#92929D",
    fontFamily: "MontserratMedium",
    fontSize: 12,
    marginTop: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#1F1D2B",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  ratingText: {
    color: "#FFB800",
    fontFamily: "MontserratMedium",
    fontSize: 10,
  },
  pg: {
    marginTop: 8,
    borderColor: "#12CDD9",
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: "flex-start",
  },
  pgText: {
    color: "#12CDD9",
    fontFamily: "MontserratMedium",
    fontSize: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  emptyText: {
    color: "#92929D",
    fontSize: 16,
    fontFamily: "MontserratMedium",
    marginTop: 16,
  },
});
