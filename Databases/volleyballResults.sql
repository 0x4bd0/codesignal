CREATE PROCEDURE volleyballResults()
BEGIN
	SELECT name,country,scored,missed,wins
    FROM results
    ORDER BY wins ASC;
END