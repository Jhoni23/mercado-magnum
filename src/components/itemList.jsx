import React from 'react';
import {
  TouchableOpacity, StyleSheet, Text, View, Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

export default function ItemList({
  image, desc, price, qtd,
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => { navigation.navigate('Info'); }}
    >
      <Image
        style={styles.image}
        source={{ uri: `${image}` }}
      />
      <View style={styles.description}>
        <Text style={styles.title}>{desc.length > 28 ? `${desc.substr(0, 27)}...` : desc}</Text>
        <Text style={styles.price}>
          RS
          {price}
        </Text>
      </View>
      <View style={styles.qntView}>
        <TouchableOpacity style={styles.less}>
          <Icon name="minus" size={28} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.qtd}>{qtd}</Text>
        <TouchableOpacity style={styles.plus}>
          <Icon name="plus" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
