import client from './client'

const endpoint1 = '/vehicles.php'
const endpoint2 = '/vehicle_register.php'
const endpoint3 = '/vehicle_update.php'
const endpoint4 = '/vehicle_tracking.php'
const endpoint5 = '/vehicle_categories.php'

const getVehicles = () => client.get(endpoint1)
const getVehiclesTypes = () => client.get(endpoint5)
const getVehiclesByCompany = (vehicle) => {
  const data = {
    co_id: vehicle.co_id,
  }

  return client.post(endpoint1, data)
}

const addVehicle = (vehicle, onUploadProgress) => {
  const data = {
    num_plate: vehicle.num_plate,
    vehicle_type: vehicle.vtype.value,
    capacity: vehicle.capacity,
    co_id: vehicle.cname.co_id,
  }

  // if (vehicle.location)
  //   data.append('location', JSON.stringify(vehicle.location))

  return client.post(endpoint2, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  })
}

const updateVehicle = (vehicle, onUploadProgress) => {
  const data = {
    num_plate: vehicle.num_plate,
    co_id: vehicle.cname.co_id,
    vid: vehicle.vid,
    capacity: vehicle.capacity,
    vtype: vehicle.vtype.value,
  }
  // if (vehicle.location)
  //   data.append('location', JSON.stringify(vehicle.location))

  return client.post(endpoint3, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  })
}

const vehicleTracking = (vehicle) => {
  const data = {
    num_plate: vehicle.num_plate,
    uid: vehicle.uid,
  }

  return client.post(endpoint4, data)
}

export default {
  addVehicle,
  getVehicles,
  getVehiclesByCompany,
  updateVehicle,
  vehicleTracking,
}
