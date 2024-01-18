import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding}>
      <View style={styles.topBar}>
        <Image
          style={[styles.antDesignwifiOutlinedIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/antdesignwifioutlined.png")}
        />
        <Image
          style={[styles.fabatteryIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/fabattery21.png")}
        />
        <Image
          style={styles.entypobarGraphIcon}
          resizeMode="cover"
          source={require("../assets/entypobargraph21.png")}
        />
        <Text style={styles.text}>2:40</Text>
      </View>
      <Text style={[styles.sewaMobilImpian, styles.letsGoTypo]}>
        Sewa Mobil Impian Anda
      </Text>
      <Image
        style={styles.downloadRemovebgPreview1Icon}
        resizeMode="cover"
        source={require("../assets/downloadremovebgpreview-1.png")}
      />
      <TouchableHighlight
        style={[styles.wrapper, styles.wrapperBg]}
        underlayColor="#e81515"
        onPress={() => navigation.navigate("SignUp")}
      >
        <View />
      </TouchableHighlight>
      <Text style={[styles.letsGo, styles.letsGoTypo]}>Let’s Go</Text>
      <View style={[styles.onboardingChild, styles.wrapperBg]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 33,
    position: "absolute",
    overflow: "hidden",
  },
  letsGoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorWhite,
    fontWeight: "600",
    position: "absolute",
  },
  wrapperBg: {
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  antDesignwifiOutlinedIcon: {
    top: 0,
    left: 310,
    height: 29,
  },
  fabatteryIcon: {
    top: 11,
    left: 350,
    height: 11,
  },
  entypobarGraphIcon: {
    top: 4,
    left: 279,
    width: 23,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 10,
    left: 0,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    width: 36,
    color: Color.colorWhite,
    fontWeight: "600",
    position: "absolute",
  },
  topBar: {
    top: 18,
    left: 24,
    width: 383,
    height: 29,
    position: "absolute",
  },
  sewaMobilImpian: {
    top: 156,
    left: 36,
    fontSize: 42,
    width: 356,
  },
  downloadRemovebgPreview1Icon: {
    top: 334,
    left: -130,
    width: 744,
    height: 312,
    position: "absolute",
  },
  wrapper: {
    top: 770,
    left: 44,
    borderRadius: Border.br_xl,
    width: 339,
    height: 61,
  },
  letsGo: {
    top: 786,
    left: 164,
    fontSize: FontSize.size_5xl,
  },
  onboardingChild: {
    top: 897,
    left: 104,
    borderRadius: Border.br_8xs,
    width: 220,
    height: 9,
  },
  onboarding: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Onboarding;
