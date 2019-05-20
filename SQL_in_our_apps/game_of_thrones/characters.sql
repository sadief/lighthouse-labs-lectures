DROP TABLE IF EXISTS characters CASCADE;

CREATE TABLE characters (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50),
    castle VARCHAR(50)
);

INSERT INTO characters (name, castle) VALUES ('Ned', 'Winterfell');
INSERT INTO characters (name, castle) VALUES ('Sansa', 'Winterfell');
INSERT INTO characters (name, castle) VALUES ('Arya', 'Winterfell');
INSERT INTO characters (name, castle) VALUES ('Cersei', 'The Red Keep');
INSERT INTO characters (name, castle) VALUES ('Jaime', 'The Red Keep');
INSERT INTO characters (name, castle) VALUES ('Margaery Tyrell', 'Highgarden');
INSERT INTO characters (name, castle) VALUES ('Davos', 'Dragonstone');
