import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import LockerComponent from "@/components/LockerComponent";
import { RadioButton } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";
import CreditCardIcon from "@/components/icons/creditCardIcon";
import UIButton from "@/components/Button";
import NavigationButton from "@/components/NavigationButton";

export default function Payment() {
  const { title } = useLocalSearchParams<{ title: string }>();
  const [selectedCard, setSelectedCard] = useState<string>("");

  return (
    <View style={styles.container}>
      <LockerComponent title={title} />

      <Text style={styles.value}>R$ 30,00</Text>

      <View style={styles.radioContainer}>
        <View style={styles.radioOption}>
          <View style={{ flexDirection: "row" }}>
            <CreditCardIcon />
            <View>
              <Text style={styles.optionText}>MasterCard - 7488</Text>
              <Text style={[styles.optionText, { fontSize: 14 }]}>01/25</Text>
            </View>
          </View>
          <RadioButton
            color="#96FC7D"
            value="card1"
            status={selectedCard === "card1" ? "checked" : "unchecked"}
            onPress={() => setSelectedCard("card1")}
          />
        </View>

        <View style={styles.radioOption}>
          <View style={{ flexDirection: "row" }}>
            <CreditCardIcon />
            <View>
              <Text style={styles.optionText}>MasterCard - 7488</Text>
              <Text style={[styles.optionText, { fontSize: 14 }]}>01/25</Text>
            </View>
          </View>
          <RadioButton
            color="#96FC7D"
            value="card2"
            status={selectedCard === "card2" ? "checked" : "unchecked"}
            onPress={() => setSelectedCard("card2")}
          />
        </View>

        <View style={styles.radioOption}>
          <View style={{ flexDirection: "row" }}>
            <CreditCardIcon />
            <View>
              <Text style={styles.optionText}>MasterCard - 7488</Text>
              <Text style={[styles.optionText, { fontSize: 14 }]}>01/25</Text>
            </View>
          </View>
          <RadioButton
            color="#b2d1aa"
            value="card3"
            status={selectedCard === "card3" ? "checked" : "unchecked"}
            onPress={() => setSelectedCard("card3")}
          />
        </View>
      </View>

      <NavigationButton title="Pagar" href={"/success"} isDisabled={!selectedCard}/>
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
  value: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    color: "#96FC7D",
    marginTop: 30,
  },
  radioContainer: {
    flexDirection: "column",
    backgroundColor: "#000",
    marginVertical: 40,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  radioOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  optionText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#fff",
  },
});
