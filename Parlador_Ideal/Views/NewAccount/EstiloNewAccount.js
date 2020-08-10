import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  main: {
    flexGrow: 2,
    marginTop: largura * 0.25,
    alignItems: 'center',
    textAlign: 'center',
  },
  botao: {
    marginTop: 30,
  },
});

export default estilo;
