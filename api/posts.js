import axios from "axios";


export const getPost = async (limit) => {

    const { data } = await axios(`https://jsonplaceholder.typicode.com/photos?&_limit=${10}`);

    return data;
};

export const getMorePost = async (start) => {

    const { data } = await axios(`https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=10`);
    
    return data;
}
