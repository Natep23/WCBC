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
      shadowOffset: { width: 0, height: 2},
      shadowRadius: 4,
      shadowOpacity: 0.25,
      elevation: 5,
      marginBottom: 10,
      marginTop: 12

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
      borderRadius: 4, 
      marginTop: 12
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
      width: 42,
      height: 42,
      color: 'green',
      paddingBottom: 10,
      alignSelf: 'center',
      left: 5
    },
    deleteButton: {
      position:'absolute',
      top:0,
      right:0,
      width:40,
      height:40,
      color: '#de605a'
    },
    modalView : {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#055",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#c7cace",
      opacity: 0.989,
    },
    modalCloseBtn: {
      position: 'absolute',
      top: -30,
      left: 112,
      color: '#de605a'
    },
    ModalImgView: {
      width: 134, 
      height: 134, 
      borderRadius: 5, 
      borderWidth: .5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    addToDBbtn: {
      borderWidth: .1, 
      marginTop:12, 
      borderRadius: 4, 
      backgroundColor: 'green', 
      paddingLeft: 12, 
      paddingRight: 12
    },
    annImg: {
      margin: 14,
      alignSelf: 'center',
      borderWidth: .4,
      borderRadius: 6
    },
    annShareView: {
      flexDirection: 'row',
      borderTopWidth: .2,
      justifyContent: 'center'
    },
    annShareTxt: {
      padding: 12,
    },
    annShare: {
      padding: 7,
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
    textfield: {
      borderWidth: 1,
      borderRadius: 4,
      paddingLeft: 75,
      paddingRight: 75,
      marginTop: 12,
      // width: '80%'
    },
    contactTxtField: {
      borderWidth: .168,
      borderRadius: 4,
      padding: 12,
      marginLeft: 9,
      marginRight: 9,
      backgroundColor: '#dee1ef'
    },
    MessageTxtField: {
      borderWidth: .3,
      borderRadius: 4,
      paddingLeft: 12,
      paddingBottom: 82,
      marginLeft: 9,
      marginRight: 9,
      backgroundColor: '#dee1ef',

    },
    nameInpt : {
      fontSize: 12, 
      padding:12, 
      marginTop: 4 
    },
    

  });