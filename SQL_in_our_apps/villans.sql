DROP TABLE IF EXISTS movie_villans CASCADE;

CREATE TABLE movie_villans (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50),
    movie VARCHAR(50)
);

INSERT INTO movie_villans (name, movie) VALUES ('Agent Smith', 'The Matrix');
INSERT INTO movie_villans (name, movie) VALUES ('Voldemort', 'Harry Potter');
INSERT INTO movie_villans (name, movie) VALUES ('Wicked Witch of the West', 'Wizard of Oz');
INSERT INTO movie_villans (name, movie) VALUES ('Thanos', 'Avengers');
INSERT INTO movie_villans (name, movie) VALUES ('The Joker', 'The Dark Knight');
INSERT INTO movie_villans (name, movie) VALUES ('Miranda Priestly', 'Devil Wears Prada');
