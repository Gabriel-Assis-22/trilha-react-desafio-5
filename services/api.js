import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://ytiycozcwhbohfmktekf.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0aXljb3pjd2hib2hmbWt0ZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMDg1NzYsImV4cCI6MjA2MzU4NDU3Nn0.4jQ3v5JKNbociwCb11qiAsmXDTplh9oyQDLD5Zaok1Q",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0aXljb3pjd2hib2hmbWt0ZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMDg1NzYsImV4cCI6MjA2MzU4NDU3Nn0.4jQ3v5JKNbociwCb11qiAsmXDTplh9oyQDLD5Zaok1Q`
    }
});

// api.get('/posts')
//   .then(res => console.log(res.data))
//   .catch(err => console.error(err));