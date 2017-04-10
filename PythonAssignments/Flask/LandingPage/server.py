from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')



@app.route('/ninjas')
def ninjas():
    return render_template('ninjas.html', name = "I", email="did it!")


@app.route('/process', methods=['POST'])
def dojos():
    print '-------------------------'
    print "Got Post info!"
    name = request.form['name']
    email = request.form['email']
    print email, name
    print '-------------------------'    
    return redirect('/')





app.run(debug = True)