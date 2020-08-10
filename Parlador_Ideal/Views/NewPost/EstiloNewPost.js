import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  post: {
    marginTop: largura * 0.1,
    backgroundColor: 'white',
    marginLeft: 60,
    marginRight: 60,
    elevation: 1,
  },
  botaoView: {
    alignItems: 'center',
    marginTop: 30,
  },
});

export default estilo;
