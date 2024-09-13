import React from "react";
import { Text, View, StyleSheet } from "react-native";
import LockerComponent from "@/components/LockerComponent";

export default function RentLocker() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione um locker:</Text>

      <LockerComponent title="Av. Sapopemba, 415 - Vila Reg. Feijó" />
      <LockerComponent title="R. Avaí, 358 - Mooca" />
      <LockerComponent title="R. Martim Burchard, 112 - Brás" />
      <LockerComponent title="Av. Paulista, 1972 - Bela Vista" />
      <LockerComponent title="Rua Pereira Barreto, 169 - Centro" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ABA8A3",
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    color: "#fff",
  },
});
