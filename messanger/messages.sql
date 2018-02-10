CREATE TABLE messages
(id BIGINT AUTO_INCREMENT
		PRIMARY KEY,

	user VARCHAR(255) NULL,
	msg VARCHAR(255) NULL,
	time_sent INT NOT NULL);

INSERT INTO messages (user, msg, time_sent)
VALUES
('Bálint', 'Hali', 12);