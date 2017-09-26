-- USER TABLE --
CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
username VARCHAR(20) NOT NULL,
firstName VARCHAR (40),
lastName VARCHAR (40),
email VARCHAR (80) NOT NULL,
profilePic VARCHAR (200),
socketID VARCHAR (100),
auth0_id VARCHAR(100),
safe_haven VARCHAR (200)
);

INSERT INTO users (username, firstName, lastName, email, profilePic, socketID, auth0_id, safe_haven)
VALUES ('pandi', 'Andi', 'Platter', 'coolkid@thecoolest.org', null, '2io2300293rj', '203932jflisdnad', '865 N. 160W, Provo, UT');
INSERT INTO users (username, firstName, lastName, email, profilePic, socketID, auth0_id, safe_haven)
VALUES ('georgelopez', 'Carl', 'Juan', 'pizzaman@gmail2.com', null, '2io2323f93rj', '2039324asdd', '920 Ice Cream Street');
INSERT INTO users (username, firstName, lastName, email, profilePic, socketID, auth0_id, safe_haven)
VALUES ('gertrude', 'Linda', 'Morris', 'hotstuphph@ducky.com', null, 'ajf8a3jo3lisdf', '489wfasdf49afj', '393 100N, Provo, UT');
INSERT INTO users (username, firstName, lastName, email, profilePic, socketID, auth0_id, safe_haven)
VALUES ('detective', 'Sherlock', 'Holmes', 'thegreatdetective@england.net', null, '2io232f300293rj', '37fshka8asdf', '221B Baker Street, London, UK');
INSERT INTO users (username, firstName, lastName, email, profilePic, socketID, auth0_id, safe_haven)
VALUES ('thegreatfrycook', 'Spongebob', 'Squarepants', 'krabbypattiesrulez@boatingschool.edu', null, '378aekufhasf', '3kunas8of4a', '1 Pineapple, Bikini Bottom, Under the Sea');
INSERT INTO users (username, firstName, lastName, email, profilePic, socketID, auth0_id, safe_haven)
VALUES ('girlfighter', 'Mulan', 'Fa', 'shhimagirl@chinaarmy.org', null, '32kund8aadfwk', '3ais7efak3ai8', 'China');
INSERT INTO users (username, firstName, lastName, email, profilePic, socketID, auth0_id, safe_haven)
VALUES ('forgetfulfish', 'Dory', 'Thefish', 'whoami@aol1.com', null, '3kwhase8f3', '3a8whawhrf8aew', '42 Wallaby Way, Sydney, AU');


-- FRIENDS TABLE --
CREATE TABLE IF NOT EXISTS friends (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users,
friend_id INTEGER REFERENCES users,
friend_status BOOLEAN 
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
group_name VARCHAR(40) NOT NULL,
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