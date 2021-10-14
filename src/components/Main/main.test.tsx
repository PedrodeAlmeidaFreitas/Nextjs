import { render, screen } from '@testing-library/react'

import Main from './main'

describe('Main', () => {
  it('should render successfully', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', {
        name: /Hello World/i
      })
    ).toBeInTheDocument()
  })
})
