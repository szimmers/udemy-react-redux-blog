import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=tiruk3j3';
//const API_KEY = '?key=1234';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

export function fetchPosts() {
	const url = `${ROOT_URL}/posts${API_KEY}`;
	const request = axios.get(url);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(values) {
	const url = `${ROOT_URL}/posts${API_KEY}`;
	const request = axios.post(url, values);

	return {
		type: CREATE_POST,
		payload: request
	};
}