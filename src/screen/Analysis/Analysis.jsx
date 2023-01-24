import "./Analysis.scss";
import { useEffect, useRef, useState } from "react";
import Heading from "../../components/Heading/Heading";
import Navbar from "../../components/Navbar/Navbar";
import WeeklyAnalysis from "../../components/WeeklyAnalysis/WeeklyAnalysis";
import SliderCardAnalysis from "../../components/SliderCardAnalysis/SliderCardAnalysis";
import weekly from "../../assest/weekly.png";
import previousArrow from "../../assest/previousArrow.png";
import nextArrow from "../../assest/nextArrow.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useDispatch, useSelector } from "react-redux";
import Pagination from '@mui/material/Pagination';
import {
  TodayAnalysis,
  WeekHotNews,
  clearAnalysisErrors,
  clearCurrencyErrors,
} from "./../../store/actions";
import toast, { Toaster } from "react-hot-toast";

const Analysis = () => {
  const dispatch = useDispatch();
  const [page,setPage] = useState(1)
  const { todayAnalysis, analysisErrors } = useSelector(
    (state) => state.analysisReducer
  );
  const { hotNews, errors,totalPages } = useSelector((state) => state.currencyReducer);

  useEffect(() => {
    dispatch(TodayAnalysis());
    dispatch(WeekHotNews(page));
  }, [page]);

  useEffect(() => {
    if (errors.length > 0) {
      toast.error(errors);
      dispatch(clearCurrencyErrors());
    }
    if (analysisErrors.length > 0) {
      toast.error(analysisErrors);
      dispatch(clearAnalysisErrors());
    }
  }, [errors, analysisErrors]);
  const ref = useRef(null);
  // const sliderData = [
  //   {
  //     img: weekly,
  //     heading: 'Lorem Ips',
  //     subheading: 'Lorem ipsum dolor sit amet,',
  //     para: 'Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet vehicula tortor ut ullamcorper. Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet vehicula tortor ut ullamcorper. Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet'
  //   },
  //   {
  //     img: weekly,
  //     heading: 'Lorem Ips',
  //     subheading: 'Lorem ipsum dolor sit amet,',
  //     para: 'Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet vehicula tortor ut ullamcorper. Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet vehicula tortor ut ullamcorper. Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet'
  //   },
  //   {
  //     img: weekly,
  //     heading: 'Lorem Ips',
  //     subheading: 'Lorem ipsum dolor sit amet,',
  //     para: 'Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet vehicula tortor ut ullamcorper. Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet vehicula tortor ut ullamcorper. Lorem ipsum dolor sit amet, . Ut viverra hendrerit. Nullam aliquet'
  //   },
  // ]

  const [current, setCurrent] = useState(0);
  const length = todayAnalysis.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  function onSlideChanged(e) {
    setCurrent(e.item);
  }

  const items = todayAnalysis.map((item, index) => (
    <div style={{ height: "100%" }}>
      <SliderCardAnalysis
        img={item.photoPath}
        heading={item.title}
        subheading={item.description}
        para={item.para}
        flag={index == current}
      />
    </div>
  ));

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <div className="analysis">
        <div className="analysis-navbar">
          <Navbar />
        </div>
        <div className="analysis-container">
          {/* Slider Section */}
          <div className="analysis-container-heading">
            <Heading text="Today's Analysis" />
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <AliceCarousel
              items={items}
              ref={ref}
              mouseTracking
              disableDotsControls
              activeIndex={current}
              dotsDisabled={true}
              disableButtonsControls
              onSlideChanged={onSlideChanged}
              responsive={{
                520: {
                  items: 1,
                },
                680: {
                  items: 2,
                },
                1024: {
                  items: 2,
                },
                1100: {
                  items: 3,
                },
              }}
              justifyContent="center"
              alignItems="center"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
            <img
              src={previousArrow}
              onClick={prevSlide}
              width={22}
              height={22}
              style={{ cursor: "pointer" }}
            />
            <img
              src={nextArrow}
              onClick={nextSlide}
              width={22}
              height={22}
              style={{ marginLeft: 10, cursor: "pointer" }}
            />
          </div>

          {/* Remaining Cards Section */}
          <div className="analysis-container-heading">
            <Heading text="More from this week" />
          </div>
          <div className="analysis-container-content">
            {hotNews.length > 0
              ? hotNews.map((data, ind) => {
                  return (
                    <WeeklyAnalysis
                      key={ind}
                      img={data.photoPath ? data.photoPath : weekly}
                      heading={data.title}
                      subheading=""
                      para={data.description}
                    />
                  );
                })
              : "Loading..."}
          </div>
          <Pagination count={totalPages} page={page} shape="circle" color="primary" size="large" showFirstButton showLastButton onChange={(e,value)=>setPage(value)}/>
        </div>
      </div>
    </>
  );
};

export default Analysis;
