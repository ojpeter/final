import client from './client'

const endpoint1 = '/routes.php'
const endpoint2 = '/route_register.php'
const endpoint3 = '/route_update.php'
const endpoint4 = '/route_vehicles.php'
const endpoint5 = '/route_vehiclesbyctime.php'

const getRoutes = () => client.get(endpoint1)

const addRoute = (route, onUploadProgress) => {
  const data = {
    route_name: route.route_name,
    route_via: route.route_via,
    route_viaLat: route.route_viaLat,
    route_viaLong: route.route_viaLong,
    route_start: route.route_start,
    routeStart_lat: route.routeStart_lat,
    routeStart_long: route.routeStart_long,
    route_ends: route.route_ends,
    routeEnd_lat: route.routeEnd_lat,
    routeEnd_long: route.routeEnd_long,
  }

  // if (route.location) data.append("location", JSON.stringify(route.location));

  return client.post(endpoint2, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  })
}

const updateRoute = (route, onUploadProgress) => {
  const data = {
    route_name: route.route_name,
    route_via: route.route_via,
    route_viaLat: route.route_viaLat,
    route_viaLong: route.route_viaLong,
    route_start: route.route_start,
    routeStart_lat: route.routeStart_lat,
    routeStart_long: route.routeStart_long,
    route_ends: route.route_ends,
    routeEnd_lat: route.routeEnd_lat,
    routeEnd_long: route.routeEnd_long,
  }
  return client.put(endpoint3, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  })
}

const getVehiclesByRid = (route) => {
  const data = {
    rid: route.value.rid,
  }
  return client.get(endpoint4, data)
}

const getRouteVehiclesByTime = (route) => {
  const data = {
    rid: route.value.rid,
  }
  return client.get(endpoint5, data)
}

export default {
  addRoute,
  getRoutes,
  updateRoute,
  getVehiclesByRid,
  getRouteVehiclesByTime,
}
