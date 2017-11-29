url = "https//www.reddit.com/r/nevertellmethebots"

def url_fix(some_string):
    new_string = some_string.replace('bots', 'odds'  )
    new_string2= new_string.replace('//','//:')
    print(new_string2)

url_fix(url)