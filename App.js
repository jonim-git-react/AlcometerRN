import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm  from 'react-native-simple-radio-button';
import { DarkTheme, BrightTheme } from './MyStyles'

export default function App() {

  const [weight, setWeight] = useState(90)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const theme = isDarkTheme? DarkTheme : BrightTheme;

  function changeTheme() {
    setIsDarkTheme( prev => !prev )
    //tai lambdana ()=>setFancy(prev => !prev)}
  }

  function calculateBloodAlcoholLevel() {

    let grams = (bottles * 0.33) * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)
    let result = 0

    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7)
    } else {
      result = gramsLeft / (weight * 0.6)
    }
    if (result < 0) {
    setResult(0);
    } else {
      setResult(result)
    }
  }

  function changeWeight(weight) {
    setAge(weight);
   
  }

  function changeBottles(bottles) {
    setAge(bottles);
    
  }

  function changeTime(time) {
    setAge(time);
    
  }

  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]

  return (
    <View style={theme.container}>
      <Text>Alcometer</Text>
      <Text>Weight</Text>
      <TextInput 
      onChangeText={weight => setWeight(weight)}
      value={weight}
      keyboardType="numeric"
      ></TextInput>
      <Text>Bottles</Text>
      <TextInput
        onChangeText={bottles => setBottles(bottles)}
        keyboardType={'number-pad'}
      />
      <Text>Time</Text>
      <TextInput
      onChangeText={time => setTime(time)}
      keyboardType={'number-pad'}
    />
      {/* <DropDownPicker
        items={intensities}
        onSelect={(item, index) => setIntensity(item.value)}
        value={intensity}
        open={isOpen}
        setOpen={() => setIsOpen(prev => !prev)}
        setValue={i => setIntensity(i)}
      /> */}

      <RadioForm
        radio_props={genders}
        initial={0}
        onPress={value => setGender(value)}
      />

      <Text>{result.toFixed(2)}</Text>

      <Button title='CALCULATE' onPress={calculateBloodAlcoholLevel} />
      <Button title='Change theme' onPress={changeTheme}></Button>
    </View>
  );
}
