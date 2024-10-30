import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          backgroundColor: "lightblue",
          padding: 10,
          borderRadius: 3,
        }}
      >
        Vamos a crear una app para android!
      </Text>
      <StatusBar style="auto" />
      <Button title="Press Me" onPress={() => alert("Button Pressed!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    border: "2px solid red",
    backgroundColor: "blue",
    marginBottom: 20,
  },
});
