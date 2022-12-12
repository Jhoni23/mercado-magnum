/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  StyleSheet, View, StatusBar, Text, TouchableOpacity, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import * as ImagePicker from 'expo-image-picker';
import { CommonActions } from '@react-navigation/native';

import { AxiosError } from 'axios';
import { api } from '../../services/api';

import Input from '../../components/input';
import { showToast } from '../../utils/showToast';

export default function Create({ navigation }) {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [qnt, setQnt] = useState(0);
  const [qnt_min, setQntMin] = useState(0);
  const [qnt_max, setQntMax] = useState(0);

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!!!description
        || !!!price
        || !!!qnt
        || !!!qnt_min
        || !!!qnt_max) { showToast('Alguns parâmetros estão ausentes.', 'error'); }

      const response = await api.post('product', {
        description, price, qnt, qnt_min, qnt_max,
      });

      if (response.data.status === 'Sucesso') {
        showToast('Produto cadastrado com sucesso!');
        setTimeout(() => navigation.dispatch(CommonActions.reset({
          index: 1,
          routes: [
            { name: 'Home' },
          ],
        })), 500);
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response) showToast(e.response.data.message, 'error');
      } else {
        showToast(e.message, 'error');
      }
    }
  };

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
        <Text style={{ fontSize: 30, fontWeight: '800' }}>Cadastrar Produto</Text>
      </View>

      <TouchableOpacity style={{ height: 120, aspectRatio: 1 }} onPress={pickImage}>
        <Image style={styles.img} source={{ uri: image }} />
        <View style={styles.btnPlus}><Icon name="plus" size={30} color="#FFF" /></View>
      </TouchableOpacity>

      <View style={styles.formView}>
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
            onChangeText={setQnt}
            title="Qtd"
            keyboardType="number-pad"
            size={47}
          />
        </View>

        <Text style={styles.titleEstoque}>Estoque</Text>

        <View style={styles.inputsGroup}>
          <Input
            onChangeText={setQntMin}
            title="Min"
            keyboardType="number-pad"
            size={47}
          />
          <Input
            onChangeText={setQntMax}
            title="Max"
            keyboardType="number-pad"
            size={47}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{
            color: '#FFF', fontSize: 18, fontWeight: '700', letterSpacing: 2,
          }}
          >
            CADASTRAR
          </Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 50,
    width: '100%',
    height: '100%',
    paddingHorizontal: 50,
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
  button: {
    marginTop: 70,
    width: '100%',
    height: 60,
    backgroundColor: '#5fa56ecf',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
