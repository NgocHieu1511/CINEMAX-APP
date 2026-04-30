// LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ButtonApp from "../components/ButtonApp";

export default function Login() {
  const navigation = useNavigation();

  // thiếu state nên bạn bị lỗi
  const [passwordVisible, setPasswordVisible] = useState(false);

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

        <Text style={styles.headerTitle}>Login</Text>

        <View style={{ width: 36 }} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Hi, Tiffany</Text>

        <Text style={styles.subtitle}>
          Welcome back! Please enter{"\n"}your details.
        </Text>

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
              placeholder="••••••••••••••"
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

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Button */}
        <View style={styles.buttonWrap}>
          <ButtonApp>Log In</ButtonApp>
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
    fontWeight: "600",

    letterSpacing: 0.12,
  },

  content: {
    marginTop: 46,
    paddingHorizontal: 24,
  },

  title: {
    color: "#FFF",

    fontFamily: "MontserratSemiBold", // tương đương 600
    fontSize: 24,

    letterSpacing: 0.12,
    textAlign: "center",
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

    fontSize: 14,
    fontFamily: "MontserratMedium",
    letterSpacing: 0.12,
  },

  passwordBox: {
    paddingBottom: 18,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#252836",

    paddingHorizontal: 18,
    paddingTop: 20, // chừa chỗ label

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  passwordInput: {
    flex: 1,
    color: "#92929D",

    fontFamily: "MontserratMedium", // tương đương weight 500
    fontSize: 14,

    letterSpacing: 0.12,
  },

  forgot: {
    textAlign: "right",
    marginTop: 8,
    color: "#12CDD9",

    fontFamily: "MontserratMedium", // tương đương 500
    fontSize: 12,

    letterSpacing: 0.12,
  },

  buttonWrap: {
    marginTop: 40,
    alignItems: "center",
  },
});
