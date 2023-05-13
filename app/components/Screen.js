import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styleCss'

const Screen = ({children}) => {
  return (
    <View style={styles.screen}>
      <Text>{children}</Text>
    </View>
  )
}

export default Screen