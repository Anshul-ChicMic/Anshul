// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// interface CustomHeaderProps {
//   navigation: any;
//   title: string;
//   backgroundColor: string;
// }

// const CustomHeader: React.FC<CustomHeaderProps> = ({ navigation, title }) => {
//   return (
//     <View style={styles.headerContainer}>
//     {navigation.canGoBack() ? (
//       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//         <Text style={styles.backButtonText}>←</Text>
//       </TouchableOpacity>
//     ) : null}
//       <Text style={styles.headerTitle}>{title}</Text>
      
//     <View style={styles.placeholder} />
//   </View>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     height: 150,
//     backgroundColor: '#FFFFFF',
//   },
//   backButton: {
//     paddingHorizontal: 10,
//   },
//   backButtonText: {
//     fontSize: 30,
//   },
//   headerTitle: {
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   placeholder: {
//     width: 50, // same width as the back button to balance the layout
//   },
// });

// export default CustomHeader;
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CustomHeaderProps {
  navigation: any;
  title: string;
  backgroundColor: string;

}

const CustomHeader: React.FC<CustomHeaderProps> = ({ navigation, title, backgroundColor ,}) => {
  return (
    <View style={[styles.headerContainer, { backgroundColor }]}>
      {navigation.canGoBack() ? (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      ) : null}
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 120,
  },
  backButton: {
    paddingHorizontal: 10,
  },
  backButtonText: {
    fontSize: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 50, // same width as the back button to balance the layout
  },
});

export default CustomHeader;
