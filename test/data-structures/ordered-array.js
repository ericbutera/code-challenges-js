/*
TODO create code example
Ordered : Array
  insert(value) # O(n+2)
    # find offset for `value`
    # shift-right from found offset to Array.length (make room for value)
    # insert value at offset
    x = 0;
    for (; x < a.length; x++)
      if (a[x] >= value)
        break;

    parent.insert(x, value)
*/