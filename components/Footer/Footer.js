import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footerView}>
            <Text style={styles.footerText}>Desenvolvido por Márcia Lima</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    footerText: {
        padding: 50,
    }, 
    footerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}); 