import unittest
from fibonacci import fibonacci

class TestStringMethods(unittest.TestCase):

    def test_fibonacci_0(self):
        self.assertEqual(fibonacci(0), 0 , 'not working')

    def test_fibonacci_1(self):
        self.assertEqual(fibonacci(1), 1 , 'not working')
    
    def test_fibonacci_2(self):
        self.assertEqual(fibonacci(2), 3 , 'not working')
    
    def test_fibonacci_3(self):
        self.assertEqual(fibonacci(3),  6, 'not working')

    def test_fibonacci_4(self):
        self.assertEqual(fibonacci(4),  10, 'not working')


if __name__ == '__main__':
    unittest.main()