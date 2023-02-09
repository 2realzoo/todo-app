import { useState, useEffect } from 'react';

const useFetch = (url) => {
  // const [data, setData] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   fetch(url)
  //     .then(res => {
  //       if (!res.ok) {
  //         throw Error('could not fetch the data for that resource');
  //       } 
  //       return res.json();
  //     })
  //     .then(data => {
  //       setIsPending(false);
  //       setData(data);
  //       setError(null);
  //     })
  //     .catch(err => {
  //       setIsPending(false);
  //       setError(err.message);
  //     })
  // }, [])
  
  // return [data, isPending, error];
  const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/todos')
            .then(res => res.json())
            .then(data => setTodos(data));
    }, [])
  return todos
}

 
export default useFetch;