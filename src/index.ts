export function semverSubtract(version1: string, version2: string) {
  const v1Arr = version1.split('.');
  const v2Arr = version2.split('.');

  for (let i = 0, ii = Math.max(v1Arr.length, v2Arr.length); i < ii; i += 1) {
    const v1 = parseInt(v1Arr[i], 10) || 0;
    const v2 = parseInt(v2Arr[i], 10) || 0;
    if (v1 > v2) return 1;
    if (v1 < v2) return -1;
  }

  return 0;
}

export function createSemverComparator(version: string) {
  return {
    value: version,
    gt: (ver: string) => semverSubtract(version, ver) > 0,
    gte: (ver: string) => semverSubtract(version, ver) >= 0,
    eq: (ver: string) => semverSubtract(version, ver) === 0,
    lt: (ver: string) => semverSubtract(version, ver) < 0,
    lte: (ver: string) => semverSubtract(version, ver) <= 0,
    subtract: (ver: string) => semverSubtract(version, ver),
  };
}
