SELECT languages.language, languages.percentage, name
FROM countries
LEFT JOIN languages
ON languages.country_code = countries.code



WHERE language ='Slovene'
ORDER BY languages.percentage DESC

