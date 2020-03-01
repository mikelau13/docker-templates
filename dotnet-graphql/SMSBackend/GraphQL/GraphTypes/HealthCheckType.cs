using GraphQL.Types;
using SMSBackend.Entities;

namespace SMSBackend.GraphQL.GraphTypes
{
    public class HealthCheckType : ObjectGraphType<HealthCheck>
    {
        public HealthCheckType()
        {
            Field(stock => stock.Id);
            Field(stock => stock.Name);
        }
    }
}