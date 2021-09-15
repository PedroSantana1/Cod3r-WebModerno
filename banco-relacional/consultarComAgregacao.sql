SELECT
    regiao AS 'Região',
    sum(populacao) as Total
FROM estados
GROUP BY regiao
ORDER BY total DESC;