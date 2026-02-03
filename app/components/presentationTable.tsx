import { StyleSheet, Text } from "react-native";
import { DataTable } from "react-native-paper";

export default function PresentationTable() {
  return (
    <DataTable style={styles.containerTable}>
      <DataTable.Row>
        <DataTable.Cell>
          <Text style={styles.textRow}> Jamil Guzmán Feliz - 2024-0100</Text>
        </DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>
          <Text style={styles.textRow}>20 años (29/08/05)</Text>
        </DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>
          <Text style={styles.textRow}>jamilguzman202@gmail.com</Text>
        </DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>
          <Text style={styles.textRow}>
            Tecnólogo en Desarrollo de Software
          </Text>
        </DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
}

const styles = StyleSheet.create({
  containerTable: {
    width: "80%",
  },
  textRow: {
    fontSize: 15,
    fontWeight: "thin",
  },
});
