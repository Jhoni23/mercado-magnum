/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  StyleSheet, View, StatusBar, Text, TouchableOpacity, Image, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import Input from '../../components/input';

export default function Info({ navigation }) {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quant, setQuant] = useState(0);
  const [minEstoque, setMinEstoque] = useState(0);
  const [maxExtoque, setMaxEstoque] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#FFF"
        barStyle="dark-content"
      />

      <View style={styles.top}>
        <TouchableOpacity
          style={{ marginRight: 18 }}
          onPress={() => { navigation.goBack(); }}
        >
          <Icon name="arrow-left" size={60} />
        </TouchableOpacity>
        <Text style={{ fontSize: 26, fontWeight: '800' }}>Detalhes do Produto</Text>
      </View>

      <ScrollView style={{ width: '100%', height: '100%' }}>

        <View style={styles.formView}>
          <TouchableOpacity style={{ height: 120, aspectRatio: 1, marginBottom: 40 }}>
            <Image style={styles.img} />
            <View style={styles.btnPlus}><Icon name="plus" size={30} color="#FFF" /></View>
          </TouchableOpacity>

          <Input
            onChangeText={setDescription}
            title="Descrição"
          />

          <View style={styles.inputsGroup}>
            <Input
              onChangeText={setPrice}
              title="Preço"
              keyboardType="number-pad"
              size={47}
            />
            <Input
              onChangeText={setQuant}
              title="Qtd"
              keyboardType="number-pad"
              size={47}
            />
          </View>

          <Text style={styles.titleEstoque}>Estoque</Text>

          <View style={[styles.inputsGroup, { marginBottom: 20 }]}>
            <Input
              onChangeText={setMinEstoque}
              title="Min"
              keyboardType="number-pad"
              size={47}
            />
            <Input
              onChangeText={setMaxEstoque}
              title="Max"
              keyboardType="number-pad"
              size={47}
            />
          </View>

          <TouchableOpacity style={styles.buttonAlter} onPress={() => {}}>
            <Text style={{
              color: '#FFF', fontSize: 18, fontWeight: '700', letterSpacing: 2,
            }}
            >
              ALTERAR
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDelete} onPress={() => {}}>
            <Text style={{
              color: '#E95254', fontSize: 18, fontWeight: '700', letterSpacing: 2,
            }}
            >
              EXCLUIR
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  top: {
    width: '100%',
    height: 100,
    paddingLeft: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  img: {
    height: '100%',
    aspectRatio: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
  },
  btnPlus: {
    position: 'absolute',
    height: 40,
    aspectRatio: 1,
    backgroundColor: '#E95254',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    right: 0,
    bottom: 0,
  },
  formView: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  inputsGroup: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  titleEstoque: {
    width: '100%',
    marginTop: 30,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '800',
    color: '#818181',
  },
  buttonAlter: {
    marginTop: 30,
    width: '100%',
    height: 70,
    backgroundColor: '#DDBCBC',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDelete: {
    marginTop: 30,
    width: '100%',
    height: 70,
    backgroundColor: '#FFF',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: '#E95254',
    marginBottom: 30,
  },
});
