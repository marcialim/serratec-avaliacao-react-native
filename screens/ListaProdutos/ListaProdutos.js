import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Footer from '../../components/Footer/Footer';
import Produtos from '../../components/Produtos/Produtos';


export default function ListaProdutos() {
    return (
        <ScrollView>
            <Text style={styles.text}> Clique sobre o produto desejado para ver mais detalhes</Text>
            <Produtos />
            <Footer />
        </ScrollView>
    );
  }


  const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        padding: 20
    }
  });