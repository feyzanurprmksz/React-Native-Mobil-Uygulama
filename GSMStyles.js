import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: 'white', 
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: 'black', 
    marginBottom: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },

  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    paddingHorizontal: 40,
  },

  codeInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'black', 
    borderRadius: 8,
    textAlign: 'center',
    color: 'black', 
    fontSize: 24,
    backgroundColor: 'white', 
  },

  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 16,
    width: '80%',
    alignSelf: 'center',
  },

  buttonText: {
    color: 'black', 
    fontSize: 16,
    fontWeight: 'bold',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },

  link: {
    color: 'black', 
    fontWeight: 'bold',
    marginLeft: 8,
  },

  timer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
  },
});
