import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Tabs(props) {
  const { setSeleccion, setTiempo, seleccion } = props;
  const handlePress = (index) => {
    setSeleccion(index);
    const nuevoTiempo = index === 0 ? 25 : index === 1 ? 5 : 15;
    setTiempo(nuevoTiempo * 60);
  };
  const opciones = ["Pomodoro", "Descansito", "Descanso"];
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 5,
      }}
    >
      {opciones.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.boton,
            seleccion !== index && { borderColor: "transparent" },
          ]}
        >
          <Text style={styles.boton}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  boton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    margin: 5,
  },
  texto: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
