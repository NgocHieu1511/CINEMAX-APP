import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();
  const [agree, setAgree] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

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

      {/* Title */}
      <View style={styles.hero}>
        <Text style={styles.title}>Let’s get started</Text>
        <Text style={styles.subtitle}>
          The latest movies and series{"\n"}are here
        </Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Full Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            placeholder="Tiffany"
            placeholderTextColor="#6C6A7A"
            style={styles.input}
          />
        </View>

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            placeholder="Tiffanyjearsey@gmail.com"
            placeholderTextColor="#6C6A7A"
            style={styles.input}
          />
        </View>

        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>

          <View style={styles.passwordWrapper}>
            <TextInput
              secureTextEntry={hidePassword}
              placeholder="••••••••••••••••"
              placeholderTextColor="#6C6A7A"
              style={styles.passwordInput}
            />

            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <Ionicons
                name={hidePassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#6C6A7A"
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
            {"\n"}and <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.buttonWrap}>
          <LinearGradient
            colors={["#12CDD9", "#28D6E3"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D2B",
    paddingHorizontal: 24,
  },

  header: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#252836",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },

  hero: {
    alignItems: "center",
    marginTop: 45,
  },

  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "700",
  },

  subtitle: {
    color: "#92929D",
    fontSize: 14,
    textAlign: "center",
    marginTop: 12,
    lineHeight: 22,
  },

  form: {
    marginTop: 50,
  },

  inputGroup: {
    marginBottom: 22,
  },

  label: {
    color: "#FFF",
    fontSize: 13,
    marginBottom: 10,
  },

  input: {
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: "#252836",
    paddingHorizontal: 18,
    color: "#FFF",
    fontSize: 14,
  },

  passwordWrapper: {
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: "#252836",
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  passwordInput: {
    flex: 1,
    color: "#FFF",
    fontSize: 14,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 5,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: "#6C6A7A",
    borderRadius: 5,
    marginTop: 2,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxActive: {
    backgroundColor: "#12CDD9",
    borderColor: "#12CDD9",
  },

  termsText: {
    color: "#92929D",
    fontSize: 12,
    lineHeight: 20,
  },

  link: {
    color: "#12CDD9",
  },

  buttonWrap: {
    marginTop: 42,
  },

  button: {
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
