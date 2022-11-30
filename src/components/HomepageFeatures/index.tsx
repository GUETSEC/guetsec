import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'CTF比赛',
    Svg: require('@site/static/img/ctf.svg').default,
    description: (
      <>
      CTF（Capture The Flag）是一种流行的信息安全竞赛形式，其中其竞赛模式分为解题模式（Jeopardy）和攻防模式（Attack-Defense），还有就是这两者混合一起用。其中的详细介绍可以通过网站最下面的CTF-wiki去了解。
      </>
    ),
  },
  {
    title: '网络攻防',
    Svg: require('@site/static/img/hack.svg').default,
    description: (
      <>
      网络攻防，又称“网络对抗”。网络攻击指综合利用目标网络存在的漏洞和安全缺陷对该网络系统的硬件、软件及其系统中的数据进行攻击；网络防护指综合利用己方网络系统功能和技术手段保护己方网络和设备。网络攻击和网络防护是一对“矛”和“盾”的关系，网络攻击一般超前于网络防护。
      </>
    ),
  },
  // {
  //   title: 'Else',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
