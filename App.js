import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {TvScreen,MovieScreen,SearchScreen} from './src/navigation/CustomNavigation';

 const Tab = createMaterialBottomTabNavigator();


export default function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="TvScreen"
      activeColor="#00008b"
      barStyle={{ backgroundColor: '#151C26' }}//20123c
      
    >
      <Tab.Screen
        name="TvScreen"
        // component={TvShows}
        component={TvScreen}
        options={{
          tabBarLabel: 'Tv Shows',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="youtube-tv" color={color} size={26} />
          ),
        }}
      >
     
      </Tab.Screen>

      <Tab.Screen
        name="Notifications"
        //component={Movies}
        component={MovieScreen}
        options={{
          tabBarLabel: 'Movies',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        //component={Search}
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-search-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}