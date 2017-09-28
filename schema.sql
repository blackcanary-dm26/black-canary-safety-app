-- USER TABLE --
CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
username VARCHAR(20) NOT NULL,
firstName VARCHAR (40),
lastName VARCHAR (40),
socketID VARCHAR (100),
safe_haven VARCHAR (200),
password VARCHAR(30)
-- email VARCHAR (80) NOT NULL,
-- profilePic VARCHAR (200),
-- auth0_id VARCHAR(100),
-- phone VARCHAR(15)
);

INSERT INTO users (username, firstName, lastName, socketID, safe_haven, password)
VALUES ('pandi', 'Andi', 'Platter', '2io2300293rj', '865 N. 160W, Provo, UT', 'password');
INSERT INTO users (username, firstName, lastName, socketID, safe_haven, password)
VALUES ('georgelopez', 'Carl', 'James', '2io2323f93rj', '920 Ice Cream Street', 'password');
INSERT INTO users (username, firstName, lastName, socketID, safe_haven, password)
VALUES ('gertrude', 'Linda', 'Morris', 'ajf8a3jo3lisdf', '393 100N, Provo, UT', 'password');
INSERT INTO users (username, firstName, lastName, socketID, safe_haven, password)
VALUES ('detective', 'Sherlock', 'Holmes', '2io232f300293rj', '221B Baker Street, London, UK', 'password');
INSERT INTO users (username, firstName, lastName, socketID, safe_haven, password)
VALUES ('thegreatfrycook', 'Spongebob', 'Squarepants', '3kunas8of4a', '1 Pineapple, Bikini Bottom, Under the Sea', 'password');
INSERT INTO users (username, firstName, lastName, socketID, safe_haven, password)
VALUES ('girlfighter', 'Mulan', 'Fa', '32kund8aadfwk', 'China', 'password');
INSERT INTO users (username, firstName, lastName, socketID, safe_haven, password)
VALUES ('forgetfulfish', 'Dory', 'Thefish', '3kwhase8f3', '42 Wallaby Way, Sydney, AU', 'password');


-- FRIENDS TABLE --
CREATE TABLE IF NOT EXISTS friends (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users,
friend_id INTEGER REFERENCES users,
friend_status BOOLEAN --true is accepted, false is pending, app.delete remove pending friend request
);

INSERT INTO friends (user_id, friend_id, friend_status)
VALUES (1, 4, TRUE);
INSERT INTO friends (user_id, friend_id, friend_status)
VALUES (2, 1, TRUE);
INSERT INTO friends (user_id, friend_id, friend_status)
VALUES (3, 5, FALSE);
INSERT INTO friends (user_id, friend_id, friend_status)
VALUES (1, 6, TRUE);
INSERT INTO friends (user_id, friend_id, friend_status)
VALUES (1, 4, FALSE);
INSERT INTO friends (user_id, friend_id, friend_status)
VALUES (4, 6, TRUE);
INSERT INTO friends (user_id, friend_id, friend_status)
VALUES (7, 1, TRUE);






-- GROUPS TABLE --
CREATE TABLE IF NOT EXISTS groups (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users,
group_name VARCHAR(40) NO,
friend_ids INTEGER [] --array of friends user_ids
);

INSERT INTO groups (user_id, group_name, friend_ids)
VALUES (1, 'Andis Group', ARRAY[1, 2, 3, 4, 5, 6, 7]);
INSERT INTO groups (user_id, group_name, friend_ids)
VALUES (2, 'Pizza Group', ARRAY[2, 3, 5, 1]);
INSERT INTO groups (user_id, group_name, friend_ids)
VALUES (7, 'What Group Is This', ARRAY[7, 1, 2, 3, 4, 5]);
INSERT INTO groups (user_id, group_name, friend_ids)
VALUES (5, 'My Leg', ARRAY[5, 7]);





-- ACTIVE LOCATIONS TABLE --
CREATE TABLE IF NOT EXISTS active_locations (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users,
coordinates VARCHAR(200), -- {latitude, longitude}
recipient_ids INTEGER [] --friends user ids
);