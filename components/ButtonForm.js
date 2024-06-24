import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

const ButtonForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ padding: 10 }}>
      <Text>ButtonForm</Text>
      <TextInput
        value={email}
        placeholder="Please enter your email"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        value={password}
        placeholder="Please enter your password"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry
      />
      <Pressable
        onPress={() => {
          console.log(email, password);
        }}
        style={{ backgroundColor: "green", padding: 10, marginBottom: 10 }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default ButtonForm;
