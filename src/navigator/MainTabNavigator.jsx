import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FavoriteScreen from 'screen/Favorite';
import HomeScreen from 'screen/Home';
import ProfileScreen from 'screen/Profile';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: '#1565c0' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon
              name="movie-open-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon
              name="heart-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon
              name="account-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
