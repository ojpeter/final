import { useContext } from 'react'
import AuthContext from '../auth/context'
import client from './client'

const endpoint1 = '/schedules.php'
const endpoint2 = '/booking.php'
const endpoint3 = '/travel_history.php'
const endpoint4 = '/seat_status.php'
const endpoint5 = '/schedule_seat_status.php'

// const { user } = useContext(AuthContext);

const getSchedules = () => client.get(endpoint1)

const addSchedule = (schedule, onUploadProgress) => {
  const data = {
    co_id: schedule.company.co_id,
    rid: schedule.routes.rid,
    takeoff_time: schedule.takeoff_time,
    takeoff_date: schedule.takeoff_date,
    travel_duration: schedule.travel_duration,
  }

  if (schedule.location)
    data.append('location', JSON.stringify(schedule.location))

  return client.post(endpoint2, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  })
}

const history = (uid) => {
  const data = {
    uid: uid,
  }
  client.post(endpoint3, data)
}

const scheduleSeatStatus = (schedule) => {
  const data = {
    travelDate: schedule.travelDate,
    sid: schedule.sid,
    co_name: schedule.co_name,
  }
  client.post(endpoint5, data)
}

const updateSchedule = (schedule, onUploadProgress) => {
  const data = {
    rid: schedule.routes.rid,
    sid: schedule.sid,
    co_id: schedule.company.co_id,
    takeoff_time: schedule.takeoff_time,
    travel_duration: schedule.travel_duration,
  }
  if (schedule.location)
    data.append('location', JSON.stringify(schedule.location))

  return client.post(endpoint3, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  })
}

const seatStatus = (seat) => {
  const data = {
    seat: seat.seat,
    vid: seat.vid,
  }

  return client.get(endpoint4, data)
}

export default {
  addSchedule,
  scheduleSeatStatus,
  getSchedules,
  updateSchedule,
  history,
  seatStatus,
}
