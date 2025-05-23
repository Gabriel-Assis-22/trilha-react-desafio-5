import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://ytiycozcwhbohfmktekf.supabase.co/rest/v1',
    headers: {
        apikey: "SUPABASE_CLIENT_ANON_KEY",
        authorization: "Portador SUPABASE_CLIENT_ANON_KEY"
        

        // apikey: "SUPABASE_CLIENT_ANON_KEY",
        // Authorization: "Bearer SUPABASE_CLIENT_ANON_KEY"

    }
})