from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
# fill the canvas with a checkerboard pattern.
#first line
def draw_square(x):
    square = canvas.create_rectangle(37.5*x,0,37.5*(x+1),37.5, fill="black")
for x in range(0,8,2):
    draw_square(x)

def draw_square2(x):
    square = canvas.create_rectangle(37.5*x,37.5,37.5*(x+1),37.5*2, fill="black")
for x in range(1,8,2):
    draw_square2(x)

def draw_square3(x):
    square = canvas.create_rectangle(37.5*x,37.5*2,37.5*(x+1),37.5*3, fill="black")
for x in range(0,8,2):
    draw_square3(x)

def draw_square4(x):
    square = canvas.create_rectangle(37.5*x,37.5*3,37.5*(x+1),37.5*4, fill="black")
for x in range(1,8,2):
    draw_square4(x)

def draw_square5(x):
    square = canvas.create_rectangle(37.5*x,37.5*4,37.5*(x+1),37.5*5, fill="black")
for x in range(0,8,2):
    draw_square5(x)

def draw_square6(x):
    square = canvas.create_rectangle(37.5*x,37.5*5,37.5*(x+1),37.5*6, fill="black")
for x in range(1,8,2):
    draw_square6(x)

def draw_square7(x):
    square = canvas.create_rectangle(37.5*x,37.5*6,37.5*(x+1),37.5*7, fill="black")
for x in range(0,8,2):
    draw_square7(x)

def draw_square8(x):
    square = canvas.create_rectangle(37.5*x,37.5*7,37.5*(x+1),37.5*8, fill="black")
for x in range(1,8,2):
    draw_square8(x)





root.mainloop()
