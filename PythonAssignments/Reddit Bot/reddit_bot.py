import time

import praw

import config


def bot_login():
    print("Logging in....")
    r = praw.Reddit(client_id= config.client_id,
                client_secret= config.client_secret,
                user_agent= config.user_agent,
                username= config.username,
                password= config.password)
    print("Logged in!")


    return r

def run_bot(r):
    print("Obtaining 25 comments...")

    comments_replied_to = [] 
    for comment in r.subreddit('test').comments(limit=10):
        if "dog" in comment.body and comment.id not in comments_replied_to:
            print("string found! The ID is " + comment.id)
            #comment.reply(" Great comment! [Here](https://www.youtube.com/watch?v=EE-xtCF3T94) is another pokemon challenge!")
            print("Replied to comment " + str(comment.id))
            
            comments_replied_to.append(comment.id)
    
    
    print (comments_replied_to)
    
    print ("sleep time")
    time.sleep(10)

r = bot_login()
run_bot(r)
