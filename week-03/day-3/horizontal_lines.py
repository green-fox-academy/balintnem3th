from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.

def horizontal_line(x,y):
    hor_line = canvas.create_line(x,y ,x+50, y ,fill="red", width=3)

horizontal_line(100,100)
horizontal_line(50,180)
horizontal_line(200,30)

root.mainloop()