import { Text, SafeAreaView, TextInput, StyleSheet, View, Switch,Button, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import DatePicker from '../components/DatePicker';

import {useState} from 'react';

export default function MovieBooking({screenstyle, data, setData}) {

  const [movieList, setMovieList] = useState([
   {'id': 1, "title": "Kneecap", "age": 16},
   {'id' : 2, "title": "Joker, Folie a Deux", "age": 18}, 
   {'id': 3, "title": "Deadpool and Wolverine", "age": 12}
  ]);




 function handleChangeMovieTitle(newTitle) {
    setData(data => ({
      ...data, 
      movieTitle: newTitle 
    }));
  };


  return (
    <View style={screenstyle}>    
      <Text style={styles.label}>Choose Movie</Text>
      <Picker style={styles.textbox}
        selectedValue={data.movieTitle}
        onValueChange={(itemValue) => handleChangeMovieTitle(itemValue)}>
        { movieList.map((movie) => {
          return <Picker.Item key={movie.id} label={movie.title} value={movie.title}/>
          })}
      </Picker>
      <DatePicker thisDate={movieDate} setThisdate={setMoviedate} datelabel="Showing Date" />
      <Text style={styles.label}>Number of Tickets: {totalTickets}</Text>
      
      <Slider 
        minimumValue={0}
        maximumValue={5}
        step={1}
        style={styles.sliderstyle}
        onValueChange={setTotaltickets}
        />
      <Text style={styles.label}>Balcony</Text>
      <View style={{alignItems: "left",flexDirection: "row"}}><Switch value={balcony} onValueChange={setBalcony}/></View>
    </View>
  );
}

const styles = StyleSheet.create({

  sliderstyle: {
    marginBottom: "5%"
  },
  label: {
    flexDirection:"row",
    fontSize: 24,
    fontWeight: "bold",
  },
  textbox:  {
    flexDirection: "row",
    borderRadius: 5,
    padding: 7,
    border: "1px solid black",
    width: "100%",
    fontSize: 24,
    marginBottom: 14,
    backgroundColor: "white",
  }
  
});
