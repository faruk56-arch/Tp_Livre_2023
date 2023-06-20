import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './screens/CategoriesScreen';
import BooksScreen from './screens/BooksScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import MapScreen from './screens/MapScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3F51B5',  // Background color of the header bar
          },
          headerTintColor: '#fff',  // Color of the header text and icons
          headerTitleStyle: {
            fontWeight: 'bold',  // Font weight of the header title
          },
        }}
      >
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Catégories' }} />
        <Stack.Screen name="Books" component={BooksScreen} options={{ title: 'Livres' }} />
        <Stack.Screen name="BookDetail" component={BookDetailsScreen} options={{ title: 'Détails du livre' }} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
