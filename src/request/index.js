import axios from 'axios'
export function request(config) {
  const instamce = axios.create({
    baseURL:'http://localhost:3001',
    timeout:5000
  })
  return instamce(config)
}