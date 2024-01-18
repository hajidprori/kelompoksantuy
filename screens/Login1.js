import * as React from "react";
import { TextInput as RNPTextInput } from "react-native-paper";
import {
  StyleSheet,
  Pressable,
  Text,
  Image,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Login1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <RNPTextInput
        style={styles.email}
        label="Email"
        placeholder="MHajid@gmail.com "
        mode="flat"
        placeholderTextColor="rgba(13, 1, 64, 0.6)"
        theme={{
          fonts: { regular: { fontFamily: "DM Sans", fontWeight: "Bold" } },
          colors: { text: "#0d0140" },
        }}
      />
      <Pressable
        style={styles.save}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.gabung, styles.gabungTypo]}>GABUNG</Text>
      </Pressable>
      <Text style={[styles.welcomeBack, styles.gabungTypo]}>Welcome Back</Text>
      <View style={styles.frame}>
        <View style={[styles.rememberMe, styles.rememberPosition]}>
          <Image
            style={[styles.rememberMeChild, styles.rememberPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-59.png")}
          />
          <Text style={[styles.ingatSaya, styles.ingatSayaTypo]}>
            Ingat saya
          </Text>
        </View>
        <Text style={[styles.lupaKataSandi, styles.ingatSayaTypo]}>
          Lupa Kata Sandi?
        </Text>
      </View>
      <TextInput
        style={styles.password}
        placeholder="Kata Sandi"
        secureTextEntry={true}
        placeholderTextColor="#714444"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gabungTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  rememberPosition: {
    left: 0,
    top: 0,
    height: 24,
    position: "absolute",
  },
  ingatSayaTypo: {
    fontFamily: FontFamily.dMSansRegular,
    top: 4,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  email: {
    top: 254,
    left: 29,
    height: 76,
    width: 317,
    position: "absolute",
  },
  gabung: {
    top: 17,
    left: 81,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    color: Color.colorWhite,
    width: 82,
  },
  save: {
    top: 497,
    left: 87,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorMidnightblue_100,
    shadowColor: "rgba(153, 171, 198, 0.18)",
    shadowRadius: 62,
    elevation: 62,
    width: 200,
    height: 50,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  welcomeBack: {
    top: 102,
    left: 79,
    fontSize: FontSize.size_11xl,
    color: Color.colorMidnightblue_300,
  },
  rememberMeChild: {
    borderRadius: Border.br_8xs,
    width: 24,
  },
  ingatSaya: {
    left: 39,
    color: Color.colorDarkgray_100,
  },
  rememberMe: {
    width: 95,
  },
  lupaKataSandi: {
    left: 221,
    color: Color.colorMidnightblue_300,
  },
  frame: {
    top: 441,
    left: 32,
    width: 316,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  password: {
    top: 342,
    left: 22,
    backgroundColor: Color.colorAqua,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    height: 76,
    width: 317,
    position: "absolute",
  },
  login: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Login1;
