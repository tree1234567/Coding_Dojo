from flask import Flask, redirect, render_template, request, flash, session
import re
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app, "walldb")
app.secret_key = "Jfkdsafkdjsaklfjdsalfjlak;"

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")
NAME_REGEX = re.compile(r'^[a-zA-Z]')
PASS_REGEX = re.compile(r'^\d.*[A-Z]|[A-Z].*\d')



@app.route('/')
def login_page():


    return render_template('/index.html')

@app.route('/eval_login', methods=['POST'])
def eval_log():

    email_query = "SELECT * FROM users WHERE email =:email"
    email_data = {"email": request.form['email']}
    user_valid = mysql.query_db(email_query, email_data)
    user = user_valid[0]
    session['id'] = user['id']
    session['first_name'] = user_valid[0]['first_name']


    message_query = "SELECT  messages.id, messages.message, messages.created_at, users.first_name, users.id as userid FROM messages JOIN users ON users_id = users.id"
    messages = mysql.query_db(message_query)
    print messages

    if len(user) > 0 and request.form['password'] == user['password']:
        return redirect('/the_wall')
    
    else:
        return redirect('/')


@app.route('/register')
def register():
    return render_template('register.html')


@app.route('/successful_register', methods=['POST'])
def successful_register():
    return render_template('wall.html')


@app.route('/the_wall')
def the_wall():
    comment_query = "SELECT  comments.id, comments.comment, comments.created_at, users.first_name, comments.messages_id FROM comments JOIN users ON users_id = users.id"

    comments = mysql.query_db(comment_query)

    message_query = "SELECT  messages.id, messages.message, messages.created_at, users.first_name, users.id as userid FROM messages JOIN users ON users_id = users.id ORDER by messages.created_at DESC"
    messages = mysql.query_db(message_query)

    return render_template('wall.html', all_messages = messages, all_comments = comments)

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')



@app.route('/register_eval', methods=['POST'])
def register_eval():
    email= request.form['email']
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    password = request.form['password']
    password_confirm = request.form['password_confirm']

    session['first_name'] = request.form["first_name"]

    if len(email) < 1:
        flash('please enter an email')
    elif not EMAIL_REGEX.match(email):
        flash("Invalid Email Address!")


    if len(first_name) < 1:
        flash ('Please enter a first name')
    elif not NAME_REGEX.match(first_name):
        flash('No Numbers or Special Characters')

    if len(last_name)< 1:
        flash ('Please enter a last name')
    elif not NAME_REGEX.match(last_name):
        flash('No Numbers or Special Characters')

    if len(password) < 8:
        flash('Please a new/longer a password')
    # elif not PASS_REGEX.match(request.form['Password']): # Not working currently....
    #     flash('Password Requires you to have an upper case letter and number')
    elif password != password_confirm:
        flash('Passwords do not match')

    else: #time to check to see there is anyone else with that same email!
        email_query = "SELECT * FROM users WHERE email = :email"
        email_data = {"email": email}
        email_valid = mysql.query_db(email_query,email_data)
        user_email = email_valid
        if len(user_email) > 0:
            flash("User email already exists")
        else:
            add_new_user = "INSERT INTO users (first_name, last_name, email, password, created_at, updaed_at) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"

            add_new_user_data = {
                'first_name': first_name,
                'last_name': last_name,
                'email': email,
                'password': password 
            }
            mysql.query_db(add_new_user, add_new_user_data)
            
            return redirect('/the_wall')

    return redirect('/register')

@app.route('/add_comment', methods=["POST"])
def add_comment():
    # message_query = "SELECT * FROM messages WHERE id =:id"
    # message_data = {'id': request.form['message_id']}
    # messages = mysql.query_db(message_query, message_data)
    # insert_messages = messages[0]


    comment_query = "INSERT INTO comments (comment, created_at, updated_at, users_id, messages_id) VALUES (:comment, NOW(),NOW(), :users_id, :messages_id)"
    comment_data ={
        "comment": request.form['new_comment'],
        "users_id": session['id'],
        "messages_id": request.form['message_id']
        
        }
    mysql.query_db(comment_query, comment_data)

    return redirect('/the_wall')

@app.route('/add_message', methods=['POST'])
def add_message():
    new_message = "INSERT INTO messages (message, created_at, updated_at, users_id) VALUES (:message, NOW(), NOW(), :users_id)"

    message_data = {
        "message": request.form['new_message'],
        "users_id": session['id']
    }
    mysql.query_db(new_message, message_data)
    return redirect('/the_wall')

@app.route('/delete', methods=['POST'])
def delete():
    # print request.form['delete']
    # delete_query= "DELETE FROM messages where id = :id"
    # data ={'id': request.form['delete']}
    
    # mysql.query_db(delete,)
    return redirect('/the_wall')




app.run(debug = True)

