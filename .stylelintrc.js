module.exports = {
  "processors": ["stylelint-processor-styled-components"],
  "plugins": [
    "stylelint-a11y",
    "stylelint-config-rational-order/plugin",
    "stylelint-high-performance-animation",
    "stylelint-no-unsupported-browser-features",
    "stylelint-order",
    "stylelint-prettier",
  ],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-rational-order",
    "stylelint-a11y/recommended",
    "stylelint-prettier/recommended",
    "stylelint-config-styled-components",
  ],
  "rules": {
    "value-keyword-case": null,
    "a11y/media-prefers-reduced-motion": [true, {
      "severity": "warning", 
    }],
    "a11y/no-outline-none": [true, {
      "severity": "warning", 
    }],
    "length-zero-no-unit": [true, {
      "severity": "warning",
    }],

    // Base rules
    "indentation": null,
    'selector-max-id': 0,
    'selector-list-comma-newline-after': 'always',
    "selector-type-case": ["lower", {
      "ignoreTypes": ["/^\\$\\w+/"]
    }],
    "selector-type-no-unknown": [true, {
      "ignoreTypes": ["/^\\$\\w+/", "/-styled-mixin/"]
    }],
    'rule-empty-line-before': [
      'always',
      { ignore: ['after-comment'], except: ['first-nested'] },
    ],
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'] },
    ],
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-property-value-blacklist': { '/^border/': ['none'] },
    'declaration-empty-line-before': null,
    'at-rule-empty-line-before': [
      'always',
      { ignore: ['after-comment'], except: ['first-nested'] },
    ],

    'no-descending-specificity': null,
    'max-nesting-depth': 3,

    "prettier/prettier": true,
    "plugin/no-low-performance-animation-properties": [true, {
      "severity": "warning",
      "ignoreProperties": ['color', 'background-color', 'box-shadow'],
    }],
    "plugin/no-unsupported-browser-features": [true, {
      "severity": "warning",
      "ignore": ["fontface"]
    }],
    "order/properties-order": [],
    "plugin/rational-order": [true, {
      "border-in-box-model": false,
      "empty-line-between-groups": true,
    }],
    'property-no-vendor-prefix': [true, {
      "severity": "warning",
    }]
  }
}
