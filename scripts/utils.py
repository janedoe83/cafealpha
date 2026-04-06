def flag_emoji(code):
    return ''.join(chr(127397 + ord(c)) for c in code.upper())