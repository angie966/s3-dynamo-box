'use strict';
let AWS = require("aws-sdk");


let s3 = new AWS.S3();
let dynamodb = new AWS.DynamoDB();

//let params= JSON.parse(event.body);

let s3params={
  Bucket: "myminidropbox",
  Key: params.name,
  ContentType: params.type,
  ACL: 'public-read',
};


 s3.putObject(s3params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
 });

 
 s3.deleteObject(s3params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
 });

 var params = {
  TableName : 'Table',
  Item: {
     HashKey: 'haskey',
     NumAttribute: 1,
     BoolAttribute: true,
     ListAttribute: [1, 'two', false],
     MapAttribute: { foo: 'bar'},
     NullAttribute: null
  }
};
var documentClient = new AWS.DynamoDB.DocumentClient();

documentClient.put(params, function(err, data) {
  if (err) console.log("Unable to add item",err);
  else console.log("PutItem succeeded",data);
});

documentClient.delete(params, function(err, data) {
  if (err) console.log("Unable to add item",err);
  else console.log("PutItem succeeded",data);
});
  



module.exports.postprocess = (event) => {
  event.Records.forEach((record)=> {
    const filename= record.s3.object.key;
    const filedate= record.s3.object.date;
    console.log(`New .png object has been created: ${filename} (${filedate} bytes)`)
    item = {'key': {'S': file_name}}
    dynamodb_client.put_item(TableName=table_name, Item=item)
    dynamodb_client.delte_item(TableName=table_name,Item=item)
  })  

 

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
   callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
