using GraphQL.Types;
using SMSBackend.Entities;
using SMSBackend.GraphQL.GraphTypes;
using SMSBackend.Repositories.Interfaces;

namespace SMSBackend.GraphQL.Mutations
{
    public class HealthCheckMutation : ObjectGraphType<HealthCheck>
    {
        public HealthCheckMutation(IHealthCheckRepository healthCheckRepository)
        {

            Field<HealthCheckType>(
                "createHealthCheck",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<HealthCheckInputType>> { Name = "healthCheck" }
                ),
                resolve: context =>
                {
                    var healthCheck = context.GetArgument<HealthCheck>("healthCheck");
                    return healthCheckRepository.AddHealthCheck(healthCheck);
                }
            );
        }
    }
}
