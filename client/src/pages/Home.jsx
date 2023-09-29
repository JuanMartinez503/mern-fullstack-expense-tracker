import money from "../images/money.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className="home-main p-2 text-center mb-4">
        <h2>
          "Tracking your expenses has never been this simple. Expense Tracker is
          here to help you take control of your financial life. Say goodbye to
          financial stress and hello to financial freedom."
        </h2>
      </div>
      <div className="home-body">
        <img src={money} alt="" />
        <div className="key-features dark-bg">
            <h3>Key Features</h3>
          <ul>
            <li>
              "Track Your Expenses: Easily record your daily expenditures and
              see where your money is going."
            </li>
            <li>
              "Set Budgets: Stay on top of your finances by setting monthly or
              category-specific budgets."
            </li>
            <li>
              "Visualize Your Spending: Get insights with intuitive charts and
              graphs that help you understand your spending habits."
            </li>
            <li>
              "Secure and Private: Your financial data is safe and protected
              with us. We take your privacy seriously."
            </li>
            <li>
              "User-Friendly: Our user-friendly interface makes managing your
              finances a breeze."
            </li>
          </ul>
        </div>
      </div>
      <div className="home-sign mt-4">
        <h3>"Ready to get started? Sign up or log in to start tracking your expenses today."
</h3>
<dvi className="sign-cont">
    <div className="return p-3 dark-bg text-center">
        <h4>Returning User?</h4>
        <Link to="/login"><button className="btn btn-primary">Login</button></Link>
    </div>
    <div className="existing dark-bg p-3 text-center ">
        <h4>
            Don't have an account?
        </h4>
        <Link to="/signup"><button className="btn ">Sign Up</button></Link>

    </div>
</dvi>
      </div>
    </div>
  );
}