import axios from "axios";


export const getFakePost = async (limit) => {

    const { data } = await axios(`https://jsonplaceholder.typicode.com/photos?&_limit=${10}`);

    return data;
};

export const getPost = async (offset) => {

    const { data } = await axios(`/view/${offset}/10`);

    return data;
};

export const getMorePost = async (start) => {

    const { data } = await axios(`https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=10`);
    
    return data;
}
