import React from 'react';
import {
  StyleSheet, View, StatusBar, TextInput, Image, TouchableOpacity, Text, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

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

        <TouchableOpacity
          style={styles.item}
          onPress={() => { navigation.navigate('Info'); }}
        >
          <Image style={styles.image} />
          <View style={styles.description}>
            <Text style={styles.title}>Arroz Tipo 1 5kg Camil</Text>
            <Text style={styles.price}>RS26,99</Text>
          </View>
          <View style={styles.qntView}>
            <TouchableOpacity style={styles.less}>
              <Icon name="minus" size={28} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.qtd}>5</Text>
            <TouchableOpacity style={styles.plus}>
              <Icon name="plus" size={28} color="#FFF" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => { navigation.navigate('Info'); }}
        >
          <Image style={styles.image} />
          <View style={styles.description}>
            <Text style={styles.title}>Arroz Tipo 1 5kg Camil</Text>
            <Text style={styles.price}>RS26,99</Text>
          </View>
          <View style={styles.qntView}>
            <TouchableOpacity style={styles.less}>
              <Icon name="minus" size={28} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.qtd}>5</Text>
            <TouchableOpacity style={styles.plus}>
              <Icon name="plus" size={28} color="#FFF" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

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
    height: 100,
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
  item: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  image: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 13,
    backgroundColor: '#D9D9D9',
  },
  description: {
    flex: 1,
    height: '70%',
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#5FA56E',
  },
  qntView: {
    position: 'absolute',
    height: 37,
    width: 110,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  less: {
    height: '100%',
    borderRadius: 100,
    aspectRatio: 1,
    backgroundColor: '#C7C7C7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    height: '100%',
    borderRadius: 100,
    aspectRatio: 1,
    backgroundColor: '#929292',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtd: {
    fontSize: 20,
    fontWeight: '700',
  },
});
