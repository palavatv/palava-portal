const InfoPrivacy = (props) => {
  return <div className="info">
    <InfoHeader/>

    <main id="privacy">
      <h1>Privacy Policy</h1>
			Since we are a german organisation, this privacy policy is currently only in german. An english version is coming soon.

			Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. In diesen
	    Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der
			Datenverarbeitung im Rahmen unserer Website. Sie können sich mit Datenschutzanliegen
			gern an unseren aktuellen Vorstand wenden:
			<p />
			Marius Melzer, Jan Lelis und Alexandra Weiß<br />
			contact@palava.tv
			<p />
			Weiterführende Kontaktdaten finden Sie in unserem Impressum. Die zuständige
			Datenschutzbehörde ist der sächsische Datenschutzbeauftragte.

			<h2>Erhebung und Verarbeitung von Daten</h2>
			Auf palava.tv ist es möglich einen gemeinsamen Gruppenchat zu bilden, indem
			man auf der auf der Startseite den gleichen Konferenznamen angibt,
			beziehungsweise direkt per URL die jeweilige Gruppe zugreift. Die Bereitstellung
			des Dienstes erfordert aus technischen Gründen die Weitergabe von
			unter anderem folgenden Daten eines jeden Teilnehmers über unseren Server an
			alle anderen Teilnehmer des gleichen Gruppenchats:
			<ul>
				<li>alle IP-Adressen des Nutzers (lokal und global)</li>
				<li>User Agent (Browser, Browserversion, Browserengine)</li>
				<li>unterstützte Audio- und Videocodecs des Browsers</li>
			</ul>
			Eine längerfristige Speicherung, die über die Nutzungsdauer des Dienstes hinaus
			geht, erfolgt nicht. Weiterhin verwenden wir keine Cookies und protokollieren
			keine personenbezogenen Daten in unseren Serverlogs.

			<h2>Datenspeicherung durch den Serverbetreiber</h2>
			Unser Server ist bei <a href="https://www.simplyroot.de/">SimplyRoot</a> gehostet.
			Zwecks Auskunft, Widerspruch oder Beschwerde über potenziell von SimplyRoot
			erhobene Daten, wenden Sie sich bitte direkt an SimplyRoot
			(<a href="https://www.simplyroot.de/de/ansprechpartner/">Kontaktseite</a>).

			<h2>Kontakt mit uns</h2>
			Wenn Sie per E-Mail Kontakt mit uns aufnehmen, so verwenden wir Ihre E-Mail-Adresse
			nur, um mit Ihnen in Kontakt zu treten. Andere Verwendungen
			schließen wir aus.
    </main>

    <div className="plv-mobile-footer">
      <Footer/>
    </div>
    <GitHubRibbon/>
  </div>
}
