// @algorithm @lc id=695 lang=typescript
// @title max-area-of-island
// @test([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]])=6
// @test([[0,0,0,0,0,0,0,0]])=0
function maxAreaOfIsland(grid: number[][]): number {
  let max = 0;
  let rowLen = grid.length;
  let colLen = grid[0].length;
  function dfs(grid: number[][], i: number, j: number): number {
    if (i < 0 || j < 0 || i >= rowLen || j >= colLen || grid[i][j] === 0) {
      return 0;
    }
    grid[i][j] = 0;
    return (
      1 + dfs(grid, i, j + 1) + dfs(grid, i, j - 1) + dfs(grid, i - 1, j) + dfs(grid, i + 1, j)
    );
  }
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === 1) {
        const area = dfs(grid, i, j);
        if (area > max) {
          max = area;
        }
      }
    }
  }
  return max;
}
