import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Image, TextInput, ScrollView, StyleSheet, Text, View, ImageBackground, InputAccessoryView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export default class App extends Component {

  constructor() {
    super()

    this.state = {
      value: [1, 2, 3, 4, 5, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2],
      text: [1, 2, 3, 4, 5, 2, 2, 2, 22, 2, 2, 2, 22,]
    }
  }

  render() {

    return (
      <View>

        <View style={{ flexDirection: 'row', }} >
          <View style={styles.header}>
            <AntDesign name="arrowleft" size={24} color="black"
              onPress={() => alert('nikal bahar')}
            />

            <Image
              style={styles.logo}
              source={{
                uri:
                  'https://cdn.hipwallpaper.com/i/3/80/B5RlpT.png'
              }}
            />
            <Text style={styles.name}>
              Muhammad Faiz
      </Text>
          </View>

          <View style={styles.iconss}>
            <MaterialIcons name="videocam" size={33} color="black" />
            <Ionicons name="call" size={24} color="black" />
            <SimpleLineIcons name="options-vertical" size={24} color="black" />


          </View>
        </View>
        <View style={{flex:8,}}>
          <ImageBackground
            style={{ height:670, width: '100%', }}
            source={{ uri: 'https://wallpaperaccess.com/full/1288076.jpg' }}
          >


            <ScrollView>
              <View style={{ marginLeft: 10 }} >
                {this.state.value.map((ind, val) => {
                  return <View style={styles.tex}>
                    <Text style={{ fontSize: 17, fontStyle: 'italic', fontWeight: 'bold' }}>Hello WhatsAppjkrfbikf jkvbukvjkb kufheiuor kjhcewiuor jhek lkjdfvpo kjhfeffroiv jkhgerkucv mjhreekuv j,jhbbreku fvkjhbfbv evjke</Text>
                  </View>
                })}
              </View>

              <View style={styles.send}>
                {this.state.text.map((ind, val) => {
                  return <View style={styles.tex1}>

                    <Text style={{ fontSize: 17, fontStyle: 'italic', fontWeight: 'bold' }}>Hello WhatsAppjkrfbikf jkvbukvjkb kufheiuor kjhcewiuor jhek lkjdfvpo kjhfeffroiv jkhgerkucv mjhreekuv j,jhbbreku fvkjhbfbv evjke </Text>
                  </View>
                })}

              </View>




            </ScrollView>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.footer}>
                <Entypo name="emoji-flirt" size={24} color="gray" style={{ marginLeft: 10 }} />
                <TextInput
                  placeholder={'enter spome thing'}
                  style={{ marginLeft: 10, width: 170 }}
                >

                </TextInput>
                <Entypo name="attachment" size={20} color="gray" />
                <FontAwesome name="camera" size={20} color="gray" style={{ marginLeft: 20 }} />
              </View>
              <View style={styles.voice}><MaterialIcons name="keyboard-voice" size={25} color="white" style={{ marginLeft: 13 }} /></View>
            </View>
          </ImageBackground>

        </View>




      </View>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    height:50,
    backgroundColor: 'seagreen',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1.5

  },
  logo: {
    height: 35,
    width: 35,
    borderRadius: 100
  },
  name: {
    paddingLeft: 5,
    fontSize: 17,
  },
  iconss: {
    flex: 1,
    backgroundColor: 'seagreen',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  tex: {
    backgroundColor: '#fff',

    width: '60%',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10

  },
  tex1: {
    backgroundColor: '#fff',
    width: '60%',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10
  },
  send: {
    alignItems: 'flex-end',
    marginRight: 10
  },
  footer: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    width: 290,
    borderRadius: 100,
    marginBottom: 5,
    marginLeft: 5
  },
  voice: {
    height: "90%",
    marginBottom: 5,
    width: 50,
    marginLeft: 10,
    backgroundColor: 'seagreen',
    borderRadius: 100,
    alignItems: 'center',
    flexDirection: 'row'
  }

});
