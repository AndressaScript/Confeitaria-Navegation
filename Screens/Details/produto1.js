import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Details() {
  const route = useRoute()
  return (
    <View style={estilo.container}>
      
       <Text>{route.params.titulo}</Text>
      <Text>{route.params.descricao}</Text>
      <Text>{route.params.preco}</Text>
      </View>

     
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    justifyContent: 'center',
    width:'100%',
    alignItems: 'center',
    backgroundColor: '#ffc7cf',
    paddingHorizontal: 20,
  
  }
});