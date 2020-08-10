import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import estilo from './Estilo';
import efetuarLogin from '../../Api/login';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const tentarLogar = async () => {
    try {
      
      navigation.push('Feed');
    } catch (erro) {
      setMensagemErro(erro.message);
    }
  };

  const cadastrar = async () => {
    navigation.push('NewAccount');
  };

  return (
    <>
      <View style={estilo.container}>
        <TextInput
          placeholder="Email"
          style={estilo.inputs}
          onChangeText={(texto) => setEmail(texto)}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          style={estilo.inputs}
          onChangeText={(texto) => setSenha(texto)}
        />
        <Text>{mensagemErro}</Text>
        <View style={estilo.botaoView}>
          <Button title="Entrar" onPress={tentarLogar} />
        </View>
      </View>
      <Text style={estilo.newInput}>Nao tem uma conta?</Text>
      <View style={estilo.newButton}>
        <Button title="Cadastre-se" onPress={cadastrar} />
      </View>
    </>
  );
};

export default Login;
