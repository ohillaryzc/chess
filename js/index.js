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
  { name: '炮', x: 1, y: 7 },
  { name: '炮', x: 7, y: 7 },
  { name: '卒', x: 0, y: 6 },
  { name: '卒', x: 2, y: 6 },
  { name: '卒', x: 4, y: 6 },
  { name: '卒', x: 6, y: 6 },
  { name: '卒', x: 8, y: 6 }
]
const red = [
  { name: '車', x: 0, y: 0 },
  { name: '马', x: 1, y: 0 },
  { name: '象', x: 2, y: 0 },
  { name: '士', x: 3, y: 0 },
  { name: '将', x: 4, y: 0 },
  { name: '士', x: 5, y: 0 },
  { name: '象', x: 6, y: 0 },
  { name: '马', x: 7, y: 0 },
  { name: '車', x: 8, y: 0 },
  { name: '炮', x: 1, y: 2 },
  { name: '炮', x: 7, y: 2 },
  { name: '卒', x: 0, y: 3 },
  { name: '卒', x: 2, y: 3 },
  { name: '卒', x: 4, y: 3 },
  { name: '卒', x: 6, y: 3 },
  { name: '卒', x: 8, y: 3 }
]
class Chess {
  constructor(container) {
    this.container = container
    this.black = black
    this.red = red
    this.h = 750 / 9
    this.w = 750 / 8
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
    this.black.concat(this.red).forEach(item => {
      const e = document.createElement('div')
      e.className = 'item-chess'
      e.style.bottom = this.h * item.y - 25 + 'px'
      e.style.left = this.w * item.x - 25 + 'px'
      e.innerText = item.name
      item.dom = e
      this.container.appendChild(e)
    })
  }
}
