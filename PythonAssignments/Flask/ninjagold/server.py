from flask import Flask, render_template, redirect, request, session
from random import randrange



app = Flask(__name__)

app.secret_key = "SECRET!!!"
@app.route('/')
def index():
    if 'TotalGold' in session:
        session['TotalGold'] += 0
    else:
        session['TotalGold'] = 0
    
    print session
    return render_template('index.html', totalGold = session['TotalGold'])




@app.route('/eval', methods = ["POST"])
def eval():
    session['goldfound'] = request.form['Building']

    if "activities" not in session:
        session['activities'] = []
    else:
        if session['goldfound'] == "Farm":
            x = randrange(10,21)
            print '-------------------------'
            print 'gold increased', x
            print '-------------------------'
            session['TotalGold'] += x
            session['activities'].append('Earned ' + str(x) + ' gold(s) from the Farm')

        elif session['goldfound'] == "Cave":
            x = randrange(5,11)
            print '-------------------------'
            print 'gold increased', x
            print '-------------------------'
            session['TotalGold'] += x
            session['activities'].append('Earned ' + str(x) + ' gold(s) from the Cave')

        elif session['goldfound'] == "House":
            x = randrange(2,6)
            print '-------------------------'
            print 'gold increased', x
            print '-------------------------'
            session['TotalGold'] += x
            session['activities'].append('Earned ' + str(x) + ' gold(s) from the House')
        
        elif session['goldfound'] == "Casino":
            x = randrange(-51,50)
            print '-------------------------'
            print 'gold increased', x
            print '-------------------------'
            session["TotalGold"] += x
            session['activities'].append('Earned ' + str(x) + ' gold(s) from the Casino')

    return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
    
    session['Reset'] = request.form['Reset']
    if session['Reset'] == 'Reset':
        print '-------------------------'
        print 'gold reset to zero'
        print '-------------------------'
        session.clear()
        session['TotalGold'] = 0



    return redirect('/')


app.run(debug = True)

#   <!--{% for key,value in session[goldfound].iteritems()%}
#             <p>{{value}}</p>
#         {%endfor%}-->