import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

// const _baseUrl = __IS_DEV__ ? 'http://localhost:8000' : 'https://production.ru';

export const $api = axios.create({
    // baseURL: _baseUrl,
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    },
});
