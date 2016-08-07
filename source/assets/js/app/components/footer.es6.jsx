const Footer = (props) => {
  return (
    <footer>
      <ul className="pull-right">
        <li><a href="/info/ev">palava e. V.</a></li>
        <li><a href="/info/contact">Imprint</a></li>
      </ul>
      <ul>
        <li><a href="/">
          <img src="/assets/images/palava-small.png" alt="palava.tv" className="brand-logo" />
        </a></li>
        <li><a href="/info/how">How to Use</a></li>
        <li><a href="https://blog.palava.tv">Blog</a></li>
        <li><a href="https://twitter.com/palavatv">Twitter</a></li>
        <li><a href="https://github.com/palavatv">Code</a></li>
      </ul>
    </footer>
  )
}
