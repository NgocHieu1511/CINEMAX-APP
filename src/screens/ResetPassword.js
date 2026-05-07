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
import { useNavigation } from "@react-navigation/native";
import ButtonApp from "../components/ButtonApp";

export default function ResetPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleNext = () => {
    if (!email) {
      alert("Vui lòng nhập email");
      return;
    }

    // xử lý tiếp (API hoặc navigate)
    navigation.navigate("Verification");
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
        <Text style={styles.title}>Reset Password</Text>

        <Text style={styles.subtitle}>Recover your account password</Text>

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address</Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Tiffanyjearsey@gmail.com"
            placeholderTextColor="#8A8A9E"
            style={styles.input}
          />
        </View>

        {/* Button */}
        <View style={styles.buttonWrap}>
          <ButtonApp onPress={handleNext}>Next</ButtonApp>
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
    marginTop: 60,
    paddingHorizontal: 24,
    alignItems: "center",
  },

  title: {
    color: "#FFF",
    fontFamily: "MontserratMedium", // font-weight 500
    fontSize: 28,
    letterSpacing: 0.12,
  },

  subtitle: {
    color: "#92929D",
    textAlign: "center",
    fontFamily: "MontserratMedium", // tương ứng font-weight 500
    fontSize: 14,
    letterSpacing: 0.12,
    marginTop: 7,
  },

  inputGroup: {
    marginTop: 48,
    width: "100%",
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
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#252836",

    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 18,

    color: "#92929D",
    fontFamily: "MontserratMedium",
    fontSize: 14,
  },

  buttonWrap: {
    marginTop: 40,
    width: "100%",
    alignItems: "center",
  },
});
