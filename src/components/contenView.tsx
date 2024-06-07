// ContentView.tsx
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

interface ContentViewProps {
  backgroundColor: string;
  title: string;
  description: string;
  imageSource: ImageSourcePropType;
}

const ContentView: React.FC<ContentViewProps> = ({ backgroundColor, title, description, imageSource }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    width: '100%',
    height: '75%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 20,
  },
  image: {
    width: 312,
    height: 312,
    marginBottom: 20,
  },
  title: {
    fontSize:40,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
 padding:10,
    fontSize: 19,
    textAlign: 'center',
    color:'grey'
  },
});

export default ContentView;
