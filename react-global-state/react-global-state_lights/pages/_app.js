import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedromm", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];
let isDimmed = true;

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function handleToggle(toggleId) {
    setLights(
      lights.map((light) =>
        light.id === toggleId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleAllLightsOff() {
    // return initialLights;
    isDimmed = true;
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  function handleAllLightsOn() {
    // setLights(...lights, lights.isOn ? true : false);
    isDimmed = false;
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }
  const sumLightsOn = lights.filter((light) => light.isOn).length;

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={handleToggle}
        handleAllLightsOff={handleAllLightsOff}
        handleAllLightsOn={handleAllLightsOn}
        sumLightIsOn={sumLightsOn}
      />
    </Layout>
  );
}
