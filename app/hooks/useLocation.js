import { Alert } from "react-native";
import * as Location from "expo-location";
import { useState, useEffect } from "react";

const useLocation = () => {
  const [location, setLocation] = useState();

  const regionFrom = (lat, lon, accuracy) => {
    const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
    const circumference = (40075 / 360) * 1000;

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = accuracy / oneDegreeOfLongitudeInMeters;

    return {
      latitude: lat,
      longitude: lon,
      latitudeDelta: Math.max(0, latDelta),
      longitudeDelta: Math.max(0, lonDelta),
    };
  };

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        alert("Permission to access location was denied");
        return;
      }
      const {
        coords: { latitude, longitude, accuracy },
      } = await Location.getCurrentPositionAsync();
      setLocation(regionFrom(latitude, longitude, accuracy));
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
