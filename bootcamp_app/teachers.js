const { Pool } = require('pg');

const pool = new Pool({
  user: 'marthastaus',
  password: 'Ellie666',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
;
`)
.then(res => {
  res.rows.forEach(assistance => {
    console.log(`${assistance.cohort}: ${assistance.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));