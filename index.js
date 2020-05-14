const formidable = require('formidable')
const fs = require('fs-extra')
const info = require('./conf/info')
const express = require('express')
const app = express()
var httpsPort = 443
const generator = require('./generation/code-generator')
const validator = require('./validation/code-validator')
const requestInfo = require('./utils/RequestInfo')
const mongoDBManager = require('./utils/mongoDBManager')
const Guid = require('guid')
const constants = require('./constants')

app.use(express.static('public'))
app.use(express.json())

app.post('/statistics/entity', (req, res) => {

  res.write('{\n"Create Building Identity": "')
  res.write((req.body['Create Building Identity'] ? req.body['Create Building Identity'] : 'Create Building Identity is Missing') + '",\n')
  res.write('"Create Floor Identity": "')
  res.write((req.body['Create Floor Identity'] ? req.body['Create Floor Identity'] : 'Create Floor Identity is Missing') + '",\n')
  res.write('"Create Link of type \'BelongsTo\' between Floor and Building": "')
  res.write((req.body['Create Link of type \'BelongsTo\' between Floor and Building'] ? req.body['Create Link of type \'BelongsTo\' between Floor and Building'] : 'Create Link of type \'BelongsTo\' between Floor and Building is Missing') + '",\n')
  res.write('"Create Room1": "')
  res.write((req.body['Create Room1'] ? req.body['Create Room1'] : 'Create Room1 is Missing') + '",\n')
  res.write('"Create Link of type \'BelongsTo\' between Room1 and Floor": "')
  res.write((req.body['Create Link of type \'BelongsTo\' between Room1 and Floor'] ? req.body['Create Link of type \'BelongsTo\' between Room1 and Floor'] : 'Create Link of type \'BelongsTo\' between Room1 and Floor is Missing') + '",\n')
  res.write('"Create CO2 Sensor1 Identity": "')
  res.write((req.body['Create CO2 Sensor1 Identity'] ? req.body['Create CO2 Sensor1 Identity'] : 'Create CO2 Sensor1 Identity is Missing') + '",\n')
  res.write('"Create Link of type \'BelongsTo\' between CO2 Sensor1 and Room1": "')
  res.write((req.body['Create Link of type \'BelongsTo\' between CO2 Sensor1 and Room1'] ? req.body['Create Link of type \'BelongsTo\' between CO2 Sensor1 and Room1'] : 'Create Link of type \'BelongsTo\' between CO2 Sensor1 and Room1 is Missing') + '",\n')
  res.write('"Create Temperature Sensor2 Identity": "')
  res.write((req.body['Create Temperature Sensor2 Identity'] ? req.body['Create Temperature Sensor2 Identity'] : 'Create Temperature Sensor2 Identity is Missing') + '",\n')
  res.write('"Create Link of type \'BelongsTo\' between Temperature Sensor2 and Room1": "')
  res.write((req.body['Create Link of type \'BelongsTo\' between Temperature Sensor2 and Room1'] ? req.body['Create Link of type \'BelongsTo\' between Temperature Sensor2 and Room1'] : 'Create Link of type \'BelongsTo\' between Temperature Sensor2 and Room1 is Missing') + '",\n')
  res.write('"Create Room2": "')
  res.write((req.body['Create Room2'] ? req.body['Create Room2'] : 'Create Room2 is Missing') + '",\n')
  res.write('"Create Link of type \'BelongsTo\' between Room2 and Floor": "')
  res.write((req.body['Create Link of type \'BelongsTo\' between Room2 and Floor'] ? req.body['Create Link of type \'BelongsTo\' between Room2 and Floor'] : 'Create Link of type \'BelongsTo\' between Room2 and Floor is Missing') + '",\n')
  res.write('"Create CO2 Sensor3 Identity": "')
  res.write((req.body['Create CO2 Sensor3 Identity'] ? req.body['Create CO2 Sensor3 Identity'] : 'Create CO2 Sensor3 Identity is Missing') + '",\n')
  res.write('"Create Link of type \'BelongsTo\' between CO2 Sensor3 and Room2": "')
  res.write((req.body['Create Link of type \'BelongsTo\' between CO2 Sensor3 and Room2'] ? req.body['Create Link of type \'BelongsTo\' between CO2 Sensor3 and Room2'] : 'Create Link of type \'BelongsTo\' between CO2 Sensor3 and Room2 is Missing') + '",\n')
  res.write('"Create Temperature Sensor4 Identity": "')
  res.write((req.body['Create Temperature Sensor4 Identity'] ? req.body['Create Temperature Sensor4 Identity'] : 'Create Temperature Sensor4 Identity is Missing') + '",\n')
  res.write('"Create Link of type \'BelongsTo\' between Temperature Sensor4 and Room2": "')
  res.write((req.body['Create Link of type \'BelongsTo\' between Temperature Sensor4 and Room2'] ? req.body['Create Link of type \'BelongsTo\' between Temperature Sensor4 and Room2'] : 'Create Link of type \'BelongsTo\' between Temperature Sensor4 and Room2 is Missing') + '",\n')
  res.write('"Create Data Product1 for CO2": "')
  res.write((req.body['Create Data Product1 for CO2'] ? req.body['Create Data Product1 for CO2'] : 'Create Data Product1 for CO2 is Missing') + '",\n')
  res.write('"Create Data Product2 for Temperature": "')
  res.write((req.body['Create Data Product2 for Temperature'] ? req.body['Create Data Product2 for Temperature'] : 'Create Data Product2 for Temperature is Missing') + '",\n')
  res.write('"Create Link of type \'AtDataProduct\' between CO2 Sensor1 and CO2 Data Product1": "')
  res.write((req.body['Create Link of type \'AtDataProduct\' between CO2 Sensor1 and CO2 Data Product1'] ? req.body['Create Link of type \'AtDataProduct\' between CO2 Sensor1 and CO2 Data Product1'] : 'Create Link of type \'AtDataProduct\' between CO2 Sensor1 and CO2 Data Product1 is Missing') + '",\n')
  res.write('"Create Link of type \'AtDataProduct\' between CO2 Sensor3 and CO2 Data Product1": "')
  res.write((req.body['Create Link of type \'AtDataProduct\' between CO2 Sensor3 and CO2 Data Product1'] ? req.body['Create Link of type \'AtDataProduct\' between CO2 Sensor3 and CO2 Data Product1'] : 'Create Link of type \'AtDataProduct\' between CO2 Sensor3 and CO2 Data Product1 is Missing') + '",\n')
  res.write('"Create Link of type \'AtDataProduct\' between Temperature Sensor2 and Temperature Data Product2": "')
  res.write((req.body['Create Link of type \'AtDataProduct\' between Temperature Sensor2 and Temperature Data Product2'] ? req.body['Create Link of type \'AtDataProduct\' between Temperature Sensor2 and Temperature Data Product2'] : 'Create Link of type \'AtDataProduct\' between Temperature Sensor2 and Temperature Data Product2 is Missing') + '",\n')
  res.write('"Create Link of type \'AtDataProduct\' between Temperature Sensor4 and Temperature Data Product2": "')
  res.write((req.body['Create Link of type \'AtDataProduct\' between Temperature Sensor4 and Temperature Data Product2'] ? req.body['Create Link of type \'AtDataProduct\' between Temperature Sensor4 and Temperature Data Product2'] : 'Create Link of type \'AtDataProduct\' between Temperature Sensor4 and Temperature Data Product2 is Missing') + '"\n}')

  res.end()
})

