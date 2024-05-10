import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/cart-sidebar");
  }, [navigate]);

  return (
    <div className={styles.checkout}>
      <header className={styles.header}>
        <div className={styles.logoAndLinks} />
        <div className={styles.frameParent}>
          <div className={styles.secondaryCallToActionsParent}>
            <div className={styles.secondaryCallToActions}>
              <div className={styles.meubelHouseLogos05Wrapper}>
                <img
                  className={styles.meubelHouseLogos05Icon}
                  loading="lazy"
                  alt=""
                  src="/meubel-house-logos05@2x.png"
                />
              </div>
              <h1 className={styles.skinclinic}>Furniro</h1>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.mdiaccountAlertOutlineParent}>
                <img
                  className={styles.mdiaccountAlertOutlineIcon}
                  loading="lazy"
                  alt=""
                  src="/mdiaccountalertoutline.svg"
                />
                <img
                  className={styles.akarIconssearch}
                  loading="lazy"
                  alt=""
                  src="/akariconssearch.svg"
                />
                <img
                  className={styles.akarIconsheart}
                  loading="lazy"
                  alt=""
                  src="/akariconsheart.svg"
                />
                <img
                  className={styles.antDesignshoppingCartOutliIcon}
                  loading="lazy"
                  alt=""
                  src="/antdesignshoppingcartoutlined.svg"
                />
              </div>
            </div>
          </div>
          <nav className={styles.frameContainer}>
            <nav className={styles.homeParent}>
              <Link to="/" className={styles.home}>Home</Link>
              <div className={styles.shop}>Shop</div>
              <div className={styles.about}>About</div>
              <div className={styles.contact}>Contact</div>
            </nav>
          </nav>
        </div>
      </header>
      <section className={styles.wrapperPaymentOptionsParent}>
        <div className={styles.wrapperPaymentOptions}>
          <img
            className={styles.paymentOptionsIcon}
            alt=""
            src="/payment-options@2x.png"
          />
        </div>
        <div className={styles.checkoutParent}>
          <h1 className={styles.checkout1}>Checkout</h1>
          <img
            className={styles.meubelHouseLogos05Icon1}
            alt=""
            src="/meubel-house-logos05-1@2x.png"
          />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.homeGroup}>
            <div className={styles.home1}>Home</div>
            <div className={styles.dashiconsarrowDownAlt2Wrapper}>
              <img
                className={styles.dashiconsarrowDownAlt2}
                loading="lazy"
                alt=""
                src="/dashiconsarrowdownalt2@2x.png"
              />
            </div>
            <div className={styles.checkout2}>Checkout</div>
          </div>
        </div>
      </section>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <h1 className={styles.billingDetails}>Billing details</h1>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameGroup}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.firstNameParent}>
                    <div className={styles.firstName}>First Name</div>
                    <div className={styles.rectangleWrapper}>
                      <div className={styles.frameInner} />
                    </div>
                  </div>
                  <div className={styles.companyNameOptional}>
                    Company Name (Optional)
                  </div>
                </div>
                <div className={styles.lastNameParent}>
                  <div className={styles.lastName}>Last Name</div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.rectangleDiv} />
                  </div>
                </div>
              </div>
              <div className={styles.frameChild1} />
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.countryRegionParent}>
              <div className={styles.countryRegion}>Country / Region</div>
              <div className={styles.frameWrapper3}>
                <Form.Select className={styles.frameFormselect} />
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper4}>
            <div className={styles.streetAddressParent}>
              <div className={styles.streetAddress}>Street address</div>
              <div className={styles.rectangleFrame}>
                <div className={styles.frameChild2} />
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper5}>
            <div className={styles.townCityParent}>
              <div className={styles.townCity}>Town / City</div>
              <div className={styles.rectangleWrapper1}>
                <div className={styles.frameChild3} />
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper6}>
            <div className={styles.provinceParent}>
              <div className={styles.province}>Province</div>
              <div className={styles.frameWrapper7}>
                <Form.Select className={styles.frameFormselect1} />
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper8}>
            <textarea
              className={styles.frameTextarea}
              placeholder="ZIP code"
              rows={6}
              cols={23}
            />
          </div>
          <div className={styles.frameWrapper9}>
            <textarea
              className={styles.frameChild4}
              placeholder="Phone"
              rows={6}
              cols={23}
            />
          </div>
          <div className={styles.frameWrapper10}>
            <div className={styles.emailAddressParent}>
              <div className={styles.emailAddress}>Email address</div>
              <div className={styles.rectangleWrapper2}>
                <div className={styles.frameChild5} />
              </div>
            </div>
          </div>
          <div className={styles.dataAggregator}>
            <div className={styles.groupDiv}>
              <div className={styles.frameChild6} />
              <input
                className={styles.additionalInformation}
                placeholder="Additional information"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameChild7} />
          <div className={styles.frameParent3}>
            <div className={styles.productParent}>
              <h3 className={styles.product}>Product</h3>
              <div className={styles.frameWrapper11}>
                <div className={styles.frameParent4}>
                  <div className={styles.asgaardSofaParent}>
                    <div className={styles.asgaardSofa}>Asgaard sofa</div>
                    <div className={styles.xWrapper}>
                      <div className={styles.x}>X</div>
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>1</div>
                    </div>
                  </div>
                  <div className={styles.subtotal}>Subtotal</div>
                  <div className={styles.total}>Total</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.subtotalWrapper}>
                <h3 className={styles.subtotal1}>Subtotal</h3>
              </div>
              <div className={styles.nestingLevelParent}>
                <div className={styles.nestingLevel}>
                  <div className={styles.rs25000000}>Rs. 250,000.00</div>
                </div>
                <div className={styles.breadthFirst}>
                  <div className={styles.traversalOrder}>
                    <div className={styles.rs250000001}>Rs. 250,000.00</div>
                  </div>
                  <b className={styles.rs250000002}>Rs. 250,000.00</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.shortestPath}>
            <div className={styles.topologicalSort}>
              <div className={styles.orderOver} />
            </div>
            <div className={styles.dFSTraversal}>
              <div className={styles.bFSTraversal}>
                <div className={styles.treeDepth}>
                  <div className={styles.treeWidth}>
                    <div className={styles.subtreeCount}>
                      <div className={styles.customersupport} />
                    </div>
                    <div className={styles.directBankTransfer}>
                      Direct Bank Transfer
                    </div>
                  </div>
                </div>
                <div className={styles.makeYourPayment}>
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </div>
              </div>
            </div>
            <div className={styles.outDegree}>
              <div className={styles.adjacencyList}>
                <div className={styles.adjacencyMatrix}>
                  <div className={styles.graphRepresentation}>
                    <div className={styles.shop1} />
                  </div>
                  <div className={styles.directBankTransfer1}>
                    Direct Bank Transfer
                  </div>
                </div>
                <div className={styles.adjacencyMatrix1}>
                  <div className={styles.adjacencyMatrixInner}>
                    <div className={styles.ellipseDiv} />
                  </div>
                  <div className={styles.cashOnDelivery}>Cash On Delivery</div>
                </div>
              </div>
            </div>
            <div className={styles.yourPersonalDataContainer}>
              <span
                className={styles.yourPersonalData}
              >{`Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our `}</span>
              <span className={styles.privacyPolicy}>privacy policy.</span>
            </div>
          </div>
          <div className={styles.depthFirstSearch}>
            <button className={styles.groupButton}>
              <div className={styles.frameChild8} />
              <div className={styles.placeOrder}>Place order</div>
            </button>
          </div>
        </div>
      </section>
      <section className={styles.featureWrapper}>
        <div className={styles.feature}>
          <div className={styles.shipping}>
            <img
              className={styles.trophy1Icon}
              loading="lazy"
              alt=""
              src="/trophy-1.svg"
            />
            <div className={styles.text}>
              <h3 className={styles.highQuality}>High Quality</h3>
              <div className={styles.craftedFromTop}>
                crafted from top materials
              </div>
            </div>
          </div>
          <div className={styles.guaranteeParent}>
            <img
              className={styles.guaranteeIcon}
              loading="lazy"
              alt=""
              src="/guarantee.svg"
            />
            <div className={styles.frameChild9} />
            <div className={styles.text1}>
              <h3 className={styles.warrantyProtection}>Warranty Protection</h3>
              <div className={styles.over2Years}>Over 2 years</div>
            </div>
          </div>
          <div className={styles.shipping1}>
            <img
              className={styles.shippingIcon}
              loading="lazy"
              alt=""
              src="/shipping.svg"
            />
            <div className={styles.text2}>
              <h3 className={styles.freeShipping}>Free Shipping</h3>
              <div className={styles.orderOver150}>Order over 150 $</div>
            </div>
          </div>
          <div className={styles.shipping2}>
            <img
              className={styles.customerSupportIcon}
              loading="lazy"
              alt=""
              src="/customersupport.svg"
            />
            <div className={styles.text3}>
              <div className={styles.support}>24 / 7 Support</div>
              <div className={styles.dedicatedSupport}>Dedicated support</div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.frameParent6}>
          <div className={styles.ifStatementParent}>
            <div className={styles.ifStatement}>
              <h3 className={styles.funiro}>Funiro.</h3>
              <div className={styles.switchCase}>
                <div className={styles.universityDriveSuiteContainer}>
                  <p className={styles.universityDriveSuite}>
                    400 University Drive Suite 200 Coral Gables,
                  </p>
                  <p className={styles.fl33134Usa}>FL 33134 USA</p>
                </div>
              </div>
            </div>
            <div className={styles.frameParent7}>
              <div className={styles.frameParent8}>
                <div className={styles.linksParent}>
                  <div className={styles.links}>Links</div>
                  <div className={styles.constantValue}>
                    <div className={styles.homeContainer}>
                      <div className={styles.home2}>Home</div>
                      <div className={styles.shop2}>Shop</div>
                      <div className={styles.about1}>About</div>
                      <div className={styles.contact1}>Contact</div>
                    </div>
                  </div>
                </div>
                <div className={styles.helpParent}>
                  <div className={styles.help}>Help</div>
                  <div className={styles.paymentOptionsParent}>
                    <div className={styles.paymentOptions}>Payment Options</div>
                    <div className={styles.returns}>Returns</div>
                    <div className={styles.privacyPolicies}>
                      Privacy Policies
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.functionDefinition}>
                <div className={styles.newsletterParent}>
                  <div className={styles.newsletter}>Newsletter</div>
                  <div className={styles.errorHandlerParent}>
                    <div className={styles.errorHandler}>
                      <input
                        className={styles.enterYourEmail}
                        placeholder="Enter Your Email Address"
                        type="text"
                      />
                      <div className={styles.errorHandlerChild} />
                    </div>
                    <button className={styles.errorHandler1}>
                      <div className={styles.subscribe}>SUBSCRIBE</div>
                      <div className={styles.errorHandlerItem} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <div className={styles.furinoAllRightsRevervedWrapper}>
              <div className={styles.furinoAllRights}>
                2023 furino. All rights reverved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
