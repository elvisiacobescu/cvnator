CREATE UNIQUE INDEX user_data_index ON user_data (email,parola);

CREATE UNIQUE INDEX educatie_index ON educatie (user_id, entry_id);

CREATE UNIQUE INDEX permis_index ON permis (user_id, entry_id);

CREATE UNIQUE INDEX date_personale_default_index ON date_personale (user_id);
CREATE UNIQUE INDEX date_personale_email_index ON date_personale (email);
CREATE UNIQUE INDEX date_personale_nr_telefon_index ON date_personale (nr_telefon);
CREATE UNIQUE INDEX date_personale_nume_prenume_index ON date_personale (nume,prenume);

CREATE UNIQUE INDEX limbi_straine_index ON limbi_straine (user_id,entry_id);

CREATE UNIQUE INDEX alt_info_index ON alt_info (user_id,entry_id);

CREATE UNIQUE INDEX abilitati_index ON abilitati (user_id,entry_id);

CREATE UNIQUE INDEX experienta_index ON experienta (user_id,entry_id);