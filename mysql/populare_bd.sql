INSERT INTO user_data(user_id,email,parola) values (1,'vitalie@gmail.com','vitalie');
INSERT INTO user_data(user_id,email,parola) values (2,'daniel@gmail.com','daniel');
INSERT INTO user_data(user_id,email,parola) values (3,'elvis@gmail.com','elvis');

INSERT INTO abilitati(user_id,entry_id,skill) values (1,1,'Html5');
INSERT INTO abilitati(user_id,entry_id,skill) values (1,2,'Java');
INSERT INTO abilitati(user_id,entry_id,skill) values (1,3,'Php');
INSERT INTO abilitati(user_id,entry_id,skill) values (2,1,'Cpp');
INSERT INTO abilitati(user_id,entry_id,skill) values (2,2,'Java');
INSERT INTO abilitati(user_id,entry_id,skill) values (2,3,'Php');
INSERT INTO abilitati(user_id,entry_id,skill) values (3,1,'Cpp');
INSERT INTO abilitati(user_id,entry_id,skill) values (3,2,'Java');
INSERT INTO abilitati(user_id,entry_id,skill) values (3,3,'Php');

INSERT INTO alt_info(user_id,entry_id,start,stop,titlu,descriere) values (2,2,'2016-03-03','Prezent','Training Android','Training Android pentru incepatori pe parcursul a 6 saptamani in cadrul FiiPractic');
INSERT INTO alt_info(user_id,entry_id,start,stop,titlu,descriere) values (2,1,'2014-10-28','2014-10-28','Managing a Mobile World - SCC Services','');

INSERT INTO date_personale (user_id, nume, prenume, sex, varsta, nr_telefon, email, cale_poza, adresa, oras, salariu_dorit, tip_job, nivel_cariera, domeniu, post_dorit, relocare, obiectiv) VALUES ('2', 'Mateiciuc', 'Daniel', 'M', '20', '0748492673', 'daniel@gmail.com', NULL, 'Str. Cucanilor nr.7', 'Iasi', '400', 'Full-time', '1', 'IT', 'Developer', 'Nu', 'Obiective::::');

INSERT INTO educatie (user_id, entry_id, start, stop, nume_institutie, oras, profil) VALUES (2, 1, '2010-09-15', '2014-06-01', 'Colegiul Tehnic "Latcu-Voda"', 'Siret', 'Matematica - Informatica');
INSERT INTO educatie (user_id, entry_id, start, stop, nume_institutie, oras, profil) VALUES (2, 2, '2014-10-01', 'Prezent', 'Facultatea de informatica UAIC', 'Iasi', 'Informatica');

INSERT INTO experienta (user_id, entry_id, start, stop, nume_companie, domeniu, departament, descrierea_jobului) VALUES (2, 1, '2015-08-23', '2015-10-01', 'Gfk Romania', 'Junior Programmer', 'IT', 'Working on Confirmit platform.
My main activity was creating questionnaires involving:
- communicate with the database to carry out the tests
- Javascript to communicate between pages / formatting more complex page
layout or question / retrieving responses and their management in future
questions (for example: a question whose answers are common with the
answers at a previous question)
- HTML - CSS - VBScript
All these were used at Basic / Medium. The activity consisted mainly working
on the Confirmit platform.');

INSERT INTO limbi_straine (user_id, entry_id, limba, nivel) VALUES (2, 1, 'Engleza', '4');
INSERT INTO limbi_straine (user_id, entry_id, limba, nivel) VALUES (2, 2, 'Franceza', '2');