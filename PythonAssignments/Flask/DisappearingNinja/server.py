from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route('/')
def home():
    return 'Definetly not any ninjas here'

@app.route('/ninja')
def ninjaTurtles():
    return render_template('/ninjaturtles.html')


@app.route('/ninja/<color>')
def ninja(color):
    return render_template('ninjas.html', ninja_color = color)

# @app.route('/ninja')
# def ninjaTurtles():
#     return render_template('/ninjaturtles.html')


# @app.route('/ninja/blue')
# def blueninja():
#     return render_template('/leonardo.html')

# @app.route('/ninja/red')
# def redninja():
#     return render_template('/raphael.html')
    

# @app.route('/ninja/purple')
# def purpleninja():
#     return render_template('/donatello.html')

# @app.route('/ninja/orange')
# def orangeninja():
#     return render_template('/michelangelo.html')






app.run(debug = True)