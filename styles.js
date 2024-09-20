import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },


  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },

  activeTab: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ffd700',
    paddingBottom: 8,
    marginRight: 16,
  },

  inactiveTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    marginRight: 16,
    opacity: 0.5,
  },

  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 8,
  },

  badgeContainer: {
    backgroundColor: '#ffd700',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },

  searchInput: {
    flex: 1,
    padding: 8,
    fontSize: 16,
  },

  searchButton: {
    padding: 8,
  },

  filterButton: {
    padding: 8,
    marginLeft: 8,
  },

  listContainer: {
    paddingBottom: 16,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 1,
    borderColor: '#ddd',
    borderWidth: 1,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  cardID: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  cardStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },

  cardBody: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  locationTextContainer: {
    marginLeft: 8,
  },

  locationName: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  locationDate: {
    fontSize: 12,
    color: '#888',
  },

  floatingButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    backgroundColor: '#003366',
    borderRadius: 50,
    padding: 16,
    elevation: 3,
  },


  map: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },

  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#000',
  },

  gridButton: {
    position: 'absolute',
    bottom: 100, 
    width: 50,
    height: 50,
    backgroundColor: '#003366',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuButton: {
    alignItems: 'center',
  },

  menuText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },

  floatingActionButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    width: 56,
    height: 56,
    backgroundColor: '#003366',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  floatingActionButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    width: 56,
    height: 56,
    backgroundColor: '#003366',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  mapButton: {
    position: 'absolute',
    bottom: 210,  
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: '#003366',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  multiMenuContainer: {
    position: 'absolute',
    bottom: 160,  
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#003366',
    borderRadius: 30,
    padding: 5,
    elevation: 5,  
  },

  multiMenuButton: {
    backgroundColor: '#003366',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  multiMenuLabelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#003366',
    borderRadius: 20,
  },
  menuLabel: {
    color: 'white',
    marginLeft: 5,
    fontSize: 14,
  },
  


  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 4,
    marginBottom: 16,
    width: 343,  
    height: 44,  
    alignSelf: 'center',
    backgroundColor: 'white',
  },

  input: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: 'white',
    color: 'black', 
  },

  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 16,
    width: 343,  
    height: 44,  
    alignSelf: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  link: {
    color: 'black',
    fontWeight: 'bold',
  },

  label: {
    fontSize: 15,
    marginVertical: 5,
    marginLeft: 20,
  },

  errorText: {
    fontSize: 10,
    color: 'black',
    marginBottom: 16,
    marginLeft: 20,
  },

  confirmationText: {
    fontSize: 14, 
    color: '#333', 
    marginLeft: 15, 
    flexShrink: 1, 
    marginBottom: 10,
  },

  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginBottom: 16,
    width: 343,
    height: 44,
    alignSelf: 'center',
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },

  pickerContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  picker: {
    height: '100%',
    justifyContent: 'center',
  },

  phoneInput: {
    flex: 1,
    height: '100%',
    paddingLeft: 8,
  },

  phoneContainer: {
    width: '100%', 
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  
  codeText: {
    fontSize: 16,
    color: '#000',
  },

  verificationCodeInput: {
    width: '50%',  
    height: 40,  
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    textAlign: 'center',  
    fontSize: 18, 
    alignSelf: 'center', 
    backgroundColor: 'white',  
    marginVertical: 20,  
  },

  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#000',
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    overflow: 'hidden', 
  },
});