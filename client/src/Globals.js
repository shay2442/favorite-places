export const baseUrl = 'http://localhost:3000';
export const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
}

export const getToken = () => {
  return {
    'Authorization': `bearer ${ localStorage.getItem('jwt') }`
  }
}

