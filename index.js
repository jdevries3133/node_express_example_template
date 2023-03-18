const app = require("./stuffThatYouCanIgnore"); // take my word for it :)
const multer = require('multer');
const upload = multer({ dest: 'upload/'});


app.get("/", (req, res) => {
  res.send(
    `<h1>Hello world!</h1>
    <p>
      Thanks for visiting! Your browser is
      <pre>${req.headers["user-agent"]}</pre>
      <p>Today's time is ${new Date().toLocaleTimeString()}</p>


      <!-- The form is going to make a post request to the top-level route --!>
      <form method="POST" action="/" enctype="multipart/form-data">
        <input type="file" name="file" id="file" />
        <button>submit</button>
      </form>

    </p>`
  );
});

app.post('/', upload.single('file'), (req, res) => {
   /** When using the "single"
      data come in "req.file" regardless of the attribute "name". **/
  var tmp_path = req.file.path;

  /** The original name of the uploaded file
      stored in the variable "originalname". **/
  var target_path = 'uploads/' + req.file.originalname;

  /** A better way to copy the uploaded file. **/
  var src = fs.createReadStream(tmp_path);
  var dest = fs.createWriteStream(target_path);
  src.pipe(dest);
  src.on('end', function() { res.render('complete'); });
  src.on('error', function(err) { res.render('error'); });

});

app.listen(3000);
