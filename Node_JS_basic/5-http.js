const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const handleRequest = async (req, res) => {
  const { url } = req;
  let response = '';

  try {
    if (url === '/') {
      response = 'Hello Holberton School!';
    } else if (url === '/students') {
      const data = await countStudents('database.csv');
      const { students } = data;
      response = `This is the list of our students\n
        Number of students: ${data.totalStudents}\n
        Number of students in CS: ${students.CS.count}. List: ${students.CS.list.join(', ')}\n       
        Number of students in SWE: ${students.SWE.count}. List: ${students.SWE.list.join(', ')}`;    
    } else {
      res.statusCode = 404;
      response = 'Not Found';
    }
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    response = 'Internal Server Error';
  } finally {
    res.end(response);
  }
};

const app = http.createServer(handleRequest);

app.listen(port, () => {
  console.log(`Server running on port ${PORT}`);                                                                           23,4          All 
});

module.exports = app;
