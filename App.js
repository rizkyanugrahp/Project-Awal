import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#3498db'}} />
      <Text>Rizky </Text>
      <NamaLengkap />
      <Text>193510406</Text>
      <Text>Praktikum Dasar Program Mobile</Text>
      <Text>Photo</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const NamaLengkap = () => {
  return <Text>Rizky Anugrah Pratama</Text>
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/people'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'tomato', fontSize:24}}>Ini Orang</Text>
      </View>
    );
  }
}

export default App;
