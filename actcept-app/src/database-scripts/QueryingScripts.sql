-- All events, default sort Artist name
SELECT * 
FROM tblEvents 
ORDER BY artist_name;

-- Filter by event name and order by specific column
SELECT * 
FROM tblEvents 
WHERE event_name LIKE '{%search criteria}%'
ORDER BY {'columnname'};

-- Add person to an event
INSERT INTO tblUserEvents(user_id, event_id) 
VALUES({'USER', 'EVENT'});

-- Add a review for an event
INSERT INTO tblReviews(star-rating, description, date, user_id, event_id) 
VALUES ('STAR-RATING', 'DESCRIPTION', 'DATE', 'USER', 'EVENT');

-- GET USER BY NAME
SELECT * FROM tblUsers 
WHERE name = {'NAME'}
AND email = {'EMAIL'};

-- VIEW EVENTS BY EMAIL
SELECT * FROM tblEvents 
JOIN tblUserEvents ON tblEvents.event_id = tblUserEvents.event_id
JOIN tblUsers ON tblUserEvents.user_id = tblUsers.user_id
where email = {'EMAIL'};

-- DELETE Signup
DELETE FROM tblUserEvents 
WHERE event_id = {'EVENT'} AND user_id = {'USER'};
