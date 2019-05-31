import json
import os

from flask import Flask
from flask import request
from flask import make_response


import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("ginraibot-firebase-adminsdk-rwbnk-21a32b7f9e.json")

firebase_admin.initialize_app(cred)
db = firestore.client()



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


def processRequest(req):
    # Parsing the POST request body into a dictionary for easy access.

    # Accessing the fields on the POST request boduy of API.ai invocation of the webhook

def processRequest(agent):
 nameParam = agent.parameters.namee;
 nameParam2 = agent.parameters.namee2;
 namParam3 = agent.parameters.number;
  j = agent.parameters.kj;
    req_dict = json.loads(request.data)
    print(req_dict)
    intent = req_dict["queryResult"]["intent"]["displayName"]

    if intent == 'Order':
            doc_ref = db.collection(u'names').document(u'data')
                doc = doc_ref.push().to_dict()
        speech = "รายการที่สั่งคือ"+(name+name2 || name2+name )+numm+kj+"ค่ะ"

    else:

        speech = "ผมไม่เข้าใจ คุณต้องการอะไร"

    res = makeWebhookResult(speech)

    return res


def makeWebhookResult(speech):

    return {
  "fulfillmentText": speech
    }


if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))

    print("Starting app on port %d" % port)

    app.run(debug=False, port=port, host='0.0.0.0', threaded=True)
