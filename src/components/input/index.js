import { View, TextInput, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './style'

export default function InputFilter({ text, placeholder, onChangeText }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder={placeholder} onChangeText={onChangeText} />
        <Text style={styles.text}>{text}</Text>
    </View>
  )
}