import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Navigation } from 'react-native';

const MenuPage = ({ navigation }) => {
  const menuItems = [
    { name: 'Truck Tracking', icon: require('./assets/1.png'), route: 'MapScreen' },
    { name: 'Milk Run Status', icon: require('./assets/2.png') },
    { name: 'Analytics', icon: require('./assets/3.png') },
    { name: 'Warehouse Management', icon: require('./assets/4.png') },
    { name: 'Load Optimization', icon: require('./assets/5.png') },
    { name: 'Communication', icon: require('./assets/6.png') },
  ];

  const handleMenuItemPress = (route) => {
    if (route) {
      navigation.navigate(route);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/background.png')} style={styles.backgroundImage} />
      <View style={styles.content}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Menu</Text>
        </View>
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => handleMenuItemPress(item.route)}
            >
              <View style={styles.tile}>
                <Image source={item.icon} style={styles.icon} />
              </View>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingContainer: {
    marginTop: 50,
    marginBottom: 20,
  },
  heading: {
    fontSize: 33,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FC6D26',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    marginBottom: 20,
    width: '30%',
  },
  tile: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default MenuPage;
