import React from 'react'
import { StyleSheet, Text } from 'react-native'


const Header = ({ title, newStyles }) => {
  return (
    <Text style={{ ...styles.title, ...newStyles }}>{title}</Text>
  )
}

export default Header

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'OswaldRegular',

  },
})