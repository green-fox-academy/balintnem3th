from tkinter import *

class Box(object):
    def __init__(self):
        self.testBoxX = 300
        self.testBoxY = 300

    def draw(self, canvas):
        canvas.create_rectangle(0, 0, 600, 600, fill='white')
        canvas.create_rectangle(self.testBoxX, self.testBoxY, self.testBoxX+100, self.testBoxY+100, fill='lime green')

# Create the tk environment as usual
root = Tk()
canvas = Canvas(root, width=600, height=600)

# Creating a box that can draw itself in a certain position
box = Box()

# Create a function that can be called when a key pressing happens
def on_key_press(e):
    # When the keycode is 111 (up arrow) we move the position of our box higher
    (print(e))
    if e.keycode == 40:
        box.testBoxY = box.testBoxY + 100
    elif e.keycode == 38:
        box.testBoxY = box.testBoxY - 100
    elif e.keycode == 37:
        box.testBoxX = box.testBoxX - 100
    elif e.keycode == 39:
        box.testBoxX = box.testBoxX + 100
    # and lower if the key that was pressed the down arrow
    # draw the box again in the new position
    box.draw(canvas)

# Tell the canvas that we prepared a function that can deal with the key press events
canvas.bind("<KeyPress>", on_key_press)
canvas.pack()

# Select the canvas to be in focused so it actually recieves the key hittings
canvas.focus_set()

# Draw the box in the initial position
box.draw(canvas)

root.mainloop()