CREATE PROCEDURE mostExpensive()
BEGIN
	SELECT name
    FROM Products
    ORDER BY price*quantity DESC,NAME ASC
    LIMIT 1;
END