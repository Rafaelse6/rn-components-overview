import { StatusBar } from "expo-status-bar";
import { Alert, Image, StyleSheet, Text, View, TextInput } from "react-native";
import imgSuper from "./assets/super.png";

export default function App() {
  return (
    <View style={[styles.container, { backgroundColor: "red" }]}>
      <Image source={imgSuper} />
      <TextInput
        style={styles.input}
        onChange={() => console.log("adicionando texto")}
        keyboardType="phone-pad"
        placeholder="Digite seu número"
      />
      <View
        onTouchStart={(event) => {
          Alert.alert("TOUCH", "Started clicking");
        }}
        onTouchEnd={(evento) => {
          Alert.alert("TOUCH", "Finished touching");
        }}
      >
        <Text style={[styles.texto, styles.border]}>Hello</Text>
      </View>
      <Text
        selectable={false}
        onPress={() => {
          console.log("pressed");
        }}
        onLongPress={() => {
          console.log("Long press");
        }}
      >
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <Text>
        <Text>Hello</Text>
        <Text>World</Text>
      </Text>
      <View>
        <Text>Hello</Text>
        <Text>World</Text>
      </View>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  border: {
    borderColor: "red",
    borderWidth: 3,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "blue",
    color: "white",
    padding: 20,
  },
});
