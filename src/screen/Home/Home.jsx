import React, { useEffect } from "react";
import "./Home.scss";
import Heading from "../../components/Heading/Heading";
import Navbar from "../../components/Navbar/Navbar";
import green from "../../assest/charts/greenchart.png";
import bitcoin from "../../assest/coins/bitcoin.png";
import news from "../../assest/news/news.png";
import NewsCard from "../../components/NewsCard/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import {
  LatestCryptoCurrency,
  clearCurrencyErrors,
  WeekHotNews,
} from "./../../store/actions";
import { Puff } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, errors, cryptoCurrency, hotNews } = useSelector(
    (state) => state.currencyReducer
  );

  useEffect(() => {
    dispatch(LatestCryptoCurrency());
    dispatch(WeekHotNews());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(LatestCryptoCurrency());
    }, 120000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (errors.length > 0) {
      toast.error(errors);
      dispatch(clearCurrencyErrors());
    }
  }, [errors]);
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <div className="home">
        <div className="home-navbar">
          <Navbar />
        </div>
        <div className="home-container">
          <div className="home-container-heading">
            <Heading text="Hot Crypto News Of The Week!" />
          </div>
          <div className="home-container-slider">
            {hotNews.length > 0 ? (
              hotNews.map((data, ind) => {
                return (
                  <NewsCard
                    img={data.photoPath ? data.photoPath : news}
                    heading={data.title}
                    para={data.description}
                  />
                );
              })
            ) : (
              <Puff
                height="30"
                width="30"
                radius="4"
                color="blue"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            )}
            {/* <NewsCard
              img={news}
              heading="Lorem Ipsum"
              para="Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet vehicula tortor ut ullamcorper."
            />
            <NewsCard
            
              img={news}
              heading="Lorem Ipsum"
              para="Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet vehicula tortor ut ullamcorper."
            />
            <NewsCard
              img={news}
              heading="Lorem Ipsum"
              para="Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet vehicula tortor ut ullamcorper."
            />
            <NewsCard
              img={news}
              heading="Lorem Ipsum"
              para="Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet vehicula tortor ut ullamcorper."
            />
            <NewsCard
              img={news}
              heading="Lorem Ipsum"
              para="Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet vehicula tortor ut ullamcorper."
            />
            <NewsCard
              img={news}
              heading="Lorem Ipsum"
              para="Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet vehicula tortor ut ullamcorper."
            /> */}
          </div>
          <div className="home-container-heading-two">
            <Heading text="Take a Look at Today’s Prices" />
          </div>
          <div className="home-container-table">
            <table className="table">
              <thead>
                <tr>
                  <th className="table-th"></th>
                  <th className="table-th">Price</th>
                  <th className="table-th">1h %</th>
                  <th className="table-th">24h %</th>
                  <th className="table-th">7d %</th>
                  <th className="table-th">Market Cap</th>
                  <th className="table-th">Volume(24h)</th>
                  <th className="table-th">Circulation Supply</th>
                  <th className="table-th">Graph</th>
                </tr>
              </thead>
              <tbody className="table-body-first">
                {cryptoCurrency.length > 0 ? (
                  cryptoCurrency.map((data, ind) => {
                    return (
                      <tr key={ind}>
                        <td className="td">
                          <table className="subtable">
                            <tr>
                              <td className="logo">
                                <img
                                  src={data.logo ? data.logo : bitcoin}
                                  alt="image"
                                />
                              </td>
                              <td>
                                <p className="coin-name">{data.name}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td className="td content">{data.quote.USD.price}</td>
                        <td className="td content green">
                          {data.quote.USD.percent_change_1h}
                        </td>
                        <td className="td content red">
                          {data.quote.USD.percent_change_24h}
                        </td>
                        <td className="td content green">
                          {data.quote.USD.percent_change_7d}
                        </td>
                        <td className="td content">
                          {data.quote.USD.market_cap}
                        </td>
                        <td className="td content table-flex">
                          {data.quote.USD.volume_24h}
                        </td>
                        <td className="td content">
                          {data.circulating_supply}
                        </td>
                        <td className="td content">
                          <img src={green} alt="" />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <Puff
                    height="60"
                    width="60"
                    radius="6"
                    color="blue"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                  />
                )}
              </tbody>
              {/* <tr>
                <td className="td">
                  <table className="subtable">
                    <tr>
                      <td>
                        <img src={ethereum} className="logo" alt="" />
                      </td>
                      <td>
                        <p className="content">Ethereum</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td className="td content">1446.45</td>
                <td className="td content green">+2.51</td>
                <td className="td content red">-1.41</td>
                <td className="td content green">+4.26</td>
                <td className="td content">+4.26</td>
                <td className="td content table-flex">$365,848,095,568</td>
                <td className="td content">$365,848,095,568</td>
                <td className="td content">
                  <img src={red} alt="" />
                </td>
              </tr> */}

              {/* <tr>
                <td className="td">
                  <table className="subtable">
                    <tr>
                      <td>
                        <img src={tether} className="logo" alt="" />
                      </td>
                      <td>
                        <p className="content">Tether</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td className="td content">1.00075</td>
                <td className="td content green">+2.51</td>
                <td className="td content red">-1.41</td>
                <td className="td content green">+4.26</td>
                <td className="td content">+4.26</td>
                <td className="td content table-flex">$365,848,095,568</td>
                <td className="td content">$365,848,095,568</td>
                <td className="td content">
                  <img src={green} alt="" />
                </td>
              </tr> */}

              {/* <tr>
                <td className="td">
                  <table className="subtable">
                    <tr>
                      <td>
                        <img src={usd} className="logo" alt="" />
                      </td>
                      <td>
                        <p className="content">USD Coin</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td className="td content">23,750</td>
                <td className="td content green">+2.51</td>
                <td className="td content red">-1.41</td>
                <td className="td content green">+4.26</td>
                <td className="td content">+4.26</td>
                <td className="td content table-flex">$365,848,095,568</td>
                <td className="td content">$365,848,095,568</td>
                <td className="td content">
                  <img src={red} alt="" />
                </td>
              </tr> */}

              {/* <tr>
                <td className="td">
                  <table className="subtable">
                    <tr>
                      <td>
                        <img src={bnb} className="logo" alt="" />
                      </td>
                      <td>
                        <p className="content">BNB</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td className="td content">28,750</td>
                <td className="td content green">+2.51</td>
                <td className="td content red">-1.41</td>
                <td className="td content green">+4.26</td>
                <td className="td content">+4.26</td>
                <td className="td content table-flex">$365,848,095,568</td>
                <td className="td content">$365,848,095,568</td>
                <td className="td content">
                  <img src={green} alt="" />
                </td>
              </tr> */}

              {/* <tr>
                <td className="td">
                  <table className="subtable">
                    <tr>
                      <td>
                        <img src={bnb} className="logo" alt="" />
                      </td>
                      <td>
                        <p className="content">Binance USD</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td className="td content">295.25</td>
                <td className="td content green">+2.51</td>
                <td className="td content red">-1.41</td>
                <td className="td content green">+4.26</td>
                <td className="td content">+4.26</td>
                <td className="td content table-flex">$365,848,095,568</td>
                <td className="td content">$365,848,095,568</td>
                <td className="td content">
                  <img src={red} alt="" />
                </td>
              </tr> */}

              {/* <tr>
                <td className="td">
                  <table className="subtable">
                    <tr>
                      <td>
                        <img src={cardano} className="logo" alt="" />
                      </td>
                      <td>
                        <p className="content">Cardano</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td className="td content">295.25</td>
                <td className="td content green">+2.51</td>
                <td className="td content red">-1.41</td>
                <td className="td content green">+4.26</td>
                <td className="td content">+4.26</td>
                <td className="td content table-flex">$365,848,095,568</td>
                <td className="td content">$365,848,095,568</td>
                <td className="td content">
                  <img src={green} alt="" />
                </td>
              </tr> */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
