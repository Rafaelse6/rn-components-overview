import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        onTouchStart={(event) => {
          Alert.alert("TOUCH", "Started clicking");
        }}
        onTouchEnd={(evento) => {
          Alert.alert("TOUCH", "Finished touching");
        }}
      >
        <Text style={styles.texto}>Hello</Text>
      </View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "blue",
    color: "white",
    padding: 20,
  },
});
