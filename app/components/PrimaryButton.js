import { View, Text, Pressable } from "react-native";
import styles from "../styleCss";

const PrimaryButton = ({ children, onPress }) => {

  return (
    <View style={styles.PressableOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.PressableInnerContainer, styles.pressed]
            : styles.PressableInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
