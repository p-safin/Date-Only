import {test, type TestContext} from 'node:test';
import DateOnly from '../src/index.js';

function testYearsInterval(oldDate: string, newDate: string, yearsInterval: number) {
  test(`Add ${yearsInterval} year`, (t: TestContext) => {
    t.plan(1)
    const nextYear = new DateOnly(oldDate).addYears(yearsInterval);
    t.assert.deepStrictEqual(nextYear.toString(), newDate)
  })
}

testYearsInterval('2000-05-05', '2001-05-05', 1)
testYearsInterval('2000-05-05', '1999-05-05', -1)

test('ISO 8601 only date', (t: TestContext) => {
  t.plan(1)
  const day = '2000-05-05';
  t.assert.deepStrictEqual(new DateOnly(day).toString(), day)
})
