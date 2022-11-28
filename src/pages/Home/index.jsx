import React from 'react';
import {
  StyleSheet, View, StatusBar, TextInput, TouchableOpacity, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ItemList from '../../components/itemList';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#E95254"
        barStyle="light-content"
      />

      <View style={styles.top}>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar Alimento"
          />
          <Icon name="search" size={26} color="#595959" style={{ position: 'absolute', right: 20 }} />
        </View>
      </View>

      <ScrollView style={styles.scrollItens}>

        <ItemList
          image="https://qualycestas.vteximg.com.br/arquivos/ids/157301-1000-1000/c5065e54-b59d-4e86-9ca8-9ddb2224c17d.jpg?v=637846982714300000"
          desc="Arroz Tipo 1 5Kg Camil"
          price="26,99"
          qtd={5}
        />

        <ItemList
          image="https://imagens.gimba.com.br/objetosmidia/ExibirObjetoMidia?Id=124776"
          desc="Feijão Carioca Tipo 1 1kg Camil"
          price="7,99"
          qtd={8}
        />

        <ItemList
          image="https://imagens.gimba.com.br/objetosmidia/ExibirObjetoMidia?Id=53024"
          desc="Açúcar Refinado 5kg 1 UN Caravelas"
          price="17,50"
          qtd={23}
        />

      </ScrollView>

      <TouchableOpacity
        style={styles.plusView}
        onPress={() => { navigation.navigate('Create'); }}
      >
        <Icon name="plus" size={48} color="#FFF" />
      </TouchableOpacity>

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
    height: 90,
    backgroundColor: '#E95254',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewInput: {
    width: '80%',
    height: 48,
    justifyContent: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingRight: 50,
    fontSize: 18,
  },
  scrollItens: {
    width: '85%',
    height: '100%',
  },
  plusView: {
    width: 65,
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: '#E95254',
    position: 'absolute',
    right: 40,
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
