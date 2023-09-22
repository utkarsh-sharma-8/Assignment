import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Draw = createDrawerNavigator();

const Header = (props) => {
  const navigation = useNavigation();
  const onPress=()=>{
    navigation.openDrawer()
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* menu */}
       <TouchableOpacity onPress={()=>onPress()}>
       <Image
         source={require('../img/menu.png')}
         style={{width: responsiveWidth(10), height: responsiveHeight(4), marginTop:responsiveHeight(2)}}
       />
       </TouchableOpacity>
      {/* user name and its location*/}
      <View style={{flexDirection: 'column'}}>
        <Text style={styles.nameText}>Howdy User !!!</Text>
        <View style={{flexDirection: 'row'}}>
          <MaterialIcons
            name="location-pin"
            color={'white'}
            size={20}
            marginLeft={20}
          />
          <Text style={styles.locText}> User Location</Text>
        </View>
      </View>
      {/*refine view*/}
      <TouchableNativeFeedback onPress={()=>{navigation.navigate('Refine')}}>
        <View style={styles.refineView}>
          <Image source={require('../img/refine.png')} style={styles.image} />
          <Text style={{color: 'white'}}>Refine</Text>
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e2e43',
    flex: 1,
    flexDirection: 'row',
    width:responsiveWidth(100),
  },
  nameText: {
    color: 'white',
    marginLeft: responsiveWidth(6),
    marginTop: responsiveWidth(3),
    fontSize: 15,
  },
  locText: {
    color: 'white',
    fontSize: 13,
    width:responsiveWidth(37)
  },
  refineView: {
    flexDirection: 'column',
    marginTop: responsiveWidth(0),
    marginLeft:responsiveWidth(31)
  },
  image: {
    width: 30,
    height: 30,
    marginTop: 7,
  },
});
