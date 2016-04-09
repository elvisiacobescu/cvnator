

DROP DATABASE IF EXISTS cvnator; 
CREATE DATABASE cvnator; 
USE cvnator;


GRANT ALL PRIVILEGES ON cvnator TO 'root'@'localhost' WITH GRANT OPTION;


CREATE TABLE user_data(
   user_id INT NOT NULL AUTO_INCREMENT,
   mail VARCHAR(100) NOT NULL UNIQUE,
   parola VARCHAR(40) NOT NULL,
   PRIMARY KEY ( user_id )
)ENGINE=INNODB;


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


CREATE TABLE permis(
	user_id INT NOT NULL,
	entry_id INT NOT NULL,
	categorie VARCHAR(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user_data(user_id) ON DELETE CASCADE,
	PRIMARY KEY (user_id,entry_id)
)ENGINE=INNODB;


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


CREATE TABLE limbi_straine(
	user_id INT NOT NULL,
	entry_id INT NOT NULL,
	limba VARCHAR(50) NOT NULL,
	nivel INT(1) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user_data(user_id) ON DELETE CASCADE,
	PRIMARY KEY (user_id,entry_id)
)ENGINE=INNODB;


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


CREATE TABLE abilitati(
	user_id INT NOT NULL,
	entry_id INT NOT NULL,
	skill VARCHAR(30) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user_data(user_id) ON DELETE CASCADE,
	PRIMARY KEY (user_id,entry_id)
)ENGINE=INNODB;


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