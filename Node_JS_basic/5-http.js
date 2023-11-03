const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    countStudents('database.csv')
      .then((data) => {
        const { students } = data;
        const response = `This is the list of our students\n
          Number of students: ${data.totalStudents}\n
          Number of students in CS: ${students.CS.count}. List: ${students.CS.list.join(', ')}\n        
          Number of students in SWE: ${students.SWE.count}. List: ${students.SWE.list.join(', ')}`;     
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(response);
      }).catch((e) => {
        console.error(e);
      });
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
