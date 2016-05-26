-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 25 Mai 2016 la 18:15
-- Versiune server: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cvnator`
--

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `abilitati`
--

CREATE TABLE `abilitati` (
  `user_id` int(11) NOT NULL,
  `entry_id` int(11) NOT NULL,
  `skill` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `abilitati`
--

INSERT INTO `abilitati` (`user_id`, `entry_id`, `skill`) VALUES
(1, 1, 'Html5'),
(1, 2, 'Java'),
(1, 3, 'Php'),
(2, 1, 'Cpp'),
(2, 2, 'Java'),
(2, 3, 'Php'),
(3, 1, 'Cpp'),
(3, 2, 'Java'),
(3, 3, 'Php');

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `alt_info`
--

CREATE TABLE `alt_info` (
  `user_id` int(11) NOT NULL,
  `entry_id` int(11) NOT NULL,
  `start` date NOT NULL,
  `stop` date NOT NULL,
  `titlu` varchar(200) NOT NULL,
  `descriere` varchar(3000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `alt_info`
--

INSERT INTO `alt_info` (`user_id`, `entry_id`, `start`, `stop`, `titlu`, `descriere`) VALUES
(2, 1, '2014-10-28', '2014-10-28', 'Managing a Mobile World - SCC Services', ''),
(2, 2, '2016-03-03', '2016-05-03', 'Training Android', 'Training Android pentru incepatori pe parcursul a 6 saptamani in cadrul FiiPractic');

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `date_personale`
--

CREATE TABLE `date_personale` (
  `user_id` int(11) NOT NULL,
  `nume` varchar(50) NOT NULL,
  `prenume` varchar(50) NOT NULL,
  `sex` enum('M','F') NOT NULL,
  `varsta` int(2) NOT NULL,
  `nr_telefon` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `cale_poza` varchar(200) DEFAULT NULL,
  `adresa` varchar(100) NOT NULL,
  `oras` varchar(50) NOT NULL,
  `salariu_dorit` int(5) DEFAULT NULL,
  `tip_job` enum('Full-time','Part-time','Project-based','Internship','Training','Sezonier','Temporar') NOT NULL,
  `nivel_cariera` int(1) NOT NULL,
  `domeniu` varchar(200) NOT NULL,
  `post_dorit` varchar(100) NOT NULL,
  `relocare` enum('Da','Nu') DEFAULT NULL,
  `obiectiv` varchar(3000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `date_personale`
--

INSERT INTO `date_personale` (`user_id`, `nume`, `prenume`, `sex`, `varsta`, `nr_telefon`, `email`, `cale_poza`, `adresa`, `oras`, `salariu_dorit`, `tip_job`, `nivel_cariera`, `domeniu`, `post_dorit`, `relocare`, `obiectiv`) VALUES
(2, 'Mateiciuc', 'Daniel', 'M', 20, '0748492673', 'daniel@gmail.com', NULL, 'Str. Cucanilor nr.7', 'Iasi', 400, 'Full-time', 1, 'IT', 'Developer', 'Nu', 'Obiective::::'),
(6, 'Mateiciuc', 'Danie', 'M', 20, '0748492673', 'daniel@mail.com', 'dsada', 'dasdas', 'das', 1, 'Full-time', 1, 'dsad', 'dsdsad', NULL, 'asdasd');

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `educatie`
--

CREATE TABLE `educatie` (
  `user_id` int(11) NOT NULL,
  `entry_id` int(11) NOT NULL,
  `start` date NOT NULL,
  `stop` date NOT NULL,
  `nume_institutie` varchar(100) NOT NULL,
  `oras` varchar(30) NOT NULL,
  `profil` varchar(50) NOT NULL,
  `diploma` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `educatie`
--

INSERT INTO `educatie` (`user_id`, `entry_id`, `start`, `stop`, `nume_institutie`, `oras`, `profil`, `diploma`) VALUES
(2, 2, '2014-10-01', '2017-06-01', 'Facultatea de informatica UAIC', 'Iasi', 'Informatica', '');

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `experienta`
--

CREATE TABLE `experienta` (
  `user_id` int(11) NOT NULL,
  `entry_id` int(11) NOT NULL,
  `start` date NOT NULL,
  `stop` date NOT NULL,
  `nume_companie` varchar(100) NOT NULL,
  `domeniu` varchar(50) NOT NULL,
  `departament` varchar(50) NOT NULL,
  `descrierea_jobului` varchar(3000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `experienta`
--

INSERT INTO `experienta` (`user_id`, `entry_id`, `start`, `stop`, `nume_companie`, `domeniu`, `departament`, `descrierea_jobului`) VALUES
(2, 1, '2015-08-23', '2015-10-01', 'Gfk Romania', 'Junior Programmer', 'IT', 'Working on Confirmit platform.\nMy main activity was creating questionnaires involving:\n- communicate with the database to carry out the tests\n- Javascript to communicate between pages / formatting more complex page\nlayout or question / retrieving responses and their management in future\nquestions (for example: a question whose answers are common with the\nanswers at a previous question)\n- HTML - CSS - VBScript\nAll these were used at Basic / Medium. The activity consisted mainly working\non the Confirmit platform.');

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `limbi_straine`
--

CREATE TABLE `limbi_straine` (
  `user_id` int(11) NOT NULL,
  `entry_id` int(11) NOT NULL,
  `limba` varchar(50) NOT NULL,
  `nivel` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `limbi_straine`
--

INSERT INTO `limbi_straine` (`user_id`, `entry_id`, `limba`, `nivel`) VALUES
(2, 1, 'Engleza', 4),
(2, 2, 'Franceza', 2);

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `permis`
--

CREATE TABLE `permis` (
  `user_id` int(11) NOT NULL,
  `entry_id` int(11) NOT NULL,
  `categorie` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `permis`
--

INSERT INTO `permis` (`user_id`, `entry_id`, `categorie`) VALUES
(2, 1, 'A'),
(2, 2, 'TV'),
(2, 3, 'C1');

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `user_data`
--

CREATE TABLE `user_data` (
  `user_id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `parola` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `user_data`
