import unittest
from sum import Summer

obj = Summer()


class TestStringMethods(unittest.TestCase):

    def test_obj_(self):
        self.assertEqual(obj.summ([1,2,3,4,5,6,7]), 28, 'not working')

    def test_obj_2(self):
        self.assertEqual(obj.summ([]), 0, 'not working')

    def test_obj_3(self):
        self.assertEqual(obj.summ([1]), 1, 'not working')

    def test_obj_4(self):
        self.assertEqual(obj.summ([0]), 0, 'not working')


if __name__ == '__main__':
    unittest.main()



