from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route('/hello')
def hello():
  return "Hello World"

