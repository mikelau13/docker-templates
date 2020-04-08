<cfscript>
    // Login is always required. This example uses two lines of code.
    adminObj = createObject("component","CFIDE.adminapi.administrator");
    adminObj.login("ColdFusion123"); //CF Admin password
    // Create a MySQL datasource
    datasource = createObject("component", "CFIDE.adminapi.datasource");
    datasource.setMySQL5("SampleMYSqlDB", "database-host", "testDB");
</cfscript>