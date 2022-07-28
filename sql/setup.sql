DROP table if exists games;

CREATE table games (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    year INT
);

INSERT INTO games (name, type, year) VALUES

('Halo', 'Action', 2000),
('Gears Of War', 'Action', 2006),
('Hit Man', 'Action', 2016),
('BorderLands', 'Action', 2015),
('BorderLands 2', 'Action', 2018),
('BorderLands 3', 'Action', 2019);






-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
