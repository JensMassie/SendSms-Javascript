import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import SendSMS from 'react-native-sms-x';


export default class HomeScreen extends React.Component {
    sendText(){
        console.log('SMS log start');
        SendSMS.send(123, "0471391751", "newtewst",
        (msg)=>{
          console.log("succes")
        }
      );
    }
 render() {
    return (
        <TouchableOpacity onPress={this.sendText.bind(this)}>
        <View>
          <Image
            //We are showing the Image from online
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sms.png',
            }}
            //You can also show the image from you project directory like below
            //source={require('./Images/sms.png')}
            style={styles.ImageStyle}
          />
          <Text style={styles.text}>Send SMS</Text>
          </View>
        </TouchableOpacity>
    );
 }
}
const styles = StyleSheet.create({
 home: {
 flex: 1,
 alignItems: 'center',
 justifyContent: 'center',
 },
});