from flask import Flask, render_template, session, request, redirect

app = Flask(__name__)

app.secret_key = "IssaSecret"


@app.route('/')
def index():
    if 'count' in session:
        session['count'] +=1
    else:
        session['count'] = 0

    return render_template('index.html', count = session['count'])
    

@app.route("/addtwo")
def addtwo():

    session['count'] +=1

    return redirect('/')

@app.route('/reset')
def reset():
    session['count'] = -1

    return redirect('/')

app.run(debug = True)