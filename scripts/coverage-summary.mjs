import { readFileSync } from 'node:fs';

// Reads the json-summary reporter output and prints a Markdown table,
// meant to be appended to $GITHUB_STEP_SUMMARY in CI.
const path = new URL('../coverage/coverage-summary.json', import.meta.url);
const { total } = JSON.parse(readFileSync(path, 'utf8'));

const row = (name, m) => `| ${name} | ${m.pct}% | ${m.covered}/${m.total} |`;

console.log(
  [
    '| Metric | % | Covered / Total |',
    '| --- | --- | --- |',
    row('Statements', total.statements),
    row('Branches', total.branches),
    row('Functions', total.functions),
    row('Lines', total.lines),
  ].join('\n'),
);
