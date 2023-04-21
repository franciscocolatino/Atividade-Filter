import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

export default function Card({text}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </View>
  )
}