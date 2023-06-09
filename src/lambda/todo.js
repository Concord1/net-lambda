import axios from 'axios';

export function handler(event, context, callback) {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: res.data.title,
      });
    })
    .catch((err) => {
      callback(err);
    });
}