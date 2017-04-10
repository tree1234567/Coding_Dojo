from flask import Flask, render_template, session, request, redirect
from random import randrange

app = Flask(__name__)

app.secret_key="MYFUCKINGSECRETKEY"
GuessNum = randrange(1,101)

@app.route('/')
def index():
    print GuessNum

    return render_template('index.html')

@app.route('/eval', methods=['POST'])
def userguess():
    session['guess'] = request.form['user_num']
    print session['guess']
    if int(session['guess']) > GuessNum:
        return redirect('/toohigh') 

    elif int(session['guess']) < GuessNum:
        return redirect('/toolow')

    elif int(session['guess']) == GuessNum:
        return redirect ('/success')

@app.route('/toohigh')
def toohigh():
    return render_template('toohigh.html')
    

@app.route('/toolow')
def toolow():
    return render_template('toolow.html')

@app.route('/success')
def success():
    return render_template('success.html')


app.run(debug = True)