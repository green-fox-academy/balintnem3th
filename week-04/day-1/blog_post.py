class BlogPost(object):

    def __init__(self,author_name,title,text,publication_date):
        self.author_name = author_name
        self.title = title
        self.text = text
        self.publication_date = publication_date

      
    def __str__(self):
        return "author name : {}, title : {}, text: {}, publication date : {}".format(self.author_name,self.title,self.text,self.publication_date)

post1 = BlogPost("John Doe","Lorem Ipsum","orem ipsum dolor sit amet.","2000.05.04")
post2 = BlogPost("Tim Urban","Wait but why","A popular long-form, stick-figure-illustrated blog about almost everything.","2010.10.10.")
post3 = BlogPost("William Turton","One Engineer Is Trying to Get IBM to Reckon With Trump","Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.","2017.03.28.")

print(post1)
print(post2)
print(post3)