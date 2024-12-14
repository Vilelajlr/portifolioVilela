import axios from 'axios';

export async function enviarEmail(name: string, email: string, message: string) {
    try {
        const response = await axios.post( import.meta.env.VITE_API_URL , {
            name,
            email,
            message
        });
        return response.data;
    } catch (error) {
        console.error('Error ao enviar email', error);
        throw error;
    }
}