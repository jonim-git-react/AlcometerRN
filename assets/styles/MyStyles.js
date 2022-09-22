import { StyleSheet } from "react-native";

export const BrightTheme = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  switchContainer: {
    flexDirection: 'row',
    textAlignVertical: "center",
    padding: 5,
  },
  header: {
    fontFamily: 'PoppinsRegular',
    fontWeight: "bold",
    alignSelf: 'center',
    fontSize: 20,
    borderRadius: 30,
    paddingBottom: 20,
    color: '#274060'
  },
  radioButtons: {
    fontFamily: 'PoppinsRegular',
    fontSize: 50
  },
  result: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 30,
    borderColor: 'black',
    borderStyle: "solid",
    backgroundColor: "white",
    borderWidth: 2,
    padding: 10,
    paddingHorizontal: 50
  },
  resultLow: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 30,
    borderColor: 'black',
    backgroundColor: "#4DA167",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 10,
    paddingHorizontal: 50
  }, resultMed: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 30,
    borderColor: 'black',
    backgroundColor: "#FFC53A",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 10,
    paddingHorizontal: 50
  }, resultHigh: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 30,
    borderColor: 'black',
    backgroundColor: "#C52233",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 10,
    paddingHorizontal: 50
  },
  label: {
    padding: 10,
    fontFamily: 'PoppinsRegular',
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: '#CCDBDC',
    minWidth: 100,
    marginLeft: 5,
    fontSize: 30,
    textAlign: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  button: {
    alignSelf: 'center',
    borderColor: 'white',
    borderStyle: "solid",
    borderRadius: 30,
    borderWidth: 2,
    padding: 1,
    margin: 20,
    backgroundColor: '#CCDBDC',
    fontWeight: "bold",
    fontSize: 30,
    color: '#335c81',
    maxWidth: 'auto'
  }
})

export const DarkTheme = StyleSheet.create({
  container: {
    ...BrightTheme.container, 
    backgroundColor: 'grey'
  },
  switch: {
    ...BrightTheme.switch
  },
  label: {
    ...BrightTheme.label,
  },
  switchContainer: {
    ...BrightTheme.switchContainer
  },
  header: {
    ...BrightTheme.header
  },
  textInput: {
    ...BrightTheme.textInput,
    backgroundColor:'blue'
  },
  resultLow: {
    ...BrightTheme.resultLow
  },
  button: {
    ...BrightTheme.button
  },
  radioButtons: {
    ...BrightTheme.radioButtons,
  },
  result: {
    ...BrightTheme.result,
    backgroundColor: "#CCDBDC",
  },
  resultLow: {
  ...BrightTheme.resultLow,
    backgroundColor: "#4DA167",
  }, resultMed: {
  ...BrightTheme.resultMed,
    backgroundColor: "#FFC53A",
  }, resultHigh: {
  ...BrightTheme.resultHigh,
    backgroundColor: "#C52233",
  },
  label: {
  ...BrightTheme.label,
  },
  textInput: {
    ...BrightTheme.textInput,
    backgroundColor: '#425f61',
    color:'#b6cccd'
  },
  button: {
    ...BrightTheme.button,
    backgroundColor: '#425f61',
    color: '#b6cccd',
  }
});