app.post('/statistics/group', (req, res) => {
  if (req.body['type']) {
    if (req.body['type'] === 'Create') {
      res.write('{\n"Create Group": "')
      res.write((req.body['Create Group'] ? req.body['Create Group'] : 'Create Group is Missing') + '",\n')
      res.write('"Create MemberOf Link": "')
      res.write((req.body['Create MemberOf Link'] ? req.body['Create MemberOf Link'] : 'Create MemberOf Link is Missing') + '"\n}')
    }
    if (req.body['type'] === 'Delete') {
      res.write('{\n"Delete MemberOf Link": "')
      res.write((req.body['Delete MemberOf Link'] ? req.body['Delete MemberOf Link'] : 'Delete MemberOf Link is Missing') + '",\n')
      res.write('"Delete Group": "')
      res.write((req.body['Delete Group'] ? req.body['Delete Group'] : 'Delete Group is Missing') + '"\n}')
    }

    if (req.body['type'] !== 'Create' && req.body['type'] !== 'Delete') {
      res.write('{\n"type": "type should be \'Create\' or \'Delete\' "\n}')
    }
  }
  else {
    res.write('{\n"type": "Missing \'type\'" \n}')
  }
  res.end()
})

app.post('/fileupload', (req, res) => {
  var form = new formidable.IncomingForm()
  form.parse(req, function (err, fields, files) {
    if (err) {
      req.app.locals.errorMessage = 'Form could not be loaded.'
      res.redirect('/ErrorPage')
    }

    var newId = Guid.create().value
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify({ requestId: newId, origin: req.headers.origin, validate: (fields.validate === 'true') }))
    res.end()

    requestInfo.createRequest(newId).then((request) => {
      info.requestReady[request.id] = false
      info.generationLogPosition[request.id] = 0
      info.validationLogPosition[request.id] = 0

      setImmediate(function () {
        request.createRequestFolder()
        request.IP = req.connection.remoteAddress

        generator.saveFormInfoToRequest(fields, files, request)

        info.stage[request.id] = 0
        info.stageReady[request.id] = true
      })
    })
  })
})

