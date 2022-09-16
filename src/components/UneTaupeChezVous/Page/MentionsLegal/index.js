// == Import
import { MetaTags } from "react-meta-tags";
import "./styles.css";

// == Composant
function MentionsLegal() {
  return (
    <div className="mentions">
      <MetaTags>
        <title>Mentions légales</title>
        <meta
          name="description"
          content="Une Taupe Chez Vous, 71 rue Marie Curie, 27780 Garrennes Sur Eure, 0232264958, N° SIRET 39338032400029"
        />
      </MetaTags>
      <h1>Mentions légales</h1>
      <ul>
        <li className="list-mentions">
          <i className="icon-location"/>
          <p>
            Une Taupe Chez Vous,
            <br />
            71 rue Marie Curie,
            <br />
            27780 Garenne Sur Eure
          </p>
        </li>
        <li className="list-mentions">
          <i className="icon-phone" />
          <p>+33 2 32 26 49 58</p>
        </li>
        <li className="list-mentions">
          <p>N° SIRET : 39338032400029</p>
        </li>
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
    </div>
  );
}

// == Export
export default MentionsLegal;
