CREATE PROCEDURE suspectsInvestigation()
BEGIN
	SELECT id,name,surname
    FROM Suspect
    WHERE 170 >= height
    AND name LIKE "b%"
    AND upper(surname) LIKE 'gre_n';
END