SELECT cohorts.name as cohort_name, COUNT(students.id) as student_count
  FROM cohorts JOIN students ON cohorts.id = cohort_id 
  GROUP BY cohort_name
  ORDER BY student_count
  