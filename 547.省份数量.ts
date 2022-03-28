// @algorithm @lc id=547 lang=typescript
// @title number-of-provinces
// @test([[1,1,0],[1,1,0],[0,0,1]])=2
// @test([[1,0,0],[0,1,0],[0,0,1]])=3
function findCircleNum(isConnected: number[][]): number {
  const cityLength = isConnected.length;
  let provinces = 0;
  const visited = Array(cityLength).fill(false);
  function dfs(cityIndex: number): void {
    for (let j = 0; j < cityLength; j++) {
      if (isConnected[cityIndex][j] === 1 && !visited[j]) {
        visited[j] = true;
        dfs(j);
      }
    }
  }
  for (let i = 0; i < cityLength; i++) {
    if (!visited[i]) {
      dfs(i);
      provinces++;
    }
  }
  return provinces;
}
