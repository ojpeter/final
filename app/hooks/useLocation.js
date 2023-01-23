import { useEffect, useState } from "react";
import * as Location from "expo-location";
import Geolocation from 'react-native-geolocation-service';

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const location = await Location.getCurrentPositionAsync({ accuracy: 1 });

      setLocation(location);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};


// if (hasLocationPermission) {
//   Geolocation.getCurrentPosition(
//     (position) => {
//       setLocation(position);
//     },
//     (error) => {
//       // See error code charts below.
//       console.log(error.code, error.message);
//     },
//     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//   );
// }