CREATE PROCEDURE personalHobbies() 
BEGIN 
  SELECT name 
  FROM   people_hobbies 
  WHERE  hobbies LIKE "%sports%" 
  AND hobbies LIKE "%reading%" 
  ORDER  BY name; 
END 