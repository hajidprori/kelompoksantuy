import * as React from "react";
import { TextInput as RNPTextInput } from "react-native-paper";
import {
  StyleSheet,
  TextInput,
  Pressable,
  Text,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <RNPTextInput
        style={[styles.email, styles.emailPosition]}
        label="Email"
        placeholder="MHajid@gmail.com "
        mode="flat"
        placeholderTextColor="rgba(13, 1, 64, 0.6)"
        theme={{
          fonts: { regular: { fontFamily: "DM Sans", fontWeight: "Bold" } },
          colors: { text: "#0d0140" },
        }}
      />
      <RNPTextInput
        style={[styles.fullName, styles.emailPosition]}
        label="Nama Lengkap"
        placeholder="MHajid"
        mode="flat"
        placeholderTextColor="rgba(13, 1, 64, 0.6)"
        theme={{
          fonts: { regular: { fontFamily: "DM Sans", fontWeight: "Bold" } },
          colors: { text: "#0d0140" },
        }}
      />
      <TextInput
        style={[styles.password, styles.passwordTypo]}
        placeholder="Kata Sandi"
        secureTextEntry={true}
        placeholderTextColor="#714444"
      />
      <Pressable
        style={[styles.save, styles.signLayout]}
        onPress={() => navigation.navigate("Login1")}
      >
        <Text style={[styles.mendaftar, styles.mendaftarTypo]}>Mendaftar</Text>
      </Pressable>
      <View style={[styles.signUpWithGoogle, styles.signLayout]}>
        <View style={[styles.signUpWithGoogleChild, styles.signLayout]} />
        <Text style={[styles.mendaftarDenganGoogle, styles.mendaftarTypo]}>
          Mendaftar dengan Google
        </Text>
        <Image
          style={styles.google2Icon}
          resizeMode="cover"
          source={require("../assets/google-2.png")}
        />
      </View>
      <Text style={[styles.buatAkun, styles.mendaftarTypo]}>Buat Akun</Text>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={[styles.rememberMe, styles.frameFlexBox]}>
          <Image
            style={styles.rememberMeChild}
            resizeMode="cover"
            source={require("../assets/rectangle-59.png")}
          />
          <Text style={[styles.ingatSaya, styles.ingatSayaTypo]}>
            Ingat Saya
          </Text>
        </View>
        <Text style={[styles.lupaKataSandi, styles.ingatSayaTypo]}>
          Lupa Kata Sandi?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailPosition: {
    width: 317,
    left: 30,
    position: "absolute",
  },
  passwordTypo: {
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  signLayout: {
    height: 50,
    position: "absolute",
  },
  mendaftarTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    height: 24,
  },
  ingatSayaTypo: {
    fontFamily: FontFamily.dMSansRegular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  email: {
    top: 341,
    height: 75,
  },
  fullName: {
    top: 271,
    height: 58,
  },
  password: {
    top: 435,
    backgroundColor: Color.colorAqua,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    height: 76,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 317,
    left: 30,
  },
  mendaftar: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.8,
    width: 107,
    color: Color.colorWhite,
    textTransform: "uppercase",
    textAlign: "left",
  },
  save: {
    top: 573,
    left: 97,
    backgroundColor: Color.colorMidnightblue_100,
    shadowColor: "rgba(153, 171, 198, 0.18)",
    shadowRadius: 62,
    elevation: 62,
    width: 200,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 38,
    paddingVertical: 0,
    borderRadius: Border.br_7xs,
    height: 50,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  signUpWithGoogleChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorThistle,
    width: 264,
    borderRadius: Border.br_7xs,
    height: 50,
  },
  mendaftarDenganGoogle: {
    top: 17,
    left: 56,
    letterSpacing: 0.7,
    width: 247,
    color: Color.colorWhite,
    textTransform: "uppercase",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  google2Icon: {
    top: 15,
    left: 34,
    width: 16,
    height: 20,
    position: "absolute",
  },
  signUpWithGoogle: {
    top: 640,
    left: 69,
    width: 303,
  },
  buatAkun: {
    top: 102,
    left: 112,
    fontSize: FontSize.size_11xl,
    color: Color.colorMidnightblue_300,
    position: "absolute",
  },
  rememberMeChild: {
    borderRadius: Border.br_8xs,
    width: 24,
    height: 24,
  },
  ingatSaya: {
    color: Color.colorDarkgray_100,
    marginLeft: 17,
  },
  rememberMe: {
    width: 98,
  },
  lupaKataSandi: {
    marginLeft: 116,
    color: Color.colorMidnightblue_300,
  },
  frame: {
    top: 531,
    left: 29,
    width: 309,
    position: "absolute",
    overflow: "hidden",
  },
  signUp: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignUp;
