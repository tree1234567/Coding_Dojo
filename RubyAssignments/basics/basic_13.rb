#Print odd numbers between 1-255
# puts (1..255).find_all{|i| i % 2 == 1}

#Print sum
# puts (1..5).reduce(:+)
#or 
# puts (1..5).inject {|sum, n| sum + n}


# Iterate through an array
#  arr = [1,3,5,7,9,13]
#  arr.each{|i| puts i}

#Average
# arr=[2, 10, 3]
# puts arr.inject{|sum, num| sum+num}.to_f/ arr.length

#array with odd numbers
# puts (1..255).select(&:odd?).to_a.to_s

#check if values are greater than y
# arr = [1, 3, 5, 7]
# y = 3
# puts arr.select{|i|i>y}.to_a.to_s




#square each item
# arr = [1, 5, 10, -2]
# puts arr.map{|i| i*i}

#Elminate Negatives
# arr = [1, 5, 10, -2, 0]
# puts arr.select{|i| i >= 0 }.to_a.to_s 

# Min, Max, Average
# arr = [1, 5, 10, 7, -2]
# def min_max_avg (arr)
#     avg = arr.inject{|sum,index| sum+index}.to_f/arr.length
#     puts "Max is: " + arr.max.to_s, "Min is: " + arr.min.to_s, "Average is: " + avg.to_s
# end
# min_max_avg(arr)

#Shift everthing forward
# arr = [1, 5, 10, 7, -2]
# puts arr.slice(1,arr.length).to_s

# arr = [-1, -3, 2]
# puts arr.collect!{|x| (x < 0)? "dojo":x}.to_s