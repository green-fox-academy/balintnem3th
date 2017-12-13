import unittest
from count_letters import count_letters

class TestStringMethods(unittest.TestCase):
    
    def test_fibonacci_0(self):
        self.assertEqual(count_letters(''), {} , 'not working')

    def test_fibonacci_0(self):
            self.assertEqual(count_letters(), {} , 'not working')
    
    def test_fibonacci_0(self):
        self.assertEqual(count_letters('a'), {'a':1} , 'not working')

    def test_fibonacci_0(self):
        self.assertEqual(count_letters('aa'), {'a':2} , 'not working')

    def test_fibonacci_0(self):
        self.assertEqual(count_letters('aab'), {'a':2,'b':1} , 'not working')

    def test_fibonacci_0(self):
        self.assertEqual(count_letters('aaba'), {'a':3,'b':1} , 'not working')

    def test_fibonacci_0(self):
        self.assertEqual(count_letters('aababababa'), {'a':6,'b':4} , 'not working')

    def test_fibonacci_0(self):
        self.assertEqual(count_letters('abcdabcdabcd'), {'a':3,'b':3,'c':3,'d':3} , 'not working')
    
if __name__ == '__main__':
    unittest.main()