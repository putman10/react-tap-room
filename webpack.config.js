
constconst webpack  webpack ==  requirerequire(('webpack''webpack'););
 constconst  {{ resolve  resolve }}  ==  requirerequire(('path''path'););

  modulemodule..exports exports ==  {{

  entry    entry::  [[
    resolve     resolve((__dirname__dirname,,  "src""src"))  ++  "/index.jsx""/index.jsx"
     ],],

  output    output::  {{
    filename     filename::  'app.bundle.js''app.bundle.js',,
    path     path:: resolve resolve((__dirname__dirname,,  'build''build'),),
     },},

  resolve    resolve::  {{
    extensions     extensions::  [[  '.js''.js',,  '.jsx''.jsx'  ]]
     },},

      modulemodule::  {{
    rules     rules::  [[
             {{
        test         test::  /\.jsx?$//\.jsx?$/,,
        loader         loader::  "babel-loader""babel-loader",,
        exclude         exclude::  /node_modules//node_modules/,,
        options         options::  {{
          presets           preset : [
            "es2015",
            "react"
          ]
        }
      },
    ],
  }
};