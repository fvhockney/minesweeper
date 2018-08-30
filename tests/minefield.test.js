import Minefield from '@/classes/minefield';
import { settings } from '@/classes/config';

const expectedObject = function(config)
{
  return {
    bombs: config['bombs'],
    rows: config['rows'],
    cols: config['cols'],
    area: config['rows']*config['cols'],
    field: expect.anything()
  }
}

it('makes a new beginer minefield', () => {
  const config = settings['beginner']
  const minefield = new Minefield(config)
  expect(minefield).toEqual(expectedObject(config))
  expect(Object.keys(minefield.field)).toHaveLength(config['rows']*config['cols'])
})

it('makes a new advanced minefield', () => {
  const config = settings['advanced']
  const minefield = new Minefield(config)
  expect(minefield).toEqual(expectedObject(config))
  expect(Object.keys(minefield.field)).toHaveLength(config['rows']*config['cols'])
})

it('makes a new expert minefield', () => {
  const config = settings['expert']
  const minefield = new Minefield(config)
  expect(minefield).toEqual(expectedObject(config))
  expect(Object.keys(minefield.field)).toHaveLength(config['rows']*config['cols'])
})
