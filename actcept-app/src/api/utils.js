let eventIdCounter = 0
let userIdCounter = 0
let reviewIdCounter = 0

const getEventById = (id, elementList) => {
  return elementList.find((element) => {
    console.log(element.event_id)
    return element.event_id === Number(id);
  });
}; //keep

const getUserById = (id, elementList) => {
  return elementList.find((element) => {
    console.log(element.user_id)
    return element.user_id === Number(id);
  });
}; //keep

const getReviewById = (id, elementList) => {
  return elementList.find((element) => {
    console.log(element.review_id)
    return element.review_id === Number(id);
  });
}; //keep

const getIndexById = (id, elementList) => {
  return elementList.findIndex((element) => {
    return element.id === Number(id);
  });
}; //keep


const createEvent = (queryArguments) => {
  console.log("queryarguments",queryArguments.venue_id)
    if (queryArguments.hasOwnProperty('event_id') &&
    queryArguments.hasOwnProperty('venue_id') &&
    queryArguments.hasOwnProperty('venue_name') &&
    queryArguments.hasOwnProperty('artist_name') &&
    queryArguments.hasOwnProperty('artist_email') &&
    queryArguments.hasOwnProperty('event_name') &&
    queryArguments.hasOwnProperty('event_date') &&
    queryArguments.hasOwnProperty('event_description') &&
    queryArguments.hasOwnProperty('genre') &&
    queryArguments.hasOwnProperty('image_url') &&
    queryArguments.hasOwnProperty('event_confirmation') ) {
      let currentId;
        eventIdCounter += 1;
        currentId = eventIdCounter;
      return {
        'event_id': queryArguments.event_id,
        'venue_id': queryArguments.venue_id,
        'venue_name':  queryArguments.venue_name,
        'artist_name':  queryArguments.artist_name,
        'artist_email': queryArguments.artist_email,
        'event_name':  queryArguments.event_name,
        'event_date':    queryArguments.event_date,
        'event_description': queryArguments.event_description,
        'genre':  queryArguments.genre,
        'image_url':    queryArguments.image_url,
        'event_confirmation': queryArguments.event_confirmation,
      };
    } else {
      return false;
    }
};

const createUser = (queryArguments) => {
    if (queryArguments.hasOwnProperty('user_id') &&
    queryArguments.hasOwnProperty('name') &&
    queryArguments.hasOwnProperty('email') &&
    queryArguments.hasOwnProperty('password') &&
    queryArguments.hasOwnProperty('dob') ) {
      let currentId;
        userIdCounter += 1;
        currentId = userIdCounter;
      return {
        'user_id': queryArguments.user_id,
        'name':  queryArguments.name,
        'email': queryArguments.email,
        'password':  queryArguments.password,
        'dob':    queryArguments.dob
      };
    } else {
      return false;
    }
};

const createReview = (queryArguments) => {
  if (queryArguments.hasOwnProperty('review_id') &&
  queryArguments.hasOwnProperty('star_rating') &&
  queryArguments.hasOwnProperty('description') &&
  queryArguments.hasOwnProperty('date') &&
  queryArguments.hasOwnProperty('user_id') &&
  queryArguments.hasOwnProperty('event_id')
  ) {
    let currentId;
      reviewIdCounter += 1;
      currentId = reviewIdCounter;
    return {
      'review_id': queryArguments.review_id,
      'star_rating':  queryArguments.star_rating,
      'description': queryArguments.description,
      'date':  queryArguments.date,
      'user_id':    queryArguments.user_id,
      'event_id':    queryArguments.event_id
    };
  } else {
    return false;
  }
};


const updateElement = (id, queryArguments, elementList) => {
  const elementIndex = getIndexById(id, elementList);
  if (elementIndex === -1) {
    throw new Error('updateElement must be called with a valid id parameter');
  }
  if (queryArguments.id) {
    queryArguments.id = Number(queryArguments.id);
  }
  Object.assign(elementList[elementIndex], queryArguments);
  return elementList[elementIndex];
};

module.exports = {
  createEvent: createEvent,
  createUser: createUser,
  createReview: createReview,
  getIndexById: getIndexById,
  getEventById: getEventById,
  getUserById: getUserById,
  getReviewById: getReviewById,
  updateElement: updateElement
};
