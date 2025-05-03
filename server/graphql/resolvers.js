const todos = require('../data/data');
const axios = require('axios');

module.exports = {
    Todo:{
        user : async (todo)=>{
            try{
                const response= await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.id}`);
                return response.data;
            } catch(err){
                console.error("Error while fetching todo for API: ",err);
                throw new Error('Failed to fetch todos');
            }
        }
    },
    Query: {
        getTodos: async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                // Optionally, limit or transform the data
                return response.data.slice(0, 10); // return only first 10 todos
            } catch (err) {
                console.error("Error while fetching todo for API: ",err);
                throw new Error('Failed to fetch todos');
            }
        },
        getAllUsers: async ()=>{
            try{
                const response= await axios.get('https://jsonplaceholder.typicode.com/users');
                return response.data.slice(0,10);
            } catch(err){
                console.error("Error while fetching todo for API: ",err);
                throw new Error('Failed to fetch todos');
            }
        },
        getUser: async( parent,{id})=>{
            try{
                const response= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                return response.data.slice(0,10);
            } catch(err){
                console.error("Error while fetching todo for API: ",err);
                throw new Error('Failed to fetch todos');
            }
        }
    }
};
