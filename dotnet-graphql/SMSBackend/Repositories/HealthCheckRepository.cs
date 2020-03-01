using System.Collections.Generic;
using System.Linq;
using SMSBackend.Entities;
using SMSBackend.Repositories.Interfaces;

namespace SMSBackend.Repositories
{
    public class HealthCheckRepository : IHealthCheckRepository
    {
        private static readonly List<HealthCheck> _healthChecks = new List<HealthCheck>
        {
            new HealthCheck
            {
                Id = 1,
                Name="Health Check item 01"
            }
        };

        public List<HealthCheck> GetAll() => _healthChecks;
        public HealthCheck AddHealthCheck(HealthCheck healthCheck)
        {
            _healthChecks.Add(healthCheck);
            return healthCheck;
        }
    }    
}
