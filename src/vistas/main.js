import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";
import Tabs from "../componentes/tabs";
import Timer from "../componentes/timer";
import Boton from "../componentes/boton";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";

export default function Main() {
  const colores = ["#5170D5", "#5CAFF2", "#5CDEF2"];
  const [seleccion, setSeleccion] = useState("POMO" | "SHORT" | "LONG");
  const [activo, setActivo] = useState(false);
  const [tiempo, setTiempo] = useState(25 * 60);
  const playSonido = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/alarma.mp3")
    );
    await sound.playAsync();
  };

  useEffect(() => {
    //Controlar el timer
    let interval = null;

    if (activo) {
      interval = setInterval(() => {
        setTiempo(tiempo - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (tiempo === 0) {
      setActivo(false);
      setTiempo(seleccion === 0 ? 1500 : seleccion === 1 ? 300 : 900);
      playSonido();
    }

    return () => clearInterval(interval);
  }, [tiempo, activo]);

  return (
    <SafeAreaView
      style={[{ flex: 1 }, { backgroundColor: colores[seleccion] }]}
    >
      {/* <StatusBar style="light"></StatusBar> */}
      <View style={{ marginTop: Platform.OS === "android" && 30 }}>
        <Tabs
          seleccion={seleccion}
          setSeleccion={setSeleccion}
          tiempo={tiempo}
          setTiempo={setTiempo}
        ></Tabs>
        <Timer tiempo={tiempo}></Timer>
        <Boton activo={activo} setActivo={setActivo}></Boton>
      </View>
    </SafeAreaView>
  );
}
