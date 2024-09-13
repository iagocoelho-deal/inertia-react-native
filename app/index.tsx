import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TextInput } from "react-native";
import { BlurView } from "expo-blur";
import NavigationButton from "@/components/NavigationButton";

export default function Login() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/login_background.png")}
        style={[styles.image, StyleSheet.absoluteFillObject]}
        resizeMode="cover"
      />

      <BlurView intensity={100} style={styles.blur}>
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 22, color: "#fff", paddingBottom: 30 }}>
            Faça seu login...
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#fff"
          />

          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Senha"
            placeholderTextColor="#fff"
            secureTextEntry
          />

          <NavigationButton title={"ENTRAR"} href="/rent" />
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  blur: {
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    width: "100%",
    paddingVertical: 50,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
    backgroundColor: "rgba(11, 10, 10, 0.5)",
  },
  input: {
    height: 40,
    width: "100%",
    marginVertical: 12,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    color: "#fff",
  },
});
