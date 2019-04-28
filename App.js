// developed by Ashish Gautam
// ashish.gm74@gmail.com and github.com/silentashish
// This is Initial Page of the OpenMarket Application 
// This consists of the sliding photos of project and choice 
// for either you are a customer or you are a Seller 

import React, {Component} from 'react';

import {
  ScrollView,
  StyleSheet,
  View, 
  Text,
  Platform, 
  TextInput,
  KeyboardAvoidingView, 
  Image, 
  ImageBackground} from 'react-native';

// SearchInput is simplification of TextInput with background in it 
// This can be used for username Password as well if needed 
// this need to pass props placeholder along with it like placeholder='Enter Your Location' 
import SearchInput from './SearchInput';

// Diemsion is used to get Dimension of the Screen 
// in react native app 
// javascripts functions can return more then more variable 

import {Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');

//React-navigation is use to move between screen and creating them
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class MyActivity extends Component{
  // componentDidMount() executed once after native ui component rendering 
  // stop in app
  componentDidMount() {
    const numOfBackground = 4;
    let scrollValue = 0, scrolled = 0;
    setInterval(function () {
        scrolled++;
        if(scrolled < numOfBackground)
            scrollValue = scrollValue + width;
        else{
            scrollValue = 0;
            scrolled = 0
        }
        _scrollView.scrollTo({ x: scrollValue, animated: false })
    }, 5000);
  }
  render(){
    return(
      <View style={{flex:1,backgroundColor:"#000",flexDirection:'column', justifyContent:'center'}}>

      {/* ScrollView contain set of the image that need to be reder in any screen 
      place view below the scroll view to appear above it 
      bug here -> postion: absolute in View cause the TextInput don't appear  */}

       <ScrollView 
        ref={(scrollView) => { _scrollView = scrollView; }}
        horizontal={true} pagingEnabled={true} 
        >
          <Image source={require('./1.jpg')} style={{height, width}} />
          <Image source={require('./2.jpg')} style={{height, width}} />
          <Image source={require('./3.jpg')} style={{height, width}} />
          <Image source={require('./4.jpg')} style={{height, width}} />
          
      </ScrollView>
      <KeyboardAvoidingView style={{position:'absolute',alignSelf:'center'}}>
          <View style={Styles.detailContainer}  >
              <Text style={[Styles.largeText, Styles.textStyle]}>San Francisco</Text>
              <Text style={[Styles.smallText, Styles.textStyle]}>Light Cloud</Text>
              <Text style={[Styles.largeText, Styles.textStyle]}>24°</Text>
              <SearchInput placeholder='Enter Your Location'/>
            </View>
        </KeyboardAvoidingView>      
      </View>
    );
  }
}

// All Styling are in here 
// Don't forget to add here after you finish

const Styles = StyleSheet.create({
  detailContainer:{
    justifyContent: 'center',
    alignItems:'center',
    alignSelf:'center',
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#666'

  },
  largeText:{
    fontSize:50,
  },
  smallText:{
    fontSize:20,
  },
  textStyle:{
    color:'#fff'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
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
});