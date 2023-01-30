import ReviewItem from './ReviewItem';
function ProductReviewList({ review }) {
  if (!review || review.length === 0) {
    return <p>No reviews yet</p>;
  }
  return (
    <div className="feedback-list">
      {review.map(item => (
        <ReviewItem key={item.id} item={item} />
      ))}
    </div>
   );
}
export default ProductReviewList;