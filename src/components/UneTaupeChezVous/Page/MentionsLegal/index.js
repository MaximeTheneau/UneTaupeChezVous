// == Import
import "./styles.css";

// == Composant
function MentionsLegal() {
  return (
    <>
      <h1>Mentions-légal</h1>
      <h2>Une Taupe Chez Vous</h2>
      <ul>
        <li className="list-mentions">
          <i className="icon-location"/>
          <p>71 RUE MARIE CURIE 27780 GARENNES SUR EURE FRANCE</p>
        </li>
        <li className="list-mentions">
          <i className="icon-phone"/> 
          <p>0964259779</p>
        </li>
        <li className="list-mentions">
          <p>
            N° SIRET :<br />
            39338032400029
          </p>
        </li>
        <li className="list-mentions"></li>
        <i className="icon-indicator"/>
      </ul>
      <h2>Cookies</h2>
      <p>Cookies strictement nécessaires à l’utilisation du service demandé.</p>
      <p>
        Ils permettent l’utilisation des principales fonctionnalités du site,
        comme le cas échéant l’accès à votre compte personnel, ou encore de
        mémoriser les préférences d'affichage de votre terminal (langue,
        paramètres d'affichage) et d'en tenir compte lors de vos visites, selon
        la charte graphique et les logiciels de visualisation ou de lecture de
        votre terminal. Ils peuvent inclure des cookies de réseaux sociaux
        lorsque vous interagissez avec ces derniers. Ils nous permettent aussi
        de lier entre elles les différentes pages consultées pour vous assurer
        une navigation fluide.
      </p>
      <p>
        Vous pouvez désactiver complètement les cookies dans votre navigateur.
        Dans ce cas notre site ne fonctionnera plus normalement mais vous
        pourrez quand même effectuer des actions basiques.
      </p>
      <ol>
        <li className="mentions-cookie">
          <p>
            Si vous utilisez le navigateur Internet Explorer
            <br />
            Dans Internet Explorer, cliquez sur le bouton « Outils », puis sur «
            Internet ». Sous l’onglet Confidentialité déplacez le curseur vers
            le haut pour bloquer tous les cookies ou vers le bas pour autoriser
            tous les cookies, puis cliquez sur OK.
          </p>
        </li>
        <li className="mentions-cookie">
          <p>
            Si vous utilisez le navigateur Firefox
            <br />
            Allez dans le menu « Outils » du navigateur puis sélectionnez le
            menu « Options » Cliquez sur l’onglet « vie privée », décochez la
            case « Accepter les cookies » puis cliquez sur OK.
          </p>
        </li>
      </ol>
    </>
  );
}

// == Export
export default MentionsLegal;
