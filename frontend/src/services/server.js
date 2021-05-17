
require('dotenv').config()
const express = require('express')
const cloudinary = require('cloudinary')
const formData = require('express-form-data')
const cors = require('cors')
//const { CLIENT_ORIGIN } = require('./config')

const app = express()

cloudinary.config({ 
  cloud_name: "dpwl3w24j", 
  api_key:"857515141779467", 
  api_secret: "eZAB-EB5qu5RFRMDeo6Jfc7wQcQ"
})
  
app.use(cors({ 
  origin: 'http://localhost:3000'
})) 

app.use(formData.parse())

app.post('/image-upload-single', (req, res) => {
  const path = Object.values(Object.values(req.files)[0])[0].path
  cloudinary.uploader.upload(path)
    .then(image => res.json([image]))
})

app.listen(process.env.PORT || 8080, () => console.log('👍'))
