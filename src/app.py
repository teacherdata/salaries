# -*- coding: utf-8 -*-
"""
    salaries

    web server for comparing teacher salary data
"""
import time
import requests
import json

from flask import Flask, render_template, request, jsonify
from src.loader import load_states, load_salaries
from src.parser import get_requested_states

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    states = load_states()
    salaries = load_salaries()
    requested = get_requested_states(request)

    return render_template('states.html', states=states, salaries=salaries, requested=requested)

if __name__ == '__main__':
    app.run(debug=True)
