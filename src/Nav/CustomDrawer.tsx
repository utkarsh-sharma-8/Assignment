import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Progress from 'react-native-progress';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import Background from './background';

const CustomDrawer = () => {
  const navigation = useNavigation();

  //getting the availabily either if available busy or something else from store//

  const items = useSelector(state => state.StatusReducer);

  //to print the the first word of availbility eg busy from whole availabilty//

  function extractWordFromInput(inputArray: string[]): string | null {
    // Check if the inputArray has at least one element

    if (inputArray.length > 0) {
      const inputString = inputArray[0]; // Get the first element (assuming there's only one)//
      const words = inputString.split('|'); // Split the string by '|' character//

      // If there are words after splitting, trim and return the first word//
      if (words.length > 0) {
        return words[0].trim();
      }
    }

    // If input is empty or doesn't match the expected format, return null or a default value//

    return null;
  }
  return (
    <View style={{height: '25%'}}>
      <Background>
        {/* wrapping some height of drawer with the image */}
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../img/userImage.jpg')}
            style={styles.userImage}
          />
          {/*getting the user image */}
          <Ionicons
            name="settings-sharp"
            size={25}
            color={'black'}
            marginLeft={180}
            marginTop={5}
          />
        </View>
        <Text style={styles.text}>User</Text>
        <Text style={{color: 'white', fontSize: 15, marginLeft: 33}}>
          UUUTEUERJ
        </Text>
        <Progress.Bar
          progress={0.5}
          height={10}
          width={100}
          color={'white'}
          style={styles.progress}
        />
        <Text
          style={{fontSize: 15, color: 'white', marginTop: 10, marginLeft: 32}}>
          {items === '' ? 'Available' : extractWordFromInput(items)}{' '}
          {/* when start the app and no availabilty is given then show 'available' */}
        </Text>
      </Background>
      {/*creating the tabs for drawer navigation */}
      <TouchableOpacity>
        <View style={styles.itemsView}>
          <FontAwesome name="user" size={27} color={'#0e2e43'} />
          <Text style={styles.itemsText}>My Profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={[
            styles.itemsView,
            {backgroundColor: '#d3d3d3', borderRadius: 5, marginLeft: 4},
          ]}>
          <FontAwesome
            name="users"
            size={27}
            color={'#0e2e43'}
            marginLeft={19}
          />
          <Text style={styles.itemsText}> My Network </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.itemsView}>
          <FontAwesome5 name="briefcase" size={27} color={'#0e2e43'} />
          <Text style={styles.itemsText}> Switch To Business </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.itemsView}>
          <Entypo name="shop" size={27} color={'#0e2e43'} />
          <Text style={styles.itemsText}> Switch To Merchant </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.itemsView}>
          <FontAwesome5 name="heart" size={27} color={'#0e2e43'} />
          <Text style={styles.itemsText}> Dating </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.itemsView}>
          <MaterialCommunityIcons name="ring" size={27} color={'#0e2e43'} />
          <Text style={styles.itemsText}> MatriMony </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.itemsView}>
          <FontAwesome name="shopping-bag" size={27} color={'#0e2e43'} />
          <Text style={styles.itemsText}> Buy Sell rent </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.itemsView}>
          <MaterialCommunityIcons
            name="briefcase"
            size={27}
            color={'#0e2e43'}
          />
          <Text style={styles.itemsText}> Jobs </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.itemsView}>
          <MaterialCommunityIcons
            name="card-account-details"
            size={27}
            color={'#0e2e43'}
          />
          <Text style={styles.itemsText}> Business Cards </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.itemsView}>
          <FontAwesome name="hashtag" size={27} color={'#0e2e43'} />
          <Text style={styles.itemsText}> NetClan Group </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.itemsView}>
          <Foundation
            name="clipboard-pencil"
            size={27}
            color={'#0e2e43'}
            marginLeft={8}
          />
          <Text style={styles.itemsText}> Notes </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.itemsView}>
          <Entypo
            name="location-pin"
            size={27}
            color={'#0e2e43'}
            marginLeft={5}
          />
          <Text style={styles.itemsText}> Live Locations </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  progress: {

    //progress bar int the below user name

    marginLeft: 33,
    marginTop: 10,
    backgroundColor: 'grey',
  },
  text: {

    //text in the drawer

    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 33,
    marginTop: 10,
  },
  itemsView: {
    
    //for showing icon and text in a line

    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 25,
  },
  itemsText: {
    marginTop: 7,
    marginLeft: 20,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0e2e43',
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginLeft: 30,
    marginTop: 2,
  },
});
