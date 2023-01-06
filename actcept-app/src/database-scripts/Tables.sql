-- Users Table
CREATE TABLE IF NOT EXISTS users (
	user_id INT GENERATED ALWAYS AS IDENTITY,
	name VARCHAR(255),
	email VARCHAR(255),
    PRIMARY KEY(user_id)
);

-- Venues Table 
CREATE TABLE IF NOT EXISTS venues (
    venue_id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255),
    location VARCHAR(255),
    capacity INT,
    image_url VARCHAR(255),
    PRIMARY KEY(venue_id)
);

--Artists Table
CREATE TABLE IF NOT EXISTS artists(
    artist_id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255),
    description VARCHAR(255),
    genre VARCHAR(255),
    image_url VARCHAR(255),
    PRIMARY KEY(artist_id)
);

--Events Table 
CREATE TABLE IF NOT EXISTS events (
    event_id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255),
    description VARCHAR(255),
    date TIMESTAMP,
    image_url VARCHAR(255),
    venue_id INT,
    artist_id INT,
    PRIMARY KEY(event_id),
    CONSTRAINT fk_venue FOREIGN KEY(venue_id) REFERENCES venues(venue_id) ON DELETE CASCADE,
    CONSTRAINT fk_artist FOREIGN KEY(artist_id) REFERENCES artist(artist_id) ON DELETE CASCADE 
);

--Signups Table
CREATE TABLE IF NOT EXISTS signups(
    signup_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT,
    event_id INT,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    CONSTRAINT fk_event FOREIGN KEY(event_id) REFERENCES events(event_id) ON DELETE CASCADE
);

--Reviews Table
CREATE TABLE IF NOT EXISTS reviews(
    review_id INT GENERATED ALWAYS AS IDENTITY,
    star_rating INT,
    description VARCHAR(500),
    date TIMESTAMP,
    user_id INT,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
);