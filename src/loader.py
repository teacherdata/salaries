# -*- coding: utf-8 -*-
import json

def load_states():
    """ load states data """
    with open('src/data/states.json') as states_file:
        return json.load(states_file)

def load_salaries():
    """ load salary data """
    with open('src/data/salaries.json') as salaries_file:
        return json.load(salaries_file)
