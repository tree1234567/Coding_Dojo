from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello world!"


@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/about')
def about_me():
    return render_template('about_me.html')


app.run(debug = True)


