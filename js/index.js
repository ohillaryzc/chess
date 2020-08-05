/* 象棋构造方法 */
const black = [
  { name: '車', x: 0, y: 9 },
  { name: '马', x: 1, y: 9 },
  { name: '象', x: 2, y: 9 },
  { name: '士', x: 3, y: 9 },
  { name: '将', x: 4, y: 9 },
  { name: '士', x: 5, y: 9 },
  { name: '象', x: 6, y: 9 },
  { name: '马', x: 7, y: 9 },
  { name: '車', x: 8, y: 9 },
]
const red = []
class Chess {
  constructor(container) {
    this.container = container
    this.black = black
    this.red = red
  }

  init () {
    // 生成结构
    for (let i = 0; i < 9; i++) {
      const row = document.createElement('div')
      if (i === 4) {
        row.className = 'item-row-line'
        this.container.appendChild(row)
      } else {
        row.className = 'item-row'
        for (let j = 0; j < 8; j++) {
          const col = document.createElement('div')
          col.className = 'item-col'
          row.appendChild(col)
        }
        this.container.appendChild(row)
      }
    }
    // 初始化棋子位置

  }
}
