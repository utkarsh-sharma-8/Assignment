import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Footer = () => {
  const [clicked, setClicked] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <TouchableWithoutFeedback>
          <>
            <FontAwesome5 name="eye" size={24} color={'blue'} marginLeft={responsiveWidth(11)} marginBottom={5} />
            <Text style={styles.text}>Explore</Text>
          </>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableWithoutFeedback>
          <>
            <Image
              source={require('../img/myNetworks.jpeg')}
              style={styles.image}
            />
            <Text style={styles.text}>Network</Text>
          </>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableWithoutFeedback>
          <>
            <Image
              source={require('../img/chat.jpeg')}
              style={{marginLeft:responsiveWidth(9), width: responsiveWidth(8), height:responsiveWidth(8)}}
            />
            <Text style={styles.text}>  Chat</Text>
          </>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableWithoutFeedback>
          <>
            <Image
              source={require('../img/myContact.jpeg')}
              style={styles.image}
            />
            <Text style={styles.text}>Contacts</Text>
          </>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableWithoutFeedback>
          <>
            <Image source={require('../img/groups.jpeg')} style={styles.image} />
            <Text style={styles.text}>Groups</Text>
          </>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height:'100%',
    width:'100%',
  },
  text: {
    marginLeft: responsiveWidth(7),
  },
  image: {
    width: responsiveWidth(7),
    height: 30,
    marginLeft: responsiveWidth(10),
  },
});