from datetime import datetime



# print t
# print t.hour, t.minute, t.second
# print (datetime.time.min)
# print(datetime.time.max)

# def date_creator(day, month, year): 
#     time = datetime.date(day, month, year)
#     return time

# t = date_creator(2017,1,2)
# t2= date_creator(2017,2,2)


# def time_comparison(t,t2):
#     if t > t2:
#         print "{} is later in the day than {}".format(t, t2)
#     else:
#         print "{} is fuck in the day than {}".format(t,t2)

# # def time_conflict(starttime,endtime):
# #     if starttime.year < endtime.year:
# #         event_hour = endtime.hour - starttime.hour
# #         event_minute = endtime.minute - starttime.minute
# #         event_time = datetime.time(event_hour,event_minute)
# #         print "Scheduled the event will last {}".format(event_time)
    
# #     elif starttime.day == endtime.day and starttime.minute < endtime.minute:
# #         event_hour = endtime.hour - starttime.hour
# #         event_minute = endtime.minute - starttime.minute
# #         event_time = datetime.time(event_hour,event_minute)
# #         print "Scheduled the event will last {}".format(event_time)

# #     else:
# #         print "Times conflict, you cannot schedule the beginning of the event to begin later than your end time, {} !< {}".format(starttime, endtime)



# time_comparison(t,t2)

# #formatting input, output, day comparison html date input and formatting between backend and front end

date =  datetime.now()

print date.date()