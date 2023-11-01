const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const students = data.trim().split('\n').slice(1);

      const studentsByField = { CS: 0, SWE: 0 };
      const csStudents = [];
      const sweStudents = [];

      let allStudents = 0;
      students.forEach((student) => {
        allStudents += 1;

        const [name, , , field] = student.split(','); // obtener columna 'name & field'
        if (field === 'CS') {
          studentsByField.CS += 1;
          csStudents.push(name.trim());
        } else if (field === 'SWE') {
          studentsByField.SWE += 1;
          sweStudents.push(name.trim());
        }
      });

      console.log(`Number of students: ${allStudents}`);
      console.log(`Number of students in CS: ${studentsByField.CS}. List: ${csStudents.join(', ')}`);
      console.log(`Number of students in SWE: ${studentsByField.SWE}. List: ${sweStudents.join(', ')}`);
    })
    .catch(() => {
      throw Error('Cannot load the database');
    });
}

module.exports = countStudents;
