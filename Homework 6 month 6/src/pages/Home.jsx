import { useCallback } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const onGroupContainer1Click = useCallback(() => {
  }, []);

  const onShowMoreContainerClick = useCallback(() => {
  }, []);

  const onFeaturedProductsContainerClick = useCallback(() => {
  }, []);

  const onFeaturedProductsContainer1Click = useCallback(() => {
  }, []);

  const onCTAContainerClick = useCallback(() => {
  }, []);

  const onFrameContainer1Click = useCallback(() => {
  }, []);

  const onFeaturedProductsContainer2Click = useCallback(() => {
  }, []);

  const onFeaturedProductsContainer3Click = useCallback(() => {
  }, []);

  const onFeaturedProductsContainer4Click = useCallback(() => {
  }, []);

  const onFeaturedProductsContainer12Click = useCallback(() => {
  }, []);

  const onFeaturedProductsContainer22Click = useCallback(() => {
  }, []);

  const onFeaturedProductsContainer32Click = useCallback(() => {
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <div className={styles.header}>
          <div className={styles.headerChild} />
          <div className={styles.groupParent}>
            <div className={styles.homeParent}>
              <div className={styles.help}>Home</div>
              <div className={styles.shop}>Checkout</div>              <div className={styles.about}>About</div>
              <div className={styles.contact}>Contact</div>
            </div>
            <div
              className={styles.mdiaccountAlertOutlineParent}
              onClick={onGroupContainer1Click}
            >
              <img
                className={styles.mdiaccountAlertOutlineIcon}
                alt=""
                src="/mdiaccountalertoutline.svg"
              />
              <img
                className={styles.akarIconssearch}
                alt=""
                src="/akariconssearch.svg"
              />
              <img
                className={styles.akarIconsheart}
                alt=""
                src="/akariconsheart.svg"
              />
              <img
                className={styles.antDesignshoppingCartOutliIcon}
                alt=""
                src="/antdesignshoppingcartoutlined.svg"
              />
              <div className={styles.meubelHouseLogos05Parent}>
                <img
                  className={styles.meubelHouseLogos05Icon}
                  alt=""
                  src="/meubel-house-logos05@2x.png"
                />
                <b className={styles.skinclinic}>Furniro</b>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.livingWrapper}>
          <div className={styles.living}>Living</div>
        </div>
        <img
          className={styles.maskGroupIcon1}
          alt=""
          src="/mask-group1@2x.png"
        />
        <div className={styles.dining}>Dining</div>
        <img
          className={styles.imageLivingRoomIcon}
          alt=""
          src="/imageliving-room@2x.png"
        />
        <img
          className={styles.maskGroupIcon2}
          alt=""
          src="/mask-group2@2x.png"
        />
        <div className={styles.bedroomWrapper}>
          <div className={styles.living}>Bedroom</div>
        </div>
        <div className={styles.browseTheRangeParent}>
          <b className={styles.browseTheRange}>Browse The Range</b>
          <div className={styles.treatingAllSkin}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
      <div className={styles.ourProducts}>
        <div className={styles.showMore} onClick={onShowMoreContainerClick}>
          <div className={styles.showMoreChild} />
          <div className={styles.showMore1}>Show More</div>
        </div>
        <div className={styles.featuredProductsParent}>
          <div
            className={styles.featuredProducts}
            onClick={onFeaturedProductsContainerClick}
          >
            <div className={styles.bg} />
            <div className={styles.description}>
              <div className={styles.price}>
                <div className={styles.fixPriceParent}>
                  <div className={styles.fixPrice}>Rp 2.500.000</div>
                  <div className={styles.fixPrice1}>Rp 3.500.000</div>
                </div>
              </div>
              <div className={styles.productName}>
                <div className={styles.productName1}>Syltherine</div>
                <div className={styles.sortDescription}>Stylish cafe chair</div>
              </div>
            </div>
            <img className={styles.imagesIcon} alt="" src="/images@2x.png" />
            <div className={styles.label}>
              <div className={styles.discount}>
                <div className={styles.discountChild} />
                <div className={styles.div}>-30%</div>
              </div>
              <div className={styles.new}>
                <div className={styles.newChild} />
                <div className={styles.new1}>New</div>
              </div>
            </div>
            <div className={styles.popUp}>
              <div className={styles.overlay} />
              <div className={styles.button}>
                <div className={styles.cta}>
                  <div className={styles.headerChild} />
                  <div className={styles.addToCart}>Add to cart</div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/gridiconsshare.svg"
                    />
                    <div className={styles.fixPrice}>Share</div>
                  </div>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/comparesvgrepocom-1.svg"
                    />
                    <div className={styles.fixPrice}>Compare</div>
                  </div>
                  <div className={styles.gridiconsshareParent}>
                    <img className={styles.heartIcon} alt="" src="/heart.svg" />
                    <div className={styles.fixPrice}>Like</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.featuredProducts}
            onClick={onFeaturedProductsContainer1Click}
          >
            <div className={styles.bg} />
            <div className={styles.description1}>
              <div className={styles.price1}>
                <div className={styles.fixPriceParent}>
                  <div className={styles.fixPrice}>Rp 2.500.000</div>
                  <div className={styles.fixPrice3}>Rp 3.500.000</div>
                </div>
              </div>
              <div className={styles.productName2}>
                <div className={styles.productName1}>Leviosa</div>
                <div className={styles.sortDescription}>Stylish cafe chair</div>
              </div>
            </div>
            <img className={styles.imagesIcon} alt="" src="/images@2x.png" />
            <div className={styles.label1}>
              <div className={styles.discount}>
                <div className={styles.discountChild} />
                <div className={styles.div}>-30%</div>
              </div>
              <div className={styles.new}>
                <div className={styles.newChild} />
                <div className={styles.new1}>New</div>
              </div>
            </div>
            <div className={styles.popUp1}>
              <div className={styles.overlay} />
              <div className={styles.button}>
                <div className={styles.cta1} onClick={onCTAContainerClick}>
                  <div className={styles.headerChild} />
                  <div className={styles.addToCart}>Add to cart</div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/gridiconsshare1.svg"
                    />
                    <div className={styles.fixPrice}>Share</div>
                  </div>
                  <div
                    className={styles.compareSvgrepoCom1Group}
                    onClick={onFrameContainer1Click}
                  >
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/comparesvgrepocom-11.svg"
                    />
                    <div className={styles.fixPrice}>Compare</div>
                  </div>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.heartIcon}
                      alt=""
                      src="/heart1.svg"
                    />
                    <div className={styles.fixPrice}>Like</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.featuredProducts}
            onClick={onFeaturedProductsContainer2Click}
          >
            <div className={styles.bg} />
            <div className={styles.description2}>
              <div className={styles.price2}>
                <div className={styles.fixPriceParent}>
                  <div className={styles.fixPrice}>Rp 7.000.000</div>
                  <div className={styles.fixPrice1}>Rp 14.000.000</div>
                </div>
              </div>
              <div className={styles.productName4}>
                <div className={styles.productName1}>Lolito</div>
                <div className={styles.sortDescription}>Luxury big sofa</div>
              </div>
            </div>
            <img className={styles.imagesIcon} alt="" src="/images@2x.png" />
            <div className={styles.label}>
              <div className={styles.discount}>
                <div className={styles.discountChild} />
                <div className={styles.div}>-50%</div>
              </div>
              <div className={styles.new}>
                <div className={styles.newChild} />
                <div className={styles.new1}>New</div>
              </div>
            </div>
            <div className={styles.popUp}>
              <div className={styles.overlay} />
              <div className={styles.button}>
                <div className={styles.cta}>
                  <div className={styles.headerChild} />
                  <div className={styles.addToCart}>Add to cart</div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/gridiconsshare2.svg"
                    />
                    <div className={styles.fixPrice}>Share</div>
                  </div>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/comparesvgrepocom-12.svg"
                    />
                    <div className={styles.fixPrice}>Compare</div>
                  </div>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.heartIcon}
                      alt=""
                      src="/heart2.svg"
                    />
                    <div className={styles.fixPrice}>Like</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.featuredProducts}
            onClick={onFeaturedProductsContainer3Click}
          >
            <div className={styles.bg} />
            <div className={styles.description3}>
              <div className={styles.price3}>
                <div className={styles.fixPriceParent}>
                  <div className={styles.fixPrice}>Rp 500.000</div>
                  <div className={styles.fixPrice7}>Rp 14.000.000</div>
                </div>
              </div>
              <div className={styles.productName2}>
                <div className={styles.productName1}>Respira</div>
                <div className={styles.sortDescription}>
                  Outdoor bar table and stool
                </div>
              </div>
            </div>
            <img className={styles.imagesIcon} alt="" src="/images@2x.png" />
            <div className={styles.label}>
              <div className={styles.discount3}>
                <div className={styles.discountChild} />
                <div className={styles.div}>-50%</div>
              </div>
              <div className={styles.new6}>
                <div className={styles.newChild} />
                <div className={styles.new1}>New</div>
              </div>
            </div>
            <div className={styles.popUp}>
              <div className={styles.overlay} />
              <div className={styles.button}>
                <div className={styles.cta}>
                  <div className={styles.headerChild} />
                  <div className={styles.addToCart}>Add to cart</div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/gridiconsshare3.svg"
                    />
                    <div className={styles.fixPrice}>Share</div>
                  </div>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/comparesvgrepocom-13.svg"
                    />
                    <div className={styles.fixPrice}>Compare</div>
                  </div>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.heartIcon}
                      alt=""
                      src="/heart3.svg"
                    />
                    <div className={styles.fixPrice}>Like</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.featuredProductsGroup}>
          <div
            className={styles.featuredProducts}
            onClick={onFeaturedProductsContainer4Click}
          >
            <div className={styles.bg} />
            <div className={styles.description4}>
              <div className={styles.price4}>
                <div className={styles.fixPriceParent}>
                  <div className={styles.fixPrice}>Rp 1.500.000</div>
                  <div className={styles.fixPrice3}>Rp 3.500.000</div>
                </div>
              </div>
              <div className={styles.productName8}>
                <div className={styles.productName1}>Grifo</div>
                <div className={styles.sortDescription}>Night lamp</div>
              </div>
            </div>
            <img className={styles.imagesIcon} alt="" src="/images@2x.png" />
            <div className={styles.label1}>
              <div className={styles.discount}>
                <div className={styles.discountChild} />
                <div className={styles.div}>-30%</div>
              </div>
              <div className={styles.new}>
                <div className={styles.newChild} />
                <div className={styles.new1}>New</div>
              </div>
            </div>
            <div className={styles.popUp}>
              <div className={styles.overlay} />
              <div className={styles.button}>
                <div className={styles.cta}>
                  <div className={styles.headerChild} />
                  <div className={styles.addToCart}>Add to cart</div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/gridiconsshare4.svg"
                    />
                    <div className={styles.fixPrice}>Share</div>
                  </div>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/comparesvgrepocom-14.svg"
                    />
                    <div className={styles.fixPrice}>Compare</div>
                  </div>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.heartIcon}
                      alt=""
                      src="/heart4.svg"
                    />
                    <div className={styles.fixPrice}>Like</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.featuredProducts}
            onClick={onFeaturedProductsContainer12Click}
          >
            <div className={styles.bg} />
            <div className={styles.description5}>
              <div className={styles.price5}>
                <div className={styles.fixPriceParent}>
                  <div className={styles.fixPrice}>Rp 150.000</div>
                  <div className={styles.fixPrice3}>Rp 3.500.000</div>
                </div>
              </div>
              <div className={styles.productName10}>
                <div className={styles.productName1}>Muggo</div>
                <div className={styles.sortDescription}>Small mug</div>
              </div>
            </div>
            <img className={styles.imagesIcon} alt="" src="/images@2x.png" />
            <div className={styles.label}>
              <div className={styles.discount3}>
                <div className={styles.discountChild} />
                <div className={styles.div}>-30%</div>
              </div>
              <div className={styles.new6}>
                <div className={styles.newChild} />
                <div className={styles.new1}>New</div>
              </div>
            </div>
            <div className={styles.popUp}>
              <div className={styles.overlay} />
              <div className={styles.button}>
                <div className={styles.cta}>
                  <div className={styles.headerChild} />
                  <div className={styles.addToCart}>Add to cart</div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/gridiconsshare5.svg"
                    />
                    <div className={styles.fixPrice}>Share</div>
                  </div>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/comparesvgrepocom-15.svg"
                    />
                    <div className={styles.fixPrice}>Compare</div>
                  </div>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.heartIcon}
                      alt=""
                      src="/heart5.svg"
                    />
                    <div className={styles.fixPrice}>Like</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.featuredProducts}
            onClick={onFeaturedProductsContainer22Click}
          >
            <div className={styles.bg} />
            <div className={styles.description2}>
              <div className={styles.price2}>
                <div className={styles.fixPriceParent}>
                  <div className={styles.fixPrice}>Rp 7.000.000</div>
                  <div className={styles.fixPrice1}>Rp 14.000.000</div>
                </div>
              </div>
              <div className={styles.productName12}>
                <div className={styles.productName1}>Pingky</div>
                <div className={styles.sortDescription}>Cute bed set</div>
              </div>
            </div>
            <img className={styles.imagesIcon} alt="" src="/images@2x.png" />
            <div className={styles.label}>
              <div className={styles.discount}>
                <div className={styles.discountChild} />
                <div className={styles.div}>-50%</div>
              </div>
              <div className={styles.new}>
                <div className={styles.newChild} />
                <div className={styles.new1}>New</div>
              </div>
            </div>
            <div className={styles.popUp}>
              <div className={styles.overlay} />
              <div className={styles.button}>
                <div className={styles.cta}>
                  <div className={styles.headerChild} />
                  <div className={styles.addToCart}>Add to cart</div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/gridiconsshare6.svg"
                    />
                    <div className={styles.fixPrice}>Share</div>
                  </div>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/comparesvgrepocom-16.svg"
                    />
                    <div className={styles.fixPrice}>Compare</div>
                  </div>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.heartIcon}
                      alt=""
                      src="/heart6.svg"
                    />
                    <div className={styles.fixPrice}>Like</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.featuredProducts}
            onClick={onFeaturedProductsContainer32Click}
          >
            <div className={styles.bg} />
            <div className={styles.description7}>
              <div className={styles.price3}>
                <div className={styles.fixPriceParent}>
                  <div className={styles.fixPrice}>Rp 500.000</div>
                  <div className={styles.fixPrice7}>Rp 14.000.000</div>
                </div>
              </div>
              <div className={styles.productName2}>
                <div className={styles.productName1}>Potty</div>
                <div className={styles.sortDescription}>
                  Minimalist flower pot
                </div>
              </div>
            </div>
            <img className={styles.imagesIcon} alt="" src="/images@2x.png" />
            <div className={styles.label}>
              <div className={styles.discount3}>
                <div className={styles.discountChild} />
                <div className={styles.div}>-50%</div>
              </div>
              <div className={styles.new6}>
                <div className={styles.newChild} />
                <div className={styles.new1}>New</div>
              </div>
            </div>
            <div className={styles.popUp}>
              <div className={styles.overlay} />
              <div className={styles.button}>
                <div className={styles.cta}>
                  <div className={styles.headerChild} />
                  <div className={styles.addToCart}>Add to cart</div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/gridiconsshare7.svg"
                    />
                    <div className={styles.fixPrice}>Share</div>
                  </div>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.gridiconsshare}
                      alt=""
                      src="/comparesvgrepocom-17.svg"
                    />
                    <div className={styles.fixPrice}>Compare</div>
                  </div>
                  <div className={styles.gridiconsshareParent}>
                    <img
                      className={styles.heartIcon}
                      alt=""
                      src="/heart7.svg"
                    />
                    <div className={styles.fixPrice}>Like</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <b className={styles.title}>Our Products</b>
      </div>
      <div className={styles.inspirations}>
        <div className={styles.bg16} />
        <div className={styles.products}>
          <div className={styles.image}>
            <img
              className={styles.imageChild}
              alt=""
              src="/rectangle-24@2x.png"
            />
            <div className={styles.cta8}>
              <div className={styles.ctaChild} />
              <img
                className={styles.right16pxIcon}
                alt=""
                src="/right-16px.svg"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.contentChild} />
              <div className={styles.parent}>
                <div className={styles.bedRoom}>01</div>
                <img className={styles.frameChild} alt="" src="/vector-1.svg" />
                <div className={styles.bedRoom}>Bed Room</div>
              </div>
              <div className={styles.innerPeace}>Inner Peace</div>
            </div>
          </div>
          <img
            className={styles.productsChild}
            alt=""
            src="/rectangle-25@2x.png"
          />
          <img
            className={styles.productsItem}
            alt=""
            src="/rectangle-26@2x.png"
          />
          <div className={styles.indicator}>
            <img className={styles.activeIcon} alt="" src="/active.svg" />
            <div className={styles.indicatorChild} />
            <div className={styles.indicatorChild} />
            <div className={styles.indicatorChild} />
          </div>
          <img className={styles.productsInner} alt="" src="/group-13.svg" />
        </div>
        <div className={styles.cta9}>
          <div className={styles.ctaItem} />
          <div className={styles.exploreMore}>Explore More</div>
        </div>
        <div className={styles.title1}>
          <b className={styles.title2}>
            <p className={styles.beautifulRooms}>{`50+ Beautiful rooms `}</p>
            <p className={styles.beautifulRooms}>inspiration</p>
          </b>
          <div className={styles.subtitle}>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </div>
        </div>
      </div>
      <div className={styles.share8}>
        <div className={styles.images}>
          <div className={styles.imagesChild} />
          <img
            className={styles.imagesItem}
            alt=""
            src="/rectangle-36@2x.png"
          />
          <img
            className={styles.imagesInner}
            alt=""
            src="/rectangle-38@2x.png"
          />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-40@2x.png"
          />
          <img
            className={styles.imagesChild1}
            alt=""
            src="/rectangle-39@2x.png"
          />
          <img
            className={styles.imagesChild2}
            alt=""
            src="/rectangle-41@2x.png"
          />
          <img
            className={styles.imagesChild3}
            alt=""
            src="/rectangle-44@2x.png"
          />
          <img
            className={styles.imagesChild4}
            alt=""
            src="/rectangle-43@2x.png"
          />
          <img
            className={styles.imagesChild5}
            alt=""
            src="/rectangle-45@2x.png"
          />
          <img
            className={styles.imagesChild6}
            alt=""
            src="/rectangle-37@2x.png"
          />
        </div>
        <div className={styles.title3}>
          <div className={styles.title4}>Share your setup with</div>
          <b className={styles.title5}>#FuniroFurniture</b>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.groupDiv}>
          <div className={styles.universityDriveSuite200CorParent}>
            <div className={styles.universityDriveSuiteContainer}>
              <p className={styles.beautifulRooms}>
                400 University Drive Suite 200 Coral Gables,
              </p>
              <p className={styles.beautifulRooms}>FL 33134 USA</p>
            </div>
            <b className={styles.funiro}>Funiro.</b>
            <div className={styles.groupParent1}>
              <div className={styles.groupParent2}>
                <div className={styles.groupParent3}>
                  <div className={styles.homeGroup}>
                    <div className={styles.help}>Home</div>
                    <div className={styles.shop1}>Shop</div>
                    <div className={styles.about1}>About</div>
                    <div className={styles.contact1}>Contact</div>
                  </div>
                  <div className={styles.links}>Links</div>
                </div>
                <div className={styles.helpParent}>
                  <div className={styles.help}>Help</div>
                  <div className={styles.paymentOptionsParent}>
                    <div className={styles.help}>Payment Options</div>
                    <div className={styles.returns}>Returns</div>
                    <div className={styles.privacyPolicies}>
                      Privacy Policies
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.newsletterParent}>
                <div className={styles.help}>Newsletter</div>
                <div className={styles.enterYourEmailAddressParent}>
                  <div className={styles.enterYourEmail}>
                    Enter Your Email Address
                  </div>
                  <div className={styles.groupChild} />
                  <div className={styles.subscribe}>SUBSCRIBE</div>
                  <div className={styles.groupItem} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.groupInner} />
            <div className={styles.furinoAllRights}>
              2023 furino. All rights reverved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
