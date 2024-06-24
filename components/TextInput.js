import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const TextInputs = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={{ padding: 10 }}>
      <Text>Hello</Text>
      <TextInput
        value={text}
        returnKeyType="go"
        onChange={() => {
          setText((value) => {
            value;
          });
        }}
        placeholder="Enter Your Email"
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 4,
          marginVertical: 10,
        }}
      />
      <TextInput
        value={password}
        secureTextEntry={true}
        returnKeyType="done"
        onChange={() => {
          setPassword((value) => {
            value;
          });
        }}
        placeholder="Enter Your Password"
        keyboardType="done"
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 4,
          marginVertical: 10,
        }}
      />
    </View>
  );
};

export default TextInputs;
