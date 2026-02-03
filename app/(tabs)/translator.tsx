import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import FAB from "../components/FAB";

const translate = (num: number): string => {
  if (num === 0) return "cero";
  if (num === 1000) return "mil";

  const unidades = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];
  const especiales = [
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
  ];
  const decenas = [
    "",
    "",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];
  const centenas = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];

  if (num < 10) return unidades[num];

  if (num < 20) return especiales[num - 10];

  if (num < 30) {
    if (num === 20) return "veinte";
    return "veinti" + unidades[num - 20];
  }

  if (num < 100) {
    const unidad = num % 10;
    const decena = Math.floor(num / 10);

    if (unidad === 0) return decenas[decena];
    return decenas[decena] + " y " + unidades[unidad];
  }

  if (num < 1000) {
    if (num === 100) return "cien";

    const resto = num % 100;
    const centena = Math.floor(num / 100);

    if (resto === 0) return centenas[centena];

    return centenas[centena] + " " + translate(resto);
  }

  return "Número fuera de rango";
};

export default function Translator() {
  //Estados
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const translator = () => {
    const value = parseFloat(number);

    if (isNaN(value)) {
      setResult("Por favor escribe un número válido");
    } else if (value < 0 || value > 1000) {
      setResult("Solo números entre 0 y 1000");
    } else {
      const text = translate(value);
      setResult(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traductor</Text>

      <TextInput
        style={styles.input}
        placeholder="1,2,3..."
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      {result !== null && <Text style={styles.resultText}>{result}</Text>}

      <View style={styles.horizontalView}>
        <FAB label="obtener resultado" onPress={translator} />
        <FAB
          label="resetear"
          onPress={() => {
            setNumber("");
            setResult("");
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
