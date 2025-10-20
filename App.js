import * as Crypto from 'expo-crypto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import PersonalInfo from './components/PersonalInfo';
import MovieBooking from './components/MovieBooking';


export default function App() {

  var uuid = Crypto.randomUUID();//this uses the Crypto library to generate a Universal Unique Identifier

  const [booking, setBooking] = useState({
      bookDate: "2000-02-02",
      movieTitle: "",
      numberOfSeats: 0,
      balcony: 0,
  });



  async function saveData() {
    const uuid = Crypto.randomUUID(); 
    await AsyncStorage.setItem(uuid, JSON.stringify(booking));
    alert("Saved with UUID: " + uuid);
    Alert.alert("Saved with UUID: " + uuid);
  }
  
  return (
    <View style={styles.screencontainer}>
      <View style={styles.imgview}><Image source={require('./assets/moviesV3.png')}/></View>
      <Swiper showsButtons={true}>
          <PersonalInfo screenstyle={styles.screen} data = {booking} setData = {setBooking}/>
          <MovieBooking screenstyle={styles.screen} data  = {booking} setData = {setBooking} />
      </Swiper>


      <TouchableOpacity onPress={saveData}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Save Data</Text>
      </TouchableOpacity>
    </View>
  )
}
var width = Dimensions.get('window');
const styles = StyleSheet.create({
  imgview: {
    flexDirection: "row",
    justifyContent: "center",
    flex: .5,
    marginTop: "8%"
  }, 
  screencontainer: {
    flexDirection:"column",
    flex: 1,
    padding: "1%",
    backgroundColor: "lightgrey"
  },
  screen: {
    flex: 1,
    alignItems: "start",
    padding: "10%"
  }

 

});
