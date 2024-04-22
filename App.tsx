import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Switch,
} from "react-native";
import React, { useState } from "react";
import imgSuper from "./assets/super.png";

export default function App() {
  const [usuario, setUsuario] = useState("");
  const [ligado, setLigado] = useState(false);

  function handleSwitch() {
    setLigado(!ligado);
  }

  return (
    <ScrollView>
      <Switch value={ligado} onValueChange={handleSwitch}></Switch>
      <View style={[styles.container, { backgroundColor: "red" }]}>
        <Image
          source={imgSuper}
          style={{ display: ligado ? "flex" : "none" }}
        />
        <TextInput
          style={styles.input}
          onChange={(text) => setUsuario(text.nativeEvent.text)}
          keyboardType="default"
          placeholder="Digite seu número"
          value={usuario}
        />

        <Button
          title="click here"
          onPress={() => {
            Alert.alert("valor atual", usuario);
          }}
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
    </ScrollView>
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
