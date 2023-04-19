import React from 'react';
import { render } from '@testing-library/react';
import Review from '../Review';

describe('Review Component', () => {
  const props = {
    title: 'Amazing food!',
    content: 'The food was fantastic and the service was great. Would highly recommend!',
    rating: 5,
    createdDate: new Date('2022-01-01'),
  };

  it('should match the snapshot', () => {
    const { container } = render(<Review {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the review information', () => {
    const { getByText } = render(<Review {...props} />);
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.content)).toBeInTheDocument();
    expect(getByText(`Rating: ${props.rating}/5`)).toBeInTheDocument();
    expect(getByText('Jan 1, 2022')).toBeInTheDocument();
  });
});
