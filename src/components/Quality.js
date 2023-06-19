import React from 'react';

const HomePage = () => {
  return (
    <section>
    <div className="container-fluid text-center">
  
      <div className="row">
            
        <div className="feature-box col-lg-4">
          <i className="icon fa-solid fa-circle-check fa-4x"></i>
          <h3 >Unmatched Quality</h3>
          <p>Savour the taste of unparalleled perfection,<br/>where flavors dance on your palate.<br/>Pinnacle of Perfection</p>

        </div>
  
        <div className="feature-box col-lg-4">
          <i class="icon fa-solid fa-money-bill fa-4x"></i>
          <h3>Payment Made Easy</h3>
          <p>Embrace Convenience with Our Diverse Payment Options!<br/>Choice, Simplicity, and Security</p>
        </div>
  
        <div className="feature-box col-lg-4">
          <i className="icon fa-solid fa-heart fa-4x"></i>
          <h3>Delicious on a Budget</h3>
          <p>Eat Well, Spend Less!<br/>Foodie's Delight on a Budget!<br/>Savor the Savings.</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HomePage;
