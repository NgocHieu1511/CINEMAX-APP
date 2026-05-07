import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomTabs from "../navigation/BottomTabs";

export default function Profile() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <Text style={styles.header}>Profile</Text>

        {/* USER INFO */}
        <View style={styles.userRow}>
          <Image
            source={require("../../assets/img/avatar.png")}
            style={styles.avatar}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Tiffany</Text>
            <Text style={styles.email}>Tiffanyjersey@gmail.com</Text>
          </View>
          <Ionicons name="create-outline" size={18} color="#12CDD9" />
        </View>

        {/* PREMIUM CARD */}
        <View style={styles.premiumCard}>
          <Text style={styles.premiumTitle}>Premium Member</Text>
          <Text style={styles.premiumDesc}>
            New movies are coming for you, Download Now!
          </Text>
        </View>

        {/* ACCOUNT */}
        <Text style={styles.section}>Account</Text>
        <View style={styles.card}>
          <Item icon="person-outline" title="Member" />
          <Item icon="lock-closed-outline" title="Change Password" />
        </View>

        {/* GENERAL */}
        <Text style={styles.section}>General</Text>
        <View style={styles.card}>
          <Item icon="notifications-outline" title="Notification" />
          <Item icon="globe-outline" title="Language" />
          <Item icon="location-outline" title="Country" />
          <Item icon="trash-outline" title="Clear Cache" />
        </View>

        {/* MORE */}
        <Text style={styles.section}>More</Text>
        <View style={styles.card}>
          <Item icon="document-text-outline" title="Legal and Policies" />
          <Item icon="help-circle-outline" title="Help & Feedback" />
          <Item icon="information-circle-outline" title="About Us" />
        </View>

        {/* LOGOUT */}
        <TouchableOpacity style={styles.logout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 20,
  },

  header: {
    color: "#FFF",
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    textAlign: "center",
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },

  name: {
    color: "#FFF",
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
  },

  email: {
    color: "#92929D",
    fontFamily: "MontserratMedium",
    fontSize: 12,
  },

  premiumCard: {
    backgroundColor: "#FF8700",
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
  },

  premiumTitle: {
    color: "#FFF",
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
  },

  premiumDesc: {
    color: "#FFF",
    fontFamily: "MontserratMedium",
    fontSize: 12,
    marginTop: 4,
  },

  section: {
    color: "#92929D",
    fontFamily: "MontserratMedium",
    fontSize: 12,
    marginTop: 24,
  },

  card: {
    backgroundColor: "#252836",
    borderRadius: 16,
    paddingVertical: 8,
    marginTop: 10,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  itemText: {
    color: "#FFF",
    fontFamily: "MontserratMedium",
    fontSize: 12,
    marginLeft: 10,
  },

  logout: {
    borderWidth: 1,
    borderColor: "#12CDD9",
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 80,
  },

  logoutText: {
    color: "#12CDD9",
    fontFamily: "MontserratMedium",
    fontSize: 14,
  },
});
