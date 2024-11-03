const { parseConfigJson } = require('./');
const { CONFIG_PATH } = require('./config');

describe('parseConfigJson', () => {
  test('正しくJSONファイルを解析できること', () => {
    const result = parseConfigJson(CONFIG_PATH);

    expect(result).toHaveProperty('os');
    expect(result.os).toHaveLength(3);
    expect(result.os).toContain('ubuntu-latest');
    expect(result.os).toContain('windows-latest');
    expect(result.os).toContain('macos-latest');

    expect(result.versions).toHaveProperty('nodejs');
    expect(result.versions.nodejs).toHaveLength(4);
    expect(result.versions.nodejs).toContain('16');
    expect(result.versions.nodejs).toContain('18');
    expect(result.versions.nodejs).toContain('20');
    expect(result.versions.nodejs).toContain('22');

    expect(result.ghpages_branch).toBe('ghgapes');
  });

  test('存在しないファイルの場合はnullを返すこと', () => {
    // silentパラメータをtrueにしてエラーメッセージを抑制
    const result = parseConfigJson('non-existent.json', true);
    expect(result).toBeNull();
  });
});
