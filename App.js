import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Routes from "./src/navigation/Routes";

import { createTheme, ThemeProvider } from "@rneui/themed";

const myTheme = createTheme({
  lightColors: {
    primary: "#f2f2f2",
  },
  darkColors: {
    primary: "#121212",
  },
  mode: "dark",
});

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <ThemeProvider theme={myTheme}>
        <Routes />
      </ThemeProvider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
