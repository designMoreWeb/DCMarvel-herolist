
## Setup
1. Create a Python 3 virtual environment with `python3 -m venv venv`
2. Activate the `venv` with `source venv/bin/activate`
3. Install dependencies with `pip install -r requirements.txt`


## Running the Server
1. `$ flask run` for production server or `$ FLASK_ENV=development flask run` for development server.  
   The development server starts a debugger and reloader. See <http://flask.pocoo.org/docs/1.0/server/> for more details.

2. Access <http://localhost:5000/>


## Endpoints
All endpoints return `JSON`.

### `/users/`
List all users

* Query string params: None
* Response: List of user objects
```
[
  {
    birthday: "YYYY-MM-DD",
    email: "e@mail.com",
    first_name: "First",
    last_name: "Last",
    pk: 1,
    relations: [
      {
        hero: 1,
        pk: 1,
        user: 1
      },
      ...
    ]
  },
  ...
]
```

### `/users/<int:pk>/`
Retrieve user with pk

* Query string params: None
* Response: User object
```
{
  birthday: "YYYY-MM-DD",
  email: "e@mail.com",
  first_name: "First",
  last_name: "Last",
  pk: 1,
  relations: [
    {
      hero: 1,
      pk: 1,
      user: 1
    },
    ...
  ]
}
```

### `/users/<int:pk>/edit/`
Edit user data. Currently only implements editing user hero relations.

* Query string params: None
* PATCH body format:
```
{
  add: List of hero pks, e.g. [1, 4, 5, ...]
  remove: List of relation pks, e.g. [1, 3, 7, ...]
}
```
Request content type should be `application/json`.
* Response: User object
```
{
  birthday: "YYYY-MM-DD",
  email: "e@mail.com",
  first_name: "First",
  last_name: "Last",
  pk: 1,
  relations: [
    {
      hero: 1,
      pk: 1,
      user: 1
    },
    ...
  ]
}
```

### `/heroes/`
List all heroes

* Query string params:
  * `universe`: String name (`DC`) or pk (`1`).
* Response: List of hero objects
```
[
  {
    alias: "Secret Identity",
    current_city: "City",
    debut_issue: "Comic Title (Vol. 1) #1",
    debut_year: "YYYY",
    hometown: "Town",
    name: "Hero Name",
    pk: 1,
    universe: {
      name: "DC",
      pk: 1
    }
  },
  ...
]
```

### `/heroes/<int:pk>/`
Retrieve hero with pk

* Query string params: None
* Response: Hero object
```
{
  alias: "Secret Identity",
  current_city: "City",
  debut_issue: "Comic Title (Vol. 1) #1",
  debut_year: "YYYY",
  hometown: "Town",
  name: "Hero Name",
  pk: 1,
  universe: {
    name: "DC",
    pk: 1
  }
}
```

### `/heroes/random/`
Retrieve random hero

* Query string params:
  * `universe`: String name (`DC`) or pk (`1`).
* Response: Hero object
```
{
  alias: "Secret Identity",
  current_city: "City",
  debut_issue: "Comic Title (Vol. 1) #1",
  debut_year: "YYYY",
  hometown: "Town",
  name: "Hero Name",
  pk: 1,
  universe: {
    name: "DC",
    pk: 1
  }
}
```
