length = input("Length ?")
width = input("Width ?")
height = input("Height ?")

volume = int(length) * int(width) * int(height)
surface= 2*((int(length)*int(width))+ (int(width) * int(height))+(int(height)* int(length)) ) 

print("Volume = " , (volume) )
print("Surface = " , (surface) )