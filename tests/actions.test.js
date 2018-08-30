import { actions } from '@/store/actions';
import { mutations } from '@/store/mutations';
import sinon from 'sinon';

describe('digging', () => {
  const commit = sinon.spy()
  afterEach(() => commit.resetHistory())

  it('digs and explodes', () => {
    const dangerZone = {hasBomb: true}

    actions.dig({ commit }, dangerZone)
    expect(commit.withArgs('uncovered',dangerZone).calledOnce).toBe(true)
    expect(commit.withArgs('explode').calledOnce).toBe(true)
  })

  it('digs and does not explode',() => {
    const dangerZone = {hasBomb: false}
    actions.dig({ commit }, dangerZone)
    expect(commit.withArgs('uncovered',dangerZone).calledOnce).toBe(true)
    expect(commit.withArgs('explode').notCalled).toBe(true)
  })
})

it('generates the field', () => {
  const commit = sinon.spy()
  const level = 'beginner'

  actions.generateField({ commit }, level)
  expect(commit.withArgs('makeField', 'beginner').calledOnce).toBe(true)
  expect(commit.withArgs('toggleGreet').calledOnce).toBe(true)
  expect(commit.withArgs('toggleField').calledOnce).toBe(true)
})

it('checks adjacent cells for bombs', () => undefined)
