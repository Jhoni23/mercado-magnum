import {
  StyleSheet, Text, SafeAreaView, StatusBar, Image,
} from 'react-native';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />

      <Image 
        style={styles.logo}
        source={require('../../../assets/logo-principal.png')}
        resizeMode='contain'
      />

      <Text style={styles.title}>Sistema de {'\n'} Estoque</Text>

      <Text style={styles.subtitle}>Acesso</Text>

    </SafeAreaView>
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
    aspectRatio: 6/3,
  },
  title: {
    marginTop: '6%',
    fontSize: 50,
    fontWeight: '700',
    textAlign: 'center'
  },
  subtitle: {
    marginTop: '10%',
    fontSize: 30,
    fontWeight: '400',
    color: '#666666'
  },
});
