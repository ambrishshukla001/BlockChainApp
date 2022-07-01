import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  TextInput,
  Modal,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Image, Text, Input } from "@rneui/themed";
import { ImagePath } from "../utils/ImagePath";
import { COLOR } from "../utils/Color";
import { CountryCode } from "../utils/CountryCode";
const { height, width } = Dimensions.get("screen");

const Header = (props) => {
  const {
    title,
    rightPress,
    RightIcon,
    LeftIcon,
    leftPress,
    rightImg,
    leftImg,
  } = props;

  return (
    <View style={styles.headerParent}>
      {LeftIcon ? (
        <TouchableOpacity
          onPress={leftPress}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: height * 0.1,
            width: width * 0.2,
          }}
        >
          <Image source={leftImg} style={styles.headerImage} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={leftPress}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: height * 0.1,
            width: width * 0.2,
          }}
        >
          {/* <Image source={leftImg} style={styles.headerImage} /> */}
        </TouchableOpacity>
      )}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          height: height * 0.1,
          width: width * 0.6,
        }}
      >
        <Text style={styles.walletText}>{title}</Text>
      </View>
      {RightIcon ? (
        <TouchableOpacity
          onPress={rightPress}
          style={{
            backgroundColor: "yellow",
            justifyContent: "center",
            alignItems: "center",
            height: height * 0.1,
            width: width * 0.2,
          }}
        >
          <Image source={rightImg} style={styles.headerImage} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={leftPress}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: height * 0.1,
            width: width * 0.2,
          }}
        >
          {/* <Image source={leftImg} style={styles.headerImage} /> */}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerParent: {
    height: height * 0.1,
    width: width * 1,
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    // paddingHorizontal: width * 0.04
    // paddingRight: width * 0.040
  },
  headerImage: {
    height: height * 0.1,
    width: width * 0.1,
    resizeMode: "contain",
  },
  walletText: {
    fontFamily: "Poppins-Bold",
    fontSize: height / 45,
    color: COLOR.BUTTONCOLOR,
  },
});
