import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { obterProdutos } from '../../api/produtosApi';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  const navigation = useNavigation();

  const fetchData = async () => {
    const produtos = await obterProdutos();
    setProdutos(produtos)
  }

  useEffect(() => {
      fetchData()
  }, []);

  return (
        produtos.map((prod) => {
          return (
              <TouchableOpacity key={prod.id} style={styles.card} onPress={() => navigation.navigate('Detalhes', prod)}>
                  <View style={styles.cardContent}>
                      <Text style={styles.category}>{prod.category}</Text>
                      <Text style={styles.title}>{prod.title}</Text>
                      <Text style={styles.price}>$ {prod.price}</Text>
                  </View>
              </TouchableOpacity>
          )
        })
  );
}


const styles = StyleSheet.create({
    card: {
      borderRadius: 6,
      elevation: 3,
      backgroundColor: '#fff',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 6,
    },
    cardContent: {
      marginHorizontal: 18,
      marginVertical: 20,
    },
    title: {
        fontSize: 20,
        padding: 5
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
        textAlign: 'center' 
    },
    btn: {
      backgroundColor: '#457b9d',
      padding: 10,
      margin: 8,
      width: 200,
      borderRadius: 5
    },
    btnText: {
      color: '#fff',
      textAlign: 'center'
    }
  });
