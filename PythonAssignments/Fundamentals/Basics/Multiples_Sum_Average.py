from random import choice
import string

random_word=""
alphabet = string.letters
for letter in range(13):
    random_word+= choice(alphabet)
print random_word