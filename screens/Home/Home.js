import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Footer from '../../components/Footer/Footer';

export default function Home({navigation}) {

  const pressHandlerProdutos = async () => {
    navigation.navigate('Produtos');
  }

  const pressHandlerCadastro = async () => {
    navigation.navigate('Cadastrar');
  }

  return (
    <View style={styles.container}>
       <Text style={styles.titleHome}>Nossos produtos</Text>
       <Image 
            source={{uri: 'https://t4.ftcdn.net/jpg/01/91/33/91/360_F_191339183_chOk3ZX83SVQvmH1vIw1AIdTPoBHwu9P.jpg'}}
            style={styles.img}/>

       <TouchableOpacity onPress={() => {pressHandlerProdutos()}} style={styles.btn}> 
         <Text style={styles.btnText}>Visualizar produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {pressHandlerCadastro()}} style={styles.btn}> 
         <Text style={styles.btnText}>Cadastrar produtos</Text>
        </TouchableOpacity>

        <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150
  }, 

  btn: {
    backgroundColor: '#333',
    padding: 20,
    margin: 15
  },
  btnText: {
    color: '#fff'
  },
  img: {
    width: '250px',
    height: '250px'
  },
  titleHome: {
    fontSize: 40,
    textTransform: 'uppercase'
  }
});
