import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage}>
      <View style={styles.homePageChild} />
      <View style={styles.homePageItem} />
      <View style={[styles.homePageInner, styles.homeShadowBox]} />
      <Image
        style={[styles.combinedShapeIcon, styles.combinedIconPosition]}
        resizeMode="cover"
        source={require("../assets/heart21.png")}
      />
      <Image
        style={[styles.combinedShapeIcon1, styles.combinedIconPosition]}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinenotification21.png")}
      />
      <Image
        style={[styles.combinedShapeIcon2, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlineprofile1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/iconlybolddiscovery.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/fabattery2.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector51.png")}
      />
      <Text style={styles.text}>2:40</Text>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={[styles.stroke1Icon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinearrowdown2.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Text style={styles.temukanMobilSesuai}>
        Temukan Mobil Sesuai Keinginan Anda.
      </Text>
      <View style={[styles.homePageChild1, styles.homeShadowBox]} />
      <Image
        style={[styles.combinedShapeIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/search1.png")}
      />
      <Text style={[styles.cariMobil, styles.cariMobilTypo]}>Cari Mobil</Text>
      <Text style={[styles.merkTernama, styles.brioTypo]}>Merk Ternama</Text>
      <Text style={[styles.aavailableNearYou, styles.brioTypo]}>
        Aavailable Near You
      </Text>
      <Text style={[styles.lihatSemua, styles.seeAllTypo]}>Lihat Semua</Text>
      <Text style={[styles.seeAll, styles.seeAllTypo]}>See All</Text>
      <Image
        style={styles.homePageChild2}
        resizeMode="cover"
        source={require("../assets/rectangle-16.png")}
      />
      <View style={[styles.homePageChild3, styles.homeChildLayout1]} />
      <View style={[styles.homePageChild4, styles.homeChildLayout1]} />
      <View style={[styles.homePageChild5, styles.homeChildLayout1]} />
      <Image
        style={[styles.teslaLogoPng271Icon, styles.logoIconLayout]}
        resizeMode="cover"
        source={require("../assets/teslalogopng27-1.png")}
      />
      <Image
        style={[styles.homePageChild6, styles.homeChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-18.png")}
      />
      <View style={styles.frameView} />
      <Text style={[styles.review, styles.dayTypo]}>
        <Text style={styles.text1}>{`4.5 `}</Text>
        <Text style={styles.review1Clr}>[100+ Review]</Text>
      </Text>
      <Text style={[styles.rp400000hari, styles.review1Clr]}>
        Rp.400.000/Hari
      </Text>
      <Image
        style={[styles.iconlyboldstar, styles.iconlyboldstarLayout]}
        resizeMode="cover"
        source={require("../assets/iconlyboldstar.png")}
      />
      <Image
        style={[styles.homePageChild7, styles.homeChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-18.png")}
      />
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={[styles.brio, styles.dayTypo]}>Brio</Text>
      <Text style={[styles.reviews, styles.dayTypo]}>
        <Text style={styles.text1}>{`4.0 `}</Text>
        <Text style={styles.review1Clr}>[38 Reviews]</Text>
      </Text>
      <Image
        style={[styles.daihatsuRemovebgPreview1Icon, styles.logoIconLayout]}
        resizeMode="cover"
        source={require("../assets/511-daihatsuremovebgpreview-1.png")}
      />
      <Text style={[styles.day, styles.dayTypo]}>
        <Text style={styles.text1}>$1490</Text>
        <Text style={styles.review1Clr}>/day</Text>
      </Text>
      <Image
        style={[styles.logoHondaMobil1C22eRemoveIcon, styles.logoIconLayout]}
        resizeMode="cover"
        source={require("../assets/logohondamobil1c22eremovebgpreview-1.png")}
      />
      <Image
        style={[styles.iconlyboldstar1, styles.iconlyboldstarLayout]}
        resizeMode="cover"
        source={require("../assets/iconlyboldstar.png")}
      />
      <Pressable
        style={styles.downloadRemovebgPreview1}
        onPress={() => navigation.navigate("Detail2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/downloadremovebgpreview-1-2.png")}
        />
      </Pressable>
      <Text style={[styles.avanzaVeloz, styles.dayTypo]}>Avanza Veloz</Text>
      <Image
        style={[styles.download1RemovebgPreviewIcon, styles.logoIconLayout]}
        resizeMode="cover"
        source={require("../assets/download--1-removebgpreview-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  combinedIconPosition: {
    top: 845,
    position: "absolute",
  },
  iconPosition: {
    top: 844,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cariMobilTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  brioTypo: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  seeAllTypo: {
    color: Color.colorRoyalblue,
    left: 352,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  homeChildLayout1: {
    height: 82,
    width: 82,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderRadius: Border.br_sm,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  logoIconLayout: {
    height: 59,
    position: "absolute",
  },
  homeChildLayout: {
    height: 246,
    width: 279,
    top: 569,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  dayTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  review1Clr: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_xs,
  },
  iconlyboldstarLayout: {
    bottom: "13.9%",
    top: "84.77%",
    width: "3.04%",
    height: "1.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homePageChild: {
    top: 0,
    backgroundColor: Color.colorBlack,
    width: 429,
    height: 343,
    left: -1,
    position: "absolute",
  },
  homePageItem: {
    top: 295,
    left: 0,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    height: 624,
    width: 428,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  homePageInner: {
    top: 827,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowRadius: 16,
    elevation: 16,
    height: 99,
    width: 428,
    left: -1,
  },
  combinedShapeIcon: {
    left: 153,
    height: 29,
    width: 30,
  },
  combinedShapeIcon1: {
    left: 255,
    width: 27,
    height: 32,
  },
  combinedShapeIcon2: {
    left: 354,
    width: 23,
    height: 29,
  },
  vectorIcon: {
    left: 51,
    height: 30,
    width: 30,
  },
  vectorIcon1: {
    height: "0.97%",
    width: "6.31%",
    top: "3.02%",
    right: "6.31%",
    bottom: "96%",
    left: "87.38%",
  },
  vectorIcon2: {
    height: "1.75%",
    width: "3.93%",
    top: "2.69%",
    right: "22.45%",
    bottom: "95.56%",
    left: "73.62%",
  },
  text: {
    top: 24,
    fontFamily: FontFamily.interSemiBold,
    width: 36,
    textAlign: "left",
    color: Color.colorWhite,
    fontWeight: "600",
    left: 24,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  vectorIcon3: {
    height: "1.46%",
    width: "4.7%",
    top: "2.81%",
    right: "14.7%",
    bottom: "95.73%",
    left: "80.61%",
  },
  rectangleView: {
    top: 897,
    left: 104,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro_100,
    width: 220,
    height: 9,
    position: "absolute",
  },
  stroke1Icon: {
    height: "0.86%",
    width: "3.15%",
    top: "11.88%",
    right: "45.68%",
    bottom: "87.26%",
    left: "51.17%",
  },
  rectangleIcon: {
    top: 79,
    left: 357,
    borderRadius: Border.br_3xs,
    width: 44,
    height: 44,
    position: "absolute",
  },
  temukanMobilSesuai: {
    top: 157,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.montserratMedium,
    width: 403,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    left: 24,
    position: "absolute",
  },
  homePageChild1: {
    top: 287,
    borderRadius: Border.br_11xl,
    shadowColor: "rgba(175, 172, 172, 0)",
    shadowRadius: 36,
    elevation: 36,
    width: 328,
    height: 56,
    left: 50,
  },
  combinedShapeIcon3: {
    height: "1.88%",
    width: "3.97%",
    top: "32.83%",
    right: "76.17%",
    bottom: "65.29%",
    left: "19.86%",
  },
  cariMobil: {
    top: 303,
    left: 136,
    color: Color.colorSilver,
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  merkTernama: {
    top: 367,
    width: 123,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
    left: 50,
    textAlign: "left",
  },
  aavailableNearYou: {
    top: 521,
    width: 169,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
    left: 50,
    textAlign: "left",
  },
  lihatSemua: {
    top: 368,
    width: 76,
    fontSize: FontSize.size_xs,
    color: Color.colorRoyalblue,
  },
  seeAll: {
    top: 522,
    width: 49,
    fontSize: FontSize.size_sm,
  },
  homePageChild2: {
    left: 143,
    height: 80,
    width: 80,
    borderRadius: Border.br_sm,
    top: 406,
    position: "absolute",
  },
  homePageChild3: {
    top: 405,
    left: 43,
  },
  homePageChild4: {
    left: 241,
    top: 406,
    height: 82,
    width: 82,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
  },
  homePageChild5: {
    left: 337,
    top: 406,
    height: 82,
    width: 82,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
  },
  teslaLogoPng271Icon: {
    left: 348,
    width: 59,
    top: 417,
    height: 59,
  },
  homePageChild6: {
    left: 50,
  },
  frameView: {
    top: 709,
    left: 53,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
  },
  review: {
    left: 91,
    width: 118,
    top: 781,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  rp400000hari: {
    top: 783,
    left: 209,
    width: 105,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  iconlyboldstar: {
    right: "79.91%",
    left: "17.06%",
  },
  homePageChild7: {
    left: 311,
  },
  image1Icon: {
    top: 585,
    left: 306,
    width: 232,
    height: 140,
    position: "absolute",
  },
  brio: {
    top: 749,
    left: 328,
    width: 114,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  reviews: {
    width: 113,
    top: 781,
    fontFamily: FontFamily.poppinsSemiBold,
    left: 352,
  },
  daihatsuRemovebgPreview1Icon: {
    left: 243,
    width: 79,
    top: 417,
    height: 59,
  },
  day: {
    left: 503,
    width: 72,
    top: 781,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  logoHondaMobil1C22eRemoveIcon: {
    left: 144,
    top: 417,
    height: 59,
    width: 80,
  },
  iconlyboldstar1: {
    right: "18.93%",
    left: "78.04%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  downloadRemovebgPreview1: {
    left: 3,
    top: 559,
    width: 300,
    height: 168,
    position: "absolute",
  },
  avanzaVeloz: {
    top: 754,
    left: 73,
    width: 121,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  download1RemovebgPreviewIcon: {
    top: 412,
    left: 32,
    width: 106,
  },
  homePage: {
    borderRadius: Border.br_13xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default HomePage;
