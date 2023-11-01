const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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

    console.log(`Número de estudiantes: ${allStudents}`);
    console.log(`Número de estudiantes en CS: ${studentsByField.CS}. Lista: ${csStudents.join(', ')}`);
    console.log(`Número de estudiantes en SWE: ${studentsByField.SWE}. Lista: ${sweStudents.join(', ')}`);
  } catch (e) {
    throw Error('No se puede cargar la base de datos');
  }
}

module.exports = countStudents;
