/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */


import React from "react";
import { View,Button, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createStore } from 'redux'


import Icon from 'react-native-vector-icons/FontAwesome';
const myButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
    Login with Facebook
  </Icon.Button>
);

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button title="Go to Details"
        onPress={() => this.props.navigation.navigate('Detail')}
        />
       <Icon.Button name="facebook" backgroundColor="#3b5998">
    Login with Facebook
  </Icon.Button>
      </View>
    );
  }
}

class DetailScreen extends React.Component {

  render() {
    return (
      <View style = {{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text> Detail Screen</Text>
        <Text>Home Screen</Text>
        <Button title="Go to Details"
        onPress={() => this.props.navigation.push('Detail')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Detail:DetailScreen
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render(){
    return(
      <AppContainer/>
    );
  }
}

