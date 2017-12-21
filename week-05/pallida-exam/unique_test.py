import unittest
from unique import unique_characters

class TestStringMethods(unittest.TestCase):

    def test_unique_1(self):
        self.assertEqual(unique_characters("anagram"), ["n", "g", "r", "m"] , 'not working')
    
    def test_unique_2(self):
        self.assertEqual(unique_characters(""), [] , 'not working')

    def test_unique_3(self):
        self.assertEqual(unique_characters("aaabbbccdd"), [] , 'not working')

if __name__ == '__main__':
    unittest.main()