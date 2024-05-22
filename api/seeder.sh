#!/bin/bash

# TODO: change to use .env
server='127.0.0.1,1433'
database='master'
username='sa'
password='yourStrong(!)Password'

# /opt/mssql-tools/bin/sqlcmd -S localhost,1433 -U sa -P 'yourStrong(!)Password' -Q 'CREATE DATABASE IF NOT EXISTS lutris;'
/opt/mssql-tools/bin/sqlcmd -S localhost,1433 -U sa -P 'yourStrong(!)Password' -i '/tmp/migrations.sql'
# /opt/mssql-tools/bin/sqlcmd -S localhost,1433 -U sa -P 'yourStrong(!)Password' -i '/tmp/seeds.sql'
