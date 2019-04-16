# Guidr => Backend Architects
## Julian Moreno
## Ian Belknap

### BASE URL
#### https://ls-guidr.herokuapp.com/

# SIGN UP / LOG IN
### Sign Up
#### POST /api/auth/register
Client must send
```
{
    "username":"new user", // REQUIRED
    "password":"pass"  // REQUIRED
}
```

Server will return
```
{
    "id":"3", // REQUIRED
    "username":"new user"  // REQUIRED
}
```

### Login
#### POST /api/auth/login
Clint must send
```
{
    "username":"new user", // REQUIRED
    "password":"pass"  // REQUIRED
}
```

Server will return
```
{
    "message":"Welcome username",
    "token":"hashed auth token"
}
```

# RESTRICTED ROUTES
## USER INFORMATION

### Display user profile
#### GET /api/profile/:id
Example: To see user1 >> POST /api/profile/1

Server will return
```
{
  "id": 1,
  "user_id": 2,
  "first_name": "Tony",
  "last_name": "Stark",
  "age": "53",
  "certs": "Alpine Mountaineer, XBOX 360, Uphill Gardening",
  "profile_text": "loves to xbox on mountaintops, will help you change your mind",
  "years_of_exp": "40"
}
```

### Edit user profile
#### PUT /api/profile/:id
Example: To edit user1 >> POST /api/profile/1

Client must send
```
{
  "id": 1, // REQUIRED
  "user_id": 2, // REQUIRED
  "first_name": "Tony",
  "last_name": "Stark",
  "age": "53",
  "certs": "Alpine Mountaineer, XBOX 360, Uphill Gardening",
  "profile_text": "loves to xbox on mountaintops, will help you change your mind",
  "years_of_exp": "40"
}
```

### Display ALL user profiles
#### GET /api/profile
Server will return
```
[
  {
    "id": 1,
    "user_id": 2,
      "first_name": "Tony",
  "last_name": "Stark",
    "age": "28",
    "certs": "Alpine Mountaineer, XBOX 360, Uphill Gardening",
    "profile_text": "loves to xbox on mountaintops, will help you change your mind",
    "years_of_exp": "28"
  },
  {...},
  {...},
  {...}
]
```

### Display all users
#### GET /api/users
Server will return
```
[
  {
    "id": 1,
    "username": "user1"
  },
  {
    "id": 2,
    "username": "user2"
  },
]
```

### Delete user account
#### DELETE /api/users/:id
Example: To delete user1 >> DELETE /api/users/1

Server will return status 204 if successful

## TRIPS

### Create a new trip
#### POST /api/trips/
Client must send
```
{
    "id": 1, // REQUIRED
    "user_id": 2, // REQUIRED
    "adventure_type": "a lot of things",
    "date": "Apr 15 2018",
    "description": "...",
    "duration": "5 days",
    "location": "Yosemite National Park",
    "professional": 1,
    "title": "Yosemite Sam"
  },
}
```
Server will return status 201 if successful

### Display all trips by created by user_id
#### GET /api/trips/:id
Example: To see trips created by user2 >> GET /api/trips/2

Server will return
```
[
  {
    "id": 1,
    "user_id": 2,
    "adventure_type": "a lot of things",
    "date": "Apr 15 2018",
    "description": "California's most-visited national park stands out for its bevy of impressive waterfalls, such as Vernal Fall and Bridalveil Fall, as well as unique granite rock formations like the Half Dome and El Capitan. Whatever your itinerary may be, make sure to stop by the breathtaking Tunnel View Outlook",
    "duration": "5 days",
    "location": "Yosemite National Park",
    "professional": 1,
    "title": "Yosemite Sam"
  },
  {...},
  {...},
  {...}
]
```

### Edit trip information
#### PUT /api/trips/:id
Example: To edit trip1 >> PUT /api/trips/1

Client must send
```
{
    "id": 1, // REQUIRED
    "user_id": 2, // REQUIRED
    "adventure_type": "a lot of things",
    "date": "Apr 15 2018",
    "description": "...",
    "duration": "5 days",
    "location": "Yosemite National Park",
    "professional": 1,
    "title": "Yosemite Sam"
  },
}
```

### Delete trip
#### DELETE /api/trips/:id
Example: To delete trip1 >> DELETE /api/trips/1

Server will return status 204 if successful
