import React from 'react';
import { render, screen } from '@testing-library/react';
import AverageAndLatestReview from '../AverageAndLatestReview';
import '@testing-library/jest-dom/extend-expect';

describe('AverageAndLatestReview', () => {
  it('renders correctly with average rating and latest review', () => {
    const { container } = render(
      <AverageAndLatestReview averageRating={4.5} latestReview="Great product!" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly with no reviews', () => {
    const { container } = render(<AverageAndLatestReview averageRating={4} latestReview='Nice food'/>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the average rating and latest review', () => {
    render(<AverageAndLatestReview averageRating={3.5} latestReview="Could be better." />);
    expect(screen.getByText(/average rating 3\.5/)).toBeInTheDocument();
    expect(screen.getByText(/Latest Review:/)).toBeInTheDocument();
    expect(screen.getByText(/Could be better\./)).toBeInTheDocument();
  });

  it('renders "No reviews yet" if there is no latest review', () => {
    render(<AverageAndLatestReview averageRating={4.2} />);
    expect(screen.getByText(/No reviews yet/)).toBeInTheDocument();
  });

  it('renders "No Reviews" if there is no average rating', () => {
    render(<AverageAndLatestReview />);
    expect(screen.getByText(/No Reviews/)).toBeInTheDocument();
  });
});
