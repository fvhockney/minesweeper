import {mutations} from '@/store/mutations';
import {state} from '@/store/state';
import Minefield from '@/classes/minefield';
jest.mock('@/classes/minefield');



it('toggles flag', () => {
  const dangerzone = {
    CF: {
      uncovered: false,
      flagged: true
    },
    CNF: {
      uncovered: false,
      flagged: false
    },
    UF: {
      uncovered: true,
      flagged: true
    },
    UNF: {
      uncovered: true,
      flagged: false
    }
  }

  mutations.flag(null, dangerzone.CF)
  expect(dangerzone.CF).toHaveProperty('flagged', false);

  mutations.flag(null,dangerzone.CNF)
  expect(dangerzone.CNF).toHaveProperty('flagged', true);

  mutations.flag(null,dangerzone.UF)
  expect(dangerzone.UF).toHaveProperty('flagged', true);

  mutations.flag(null, dangerzone.UNF)
  expect(dangerzone.UNF).toHaveProperty('flagged', false);
});

it('uncovers a field', () =>{
  const expected = {
    uncovered: true,
    flagged: false
  }
  const dangerzone = {
    CF: {
      uncovered: false,
      flagged: true
    },
    CNF: {
      uncovered: false,
      flagged: false
    },
    UF: {
      uncovered: true,
      flagged: true
    },
    UNF: {
      uncovered: true,
      flagged: false
    }
  }

  mutations.uncovered(null, dangerzone.CF)
  expect(dangerzone.CF).toEqual(expected)

  mutations.uncovered(null, dangerzone.CNF)
  expect(dangerzone.CNF).toEqual(expected)

  mutations.uncovered(null, dangerzone.UF)
  expect(dangerzone.UF).toEqual(expected)

  mutations.uncovered(null, dangerzone.UNF)
  expect(dangerzone.UNF).toEqual(expected)
})

it('explodes', () => {
  mutations.explode(state)
  expect(state).toHaveProperty('explosion',true);
})

it('toggles greeting', () => {
  state.showGreet = true
  mutations.toggleGreet(state)
  expect(state.showGreet).toBe(false)

  mutations.toggleGreet(state)
  expect(state.showGreet).toBe(true)
})

it('toggles showing the field', () => {
  state.showField = false
  mutations.toggleField(state)
  expect(state.showField).toBe(true)

  mutations.toggleField(state)
  expect(state.showField).toBe(false)
})

it('makes the field', () => {
  mutations.makeField(state,'beginner')
  expect(state.minefield).toBeInstanceOf(Minefield)
})
