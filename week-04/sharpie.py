'''Create Sharpie class
We should know about each sharpie their color (which should be a string), width 
(which will be a floating point number),
 ink_amount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as ink_amount
We can use() the sharpie objects
which decreases inkAmount'''

class Sharpie(object):
    def __init__(self,color,width,ink_amount = 100):
         self.color = color
         self.width = width
         self.ink_amount = ink_amount

    def use(self):
        self.ink_amount -=1

    def __str__(self):
        return ("color: " +  self.color + " width : "+ str(self.width) + " ink amount: " + str(self.ink_amount))

s1 = Sharpie("black",100.0,200)
print(s1)
s2 = Sharpie()
print(s2)