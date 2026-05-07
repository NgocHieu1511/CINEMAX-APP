import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function MovieDetail() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Background */}
      <Image
        source={require("../../assets/img/spider-man-poster.png")}
        style={styles.bg}
        blurRadius={20}
      />

      <LinearGradient
        colors={["rgba(31,29,43,0.2)", "#1F1D2B"]}
        style={styles.overlay}
      />

      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#FFF" />
        <Text style={styles.headerTitle}>Spider-Man No Way...</Text>
        <Ionicons name="heart" size={20} color="red" />
      </View>

      {/* POSTER */}
      <View style={styles.posterWrap}>
        <Image
          source={require("../../assets/img/spider-man-poster.png")}
          style={styles.poster}
        />
      </View>

      {/* INFO */}
      <View style={styles.info}>
        <View style={styles.metaRow}>
          <Text style={styles.meta}>📅 2021</Text>
          <Text style={styles.meta}>⏱ 148 Minutes</Text>
          <Text style={styles.meta}>🎬 Action</Text>
        </View>

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color="#FFB800" />
          <Text style={styles.rating}>4.5</Text>
        </View>

        {/* BUTTONS */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.playBtn}>
            <Ionicons name="play" size={18} color="#FFF" />
            <Text style={styles.playText}>Play</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="download-outline" size={18} color="#12CDD9" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="share-social-outline" size={18} color="#12CDD9" />
          </TouchableOpacity>
        </View>

        {/* STORY */}
        <Text style={styles.section}>Story Line</Text>
        <Text style={styles.description}>
          For the first time in the cinematic history of Spider-Man, our
          friendly neighborhood hero’s identity is revealed, bringing his Super
          Hero responsibilities into conflict with his normal life and putting
          those he cares about most at risk.{" "}
          <Text style={styles.more}>More</Text>
        </Text>

        {/* CAST */}
        <Text style={styles.section}>Cast and Crew</Text>
      </View>
    </View>
  );
}
