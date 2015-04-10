System.config({
  "baseURL": "./",
  "transpiler": "babel",
  //COMMENTARE QUESTE RIGHE PERCHE' DA PROBLEMI CON generators !!!
  //INOLTRE COPIARE FILE external-helpers.js DA CARTELLA jspm_packages\npm\babel@4.7.16 --> jspm_packages\npm
  /*"babelOptions": {
    "optional": [
      "runtime"
    ]
  },*/
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel@4.7.16",
    "babel-runtime": "npm:babel-runtime@4.7.16",    
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@4.7.16": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

