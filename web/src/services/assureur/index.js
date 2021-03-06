import {API_ROUTE} from 'api/routes'

export function CreateUser(data){
  const url = `${API_ROUTE}/auth/signup`;
  return (
    fetch(url, {
      method:"POST",
      headers:{
        "Accept": "application/json",
        "Content-type": "application/json",
      },
      body:JSON.stringify(data)
    })
    .then(response => (
      response.json().then(json => {
        if(!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    ))
  )
}