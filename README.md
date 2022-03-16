# final_project_local


###Git clone the project

#### Prerequesites
install influxdb
create a database by entering the following line : 

```bash
influx
SHOW  DATABASES
CREATE DATABASE dbAllMeasurements
```

* To run the fakesonde to produce data, follow the following lines from the main directory.

```bash
cd fakesonde 
node server.js
```

* To save the data into the database with intervals of 30 seconds, run :

```bash
cd backend
node save_in_db.js
```

* To launch the API on port localhost:3000, run 

```bash
cd app_API
DEBUG=app_API:* npm start
```
* To access the data, follow the following pattern:
localhost:3000/data/name_of_measurements_needed/dates_start, date_end




