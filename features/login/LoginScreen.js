import React from "react";
import { View,Button, Text } from "react-native";




// class LoginScreen extends React.Component {

//     render(){
//         return (
//         <View style = {{backgroundColor:"#28433F"}}>

//         </View>)
//     }
// }

class LoginScreen extends React.Component {
    render() {
      return (
        <View style={{ backgroundColor:"#28433F", flex: 1, alignItems: "flex-start", justifyContent: "center", }}>
          <Text style = {{color:"white"}}>Email</Text>
          <Button title="Go to Details"
          />
        </View>
      );
    }
  }

export default LoginScreen;