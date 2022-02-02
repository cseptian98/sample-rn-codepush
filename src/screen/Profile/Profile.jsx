import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { AppButton, SecondaryButton } from 'components/Button/Button';
import ProfilStyles from './Profile.style';

class ProfileScreen extends Component {
  onPress = () => {
    Alert.alert('Hello World', 'Alert Message');
  };

  render() {
    return (
      <View style={ProfilStyles.container}>
        <AppButton onPress={this.onPress} title="Click to Scan!" />
        <SecondaryButton onPress={this.onPress} title="Click to Scan!" />
      </View>
    );
  }
}

export default ProfileScreen;
