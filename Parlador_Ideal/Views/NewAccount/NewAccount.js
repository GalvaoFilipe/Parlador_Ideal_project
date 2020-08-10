import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import estilo from './EstiloNewAccount';

const NewAccount = ({navigation}) => {
  const cadastrar = async () => {
    navigation.push('Login');
  };

  return (
    <>
      <View style={estilo.main}>
        <View style={estilo.form}>
          <TextInput placeholder="Digite seu nome de usuario" />
          <TextInput placeholder="Digite seu email" />
          <TextInput placeholder="Digite sua senha" secureTextEntry={true} />
        </View>
        <View style={estilo.botao}>
          <Button title="Criar" onPress={cadastrar} />
        </View>
      </View>
    </>
  );
};

export default NewAccount;
