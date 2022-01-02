SELECT id, name, email, cohort_ID 
  FROM students 
  WHERE github IS NULL 
  ORDER BY cohort_id;