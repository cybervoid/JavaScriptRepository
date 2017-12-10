# CompleteDeveloperCourse
A repository subdirectory for the Udemy course: <a href="https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/overview">The Complete Node.js Developer Course (2nd edition)</a>
<table>
<tr>
<td colspan="2">
Directory contents
</td>
</tr>
<tr>
<td>
<a href="./NoteApp">NoteApp (Section 3)</a>
</td>
<td>
A simple note app for learning how to use require()
</td>
</tr>
<tr>
<td>
<a href="./WeatherApp">WeatherApp (Section 4)</a>
</td>
<td>
Asynchronous non-blocking application for getting weather. To use, command: node app.js --address '1301 lombard street'
</td>
<td>
<a href="./ExpressWebserverApp">ExpressWebserverApp (Section 5)</a>
</td>
<td>
A web server with express.
</td>
</tr>
</table>

<h3>Node Modules</h3>
<dl>
<dt>NoteApp</dt>
<dd>npm i --save lodash</dd>
<dd>npm i -g nodemon  (debug only, do not use for release)</dd>
<dt>WeatherApp</dt>
<dd>npm install request@2.73.0   (\@2.73.0 will specify a version)</dd>
<dd>npm install yargs --save</dd>
</dl>

<h3>Exploring a node features and functions</h3>
<dl>
<dt>Start a node terminal.</dt>
<dt>Explore the encode and decode URI methods</dt>
<dd>encodeURIComponent('1301 lombard street')</dd>
<dd>decodeURIComponent('1301%20lombard%20street')</dd>
</dl>


<h3>Useful Links</h3>
<dl>
<dt><a href="https://nodejs.org/api/">Node JS API Library</a></dt>
<dd>A compilation of various available Node libraries and APIs</dd>
<dd>Example -> <a href="https://nodejs.org/api/os.html">OS</a></dd>
<dd>Example -> <a href="https://nodejs.org/api/fs.html">File System </a>-> <a href="https://nodejs.org/api/fs.html#fs_fs_appendfile_file_data_options_callback">fs.appendFile(string, string)</a></dd>
<dt><a href="https://www.npmjs.com/">NPM JS API Library</a></dt>
<dd>Example, search "lodash"</dd>
</dl>

<h3>NPM Commands</h3>
<dl>
<dt>Get NPM Version</dt>
<dd>npm -v</dd>
<dt>Creating an npm package</dt>
<dd>npm init</dd>
<dt>Installing a module</dt>
<dd>(g is a global flag) npm i -g npm</dd>
<dd>npm i --save lodash  (save flag updates the contents of the json file)</dd>
<dt>Update npm</dt>
<dd>npm i -g npm</dd>
</dl>

<h3>Nodemon Commands</h3>
<dl>
<dt>Nodeman will restart app.js server automatically after new changes are saved</dt>
<dd>npm i -g nodemon (global install)</dd>
<dd>npm i --save nodemon (global install)</dd>
<dt>starting nodeman for a project</dt>
<dd>nodeman app.js</dd>
</dl>

### Notes

Udemy Lecture 27 describes the call stack.


<dl>
<dt>Google Maps API<a href="https://maps.googleapis.com/maps/api/geocode/json">Endpoint</a></dt>
<dd>Maps API usage <a href="https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia">Example</a></dd>
</dl>
