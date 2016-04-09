--notes to self:
--fa indecsi
--triggere


--READ:
--Porneste: Apache & Mysql
--Acceseaza cmd: faci cd pana in folderul bin din mysql, ex: C:\xampp\mysql\bin
--Foloseste comanda:   mysql -u root -p -h localhost
--In comanda de mai sus: root = utilizator(default) , daca ai parola, o scrii dupa -p sau o introduci(iti va cere) dupa ce introduci comanda precendenta
--Acum in loc de CD ar trebui sa ai MariaDB.
--Acum ar trebui sa poti rula fisierul sql ptr crearea bazei de date cu comanda urmatoare.
--    source C:/xampp/mysql/cvnator/test_create_db.sql;      
--cu calea respectiva.

DROP DATABASE IF EXISTS cvnator; 
CREATE DATABASE cvnator; 
USE cvnator;

--privilegii
GRANT ALL PRIVILEGES ON cvnator TO 'root'@'localhost' WITH GRANT OPTION;

--Tabelul USER_DATA
--Pk: user_id
CREATE TABLE user_data(
   user_id INT NOT NULL AUTO_INCREMENT,
   mail VARCHAR(100) NOT NULL UNIQUE,
   parola VARCHAR(40) NOT NULL,
   PRIMARY KEY ( user_id )
)ENGINE=INNODB;

--Tabelul EDUCATIE
--Pk: user_id + entry_id
--Fk: user_id din tabela user_data
--Nota: data de STOP are ca default ORA CURENTA. Ziceti daca-s inconveniente.
--Am pus default ptr ca atunci cand se va introduce o perioada de studiu care se desfasoara si in prezent, 
--			caz in care, va selecta prezent, in loc de data, insertul in bd nu va necesita variabila STOP.
CREATE TABLE educatie(
	user_id INT NOT NULL,
	entry_id INT NOT NULL,
	start DATETIME NOT NULL,
	stop TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	nume_institutie VARCHAR(100) NOT NULL,
	oras VARCHAR(30) NOT NULL,
	profil VARCHAR(50) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user_data(user_id) ON DELETE CASCADE,
	PRIMARY KEY (user_id,entry_id)
)ENGINE=INNODB;

--Tabelul PERMIS
CREATE TABLE permis(
	user_id INT NOT NULL,
	entry_id INT NOT NULL,
	categorie VARCHAR(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user_data(user_id) ON DELETE CASCADE,
	PRIMARY KEY (user_id,entry_id)
)ENGINE=INNODB;

--Tabelul DATE_PERSONALE
--Am folosit ENUM ptr intrarile din acea coloana, fara exceptii.
--Coloana nivel_cariera va avea valorile:
--		0- fara studii superioare/necalificat
--		1- student
--		2- entry-level
--		3- mid-level
--		4- manager
--SA FACEM DOMENIU O CONCATENARE DE DOMENII DORITE SEPARATE PRIN VIRGULA?
CREATE TABLE date_personale(
	user_id INT NOT NULL,
	nume VARCHAR(50) NOT NULL,
	prenume VARCHAR(50) NOT NULL,
	sex ENUM('M','F') NOT NULL,
	varsta INT(2) NOT NULL,
	nr_telefon VARCHAR(20) NOT NULL,
	cale_poza VARCHAR(200) UNIQUE,
	adresa VARCHAR(100) NOT NULL UNIQUE,
	oras VARCHAR(50) NOT NULL,
	salariu_dorit INT(5),
	tip_job ENUM('Full-time','Part-time','Project-based','Internship','Training','Sezonier','Temporar') NOT NULL,
	nivel_cariera INT(1) NOT NULL,
	domeniu VARCHAR(200) NOT NULL,
	post_dorit VARCHAR(100) NOT NULL,
	relocare ENUM('Da','Nu'),
	obiectiv VARCHAR(3000),
	FOREIGN KEY (user_id) REFERENCES user_data(user_id) ON DELETE CASCADE
)ENGINE=INNODB;

--Tabelul LIMBI_STRAINE
CREATE TABLE limbi_straine(
	user_id INT NOT NULL,
	entry_id INT NOT NULL,
	limba VARCHAR(50) NOT NULL,
	nivel INT(1) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user_data(user_id) ON DELETE CASCADE,
	PRIMARY KEY (user_id,entry_id)
)ENGINE=INNODB;

--Tabelul ALT_INFO
CREATE TABLE alt_info(
	user_id INT NOT NULL,
	entry_id INT NOT NULL,
	start DATETIME NOT NULL,
	stop TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	titlu VARCHAR(200) NOT NULL,
	descriere VARCHAR(3000) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user_data(user_id) ON DELETE CASCADE,
	PRIMARY KEY (user_id,entry_id)
)ENGINE=INNODB;

--Tabelul ABILITATI
CREATE TABLE abilitati(
	user_id INT NOT NULL,
	entry_id INT NOT NULL,
	skill VARCHAR(30) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user_data(user_id) ON DELETE CASCADE,
	PRIMARY KEY (user_id,entry_id)
)ENGINE=INNODB;

--Tabelul EXPERIENTA
CREATE TABLE experienta(
	user_id INT NOT NULL,
	entry_id INT NOT NULL,
	start DATETIME NOT NULL,
	stop TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	nume_companie VARCHAR(100) NOT NULL,
	domeniu VARCHAR(50) NOT NULL,
	departament VARCHAR(50) NOT NULL,
	descrierea_jobului VARCHAR(3000) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user_data(user_id) ON DELETE CASCADE,
	PRIMARY KEY (user_id,entry_id)
);