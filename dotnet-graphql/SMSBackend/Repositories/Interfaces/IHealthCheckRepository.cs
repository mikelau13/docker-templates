using System.Collections.Generic;
using SMSBackend.Entities;

namespace SMSBackend.Repositories.Interfaces
{
    public interface IHealthCheckRepository
    {
        List<HealthCheck> GetAll();
        HealthCheck AddHealthCheck(HealthCheck healthCheck);
    }
}
