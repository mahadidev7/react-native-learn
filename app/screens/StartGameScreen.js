import { View, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { PrimaryButton } from "../components";
import styles from "../styleCss";

const StartGameScreen = ({onPickNumber}) => {
  const [enterNumber, setEnterNumber] = useState("");

  function resetInputHandler() {
    setEnterNumber("");
  }

  const numberInputHandler = (enteredText) => {
    setEnterNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enterNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "cancel", style: "destructive", onPress: resetInputHandler },
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber)
  };

  return (
    <View style={styles.InputWrapper}>
      <TextInput
        style={styles.TextInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enterNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;
