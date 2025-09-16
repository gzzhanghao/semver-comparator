# semver-comparator

A tiny semver comparator.

```js
import { createSemverComparator } from 'semver-comparator';

const semver = createSemverComparator('1.2.3');

semver.gte('1.2.0'); // -> true
```

## API

- `v1.value`: `v1`
- `v1.gt(v2)`: `v1 > v2`
- `v1.gte(v2)`: `v1 >= v2`
- `v1.eq(v2)`: `v1 == v2`
- `v1.lt(v2)`: `v1 < v2`
- `v1.lte(v2)`: `v1 <= v2`
- `v1.subtract(v2)`: `sign(v1 - v2)`
