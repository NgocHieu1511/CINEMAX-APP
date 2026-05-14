import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ButtonApp from "../components/ButtonApp";
import BottomTabs from "../navigation/BottomTabs";

export default function EditProfile() {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState("Tiffany");
  const [email, setEmail] = useState("Tiffanyjearsey@gmail.com");
  const [password, setPassword] = useState("••••••••••••••••••••");
  const [phone, setPhone] = useState("+1 82120142305");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [nameError, setNameError] = useState("* Name already exist");

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={20} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Edit Profile</Text>

            <View style={{ width: 36 }} />
          </View>

          {/* AVATAR */}
          <View style={styles.avatarSection}>
            <View style={styles.avatarWrapper}>
              <Image
                source={require("../../assets/icons/avatar.png")}
                style={styles.avatar}
              />
              <TouchableOpacity style={styles.editIcon}>
                <Ionicons name="pencil" size={12} color="#fff" />
              </TouchableOpacity>
            </View>

            <Text style={styles.userName}>Tiffany</Text>
            <Text style={styles.userEmail}>Tiffanyjearsey@gmail.com</Text>
          </View>

          {/* FORM */}
          <View style={styles.content}>
            {/* Full Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                value={fullName}
                onChangeText={setFullName}
                placeholderTextColor="#8A8A9E"
                style={[styles.input, nameError && styles.inputError]}
              />
              {nameError ? (
                <Text style={styles.errorText}>{nameError}</Text>
              ) : null}
            </View>

            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#8A8A9E"
                style={styles.input}
                keyboardType="email-address"
              />
            </View>

            {/* Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordBox}>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholderTextColor="#8A8A9E"
                  secureTextEntry={!passwordVisible}
                  style={styles.passwordInput}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}
                >
                  <Ionicons
                    name={passwordVisible ? "eye" : "eye-off"}
                    size={22}
                    color="#7C7C90"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Phone Number */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholderTextColor="#8A8A9E"
                style={styles.input}
                keyboardType="phone-pad"
              />
            </View>
          </View>

          {/* SAVE BUTTON */}
          <View style={styles.buttonWrap}>
            <ButtonApp>Save Changes</ButtonApp>
          </View>
        </ScrollView>
      </SafeAreaView>

      <BottomTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D2B",
  },

  /* HEADER */
  header: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#252836",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.12,
  },

  /* AVATAR */
  avatarSection: {
    alignItems: "center",
    marginTop: 24,
  },

  avatarWrapper: {
    position: "relative",
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#12CDD9",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#1F1D2B",
  },

  userName: {
    color: "#FFF",
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
    letterSpacing: 0.12,
  },

  userEmail: {
    color: "#92929D",
    fontFamily: "MontserratMedium",
    fontSize: 12,
    marginTop: 4,
    letterSpacing: 0.12,
  },

  /* FORM */
  content: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  inputGroup: {
    marginTop: 24,
    position: "relative",
  },

  label: {
    position: "absolute",
    top: -8,
    left: 18,
    zIndex: 10,
    backgroundColor: "#1F1D2B",
    paddingHorizontal: 8,
    color: "#EBEBEF",
    fontFamily: "MontserratMedium",
    fontSize: 12,
    letterSpacing: 0.12,
  },

  input: {
    height: 60,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#252836",
    paddingHorizontal: 18,
    paddingTop: 8,
    color: "#92929D",
    fontFamily: "MontserratMedium",
    fontSize: 14,
    letterSpacing: 0.12,
  },

  inputError: {
    borderColor: "#FB4141",
  },

  errorText: {
    color: "#FB4141",
    fontFamily: "MontserratMedium",
    fontSize: 11,
    marginTop: 6,
    marginLeft: 18,
  },

  passwordBox: {
    height: 60,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#252836",
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  passwordInput: {
    flex: 1,
    color: "#92929D",
    fontFamily: "MontserratMedium",
    fontSize: 14,
    letterSpacing: 0.12,
  },

  /* BUTTON */
  buttonWrap: {
    marginTop: 40,
    marginBottom: 32,
    paddingHorizontal: 24,
    alignItems: "center",
  },
});
