export type Edge<T> = {
  node: T
}

export type Connection<T> = {
  edges: Edge<T>[]
}
