CREATE TABLE weapons (
    weapon text,
    character_id bigint references characters(id)
);

insert into weapons (weapon, character_id) values ('Sword', 1);
insert into weapons (weapon, character_id) values ('Face Blindness', 3);
insert into weapons (weapon, character_id) values ('Snark', 2);
insert into weapons (weapon, character_id) values ('Sword', 5);
