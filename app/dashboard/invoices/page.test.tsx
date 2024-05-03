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
 
vi.mock('next/font/google', () => ({

});

test('Page', async () => {
  // render(<Page />)
  // expect(screen.getByRole('heading', { level: 1, name: 'Invoices Page' })).toBeDefined()

  const result = await Page2();

  render(result);
  expect(screen.getByRole('heading', { level: 1, name: 'Invoices Page' })).toBeDefined()
})