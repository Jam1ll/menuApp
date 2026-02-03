import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  //properties
  label: string;

  //methods
  onPress?: () => void;
}

export default function FAB({ label, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed ? { opacity: 0.8 } : { opacity: 1 },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    color: "#000000",
    backgroundColor: "rgb(0, 111, 24)",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000000", //color de la sombra
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 4, //sombra del boton
    shadowRadius: 4,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
