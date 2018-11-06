const requests = {
  getCourseData: courseId => (
    fetch(`/courses/${courseId}/header`)
      .then((response) => {
        if (response.ok) {
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
