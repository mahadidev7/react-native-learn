import { View } from "react-native";
import { GameScreen, StartGameScreen } from "./app/screens";
import styles from "./app/styleCss";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import { useState } from "react";
export default function App() {
    const [userNumber, setUserNumber] = useState()

    function pickedNumberHandler(pickedNumber) {
      setUserNumber(pickedNumber);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

    if(userNumber){
      screen = <GameScreen />
    }

  return (
    <>
      {/* ===Background Images====  */}
      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./app/assets/images/background.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
         {screen}
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

// {/*==== solid color  ====*/}

//       {/* <View style={styles.rootScreen}>
//         <StartGameScreen />
//       </View> */}

// {/*===== LinearGradient color====  */}

//       {/* <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
//         <StartGameScreen />
//       </LinearGradient> */}
