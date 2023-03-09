const authUser = JSON.parse(localStorage.getItem('user') || '{}');

const headers = {
  'Content-Type': 'application/json',
  'Authorization': authUser.jwt !== undefined ? 'Bearer ' + authUser.jwt : ""
} 

const headerFormData = {
  'Authorization': authUser.jwt !== undefined ? 'Bearer ' + authUser.jwt : ""
}

const setHeaderAuthorization = function(jwt: String){
  headers.Authorization = 'Bearer ' + jwt;
  headerFormData.Authorization = 'Bearer ' + jwt;
}

const get = async <T>(url: string) => {

  const response = await fetch(process.env.REACT_APP_URL_API + url, {
    method: 'GET',
    headers:headers
  })
  return await response.json() as T
}

const post = async <T>(url: string, body: any, isFormData:boolean = false) => {
console.log('Valor de formData: ', isFormData);
  const response = await fetch(process.env.REACT_APP_URL_API + url, {
    method: 'POST',
    headers: (isFormData) ? headerFormData: headers,
    body
  })
  return await response.json() as T
}

const put = async <T>(url: string, body: any, isFormData:boolean = false) => {
  const response = await fetch(process.env.REACT_APP_URL_API + url, {
    method: 'PUT',
    headers: (isFormData) ? headerFormData: headers,
    body
  })
  return await response.json() as T
}

const _delete = async <T>(url: string) => {
  const response = await fetch(process.env.REACT_APP_URL_API + url, {
    method: 'DELETE',
    headers:headers
  })
  return await response.json() as T
}

export const http = {
  get,
  post,
  put,
  delete: _delete,
  setHeaderAuthorization
}
