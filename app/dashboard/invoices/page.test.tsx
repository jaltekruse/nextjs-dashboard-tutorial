import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'
import Page2 from '../(overview)/page'

vi.mock('next/font/google', () => ({
  Inter: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
  Lusitana: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}))
 
test('Page', () => {
  // render(<Page />)
  // expect(screen.getByRole('heading', { level: 1, name: 'Invoices Page' })).toBeDefined()

  render(<Page2 />)
  expect(screen.getByRole('heading', { level: 1, name: 'Invoices Page' })).toBeDefined()
})