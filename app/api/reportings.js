import client from './client'

const endpoint1 = '/reports.php'
const endpoint2 = '/addreport.php'
const endpoint3 = '/disease_update.php'
const endpoint4 = '/reportings'

const getReports = () => client.get(endpoint1)

const addReport = (report, onUploadProgress) => {
  const data = {
    diseaseID: report.disID,
    phoneNo: report.phone,
    signs: report.signs,
    latitude: report.lat,
    longitude: report.long,
  }

  return client.post(endpoint2, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  })
}

const updateDisease = (company, onUploadProgress) => {
  const data = {
    co_name: company.co_name,
    co_address: company.co_address,
    co_phone: company.co_phone,
    co_email: company.co_email,
    co_account: company.co_account,
    co_id: company.co_id,
  }

  // if (company.location)
  //   data.append('location', JSON.stringify(company.location))

  return client.post(endpoint3, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  })
}

const getReportings = () => client.get(endpoint4)

export default {
  addReport,
  getReports,
  getReportings,
  updateDisease,
}
