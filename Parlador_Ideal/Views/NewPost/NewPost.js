import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import estilo from './EstiloNewPost';
import adicionarPost from '../../Api/newPost';

const NewPost = ({navigation, post, adicionarPost}) => {
  const postar = () => {
    campoInput.clear();
    const novoPost = adicionarPost(conteudoCampoInput, 'Filipe');
    navigation.push('Feed');
  };

  let campoInput = '';
  let conteudoCampoInput = '';

  return (
    <>
      <View style={estilo.post}>
        <TextInput
          maxLength={280}
          ref={(textInput) => (campoInput = textInput)}
          onChangeText={(texto) => (conteudoCampoInput = texto)}
          placeholder="Digite aqui..."
          multiline={true}
        />
      </View>
      <View style={estilo.bottom}>
        <View style={estilo.botaoView}>
          <Button title="Postar" onPress={postar} />
        </View>
      </View>
    </>
  );
};

export default NewPost;
