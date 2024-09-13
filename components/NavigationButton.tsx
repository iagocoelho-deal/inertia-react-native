import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Href, Link } from "expo-router";

interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  href: Href<string | object>;
}

const NavigationButton: React.FC<ButtonProps> = ({
  title,
  href,
  style,
  isDisabled = false,
}) => {
  return (
    <Link
      href={href}
      asChild
      style={[styles.button, style, isDisabled && { backgroundColor: "#b2d1aa" }]}
      disabled={isDisabled}
    >
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={[styles.text]}>{title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#96FC7D",
  } as ViewStyle,
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  } as TextStyle,
});

export default NavigationButton;
