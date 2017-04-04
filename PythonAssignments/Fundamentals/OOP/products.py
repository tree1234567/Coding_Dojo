# The owner of a store wants a program to track products. Create a product class to fill the following requirements.

# Product class should have these attributes:
# Price
# Item Name
# Weight
# Brand
# Cost
# Status: default "for sale"
# Product class should have these methods:
# Sell: changes status to "sold"
# Add tax: takes tax as a decimal amount as a parameter and returns the price of the item including sales tax
# Return: takes reason for return as a parameter and changes status accordingly. If the item is being returned because it is defective change status to defective and change price to 0. If it is being returned in the box, like new mark it as for sale. If the box has been opened set status to used and apply a 20% discount.
# Display Info: show all product details.
# Every method that doesn't have to return something should return self so methods can be chained.

class product(object):

    def __init__(self, price, item_name, weight, brand, cost):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = "for sale"
        return None

    def sold(self):
        self.status = "sold"
        return self

    def add_tax(self):
        tax = .05 #I can dream...
        print "Price w/ tax: ",self.price + self.price * tax

    def item_return(self, condition):
        
        if condition =="defective":
            self.price = 0
            self.status = "defective"
            return self

        elif condition == "unopened":
            self.price = self.price
            self.status = "for sale"
            return self
        
        elif condition == "opened":
            self.price = (self.price *.8)
            self.status = "for sale"
            return self

    def product_info(self):
        print "Price: $",self.price
        print "Item name:", self.item_name
        print "Weight:", self.weight,"ounces"
        print "Brand:", self.brand
        print "Cost: $", self.cost
        print "Status", self.status
        return self


febreeze = product(10, "Air Freshener", 15, "Febreeze", 5)
febreeze.sold().item_return("opened").add_tax()
febreeze.product_info()
