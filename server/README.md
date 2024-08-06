

-spin up a postgres DBMS  on your local docker environment with a command such as:
  - `docker run --rm -it --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v ${PWD}/dbs:/var/lib/postgresql/data postgres:14`
-update the `knexfile.js` with your PG DBMS connection details