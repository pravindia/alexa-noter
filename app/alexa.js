exports.handler = function(request, callback) {
   // Populate this with your own application id
   if (request.session.application.applicationId !==
     "amzn1.ask.skill.6bf706c8-0589-41db-ac22-ab8e659610c0")
     callback("Invalid application id!");
   
   if (request.request.type === "LaunchRequest")
     createResponse("You invoked this skill with a launch request.", callback);
   else if (request.request.type === "IntentRequest")
     createResponse("You invoked this skill with " +
       request.request.intent.name + ".", callback);
   else
     createResponse("You invoked this skill with an unknown request.", callback);
 }
 
 function createResponse(text, callback) {
   callback({
     "version": "1.0",
     "response": {
       "shouldEndSession": true,
       "outputSpeech": {
         "type": "PlainText",
         "text": text
       }
     }
   });
 }