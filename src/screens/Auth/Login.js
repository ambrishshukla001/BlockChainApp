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
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Image, Text, Input } from "@rneui/themed";
import { ImagePath } from "../../utils/ImagePath";
import { COLOR } from "../../utils/Color";
import { CountryCode } from "../../utils/CountryCode";
import CustomButton from "../../Components/CustomButton";
import AuthInput from "../../Components/AuthInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LoginUrl } from "../../RestApi/ApiConfig";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { height, width } = Dimensions.get("screen");

const Login = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  //*********** validation code start here /
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const [selectedString, setSelectedString] = useState("Email");

  const [option, setOption] = useState("Email");
  const [check, setCheck] = useState(false);
  const [hidepass, setHidePass] = useState(false);

  const [visiblePassword, setVisiblePassword] = useState(false);

  const [Email, setEmail] = useState(" ");
  const [errorEmail, setErrorEmail] = useState("");

  const [Password, setPassword] = useState(" ");
  const [errorPassword, setErrorPassword] = useState(null);
  const [loader, setLoader] = useState(false)

  // ********** Country Code States Starts Here **********
  const [filterdata, setFilterdata] = useState("");
  const [countryImage, setCountryImage] = useState();
  const [contrymodal, setcontrymodal] = useState(false);
  const [code, setCode] = React.useState("+91");
  const [isText, setIsText] = React.useState("");
  // ********** Country Code States Ends Here **********

  // ********** Country Code Search Functions **********
  const SeacrFunct = (value) => {
    if (value !== "") {
      // console.log("countryCode----", CountryCode);
      let mydata = CountryCode.filter((item) =>
        item.label.toLowerCase().includes(value.toLowerCase())
      );
      setFilterdata(mydata);
      setIsText(value);
    }
  };

  // ********** Country Code Render Item **********
  const renderItem = ({ item }) => (
    <Item name={item.label} dialCode={item.value} icon={item.icon} />
  );

  // ********** Country Code Item Functions **********
  const Item = ({ name, dialCode, icon }) => (
    <TouchableOpacity
      key={String(name)}
      onPress={() => {
        setCode(dialCode);
        setCountryImage(icon);
        setcontrymodal(!contrymodal);
      }}
    >
      <View style={styles.item}>
        <Image source={icon} style={styles.image2} resizeMode="cover" />
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.dialcodeText}>{dialCode}</Text>
      </View>
    </TouchableOpacity>
  );

  const _passwordvalidate = (pass) => {
    var passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (pass === "") {
      setErrorPassword("*Please enter password.");
    } else if (/([A-Z]+)/g.test(pass) && pass.length < 8) {
      setErrorPassword(
        "*Please enter a special character and length must be 8 digit."
      );
    } else if (!passwordRegex.test(pass)) {
      setErrorPassword("*Please enter valid password.");
    } else {
      setErrorPassword(null);
    }
  };

  const _emailvalidate = (mail) => {
    var emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (mail === "") {
      setErrorEmail("*Please enter email.");
    } else if (!emailRegex.test(mail)) {
      setErrorEmail("*Please enter valid email.");
    } else {
      setErrorEmail(null);
    }
  };

  const validate = () => {
    let flag = true;

    if (Email === "") {
      setErrorEmail("*Please enter email.");
      flag = false;
    }
    if (Password === "") {
      setErrorPassword("*Please enter password.");
      flag = false;
    }

    return flag;
  };

  const onSubmit = () => {
    if (validate()) {
       LoginApi();
      
    } else {
      Alert.alert("Please fill above details");
    }
  };

  const LoginApi = () => {
    console.log("@@@ Data ===>", Email, Password)
    setIsLoading(true);
    axios({
      method: "post",
      url: LoginUrl,
      data: {
        email: Email,
        ipAddress: "",
        userAgent: "",
        location: "",
        password: Password,
        deviceToken: "",
      },
      headers : {
        "content-type" : "application/json"
      }
    })
      .then(async (response) => {
        if (response.data.status === 200) {
          console.log("====== Login Response ======", response);
       
          props.navigation.navigate("DashBoard");
          setIsLoading(false);
        } else {
          console.log("@@@ Response ====>", response)
          // alert("Something went wrong.");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log("===== Login Catch Error ======", err);
        setIsLoading(false);
        if (err.response.data.responseCode === 402) {
          alert("Bad Credentials");
        } else if (err.response.data.responseCode === 404) {
          alert("User not found");
        } else {
          alert("Something went wrong.");
        }
      });
  };

  function renderModal() {
    return (
      <View style={styles.modalView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={contrymodal}
          onRequestClose={() => {
            setcontrymodal(!contrymodal);
          }}
        >
          <View style={styles.MainModalContainer}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.ModalSecondContainer}>
                <View style={styles.searchView}>
                  <TextInput
                    value={filterdata}
                    style={styles.searchInput}
                    autoCapitalize="none"
                    placeholder="Search country name"
                    onChangeText={(text) => {
                      setIsText(text);
                      SeacrFunct(text);
                    }}
                    placeholderTextColor="#9796A8"
                  />
                </View>

                <View style={{ height: "80%", width: width }}>
                  <FlatList
                    data={filterdata ? filterdata : CountryCode}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.value}
                  />
                </View>
                <View style={styles.ModalThirdContainer}></View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </Modal>
      </View>
    );
  }

  function renderHeader() {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Register")}
        style={styles.headerParent}
      >
        <Image source={ImagePath.CROSS} style={styles.headerImage} />
      </TouchableOpacity>
    );
  }

  function renderMiddle() {
    return (
      <View style={styles.middleParent}>
        <Text style={styles.globalText}>Global REIT Account Login</Text>
      </View>
    );
  }

  function renderInput() {
    return (
      <View
        style={{
          height: height * 0.37,
          width: width * 1,
          alignItems: "center",
          // backgroundColor: "red",
        }}
      >
        {/* <View
          style={{
            height: height * 0.1,
            width: width * 0.95,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View
            onPress={() => setOption("Email")}
            style={{
              backgroundColor: option === "Email" ? COLOR.TAB_COLOR : "white",
              height: height * 0.05,
              width: width * 0.3,
              borderRadius: 5,
              marginRight: width * 0.03,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: height / 75,
                // color: option === "Email" ? "white" : COLOR.TAB_COLOR,
              }}
            >
              Email
            </Text>
          </View>
        </View> */}

        <View
          style={{
            top: height * 0.05,
            height: height * 0.6,
            width: width * 1,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: width * 0.6,
              paddingLeft: width * 0.07,
              alignItems: "center",
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: height / 50,
                color: COLOR.LABETEXT,
                alignSelf: "flex-start",
              }}
            >
              Email
            </Text>
          </View>
          <View
            style={{
              height: height * 0.12,
              width: width * 1,
              // borderWidth: 1,
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: 10,
                backgroundColor: COLOR.TXT_INPUT,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                height: height * 0.09,
                width: width * 0.9,
                justifyContent: "space-around",
                //   borderWidth: 1,
              }}
            >
              <Image
                source={ImagePath.EMAIL}
                style={{
                  height: height * 0.05,
                  width: width * 0.05,
                  resizeMode: "contain",
                }}
              />
              <View
                style={{
                  backgroundColor: COLOR.BORDER,
                  marginHorizontal: width * 0.001,
                  height: height * 0.06,
                  width: width * 0.003,
                }}
              ></View>
              <TextInput
                placeholderTextColor="#366EA6"
                placeholder="Enter Your Email"
                autoCapitalize="none"
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: height / 64,
                  height: height * 0.08,
                  width: width * 0.66,
                  color: "#141414"
                }}
                onChangeText={(txt) => {
                  setEmail(txt), _emailvalidate(txt);
                }}
              />
            </View>

            {errorEmail !== null ? (
              <View
                style={{
                  height: "23%",
                  width: "90%",
                  alignSelf: "center",
                  //    backgroundColor: "green",
                }}
              >
                <Text style={{ color: "red", fontSize: 12 }}>{errorEmail}</Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              alignItems: "center",
              top: height * 0.03,
              height: height * 0.22,
              width: width * 1,
            }}
          >
            <View
              style={{
                width: width * 0.44,
                paddingLeft: width * 0.07,
                alignItems: "center",
                alignSelf: "flex-start",
                // borderWidth:1
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: height / 50,
                  color: COLOR.LABETEXT,
                  alignSelf: "flex-start",
                }}
              >
                Password
              </Text>
            </View>

            <View
              style={{
                height: height * 0.12,
                width: width * 1,
                // borderWidth: 1,
                alignItems: "center",
              }}
            >
              <AuthInput
                LeftIcon={true}
                leftImg={ImagePath.LOCK}
                separator={true}
                placeholder={"Enter your password"}
                RightIcon={true}
                secureTextEntry={hidepass}
                rightImg={hidepass ? ImagePath.HIDEEYE : ImagePath.SHOWEYE}
                rightPress={() => setHidePass(hidepass ? false : true)}
                minLength={8}
                maxLength={20}
                onChangeText={(txt) => {
                  setPassword(txt), _passwordvalidate(txt);
                }}
              />

              {errorPassword !== null ? (
                <View
                  style={{
                    height: "23%",
                    width: "90%",
                    alignSelf: "center",
                    //    backgroundColor: "green",
                  }}
                >
                  <Text style={{ color: "red", fontSize: height / 73 }}>
                    {errorPassword}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderCheck() {
    return (
      <View
        style={{
          alignItems: "center",
          height: height * 0.035,
          width: width * 0.95,
          alignSelf: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
          marginBottom:height*0.04,
          // backgroundColor:'red',
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            height: height * 0.045,
            width: width * 0.39,
            justifyContent: "space-evenly",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {check ? (
            <TouchableOpacity onPress={() => setCheck(false)}>
              <Image
                source={ImagePath.CHECK}
                resizeMode="contain"
                style={{ height: height * 0.05, width: width * 0.05 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setCheck(true)}
              style={{
                height: height * 0.025,
                width: width * 0.05,
                backgroundColor: check ? COLOR.BUTTONCOLOR : COLOR.CHECK,
              }}
            ></TouchableOpacity>
          )}
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: height / 60,
              color: COLOR.REMEBERTEXT,
            }}
          >
            Remember me
          </Text>
         
        </View>
        <TouchableOpacity 
        style={{  height: height * 0.045,
            width: width * 0.45,
            justifyContent:"center",alignItems:'flex-end' }}
            onPress={() => props.navigation.navigate("ForgotPassword")}
          >
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: height / 60,
                color: COLOR.REMEBERTEXT,
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>

      </View>
    );
  }

  function renderButton() {
    return (
      <View
        style={{
          height: height * 0.2,
          width: width * 1,
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "brown",
        }}
      >
        <CustomButton
          title={"Sign In"}
          ButtonPress={() => onSubmit("")}
        // onPressButton={() => onSubmit()}
        // ButtonPress={() => LoginApi()}
        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Register")}
          style={{
            height: height * 0.06,
            width: width * 0.4,
            justifyContent: "flex-end",
            alignItems: "center",
            //   backgroundColor: "yellow",
          }}
        >
          <Text
            style={{
              textDecorationLine: "underline",
              fontFamily: "Lato-Regular",
              fontSize: height / 55,
              color: COLOR.LABETEXT,
            }}
          >
            Register Now
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <ScrollView>
          {/* {renderHeader()} */}
          {renderMiddle()}
          {renderInput()}
          {renderCheck()}
          {renderButton()}
          {renderModal()}
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  ModalSecondContainer: {
    height: height * 0.5,
    width: width * 0.93,
    backgroundColor: "#ECECEC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  MainModalContainer: {
    height: height * 1,
    width: width * 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  headerParent: {
    height: height * 0.1,
    width: width * 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: width * 0.04,
  },
  middleParent: {
    height: height * 0.15,
    width: width * 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'red'
  },
  searchView: {
    height: "12%",
    width: width / 1.2,
    // marginVertical: "5%",
    // marginHorizontal: '7%',
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    borderBottomWidth: 0.9,
    borderColor: "#CFD2D8",
    fontSize: height / 50,
    fontWeight: "600",
    color: "black",
    txtStyle: {
      fontWeight: "400",
      fontSize: height / 55,
      color: "black",
    },
  },
  headerImage: {
    height: height * 0.03,
    width: width * 0.045,
    resizeMode: "contain",
  },
  ModalThirdContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "10%",
    position: "absolute",
    bottom: Platform.OS === "ios" ? 20 : 0,
    width: width,
  },
  globalText: {
    fontFamily: "Lato-Bold",
    fontSize: height / 33,
    color: "black",
  },
  item: {
    // marginHorizontal: '10%',
    marginVertical: "3%",
    // justifyContent: 'center',
    // width: width / 1.1,
    width: width / 1.3,
    alignSelf: "center",
    flexDirection: "row",
  },

  image2: {
    height: height * 0.03,
    width: width * 0.07,
  },

  nameText: {
    fontSize: height / 50,
    alignSelf: "center",
    marginLeft: 15,
    color: "grey",
    width: width / 1.7,
  },
  dialcodeText: {
    fontSize: height / 50,
    alignSelf: "center",
    marginLeft: height / 70,
    color: "grey",
  },
});
