import React from 'react';
import {ScrollView, View, Text, Button} from 'react-native';

import estilo from './EstiloFeed';

const Feed = ({navigation}) => {
  const myPost = async () => {
    navigation.push('MyPost');
  };

  const newPost = async () => {
    navigation.push('NewPost');
  };

  return (
    <>
      <ScrollView>
        <View style={estilo.header}>
          <View style={estilo.userBox}>
            <Text style={estilo.user}>_username</Text>
          </View>
        </View>
        <View style={estilo.header2}>
          <Button color="#0095f0" title="New Post" onPress={newPost} />
          <Button color="#0095f0" title="My Post" onPress={myPost} />
        </View>
        <View style={estilo.main}>
          <View style={estilo.posts}>
            <Text style={estilo.users}>_amigo1</Text>
            <Text style={estilo.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
          <View style={estilo.posts}>
            <Text style={estilo.users}>_amigo2</Text>
            <Text style={estilo.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
          <View style={estilo.posts}>
            <Text style={estilo.users}>_amigo3</Text>
            <Text style={estilo.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
          <View style={estilo.posts}>
            <Text style={estilo.users}>_amigo4</Text>
            <Text style={estilo.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View></View>
    </>
  );
};

export default Feed;
