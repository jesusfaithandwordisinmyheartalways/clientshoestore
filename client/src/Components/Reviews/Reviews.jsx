



import React, { useEffect, useState } from "react";
import './Reviews.css'


const Reviews = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [search, setSearch] = useState("");

    const [formData, setFormData] = useState({
      title: "",
      review: "",
      username: "",
      email: "",
    });


    useEffect(() => {
          const userSavedReviews = localStorage.getItem('reviews')
          if(userSavedReviews) {
            setReviews(JSON.parse(userSavedReviews))
          }
    }, [])





  
    // Toggle form visibility
    const toggleForm = () => {
      setIsOpen(!isOpen);
    };
  
    // Handle input changes
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Handle star rating
    const handleRating = (index) => {
      setRating(index);
    };
  



    // Submit review
    const userReviewSubmit = async (e) => {
      e.preventDefault();

      if (!formData.username || !formData.title || !formData.review || !formData.email) {
        alert("All fields are required!");
        return;
      }
  
      const newReview = {
        id: Date.now(),
        title: formData.title,
        review: formData.review,
        username: formData.username,
        email: formData.email,
        rating: rating,
      };

      try {
        const response = await fetch('http://localhost:3001/feedback/reviews', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newReview),
        });
          const data = await response.json();
            if (!response.ok) {
            alert(data.message || "Error submitting review");
            return;
        }

        setReviews([data.review, ...reviews]);
        localStorage.setItem('reviews', JSON.stringify([data.review, ...reviews]));
        setFormData({ title: "", review: "", username: "", email: "" });
        setRating(0);
        setIsOpen(false);
      }catch(error) {
        console.error("Error:", error);
        alert("Something went wrong, please try again.");

      }
    };
  




    // Filter reviews by username
    const filteredReviews = reviews.filter((rev) =>
      rev.username.toLowerCase().includes(search.toLowerCase())
    );





  return (
   <>


         <div className="review-container">
           <div className="review-wrapper">

            <div className="review-btn"><button onClick={toggleForm}>✏️ Write a Review </button></div>
      

      {/* Review Form */}
      {isOpen && (
        <form onSubmit={userReviewSubmit} className="form-wrapper">
            <div className="left-side-review-wrapper">

            <div className="review-header"><h3>WRITE A REVIEW</h3></div>
            <div className="review-required"><p ><span>*</span> Indicates a required field</p></div>
            <div className="review-score"><p ><span>*</span> Score</p></div>


          <div className="review-stars">
            {[1, 2, 3, 4, 5].map((index) => (
              <span key={index}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(0)}
                onClick={() => handleRating(index)}
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                  color: index <= (hover || rating) ? "green" : "gray",
                }}
              >
                ★
              </span>
            ))}
          </div>


          <div className="review-title"><p><span>*</span>Title:</p></div>
           <input type="text" name="title" value={formData.title} onChange={handleChange} required />

          <div className="review-review"><p><span>*</span>Review:</p></div>
           <textarea name="review" value={formData.review} onChange={handleChange} required />


            </div>




          <div className="right-side-review-wrapper">
             <div className="review-username"><p><span>*</span>Username:</p></div>
             <input type="text" name="username" value={formData.username} onChange={handleChange} required />

             <div className="review-email"><p><span>*</span>Email:</p></div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          </div>


          <div className="post-btn"><button type="submit">Post</button></div>             




        </form>
      )}



      {/* Search Bar */}
        <div className="user-review-search">
           <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search by first name..."  value={search}/>
           </div>


      {/* Display Reviews */}
      {filteredReviews.map((review) => (

        <div className="post-review-wrapper">
            <div className="post-review-section">
            <div key={review.id} className="review-section">
             <div className="review-section-box">
                <div className="avatar-username-wrapper">
                  <div className="avatar">{review.username.charAt(0).toUpperCase()}</div>
                <div className="avatar-username"> <p>{review.username}</p></div>
                </div>
          </div>

          <h3>{review.title}</h3>
          <p>{review.review}</p>

          <div>
            {[...Array(review.rating)].map((_, index) => (
              <span key={index} style={{ color: "green", fontSize: "20px" }}>★</span>
            ))}
          </div>
        </div>
            </div>

        </div>
      ))}





           </div>
    </div>




   </>
  )
}

export default Reviews
