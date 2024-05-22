#!/bin/bash

# TODO: change to use .env
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P password -d lutris -i /tmp/seeds.sh
