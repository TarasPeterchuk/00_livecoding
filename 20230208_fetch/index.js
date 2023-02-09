const formElem = document.querySelector('.login-form');

const serverUrl = 'htps://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

function createUserHandler(event) {
  event.preventDefault();

  // read form

  const user = {
    email: 'taras@gmail.com',
    name: 'Taras',
    password: '123',
  };

  // input : string (url), obj (params)
  // output : promise
  const res = fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    //then - input - (callback: fullfield, callback:rejected)

    //callback
    //input:  result of promise
    //output:  promise
    .then(
      res => {
        // if (!res.ok) {
        //   throw new Error();
        // }
        console.log('ok');
        return res.json();
      },
      () => {
        console.log('error');
      },
    );
  // .then(body => {
  //   console.log(body);
  //   alert(JSON.stringify(body));
  // });
  console.log(res);
}

formElem.addEventListener('submit', createUserHandler);
