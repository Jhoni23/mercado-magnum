/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  StyleSheet, View, StatusBar, Text, TouchableOpacity, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import * as ImagePicker from 'expo-image-picker';

import Input from '../../components/input';

export default function Create({ navigation }) {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quant, setQuant] = useState(0);
  const [minEstoque, setMinEstoque] = useState(0);
  const [maxExtoque, setMaxEstoque] = useState(0);

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
            onChangeText={setQuant}
            title="Qtd"
            keyboardType="number-pad"
            size={47}
          />
        </View>

        <Text style={styles.titleEstoque}>Estoque</Text>

        <View style={styles.inputsGroup}>
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

        <TouchableOpacity style={styles.button} onPress={() => {}}>
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
