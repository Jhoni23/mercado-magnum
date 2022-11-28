import React, { useState } from 'react';
import {
  StyleSheet, Text, StatusBar, Image, View, TouchableOpacity, KeyboardAvoidingView, ScrollView,
} from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list';
import Input from '../../components/input';

export default function Login({ navigation }) {
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = useState('');

  const data = [
    { value: 'Francisco' },
    { value: 'Mário' },
    { value: 'Maria' },
    { value: 'Fernanda' },
    { value: 'Júlio' },
  ];

  const [text, onChangeText] = useState('');

  return (
    <ScrollView style={{ backgroundColor: '#FFF' }}>
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar
          backgroundColor="#ffffff"
          barStyle="dark-content"
        />

        <Image
          style={styles.logo}
          source={require('../../../assets/logo-principal.png')}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          Sistema de
          {'\n'}
          Estoque
        </Text>

        <Text style={styles.subtitle}>Acesso</Text>

        <View style={{
          width: '100%', alignItems: 'center', paddingHorizontal: 35,
        }}
        >

          <View style={{ width: '100%', marginBottom: 50 }}>
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              search={false}
              placeholder="Selecione"
              boxStyles={{
                alignItems: 'center', height: 65, borderRadius: 50, borderWidth: 2.5, borderColor: '#A7A7A7', paddingHorizontal: 30,
              }}
              dropdownStyles={{ backgroundColor: '#FFF' }}
              inputStyles={{ fontWeight: '600', fontSize: 19, color: '#666666' }}
              dropdownTextStyles={{ fontSize: 19 }}
            />
            <Text style={{
              backgroundColor: '#FFF',
              position: 'absolute',
              top: -20,
              fontWeight: '700',
              left: 30,
              padding: 7,
              fontSize: 18,
            }}
            >
              Funcionário
            </Text>

          </View>

          <Input
            onChangeText={onChangeText}
            value={text}
            title="Chave de Acesso"
            keyboardType="number-pad"
            maxLength={6}
          />

          <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Home'); }}>
            <Text style={{
              color: '#FFF', fontSize: 18, fontWeight: '600', letterSpacing: 3,
            }}
            >
              ACESSAR
            </Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  logo: {
    marginTop: '6%',
    width: '75%',
    height: undefined,
    aspectRatio: 6 / 3,
  },
  title: {
    marginTop: '6%',
    fontSize: 50,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: '10%',
    marginBottom: 30,
    fontSize: 30,
    fontWeight: '400',
    color: '#666666',
  },
  button: {
    marginTop: 70,
    width: '100%',
    height: 60,
    backgroundColor: '#E95254',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
