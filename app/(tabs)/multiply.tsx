import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import FAB from "../components/FAB";

export default function TablaMultiplicar() {
  const [numero, setNumero] = useState("");
  const [tabla, setTabla] = useState<string[]>([]);

  const generarTabla = () => {
    const valor = parseInt(numero);

    if (isNaN(valor)) {
      setTabla([]);
      return;
    }

    const resultadosTemporales: string[] = [];

    for (let i = 1; i <= 13; i++) {
      const multiplicacion = valor * i;
      const linea = `${valor} x ${i} = ${multiplicacion}`;
      resultadosTemporales.push(linea);
    }

    setTabla(resultadosTemporales);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabla de Multiplicar</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa un número"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />

      <FAB label="Generar Tabla" onPress={generarTabla} />

      <ScrollView style={styles.listaContainer}>
        {tabla.map((item, index) => (
          <View key={index} style={styles.itemFila}>
            <Text style={styles.textoFila}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "#0a7ea4",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  listaContainer: {
    marginTop: 20,
    width: "100%",
  },
  itemFila: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  textoFila: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555",
  },
});
