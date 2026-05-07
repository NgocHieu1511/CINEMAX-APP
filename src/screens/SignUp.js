import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ButtonApp from "../components/ButtonApp";

export default function SignUp() {
  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image source={require("../../assets/icons/back.png")} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Sign Up</Text>

        <View style={{ width: 36 }} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Let’s get started</Text>

        <Text style={styles.subtitle}>
          The latest movies and series{"\n"}are here
        </Text>

        {/* Full Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>

          <TextInput
            placeholder="Tiffany"
            placeholderTextColor="#8A8A9E"
            style={styles.input}
          />
        </View>

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address</Text>

          <TextInput
            placeholder="Tiffanyjearsey@gmail.com"
            placeholderTextColor="#8A8A9E"
            style={styles.input}
          />
        </View>

        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>

          <View style={styles.passwordBox}>
            <TextInput
              placeholder="•••••••••••••"
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

        {/* Terms */}
        <View style={styles.checkboxRow}>
          <TouchableOpacity
            style={[styles.checkbox, agree && styles.checkboxActive]}
            onPress={() => setAgree(!agree)}
          >
            {agree && <Ionicons name="checkmark" size={14} color="#FFF" />}
          </TouchableOpacity>

          <Text style={styles.termsText}>
            I agree to the <Text style={styles.link}>Terms and Services</Text>
            {"\n"}
            and <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>

        {/* Button */}
        <View style={styles.buttonWrap}>
          <ButtonApp>Sign Up</ButtonApp>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D2B",
    paddingHorizontal: 22,
  },

  header: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backBtn: {
    width: 32,
    height: 32,
    borderRadius: 12,
    backgroundColor: "#1F1F38",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 24,
  },

  headerTitle: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    letterSpacing: 0.12,
  },

  content: {
    marginTop: 46,
    paddingHorizontal: 24,
  },

  title: {
    color: "#FFF",
    fontFamily: "MontserratSemiBold",
    fontSize: 24,
    textAlign: "center",
    letterSpacing: 0.12,
  },

  subtitle: {
    color: "#EBEBEF",
    textAlign: "center",
    fontFamily: "MontserratMedium",
    fontSize: 12,
    letterSpacing: 0.12,
    marginTop: 8,
  },

  inputGroup: {
    marginTop: 48,
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
    height: 72,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#252836",

    paddingHorizontal: 18,
    paddingTop: 20,

    color: "#92929D",
    fontFamily: "MontserratMedium",
    fontSize: 14,
    letterSpacing: 0.12,
  },

  passwordBox: {
    paddingBottom: 18,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#252836",

    paddingHorizontal: 18,
    paddingTop: 20,

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

  checkboxRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 20,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1.5,
    borderColor: "#6C6A7A",
    borderRadius: 5,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxActive: {
    backgroundColor: "#12CDD9",
    borderColor: "#12CDD9",
  },

  termsText: {
    flex: 1,
    color: "#92929D",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "MontserratMedium",
  },

  link: {
    color: "#12CDD9",
  },

  buttonWrap: {
    marginTop: 40,
    alignItems: "center",
  },
});
