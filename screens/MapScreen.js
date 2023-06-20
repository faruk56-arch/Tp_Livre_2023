import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = props => {
    const [location, setLocation] = useState(null);

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission to access location was denied');
            return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
    };

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <View style={styles.container}>
            {location ? (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.005, // Zoom level is closer now
                        longitudeDelta: 0.005, // Zoom level is closer now
                    }}
                >
                    <Marker
                        coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
                        title="Your Location"
                    />
                </MapView>
            ) : (
                <Text>Getting location...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default MapScreen;
