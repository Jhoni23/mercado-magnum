import axios, { AxiosError } from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import {
  StyleSheet, View, StatusBar, TextInput, TouchableOpacity, ScrollView, Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ItemList from '../../components/itemList';
import { api, updateManyProducts } from '../../services/api';
import { showToast } from '../../utils/showToast';

function productReducer(state, action) {
  switch (action.type) {
    case 'API_QUERY':
      return action.data;
    case 'INCREMENT_QNT':
      return state.map((product) => {
        if (product.id === action.targetID) {
          return { ...product, qnt: product.qnt + 1 };
        }
        return product;
      });
    case 'DECREMENT_QNT':
      return state.map((product) => {
        if (product.id === action.targetID) {
          return { ...product, qnt: product.qnt === 0 ? 0 : product.qnt - 1 };
        }
        return product;
      });
    case 'FILTER':
      return state.filter((product) => {
        const pattern = new RegExp(`^${action.searchText}`, 'i');
        return !!product.description.match(pattern);
      });
    default:
      return state;
  }
}

export default function Home({ navigation }) {
  const [initialQuery, setInitialQuery] = useState(true);
  const [isFiltering, setIsFiltering] = useState(true);
  const [productData, productDataDispatch] = useReducer(productReducer, []);

  const getProductsData = async () => {
    try {
      const products = await api.get('/product');
      if (products.data.status !== 'Error') {
        productDataDispatch({ type: 'API_QUERY', data: products.data });
        setInitialQuery(false);
      } else {
        showToast(products.data.message, 'error');
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response) {
          showToast(err.response.data.message, 'error');
        } else {
          showToast('Erro de conexão', 'error');
        }
      } else {
        showToast('Houve um erro');
      }
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    if (!initialQuery && !isFiltering) {
      try {
        const cancelToken = axios.CancelToken.source();
        updateManyProducts(productData, cancelToken.token);

        return () => {
          cancelToken.cancel();
        };
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response) {
            showToast(err.response.data.message, 'error');
          } else {
            showToast('Erro de conexão', 'error');
          }
        } else {
          showToast('Houve um erro');
        }
      }
    } return () => {};
  }, [productData]);

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
            onChangeText={(searchText) => {
              if (searchText.length > 0) {
                setIsFiltering(true);
                productDataDispatch({ type: 'FILTER', searchText });
                setIsFiltering(false);
              } else {
                getProductsData();
              }
            }}
          />
          <Icon name="search" size={26} color="#595959" style={{ position: 'absolute', right: 20 }} />
        </View>
      </View>

      {productData.length > 0 ? (
        <ScrollView style={styles.scrollItens} showsVerticalScrollIndicator={false}>
          {productData.map((product, index) => (
            <ItemList
              image="https://qualycestas.vteximg.com.br/arquivos/ids/157301-1000-1000/c5065e54-b59d-4e86-9ca8-9ddb2224c17d.jpg?v=637846982714300000"
              desc={product.description}
              price={product.price}
              qtd={product.qnt}
              key={product.id}
              id={product.id}
              customStyle={index === productData.length - 1 ? styles.lastItem : undefined}
              onPlusPress={() => productDataDispatch({ type: 'INCREMENT_QNT', targetID: product.id })}
              onLessPress={() => productDataDispatch({ type: 'DECREMENT_QNT', targetID: product.id })}
            />
          ))}
        </ScrollView>
      ) : (<View style={styles.notFoundContainer}><Text>Não há produtos cadastrados</Text></View>)}
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
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastItem: {
    marginBottom: 128,
  },
});
