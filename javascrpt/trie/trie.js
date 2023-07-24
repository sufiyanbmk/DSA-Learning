class TrieNode {
    constructor() {
      this.children = {};
      this.endOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!current.children[char]) {
          current.children[char] = new TrieNode();
        }
        current = current.children[char];
      }
      current.endOfWord = true;
      return this;
    }
  
    search(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!current.children[char]) {
          return false;
        }
        current = current.children[char]
      }
      return current.endOfWord;
    }
  }
  
  let t=new Trie()
  t.insert("hello")
  t.insert("hi")
  t.insert("hai")
  console.log(t.insert("hol"))
  console.log(t.root.children)
  t.search("e")
  console.log(t.search('hi'))
  // console.log(t.root.children.h.children)