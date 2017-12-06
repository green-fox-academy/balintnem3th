from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

def create_line(x,y):
    to_the_center_line = canvas.create_line  (x, y, 150, 150, fill="green", width=3)


create_line(250,140)
create_line(300,300)
create_line(10,290)

root.mainloop()