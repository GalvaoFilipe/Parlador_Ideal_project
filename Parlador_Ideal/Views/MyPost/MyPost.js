import React from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';

import estilo from './EstiloMyPost';

const MyPost = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <View style={estilo.main}>
          <View style={estilo.posts}>
            <Text style={estilo.data}>Data</Text>
            <Text style={estilo.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <View style={estilo.toolbar}>
              <Button color="#b5b5b5" title="Edit" />
              <Button color="#c24848" title="Delete" />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MyPost;