--

INSERT INTO `user_data` (`user_id`, `email`, `parola`) VALUES
(8, '123@a.com', '1'),
(5, 'dada', 'da'),
(2, 'daniel@gmail.com', 'daniel'),
(6, 'daniel_m2007@yahoo.com', 'da'),
(7, 'danny2007_daniel@yahoo.com', '1'),
(4, 'ddda', 'ddda'),
(3, 'elvis@gmail.com', 'elvis'),
(1, 'vitalie@gmail.com', 'vitalie');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `abilitati`
--
ALTER TABLE `abilitati`
  ADD PRIMARY KEY (`user_id`,`entry_id`),
  ADD UNIQUE KEY `abilitati_index` (`user_id`,`entry_id`);

--
-- Indexes for table `alt_info`
--
ALTER TABLE `alt_info`
  ADD PRIMARY KEY (`user_id`,`entry_id`),
  ADD UNIQUE KEY `alt_info_index` (`user_id`,`entry_id`);

--
-- Indexes for table `date_personale`
--
ALTER TABLE `date_personale`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `date_personale_default_index` (`user_id`),
  ADD UNIQUE KEY `date_personale_email_index` (`email`),
  ADD UNIQUE KEY `date_personale_nume_prenume_index` (`nume`,`prenume`),
  ADD UNIQUE KEY `cale_poza` (`cale_poza`);

--
-- Indexes for table `educatie`
--
ALTER TABLE `educatie`
  ADD PRIMARY KEY (`user_id`,`entry_id`),
  ADD UNIQUE KEY `educatie_index` (`user_id`,`entry_id`);

--
-- Indexes for table `experienta`
--
ALTER TABLE `experienta`
  ADD PRIMARY KEY (`user_id`,`entry_id`),
  ADD UNIQUE KEY `experienta_index` (`user_id`,`entry_id`);

--
-- Indexes for table `limbi_straine`
--
ALTER TABLE `limbi_straine`
  ADD PRIMARY KEY (`user_id`,`entry_id`),
  ADD UNIQUE KEY `limbi_straine_index` (`user_id`,`entry_id`);

--
-- Indexes for table `permis`
--
ALTER TABLE `permis`
  ADD PRIMARY KEY (`user_id`,`entry_id`),
  ADD UNIQUE KEY `permis_index` (`user_id`,`entry_id`);

--
-- Indexes for table `user_data`
--
ALTER TABLE `user_data`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `user_data_index` (`email`,`parola`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_data`
--
ALTER TABLE `user_data`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Restrictii pentru tabele sterse
--

--
-- Restrictii pentru tabele `abilitati`
--
ALTER TABLE `abilitati`
  ADD CONSTRAINT `abilitati_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_data` (`user_id`) ON DELETE CASCADE;

--
-- Restrictii pentru tabele `alt_info`
--
ALTER TABLE `alt_info`
  ADD CONSTRAINT `alt_info_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_data` (`user_id`) ON DELETE CASCADE;

--
-- Restrictii pentru tabele `date_personale`
--
ALTER TABLE `date_personale`
  ADD CONSTRAINT `date_personale_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_data` (`user_id`) ON DELETE CASCADE;

--
-- Restrictii pentru tabele `educatie`
--
ALTER TABLE `educatie`
  ADD CONSTRAINT `educatie_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_data` (`user_id`) ON DELETE CASCADE;

--
-- Restrictii pentru tabele `experienta`
--
ALTER TABLE `experienta`
  ADD CONSTRAINT `experienta_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_data` (`user_id`) ON DELETE CASCADE;

--
-- Restrictii pentru tabele `limbi_straine`
--
ALTER TABLE `limbi_straine`
  ADD CONSTRAINT `limbi_straine_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_data` (`user_id`) ON DELETE CASCADE;

--
-- Restrictii pentru tabele `permis`
--
ALTER TABLE `permis`
  ADD CONSTRAINT `permis_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_data` (`user_id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
