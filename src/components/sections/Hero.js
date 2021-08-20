import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

import homePageHeader from "../../assets/images/home-page-header.png";
import SelectHouseBro from "../../assets/images/select-house-bro-.png";
import Grid from "@material-ui/core/Grid";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <Grid container alignItems="center">
              <Grid item xs={12}>
                <h1
                  className="mt-0 mb-16 reveal-from-bottom"
                  data-reveal-delay="200"
                >
                  お客様の
                  <span className="text-color-primary">ビジネスグロース</span>
                  を目指す
                </h1>
              </Grid>
              <Grid item xs={6}>
                <p
                  className="m-0 mb-32 reveal-from-bottom"
                  data-reveal-delay="400"
                >
                  当社はIT開発会社ですが開発は単なる通過点であり、その先に見据えるビジネスのグロースをお手伝いすることをモットーにしています。ITを使ってないが出来るのか一緒に相談できる替えの利かないパートナーでいます。
                </p>
              </Grid>
              <Grid item xs={6}>
                <img
                  src={homePageHeader}
                  alt="homePageHeader"
                  className="m-0 mb-32 reveal-from-bottom"
                  data-reveal-delay="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src={SelectHouseBro}
                  alt="SelectHouseBro"
                  className="m-0 mb-32 reveal-from-bottom"
                  data-reveal-delay="600"
                />
              </Grid>
              <Grid item xs={6}>
                <h3
                  className="mt-0 mb-16 reveal-from-bottom"
                  data-reveal-delay="600"
                >
                  DXのお手伝い、その先へ
                </h3>
                <p
                  className="m-0 mb-32 reveal-from-bottom"
                  data-reveal-delay="600"
                >
                  まだ会社やブランドのホームページがない、今使っているものが古くなっている、業務管理を手書きやExcelで行っている、店舗のみで売っているものをオンラインでも販売したい、海外のお客様も集客したいけど何から始めたらいいかわからない、各お客様が抱えている悩みはそれぞれです。またやりたいことは何となくあるけどどう始めたらいいのかわからない、そんな悩み一緒に相談して見える形でご提案致します。
                </p>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
