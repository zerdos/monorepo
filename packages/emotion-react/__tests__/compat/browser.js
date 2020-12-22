// @flow
/** @jsx jsx */
import 'test-utils/dev-mode'
import { throwIfFalsy } from 'test-utils'
import { jsx, CacheProvider } from '@zedvision/emotion-react'
import { render } from 'react-dom'
import { css, cache } from '@zedvision/emotion-css'

test('composition works from old emotion css calls', (cb) => {
  const cls = css`
    color: green;
  `
  throwIfFalsy(document.body).innerHTML = '<div id="root"></div>'
  render(
    <CacheProvider value={cache}>
      <div css={cls} />
    </CacheProvider>,
    throwIfFalsy(document.getElementById('root')),
    () => {
      expect(document.documentElement).toMatchSnapshot()
      cb()
    }
  )
})
