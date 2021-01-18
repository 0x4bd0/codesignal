CREATE PROCEDURE nullIntern()
BEGIN
	SELECT COUNT(id) AS number_of_nulls 
    FROM departments 
    WHERE description IS NULL
    OR UPPER(TRIM(description))='-' OR UPPER(TRIM(description))='NIL' OR UPPER(TRIM(description))='NULL';
END