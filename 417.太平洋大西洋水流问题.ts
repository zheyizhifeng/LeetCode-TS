// @algorithm @lc id=417 lang=typescript
// @title pacific-atlantic-water-flow
// @test([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])=[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// @test([[2,1],[1,2]])=[[0,0],[0,1],[1,0],[1,1]]
function pacificAtlantic(heights: number[][]): number[][] {
  function dfs(heights: number[][], canReach: boolean[][], i: number, j: number) {
    if (canReach[i][j]) return;
    canReach[i][j] = true;
    [
      [i - 1, j],
      [i + 1, j],
      [i, j - 1],
      [i, j + 1],
    ].forEach(([newI, newJ]) => {
      if (newI >= 0 && newI < m && newJ >= 0 && newJ < n && heights[newI][newJ] >= heights[i][j]) {
        dfs(heights, canReach, newI, newJ);
      }
    });
  }

  const m = heights.length;
  if (m === 0) return [];
  let n = heights[0].length;
  if (n === 0) return [];
  const ans: number[][] = [];
  const pacific = Array.from({ length: m }, () => Array(n).fill(false));
  const atlantic = Array.from({ length: m }, () => Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    dfs(heights, pacific, i, 0);
    dfs(heights, atlantic, i, n - 1);
  }

  for (let j = 0; j < n; j++) {
    dfs(heights, pacific, 0, j);
    dfs(heights, atlantic, m - 1, j);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        ans.push([i, j]);
      }
    }
  }
  return ans;
}
