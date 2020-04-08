# Dockerfile for DEV environment, we will come back to look into production environment later.

FROM eaps-docker-coldfusion.bintray.io/cf/coldfusion:latest

RUN mkdir /opt/coldfusion/cfusion/wwwroot/web-app
COPY index.cfm /opt/coldfusion/cfusion/wwwroot/web-app
COPY Application.cfm /opt/coldfusion/cfusion/wwwroot/web-app

