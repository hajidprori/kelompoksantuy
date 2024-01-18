import * as React from "react";
import { TextInput as RNPTextInput } from "react-native-paper";
import { StyleSheet, Image, Text, View } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <RNPTextInput
        style={[styles.email, styles.emailLayout]}
        label="ID Admin"
        placeholder="213510337"
        mode="flat"
        placeholderTextColor="rgba(13, 1, 64, 0.6)"
        theme={{
          fonts: { regular: { fontFamily: "DM Sans", fontWeight: "Bold" } },
          colors: { text: "#0d0140" },
        }}
      />
      <RNPTextInput
        style={[styles.password, styles.emailLayout]}
        placeholder="Kata Sandi"
        mode="flat"
        placeholderTextColor="#0d0140"
        theme={{
          fonts: {
            regular: { fontFamily: "Open Sans", fontWeight: "SemiBold" },
          },
          colors: { text: "#0d0140" },
        }}
      />
      <View style={[styles.rememberMe, styles.rememberLayout]}>
        <Image
          style={[styles.rememberMeChild, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-59.png")}
        />
        <Text style={[styles.ingatSaya, styles.ingatSayaTypo]}>Ingat Saya</Text>
      </View>
      <Text style={[styles.lupaKataSandi, styles.ingatSayaTypo]}>
        Lupa Kata Sandi?
      </Text>
      <Text style={[styles.welcomeAdmin, styles.gabungTypo]}>
        Welcome Admin
      </Text>
      <View style={[styles.save, styles.saveLayout]}>
        <View style={[styles.saveChild, styles.saveLayout]} />
        <Text style={[styles.gabung, styles.gabungTypo]}>GABUNG</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailLayout: {
    height: 76,
    width: 317,
    left: 29,
    position: "absolute",
  },
  rememberLayout: {
    height: 24,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  ingatSayaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  gabungTypo: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  saveLayout: {
    height: 50,
    width: 200,
    position: "absolute",
  },
  email: {
    top: 254,
  },
  password: {
    top: 345,
  },
  rememberMeChild: {
    borderRadius: Border.br_8xs,
    width: 24,
    height: 24,
    position: "absolute",
  },
  ingatSaya: {
    top: 4,
    left: 39,
    color: Color.colorDarkgray_100,
  },
  rememberMe: {
    top: 441,
    left: 32,
    width: 96,
  },
  lupaKataSandi: {
    top: 445,
    left: 253,
    color: Color.colorMidnightblue_300,
  },
  welcomeAdmin: {
    top: 102,
    left: 79,
    fontSize: FontSize.size_11xl,
    color: Color.colorMidnightblue_300,
  },
  saveChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorMidnightblue_100,
    shadowColor: "rgba(153, 171, 198, 0.18)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 62,
    elevation: 62,
    shadowOpacity: 1,
    left: 0,
    top: 0,
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
    top: 511,
    left: 87,
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

export default Login;
