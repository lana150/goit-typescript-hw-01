function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
}

/*function merge<T extends Record<string, any>, U extends Record<string, any>>(
  objA: T,
  objB: U
): T & U {
  return Object.assign({}, objA, objB);
}*/