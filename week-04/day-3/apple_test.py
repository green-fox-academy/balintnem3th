import unittest
from apple import Apple


test_apple = Apple()


class TestStringMethods(unittest.TestCase):

    def test_apple(self):
        self.assertEqual(test_apple.get_apple(), 'apples','not apple')



if __name__ == '__main__':
    unittest.main()