import client from './client'

const endpoint1 = '/diseases.php'
const endpoint2 = '/disease_register.php'
const endpoint3 = '/disease_update.php'
const endpoint4 = '/approved_reports.php'
const endpoint5 = '/reports.php'

const getDiseases = () => client.get(endpoint1)
const getReports = () => client.get(endpoint5)
const getApprovedReports = () => client.get(endpoint4)

const addDisease = (company, onUploadProgress) => {
  const data = {
    co_name: company.co_name,
    co_address: company.co_address,
    co_phone: company.co_phone,
    co_email: company.co_email,
    co_account: company.co_account,
  }

  // if (company.location)
  //   data.append('location', JSON.stringify(company.location))

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

export default {
  addDisease,
  getDiseases,
  updateDisease,
  getReports,
  getApprovedReports,
}
