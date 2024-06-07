import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
type CenterButtonProps = {
  onPress: () => void; // This specifies that onPress is a function that doesn't take any arguments and returns void
};
const CenterButton: React.FC<CenterButtonProps> = ({ onPress }) => {
  const radius = 100;
  const center = { x: 200, y: 200 }; // Center position of the circle

  const positions = [
    { x: center.x + radius * Math.cos(0), y: center.y + radius * Math.sin(0) },
    { x: center.x + radius * Math.cos(Math.PI / 2), y: center.y + radius * Math.sin(Math.PI / 2) },
    { x: center.x + radius * Math.cos(Math.PI), y: center.y + radius * Math.sin(Math.PI) },
  ];

  const animatedX = useSharedValue(center.x);
  const animatedY = useSharedValue(center.y);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: animatedX.value,
      top: animatedY.value,
    };
  });

  const handlePress = () => {
    animatedX.value = withTiming(positions[0].x);
    animatedY.value = withTiming(positions[0].y);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.centerButton, animatedStyles]}>
        <TouchableOpacity onPress={handlePress}>
          <Ionicons name="add-circle-outline" size={40} color="#7F3DFF" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    bottom: 15,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#7F3DFF',
    elevation: 5,
  },
});

export default CenterButton;
