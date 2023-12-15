CREATE TABLE dog (
    id bigint generated by default as identity primary key,
    breed text NOT NULL,
    color text NOT NULL
);

INSERT INTO dog (breed, color)
VALUES
('Am Bulldog', 'White'),
('Blue Tick', 'Grey'),
('Labrador', 'Black'),
('Gr Shepard', 'Brown');