import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View>
    <Text>Home Screen</Text>
  </View>
);

const icons = {
  internet: require('./internet.png'),
  internetOutline: require('./internetOutline.png'),
};

const COLORS = {
  primary: '#FF0000',
  gray: '#CCCCCC',
};

const BottomTabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false, // Đúng cú pháp là headerShown, không phải headerShow
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={focused ? icons.internet : icons.internetOutline}
                                resizeMode='contain'
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: focused ? COLORS.primary : COLORS.gray
                                }}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabNavigation;