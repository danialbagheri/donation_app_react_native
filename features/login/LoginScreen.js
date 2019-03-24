import React from "react";
import { View,Button,Text, TextInput} from "react-native";




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
        <View style={{ backgroundColor:"#28433F", flex: 1,alignItems: "flex-start", justifyContent: "center",paddingHorizontal:40 }}>
         
          <Text style = {{color:"#FFFFFF",fontSize:20,textAlign:"left"}}>Email</Text>
         
          <TextInput style = {{height:40 ,color:'white', borderColor:"#FCFCFC99",borderWidth:1,alignSelf:"stretch",marginVertical:8}} 
          keyboardType ='email-address'
          placeholder = "example@gmail.com"
          placeholderTextColor = '#FCFCFC99'
          ></TextInput>
         
          <Text style = {{color:"#FFFFFF",fontSize:20,textAlign:"left",marginTop:8}}>Password</Text>
         
          <TextInput style = {{height:40 , borderColor:"#FCFCFC99",borderWidth:1,alignSelf:"stretch",marginVertical:8}}
          secureTextEntry = {true}
          placeholder = "*********"
          placeholderTextColor = '#FCFCFC99'
          ></TextInput>
         
          <View style={{marginTop:24, borderColor:"white",borderWidth:1,color:"white",alignSelf:"stretch"}}>
          <Button color="white" title="LOGIN"/>    
          </View>
         
          <Text style = {{color:"#FFFFFF",fontSize:20,textAlign:"left",marginVertical:16,alignSelf:"center"}}>or</Text>
         
          <View style={{ borderColor:"#FF0000",borderWidth:1,alignSelf:"stretch"}}>
          <Button color="#FF0000" title="SIGN IN WITH GOOGLE"/>    
          </View>

        </View>
      );
    }
  }

export default LoginScreen;