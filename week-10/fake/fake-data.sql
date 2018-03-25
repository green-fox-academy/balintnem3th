
CREATE TABLE users
(id BIGINT AUTO_INCREMENT
		PRIMARY KEY,

	user VARCHAR(255) NULL,
	ellatas VARCHAR(255) NULL,
	letszam INT NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;;



INSERT INTO users (user, ellatas, letszam)
VALUES
('Bálint', 'család', 1),
('Bálint', 'család', 2),
('Bálint', 'család', 3),
('Bálint', 'család', 4),
('Bálint', 'család', 5)