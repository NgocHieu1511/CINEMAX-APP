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

export default function CreateNewPassword() {
  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = () => {
    if (!password || !confirmPassword) {
      alert("Vui lòng nhập đầy đủ");
      return;
    }

    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }

    console.log("Reset password:", password);
  };

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
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Create New Password</Text>

        <Text style={styles.subtitle}>Enter your new password</Text>

        {/* New Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>New Password</Text>

          <View style={styles.passwordBox}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••••••"
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

        {/* Confirm Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirm Password</Text>

          <View style={styles.passwordBox}>
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="••••••••••••"
              placeholderTextColor="#8A8A9E"
              secureTextEntry={!confirmVisible}
              style={styles.passwordInput}
            />

            <TouchableOpacity
              onPress={() => setConfirmVisible(!confirmVisible)}
            >
              <Ionicons
                name={confirmVisible ? "eye" : "eye-off"}
                size={22}
                color="#7C7C90"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Button */}
        <View style={styles.buttonWrap}>
          <ButtonApp onPress={handleReset}>Reset</ButtonApp>
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

  content: {
    marginTop: 44,
    paddingHorizontal: 24,
  },

  title: {
    color: "#FFF",
    fontFamily: "PoppinsSemiBold", // font-weight 600
    fontSize: 24,
    letterSpacing: 0.12,
    textAlign: "center",
  },

  subtitle: {
    color: "#92929D",
    textAlign: "center",
    fontFamily: "PoppinsMedium", // font-weight 500
    fontSize: 14,
    marginTop: 6,
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
    fontFamily: "MontserratMedium", // font-weight 500
    fontSize: 12,
  },

  passwordBox: {
    height: 72,
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
    fontSize: 14,
  },

  buttonWrap: {
    marginTop: 40,
    alignItems: "center",
  },
});
