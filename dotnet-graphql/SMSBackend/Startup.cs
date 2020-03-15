using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using GraphQL.Types;
using SMSBackend.GraphQL.GraphTypes;
using SMSBackend.GraphQL.Mutations;
using SMSBackend.GraphQL.Queries;
using SMSBackend.GraphQL.Schemas;
using SMSBackend.Repositories;
using SMSBackend.Repositories.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Server.Kestrel.Core;

namespace SMSBackend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<KestrelServerOptions>(options =>
            {
                options.AllowSynchronousIO = true;
            });
            services.AddSingleton<IDependencyResolver>(s => new FuncDependencyResolver(s.GetRequiredService));

            services.AddTransient<IHealthCheckRepository, HealthCheckRepository>();
            services.AddSingleton<ISchema, HealthCheckSchema>();
            services.AddSingleton<HealthCheckQuery>();
            services.AddSingleton<HealthCheckMutation>();
            services.AddSingleton<HealthCheckType>();
            services.AddSingleton<HealthCheckInputType>();
            services.AddCors();
            services.AddGraphQL();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseDeveloperExceptionPage();
            app.UseCors(builder => builder
                .WithOrigins("http://localhost:3000")
                .AllowCredentials()
                .AllowAnyHeader()
                .AllowAnyMethod());
            app.UseGraphQL<ISchema>("/graphql");
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions
            {
                Path = "/ui/playground"
            });
        }
    }
}
