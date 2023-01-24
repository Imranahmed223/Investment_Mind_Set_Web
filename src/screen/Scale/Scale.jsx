import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Scale.scss";
import rounded from "../../assest/round.png";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { StockAnalysis, clearAnalysisErrors } from "./../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

let progressInterval = null;
const Scale = () => {
  const dispatch = useDispatch();
  const { stockAnalysis, analysisErrors } = useSelector(
    (state) => state.analysisReducer
  );
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    progressInterval = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 100);
  }, []);
  useEffect(() => {
    if (progress >= 100) {
      clearInterval(progressInterval);
    }
  }, [progress]);

  useEffect(() => {
    dispatch(StockAnalysis());
  }, []);

  useEffect(() => {
    if (analysisErrors.length > 0) {
      toast.error(analysisErrors);
      dispatch(clearAnalysisErrors());
    }
  }, [analysisErrors]);

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <div className="toshi">
        <Navbar />
        {/* Heading part */}
        <div className="toshi-heading">
          <div className="toshi-heading-container">
            <div className="toshi-heading-container-left">
              <img src={rounded} alt="" />
              <div className="toshi-heading-container-left-head">
                <h1>T R V I</h1>
                <p>Trevi Therapeutics Inc.</p>
              </div>
            </div>
            <div className="toshi-heading-container-right">
              <button className="toshi-heading-container-right-first">
                Add to Watchlist
              </button>
              <button className="toshi-heading-container-right-second">
                Compare
              </button>
            </div>
          </div>
        </div>
        {stockAnalysis.length > 0
          ? stockAnalysis.map((data, ind) => {
              return (
                <div className="toshi-container" key={ind}>
                  <div className="toshi-container-progress">
                    <div className="toshi-container-progress-top">
                      <h6>Overall</h6>
                      <h6>{data.analysis.overall}</h6>
                    </div>
                    <div className="progress " style={{ height: 18 }}>
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{ width: data.analysis.overall }}
                      ></div>
                    </div>
                  </div>
                  <div className="toshi-container-progress">
                    <div className="toshi-container-progress-top">
                      <h6>Fundamental</h6>
                      <h6>{data.analysis.fundamental}</h6>
                    </div>
                    <div className="progress " style={{ height: 18 }}>
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{ width: data.analysis.fundamental }}
                      ></div>
                    </div>
                  </div>
                  <div className="toshi-container-progress">
                    <div className="toshi-container-progress-top">
                      <h6>Short-Term Technical</h6>
                      <h6>{data.analysis.shortTermTechnical}</h6>
                    </div>
                    <div className="progress " style={{ height: 18 }}>
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{ width: data.analysis.shortTermTechnical }}
                      ></div>
                    </div>
                  </div>
                  <div className="toshi-container-progress">
                    <div className="toshi-container-progress-top">
                      <h6>Long-Term Technical</h6>
                      <h6>{data.analysis.longTermTechnical}</h6>
                    </div>
                    <div className="progress " style={{ height: 18 }}>
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{ width: data.analysis.longTermTechnical }}
                      ></div>
                    </div>
                  </div>
                  <div className="toshi-container-progress">
                    <div className="toshi-container-progress-top">
                      <h6>Analyst rating</h6>
                      <h6>{data.analysis.analysisRating}</h6>
                    </div>
                    <div className="progress " style={{ height: 18 }}>
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{ width: data.analysis.analysisRating }}
                      ></div>
                    </div>
                  </div>
                  <div className="toshi-container-progress">
                    <div className="toshi-container-progress-top">
                      <h6>Valuation</h6>
                      <h6>{data.analysis.valuation}</h6>
                    </div>
                    <div className="progress " style={{ height: 18 }}>
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{ width: data.analysis.valuation }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })
          : "Loading"}
      </div>
    </>
  );
};

export default Scale;
