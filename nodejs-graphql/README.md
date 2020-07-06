Templates for launching a Resify Restful Api, Apollo Server middleware, and a React web frontend application combination.

## System Requirements

[Docker Desktop](https://www.docker.com/)


## To launch the applications

To start, run this command to build and fire up the docker containers (need the --build for the first time):

```
docker-compose up --build
```

This will launch 3 applications: React web front-end in port 8090; Apollo Graphql Server middleware in port 8091; Resify Restful Api in port 8092.  

Note that the container ports are different, they are 3000, 4000, 3000 respectively.

To test the [Restify Api](http://localhost:8092/healthcheck)

To test the Apollo Graphql, go to the [Graphql Playground](http://localhost:8091/) and try this query:

```gql
{  
    city(id:"1")
	{
        id
		name
        city
    }
}
```

To test the [React frontend](http://localhost:8090/)

