import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rootScreen: {
      // backgroundColor: "#ddb52f",
      flex: 1,
    },
    InputWrapper:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3b021f',
      marginTop: 100,
      marginHorizontal: 10,
      padding: 16,
      borderRadius: 8,
      elevation: 4,
      shadowColor: 'black',
      shadowOffset:{width: 0, height: 2},
      shadowRadius: 6,
      shadowOpacity: 0.25,
      
      
    },
    TextInput:{
      // backgroundColor: '#333',
      marginBottom: 15,
      padding: 5,
      borderRadius: 4,
      height: 50,
      width: 100,
      fontSize: 32,
      borderBottomColor: '#ddb52f',
      borderBottomWidth: 2,
      color: '#ddb52f',
      marginVertical: 8,
      fontWeight: 'bold',
      textAlign: 'center',

    },
    PressableOuterContainer: {
      borderRadius: 28,
      margin: 4,
      overflow: 'hidden',
    },
    PressableInnerContainer: {
      backgroundColor: '#72063c',
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation: 2,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
    pressed: {
      opacity: 0.75,
    },
    buttonsContainer:{
      flexDirection: 'row',
    },
    buttonContainer: {
      flex: 1,
    },
    backgroundImage:{
      opacity: 0.15,
    },
  });

  export default styles;