import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput
}from 'react-native';

class SearchInput extends Component{
    render(){
        return(
            <View>
                <TextInput 
                    placeholder={this.props.placeholder}
                    autoCorrect={false}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    style={SearchStyles.textInput}
                    clearButtonMode="always"
                />
            </View>
        );
    }
}

const SearchStyles= StyleSheet.create(
    {
        textInput: {
            backgroundColor: '#000',
            color: 'white',
            height: 40,
            width: 300,
            marginTop: 20,
            marginHorizontal: 20,
            paddingHorizontal: 10,
            alignSelf: 'center',
            borderRadius:30,
            textAlign:'center',
        },
        container: {
            height: 40,
            marginTop: 20,
            backgroundColor: '#666',
            marginHorizontal: 40,
            paddingHorizontal: 10,
            borderRadius: 5,
        }
    }
);

module.exports= SearchInput;