using GraphQL;
using GraphQL.Types;
using SMSBackend.GraphQL.Mutations;
using SMSBackend.GraphQL.Queries;

namespace SMSBackend.GraphQL.Schemas
{
    public class HealthCheckSchema : Schema
    {
        public HealthCheckSchema(IDependencyResolver resolver) : base(resolver)
        {
            Query = resolver.Resolve<HealthCheckQuery>();
            Mutation = resolver.Resolve<HealthCheckMutation>();
        }
    }
}
