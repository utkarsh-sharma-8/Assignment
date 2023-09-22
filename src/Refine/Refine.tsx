import { Slider } from '@miblanchard/react-native-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { saveStatus } from '../Redux/action/Actions';

//defining the values and label for dropdown as items//
const items = [
  {
    label: 'Available | Hey Let Us Connect',
    value: 'Available | Hey Let Us Connect',
  },
  {
    label: 'Away | Stay Discrete And Watch',
    value: 'Away | Stay Discrete And Watch',
  },
  {
    label: 'Busy | Do Not Disturb | Will catch Up Later',
    value: 'Busy | Do Not Disturb | Will catch Up Later',
  },
  {
    label: 'SOS | Emergency! Need Assistance! HELP ',
    value: 'SOS | Emergency! Need Assistance! HELP',
  },
];
const Refine = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(
    'Available | Hey Let Us Connect',
  );
  const [max, setMax] = useState('250');
  const [input, setInput] = useState(
    'Hi community! I am open to new connections',
  );
  //define states for thepurpose
  const [coffee, setCoffee] = useState(true);
  const [business, setBusiness] = useState(true);
  const [hobbies, setHobbies] = useState(false);
  const [friendShip, setFriendship] = useState(true);
  const [movies, setMovies] = useState(false);
  const [dinning, setDinning] = useState(false);
  const [dating, setDating] = useState(false);
  const [matrimony, setMatrimony] = useState(false);
  const [sliderValue, setSliderValue] = useState(1);

  //dispatching the hyper Local distance and Availability to the store//
  const addStore = () => {
    dispatch(saveStatus(currentValue));
  };

  //storing the redux page contents into the async storage//
  const saveSelectedOption = async (
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
  ) => {
    await AsyncStorage.setItem('selectedDropdownOption', value1);
    await AsyncStorage.setItem('status', value2);

    //sending the purpose value as strings to the async storage//

    await AsyncStorage.setItem('coffee', JSON.stringify(value3));
    await AsyncStorage.setItem('business', JSON.stringify(value4));
    await AsyncStorage.setItem('hobbies', JSON.stringify(value5));
    await AsyncStorage.setItem('friendship', JSON.stringify(value6));
    await AsyncStorage.setItem('movies', JSON.stringify(value7));
    await AsyncStorage.setItem('dinning', JSON.stringify(value8));
    await AsyncStorage.setItem('dating', JSON.stringify(value9));
    await AsyncStorage.setItem('matrimony', JSON.stringify(value10));
    await AsyncStorage.setItem('distance', JSON.stringify(value11));
    addStore();
    setCurrentValue(value1);
    setInput(value2);
    setCoffee(value3);
    setBusiness(value4);
    setHobbies(value5);
    setFriendship(value6);
    setMovies(value7);
    setDinning(value8);
    setDating(value9);
    setMatrimony(value10);
    setSliderValue(value11);

    navigation.navigate('Parent');
  };

  //getting the saved values back from async//
  const loadSelectedOption = async () => {
    const savedValue = await AsyncStorage.getItem('selectedDropdownOption');
    const savedStatus = await AsyncStorage.getItem('status');
    const savedCoffee = await AsyncStorage.getItem('coffee');
    const savedBusiness = await AsyncStorage.getItem('business');
    const savedHobbies = await AsyncStorage.getItem('hobbies');
    const savedFriendship = await AsyncStorage.getItem('friendship');
    const savedMovies = await AsyncStorage.getItem('movies');
    const savedDinning = await AsyncStorage.getItem('dinning');
    const savedDating = await AsyncStorage.getItem('dating');
    const savedMatrimony = await AsyncStorage.getItem('matrimony');
    const savedDistance = await AsyncStorage.getItem('distance');

    //again converting string to boolean//

    setCoffee(JSON.parse(savedCoffee));
    setBusiness(JSON.parse(savedBusiness));
    setHobbies(JSON.parse(savedHobbies));
    setFriendship(JSON.parse(savedFriendship));
    setMovies(JSON.parse(savedMovies));
    setDinning(JSON.parse(savedDinning));
    setDating(JSON.parse(savedDating));
    setMatrimony(JSON.parse(savedMatrimony));
    setSliderValue(JSON.parse(savedDistance));
    if (savedValue !== null && savedStatus !== null) {
      setCurrentValue(savedValue);
      setInput(savedStatus);
    }
  };
  useEffect(() => {
    loadSelectedOption();
  }, []);
  return (
    <View style={{width:responsiveWidth(100)}}>
      
      {/* Top to the Refine page contains the Refine Text and the back button */}

      <View style={styles.header}>
        <Ionicons
          name="chevron-back-outline"
          size={29}
          color={'white'}
          marginTop={8}
          onPress={() => {
            navigation.navigate('Parent');
          }}
        />
        <Text style={styles.headerText}>Refine</Text>
      </View>

      {/*Main refine page contains the remaining contants of refine page */}

      <View style={styles.main}>
        
        {/* DropDown List */}

        <View>
          <Text style={styles.text}>Select Your Availabilty</Text>
          <DropDownPicker
            items={items}
            open={isOpen}
            setOpen={() => {
              setIsOpen(!isOpen);
            }}
            value={currentValue}
            setValue={val => {
              setCurrentValue(val);
              {
                /*Setting the value  of dropdown to the selected */
              }
            }}
          />
        </View>

        {/* adding the view for the Status */}

        <View>
          <Text style={[styles.text, {marginTop: 15}]}>Set Your Status</Text>
          <TextInput
            style={styles.textinput}
            maxLength={250}
            value={input}
            onChangeText={text => setInput(text)}
            multiline
          />
          <Text style={{marginLeft: responsiveWidth(75)}}>
            {input.length}/{max}
          </Text>
        </View>

        {/* Hyper local distance */}

        <View style={{marginBottom: 20, marginTop: 20}}>
          <Text style={[styles.text, {marginBottom: 30}]}>
            Set Hyper local Distance
          </Text>

          {/* Implementing the slider */}
          <Slider
            minimumValue={1}
            maximumValue={100}
            value={sliderValue}
            onValueChange={value => setSliderValue(value)}
            step={1}
            renderAboveThumbComponent={() => (
              <View
                style={{
                  backgroundColor: '#072357',
                  width: 30,
                  marginLeft: -15,
                  height: 20,
                  marginBottom: -5,
                }}>
                <Text style={{color: 'white', paddingLeft: 7}}>
                  {sliderValue}
                </Text>
              </View>
            )}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black'}}>1 Km</Text>
            <Text style={{marginLeft: responsiveWidth(70), color: 'black'}}>100 km</Text>
          </View>
        </View>

        {/* purpose selection */}

        <View>
          <Text style={styles.text}>Select Purpose</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[
                styles.touchable,
                {backgroundColor: coffee ? '#072357' : 'white'},
              ]}
              onPress={() => (coffee ? setCoffee(false) : setCoffee(true))}>
              <Text
                style={[
                  styles.purposeText,
                  {color: coffee ? 'white' : 'black'},
                ]}>
                Coffee
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.touchable,
                {backgroundColor: business ? '#072357' : 'white'},
              ]}
              onPress={() =>
                business ? setBusiness(false) : setBusiness(true)
              }>
              <Text
                style={[
                  styles.purposeText,
                  {color: business ? 'white' : 'black'},
                ]}>
                Business
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.touchable,
                {backgroundColor: hobbies ? '#072357' : 'white'},
              ]}
              onPress={() => (hobbies ? setHobbies(false) : setHobbies(true))}>
              <Text
                style={[
                  styles.purposeText,
                  {color: hobbies ? 'white' : 'black'},
                ]}>
                Hobbies
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.touchable,
                {backgroundColor: friendShip ? '#072357' : 'white'},
              ]}
              onPress={() =>
                friendShip ? setFriendship(false) : setFriendship(true)
              }>
              <Text
                style={[
                  styles.purposeText,
                  {color: friendShip ? 'white' : 'black'},
                ]}>
                Friendship
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[
                styles.touchable,
                {backgroundColor: movies ? '#072357' : 'white'},
              ]}
              onPress={() => (movies ? setMovies(false) : setMovies(true))}>
              <Text
                style={[
                  styles.purposeText,
                  {color: movies ? 'white' : 'black'},
                ]}>
                Movies
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.touchable,
                {backgroundColor: dinning ? '#072357' : 'white'},
              ]}
              onPress={() => (dinning ? setDinning(false) : setDinning(true))}>
              <Text
                style={[
                  styles.purposeText,
                  {color: dinning ? 'white' : 'black'},
                ]}>
                Dinning
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.touchable,
                {backgroundColor: dating ? '#072357' : 'white'},
              ]}
              onPress={() => (dating ? setDating(false) : setDating(true))}>
              <Text
                style={[
                  styles.purposeText,
                  {color: dating ? 'white' : 'black'},
                ]}>
                Dating
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.touchable,
                {backgroundColor: matrimony ? '#072357' : 'white'},
              ]}
              onPress={() =>
                matrimony ? setMatrimony(false) : setMatrimony(true)
              }>
              <Text
                style={[
                  styles.purposeText,
                  {color: matrimony ? 'white' : 'black'},
                ]}>
                Matrimony
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {/* Save and explore button */}
          <TouchableOpacity
            style={styles.saveAndExplore}
            onPress={() =>
              saveSelectedOption(
                currentValue,
                input,
                coffee,
                business,
                hobbies,
                friendShip,
                movies,
                dinning,
                dating,
                matrimony,
                sliderValue,
              )
            }>
            <Text style={{color: 'white', fontSize: 15}}>Save & Explore</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Refine;

const styles = StyleSheet.create({
  header: {
    //for the refine text and back touchable
    height: 50,
    backgroundColor: '#003042',
    flexDirection: 'row',
  },
  headerText: {
    //for the refine text
    color: 'white',
    fontSize: 21,
    marginTop: 9,
    marginLeft: 30,
  },
  main: {
    //for the main components
    marginLeft: 25,
    marginTop: 50,
    paddingRight: 20,
  },
  text: {
    //for heading like set status set hyper local distance
    color: '#072357',
    marginBottom: 7,
    fontWeight: 'bold',
    fontSize: 17,
  },
  textinput: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
  },
  purposeText: {
    padding: 8,
    alignSelf: 'center',
  },
  touchable: {
    //for the purpose touchable
    borderWidth: 2,
    borderRadius: 50,
    marginRight: 15,
    marginBottom: 20,
  },
  saveAndExplore: {
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#072357',
  },
});
