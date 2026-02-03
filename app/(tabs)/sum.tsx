import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import FAB from "../components/FAB";

export default function Sum() {
  //Estados
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  const sum = () => {
    const value1 = parseFloat(n1);
    const value2 = parseFloat(n2);

    if (!isNaN(value1) && !isNaN(value2)) {
      setResult(value1 + value2);
      setN1("");
      setN2("");
    } else {
      setError("Por favor ingresar un número válido");
      setResult(0);
      setN1("");
      setN2("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sumadora</Text>

      <View style={styles.horizontalView}>
        <TextInput
          style={styles.input}
          placeholder="1,2,3..."
          keyboardType="numeric"
          value={n1}
          onChangeText={setN1}
        />
        <TextInput
          style={styles.input}
          placeholder="4,5,6..."
          keyboardType="numeric"
          value={n2}
          onChangeText={setN2}
        />
      </View>

      {result !== null && (
        <Text style={styles.resultText}>El resultado es: {result}</Text>
      )}

      <View style={styles.horizontalView}>
        <FAB label="obtener resultado" onPress={sum} />
        <FAB
          label="resetear"
          onPress={() => {
            setN1("");
            setN2("");
            setResult(0);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 200,
    backgroundColor: "#f5f5f5",
  },
  title: { fontSize: 24, fontWeight: "bold", paddingBottom: 30 },
  input: {
    height: 50,
    width: 160,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 18,
  },
  resultText: {
    fontSize: 24,
    color: "green",
    fontWeight: "bold",
    textAlign: "center",
    padding: 30,
  },
  horizontalView: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 15,
  },
});