app.get('/progress', (req, res) => {
  if (info.requestReady[req.query.requestId]) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify({ ready: true }))
    res.end()
  } else {
    requestInfo.getRequest(req.query.requestId).then((request) => {
      var newLog = ''
      if (request) {
        try {
          var data = fs.readFileSync(request.getGenerationLogFile(), 'utf8')
          if (info.generationLogPosition[request.id] !== data.length) {
            if (info.generationLogPosition[request.id] === 0) {
              newLog += 'Generation:\n'
            }

            newLog += data.slice(info.generationLogPosition[request.id])
            info.generationLogPosition[request.id] = data.length
          }
        } catch (err) {
        }

        if (req.query.validate === 'true') {
          try {
            data = fs.readFileSync(request.getValidationLogFile(), 'utf8')

            if (info.validationLogPosition[request.id] !== data.length) {
              if (info.validationLogPosition[request.id] === 0) {
                newLog += '\nValidation:\n'
              }

              newLog += data.slice(info.validationLogPosition[request.id])
              info.validationLogPosition[request.id] = data.length
            }
          } catch (err) {
          }
        }

        var content = JSON.stringify({ ready: false, newLog: newLog })

        res.writeHead(200, { 'Content-Type': 'application/json', 'Content-Length': content.length })
        res.write(content)
        res.end()

        if (info.stageReady[request.id]) {
          info.stageReady[request.id] = false
          info.stage[request.id] += 1

          switch (info.stage[request.id]) {
            case 1:
              setImmediate(generator.generateSamples, request)
              break

            case 2:
              setImmediate(generator.generateDocs, request)
              break

            case 3:
              setImmediate(generator.generateArchive, request)
              break

            case 4:
              setImmediate(validator.validateGeneratedSamples, request)
              break
          }
        }
      } else {
        content = JSON.stringify({ ready: false, newLog: '' })

        res.writeHead(200, { 'Content-Type': 'application/json', 'Content-Length': content.length })
        res.write(content)
        res.end()
      }
    })
  }
})

app.get('/readyindex', (req, res) => {
  req.app.locals.requestId = req.query.requestId
  req.app.locals.validate = (req.query.validate === 'true')
  req.app.locals.origin = req.query.origin
  req.app.locals.ready = true

  res.redirect('/')
})

app.get('/', (req, res) => {
  fs.readFile('index.html', function (err, data) {
    if (err) {
      req.app.locals.errorMessage = 'Page not found'
      res.redirect('/ErrorPage')
    }

    if (req.app.locals.ready) {
      req.app.locals.ready = false
      data += '<div id="logs"><center><p style="color: #9073FF;">If you want to see the results later save next link: </p>'
      data += '<p><a href="/results?requestID=' + req.app.locals.requestId + '" class="link">' + req.app.locals.origin + '/results?requestID=' + req.app.locals.requestId + '</a></p>'
      data += '<p><a download href="/generationLogFile?requestID=' + req.app.locals.requestId + '" class="link">Generation Log File</a></p>\n'
      if (req.app.locals.validate) {
        data += '<p><a download href="/validationLogFile?requestID=' + req.app.locals.requestId + '" class="link" onclick="isValidationReady()">Validation Log File</a></p>\n'
      }
      data += '<p style="color: #9073FF;">Generated examples:</p>'
      data += '<p><a download href="/archive?requestID=' + req.app.locals.requestId + '" class="link">Download</a><center>'
      data += '<p><a target="_blank" href="/docsOfTrust?requestID=' + req.app.locals.requestId + '" class="link">View</a></center><div>\n'
    }

    res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length })
    res.write(data)
    res.end()
  })
})

app.get('/ErrorPage', (req, res) => {
  var content = '<h2> ' + req.app.locals.errorMessage + '</h2>'
  res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': content.length })
  res.write(content)
  res.end()
})

app.route('/Statistics')
  .get(function (req, res) {
    mongoDBManager.getStatistics().then((stats) => {
      var TryCount = stats.TryCount
      var SuccessCount = stats.SuccessCount
      var FailedCount = stats.FailedCount

      fs.readFile('statistics.html', function (err, data) {
        if (!err) {
          res.writeHead(200, { 'Content-Type': 'text/html' })

          data = data.toString().replace('[TryCountValue]', TryCount)
          data = data.toString().replace('[SuccessCountValue]', SuccessCount)
          data = data.toString().replace('[FailedCountValue]', FailedCount)
          data = data.toString().replace('[ValidationsValue]', FailedCount + SuccessCount)
          SuccessCount = 0
          FailedCount = 0
          res.write(data)
        }

        res.end()
      })
    })
  })

