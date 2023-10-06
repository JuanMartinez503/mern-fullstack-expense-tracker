
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>&copy; {new Date().getFullYear()} Expense Tracker</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
