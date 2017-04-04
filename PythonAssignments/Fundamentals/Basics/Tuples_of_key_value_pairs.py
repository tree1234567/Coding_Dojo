my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}


#x =[(v, k) for k, v in my_dict.iteritems()]
def tuple_of_key_value_pairs(my_dict):
    new_list_of_tuples = []
    for key,val in my_dict.iteritems():
        new_list_of_tuples.append((key,val))
    print new_list_of_tuples

tuple_of_key_value_pairs(my_dict)



