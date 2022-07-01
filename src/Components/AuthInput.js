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

const AuthInput = (props) => {
  const {
    keyboardType,
    maxLength,
    // styles,
    placeholderColor,
    value,
    multiline,
    secureTextEntry,
    onChangeText,
    placeholderTextColor,
    RightIcon,
    separator,
    placeholder,
    containerStyle,
    editable,
    rightImg,
    LeftIcon,
    leftImg,
    leftIconPress,
    countryCode,
    CountryCode,
    countryImage,
    rightPress,
  } = props;

  return (
    <View style={styles.container}>
      {LeftIcon ? <Image source={leftImg} style={styles.leftImage} /> : null}
      {CountryCode ? (
        <TouchableOpacity onPress={leftIconPress}>
          <View
            style={{
              height: height * 0.06,
              top: 3,
              width: width * 0.23, //0.2
              // borderRightWidth: 0.5,
              justifyContent: "space-around",
              alignItems: "center",
              borderRightColor: "rgba(159, 159, 159, 1)",
              flexDirection: "row",
              // backgroundColor: "red",
              padding: 5,
            }}
          >
            <Image
              style={{
                height: 27,
                width: 27,
                resizeMode: "contain",
                borderRadius: 13.5,
                // backgroundColor: "blue"
              }}
              source={countryImage}
            />
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: height / 65,
                color: "black",
              }}
            >
              {countryCode}
            </Text>
            <Image
              style={{
                height: height * 0.02,
                width: width * 0.02,
                resizeMode: "contain",
                // backgroundColor: "red"
              }}
              source={ImagePath.DOWNARROW}
            />
          </View>
        </TouchableOpacity>
      ) : null}
      {separator ? <View style={styles.separator}></View> : null}
      <TextInput
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        onChangeText={onChangeText}
        placeholderTextColor="#366EA6"
        placeholder={placeholder}
        style={{
          fontFamily: "Lato-Regular",
          fontSize: height / 64,
          color: COLOR.BUTTONCOLOR,
          height: height * 0.08,
          width: LeftIcon
            ? width * 0.55
            : separator
            ? width * 0.55
            : CountryCode
            ? width * 0.55
            : RightIcon
            ? width * 0.7
            : width * 0.8,
          // backgroundColor: "red"
        }}
        {...props}
      />
      {RightIcon ? (
        <TouchableOpacity onPress={rightPress}>
          <Image source={rightImg} style={styles.rigthImage} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  // txtInput: {
  //     fontFamily: "Lato-Regular",
  //     fontSize: height / 64,
  //     height: height * 0.08,
  //     width: LeftIcon ? width * 0.55 : separator ? width * 0.55 : CountryCode ? width * 0.55 : 0.9,
  //     backgroundColor: "red"
  // },
  separator: {
    backgroundColor: COLOR.BORDER,
    marginHorizontal: width * 0.001,
    height: height * 0.06,
    width: width * 0.002,
  },
  leftImage: {
    height: height * 0.05,
    width: width * 0.05,
    resizeMode: "contain",
  },
  container: {
    // top: height * 0.01,
    borderRadius: 10,
    backgroundColor: COLOR.TXT_INPUT,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.075,
    width: width * 0.9,
    justifyContent: "space-around",
    
  },
  rigthImage: {
    height: height * 0.06,
    width: width * 0.06,
    resizeMode: "contain",
  },
});
