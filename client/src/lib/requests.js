const requests = {
  getCourseData: coursePath => (
    fetch(`${coursePath}header`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    })
      .then((response) => {
        if (response.ok) {
          console.log('This is in requests: ', response.body); // checking for value
          return response.json();
        }
        throw new Error(response.status);
      })
      .catch((err) => {
        console.error(err);
      })
  ),
};

export default requests;
