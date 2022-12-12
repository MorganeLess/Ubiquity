import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, EventEmitter } from 'react-native';
import { Characteristic } from 'react-native-ble-plx';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Base64 } from '../BleLib/base64';

type CharacteristicCardProps = {
  char: Characteristic;
};

const decodeBleString = (value: string | undefined | null): string => {
  if (!value) {
    return '';
  }
  return Base64.decode(value).charCodeAt(0);
};

const CharacteristicCard = ({ char }: CharacteristicCardProps) => {
  /*const [measure, setMeasure] = useState('');
  const [descriptor, setDescriptor] = useState<string | null>('');

  useEffect(() => {
    // discover characteristic descriptors
    char.descriptors().then((desc) => {
      desc[0]?.read().then((val) => {
        if (val) {
          setDescriptor(Base64.decode(val.value));
        }
      });
    });

    // read on the characteristic 👏
    char.monitor((err, cha) => {
      if (err) {
        console.warn('ERROR');
        return;
      }
      // each received value has to be decoded with a Base64 algorythm you can find on the Internet (or in my repository 😉)
      setMeasure(decodeBleString(cha?.value));
    });
  }, [char]);*/

  // write on a charactestic the number 6 (e.g.)
  const writeCharacteristic = (text : string) => {
    // encode the string with the Base64 algorythm
    char
      .writeWithResponse(Base64.encode(text))
      .then((res) => {
        console.warn('Success');
        console.log(Base64.decode(res.value))
      })
      .catch((e) => console.log('Error', e));
  };

  const [text,setText] = useState('');
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  return (
    <View>
    <TouchableOpacity
      key={"UUID : "  + char.serviceUUID}
      style={styles.container}
      onPress={handleClick}>
      <Text>{"UUID : " + char.serviceUUID}</Text>
      <Text>{`isIndicatable : ${char.isIndicatable}`}</Text>
      <Text>{`isNotifiable : ${char.isNotifiable}`}</Text>
      <Text>{`isNotifying : ${char.isNotifying}`}</Text>
      <Text>{`isReadable : ${char.isReadable}`}</Text>
      <TouchableOpacity>
        <Text>{`isWritableWithResponse : ${char.isWritableWithResponse}`}</Text>
      </TouchableOpacity>
      <Text>{`isWritableWithoutResponse : ${char.isWritableWithoutResponse}`}</Text>
    </TouchableOpacity>
    {isShown && char.isWritableWithResponse && (
    <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Enter value"
                onChangeText={(text) => setText(text)}
                value={text}
            />
            <Button title="submit" onPress={() => writeCharacteristic(text)} />
        </View>
  )}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    color : 'black',
    marginVertical: 12,
    borderRadius: 16,
    shadowColor: 'rgba(60,64,67,0.3)',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 12,
  },
  input:{
    borderWidth:1,
    marginBottom:10,
    padding:10,
    width:'100%',
    borderRadius:10,
    backgroundcolor : 'black'
},
  measure: { backgroundColor: 'black', fontSize: 24 },
  descriptor: { backgroundColor: 'black', fontSize: 24 },
});

export { CharacteristicCard };