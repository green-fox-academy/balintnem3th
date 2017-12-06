from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

def to_the_center(z,y):
    center_line = canvas.create_line(z,y,150,150,fill="red")

to_the_center(0,0)

for x in range(16):   
    z = 0
    y = x*20
    to_the_center(z,y)


for x in range(16):   
    z = x*20
    y = 0
    to_the_center(z,y)

for x in range(16):   
    z = 300
    y = 300-(x*20)
    to_the_center(z,y)

for x in range(16):   
    z = 300-(x*20)
    y = 300
    to_the_center(z,y)

root.mainloop()