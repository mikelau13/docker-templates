using GraphQL.Types;
using SMSBackend.Entities;
using SMSBackend.GraphQL.GraphTypes;
using SMSBackend.Repositories.Interfaces;
using System.Collections.Generic;

namespace SMSBackend.GraphQL.Queries
{
    public class HealthCheckQuery : ObjectGraphType
    {
        private readonly IHealthCheckRepository _healthCheckRepository;

        public HealthCheckQuery(IHealthCheckRepository healthCheckRepository)
        {
            _healthCheckRepository = healthCheckRepository;
            Field<ListGraphType<HealthCheckType>>(name: "healthChecks", resolve: context => _healthCheckRepository.GetAll());
        }
    }
}