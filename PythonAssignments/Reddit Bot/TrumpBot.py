"""
Create a trump bot that plots the positive words in a title post versus negative words in a trump post. 

X-axis is time

Positive Y-axis is amount of negative trump posts, Negative is amount Y-axis is positive things about trump.

add each day to over all plotting data
 
modules I needed are: praw, matplotib, pandas... maybe numpy, SKlearn.


additional files: graphing_data file, config file, post_id file, postive_key_word file, negative_keyword_list file.
"""
#Sudo Code

def bot_login():
    print("Logging in....")
    r = praw.Reddit(client_id= config.client_id,
                client_secret= config.client_secret,
                user_agent= config.user_agent,
                username= config.username,
                password= config.password)
    print("Logged in!")


    return r



"""
def pull_data():
    for posts in reddit (trending tab)politics subreddit:
        look for key word Trump
        if keyword == Trump and reddit post id isnt in post_id file:
            add post id to txt file
            return headline
            return time of post 
"""
"""
def eval_headline(headline):
    total_count = 0
    for headline in pull_data:
        turn headline into a mini list
        compare list to both negative_keyword_list and postive_keyword_list
        if list is more like negative_keyword_list:
            +1 count
        if list is more like positive_keyword_list:
            -1 count
        return total_count
        
"""
"""
def graph_post(count, time of post):
    add (total_count) and (time of post) to graphing_data file. 

"""
"""
def graph_update(graphing_data file):
    graph the whole pandas data frame
"""
"""def run_bot(r):
    
"""

r = bot_login()
run_bot(r)