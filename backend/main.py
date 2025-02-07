from flask import Flask, request, jsonify
from flask_cors import CORS
from dados import dados
app = Flask(__name__)
CORS(app)

@app.route("/acomodacoes")
def get_all():
    cidade = request.args.get("cidade") 
    if cidade:
        result = [acom for acom in dados if cidade.lower() in acom["localizacao"].lower()]
        if result:
            return jsonify(result)
        return jsonify({"erro": "Acomodações indisponiveis para essa região"}), 404
    return(dados)

@app.route("/acomodacoes/<id>")
def get_id(id):
    for acomodacao in dados:  
        if acomodacao["id"] == id:  
            return jsonify(acomodacao)
    return jsonify({"erro": "Acomodação não encontrada"}), 404  

app.run(host="0.0.0.0", port=5000, debug=True)
