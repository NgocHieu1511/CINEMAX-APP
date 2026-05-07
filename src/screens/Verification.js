import React, { useRef, useState } from "react";
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

export default function Verification() {
  const navigation = useNavigation();

  const [code, setCode] = useState(["", "", "", ""]);

  const inputs = useRef([]);

  const handleChange = (text, index) => {
    let newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // auto focus next
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (text, index) => {
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleContinue = () => {
    const otp = code.join("");

    if (otp.length < 4) {
      alert("Vui lòng nhập đủ mã");
      return;
    }

    navigation.navigate("CreateNewPassword");
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
        <Text style={styles.title}>Verifying Your Account</Text>

        <Text style={styles.subtitle}>
          We have just sent you a 4 digit code via your email
          <Text style={styles.email}> example@gmail.com</Text>
        </Text>

        {/* OTP Input */}
        <View style={styles.otpContainer}>
          {code.map((item, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={[styles.otpInput, item ? styles.activeInput : null]}
              keyboardType="number-pad"
              maxLength={1}
              value={item}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={({ nativeEvent }) =>
                nativeEvent.key === "Backspace" && handleBackspace(item, index)
              }
            />
          ))}
        </View>

        {/* Button */}
        <View style={styles.buttonWrap}>
          <ButtonApp onPress={handleContinue}>Continue</ButtonApp>
        </View>

        {/* Resend */}
        <Text style={styles.resendText}>
          Didn’t receive code? <Text style={styles.resend}>Resend</Text>
        </Text>
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
    marginTop: 30,
    paddingHorizontal: 24,
    alignItems: "center",
  },

  title: {
    color: "#FFF",
    fontFamily: "MontserratSemiBold", // font-weight 600
    fontSize: 24,

    textAlign: "center",
  },

  subtitle: {
    color: "#7F7E83",
    textAlign: "center",
    fontFamily: "MontserratMedium", // font-weight 500
    fontSize: 14,
    lineHeight: 22, // 14 * 1.6 = 22.4 ≈ 22
    letterSpacing: 0.12,
    marginTop: 16,
  },
  email: {
    color: "#FFF",
    fontFamily: "MontserratMedium", // font-weight 500
    fontSize: 14,
    lineHeight: 22, // 14 * 1.6 = 22.4 ≈ 22
    letterSpacing: 0.12,
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    width: "80%",
    gap: 16,
  },

  otpInput: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: "#252836",

    color: "#FFF",
    textAlign: "center",
    fontFamily: "PoppinsSemiBold", // font-weight 600
    fontSize: 28,
    letterSpacing: 0.12,
  },

  activeInput: {
    borderWidth: 1,
    borderColor: "#12CDD9",
  },

  buttonWrap: {
    marginTop: 64,
    width: "100%",
    alignItems: "center",
  },

  resendText: {
    marginTop: 40,
    color: "#92929D",
    fontFamily: "MontserratMedium", // font-weight 500
    fontSize: 16,
  },

  resend: {
    color: "#12CDD9",
  },
});
