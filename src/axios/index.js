import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api-santiago.herokuapp.com/api/'
})



const sendEmail = async (data) => {
  const response = await instance({
    method: 'post',
    url: 'contact/insertar',
    data: data
  });

  return response
};

export {
  sendEmail
}