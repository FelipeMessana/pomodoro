import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";
export default function Boton({ activo, setActivo }) {
  const handleCambio = () => {
    setActivo(!activo);
    playSonido();
  };

  const playSonido = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/boton.mp3")
    );
    await sound.playAsync();
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handleCambio()} style={styles.boton}>
        <Text style={styles.texto}>{activo ? "Parar" : "Comenzar"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  boton: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    margin: 15,
    padding: 15,
    backgroundColor: "white",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
