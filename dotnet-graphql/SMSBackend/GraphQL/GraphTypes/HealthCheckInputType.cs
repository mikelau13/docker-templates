using GraphQL.Types;

namespace SMSBackend.GraphQL.GraphTypes
{
    public class HealthCheckInputType : InputObjectGraphType
    {
        public HealthCheckInputType()
        {
            Name = "HealthCheckInput";
            Field<NonNullGraphType<IntGraphType>>("id");
            Field<StringGraphType>("name");
        }
    }
}
