import { Image, StyleSheet, Text, View } from "react-native";
import PresentationTable from "../components/presentationTable";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Presentación</Text>
      <Image
        source={require("../../assets/images/foto.jpeg")}
        style={styles.profileImage}
      />
      <PresentationTable />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 100,
    backgroundColor: "#ffffff",
  },
  title: { fontSize: 24, fontWeight: "bold", paddingBottom: 30 },
  profileImage: {
    width: 200,
    height: 200,
    alignContent: "flex-start",
    marginBottom: 30,
  },
});
