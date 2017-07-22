# -*- coding: utf-8 -*-
def get_requested_states(request):
    """ parse the request query string """
    requested = request.args.get('states')
    result = []

    if requested:
        if ',' in requested:
            result = requested.split(',')
        else:
            result.append(requested)
    else:
        result = ['CA', 'AZ', 'NY']

    return result
