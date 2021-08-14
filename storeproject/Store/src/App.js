import React from 'react';
import {
  FlatList,
  SafeAreaView,
  TextInput,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import product_data from './product_data.json'
import ProductCard from './ProductCard'



import { it } from '@jest/globals';
function App() {
  return(
    <View style={styles.container}>
    <Text style={styles.headerText}>PATKASTORE</Text>
      <FlatList numColumns
              ListHeaderComponent={() => (
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TextInput   
                      placeholder="Ara..."
                      style={styles.textInput}/>
                  </ScrollView>
                )}
        numColumns={2}
        data = {product_data}
        renderItem={({item}) => <ProductCard product={item} />}
        keyExtractor={item => item.id.toString()}
        
      />

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },

  textInput: {
    height: 50,
    width: 370,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: '#f5f5f5'
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    color: 'purple',
  }
});
export default App;