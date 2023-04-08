import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input: {
    flex: 1,
    marginRight: 12,
    height: 54,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: 'white',
    padding: 8,
  },
  form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42
      
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 25
  },
  listEmpetyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  }
});