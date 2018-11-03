import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

const Features = ({ video_hrs, total_articles }) => (
  <section className="features">
    <div>
      <strong>Includes</strong>
    </div>
    <div>
      <ul>
        <li>
          <span className="feature-icon">
            <FontAwesomeIcon icon={ far.faFileVideo } fixedWidth/>
          </span>
          <span className="feature-text">{ `${video_hrs} hours on-demand video` }</span>
        </li>
        <li>
          <span className="feature-icon">
            <FontAwesomeIcon icon={ far.faFile } fixedWidth/>
          </span>
          <span className="feature-text">{ `${total_articles} ${articleOrArticles(total_articles)}` }</span>
        </li>
        <li>
          <span className="feature-icon">
            <FontAwesomeIcon icon={ fas.faInfinity } fixedWidth/>
          </span>
          <span className="feature-text">Full Lifetime Access</span>
        </li>
        <li>
          <span className="feature-icon">
            <FontAwesomeIcon icon={ fas.faMobileAlt } fixedWidth/>
          </span>
          <span className="feature-text">Access on mobile and TV</span>
        </li>
        <li>
          <span className="feature-icon">
            <FontAwesomeIcon icon={ fas.faAtom } fixedWidth/>
          </span>
          <span className="feature-text">Certificate of Completion</span>
        </li>
      </ul>
    </div>
  </section>
);

const articleOrArticles = (hours) => hours === 1 ? 'article' : 'articles';

export default Features;