import { View, Text } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
const Homescreen = () => {
  const isDark = useContext(ThemeContext);
  return (
    <View style={{ marginTop: 20, backgroundColor: isDark ? "#000" : "#fff" }}>
      <Text style={{ textAlign: "center", color: isDark ? "#fff" : "#000" }}>
        Homescreen
      </Text>
    </View>
  );
};

export default Homescreen;
