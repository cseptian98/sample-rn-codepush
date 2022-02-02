import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AppButton } from 'components/Button/Button';
import FavoriteStyles from './Favorite.style';

class FavoriteScreen extends Component {
  onPress = () => {
    console.log('debug');
  };

  render() {
    return (
      <View style={FavoriteStyles.container}>
        <Text style={FavoriteStyles.title}> Favorite Movies </Text>
        <AppButton onPress={this.onPress} title="Click here!" />
      </View>
    );
  }
}

export default FavoriteScreen;
