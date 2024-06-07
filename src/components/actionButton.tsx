// ActionButton.tsx (renamed to .tsx for TypeScript)
import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ActionButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  color: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onPress, title, color }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 15,
    marginTop: 15,
    alignItems: 'center',
    width: '85%',
    height: 60,
    marginBottom:10// Adjust the width as needed
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding:5
  },
});

export default ActionButton;