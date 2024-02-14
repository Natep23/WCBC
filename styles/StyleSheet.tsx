import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#FAF8f8',
      width: Dimensions.get('screen').width,
      shadowColor: '#000010',
      shadowOffset: { width: 1, height: 1},
      shadowRadius: 1,

    },
    Contentcontainer: {
      flex: 1,
      borderBottomWidth: .3,
      height: '100%',
    },
    video: {
      alignSelf: 'center',
      width: Dimensions.get('screen').width - 34,
      height: Dimensions.get('screen').height - 620,
    },
    fullscreen: {
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height
    },
    videoTitle : {
      fontSize: 16,
      color: 'white',
      alignSelf: 'center',
      fontStyle: 'italic',
      paddingTop: 15,
      paddingBottom: 15,
      textShadowColor: '#000010',
      textShadowOffset: {width: 1, height: 2},
      textShadowRadius: 8
    },
    addButton: {
      position: 'absolute',
      top: 0,
      right: 14,
      width: 40,
      height: 40,
      color: 'green'
    },
    deleteButton: {
      position:'absolute',
      top:0,
      right:0,
      width:40,
      height:40,
      color: 'tomato'
    },
    mainView : {
      width: Dimensions.get('screen').width,
    },
    logo: {
      width:40,
      height:40
    },
    titleText : {
      fontSize: 20,
      alignSelf: 'center',
      padding: 5
    },
    hidden:{
      opacity: 0
    },
    text: {
        fontSize: 12,
        alignSelf: 'center'
    },
  });