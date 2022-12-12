import React from 'react';
import { Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Footer from '../../components/Footer/Footer';

const w = Dimensions.get('window');

export default function DetalhesProduto({ route }) {
  return (
    <ScrollView style={styles.detailsView}>
      <Text style={styles.title}>{ route.params.title }</Text>
      <Text style={styles.category}>{ route.params.category }</Text>

      <Image 
        // style={{ width: w.width, height: w.width }}
        // resizeMode='contain'
        style={{width: w.width, height: w.width}}
        resizeMode= 'contain'
        source={ route.params.image } />

      <Text style={styles.textBold}>Descrição:</Text>
      <Text style={styles.description}>{ route.params.description }</Text>
    
      <Text style={styles.textBold}>Preço:</Text>
      <Text style={styles.price}>$ { route.params.price }</Text>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsView: {
    textAlign: 'center',
    padding: 20
  },
  title: {
      fontSize: 25,
      padding: 20,
      color: '#457b9d',
      textTransform: 'uppercase'
  },
  price: {
      fontSize: 30,
      color: '#457b9d',
      padding: 5
  },
  category: {
      backgroundColor: '#e76f51',
      color: '#fff',
      padding: 4,
      borderRadius: 15,
      width: 130,
      height: 30,
      textAlign: 'center',
      alignSelf: 'center',
      marginBottom: 30
  },
  textBold: {
    fontWeight: 800,
    fontSize: 20,
    padding: 15
  },
  description: {
    fontSize: 18
  }

});


                                                