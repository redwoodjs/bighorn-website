export function limitToDepth(toc, depth) {
  const stippedToc = []
  for (const item of toc) {
    if (item.depth <= depth) {
      stippedToc.push({
        ...item,
        children: limitToDepth(item.children ?? [], depth),
      })
    }
  }
  return stippedToc
}
