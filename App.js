import { useState } from 'react';
import { Alert, Switch, Text, TextInput, Button, View, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import NumericInput from 'react-native-numeric-input';
import RadioForm from 'react-native-simple-radio-button';
import { DarkTheme, BrightTheme } from './MyStyles'

export default function App() {

  const [weight, setWeight] = useState(null)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const theme = isDarkTheme ? DarkTheme : BrightTheme;

  function changeTheme() {
    setIsDarkTheme(prev => !prev)
    //tai lambdana ()=>setFancy(prev => !prev)}
  }

  function calculateBloodAlcoholLevel() {

    if (weight !== null) {
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
  } else {
    console.log("input empty");
  }
  
}


const genders = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
]

return (
  <ScrollView>
    <Switch
      // trackColor={{ false: "#767577", true: "#81b0ff" }}
      // thumbColor={isD ? "#f5dd4b" : "#f4f3f4"}
      onValueChange={changeTheme}
      value={isDarkTheme}
    />
    <Text>Alcometer</Text>
    <Text>Weight</Text>
    <TextInput
      name="weightInput"
      onChangeText={weight => setWeight(weight)}
      value={weight}
      keyboardType="numeric"
    />
    <Text>Bottles</Text>
    <NumericInput
      minValue={0}
      onChange={bottles => setBottles(bottles)}
      keyboardType={'number-pad'}
    />
    <Text>Time</Text>
    <NumericInput
      minValue={0}
      onChange={time => setTime(time)}
      keyboardType={'number-pad'}
    />
    <RadioForm
      radio_props={genders}
      initial={'0'}
      onPress={value => setGender(value)}
    />

    <Text style={theme.label}>{result.toFixed(2)}</Text>

    <Button title='CALCULATE' onPress={calculateBloodAlcoholLevel} />
    <Button title='Change theme' onPress={changeTheme}></Button>
  </ScrollView>
);
}
