const Footer = (props) => {
  return (
    <footer>
      <ul className="pull-right">
        <li><Link to="/info/ev">palava e. V.</Link></li>
        <li><Link to="/info/contact">Imprint</Link></li>
      </ul>
      <ul>
        <li><Link to="/">
          <img src="/assets/images/palava-small.png" alt="palava.tv" className="brand-logo" />
        </Link></li>
        <li><Link to="/info/how">How to Use</Link></li>
        <li><a href="https://blog.palava.tv">Blog</a></li>
        <li><a href="https://twitter.com/palavatv">Twitter</a></li>
        <li><a href="https://github.com/palavatv">Code</a></li>
      </ul>
    </footer>
  )
}
