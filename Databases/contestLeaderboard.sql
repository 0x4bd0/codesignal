CREATE PROCEDURE contestLeaderboard()
BEGIN
	SELECT name
    FROM leaderboard
    ORDER BY score DESC
    LIMIT 8
    OFFSET 3;
END