## Installation

1. Install this package:
```
npm i -D @ceski23/eslint-config
```

2. Use this config in your `eslint.config.js` file:
```javascript
import config from '@ceski23/eslint-config'

export default [
    ...config,
    {
        rules: {
            // your rules
        }
    }
]
```