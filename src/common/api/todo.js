const originUrl = new URL('http://localhost:8000/api/todo/');

export const getToDoList = (() => {
 const url = new URL('/api/todo/', originUrl);
 return new Promise( (resolve, reject) => {
   fetch(url.href)
   .then( res => res.json() )
   .then( json => resolve(json) )
   .catch( () => reject([]) );
 });
});

export const postCreateTodo = (name) => {
  const url = new URL('/api/todo/', originUrl);
  return new Promise( resolve => {
    fetch(url.href, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name
      })
    })
    .then( res => res.json() )
    .then( data => resolve(data) );
  });
};

export const patchCheckTodo = ((id, check) => {
  const url = new URL(`/api/todo/${id}/`, originUrl);
  fetch(url.href, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      checked: check
    })
  });
});

export const deleteTodo = ((id) => {
  const url = new URL(`/api/todo/${id}/`, originUrl);
  fetch(url.href, { method: 'DELETE' });
});
