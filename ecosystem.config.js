module.exports = {
    apps : [{
      name   : "app",
      script : "./dist/app.js",
      error_file : "./error.log",
      out_file : "./output.log",
      exec_mode: cluster,
      instances: max,
    }]
  }
  