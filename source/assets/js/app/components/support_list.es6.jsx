const SupportList = (props) => {
  return (
    <ul className="unstyled support-list">
      <li>
        <a href="https://google.com/chrome">
          <img src="/assets/images/chrome.png" />
          <span>Google Chrome</span>
        </a>
      </li>

      <li>
        <a href="https://www.mozilla.org/firefox">
          <img src="/assets/images/firefox.png" />
          <span>Mozilla Firefox</span>
        </a>
      </li>

      <li>
        <a href="https://www.opera.com">
          <img src="/assets/images/opera.png" />
          <span>Opera Browser</span>
        </a>
      </li>
    </ul>
  )
}