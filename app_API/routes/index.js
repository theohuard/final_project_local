/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//   // A modifier plus tard
//   var stations = [{ id: 1, address: "" }]

//   res.render('index.html', {
//     title: 'DashBoard pour station météo',
//     stations: {
//       values: stations,
//       li: getLiStations(stations),
//       nb: stations.length
//     }
//   });
// });

// module.exports = router; 