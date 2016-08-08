var exec = require("child_process").exec;

function start(response) {
  console.log('Request handler start called');

  var content = "empty";
  exec("ls -alh", function(err, stdout, stderr) {
    content = stdout;
    response.write(content);
    response.end();
  });
}

function upload(response) {
  setTimeout(function(){
    console.log('Request handler upload called');
    response.write('Upload page');
    response.end();
  }, 1000);
  console.log('Synchronous');
}


exports.start = start;
exports.upload = upload;
