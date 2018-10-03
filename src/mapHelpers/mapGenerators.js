export const generateRectMap = (width = 1, height = 1) => {
  const map = {}

  for (let r = 0; r < width; r++) {
    const offset = Math.floor(r / 2);

    for (let q = -offset; q < (height - offset) ; q++) {

      map[`q${q}r${r}`] = {
        type: 'grass',
        q,
        qPos: q,
        r,
        rPos: offset,
      }
    }
  }

  return map
}
