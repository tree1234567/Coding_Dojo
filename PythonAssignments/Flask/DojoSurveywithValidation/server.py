from flask import Flask, render_template, redirect, session, flash, request


app = Flask(__name__)

app.secret_key = "SuperSecret"


@app.route('/')
def index():

    return render_template('index.html')


@app.route('/eval', methods=['POST'])
def evaluation():
    session['UserName'] = request.form['UserName']
    session['comment'] = request.form['comment']
    session['FavLang'] = request.form['FavLang']




    if len(request.form['UserName']) > 0 and 0 < len(request.form['comment']) < 150:
        flash ("Success!") # just pass a string to the flash function
        print "it worked"
        return redirect('/success')
    else:
        
        if  len(request.form['comment']) < 1 or len(request.form['comment']) > 150 and len(request.form['UserName']) < 1:
            flash("Please input your name")
            flash('Please make your comment between 1 to 150 Characters.')
            # session.clear()
            return redirect ('/')

        elif  len(request.form['comment']) < 1 or len(request.form['comment']) > 150:
            flash("Please make your comment between 1 to 150 Characters.")
            # session.clear()
            return redirect('/')
        
        elif len(request.form['UserName']) < 1:
            flash("Please input your name")
            
            return redirect ('/')
        
        
    return redirect('/') 



@app.route('/success')
def success():

    return render_template('success.html')



app.run(debug=True) 