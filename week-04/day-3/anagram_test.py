import unittest
from anagram import isAnagram





class TestStringMethods(unittest.TestCase):

    def test_anagram_1(self):
        self.assertEqual(isAnagram('abcd','dabc'), True , 'not working')

    def test_anagram_empty(self):
        self.assertEqual(isAnagram('',''), True , 'not working')

    def test_anagram_not_anagram(self):
        self.assertEqual(isAnagram('abc','abd'), False , 'not working')

    def test_anagram_not_anagram(self):
        self.assertEqual(isAnagram([],[]), True , 'not working')

    def test_anagram_not_anagram(self):
        self.assertEqual(isAnagram(['1','2','3'],['3','2','1']), True , 'not working')

    def test_anagram_not_anagram(self):
        self.assertEqual(isAnagram('abb','abc'), False , 'not working')

    def test_anagram_not_anagram(self):
        self.assertEqual(isAnagram('abcde','abcd'), False , 'not working')

    def test_anagram_not_anagram(self):
        self.assertEqual(isAnagram('abba','aba'), False , 'not working')

    def test_anagram_not_anagram(self):
        self.assertEqual(isAnagram('123','aba'), False , 'not working')


if __name__ == '__main__':
    unittest.main()