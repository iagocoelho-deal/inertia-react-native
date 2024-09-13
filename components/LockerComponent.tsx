import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import StorageIcon from "@/components/icons/storageIcon";

export default function LockerComponent({ title }: { title: string }) {
  return (
    <Link href={`/payment?title=${title}`} style={styles.link} asChild>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.container}>
          <StorageIcon />
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    width: "100%",
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 20,
    marginVertical: 5,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 20,
  },
});
