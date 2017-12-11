class PostIt(object):

    def __init__(self,bg_color,texts,text_color):
        self.bg_color = bg_color
        self.texts = texts
        self.text_color = text_color
    
    def __str__(self):
        return "Bg color: {}, texts: {}, text_color: {}".format(self.bg_color,self.texts,self.text_color)

post1 = PostIt("orange","Idea 1","blue")
post2 = PostIt("pink","Awseome","black")
post3 = PostIt("yellow","SuperB","green")


print(post1)
print(post2)
print(post3)


