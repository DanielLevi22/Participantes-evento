import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#fff'
  },
  
  button: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 25
  }
})