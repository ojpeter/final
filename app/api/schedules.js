import client from './client'

const endpoint1 = '/schedules.php'
const endpoint2 = '/schedule_register.php'
const endpoint3 = '/schedule_update.php'
const endpoint4 = '/schedules_byroute.php'

const getSchedules = () => client.get(endpoint1)

const addSchedule = (schedule, onUploadProgress) => {
  const data = {
    co_id: schedule.company.co_id,
    rid: schedule.routes.rid,
    takeoff_time: schedule.takeoff_time,
    travel_duration: schedule.travel_duration,
  }

  return client.post(endpoint2, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  })
}

const getSchedulesByRid = (schedule) => {
  const data = {
    rid: schedule.route.rid,
  }

  return client.post(endpoint4, data)
}

const getSchedulesByRidRequest = (rid) => {
  const data = {
    rid: rid,
  }

  return client.post(endpoint4, data)
}

const updateSchedule = (schedule, onUploadProgress) => {
  const data = {
    rid: schedule.routes.rid,
    sid: schedule.sid,
    co_id: schedule.company.co_id,
    takeoff_time: schedule.takeoff_time,
    travel_duration: schedule.travel_duration,
  }

  return client.post(endpoint3, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  })
}
export default {
  addSchedule,
  getSchedules,
  getSchedulesByRidRequest,
  getSchedulesByRid,
  updateSchedule,
}
