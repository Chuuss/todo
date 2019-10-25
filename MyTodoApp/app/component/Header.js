import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return (
        <View style={styles.headercontainer}>
            <Text style={styles.headertext}>MyTodoApp</Text>
        </View>
    );
        

};
const styles = StyleSheet.create({
    headcontainer: {
      marginTop : 50,
      marginBottom:50,
      
    },
    headertext: {
      fontSize : 25,
      fontWeight : 'bold',
      color :'#E8D9FF'
    }
});