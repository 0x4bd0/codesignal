CREATE PROCEDURE marketReport()
BEGIN
	select ifnull(country, "Total:") as country, count(competitor) as competitors
    from foreignCompetitors
    group by country
    with rollup;
END