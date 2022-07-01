import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../screens/Splash/Splash";
import Login from "../screens/Auth/Login";
import BottomTab from "../navigation/BottomTab";
import WalletDetails from "../screens/WalletDetails/WalletDetails";
import TransactionDetails from "../screens/TransactionDetails.js/TransactionDetails";
import Wallet from "../screens/Wallet/Wallet";
import ChangePassword from "../screens/ChangePassword/Changepassword";
import Kyc from "../screens/KYC/Kyc";
import AddBank from "../screens/AddBank/AddBank";
import WithDraw from "../screens/WithDraw/Withdraw";
import Profile from "../screens/Profile/Profile";
import EditProfile from "../screens/Profile/EditProfile";
import UsdtAddress from "../screens/UsdtAddress/Usdtaddress";
import BuySell from "../screens/BuySell/BuySell";
import ConfirmTrans from "../screens/BuySell/ConfirmTrans";
import Redemption from "../screens/Redemption/Redemption";
import VendorsDetails from "../screens/Redemption/VendorsDetails";
import DrawerRoutes from "./DrawerRoutes";
import Register from "../screens/Auth/Register";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import VerifyOtp from "../screens/Auth/VerifyOtp";
import ResetPassword from "../screens/Auth/ResetPassword";
import Support from "../screens/Support/Support";
import CreateTicket from "../screens/Support/CreateTicket";

const rootStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <rootStack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <rootStack.Screen name="Splash" component={Splash} />
        <rootStack.Screen name="Login" component={Login} />
        <rootStack.Screen name="DashBoard" component={DrawerRoutes} />
        <rootStack.Screen name="WalletDetails" component={WalletDetails} />
        <rootStack.Screen
          name="TransactionDetails"
          component={TransactionDetails}
        />
        <rootStack.Screen name="Wallet" component={Wallet} />
        <rootStack.Screen name="ChangePassword" component={ChangePassword} />
        <rootStack.Screen name="Kyc" component={Kyc} />
        {/* <rootStack.Screen name="AddBank" component={AddBank} /> */}
        <rootStack.Screen name="WithDraw" component={WithDraw} />
        <rootStack.Screen name="Profile" component={Profile} />
        <rootStack.Screen name="EditProfile" component={EditProfile} />
        <rootStack.Screen name="UsdtAddress" component={UsdtAddress} />
        <rootStack.Screen name="BuySell" component={BuySell} />
        <rootStack.Screen name="ConfirmTrans" component={ConfirmTrans} />
        <rootStack.Screen name="Redemption" component={Redemption} />
        <rootStack.Screen name="VendorsDetails" component={VendorsDetails} />
        <rootStack.Screen name="Register" component={Register} />
        <rootStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <rootStack.Screen name="VerifyOtp" component={VerifyOtp} />
        <rootStack.Screen name="ResetPassword" component={ResetPassword} />
        <rootStack.Screen name="Support" component={Support} />
        <rootStack.Screen name="CreateTicket" component={CreateTicket} />
      </rootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
