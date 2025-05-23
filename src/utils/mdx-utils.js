import { } from '../services/api';

export const getPosts = async () => {
    const { data } = await api.get('/post');

    if (data) {
        return data;
    }
    return []
}