import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView, Button, RefreshControl, } from 'react-native';
import { Chip, Divider } from 'react-native-paper';

export default function Main() {
  return data();
}


function data() {

  // List of names
  const listOfNames = [
    {
      key: `Aru`,
      caption: `Hello World.`,
      enableTags: true
    },
    {
      key: `Your Average "EMO" Enthusiast`,
      caption: `"Real Emo" only consists of the dc Emotional Hardcore scene and the late 90's Screamo scene. What is known by "Midwest Emo" is nothing but Alternative Rock with questionable real emo influence. When people try to argue that bands like My Chemical Romance are not real emo, while saying that Sunny Day Real Estate is, I can't help not to cringe because they are just as fake emo as My Chemical Romance (plus the pretentiousness). Real emo sounds ENERGETIC, POWERFUL and somewhat HATEFUL. Fake emo is weak, self pity and a failed attempt to direct energy and emotion into music. Some examples of REAL EMO are Pg 99, Rites of Spring, Cap n Jazz (the only real emo band from the midwest scene) and Loma Prieta. Some examples of FAKE EMO are American Football, My Chemical Romance and Mineral EMO BELONGS TO HARDCORE NOT TO INDIE, POP PUNK, ALT ROCK OR ANY OTHER MAINSTREAM GENRE`,
      enableTags: true
    },
    {
      key: `Dan`,
      caption: `Hi mom!`,
      enableTags: true
    },
    {
      key: `Dominic Torretto`,
      caption: `Lorem ipsum dolor may be great, *loads shotgun* but not as great as family.`,
      enableTags: false
    },
    {
      key: `Jackson Cinco`,
      caption: `5 vs 5, anyone?`,
      enableTags: true
    },
    {
      key: `James`,
      caption: `... Bruh`,
      enableTags: false
    },
    {
      key: `Robin Porterson`,
      caption: `Look at the sky, I'm still here`,
      enableTags: false
    },
    {
      key: 'Jonathan Sena',
      caption: `WHAT? 😳😳😳 \nYOU 🤡🤡 CAN 🔪🥫 SEE 💪👀 \nME 👁️👄👁️ ?!?!`,
      enableTags: true
    },
    {
      key: `Red Sussy`,
      caption: `STOP POSTING ABOUT AMONG US! I'M TIRED OF SEEING IT! AAAAAAAAAAAAAAAAAAHGESFG`,
      enableTags: true
    },
    {
      key: `Jimmy`,
      caption: `Brain Blast!!`,
      enableTags: false
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarText}>RN SocMed UI</Text>
        <View
          flexDirection='row-reverse'>
          <Button
            color={primaryColor}
            title="Post" />
          <Button
            color={red}
            title="Browse" />
        </View>
      </View>
      <StatusBar
        style={styles.status} />
      <FlatList
        data={listOfNames}
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh()} />
        }
        renderItem={
          ({ item }) =>
            <View style={styles.postLayout}>
              <Text style={styles.nameClickable}>
                {item.key}
              </Text>
              <Text style={styles.postCaption}>
                {item.caption}
              </Text>

              {
                item.enableTags ?
                  <View style={styles.chipLayout}>
                    <Chip
                      style={styles.chipDesign}
                      fontSize='1'
                      onPress={() => console.log('Based')}>
                      Based
                    </Chip>
                    <Chip
                      style={styles.chipDesign}
                      fontSize='5'
                      onPress={() => console.log('Nice')}>
                      Sigma
                    </Chip>
                  </View> :
                  <View></View>
              }
              <Divider style={styles.dividerMargin} />
            </View>
        }
      />
    </SafeAreaView>
  );
}

function onRefresh() {
  console.log('Refresh logic here.');
}

const red = '#8E1600';
const primaryColor = "#597199";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
  chipDesign: {
    alignSelf: 'baseline',
  },
  chipLayout: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5
  },
  dividerMargin: {
    marginTop: 10
  },
  nameClickable: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  postLayout: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5
  },
  postCaption: {
    textAlign: 'justify'
  },
  status: {
    backgroundColor: Platform.OS === 'android' ? primaryColor : '#ffffff',
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  toolbarText: {
    color: primaryColor,
    fontWeight: 'bold',
    fontSize: 25,
  }
});
