import axios from 'axios';
import { API_URL } from '../config';

export const enviarEmailContacto = async (data) => {
  const response = await axios.post(`${API_URL}/send-email/contact`, data);
  
  return {
    message: response.data.message,
    status: response.data.status
  };
};


export const enviarEmailContactoReservacion = async (data) => {
    const response = await axios.post(`${API_URL}/send-email/contact-reservacion`, data);
    
    return {
      message: response.data.message,
      status: response.data.status
    };
  };
  