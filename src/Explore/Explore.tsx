import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Footer from './Footer';
import Header from './Header';
import Business from './Tabs/Business';
import Merchant from './Tabs/Merchant';
import Personal from './Tabs/Personal';

const Tab = createMaterialTopTabNavigator();
const Explore = () => {
  return (
    <View>

      {/* the header having user name location refine icon and drawer menu icon */}

      <View style={styles.header}>
        <Header />
      </View>

      {/* the tabs for tab navigation */}

      <View style={{height:responsiveHeight(85)}}>
        <Tab.Navigator
          initialRouteName="Personal"
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#143d59',
            },
            tabBarLabelStyle: {
              color: 'white',
              fontWeight: 'bold',
            },
            tabBarIndicatorStyle: {
              backgroundColor: 'white',
            },
          }}>
          <Tab.Screen
            name="personal"
            component={Personal}
            options={{tabBarLabel: 'Personal'}}
          />
          <Tab.Screen
            name="Business"
            component={Business}
            options={{tabBarLabel: 'Business'}}
          />
          <Tab.Screen
            name="Merchant"
            component={Merchant}
            options={{tabBarLabel: 'Merchant'}}
          />
        </Tab.Navigator>
      </View>

      {/* Footer containg Explore network etc fields(static) */}
      
      <View style={styles.footer}>
        <Footer />
        
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  header: {
    height: responsiveHeight(7),
    width:responsiveWidth(100),
  },
  footer: {
    position:'relative',
    height:responsiveHeight(3.7),
    width:responsiveWidth(100),
    paddingLeft:2
  },
});
