const InfoPrivacy = (props) => {
  return <div className="info">
    <InfoHeader/>

    <main id="privacy">
      <h1>Datenschutzerklärung</h1>
      <p>
        Since we are a German organisation, this privacy policy is currently only in German. An English version is coming soon.
      </p>

      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. In diesen
        Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der
        Datenverarbeitung im Rahmen unserer Website. Sie können sich mit Datenschutzanliegen
        gern an unseren aktuellen Vorstand wenden:
      </p>

      <p>
        Marius Melzer, Jan Lelis und Alexandra Weiß<br />
        contact@palava.tv
      </p>

      <p>
        Weiterführende Kontaktdaten finden Sie in unserem Impressum. Die zuständige
        Datenschutzbehörde ist der sächsische Datenschutzbeauftragte.
      </p>

      <h2>Erhebung und Verarbeitung von Daten</h2>

      <p>
        Auf palava.tv ist es möglich einen gemeinsamen Gruppenchat zu bilden, indem
        man auf der auf der Startseite den gleichen Konferenznamen angibt,
        beziehungsweise direkt per URL die jeweilige Gruppe zugreift. Die Bereitstellung
        des Dienstes erfordert aus technischen Gründen, die Weitergabe von,
        unter anderem, folgenden Daten eines jeder_n Teilnehmer_innen über unseren Server an
        alle anderen Teilnehmer_innen des gleichen Gruppenchats:
      </p>

      <ul>
        <li>alle IP-Adressen des Nutzers (lokal und global)</li>
        <li>User Agent (Browser, Browserversion, Browserengine)</li>
        <li>unterstützte Audio- und Videocodecs des Browsers</li>
      </ul>

      <p>
        Eine längerfristige Speicherung, die über die Nutzungsdauer des Dienstes hinaus
        geht, erfolgt nicht. Weiterhin verwenden wir keine Cookies und protokollieren
        keine personenbezogenen Daten (z.b. IP Adressen) in unseren Serverlogs.
      </p>

      <h2>Datenspeicherung durch den Serverbetreiber</h2>

      <p>
        Unser Server wird von <a href="https://www.simplyroot.de/">SimplyRoot</a> bereitgestellt.
         Zwecks Auskunft, Widerspruch oder Beschwerde über potenziell von SimplyRoot
         erhobene Daten, wenden Sie sich bitte direkt an SimplyRoot
         (<a href="https://www.simplyroot.de/de/ansprechpartner/">Kontaktseite</a>).
      </p>

      <h2>Kontakt zu uns</h2>

      <p>
        Wenn Sie per E-Mail Kontakt mit uns aufnehmen, so verwenden wir Ihre E-Mail-Adresse
        nur, um mit Ihnen in Kontakt zu treten. Andere Verwendungen
        schließen wir aus.
      </p>
    </main>

    <div className="plv-mobile-footer">
      <Footer/>
    </div>
    <GitHubRibbon/>
  </div>
}
