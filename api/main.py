from flask import Flask, request, jsonify
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import json
from flask import Flask, request, jsonify
from fpdf import FPDF


app = Flask(__name__)
CORS(app)
pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", size = 15)

cors = CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
})


@app.route('/details', methods=['POST'])
def query_records():
    a=request.get_json()
    b=[]
    for i in a['skills']:
        pdf.cell(200, 10, txt = i['skill'], ln = 1, align = 'C')
    pdf.output("GFG.pdf")   

    return json.dumps({'success':True}), 200, {'ContentType':'application/json'}

if __name__ == "__main__":
    app.run(debug=True)