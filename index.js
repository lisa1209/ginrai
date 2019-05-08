import json
import os

from flask import Flask
from flask import request
from flask import make_response

# Flask app should start in global layout
app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():

    req = request.get_json(silent=True, force=True)
    res = processRequest(req)
    res = json.dumps(res, indent=4)
    r = make_response(res)
    r.headers['Content-Type'] = 'application/json'
    return r

   const functions = require('firebase-functions');
   const {WebhookClient} = require('dialogflow-fulfillment');
   //const {Card, Suggestion} = require('dialogflow-fulfillment');

   const admin = require('firebase-admin');
   admin.initializeApp(
     {
     credential: admin.credential.applicationDefault(),
    databaseURL: 'https://ginraibot.firebaseio.com/'
   }
   );

   process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

   exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
     const agent = new WebhookClient({ request, response });
     console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
     console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

     function orr(agent){
     const nameParam = agent.parameters.namee;
      const nameParam2 = agent.parameters.namee2;
      // const nameParam3 = agent.parameters.namee2;

     const name = nameParam;
       const name2 = nameParam2;
       //const name3 = nameParam3;

       agent.add('รายการที่สั่งคือ'+name+name2 || name2+name +'ค่ะ');

       return admin.database().ref('/names').push({name: name+name2 || name2+name }).then((snapshot) =>{
         console.log('database write sucessful:' +snapshot.ref.toString());
     }
     );
     }




     function fallback(agent) {
       agent.add(`I didn't understand`);
       agent.add(`I'm sorry, can you try again?`);
     }

     let intentMap = new Map();
     intentMap.set('Order',orr);
   intentMap.set('cancer',orr);
     agent.handleRequest(intentMap);
   });



if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))

    print("Starting app on port %d" % port)

    app.run(debug=False, port=port, host='0.0.0.0', threaded=True)
