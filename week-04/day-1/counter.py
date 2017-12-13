class Counter(object):
    def __init__(self,numb=0):
        self.numb = numb
        self.initial_number = self.numb

    def add(self,number=1):
        self.numb += number
        return self.numb

    def get(self):
       return self.numb

    def reset(self):
        self.numb = 0
        return self.initial_number

    