import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font'
import { Alert, Switch, Text, TextInput, ScrollView, View, Pressable } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import RadioForm from 'react-native-simple-radio-button';
import { DarkTheme, BrightTheme } from './assets/styles/MyStyles'
export default function App() {

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const [loaded] = useFonts({
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
  })

  if (!loaded) {
   return null;
 }

  const theme = isDarkTheme ? DarkTheme : BrightTheme;

  function changeTheme() {
    setIsDarkTheme(prev => !prev)
    //tai lambdana ()=>setFancy(prev => !prev)}
  }

  function showAlert() {
    Alert.alert('You must enter your weight first.')
  }

  function calculateBloodAlcoholLevel() {
    if (weight == 0 || weight == null) {
      showAlert()
      return;
    }

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
  
  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]
  return (
    <ScrollView contentContainerStyle={theme.container}>
      <View style={theme.container}>
        <View style={theme.switchContainer}>
          <Switch
            style={theme.switchContainer}
            onValueChange={changeTheme}
            value={isDarkTheme}
          />
          {isDarkTheme ? <Text style={theme.switchContainer}>Dark mode</Text> :
            <Text style={theme.switchContainer}>Bright mode</Text>}
        </View>
        <Text style={theme.header}>Alcometer</Text>
        <Text style={theme.label}>Weight</Text>
        <TextInput
          style={theme.textInput}
          onChangeText={weight => setWeight(weight)}
          value={weight}
          keyboardType="numeric"
        />
        <Text style={theme.label}>Bottles</Text>
        <NumericInput
          minValue={0}
          onChange={bottles => setBottles(bottles)}
          keyboardType={'number-pad'}
          rightButtonBackgroundColor='#335C81'
          leftButtonBackgroundColor='#CCDBDC'
          rounded
          textColor='#335C81'
        />
        <Text style={theme.label}>Time</Text>
        <NumericInput
          minValue={0}
          onChange={time => setTime(time)}
          keyboardType={'number-pad'}
          rightButtonBackgroundColor='#335C81'
          leftButtonBackgroundColor='#CCDBDC'
          rounded
          textColor='#335C81'
        />
        <View style={{ marginRight: 50, marginVertical: 30 }}>
          <RadioForm
            style={theme.radioButtons}
            radio_props={genders}
            initial={0}
            onPress={value => setGender(value)}
            buttonColor={'#274060'}
            selectedButtonColor={'#335C81'}
            labelStyle={{ fontSize: 20, color: '#335C81' }}
          ></RadioForm>
        </View>
        {result > 0 && result <= 0.5 ? <Text style={theme.resultLow}>{result.toFixed(2)}</Text>
          : result > 0 && result <= 1 ? <Text style={theme.resultMed}>{result.toFixed(2)}</Text>
            : result > 0 && result > 1 ? <Text style={theme.resultHigh}>{result.toFixed(2)}</Text>
              : <Text></Text>
        }
        <Pressable
          style={theme.button}
          onPress={calculateBloodAlcoholLevel}>
          <Text style={theme.button}>
            Calculate
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
