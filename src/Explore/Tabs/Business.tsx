import React, { useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import * as Progress from 'react-native-progress';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Add from '../Add';

//items to rendered on personel screen//

const items = [
  {
    id: 1,
    name: 'Netclan Explorer',
    place: 'India',
    distance: '1',
    work: 'Web Developer',
    experience: '1',
    status: 'Hi community! I am available at your service',
    image:
      'https://th.bing.com/th/id/OIP.P80EiHDT3D7g772d8CCbUwHaJb?pid=ImgDet&rs=1',
    progress: 0.1,
    mobile: 97123623424,
  },
  {
    id: 2,
    name: 'Eve Jonas',
    place: 'Europe',
    proffesion: 'student',
    distance: '3',
    work: 'Web Developer',
    experience: '1',
    status: 'Hi community! I am available at your service',
    image: '',
    progress: 0.3,
    mobile: 974284239048,
  },
  {
    id: 3,
    name: 'Joseph Stan',
    place: 'Australia',
    proffesion: 'student',
    distance: '3',
    work: 'Web Developer',
    experience: '1',
    status: 'Hi community! I am available at your service',
    image: '',
    progress: 0.5,
    mobile: 9731273678,
  },
  {
    id: 4,
    name: 'Lee Cooper',
    place: 'Indonesia',
    proffesion: 'student',
    distance: '3',
    work: 'Web Developer',
    experience: '1',
    status: 'Hi community! I am available at your service',
    image: '',
    progress: 0.09,
    mobile:9873476324,
  },
  {
    id: 5,
    name: 'Bety Cooper',
    place: 'France',
    proffesion: 'student',
    distance: '3',
    work: 'Web Developer',
    experience: '1',
    status: 'Hi community! I am available at your service',
    image:
      'https://th.bing.com/th/id/OIP.P80EiHDT3D7g772d8CCbUwHaJb?pid=ImgDet&rs=1',
    progress: 0.1,
    mobile: 9886237432,
  },
  {
    id: 6,
    name: 'Bery Stan',
    place: 'Germany',
    proffesion: 'student',
    distance: '3',
    work: 'Web Developer',
    experience: '1',
    status: 'Hi community! I am available at your service',
    image: '',
    mobile: 982374381,
    progress: 0.7,
  },
  {
    id: 7,
    name: 'Bella Burman',
    place: 'Russia',
    proffesion: 'student',
    distance: '3',
    work: 'Web Developer',
    experience: '1',
    status: 'Hi community! I am available at your service',
    image:
      'https://th.bing.com/th/id/OIP.P80EiHDT3D7g772d8CCbUwHaJb?pid=ImgDet&rs=1',
    progress: 0.6,
    mobile: 98138712334,
  },
  {
    id: 8,
    name: 'Angela Alex',
    place: 'Ukraine',
    proffesion: 'student',
    distance: '3',
    work: 'Web Developer',
    experience: '1',
    status: 'Hi community! I am available at your service',
    image: '',
    progress: 0.5,
    mobile: 98713123,
  },
  {
    id: 9,
    name: 'Adams Cooper',
    place: 'newYork',
    proffesion: 'student',
    distance: '3',
    work: 'Web Developer',
    experience: '1',
    status: 'Hi community! I am available at your service',
    image:
      'https://th.bing.com/th/id/OIP.P80EiHDT3D7g772d8CCbUwHaJb?pid=ImgDet&rs=1',
    progress: 0.3,
    mobile: 81273827138,
  },
];
const Business = () => {
  const [data, setData] = useState(items);
  const [initial, setInitial] = useState(false);
  const [search, setSearch] = useState('');
  const [plus, setPlus] = useState(false);
  const searchRef = useRef();
  const animation = useRef(new Animated.Value(0)).current;

  // to change the plus sign to close sign//

  const startAnimation = () => {
    setInitial(initial ? false : true);
    setPlus(!plus);
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  
  //to print the two char (i.e first char from first and first char from last name) at the image when image is not provided//

  const firstChar = name => {
    const words = name.split(' ');
    let result = '';
    for (const word of words) {
      if (word.length > 0) {
        result += word[0];
      } else if (word.length > 1) {
        result += word[1];
      }
    }
    return result;
  };

//function to take user to call screen
const call = () => {
  return(
    Linking.openURL(`tel:${(items.mobile)}`)
  )
};
  //function to implement search //

  const onSearch = (text: string) => {
    const tempList = items.filter((item, index) => {
      let ans = item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      return ans;
    });
    setData(tempList);
  };
  
  //function to render the data in the flatlist//

  const renderItems = ({item}) => {
    return (
      <View style={styles.main}>
        <View style={styles.profile}>
          <View style={styles.image}>
            
            {/* When image is not given logic */}

            {item.image === '' ? (
              <Text style={styles.imageName}>{firstChar(item.name)}</Text>
            ) : (
              <Image
                source={{uri: item.image}}
                style={styles.userImage}
                onError={error => {
                  console.log(error);
                }}
              />
            )}
          </View>
          <View style={{marginLeft: -15}}>
            <TouchableOpacity>
              <Text
                style={{
                  marginTop: 17,
                  marginLeft: 225,
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#003042',
                }}>
                + INVITE
              </Text>
            </TouchableOpacity>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.place}>
              {item.place} | Within {item.distance} Km
            </Text>

            {/* Progress bar */}

            <Progress.Bar
              progress={item.progress}
              height={10}
              width={150}
              color={'grey'}
              style={styles.progress}
            />
            <View style={styles.mobile}>
              <TouchableOpacity
                style={{
                  backgroundColor:'#003253',
                  borderRadius: 100,
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }} onPress={()=>call()}>
                <Ionicons name="call" color={'white'} size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginLeft: 30,
                  backgroundColor: item.mobile === '' ? 'grey' : '#003253',
                  borderRadius: 100,
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome6 name="user-plus" color={'white'} size={18} />
              </TouchableOpacity>
            </View>
            <Text style={styles.purpose}>
              {item.work} | {item.experience} years of experience
            </Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, marginBottom: 15}}>
      {plus ? (// Apply blur effect only if plus is true or is pressed
        <>
          <View>
            <View style={[styles.top, {opacity: 0.24}]}>
              <View style={styles.searchBar}>
                <EvilIcons name={'search'} size={20} marginLeft={30} />
                <TextInput
                  ref={searchRef}
                  placeholder="Search"
                  style={{
                    marginLeft: 10,
                    opacity: 10,
                    height: 25,
                    fontSize: 15,
                    color: 'black',
                    width: '80%',
                    padding: 0,
                  }}
                  onChangeText={txt => {
                    onSearch(txt);
                    setSearch(txt);
                  }}
                />
                {search === '' ? null : (
                  <TouchableOpacity
                    style={{marginLeft: -20}}
                    onPress={() => {
                      searchRef.current.clear();
                      setSearch('');
                      onSearch('');
                    }}>
                    <Entypo name={'cross'} size={20} color={'grey'} />
                  </TouchableOpacity>
                )}
                <TouchableOpacity>
                  <Ionicons
                    name={'options-outline'}
                    size={30}
                    marginLeft={20}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Adding the add file */}

            <Add />
            <FlatList
              data={data}
              renderItem={renderItems}
              style={{height: '100%', opacity: 0.24,position:'absolute'}}
            />
          </View>
        </>
      ) : (
        <>
          <View style={styles.top}>
            <View style={styles.searchBar}>
              <EvilIcons name={'search'} size={20} marginLeft={30} />
              <TextInput
                ref={searchRef}
                placeholder="Search"
                style={{
                  marginLeft: 10,
                  opacity: 10,
                  height: 25,
                  fontSize: 15,
                  color: 'black',
                  width: '80%',
                  padding: 0,
                }}
                onChangeText={txt => {
                  onSearch(txt);
                  setSearch(txt);
                }}
              />
              {search === '' ? null : (
                <TouchableOpacity
                  style={{marginLeft: -20}}
                  onPress={() => {
                    searchRef.current.clear();
                    setSearch('');
                    onSearch('');
                  }}>
                  <Entypo name={'cross'} size={20} color={'grey'} />
                </TouchableOpacity>
              )}
              <TouchableOpacity>
                <Ionicons name={'options-outline'} size={30} marginLeft={20} />
              </TouchableOpacity>
            </View>
          </View>
          <FlatList data={data} renderItem={renderItems} />
        </>
      )}

      {/* the X (pressable) */}

      <TouchableOpacity
        style={styles.plus}
        activeOpacity={1}
        onPress={() => {
          startAnimation();
        }}>
        <Animated.Text
          style={[
            styles.plusText,
            initial ? styles.transformToX : styles.tranformToY,
          ]}>
          +
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

export default Business;

const styles = StyleSheet.create({
  top: {
    //for the search bar
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(4),
    marginTop: 20,
    marginLeft: 30,
    justifyContent: 'space-between',
  },
  main: {
    // in function render items
    margin: 1,
  },
  profile: {
    
    // profile card which renders either image or Furst two chars

    height:responsiveHeight(22),
    marginLeft: responsiveWidth(9),
    marginRight:responsiveWidth(2),
    width:responsiveWidth(89),
    marginTop: 20,
    borderRadius: 30,
    borderBottomWidth:2,
    borderLeftWidth:1,
    borderWidth:.5,
    borderColor: 'grey',
    flexDirection: 'row',
  },
  name: {
    //in function renderItems to reder the name of person//

    marginTop:-5,
    marginLeft: 50,
    color: '#003042',
    fontWeight: 'bold',
    fontSize: 15,
  },
  place: {
    //in function renderItems to reder the place/

    marginTop: 0,
    marginLeft: 50,
    fontSize: 15,
  },
  distance: {
    //in function renderItems to reder the distance from the user//
    marginTop: 0,
    marginLeft: 50,
    color: '#003042',
    fontWeight: 'bold',
    fontSize: 16,
  },
  progress: {
    marginLeft: 50,
    color: 'grey',
  },
  purpose: {
    //in function renderItems to render progress bar //

    marginLeft: 25,
    fontSize: 15,
    color: '#003042',
    fontWeight: 'bold',
    marginTop: 7,
  },
  status: {
    marginLeft: 25,
    fontSize: 14,
    marginTop: 2,
    color: 'grey',
  },
  image: {
    //the view which renders either text or image in renderItem//

    marginTop: 30,
    borderWidth: 0,
    backgroundColor: '#b8c5cd',
    width: 75,
    marginLeft: -30,
    height: 85,
    borderColor: 'grey',
    borderRadius: 20,
    alignItems: 'center',
    shadowOffset: {
      height: 200,
      width: 0.5,
    },
    elevation: 15,
  },
    //to render the text in above view//
  imageName: {
    alignSelf: 'center',
    fontSize: 35,
    color: '#003042',
    marginTop: 15,
  },
  userImage: {
    //to render the image in above view//

    width: 75,
    height: 85,
    borderRadius: 20,
  },
  plus: {
    // the plus sign view that turns into cross//

    backgroundColor: '#003253',
    position: 'absolute',
    marginLeft: responsiveWidth(85),
    marginTop: responsiveHeight(70),
    width: responsiveWidth(12),
    height: responsiveHeight(6),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    // the plus sign that turns into cross//

    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
  },
  transformToX: {
    //to transform the + to X//

    transform: [{rotateX: '0deg'}, {rotateZ: '45deg'}, {rotateY: '0deg'}],
  },
  tranformToY: {
    //to transform the + to Y//

    transform: [{rotateX: '0deg'}, {rotateZ: '0deg'}, {rotateY: '0deg'}],
  },
  mobile: {
    width: 100,
    height: 30,
    marginLeft: 80,
    borderRadius: 100,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchBar: {
    width: '80%',
    height: 30,
    borderRadius: 10,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
