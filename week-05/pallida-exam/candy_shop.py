# We run a Candy shop where we sell candies and lollipops
# One lollipop's price is 10$
# And it made from 5gr of sugar
# One candie's price is 20$
# And it made from 10gr of sugar
# we can raise their prices with a given percentage
#
# Create a CandyShop class
# It can store sugar and money as income. The constructor should take the amount of sugar in gramms.
# we can create lollipops and candies store them in the CandyShop's storage
# If we create a candie or lollipop the CandyShop's sugar amount gets reduced by the amount needed to create the sweets
# We can raise the prices of all candies and lollipops with a given percentage
# We can sell candie or lollipop with a given number as amount
# If we sell sweets the income will be increased by the price of the sweets and we delete it from the inventory
# We can buy sugar with a given number as amount. The price of 1000gr sugar is 100$
# If we buy sugar we can raise the CandyShop's amount of sugar and reduce the income by the price of it.
# The CandyShop should be represented as string in this format:
# "Inventory: 3 candies, 2 lollipops, Income: 100, Sugar: 400gr"

class CandyShop:

    def __init__(self,sugar):
        self.sugar = sugar
        self.lolipop_price = 10
        self.lolipop_sugar = 5
        self.candy_price = 20
        self.candy_sugar = 10
        self.money = 0
        self.candy = 0
        self.lollipop = 0
        self.income = 0
        


    def __str__(self):
       return 'Inventory: {} candies {} lollipops Income: {}  Sugar:  {}gr'.format(self.candy, self.lollipop,self.income, self.sugar)


    def create_sweets(self,item_name):
        if item_name == 'candy' :
            self.candy += 1
            self.sugar -= self.candy_sugar
        if item_name == 'lollipop' :
            self.lollipop += 1
            self.sugar -= self.lolipop_sugar
    def sell(self,item_name,amount):
        if item_name  == "candy":
            self.income += amount * self.candy_price
            self.candy -= amount
        else:
            self.income += amount * self.lolipop_price
            self.lollipop -= self.lollipop

    def buy_sugar(self,sugar_amount):
        self.sugar += sugar_amount
        self.income -= sugar_amount/10
    
    def raise_prices(self,amount):
        self.candy_price += amount/10
        self.lolipop_price += amount/10




candy_shop = CandyShop(300)
candy_shop.create_sweets("candy")
candy_shop.create_sweets("candy")
candy_shop.create_sweets("lollipop")
candy_shop.create_sweets("lollipop")
print(candy_shop)
# Should print out:
# Invetory: 2 candies, 2 lollipops, Income: 0, Sugar: 270gr
candy_shop.sell("candy", 1)
print(candy_shop) 
# Should print out:
# "Invetory: 1 candies, 2 lollipops, Income:20, Sugar: 270gr"
candy_shop.raise_prices(5)
candy_shop.sell("lollipop", 1)
print(candy_shop)
# Should print out:
# "Invetory: 1 candies, 1 lollipops, Income:30.5, Sugar: 270gr"
candy_shop.buy_sugar(300)
print(candy_shop)
# Should print out:
# "Invetory: 1 candies, 1 lollipops, Income:5, Sugar: 570gr"
