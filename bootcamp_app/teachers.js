const { Pool } = require('pg');

const pool = new Pool({
  user: //username,
  password: //password,
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2] || 'JUL02';
// Store all potentially malicious values in an array.
const values = [`${cohortName}`];

pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1;`
, values)
.then(res => {
  res.rows.forEach(assistance => {
    console.log(`${assistance.cohort}: ${assistance.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));