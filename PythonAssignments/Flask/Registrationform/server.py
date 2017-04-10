from flask import Flask, render_template, redirect, session, flash, request
import re


EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

NAME_REGEX = re.compile(r'^[a-zA-Z]')

PASS_REGEX = re.compile(r'^\d.*[A-Z]|[A-Z].*\d')

app = Flask(__name__)

app.secret_key = "UltraSecret"

@app.route('/')
def index():

    return render_template('index.html')



@app.route('/eval', methods=["POST"])
def formeval():
    session['Email'] = request.form['Email']
    session['FirstName'] = request.form['FirstName']
    session['LastName'] = request.form['LastName']
    session['Password'] = request.form['Password']
    session['PasswordConfirm'] = request.form['PasswordConfirm']

    if len(session['Email']) < 1:
        flash('please enter an email')
    elif not EMAIL_REGEX.match(request.form['Email']):
        flash("Invalid Email Address!")


    if len(session['FirstName']) < 1:
        flash ('Please enter a first name')
    elif not NAME_REGEX.match(request.form['FirstName']):
        flash('No Numbers or Special Characters')

    if len(session['LastName'])< 1:
        flash ('Please enter a last name')
    elif not NAME_REGEX.match(request.form['FirstName']):
        flash('No Numbers or Special Characters')

    if len(session['Password']) < 8:
        flash('Please a new/longer a password')
    elif not PASS_REGEX.match(request.form['Password']): # Not working currently....
        flash('Password Requires you to have an upper case letter and number')
    elif session['Password'] != session['PasswordConfirm']:
        flash('Passwords do not match')

    else:
        flash('Thank you for your submission')
        return redirect('/')
    
    return redirect('/')

    










app.run(debug = True)

