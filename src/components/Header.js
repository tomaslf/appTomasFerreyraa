import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Header = ({title}) => {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}

export default Header

const styles = StyleSheet.create({
    title: {
        marginTop:20,
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'OswaldRegular',
        marginBottom: 50,
    
      },
})