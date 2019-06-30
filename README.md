# JavaScript Full-Stack Starter Kit 🚀

An opinionated & minimalist JavaScript full-stack starter kit. Based on popular frameworks such as Node.js, React, MongoDB, Swagger, Babel and Docker.

## Features

- Node.js backend with Express
- Swagger API specification & validation
- MongoDB database
- React frontend
- Next generation JavaScript agnostic setup with Babel
- Multi-container Docker setup
- Easy Docker orchestration with handy Makefile commands
- Mono-repo approach

## Usage

### Run

Clone this repository and run the following command for a local dev environment:

```
make up
```

> This will spin up a database instance running on `localhost:27017`, a backend instance running on `localhost:1337` and a frontend instance running on `localhost:3000`. See `docker-compose.yml` for the detailed setup.
> You can specify also only a single service via `make up frontend`.

---

### Test

To run all test just enter:

```
make test
```

> This will run all tests defined in the `backend` and `frontend` directories. See `docker-compose.ci.yml` for the detailed setup. Can ideally be used in your CI runners.

---

### Deploy

TBD.
