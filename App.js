import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Digitzen</Text>
      <Text style = {styles.paragraph}>Comfortable work everywhere</Text>
      <View style = {styles.box}>
        <Text style = {styles.paragraph}>Chair + desk</Text>
      </View>
      <View style = {styles.box}>
        <Text style = {styles.paragraph}>Gaimer's chair + desk</Text>
      </View>
      <View style = {styles.box}>
        <Text style = {styles.paragraph}>Chair + sit/stay desk</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    //flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFDEC0',
    height: 600
  },

  box: {
    width: 300,
    height: 200,
    backgroundColor: '#FFE8D2',
    borderRadius: 4,
    height: 150,
    shadowColor: "black",
    shadowOpacity: 10,
    shadowRadius: 5
    },

  title: {
    fontWeight: "bold",
    marginVertical: 4
  },

  paragraph: {
    color: "black",
    margin: 24
  },
});
