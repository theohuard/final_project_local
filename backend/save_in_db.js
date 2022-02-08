const Influx = require('influx');
const express = require('express')
const http = require('http')
const os = require('os')

const app = express()

const influx= new Influx.InfluxDB({
    host: 'localhost',
    database: 'db_logs_data',
    port:8086,
    schema: [
        {
            measurement: 'piensg027',
            fields: { temperature: Influx.FieldType.FLOAT, 
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
    console.log(names)
    console.log("checking database status");
    if(!names.includes('db_logs_data')){
        console.log("Had to create a new database named db_logs_data");
        return influx.createDatabase('db_logs_data');
    }else{
        console.log("We found the database")}

});


const fs = require('fs')

var data = JSON.parse(fs.readFileSync('/dev/shm/sensors', 'utf8'));
   console.log(data)
   console.log(data.date)
   data.measure.forEach(m => {
       console.log(m.name);
   })
   console.log(data.measure[0].name)

   console.log(data.measure[0].value)



function writeDatas(data) {
    const datas = [];
    //for (let i = 0; i < 7; i++) {
        datas.push({
            measurement: "piensg027",
            tags: {
                host: os.hostname()
            },
            time: data.date,
            fields: {
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
    //}
    influx.writePoints(datas).then(() => console.log("worked"), (e) => console.error(e));
}

writeDatas(data);
