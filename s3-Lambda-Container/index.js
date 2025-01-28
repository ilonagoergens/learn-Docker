const AWS = require("aws-sdk")
const s3 = new AWS.S3()

exports.handler = async (event) => {
   const { action, fileName, fileContent } = event
   const bucketName = process.env.BUCKET_NAME

   try {
     if ( action === "upload" ) {
       const uploadParams = {
	 Bucket: bucketName,
	 Key: fileName,
         Body: fileContent
         }
	 await s3.putObject(uploadParams).promise()
	 return { statusCode: 200, body: `Datei ${fileName} erfolgreich hochgeladen` }
       } else if ( action === "read" ) {
       const readParams = {
	 Bucket: bucketName,
	 Key: fileName
	 }
	 const data = await s3.getObject(readParams).promise()
	 return { statusCode: 200, body: data.Body.toString("utf-8") }

       } else {
         return { statusCode: 400, body: "Ungültige Aktion" }
       }
     } catch (error) {
       console.error(error)
       return { statusCode: 500, body: `Fehler: ${error.message}`} 
     }
    }
    
