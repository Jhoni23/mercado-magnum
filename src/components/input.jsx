import React from 'react';
import {
  TextInput, StyleSheet, Text, View,
} from 'react-native';

export default function Input({ customStyle, title, ...props }) {
  return (
    <View style={[{ width: '100%' }, customStyle]}>
      <TextInput style={containerStyle} {...props} />
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
        {title}
      </Text>
    </View>
  );
}

const { containerStyle } = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: 65,
    paddingHorizontal: 32,
    borderRadius: 50,
    borderWidth: 2.5,
    borderColor: '#A7A7A7',
    fontSize: 19,
  },
});
