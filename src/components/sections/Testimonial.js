import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

import Image from "../elements/Image";
import Grid from "@material-ui/core/Grid";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "メンバー",
    // paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="text-xs has-bottom-divider">
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-evenly"
                  >
                    <Grid item xs={3}>
                      <span>
                        <Image
                          src={require("../../assets/images/nishimura.png")}
                          alt="Features split 01"
                        />
                      </span>
                    </Grid>
                    <Grid item xs={8}>
                      <span className="testimonial-item-name text-color-high">
                        Takahiro Nishimura
                      </span>
                      {/* <span className="text-color-low"> / </span> */}
                      <div className="testimonial-item-link">
                        {/* <a href="#0">AppName</a> */}
                        Project Manager
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    岡山県高梁市出身。広島大学院情報工学専攻を修了後ソフトバンク株式会社に就職。社内のリアルタイムデータ収集/参照システムのPM/データエンジニアとして従事。要件定義・設計・開発・保守の一連の流れを主導。
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="text-xs has-bottom-divider">
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-evenly"
                  >
                    <Grid item xs={3}>
                      <span>
                        <Image
                          src={require("../../assets/images/Website-designer-amico.png")}
                          alt="Features split 01"
                        />
                      </span>
                    </Grid>
                    <Grid item xs={8}>
                      <span className="testimonial-item-name text-color-high">
                        Hironobu Kobayashi
                      </span>
                      {/* <span className="text-color-low"> / </span> */}
                      <div className="testimonial-item-link">
                        {/* <a href="#0">AppName</a> */}
                        Engineer
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="text-xs has-bottom-divider">
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-evenly"
                  >
                    <Grid item xs={3}>
                      <span>
                        <Image
                          src={require("../../assets/images/Website-designer-amico.png")}
                          alt="Features split 01"
                        />
                      </span>
                    </Grid>
                    <Grid item xs={8}>
                      <span className="testimonial-item-name text-color-high">
                        Tomonari Kaji
                      </span>
                      {/* <span className="text-color-low"> / </span> */}
                      <div className="testimonial-item-link">
                        {/* <a href="#0">AppName</a> */}
                        Engineer
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
