import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import Style from "./Style";
import { array } from "prop-types";
import Homescreen from "../Homescreen/Homescreen";
import { ThemeContext } from "../Contexts/ThemeContext";
const MyText = () => {
  // useEffect(() => {
  //   console.log("on render");
  // }, []);
  useEffect(() => {
    // alert("on change");
  }, [text]);
  const [text, setText] = useState(0);
  const array = Array(300).fill(0);
  const scrollViewRef = useRef(null);
  function handleClick() {
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
  }
  const [isDark, setisDark] = useState(false);
  return (
    <SafeAreaView>
      <ThemeContext.Provider value={isDark}>
        <View
          style={{ marginTop: 20, backgroundColor: isDark ? "#000" : "#fff" }}
        >
          <Text
            style={{ textAlign: "center", color: isDark ? "#fff" : "#000" }}
          >
            Text color
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            title={"change"}
            onPress={() => {
              setisDark(!isDark);
            }}
          ></Button>
        </View>
        <Homescreen />
      </ThemeContext.Provider>
      {/* <Text
          onPress={() => setText(text + 1)}
          style={[Style.text, Style.text1]}
        >
          {text}
        </Text> */}
      {/* <ScrollView ref={scrollViewRef} style={{ marginBottom: 150, padding: 50 }}>
          <SafeAreaView>
            {array.map((value, index) => (
              <Text key={index}>Hello{index}</Text>
            ))}
          </SafeAreaView>
        </ScrollView> */}
      {/* <Button onPress={handleClick} title={"Submit"}></Button> */}
    </SafeAreaView>
  );
};

export default MyText;

const styles = StyleSheet.create({});
