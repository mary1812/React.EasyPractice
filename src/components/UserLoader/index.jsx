import React, { useState, useEffect } from 'react';


function UserLoader () {

  const [users, setUsers] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoad(true);
    fetch('/users.json')
    .then((res) => res.json())
    .then((data) => {
      setUsers(data);
      setLoad(false);
    })
    .catch((err) => {
      setErr(err);
      setLoad(false);
    });
    }, [])

  if (isLoad) {
    return <div>LOADING ...</div>;
  }

  if (err) {
    return <div>{err.message}</div>;
  }

    return ( <ul>
  {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    ); 
}

export default UserLoader;
