import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CheckIcon from "@/components/icons/checkIcon";
import NavigationButton from "@/components/NavigationButton";

export default function SuccessPayment() {
  return (
    <View style={styles.container}>
      <CheckIcon />
      <Text style={styles.title}>Sucesso!</Text>
      <Text style={styles.subtitle}>
        O seu locker foi reservado na localização escolhida!
      </Text>

      <View style={{ width: "90%", marginVertical: 40 }}>
        <NavigationButton title="Acesse seu locker!" href={"/rent"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ABA8A3",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
    color: "#000",
  },
  subtitle: {
    fontSize: 22,
    marginBottom: 5,
    color: "#000",
    textAlign: "center",
  },
});
