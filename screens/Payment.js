import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Payment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.payment}>
      <View style={styles.paymentChild} />
      <Image
        style={styles.paymentItem}
        resizeMode="cover"
        source={require("../assets/rectangle-28.png")}
      />
      <View style={[styles.paymentInner, styles.paymentInnerPosition]} />
      <View style={[styles.rectangleView, styles.paymentInnerPosition]} />
      <View style={styles.topBar}>
        <View style={styles.antDesignwifiOutlined} />
        <Image
          style={[styles.fabatteryIcon, styles.fabatteryIconLayout]}
          resizeMode="cover"
          source={require("../assets/fabattery11.png")}
        />
        <Image
          style={styles.entypobarGraphIcon}
          resizeMode="cover"
          source={require("../assets/entypobargraph11.png")}
        />
        <Text style={styles.text}>2:40</Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector11.png")}
      />
      <View style={[styles.paymentChild1, styles.fabatteryIconLayout]} />
      <Pressable
        style={[styles.rectangleParent, styles.groupViewLayout]}
        onPress={() => navigation.navigate("Detail2")}
      >
        <View style={styles.groupChild} />
        <Image
          style={[styles.arrowLeft2Icon, styles.arrowIconPosition]}
          resizeMode="cover"
          source={require("../assets/arrowleft2.png")}
        />
      </Pressable>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={styles.groupChild} />
      </View>
      <Image
        style={[styles.iconChevronRight, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-chevron-right.png")}
      />
      <Image
        style={styles.paymentChild2}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.paymentChild3, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <View style={[styles.unionParent, styles.unionLayout]}>
        <Image
          style={[styles.unionIcon, styles.unionLayout]}
          resizeMode="cover"
          source={require("../assets/union.png")}
        />
        <Image
          style={[styles.a8L2022ExteriorRightFrontIcon, styles.lineViewLayout]}
          resizeMode="cover"
          source={require("../assets/a8l2022exteriorrightfrontthreequarter2-2.png")}
        />
      </View>
      <Text style={[styles.avanzaVeloz, styles.hariClr]}>Avanza Veloz</Text>
      <Text style={[styles.text1, styles.hariClr]}>4.5</Text>
      <Text style={[styles.pintu, styles.hariClr]}>4 Pintu</Text>
      <Image
        style={[styles.iconlyboldstar, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/iconlyboldstar.png")}
      />
      <Text style={[styles.tujuan, styles.mulaiTypo]}>Tujuan</Text>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.groupInner} />
        <Text style={[styles.mulai, styles.mulaiTypo]}>Mulai</Text>
        <Text style={[styles.nov2023, styles.nov2023Typo]}>30 Nov 2023</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={styles.groupInner} />
        <Text style={[styles.mulai, styles.mulaiTypo]}>Selesai</Text>
        <Text style={[styles.desember2023, styles.nov2023Typo]}>
          1 Desember 2023
        </Text>
      </View>
      <View style={styles.pembayaranParent}>
        <Text style={[styles.pembayaran, styles.mulaiTypo]}>Pembayaran</Text>
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <View style={[styles.groupChild3, styles.groupChildLayout]} />
        <Image
          style={[styles.arrowRight2Icon, styles.arrowIconPosition]}
          resizeMode="cover"
          source={require("../assets/stroke1.png")}
        />
      </View>
      <Image
        style={[styles.arrowRight2Icon1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/stroke1.png")}
      />
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => navigation.navigate("Detail1")}
      >
        <View style={[styles.groupChild4, styles.groupLayout]} />
        <Text style={[styles.bayarSekarang, styles.hariClr]}>
          Bayar Sekarang
        </Text>
        <Text style={[styles.hari, styles.hariClr]}>400.000/Hari</Text>
        <View style={[styles.lineView, styles.lineViewLayout]} />
      </Pressable>
      <Image
        style={styles.eWalletLogoIcon}
        resizeMode="cover"
        source={require("../assets/ewallet-logo.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paymentInnerPosition: {
    width: 429,
    borderTopRightRadius: Border.br_5xl,
    borderTopLeftRadius: Border.br_5xl,
    left: -1,
    position: "absolute",
  },
  fabatteryIconLayout: {
    height: 9,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupViewLayout: {
    height: 44,
    width: 44,
    top: 70,
    position: "absolute",
  },
  arrowIconPosition: {
    top: "31.82%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ellipseIconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  unionLayout: {
    height: 62,
    width: 79,
    position: "absolute",
  },
  lineViewLayout: {
    height: 43,
    position: "absolute",
  },
  hariClr: {
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  mulaiTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout: {
    height: 80,
    width: 155,
    top: 518,
    position: "absolute",
  },
  nov2023Typo: {
    fontSize: FontSize.size_mini,
    left: 14,
    top: 42,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildLayout: {
    height: 68,
    width: 327,
    borderColor: Color.colorSilver,
    borderRadius: Border.br_sm,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iconPosition: {
    top: "83.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 59,
    width: 363,
    position: "absolute",
  },
  paymentChild: {
    top: 827,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    width: 428,
    height: 99,
    left: -1,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  paymentItem: {
    left: 1,
    width: 427,
    height: 536,
    top: 0,
    position: "absolute",
  },
  paymentInner: {
    top: 353,
    height: 573,
    backgroundColor: Color.colorBlack,
  },
  rectangleView: {
    top: 452,
    height: 468,
    backgroundColor: Color.colorWhite,
  },
  antDesignwifiOutlined: {
    left: 310,
    width: 23,
    height: 21,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  fabatteryIcon: {
    top: 10,
    left: 350,
    width: 27,
    overflow: "hidden",
  },
  entypobarGraphIcon: {
    left: 289,
    width: 21,
    height: 18,
    top: 6,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    fontFamily: FontFamily.interSemiBold,
    width: 36,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 6,
    position: "absolute",
  },
  topBar: {
    width: 377,
    height: 24,
    left: 24,
    top: 18,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.46%",
    width: "4.7%",
    top: "2.81%",
    right: "14.7%",
    bottom: "95.73%",
    left: "80.61%",
  },
  paymentChild1: {
    top: 909,
    left: 104,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorDarkgray_200,
    width: 220,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    height: 44,
    width: 44,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  arrowLeft2Icon: {
    height: "37.27%",
    width: "20.45%",
    right: "38.64%",
    bottom: "30.91%",
    left: "40.91%",
  },
  rectangleParent: {
    left: 24,
  },
  groupView: {
    left: 357,
  },
  iconChevronRight: {
    height: "2.96%",
    width: "5.79%",
    top: "8.37%",
    right: "8.46%",
    bottom: "88.67%",
    left: "85.75%",
  },
  paymentChild2: {
    width: 122,
    height: 213,
    left: 61,
    top: 15,
    position: "absolute",
  },
  ellipseIcon: {
    top: 218,
    left: 36,
  },
  paymentChild3: {
    top: 85,
    left: 173,
  },
  unionIcon: {
    left: 0,
    top: 0,
  },
  a8L2022ExteriorRightFrontIcon: {
    top: 4,
    left: 7,
    width: 65,
  },
  unionParent: {
    left: 143,
    top: 32,
  },
  avanzaVeloz: {
    top: 378,
    width: 127,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    left: 23,
  },
  text1: {
    top: 377,
    left: 364,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontWeight: "600",
  },
  pintu: {
    top: 405,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    width: 41,
    left: 23,
  },
  iconlyboldstar: {
    height: "1.33%",
    width: "3.04%",
    top: "41.36%",
    right: "16.12%",
    bottom: "57.31%",
    left: "80.84%",
  },
  tujuan: {
    top: 482,
    width: 85,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    color: Color.colorBlack,
    left: 23,
  },
  groupInner: {
    borderColor: Color.colorSilver,
    borderRadius: Border.br_sm,
    height: 80,
    width: 155,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  mulai: {
    left: 13,
    color: Color.colorGray_200,
    top: 15,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  nov2023: {
    width: 125,
  },
  rectangleGroup: {
    left: 23,
  },
  desember2023: {
    width: 130,
  },
  rectangleContainer: {
    left: 194,
  },
  pembayaran: {
    left: 3,
    width: 129,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    color: Color.colorBlack,
    top: 0,
  },
  groupChild2: {
    top: 32,
  },
  groupChild3: {
    top: 108,
  },
  arrowRight2Icon: {
    height: "11.36%",
    width: "3.36%",
    right: "4.59%",
    bottom: "56.82%",
    left: "92.05%",
  },
  pembayaranParent: {
    top: 637,
    height: 176,
    width: 327,
    left: 23,
    position: "absolute",
  },
  arrowRight2Icon1: {
    height: "2.16%",
    width: "2.57%",
    right: "21.73%",
    bottom: "14.69%",
    left: "75.7%",
  },
  groupChild4: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorBlack,
  },
  bayarSekarang: {
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    left: 61,
    top: 18,
  },
  hari: {
    left: 206,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    top: 18,
  },
  lineView: {
    top: 9,
    left: 198,
    borderColor: Color.colorWhite,
    borderRightWidth: 1,
    width: 1,
    borderStyle: "solid",
    height: 43,
  },
  groupPressable: {
    top: 843,
    left: 31,
  },
  eWalletLogoIcon: {
    top: 690,
    width: 56,
    height: 23,
    left: 36,
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    height: "1.89%",
    width: "18.69%",
    right: "71.96%",
    bottom: "14.96%",
    left: "9.35%",
  },
  payment: {
    borderRadius: Border.br_13xl,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Payment;
