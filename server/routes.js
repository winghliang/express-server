module.exports = function(app){

  // If route is 'Get /', respond with current time as Unix Timestamp with MIME type text/html
  app.get('/', function(req, res){
    var date = new Date(); // create instance of Date() object
    // get Unix Timestamp.  The result is in miliseconds, so to format into seconds, divide by 1000 and round down to nearest whole number.
    var time = Math.floor( date.getTime() / 1000);
    var strTime = time.toString(); // convert time to string format
    res.type('text/html'); // set content-type to type text/html
		res.send(strTime);
	});

  // If route is 'POST /hello', respond with 'universe' with MIME type text/plain
  app.post('/hello', function(req, res){
    res.type('text/plain'); // set content-type to text/plain
    res.send('universe');
  });

  // For all other routes, respond with 'not found' with MIME type text/plain
  app.get('/*', function(req, res){
    res.type('text/plain'); // set content-type to text/plain
    res.send('not found');
  });

};
