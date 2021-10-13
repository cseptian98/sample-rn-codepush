import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

class FavoriteScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Favorite Movies </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
});

export default FavoriteScreen;
