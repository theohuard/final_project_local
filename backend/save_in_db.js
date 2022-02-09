
function get_data_sensors() {

    const fs = require('fs')

    var data = JSON.parse(fs.readFileSync('/dev/shm/sensors', 'utf8'));

    return data;

    }

function get_data_gps() {

    const fs = require('fs')

    var data = fs.readFileSync('/dev/shm/gpsNmea', 'utf8');

    var data_arr = data.split(',');

    var lat = Math.floor(data_arr[2]/100) + (data_arr[2]-Math.floor(data_arr[2]/100)*100)/60;
    var lon = Math.floor(data_arr[4]/1000) + (data_arr[4]-Math.floor(data_arr[4]/1000)*1000)/60;
    var altitude = Math.floor(data_arr[11]);

    var datas = []; 

    datas[0] = lat;
    datas[1] = lon;
    datas[2] = altitude;

    return datas;
    }

function get_data_rain() {

    const fs = require('fs')
    var data = fs.readFileSync('/dev/shm/rainCounter.log', 'utf8');
    data = data.replace(/(\r\n|\n|\r)/gm, "");
    var toDate = Date.parse(data);

    return toDate;

    }


function writeData_gps(data_gps, data_sens) {

    const Influx = require('influx');
    const express = require('express')
    const http = require('http')
    const os = require('os')
    const app = express()

    var toDate = Date.parse(data_sens.date);

    const influx= new Influx.InfluxDB({
        host: 'localhost',
        database: 'db_all_tables',
        port:8086,
        schema: [
            {
                measurement: 'gps',
                fields: { 
                    time_measure: Influx.FieldType.INTEGER,
                    longitude: Influx.FieldType.FLOAT, 
                    latitude: Influx.FieldType.FLOAT, 
                    altitude: Influx.FieldType.FLOAT, 
                }
                , tags: [ 'host' ]
            }
        ]
    });

    module.exports=influx;
    influx.getDatabaseNames()
    .then(names=>{
       // console.log(names)
        console.log("checking database status");
        if(!names.includes('db_all_tables')){
            console.log("Had to create a new database named db_all_tables");
            return influx.createDatabase('db_all_tables');
        }else{
            console.log("We found the database")}

    });
        const datas = [];
        datas.push({
            measurement: "gps",
            tags: {
                host: os.hostname()
            },
            fields: {
                time_measure: toDate,
                latitude: data_gps[0], 
                longitude: data_gps[1], 
                altitude: data_gps[2], 
            }
        });
        influx.writePoints(datas).then(() => console.log("worked for gps"), (e) => console.error(e));

}

    
    
function writeData_sensors(data) {

    const Influx = require('influx');
    const express = require('express');
    const http = require('http');
    const os = require('os');

    const app = express();

    var toDate = Date.parse(data.date);
    console.log(toDate);

    const influx= new Influx.InfluxDB({
        host: 'localhost',
        database: 'db_all_tables',
        port:8086,
        schema: [
            {
                measurement: 'sensors',
                fields: { 
                    time_measure: Influx.FieldType.INTEGER,
                    temperature: Influx.FieldType.FLOAT, 
                    pressure: Influx.FieldType.FLOAT, 
                    humidity: Influx.FieldType.FLOAT, 
                    luminosity: Influx.FieldType.FLOAT, 
                    wind_heading: Influx.FieldType.FLOAT, 
                    wind_speed_avg: Influx.FieldType.FLOAT,
                    wind_speed_max: Influx.FieldType.FLOAT, 
                    wind_speed_min: Influx.FieldType.FLOAT 

                }
                , tags: [ 'host' ]
            }
        ]
    });


    module.exports=influx;

    influx.getDatabaseNames()
    .then(names=>{
       // console.log(names)
        console.log("checking database status");
        if(!names.includes('db_all_tables')){
            console.log("Had to create a new database named v");
            return influx.createDatabase('db_all_tables');
        }else{
            console.log("We found the database")}

    });


        const datas = [];
        datas.push({
            measurement: "sensors",
            tags: {
                host: os.hostname()
            },
            
            fields: {
                time_measure: toDate,
                temperature: data.measure[0].value,
                pressure: data.measure[1].value,
                humidity: data.measure[2].value,
                luminosity:data.measure[3].value, 
                wind_heading: data.measure[4].value, 
                wind_speed_avg: data.measure[5].value, 
                wind_speed_max: data.measure[6].value, 
                wind_speed_min: data.measure[7].value, 
            }
        });
        influx.writePoints(datas).then(() => console.log("worked for sensors"), (e) => console.error(e));
}


function writeData_rain(data_rain, data_sens) {

    const Influx = require('influx');
    const express = require('express')
    const http = require('http')
    const os = require('os')

    const app = express()
    var toDate = Date.parse(data_sens.date);

    const influx= new Influx.InfluxDB({
        host: 'localhost',
        database: 'db_all_tables',
        port:8086,
        schema: [
            {
                measurement: 'rain',
                fields: { 
                    time_measure: Influx.FieldType.INTEGER,
                    time_fall: Influx.FieldType.INTEGER
                }
                , tags: [ 'host' ]
            }
        ]
    });


    module.exports=influx;

    influx.getDatabaseNames()
    .then(names=>{
       // console.log(names)
        console.log("checking database status");
        if(!names.includes('db_all_tables')){
            console.log("Had to create a new database named db_all_tables");
            return influx.createDatabase('db_all_tables');
        }else{
            console.log("We found the database")}

    });


        const datas = [];
        datas.push({
            measurement: "rain",
            tags: {
                host: os.hostname()
            },
            fields: {
                time_measure: toDate,
                time_fall: data_rain
            }
        });
        influx.writePoints(datas).then(() => console.log("worked for rain"), (e) => console.error(e));
}


function main(){

    data_sensors = get_data_sensors();
    data_gps = get_data_gps();
    data_rain = get_data_rain();
    
    writeData_sensors(data_sensors);
    writeData_gps(data_gps, data_sensors);
    writeData_rain(data_rain, data_sensors);
    
    setTimeout(main, 30000);

}

main();




