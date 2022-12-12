import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import Footer from '../../components/Footer/Footer';
import { criarProduto } from '../../api/produtosApi';

export default function CadastroProdutos() {

  const validarCamposPreenchidos = (title, description, price, image, category) => {
    if(
        title === undefined || title === '' 
        || description === undefined || description === '' 
        || price === undefined || price === ''
        || image === undefined || image === ''
        || category === undefined || category === ''
    ) {
      return false;
    }
    return true;
  }

  return (
    <View>
        <Formik
          initialValues= {{ 
            title: '', 
            price: '', 
            description: '', 
            image: '' , 
            category: '' 
          }}
          onSubmit={(values) => {
            
            if(validarCamposPreenchidos(values.title, values.description, values.price, values.image, values.category)) {
              const cadastro = criarProduto(values.title, values.description, values.price, values.image, values.category);
              
              if(cadastro) {
                alert('Produto cadastrado com sucesso!')
              }
            } else {
              alert('Por favor, preencha todos os campos!')
            }
          }}
        >

        {(props) => (
          <View style={styles.form}>
            <TextInput
              style={styles.inputForm}
              placeholder='Nome'
              placeholderTextColor={'#888'}
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />

          <TextInput
              style={styles.inputForm}
              placeholder='Preço'
              placeholderTextColor={'#888'}
              onChangeText={props.handleChange('price')}
              value={props.values.price}
            />

            <TextInput
              style={styles.inputFormDescription}
              multiline
              placeholder='Descrição'
              placeholderTextColor={'#888'}
              onChangeText={props.handleChange('description')}
              value={props.values.description}
            />

            <TextInput
              style={styles.inputForm}
              placeholder='Url da imagem'
              placeholderTextColor={'#888'}
              onChangeText={props.handleChange('image')}
              value={props.values.image}
            />

            <TextInput
                style={styles.inputForm}
                placeholder='Categoria'
                placeholderTextColor={'#888'}
                onChangeText={props.handleChange('category')}
                value={props.values.category}
              />

            <Button 
                onPress={props.handleSubmit} 
                title="Cadastrar produto" 
                color={'#000'}
             />
          </View>
        )}
      </Formik>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  inputForm: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginVertical: 18
  },
  inputFormDescription: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    paddingBottom: 80,
    fontSize: 18,
    borderRadius: 6,
    marginVertical: 18
  },
  form: {
    margin: 24
  }
});

