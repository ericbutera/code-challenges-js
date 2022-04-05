/*
TODO create code example
Array {
  address-start # computer memory access start
  address-end   # memory end
  memory
  length

  initialize(size)
    address-start = memory (computer.find-first-memory-address)
    address-end = address-start + size
    length: size

  # return value of index
  # O(1)
  read(index)
    return address-start + index

  # return index if value exists; -1 if not found
  # O(N)
  search(value)
    for address-start to address-end as address
      if value == memory[address]
        return address
    return -1

  # N + 1
  insert(index, value)
    if (index == length)
      memory[address-end] = value
    else
      shift-all-right(address-start + index)
      memory[address-start + index] = value
}

a = [apples, bananas, cucumbers, dates elderberries]
a.read(2) = bananas # 1 step (constant time)
a.search(bananas)   # 2 steps
a.search(pickle)    # 5 steps; worst case scenerio is ALL have to be read eg: a[a.length]
*/