import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
    {
        title: "Welcome to  Fred",
        Svg: require("@site/static/img/Logo-Ignition-Check.svg").default,
        Icon: require("@site/static/img/door-enter.svg").default,
        description: (
            <>
                A Functional Repo for EDucation.
            </>
        ),
        link: "intro",
    },
    {
        title: "Project Uni",
        Svg: require("@site/static/img/Logo-Ignition-Check.svg").default,
        Icon: require("@site/static/img/door-enter.svg").default,
        description: (
            <>
                Research and Study Notes for BEng Control and Automation.
            </>
        ),
        link: "/docs/ProjectUni",
    },
];

function Feature({Svg, title, description,link, Icon}) {
  return (
      <div className={clsx("col col--4 text--center margin-bottom--lg")}>
          <div className="text--center">
              <Svg className={styles.featureSvg} role="img" />
          </div>
          <div className="text--center padding-horiz--md">
              <Heading as="h3">{title}</Heading>
              <p style={{ textWrap: 'auto', fontSize: 'small' }}>{description}</p>
          </div>
          <div className={styles.buttons}>
              <Link
                  className="button button--primary button--lg"
                  to={link}>
                  <Icon className={styles.featureSvg} role="img" />
              </Link>
          </div>
      </div>

  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
