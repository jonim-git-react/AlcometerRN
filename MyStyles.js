import { StyleSheet } from "react-native";


export const BrightTheme = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    backgroundColor: 'orange',
    borderWidth: 2,
    padding: 10
  }
});

export const DarkTheme = StyleSheet.create({
  container: {
    ...BrightTheme.container, backgroundColor: 'grey'
  },
  label: {
    ...BrightTheme.label,
    backgroundColor: 'grey'
  }
});