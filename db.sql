-- Active: 1737679560011@@dpg-cu9e24hu0jms73fe07j0-a.oregon-postgres.render.com@5432@codex_11pa@public
create table  cars 
(
    id_car serial PRIMARY KEY,
    make text,
    model text,
    year int
);

create table people (
    people_id serial PRIMARY KEY,
    name text,
    last_name text,
    age numeric
);

insert into cars 
(make, model, year)
values 
('Toyota', 'Camry', 2020),
('Tesla', 'Tesla', 2024);