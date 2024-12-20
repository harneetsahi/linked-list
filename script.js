// linkedList class

class LinkedList {

  constructor() {
    this.head = null;
  }

  //// append function - adding to the end of the list
  append(value) {
      const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while(current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }    
  }

  //// prepend function - adding to the front of the list
  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.head;
    this.head = newNode;
  }

  //// count size function
  countSize() {
    let count = 0;
    let current = this.head;

    while(current) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

  //// getHead function
  getHead() {
    return this.head;
  }

  //// getTail function
  getTail() {
    let current = this.head;
    while(current !== null && current.nextNode !== null ) {
       current = current.nextNode;   
    }
    return current;      
  }

  //// find node at a given index
  at(index) { 
    let current = this.head;
    let currIndex = 0;
    
    while(current.nextNode !== null) {
      current = current.nextNode;
      currIndex++;
      
      if (currIndex === index) {
        return current;
      }
      
    }
    
    return current;
      
  }

  //// remove the last node
  pop() {
    if (!this.head) {
      return;
    }
    
    if (!this.head.nextNode) {
      this.head = null;
      return;
    }
    
    let current = this.head;
    
    while(current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;  
    }
    
    current.nextNode = null;
    
    return list;
  }

  //// checking if list contains a value
  contains(value) {
    let current = this.head;
    
    while(current) {
      if (current.value === value) {
        return true;
      } 
      
      current = current.nextNode; 
    }
    return false;
  
  }

  //// find a value
  find(value) {
    
    let current = this.head;
    let index = 0;
    
    while(current) {
      if (current.value === value) {
        return index;
      }
      
      current = current.nextNode;
      index++;
    }
    
    return null;
      
  }

  //// insert a value at a certain index
  insertAt(value, index) {
    let current = this.head;
    let currIndex = 0;
    
    const newNode = new Node(value);
    
    if (index < 0) {
      return;
    }
    
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }

    while(current && currIndex < index -1 ) {
      current = current.nextNode;
      currIndex++;
    }
    
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
 
    return list;

  }

  //// remove index
  removeAt(index) {
    let current = this.head;
    let currIndex = 0;
    
    if (index < 0) return;
    if (index === 0) {
      const newNode = this.head.nextNode;
      this.head = newNode;
    }
    
    while(current && currIndex < index -1 ) {
      current = current.nextNode;
      currIndex++;      
    }
    
    current.nextNode = current.nextNode.nextNode;
 
    return list;
    
  }

  //// convert to a string
  toString() {
    let current = this.head;
    let result = '';
    
    while(current) {
      result += '( ' + current.value  + ' ) -> ';
      current = current.nextNode;    
   }
    
    return result.slice(0 , -4);
  
  }
  
  

}



// node class

class Node {

  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

}

// 

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend('alien');

// testing
console.log(list);
console.log(list.toString());
console.log(list.countSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(6));
console.log(list.pop());
console.log(list.contains('parrot'));
console.log(list.find('alien'));
console.log(list.insertAt('coco', 4));
console.log(list.removeAt(1));
console.log(list);


