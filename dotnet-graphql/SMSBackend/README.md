GraphQL.NET server

## System Requirements

[Docker Desktop](https://www.docker.com/)


## To launch the GraphQL.NET server

You can run this command line in this SMSBackend folder (need the --build for the first time):

```
docker-compose up --build
```

Or [open the solution](./SMSBackend.sln) in Visual Studio, run the solution with the `Docker Compose`

Once it is up running, you can try out the GraphQL playground in http://localhost:3001/ui/playground



## Query

Example:

```
{
  healthChecks {
    id
    name
  }
}
```


## Mutation

Example:

```
mutation CreateHealthCheck($healthCheck:HealthCheckInput!){
  createHealthCheck(healthCheck:$healthCheck){
    name
  }
}
```

Using query variables:

```
{
  "healthCheck":{
    "id": "2",
    "name" : "me"
	}
}
```

Then run the query again to see a new result.

## CORS 

