CREATE PROCEDURE suspectsInvestigation2()
BEGIN
	SELECT id,name,surname
    FROM Suspect
    WHERE 170 >= height
    OR upper(name) NOT LIKE "B%"
    OR upper(surname) NOT LIKE 'gre_n'
    ORDER BY id;
END