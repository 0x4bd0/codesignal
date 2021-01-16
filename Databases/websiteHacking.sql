CREATE PROCEDURE websiteHacking()
    SELECT id,login,name
    FROM users
    WHERE type='user'
    OR type IS NOT NULL
    ORDER BY id;
