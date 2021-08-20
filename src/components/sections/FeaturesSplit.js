import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

import Grid from "@material-ui/core/Grid";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "当社のお仕事",
    paragraph:
      "他社とどこが違ってどうして多くのお客様が私たちを頼ってくださっているのか",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                <h3 className="mt-0 mb-12">
                  WordPressサイト作成・ECサイト構築
                </h3>
                <p className="m-0">
                  会社や個人の紹介HP作成またWordPressやその他のCMSを使用してのECサイト構築を得意としています。特に当社ではWordPressのテーマ独自作成、プラグイン開発や改修に強みを持っております。他社様がお手をあげてしまうような手強いプラグイン改修も是非ご相談ください。
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("../../assets/images/Website-designer-amico.png")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                <h3 className="mt-0 mb-12">UIUXデザイン</h3>
                <p className="m-0">
                  当社には優秀なデザイナーが複数在籍しており、UIの観点からのご提案はもちろんのことユーザーにとって使いやすいUXのご提案に力を入れてご一緒に仕事をさせて頂きます。
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("../../assets/images/Website-designer-pana.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                <h3 className="mt-0 mb-12">インフラ整備・データサイエンス</h3>
                <p className="m-0">
                  AWS（アマゾンウェブサービス）やAzureなどのクラウドサーバーサービスをはじめとしたインフラの環境構築も得意としています。バックアップ、スピード、セキュリティー、ロードバランスなど各社様悩みは色々かと思いますが、それらを丁寧にコンサルしまして一挙に解決いたします。また当社ではデータサイエンティストを要しており、大企業様のデータ活用や業務へのコンサルティングも行っております。
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("../../assets/images/Error-429-pana.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                <h3 className="mt-0 mb-12">システム・モバイル アプリ開発</h3>
                <p className="m-0">
                  iOSとAndroidのモバイルアプリ構築はクロスプロットフォーム開発を得意としています。また会社の業務効率化や会社として独自にTwitterのようなSNSプラットフォームアプリケーションを組みたいなどゼロからのシステム開発も受けております。
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("../../assets/images/rsz_mobile-cuate_1.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
