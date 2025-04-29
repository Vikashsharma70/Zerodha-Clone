import React from "react";

export default function Stats() {
  return (
    <div className="container mt-5 p-5">
      <div className="row ">
        <div className="col-6 ">
          <h1>Trust with confidence</h1>
          <h3 className="mt-5">Customer-first always</h3>
          <p className="">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h3 className="mt-5">No spam or gimmicks</h3>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h3 className="mt-5">The Zerodha universe</h3>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="mt-5">Do better with money</h3>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img src="../assets\ecosystem.png" style={{ width: "90%" }} />
          <div className="text-center mt-5">
            <a href="" className="mx-5 fs-5 text-decoration-none">Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
            <a href="" className="fs-5 text-decoration-none">Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
        <div className="mt-5 p-5 text-center">
          <img src="../assets\pressLogos.png" style={{ width: "70%" }} />
        </div>
        
      </div>
    </div>
  );
}
