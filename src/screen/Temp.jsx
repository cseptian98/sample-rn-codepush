import React, { Component } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity } from 'react-native';

class HomeScreen extends Component {
  constructor() {
    super(props);
    this.state = {
      data: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ],
      selectedId: null,
    };
  }

  Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );

  renderMovies = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6E3B6E' : '#F9C2FF';
    const color = item.id === selectedId ? 'WHITE' : 'BLACK';

    return (
      <Item
        backgroundColor={{ backgroundColor }}
        item={item}
        onPress={() => this.setState({ selectedId: item.id })}
        textColor={{ color }}
      />
    );
  };

  render() {
    const { data } = this.state;
    console.log('debug', data);
    return (
      <View>
        <Text>{data}</Text>
      </View>
    );
  }
}

export default HomeScreen;
