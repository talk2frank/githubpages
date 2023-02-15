import { render, screen } from '@testing-library/react';
import App from '../App';
import MyFooter, { MyBanner } from '../components/components';


test('renders a banner',() =>{
  render(<MyBanner/>);
  const linkElement = screen.getByText(/Frank Kinsey/i);
  expect(linkElement).toBeInTheDocument();
})

test('renders a footer',() =>{
  render(<MyFooter/>);
  const linkElement = screen.getByText(/Site created by Frank Kinsey/i);
  expect(linkElement).toBeInTheDocument();
})