app.get('/generationLogFile', (req, res) => {
  requestInfo.createRequest(req.query.requestID).then((request) => {
    if (!request) {
      req.app.locals.errorMessage = 'Log file does not exist.'
      res.redirect('/ErrorPage')
    } else {
      fs.readFile(request.getGenerationLogFile(), function (err, data) {
        if (!err && data) {
          res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Content-Length': data.length,
            'Content-Disposition': 'attachment; filename="generation.txt"'
          })
          res.write(data)
          res.end()
        } else {
          req.app.locals.errorMessage = 'Log file does not exist.'
          res.redirect('/ErrorPage')
        }
      })
    }
  })
})

app.get('/validationLogFile', (req, res) => {
  requestInfo.createRequest(req.query.requestID).then((request) => {
    if (!request) {
      req.app.locals.errorMessage = 'Log file does not exist.'
      res.redirect('/ErrorPage')
    } else {
      fs.readFile(request.getValidationLogFile(), function (err, data) {
        if (!err && data) {
          res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Content-Length': data.length,
            'Content-Disposition': 'attachment; filename="validation.txt"'
          })
          res.write(data)
          res.end()
        } else {
          req.app.locals.errorMessage = 'Log file does not exist.'
          res.redirect('/ErrorPage')
        }
      })
    }
  })
})

app.get('/archive', (req, res) => {
  requestInfo.createRequest(req.query.requestID).then((request) => {
    if (!request) {
      req.app.locals.errorMessage = 'Archive does not exist.'
      res.redirect('/ErrorPage')
    } else {
      fs.readFile(request.getArchive(), function (err, data) {
        if (!err && data) {
          res.header('Content-Type', 'application/zip')
          res.header('Content-Disposition', 'attachment; filename="samples.zip"')
          res.write(data)
          res.end()
        } else {
          req.app.locals.errorMessage = 'Archive does not exist.'
          res.redirect('/ErrorPage')
        }
      })
    }
  })
})

app.get('/docsOfTrust', (req, res) => {
  requestInfo.createRequest(req.query.requestID).then((request) => {
    if (!request) {
      req.app.locals.errorMessage = 'Page not found'
      res.redirect('/ErrorPage')
    } else {
      fs.readFile(request.getDocsPage(), function (err, data) {
        if (err) {
          req.app.locals.errorMessage = 'Page not found'
          res.redirect('/ErrorPage')
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length })
          res.write(data)
          res.end()
        }
      })
    }
  })
})

app.get('/results', (req, res) => {
  requestInfo.getRequest(req.query.requestID).then((request) => {
    if (!request) {
      req.app.locals.errorMessage = 'Page not found'
      res.redirect('/ErrorPage')
    } else {
      fs.readFile('results.html', function (err, data) {
        if (err) {
          req.app.locals.errorMessage = 'Page not found'
          res.redirect('/ErrorPage')
        } else {
          data = data.toString().replace(/\[REQUEST_ID\]/g, req.query.requestID)
          if (request.totalTests === 0) {
            data = data.toString().replace('[VALIDATION]', 'none')
          } else {
            data = data.toString().replace('[VALIDATION]', 'block')
          }

          if (request) { res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length }) }
          res.write(data)
          res.end()
        }
      })
    }
  })
})

app.get('/specs/*', (req, res) => {
  var parts = req.path.split('/')
  var name = parts[parts.length - 1]
  var extension = name.split('.')[name.split('.').length - 1]

  requestInfo.getRequest(req.query.requestID).then((request) => {
    fs.readFile(request.getSpecsLocation(extension, name), function (err, data) {
      if (err) {
        req.app.locals.errorMessage = 'Page not found'
        res.redirect('/ErrorPage')
      } else {
        if (extension === 'zip') {
          res.header('Content-Type', 'application/zip')
          res.header('Content-Disposition', 'attachment; filename=' + name)
          res.write(data)
        } else {
          res.header('Content-Type', 'application/json')
          res.header('Content-Disposition', 'attachment; filename=' + name)
          res.write(data)
        }
        res.end()
      }
    })
  })
})

if (info.onWindows) {
  httpsPort = 8081
}

const https = require('https')
https.createServer({
  key: fs.readFileSync(constants.CERTIFICATE_KEY),
  cert: fs.readFileSync(constants.CERTIFICATE_CERT),
  ca: fs.readFileSync(constants.CERTIFICATE_CA_BUNDLE)
}, app)
  .listen(httpsPort)

var httpPort = 80
if (info.onWindows) {
  httpPort = 8082
}

const httpApp = express()
httpApp.get('/*', (req, res) => {
  var host = req.headers.host
  if (host.endsWith(':' + httpPort)) {
    host = host.replace(':' + httpPort, ':' + httpsPort)
  }
  res.redirect('https://' + host + req.url)
})
httpApp.listen(httpPort)
