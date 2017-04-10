from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)

app.secret_key = "ThisBeSecret!"



@app.route('/')
def index():
    return redirect('/user')


@app.route('/user')
def show_user():
    return render_template('user.html')

@app.route('/users', methods=['POST'])
def create_user():

    session['name'] = request.form['name']
    session['email'] = request.form['email']
    session['FavLang'] = request.form['FavLang']
    session['comment'] = request.form['comment']
    

    print '----------------------'
    print "Info received!"
    print '----------------------'
    print 'Name: ', session['name']
    print '----------------------'
    print 'Email: ', session['email']
    print '----------------------'
    print 'Favorite Language: ', session['FavLang']
    print '----------------------'
    print 'Comment: ', session['comment']

    print session
    
    return redirect('/results')


@app.route('/results')
def input_results():

    return render_template('results.html')








app.run(debug = True)