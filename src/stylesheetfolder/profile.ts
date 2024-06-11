import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  paddingBottom:200,
    backgroundColor: '#F6F6F6',
    justifyContent:'center' // Light gray background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#7F3DFF', // Violet border color
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    color: '#777',
  },
  editButton: {
  
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  optionContainer: {
    marginTop:50,
    backgroundColor: 'white', // White background for options
    borderRadius: 20,
    elevation: 2, // Shadow effect for Android
    padding: 20,
    width: 386,
    height: 400,

  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:50,
  },
  optionIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
    tintColor: '#7F3DFF', // Violet color for icons
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    padding:15,
  },
});