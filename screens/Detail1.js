import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Detail1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detail}>
      <View style={[styles.detailChild, styles.detailPosition1]} />
      <View style={[styles.detailItem, styles.detailPosition]} />
      <View style={[styles.detailInner, styles.childShadowBox]} />
      <View style={styles.iconlylightOutlineheart}>
        <Image
          style={styles.heartIcon}
          resizeMode="cover"
          source={require("../assets/heart11.png")}
        />
        <View style={[styles.signUp, styles.signUpPosition]}>
          <View style={[styles.email, styles.emailLayout]}>
            <Image
              style={styles.emailChild}
              resizeMode="cover"
              source={require("../assets/rectangle-591.png")}
            />
            <Text
              style={[styles.brandonelouisgmailcom, styles.brandoneLouisTypo]}
            >{`Brandonelouis@gmail.com `}</Text>
            <Text style={[styles.email1, styles.email1Clr]}>Email</Text>
          </View>
          <View style={[styles.fullName, styles.fullNamePosition]}>
            <Image
              style={styles.emailChild}
              resizeMode="cover"
              source={require("../assets/rectangle-591.png")}
            />
            <Text
              style={[styles.brandoneLouis, styles.brandoneLouisPosition]}
            >{`Brandone Louis `}</Text>
            <Text style={[styles.email1, styles.email1Clr]}>Full name</Text>
          </View>
          <View style={[styles.password, styles.emailLayout]}>
            <Image
              style={styles.emailChild}
              resizeMode="cover"
              source={require("../assets/rectangle-591.png")}
            />
            <Image
              style={[styles.iconEye, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/icon-eye.png")}
            />
            <Image
              style={[styles.hiddenPasswordIcon, styles.brandoneLouisPosition]}
              resizeMode="cover"
              source={require("../assets/hidden-password.png")}
            />
            <Text style={[styles.password1, styles.email1Typo]}>Password</Text>
          </View>
          <View style={[styles.rememberMe, styles.fullNamePosition]}>
            <Image
              style={styles.rememberMeChild}
              resizeMode="cover"
              source={require("../assets/rectangle-59.png")}
            />
            <Text style={[styles.rememberMe1, styles.rememberMe1Typo]}>
              Remember me
            </Text>
          </View>
          <View style={[styles.save, styles.saveLayout]}>
            <View style={[styles.saveChild, styles.childPosition]} />
            <Text style={[styles.signUp1, styles.signClr]}>Sign up</Text>
          </View>
          <View style={[styles.signUpWithGoogle, styles.signLayout]}>
            <View style={[styles.signUpWithGoogleChild, styles.signLayout]} />
            <Text style={[styles.signUpWith, styles.signClr]}>
              Sign up with Google
            </Text>
            <Image
              style={[styles.google2Icon, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/google-2.png")}
            />
          </View>
          <Text style={[styles.forgotPassword, styles.email1Clr]}>
            Forgot Password ?
          </Text>
          <Text style={[styles.youDontHaveContainer, styles.rememberMe1Typo]}>
            <Text
              style={styles.youDontHave}
            >{`You don't have an account yet?  `}</Text>
            <Text style={styles.signIn}>Sign in</Text>
          </Text>
          <Text style={[styles.loremIpsumDolor, styles.rememberMe1Typo]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>
          <Text
            style={[styles.createAnAccount, styles.createAnAccountPosition]}
          >
            Create an Account
          </Text>
        </View>
      </View>
      <Image
        style={styles.iconlylightOutlinenotificat}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinenotification11.png")}
      />
      <Image
        style={[
          styles.iconlylightOutlineprofile,
          styles.antDesignwifiOutlinedLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlineprofile11.png")}
      />
      <Image
        style={[styles.iconlybolddiscovery, styles.createAnAccountPosition]}
        resizeMode="cover"
        source={require("../assets/iconlybolddiscovery.png")}
      />
      <View style={[styles.topBar, styles.topBarPosition]}>
        <View
          style={[
            styles.antDesignwifiOutlined,
            styles.antDesignwifiOutlinedLayout,
          ]}
        />
        <Image
          style={styles.fabatteryIcon}
          resizeMode="cover"
          source={require("../assets/fabattery2.png")}
        />
        <Image
          style={styles.entypobarGraphIcon}
          resizeMode="cover"
          source={require("../assets/entypobargraph2.png")}
        />
        <Text style={styles.text}>2:40</Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={[styles.rectangleView, styles.detailChild9Layout]} />
      <View style={[styles.detailChild1, styles.detailChild1Layout]} />
      <Image
        style={[styles.location1Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/location-1.png")}
      />
      <View style={[styles.yourLocationParent, styles.detailChild8Position]}>
        <Text style={[styles.yourLocation, styles.transaksiTypo]}>
          Your Location
        </Text>
        <Text style={[styles.cameronWilliams, styles.transaksiTypo]}>
          Cameron Williams
        </Text>
      </View>
      <Image
        style={[styles.iconlylightOutlinearrowD, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinearrowdown2.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Text style={styles.findYourFavorite}>Find Your Favorite Car.</Text>
      <View style={[styles.detailChild2, styles.image2IconPosition]} />
      <Image
        style={[styles.searchIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/search11.png")}
      />
      <Text style={[styles.searchVehicle, styles.topBrandsTypo1]}>
        Search Vehicle...
      </Text>
      <Text style={[styles.topBrands, styles.topBrandsTypo]}>Top Brands</Text>
      <Text style={[styles.aavailableNearYou, styles.topBrandsTypo]}>
        Aavailable Near You
      </Text>
      <Text style={[styles.seeAll, styles.seeTypo]}>See All</Text>
      <Text style={[styles.seeAll1, styles.seeTypo]}>See All</Text>
      <Image
        style={[styles.detailChild3, styles.detailChildLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Image
        style={[styles.detailChild4, styles.detailChildLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-15.png")}
      />
      <View style={[styles.detailChild5, styles.detailChildLayout]} />
      <View style={[styles.detailChild6, styles.detailChildLayout]} />
      <Image
        style={[styles.bmwLogo1, styles.logoLayout]}
        resizeMode="cover"
        source={require("../assets/bmw-logo-1.png")}
      />
      <Image
        style={[styles.teslaLogoPng271Icon, styles.logoLayout]}
        resizeMode="cover"
        source={require("../assets/teslalogopng27-1.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <Image
          style={[styles.groupChild, styles.rectangleLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-18.png")}
        />
        <Image
          style={styles.a8L2022ExteriorRightFrontIcon}
          resizeMode="cover"
          source={require("../assets/a8l2022exteriorrightfrontthreequarter2-1.png")}
        />
        <Text style={[styles.review, styles.dayTypo]}>
          <Text style={styles.text1}>{`3.8 `}</Text>
          <Text style={styles.review1}>[120+ Review]</Text>
        </Text>
        <Text style={[styles.day, styles.dayTypo]}>
          <Text style={styles.text1}>$1290</Text>
          <Text style={styles.review1}>/day</Text>
        </Text>
        <Image
          style={[styles.iconlyboldstar, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconlyboldstar.png")}
        />
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <Image
          style={[styles.groupChild, styles.rectangleLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-18.png")}
        />
        <Image
          style={styles.a8L2022ExteriorRightFrontIcon}
          resizeMode="cover"
          source={require("../assets/a8l2022exteriorrightfrontthreequarter2-1.png")}
        />
        <Text style={[styles.review, styles.dayTypo]}>
          <Text style={styles.text1}>{`3.8 `}</Text>
          <Text style={styles.review1}>[120+ Review]</Text>
        </Text>
        <Text style={[styles.day, styles.dayTypo]}>
          <Text style={styles.text1}>$1290</Text>
          <Text style={styles.review1}>/day</Text>
        </Text>
        <Image
          style={[styles.iconlyboldstar, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconlyboldstar.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <Image
          style={[styles.groupChild, styles.rectangleLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-18.png")}
        />
        <Text style={[styles.bmw3Series, styles.topBrandsTypo]}>
          BMW 3 Series
        </Text>
        <Text style={[styles.reviews, styles.dayTypo]}>
          <Text style={styles.text1}>{`4.5 `}</Text>
          <Text style={styles.review1}>[38 Reviews]</Text>
        </Text>
        <Text style={[styles.day, styles.dayTypo]}>
          <Text style={styles.text1}>$1490</Text>
          <Text style={styles.review1}>/day</Text>
        </Text>
        <Image
          style={[styles.iconlyboldstar, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconlyboldstar.png")}
        />
      </View>
      <Image
        style={[styles.bmw3SeriesExterior1675831Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/bmw3seriesexterior167583-1.png")}
      />
      <View style={[styles.detailChild7, styles.signUpPosition]} />
      <View style={[styles.detailChild8, styles.detailChild8Position]} />
      <Text style={[styles.transaksiBerhasil, styles.transaksiTypo]}>
        Transaksi Berhasil
      </Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("HomePage")}
      />
      <View style={[styles.detailChild9, styles.detailChild9Layout]} />
      <Image
        style={[styles.image2Icon, styles.image2IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <View style={styles.detailChild10} />
      <Image
        style={[styles.importIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/import.png")}
      />
      <Text style={[styles.unduhBuktiTransaksi, styles.transaksiTypo]}>
        Unduh Bukti Transaksi
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailPosition1: {
    left: -1,
    position: "absolute",
  },
  detailPosition: {
    borderTopRightRadius: Border.br_5xl,
    borderTopLeftRadius: Border.br_5xl,
    width: 428,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -4,
    },
  },
  signUpPosition: {
    left: 0,
    position: "absolute",
  },
  emailLayout: {
    height: 76,
    width: 317,
  },
  brandoneLouisTypo: {
    color: Color.colorMidnightblue_400,
    top: 43,
    textAlign: "left",
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_xs,
  },
  email1Clr: {
    color: Color.colorMidnightblue_300,
    textAlign: "left",
  },
  fullNamePosition: {
    left: 29,
    position: "absolute",
  },
  brandoneLouisPosition: {
    left: 25,
    position: "absolute",
  },
  iconLayout1: {
    width: 24,
    height: 24,
  },
  email1Typo: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  rememberMe1Typo: {
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  saveLayout: {
    width: 266,
    height: 50,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
  },
  signClr: {
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  signLayout: {
    width: 264,
    height: 50,
    position: "absolute",
  },
  iconPosition1: {
    left: 34,
    position: "absolute",
  },
  createAnAccountPosition: {
    left: 51,
    position: "absolute",
  },
  antDesignwifiOutlinedLayout: {
    width: 23,
    position: "absolute",
  },
  topBarPosition: {
    left: 24,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  detailChild9Layout: {
    width: 220,
    height: 9,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  detailChild1Layout: {
    height: 44,
    width: 44,
    top: 79,
    borderRadius: Border.br_3xs,
  },
  detailChild8Position: {
    top: 79,
    position: "absolute",
  },
  transaksiTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  iconPosition: {
    left: 357,
    position: "absolute",
  },
  image2IconPosition: {
    width: 328,
    left: 50,
    position: "absolute",
  },
  topBrandsTypo1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  topBrandsTypo: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  seeTypo: {
    width: 49,
    color: Color.colorRoyalblue,
    left: 352,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  detailChildLayout1: {
    height: 80,
    top: 407,
    width: 80,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  detailChildLayout: {
    height: 82,
    width: 82,
    borderColor: Color.colorWhitesmoke_200,
    top: 406,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_sm,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  logoLayout: {
    height: 59,
    width: 59,
    top: 417,
    position: "absolute",
  },
  rectangleLayout: {
    height: 246,
    width: 279,
    position: "absolute",
  },
  dayTypo: {
    top: 212,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  detailChild: {
    backgroundColor: Color.colorBlack,
    width: 429,
    height: 343,
    top: 0,
  },
  detailItem: {
    top: 302,
    height: 624,
    width: 428,
    position: "absolute",
  },
  detailInner: {
    top: 827,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowRadius: 16,
    elevation: 16,
    height: 99,
    width: 428,
    left: -1,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  heartIcon: {
    left: 1806,
    height: 29,
    width: 30,
    top: 0,
    position: "absolute",
  },
  emailChild: {
    top: 26,
    height: 50,
    borderRadius: Border.br_3xs,
    width: 317,
    left: 0,
    position: "absolute",
  },
  brandonelouisgmailcom: {
    left: 15,
    textAlign: "left",
    position: "absolute",
  },
  email1: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
    top: 0,
  },
  email: {
    top: 344,
    left: 30,
    height: 76,
    width: 317,
    position: "absolute",
  },
  brandoneLouis: {
    textAlign: "left",
    color: Color.colorMidnightblue_400,
    top: 43,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_xs,
  },
  fullName: {
    top: 254,
    height: 76,
    width: 317,
  },
  iconEye: {
    top: 39,
    left: 271,
    height: 24,
    position: "absolute",
  },
  hiddenPasswordIcon: {
    top: 49,
    width: 104,
    height: 5,
  },
  password1: {
    color: Color.colorMidnightblue_200,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
    top: 0,
  },
  password: {
    top: 435,
    left: 30,
    height: 76,
    width: 317,
    position: "absolute",
  },
  rememberMeChild: {
    borderRadius: Border.br_8xs,
    height: 24,
    width: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rememberMe1: {
    top: 4,
    color: Color.colorDarkgray_100,
    left: 41,
    textAlign: "left",
  },
  rememberMe: {
    top: 531,
    width: 123,
    height: 24,
  },
  saveChild: {
    backgroundColor: Color.colorMidnightblue_100,
    shadowColor: "rgba(153, 171, 198, 0.18)",
    shadowRadius: 62,
    elevation: 62,
    width: 266,
    height: 50,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -4,
    },
  },
  signUp1: {
    left: 100,
    width: 66,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    top: 17,
    color: Color.colorWhite,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  save: {
    top: 575,
    left: 54,
  },
  signUpWithGoogleChild: {
    backgroundColor: Color.colorThistle,
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
  },
  signUpWith: {
    left: 60,
    width: 179,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    top: 17,
    color: Color.colorWhite,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  google2Icon: {
    top: 15,
    width: 16,
    height: 20,
  },
  signUpWithGoogle: {
    top: 640,
    left: 55,
  },
  forgotPassword: {
    top: 535,
    left: 243,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  youDontHave: {
    color: Color.colorDimgray,
  },
  signIn: {
    textDecoration: "underline",
    color: Color.colorDarkorange,
  },
  youDontHaveContainer: {
    top: 706,
    left: 79,
    textAlign: "left",
  },
  loremIpsumDolor: {
    top: 152,
    left: 42,
    lineHeight: 19,
    width: 291,
    textAlign: "center",
    color: Color.colorDimgray,
  },
  createAnAccount: {
    top: 102,
    fontSize: FontSize.size_11xl,
    color: Color.colorMidnightblue_300,
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  signUp: {
    top: 189,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 375,
    height: 812,
    borderRadius: Border.br_11xl,
    overflow: "hidden",
  },
  iconlylightOutlineheart: {
    left: -1653,
    width: 1836,
    height: 1001,
    top: 845,
    position: "absolute",
  },
  iconlylightOutlinenotificat: {
    left: 255,
    height: 32,
    width: 27,
    top: 845,
    position: "absolute",
  },
  iconlylightOutlineprofile: {
    left: 354,
    top: 844,
    height: 29,
  },
  iconlybolddiscovery: {
    height: 30,
    top: 844,
    width: 30,
  },
  antDesignwifiOutlined: {
    left: 310,
    height: 21,
    top: 0,
    overflow: "hidden",
  },
  fabatteryIcon: {
    left: 350,
    height: 9,
    top: 10,
    width: 27,
    position: "absolute",
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
    fontWeight: "600",
    top: 6,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  topBar: {
    top: 18,
    width: 377,
    height: 24,
  },
  vectorIcon: {
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
    backgroundColor: Color.colorGray_200,
  },
  detailChild1: {
    left: 24,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  location1Icon: {
    top: 89,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  yourLocation: {
    color: Color.colorGainsboro_100,
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  cameronWilliams: {
    marginTop: 4,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  yourLocationParent: {
    left: 80,
  },
  iconlylightOutlinearrowD: {
    height: "0.86%",
    width: "3.15%",
    top: "11.88%",
    right: "45.68%",
    bottom: "87.26%",
    left: "51.17%",
  },
  rectangleIcon: {
    height: 44,
    width: 44,
    top: 79,
    borderRadius: Border.br_3xs,
  },
  findYourFavorite: {
    top: 157,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.montserratMedium,
    width: 304,
    fontWeight: "500",
    left: 24,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  detailChild2: {
    top: 287,
    shadowColor: "rgba(175, 172, 172, 0)",
    shadowRadius: 36,
    elevation: 36,
    height: 56,
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    backgroundColor: Color.colorWhite,
  },
  searchIcon: {
    height: "1.88%",
    width: "3.97%",
    top: "32.83%",
    right: "76.17%",
    bottom: "65.29%",
    left: "19.86%",
  },
  searchVehicle: {
    top: 303,
    left: 114,
    color: Color.colorSilver,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  topBrands: {
    top: 367,
    width: 93,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 50,
  },
  aavailableNearYou: {
    top: 521,
    width: 169,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 50,
  },
  seeAll: {
    top: 368,
  },
  seeAll1: {
    top: 522,
  },
  detailChild3: {
    left: 50,
  },
  detailChild4: {
    left: 146,
  },
  detailChild5: {
    left: 241,
  },
  detailChild6: {
    left: 337,
  },
  bmwLogo1: {
    left: 252,
  },
  teslaLogoPng271Icon: {
    left: 348,
  },
  groupChild: {
    width: 279,
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
  },
  a8L2022ExteriorRightFrontIcon: {
    left: 5,
    width: 259,
    height: 170,
    top: 10,
    position: "absolute",
  },
  text1: {
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
  },
  review1: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_xs,
  },
  review: {
    width: 110,
    left: 41,
  },
  day: {
    left: 192,
    width: 72,
  },
  iconlyboldstar: {
    height: "5%",
    width: "4.66%",
    top: "87.8%",
    right: "87.1%",
    bottom: "7.2%",
    left: "8.24%",
  },
  rectangleParent: {
    top: 569,
    width: 279,
    left: 50,
  },
  bmw3Series: {
    top: 180,
    left: 23,
    width: 114,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  reviews: {
    width: 113,
    left: 41,
  },
  rectangleContainer: {
    left: 345,
    top: 569,
    width: 279,
  },
  bmw3SeriesExterior1675831Icon: {
    top: 579,
    width: 255,
    height: 167,
  },
  detailChild7: {
    backgroundColor: Color.colorGray_200,
    width: 428,
    top: 0,
    height: 926,
  },
  detailChild8: {
    height: 847,
    width: 428,
    borderTopRightRadius: Border.br_5xl,
    borderTopLeftRadius: Border.br_5xl,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  transaksiBerhasil: {
    top: 467,
    left: 106,
    fontSize: FontSize.size_5xl,
    width: 239,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  rectanglePressable: {
    top: 101,
    left: 174,
    backgroundColor: Color.colorGray_300,
    width: 80,
    height: 9,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  detailChild9: {
    top: 909,
    left: 103,
    backgroundColor: Color.colorGainsboro_200,
  },
  image2Icon: {
    top: 227,
    height: 206,
  },
  detailChild10: {
    top: 747,
    left: 66,
    borderColor: Color.colorSilver,
    width: 327,
    height: 68,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_sm,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  importIcon: {
    top: 769,
    left: 84,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  unduhBuktiTransaksi: {
    top: 767,
    left: 129,
    fontSize: 20,
    width: 297,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  detail: {
    borderRadius: Border.br_13xl,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 926,
    backgroundColor: Color.colorWhite,
  },
});

export default Detail1;
