"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/app/loading";
import AdBannerCarousel from "./AdBannerCarousel";
import { WiCloudRefresh } from "react-icons/wi";
import { FaUserTie, FaUsers, FaUsersSlash } from "react-icons/fa6";
import { PiUserListFill } from "react-icons/pi";
import { LuShieldClose } from "react-icons/lu";
import { FaRupeeSign } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { PiSlideshowDuotone } from "react-icons/pi";
import { FcRemoveImage } from "react-icons/fc";

const Admin = () => {
  const [isReportOpen, setIsReportOpen] = useState(true);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isProfOpen, setIsProfOpen] = useState(false);
  const [isProfAcceptOpen, setIsProfAcceptOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const [isDelUserOpen, setIsDelUserOpen] = useState(false);
  const [isSBHBalanceOpen, setIsSBHBalanceOpen] = useState(false);
  const [isAdsOpen, setIsAdsOpen] = useState(false);
  const activeCss = "bg-[#53c28b] text-[#000] font-bold";

  const [refDb, setRefDb] = useState(false);
  const [dBCollection, setDBCollection] = useState(null);
  const fetchDBCollectionInfo = async () => {
    const setOfColletion = "all";
    try {
      const res = await fetch("/api/get-db-collection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          setOfColletion,
        }),
      });

      if (res.status === 400) {
        console.log("Collections doesn't exists in database!");
      }
      if (res.status === 200) {
        const dBData = await res.json();
        setDBCollection(dBData);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    if (!dBCollection) {
      fetchDBCollectionInfo();
      // console.log(dBCollection);
    }
  }, [dBCollection]);

  if (refDb == true) {
    fetchDBCollectionInfo();
    console.log("DB Refreshed: " + refDb);
    setRefDb(false);
  }
  const usersCollection = dBCollection?.usersCollection;
  const deletedUsersCollection = dBCollection?.deletedUsersCollection;
  const profsCollection = dBCollection?.profsCollection;
  const contactUsCollection = dBCollection?.contactUsCollection;
  const sbhBalanceCollection = dBCollection?.sbhBalanceCollection;
  const adBannerCollection = dBCollection?.adBannerCollection;

  return (
    <>
      <section className="w-full h-[78vh] flex flex-row animate-slideDown">
        <div className="adminNav w-[20%] h-full p-2 border-r-[0.5px] border-[#53c28b] flex flex-col gap-4 items-center">
          <button className="allBt w-full h-[2.5rem] rounded-md flex items-center justify-center text-[#53c28b] border border-[#53c28b] scale-95 hover:scale-100 active:scale-90 active:bg-[#53c28b] active:text-white ease-in-out duration-300" onClick={() => {
            setDBCollection(null)
            fetchDBCollectionInfo()
          }}><WiCloudRefresh size={40} />
            <span className="hidden md:flex">Refresh DB</span>
          </button>
          <div
            onClick={() => {
              !isReportOpen ? setIsReportOpen(!isReportOpen) : "";
              isUserOpen ? setIsUserOpen(!isUserOpen) : "";
              isProfOpen ? setIsProfOpen(!isProfOpen) : "";
              isProfAcceptOpen ? setIsProfAcceptOpen(!isProfAcceptOpen) : "";
              isContactUsOpen ? setIsContactUsOpen(!isContactUsOpen) : "";
              isDelUserOpen ? setIsDelUserOpen(!isDelUserOpen) : "";
              isSBHBalanceOpen ? setIsSBHBalanceOpen(!isSBHBalanceOpen) : "";
              isAdsOpen ? setIsAdsOpen(!isAdsOpen) : "";
            }}
            className={`w-full h-[6vh] rounded-md cursor-pointer active:scale-90 flex items-center justify-center ${isReportOpen == true ? activeCss : "md:hover:bg-[#48ffa363] hover:shadow-xl"
              } shadow-sm shadow-[#53c28b] ease-in-out duration-300`}
          >
            <span className="md:hidden"><TbReportAnalytics size={30} /></span>
            <span className="hidden md:flex">Dashboard</span>
          </div>
          <div
            onClick={() => {
              !isSBHBalanceOpen ? setIsSBHBalanceOpen(!isSBHBalanceOpen) : "";
              isReportOpen ? setIsReportOpen(!isReportOpen) : "";
              isDelUserOpen ? setIsDelUserOpen(!isDelUserOpen) : "";
              isUserOpen ? setIsUserOpen(!isUserOpen) : "";
              isProfOpen ? setIsProfOpen(!isProfOpen) : "";
              isProfAcceptOpen ? setIsProfAcceptOpen(!isProfAcceptOpen) : "";
              isContactUsOpen ? setIsContactUsOpen(!isContactUsOpen) : "";
              isAdsOpen ? setIsAdsOpen(!isAdsOpen) : "";
            }}
            className={`w-full h-[6vh] rounded-md cursor-pointer active:scale-90 flex items-center justify-center ${isSBHBalanceOpen == true ? activeCss : "md:hover:bg-[#48ffa363] hover:shadow-xl"
              } shadow-sm shadow-[#53c28b] ease-in-out duration-300`}
          >
            <span className="md:hidden"><FaRupeeSign size={30} /></span>
            <span className="hidden md:flex">SBH Balance</span>
          </div>
          <div
            onClick={() => {
              !isUserOpen ? setIsUserOpen(!isUserOpen) : "";
              isReportOpen ? setIsReportOpen(!isReportOpen) : "";
              isProfOpen ? setIsProfOpen(!isProfOpen) : "";
              isProfAcceptOpen ? setIsProfAcceptOpen(!isProfAcceptOpen) : "";
              isContactUsOpen ? setIsContactUsOpen(!isContactUsOpen) : "";
              isDelUserOpen ? setIsDelUserOpen(!isDelUserOpen) : "";
              isSBHBalanceOpen ? setIsSBHBalanceOpen(!isSBHBalanceOpen) : "";
              isAdsOpen ? setIsAdsOpen(!isAdsOpen) : "";
            }}
            className={`w-full h-[6vh] rounded-md cursor-pointer active:scale-90 flex items-center justify-center ${isUserOpen == true ? activeCss : "md:hover:bg-[#48ffa363] hover:shadow-xl"
              } shadow-sm shadow-[#53c28b] ease-in-out duration-300`}
          >
            <span className="md:hidden"><FaUsers size={30} /></span>
            <span className="hidden md:flex">Users</span>
          </div>
          <div
            onClick={() => {
              !isProfOpen ? setIsProfOpen(!isProfOpen) : "";
              isReportOpen ? setIsReportOpen(!isReportOpen) : "";
              isProfAcceptOpen ? setIsProfAcceptOpen(!isProfAcceptOpen) : "";
              isUserOpen ? setIsUserOpen(!isUserOpen) : "";
              isContactUsOpen ? setIsContactUsOpen(!isContactUsOpen) : "";
              isDelUserOpen ? setIsDelUserOpen(!isDelUserOpen) : "";
              isSBHBalanceOpen ? setIsSBHBalanceOpen(!isSBHBalanceOpen) : "";
              isAdsOpen ? setIsAdsOpen(!isAdsOpen) : "";
            }}
            className={`w-full h-[6vh] rounded-md cursor-pointer active:scale-90 flex items-center justify-center ${isProfOpen == true ? activeCss : "md:hover:bg-[#48ffa363] hover:shadow-xl"
              } shadow-sm shadow-[#53c28b] ease-in-out duration-300`}
          >
            <span className="md:hidden flex items-center justify-center font-extrabold"><FaUserTie size={30} />&#10003;</span>
            <span className="hidden md:flex gap-1">Verified Professionals</span>
          </div>
          <div
            onClick={() => {
              !isProfAcceptOpen ? setIsProfAcceptOpen(!isProfAcceptOpen) : "";
              isReportOpen ? setIsReportOpen(!isReportOpen) : "";
              isUserOpen ? setIsUserOpen(!isUserOpen) : "";
              isProfOpen ? setIsProfOpen(!isProfOpen) : "";
              isContactUsOpen ? setIsContactUsOpen(!isContactUsOpen) : "";
              isDelUserOpen ? setIsDelUserOpen(!isDelUserOpen) : "";
              isSBHBalanceOpen ? setIsSBHBalanceOpen(!isSBHBalanceOpen) : "";
              isAdsOpen ? setIsAdsOpen(!isAdsOpen) : "";
            }}
            className={`w-full h-[6vh] rounded-md cursor-pointer active:scale-90 flex items-center justify-center ${isProfAcceptOpen == true ? activeCss : "md:hover:bg-[#48ffa363] hover:shadow-xl"
              } shadow-sm shadow-[#53c28b] ease-in-out duration-300`}
          >
            <span className="md:hidden flex items-center justify-center font-extrabold"><FaUserTie size={30} />X</span>
            <span className="hidden md:flex gap-1">Pending Professionals</span>
          </div>
          <div
            onClick={() => {
              !isContactUsOpen ? setIsContactUsOpen(!isContactUsOpen) : "";
              isReportOpen ? setIsReportOpen(!isReportOpen) : "";
              isUserOpen ? setIsUserOpen(!isUserOpen) : "";
              isProfOpen ? setIsProfOpen(!isProfOpen) : "";
              isProfAcceptOpen ? setIsProfAcceptOpen(!isProfAcceptOpen) : "";
              isDelUserOpen ? setIsDelUserOpen(!isDelUserOpen) : "";
              isSBHBalanceOpen ? setIsSBHBalanceOpen(!isSBHBalanceOpen) : "";
              isAdsOpen ? setIsAdsOpen(!isAdsOpen) : "";
            }}
            className={`w-full h-[6vh] rounded-md cursor-pointer active:scale-90 flex items-center justify-center ${isContactUsOpen == true ? activeCss : "md:hover:bg-[#48ffa363] hover:shadow-xl"
              } shadow-sm shadow-[#53c28b] ease-in-out duration-300`}
          >
            <span className="md:hidden"><PiUserListFill size={30} /></span>
            <span className="hidden md:flex">Contact Us</span>
          </div>
          <div
            onClick={() => {
              !isDelUserOpen ? setIsDelUserOpen(!isDelUserOpen) : "";
              isReportOpen ? setIsReportOpen(!isReportOpen) : "";
              isUserOpen ? setIsUserOpen(!isUserOpen) : "";
              isProfOpen ? setIsProfOpen(!isProfOpen) : "";
              isProfAcceptOpen ? setIsProfAcceptOpen(!isProfAcceptOpen) : "";
              isContactUsOpen ? setIsContactUsOpen(!isContactUsOpen) : "";
              isSBHBalanceOpen ? setIsSBHBalanceOpen(!isSBHBalanceOpen) : "";
              isAdsOpen ? setIsAdsOpen(!isAdsOpen) : "";
            }}
            className={`w-full h-[6vh] rounded-md cursor-pointer active:scale-90 flex items-center justify-center ${isDelUserOpen == true ? activeCss : "md:hover:bg-[#48ffa363] hover:shadow-xl"
              } shadow-sm shadow-[#53c28b] ease-in-out duration-300`}
          >
            <span className="md:hidden"><FaUsersSlash size={30} /></span>
            <span className="hidden md:flex">Deleted Users</span>
          </div>
          <div
            onClick={() => {
              !isAdsOpen ? setIsAdsOpen(!isAdsOpen) : "";
              isDelUserOpen ? setIsDelUserOpen(!isDelUserOpen) : "";
              isReportOpen ? setIsReportOpen(!isReportOpen) : "";
              isUserOpen ? setIsUserOpen(!isUserOpen) : "";
              isProfOpen ? setIsProfOpen(!isProfOpen) : "";
              isProfAcceptOpen ? setIsProfAcceptOpen(!isProfAcceptOpen) : "";
              isContactUsOpen ? setIsContactUsOpen(!isContactUsOpen) : "";
              isSBHBalanceOpen ? setIsSBHBalanceOpen(!isSBHBalanceOpen) : "";
            }}
            className={`w-full h-[6vh] rounded-md cursor-pointer active:scale-90 flex items-center justify-center ${isAdsOpen == true ? activeCss : "md:hover:bg-[#48ffa363] hover:shadow-xl"
              } shadow-sm shadow-[#53c28b] ease-in-out duration-300`}
          >
            <span className="md:hidden"><PiSlideshowDuotone size={30} /></span>
            <span className="hidden md:flex">Ads</span>
          </div>
        </div>

        {!dBCollection ? <Loading /> :
          <div className="adminNav w-full h-[78vh] animate-fade-in-down overflow-hidden">
            {isReportOpen && (
              <div className="animate-fade-in-down">
                <DashboardData usersCollection={usersCollection} profsCollection={profsCollection} />
              </div>
            )}
            {isSBHBalanceOpen && (
              <div className="animate-fade-in-down">
                <SBHBalanceData sbhBalanceCollection={sbhBalanceCollection} setRefDb={setRefDb} />
              </div>
            )}
            {isUserOpen && (
              <div className="animate-fade-in-down">
                <UserData usersCollection={usersCollection} setRefDb={setRefDb} />
              </div>
            )}
            {isProfOpen && (
              <div className="animate-fade-in-down">
                <ProfData profsCollection={profsCollection} setRefDb={setRefDb} />
              </div>
            )}
            {isProfAcceptOpen && (
              <div className="animate-fade-in-down">
                <AcceptProf profsCollection={profsCollection} setRefDb={setRefDb} />
              </div>
            )}
            {isContactUsOpen && (
              <div className="animate-fade-in-down">
                <ContactUsData contactUsCollection={contactUsCollection} />
              </div>
            )}
            {isDelUserOpen && (
              <div className="animate-fade-in-down">
                <DeletedUserData
                  deletedUsersCollection={deletedUsersCollection} setRefDb={setRefDb}
                />
              </div>
            )}
            {isAdsOpen && (
              <div className="animate-fade-in-down">
                <AddRemoveAds
                  adBannerCollection={adBannerCollection} setRefDb={setRefDb}
                />
              </div>
            )}
          </div>
        }
      </section>
    </>
  );
};
export default Admin;

export const DashboardData = (props) => {
  const { usersCollection, profsCollection } = props;
  const [totalUsersCount, setTotalUsersCount] = useState([]);
  const [totalProfsCount, setTotalProfsCount] = useState([]);
  const [usersCount, setUsersCount] = useState(0);
  const [superAdminCount, setSuperAdminCount] = useState(0);
  const [adminCount, setAdminCount] = useState(0);
  const [profsCount, setProfsCount] = useState(0);
  const [services, setServices] = useState({
    writing: "",
    plumber: "",
    painters: "",
    gardener: "",
    electrician: "",
    health_coach: "",
    dj_musician: "",
    house_helper: "",
    nutritionist: "",
    event_planner: "",
    house_cleaner: "",
    graphic_design: "",
    yoga_instructor: "",
    wedding_planner: "",
    web_development: "",
    personal_trainer: "",
    party_entertainer: "",
    interior_decorator: "",
    mental_health_counselor: "",
    photographer_videographer: ""
  });

  useEffect(() => {
    if (usersCollection && profsCollection) {
      setTotalUsersCount(usersCollection);
      setTotalProfsCount(profsCollection);
    }
  }, [usersCollection]);

  useEffect(() => {
    if (totalUsersCount.length > 0) {
      const superAdmins = totalUsersCount.filter((tc) => tc.role === "superAdmin").length;
      const admins = totalUsersCount.filter((tc) => tc.role === "admin").length;
      const users = totalUsersCount.filter((tc) => tc.role === "user").length;
      const profs = totalUsersCount.filter((tc) => tc.role === "professional").length;
      setSuperAdminCount(superAdmins);
      setAdminCount(admins);
      setUsersCount(users);
      setProfsCount(profs);
    }
    if (totalProfsCount.length > 0) {
      // console.log(totalProfsCount);
      const writing = totalProfsCount.filter((tc) => tc.service === "writing").length;
      const plumber = totalProfsCount.filter((tc) => tc.service === "plumber").length;
      const painters = totalProfsCount.filter((tc) => tc.service === "painters").length;
      const gardener = totalProfsCount.filter((tc) => tc.service === "gardener").length;
      const electrician = totalProfsCount.filter((tc) => tc.service === "electrician").length;
      const health_coach = totalProfsCount.filter((tc) => tc.service === "health_coach").length;
      const dj_musician = totalProfsCount.filter((tc) => tc.service === "dj_musician").length;
      const house_helper = totalProfsCount.filter((tc) => tc.service === "house_helper").length;
      const nutritionist = totalProfsCount.filter((tc) => tc.service === "nutritionist").length;
      const event_planner = totalProfsCount.filter((tc) => tc.service === "event_planner").length;
      const house_cleaner = totalProfsCount.filter((tc) => tc.service === "house_cleaner").length;
      const graphic_design = totalProfsCount.filter((tc) => tc.service === "graphic_design").length;
      const yoga_instructor = totalProfsCount.filter((tc) => tc.service === "yoga_instructor").length;
      const wedding_planner = totalProfsCount.filter((tc) => tc.service === "wedding_planner").length;
      const web_development = totalProfsCount.filter((tc) => tc.service === "web_development").length;
      const personal_trainer = totalProfsCount.filter((tc) => tc.service === "personal_trainer").length;
      const party_entertainer = totalProfsCount.filter((tc) => tc.service === "party_entertainer").length;
      const interior_decorator = totalProfsCount.filter((tc) => tc.service === "interior_decorator").length;
      const mental_health_counselor = totalProfsCount.filter((tc) => tc.service === "mental_health_counselor").length;
      const photographer_videographer = totalProfsCount.filter((tc) => tc.service === "photographer_videographer").length;
      setServices({
        // House & Home
        gardener: gardener,
        plumber: plumber,
        interior_decorator: interior_decorator,
        painters: painters,
        electrician: electrician,
        house_cleaner: house_cleaner,
        house_helper: house_helper,
        // Health & Wellness
        health_coach: health_coach,
        mental_health_counselor: mental_health_counselor,
        personal_trainer: personal_trainer,
        nutritionist: nutritionist,
        yoga_instructor: yoga_instructor,
        // Events & Entertainers
        event_planner: event_planner,
        dj_musician: dj_musician,
        photographer_videographer: photographer_videographer,
        party_entertainer: party_entertainer,
        wedding_planner: wedding_planner,
        // others
        writing: writing,
        graphic_design: graphic_design,
        web_development: web_development,
      })
    }
  }, [totalProfsCount]);

  // ... rest of your component


  if (!totalUsersCount) {
    return <section className="w-full h-full animate-fade-in-down text-center font-extrabold text-2xl text-[#53c28b]"><span className='text-red-600'>No</span> Deleted Users records found</section>
  }
  return (
    <>
      <section className="w-full h-[78vh] flex flex-col gap-2 p-2 scrollDiv overflow-y-scroll scroll-snap-type-x-mandatory overflow-hidden">
        <div className="w-full h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
          <span className="md:text-2xl">Total User's count : {totalUsersCount?.length ?? "NaN"}</span>
        </div>
        <div className="w-full h-full scrollDiv overflow-y-scroll scroll-snap-type-x-mandatory overflow-hidden">
          <div className="flex flex-col gap-2">
            <div className="w-full md:h-[20%] flex flex-col md:flex-row gap-2 rounded-3xl overflow-hidden p-1">
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Super Admin's : {superAdminCount ?? "NaN"}</span>
              </div>
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Admin's : {adminCount ?? "NaN"}</span>
              </div>
            </div>
            <div className="w-full md:h-[20%] flex flex-col md:flex-row gap-2 rounded-3xl overflow-hidden p-1">
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">User's : {usersCount ?? "NaN"}</span>
              </div>
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Professional's : {profsCount ?? "NaN"}</span>
              </div>
            </div>
            <h3 className="text-[#53c28b] text-xl font-semibold">Professional's Services count</h3>
            {/* House & Home */}
            <h3 className="text-[#53c28b] text-xl font-semibold px-5">House & Home</h3>
            <div className="w-full md:h-[20%] flex flex-col md:flex-row gap-2 rounded-3xl overflow-hidden p-1">
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Gardener : {services.gardener ?? "NaN"}</span>
              </div>
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Plumber : {services.plumber ?? "NaN"}</span>
              </div>
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Interior Decorator : {services.interior_decorator ?? "NaN"}</span>
              </div>
            </div>
            <div className="w-full md:h-[20%] flex flex-col md:flex-row gap-2 rounded-3xl overflow-hidden p-1">
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Painters : {services.painters ?? "NaN"}</span>
              </div>
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Electrician : {services.electrician ?? "NaN"}</span>
              </div>
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">House Cleaner : {services.house_cleaner ?? "NaN"}</span>
              </div>
            </div>
            <div className="w-full md:h-[20%] flex flex-col md:flex-row gap-2 rounded-3xl overflow-hidden p-1">
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">House Helper : {services.house_helper ?? "NaN"}</span>
              </div>
            </div>
            {/* Health & Wellness */}
            <h3 className="text-[#53c28b] text-xl font-semibold px-5">Health & Wellness</h3>
            <div className="w-full md:h-[20%] flex flex-col md:flex-row gap-2 rounded-3xl overflow-hidden p-1">
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Health Coach : {services.health_coach ?? "NaN"}</span>
              </div>
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Yoga Instructor : {services.yoga_instructor ?? "NaN"}</span>
              </div>
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Personal Trainer : {services.personal_trainer ?? "NaN"}</span>
              </div>
            </div>
            <div className="w-full md:h-[20%] flex flex-col md:flex-row gap-2 rounded-3xl overflow-hidden p-1">
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Nutritionist : {services.nutritionist ?? "NaN"}</span>
              </div>
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Mental Health Counselor : {services.mental_health_counselor ?? "NaN"}</span>
              </div>
            </div>
            {/* Events & Entertainers */}
            <h3 className="text-[#53c28b] text-xl font-semibold px-5">Events & Entertainers</h3>
            <div className="w-full md:h-[20%] flex flex-col md:flex-row gap-2 rounded-3xl overflow-hidden p-1">
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Event Planner : {services.event_planner ?? "NaN"}</span>
              </div>
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">DJ / Musician : {services.dj_musician ?? "NaN"}</span>
              </div>
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Party Entertainer : {services.party_entertainer ?? "NaN"}</span>
              </div>
            </div>
            <div className="w-full md:h-[20%] flex flex-col md:flex-row gap-2 rounded-3xl overflow-hidden p-1">
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Wedding Planner : {services.wedding_planner ?? "NaN"}</span>
              </div>
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Photographer Videographer : {services.photographer_videographer ?? "NaN"}</span>
              </div>
            </div>
            {/* Others */}
            <h3 className="text-[#53c28b] text-xl font-semibold px-5">Others</h3>
            <div className="w-full md:h-[20%] flex flex-col md:flex-row gap-2 rounded-3xl overflow-hidden p-1">
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Web Development : {services.web_development ?? "NaN"}</span>
              </div>
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Graphic Design : {services.graphic_design ?? "NaN"}</span>
              </div>
              <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
                <span className="md:text-2xl">Writing : {services.writing ?? "NaN"}</span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
};
export const SBHBalanceData = (props) => {
  const { sbhBalanceCollection, setRefDb } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (sbhBalanceCollection) {
      // console.log(data && data.transactions[0]);
      setData(sbhBalanceCollection);
    }
  }, [sbhBalanceCollection]);

  useEffect(() => {
    // if (data == null)
    setRefDb();
  }, [data]);

  if (!data) {
    return <section className="w-full h-full animate-fade-in-down text-center font-extrabold text-2xl text-[#53c28b]"><span className='text-red-600'>No</span> Deleted Users records found</section>
  }
  return (
    <>
      <section className="w-full h-[78vh] flex flex-col gap-2 p-2 scrollDiv overflow-y-scroll scroll-snap-type-x-mandatory overflow-hidden">
        <div className="w-full md:h-[20%] flex flex-col md:flex-row gap-2 rounded-3xl overflow-hidden p-1">
          <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
            <span className="md:text-2xl">Balance Amount : ₹{data?.balanceAmount.toFixed(2) ?? "NaN"}</span>
          </div>
          <div className="w-full md:w-1/2 h-[4rem] rounded-3xl flex items-center justify-center gap-2 scale-95 hover:scale-100 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] hover:bg-[#53c28b] ease-in-out duration-300">
            <span className="md:text-2xl">Profit Margin : ₹{data?.sbhAmount.toFixed(2) ?? "NaN"}</span>
          </div>
        </div>
        <div className="w-full h-[80%] p-2">
          <h3 className="w-auto h-[10%] text-2xl text-[#53c28b] font-bold">Transactions : </h3>
          <div className="w-full h-[90%] borde shadow-sm shadow-[#53c28b] rounded-2xl scrollDiv overflow-x-auto overflow-y-hidde">
            <div className="w-[1000px] md:w-full h-10 flex items-center font-semibold justify-between gap-2 bg-[#53c28b] px-2 shadow-lg">
              <span>Date & Time</span>
              <span>PaymentId</span>
              <span>From</span>
              <span>To</span>
              <span>Amount</span>
            </div>
            <div className="w-[1000px] md:w-full h-[90%] flex flex-col-reverse justify-end text-md scrollDiv overflow-y-scroll overflow-hidden">
              {data && data.transactions.map((i) => (
                <div key={i?.paymentId} className="w-full h-10 flex items-center justify-betwee gap-2 px-2 text-slate-400">
                  <div className="w-[50%] flex justify-between">
                    <span className="w-[13rem] scrollDiv overflow-y-scroll">{i?.dateTime ?? "NaN"}</span>
                    <span className="w-[22rem] scrollDiv overflow-y-scroll">{i?.paymentId ?? "NaN"}</span>
                  </div>
                  <div className="w-[50%] flex justify-between">
                    <span>{i?.fromUpiId ?? "NaN"}</span>
                    <span>{i?.toUpiId ?? "NaN"}</span>
                    <span>₹{i?.amount.toFixed(2) ?? "NaN"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
};
export const UserData = (props) => {
  const { usersCollection, setRefDb } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    if (usersCollection) {
      setData(usersCollection);
    }
  }, [usersCollection]);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editData, setEditData] = useState();
  const activeCss = "bg-[#48ffa363] scale-100 border-[#53c28b]";

  const { data: session, status: sessionStatus } = useSession();

  const [userEdit, setUserEdit] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [error, setError] = useState("");
  const [updSuccess, setUpdSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [updDisableBtn, setUpdDisableBtn] = useState(false);
  const [delDisableBtn, setDelDisableBtn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserEdit({
      ...userEdit,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.set("oldEmail", editData?.email);
    data.set("email", userEdit.email);
    data.set("name", userEdit.name);
    data.set("role", userEdit.role);

    setUpdDisableBtn(true);
    if (userEdit.role.trim() != "") {
      if (session?.user?.role !== "superAdmin") {
        setUpdDisableBtn(false);
        setUpdSuccess(false);
        return setError("Only SuperAdmin are allowed to change roles!");
      }
    }
    if (userEdit.name.trim() != "" || userEdit.email.trim() != "") {
      if (editData?.role == "superAdmin" || editData?.role == "admin") {
        if (session?.user?.role !== "superAdmin") {
          setUpdDisableBtn(false);
          setUpdSuccess(false);
          return setError("Only SuperAdmin are allowed to change Admins data!");
        }
      }
    }
    try {
      const res = await fetch("/api/admin-user-edit", {
        method: "POST",
        body: data,
      });
      if (res.status === 400) {
        setError("Invalid user! try again later");
        setUpdDisableBtn(false);
        setUpdSuccess(false);
        setRefDb(true);
      } else if (res.status === 500) {
        setError("Img & resume file aren't supported!");
        setUpdDisableBtn(false);
        setRefDb(true);
      } else if (res.status === 200) {
        setError("");
        setUpdSuccess(true);
        setUserEdit({
          name: "",
          email: "",
          role: "",
        });
        setRefDb(true);
      }
      setUpdDisableBtn(false);
    } catch (error) {
      setUpdDisableBtn(false);
      setError(error);
      console.error("Error", error);
    }
  };

  const handleDelete = async () => {
    const email = editData?.email ?? "email99";

    setDelDisableBtn(true);
    if (editData?.role == "superAdmin" || editData?.role == "admin") {
      if (session?.user?.role !== "superAdmin") {
        setDeleteSuccess(false);
        setDelDisableBtn(false);
        return setError("Only SuperAdmin are allowed to Delete Admins!");
      }
    }
    try {
      const res = await fetch("/api/admin-user-delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
        }),
      });

      if (res.status === 400) {
        setError("User doesn't exists!");
        setDelDisableBtn(false);
        setRefDb(true);
      }
      if (res.status === 200) {
        setDelDisableBtn(true);
        setError("");
        setDeleteSuccess(true);
        setRefDb(true);
      }
    } catch (error) {
      console.log(error);
      setError("Check console for error");
    }
  };

  if (!usersCollection[0]) {
    return <section className="w-full h-full animate-fade-in-down text-center font-extrabold text-2xl text-[#53c28b]">
      <span className='text-red-600'>No</span> Users collection records found
    </section>
  }
  return (
    <>
      <section className="w-full h-[78vh] relative flex flex-col md:flex-row">
        <div className={`w-full ${!isEditOpen ? "h-full" : "h-[50%]"} md:h-auto scrollDiv overflow-y-scroll scroll-snap-type-x-mandatory overflow-hidden ease-in-out duration-200`}>
          <div className="w-full h-auto p-2 grid grid-flow-row grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-2 overflow-hidden ease-in-out duration-300">
            {data.map((i) => {
              //   console.log(i?.email ?? "email");
              return (
                <div
                  key={i._id}
                  onClick={() => {
                    if (i != editData) {
                      setError("")
                      setUpdSuccess(false)
                      setDeleteSuccess(false);
                      setUpdDisableBtn(false)
                      setDelDisableBtn(false)
                    }
                    setEditData(i);
                    setIsEditOpen(true)
                    if (i == editData) setIsEditOpen(!isEditOpen);
                  }}
                  className={` ${i == editData && isEditOpen ? activeCss : "md:hover:bg-[#48ffa363] hover:shadow-xl"
                    } w-auto h-auto border rounded-lg flex flex-row items-center justify-center gap-1 p-1 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] scale-95 hover:scale-100 hover:border-[#53c28b] active:scale-95 overflow-hidden ease-in-out duration-300`}
                >
                  <div className="w-[20%] borde rounded-full text-center overflow-hidden">
                    {/* pfp */}
                    <Image
                      src={i?.profileImgPath ?? "/assets/bg6.png"}
                      alt={"userProfile"}
                      priority={true}
                      width={800}
                      height={800}
                      className="w-full h-full shadow-md z-10 scale-75"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-[1px] text-base">
                    <div className="font-bold">{i?.name ?? "name"}</div>
                    <div className="text-sm">{i?.email ?? "email"}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`${!isEditOpen ? "h-0 md:-mr-[100%]" : "md:mr-0 h-[50%]"
            } w-full md:w-[40%] md:h-[78vh] p-2 scrollDiv overflow-y-scroll scroll-snap-type-x-mandatory overflow-hidden flex flex-col gap-2 items-center justify-center border rounded-xl bbg ease-in-out duration-200`}
        >
          <span className="font-extrabold text-xl text-[#53c28b]">Edit User</span>
          <>
            <form
              onSubmit={handleSubmit}
              className="w-full h-auto flex flex-col gap-1"
            >
              <input
                type="text"
                name="name"
                disabled
                value={userEdit.name}
                onChange={handleChange}
                placeholder={`Name - ${editData?.name ?? "NaN"}`}
                className="allFormInput h-[52px]"
              />
              <input
                type="email"
                name="email"
                disabled
                value={userEdit.email}
                onChange={handleChange}
                placeholder={`Email - ${editData?.email ?? "NaN"}`}
                className="allFormInput h-[52px]"
              />
              <input
                type="text"
                name="role"
                // disabled
                value={userEdit.role}
                onChange={handleChange}
                placeholder={`Role - ${editData?.role ?? "NaN"}`}
                className="allFormInput h-[52px]"
              />
              <span
                className={`${error ? "flex text-red-500 animate-slideDown" : "hidden"
                  }`}
              >
                {error}
              </span>
              <span
                className={`${updSuccess ? "flex text-[#53c28b] animate-slideDown" : "hidden"
                  }`}
              >
                Updated Successfully!
              </span>
              <button
                disabled={(delDisableBtn || updDisableBtn)}
                type="submit"
                className={`allBtn w-[rem] h-[3rem] text-xl rounded-3xl ${updDisableBtn
                  ? " opacity-70 active:scale-95 hover:scale-95 active:text-xl"
                  : ""
                  }`}
              >
                {updDisableBtn ? (
                  delDisableBtn ? "User Deleted" :
                    <span className="animate-pulse">Updating...</span>
                ) : (
                  "Update"
                )}
              </button>
              <span
                className={`${deleteSuccess ? "flex text-[#53c28b] animate-slideDown" : "hidden"
                  }`}
              >
                User Deleted Successfully!
              </span>
            </form>
            <button
              type="button"
              disabled={delDisableBtn}
              onClick={handleDelete}
              className={`allBtn w-full h-[3rem] text-xl rounded-3xl mb-1 ${delDisableBtn
                ? " opacity-70 active:scale-95 hover:scale-95 active:text-xl"
                : ""
                }`}
            >
              {delDisableBtn ? (deleteSuccess == true ? <span className="font-extrabold">User Deleted</span> :
                <span className="animate-pulse">Deleting...</span>
              ) : (
                "Delete User"
              )}

            </button>
          </>
        </div>
      </section>
    </>
  );
};
export const ProfData = (props) => {
  const { profsCollection, setRefDb } = props;
  const [service, setService] = useState("all")
  const [hired, setHired] = useState("all")
  const [data, setData] = useState([]);


  useEffect(() => {

    if (profsCollection) {
      let filteredData = profsCollection.filter(profService => profService.isVerified !== "no");

      if (service !== "all") {
        filteredData = filteredData.filter(profService => profService.service === service);
      }
      if (hired === "notHired") {
        filteredData = filteredData.filter(profService => profService.hired !== "hired");
        console.log(filteredData);
      } else if (hired === "hired") {
        filteredData = filteredData.filter(profService => profService.hired === "hired");
      }

      setData(filteredData);
    }
  }, [profsCollection, service, hired]);


  const handleProfUnverify = async (profAction, selectedProfEmail) => {
    try {
      const res = await fetch("/api/admin-prof-accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profAction,
          selectedProfEmail,
        })
      })
      if (res.status === 400) {
        // setError("Professional doesn't exists!");
        setRefDb(true);
      }
      if (res.status === 200) {
        console.log("unverify - success");
        setRefDb(true);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  if (!profsCollection[0]) {
    return <section className="w-full h-full animate-fade-in-down text-center font-extrabold text-2xl text-[#53c28b]">
      <span className='text-red-600'>No</span> Professional records found...
    </section>
  }

  return (
    <>
      <div className="w-full h-[78vh] relative">
        <div className="absolute w-10 h-10 flex items-center justify-center borde rounded-full shadow-md shadow-[#53c28b] top-2 right-5">
          {data.length}
        </div>
        <form className="w-full h-auto p-2 animate-fade-in-down flex flex-col sm:flex-row gap-3 md:items-center md:justify-center ease-in-out duration-300">
          <select
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            placeholder="Freelancer Category"
            required
            className="w-[80%] md:w-[18rem] lg:w-[22rem] h-[3rem] p-2 placeholder:text-[#fff]/[0.9] text-[#fff]/[0.9] outline-none bg-transparent rounded-md border-[2px] border-solid border-[#e6e7ec]/50 shadow-sm hover:border-[#53c28b] focus:border-b-[#53c28b] hover:placeholder:text-[#53c28b] ease-in-out duration-500"
          >
            <option className="ddl" value="all">All</option>
            <option className="ddl" value="writing">Writer</option>
            <option className="ddl" value="plumber">Plumber</option>
            <option className="ddl" value="painters">Painters</option>
            <option className="ddl" value="gardener">Gardener</option>
            <option className="ddl" value="electrician">Electrician</option>
            <option className="ddl" value="health_coach">Health Coach</option>
            <option className="ddl" value="dj_musician">DJ / Musician</option>
            <option className="ddl" value="house_helper">House Helper</option>
            <option className="ddl" value="nutritionist">Nutritionist</option>
            <option className="ddl" value="event_planner">Event Planner</option>
            <option className="ddl" value="house_cleaner">House Cleaner</option>
            <option className="ddl" value="graphic_design">Graphic Design</option>
            <option className="ddl" value="yoga_instructor">Yoga Instructor</option>
            <option className="ddl" value="wedding_planner">Wedding Planner</option>
            <option className="ddl" value="web_development">Web Development</option>
            <option className="ddl" value="personal_trainer">Personal Trainer</option>
            <option className="ddl" value="party_entertainer">Party Entertainer</option>
            <option className="ddl" value="interior_decorator">Interior Decorator</option>
            <option className="ddl" value="mental_health_counselor">Mental Health Counselor</option>
            <option className="ddl" value="photographer_videographer">Photographer / Videographer</option>
          </select>
          <select
            name="service"
            value={hired}
            onChange={(e) => setHired(e.target.value)}
            placeholder="Freelancer Category"
            required
            className="w-full md:w-[18rem] lg:w-[22rem] h-[3rem] p-2 placeholder:text-[#fff]/[0.9] text-[#fff]/[0.9] outline-none bg-transparent rounded-md border-[2px] border-solid border-[#e6e7ec]/50 shadow-sm hover:border-[#53c28b] focus:border-b-[#53c28b] hover:placeholder:text-[#53c28b] ease-in-out duration-500"
          >
            <option className="ddl" value="all">All</option>
            <option className="ddl" value="hired">Hired</option>
            <option className="ddl" value="notHired">Not Hired</option>
          </select>
        </form>
        <section className="w-full h-[82%] md:h-[87%] scrollDiv overflow-y-scroll scroll-snap-type-x-mandatory overflow-hidden">
          <div className="w-full h-auto p-2 grid grid-flow-row grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-2 overflow-hidden ease-in-out duration-300">
            {data.map((i) => {
              // 
              //   console.log(i?.email ?? "email");
              return (
                <div
                  key={i._id}
                  className="relative w-auto h-auto border rounded-lg flex flex-col gap-1 p-1 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] scale-95 hover:scale-100 ease-in-out duration-300"
                >
                  {/* <div className="absolute w-auto h-auto right-0 active:scale-90 ease-in-out duration-300"> */}
                  <LuShieldClose size={30} onClick={() => {
                    handleProfUnverify("unverify", i?.email)
                  }}
                    className="absolute w-auto h-auto right-0 active:scale-90 ease-in-out duration-200"
                  />
                  {/* </div> */}
                  <div className="w-full h-auto flex flex-row gap-1">

                    <div className="w-[6rem] h-[5rem] borde rounded-full text-center overflow-hidden">
                      {/* pfp */}
                      <Image
                        src={i?.profileImgPath ?? "/assets/loading3d360Rotate.gif"}
                        alt={"userProfile"}
                        priority={true}
                        width={800}
                        height={800}
                        className="w-full h-full shadow-md z-10"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-[1px] items-center justify-center p-1">
                      <div className="text-lg font-semibold">{i?.name ?? "name"}</div>
                      <div className="text-sm">{i?.email ?? "email"}</div>
                      <div className="text-sm">{i?.service ?? "service"}</div>
                    </div>
                  </div>
                  <Link
                    href={`/profile/${i?.email ?? ""}`}
                    className="viewProfile allBtn w-full h-[2rem] text-md rounded-lg"
                  >
                    View Profile
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
export const AcceptProf = (props) => {
  const { profsCollection, setRefDb } = props;
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState();
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sBtnD, setSBtnD] = useState(false);
  const activeCss = "bg-[#48ffa363] scale-100 border-[#53c28b]";

  useEffect(() => {
    if (profsCollection) {
      const filteredData = profsCollection.filter(profVerify => profVerify.isVerified === "no");
      setData(filteredData);
    }
  }, [profsCollection]);

  const acceptProf = async (profAction, selectedProfEmail) => {
    try {
      const res = await fetch("/api/admin-prof-accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profAction,
          selectedProfEmail,
        })
      })
      // console.log(profAction + "");
      if (res.status === 401) {
        setError("User doesn't exists!");
        setRefDb(true);
      }
      if (res.status === 400) {
        setError("Professional doesn't exists!");
        setRefDb(true);
      }
      if (res.status === 200) {
        if (profAction == "accept") {
          setError("");
          setSuccess("Accepted Professional successfully!");
          setSBtnD(true);
        }
        if (profAction == "reject") {
          setError("Rejected Professional successfully!");
          setSBtnD(true);
        }
        setRefDb(true);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }
  // console.log(data[0]);
  if (!data[0]) {
    return <section className="w-full h-full animate-fade-in-down text-center font-extrabold text-2xl text-[#53c28b]">
      <span className='text-red-600'>No</span> Pending Professionals collection records found...
    </section>
  }
  return (
    <>
      <section className="w-full h-[78vh] relative flex flex-col md:flex-row">
        <div className={`w-full ${!isViewOpen ? "h-full" : "h-[50%]"} md:h-auto scrollDiv overflow-y-scroll scroll-snap-type-x-mandatory overflow-hidden ease-in-out duration-200`}>
          <div className="w-full h-auto p-2 grid grid-flow-row grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-2 overflow-hidden ease-in-out duration-300">
            {data.map((i) => {
              //   console.log(i?.email ?? "email");
              return (
                <div
                  key={i._id}
                  onClick={() => {
                    if (i != editData) {
                      // console.log(i);
                      setSBtnD(false);
                      setError("")
                      setSuccess("")
                    }
                    setEditData(i);
                    setIsViewOpen(true)
                    if (i == editData) setIsViewOpen(!isViewOpen);
                  }}
                  className={` ${i == editData && isViewOpen ? activeCss : "md:hover:bg-[#48ffa363] hover:shadow-xl"
                    } w-auto h-auto border rounded-lg flex flex-row items-center justify-center gap-1 p-1 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] scale-95 hover:scale-100 hover:border-[#53c28b] active:scale-95 overflow-hidden ease-in-out duration-300`}
                >
                  <div className="w-[30%] h-[5rem] borde rounded-full text-center overflow-hidden">
                    {/* pfp */}
                    <Image
                      src={i?.profileImgPath ?? "/assets/loading3d360Rotate.gif"}
                      alt={"userProfile"}
                      priority={true}
                      width={800}
                      height={800}
                      className="w-full h-full shadow-md z-10 scale-75"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-[1px] text-base">
                    <div className="font-bold">{i?.name ?? "name"}</div>
                    <div className="text-sm">{i?.email ?? "email"}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`${!isViewOpen ? "h-0 md:-mr-[100%]" : "md:mr-0 h-[70%]"
            } w-full md:w-[50%] md:h-[78vh] p-2 scrollDiv overflow-y-scroll scroll-snap-type-x-mandatory overflow-hidden flex flex-col gap-2 border rounded-xl bbg ease-in-out duration-200`}
        >
          <span className="font-extrabold text-xl text-[#53c28b] text-center">Details</span>
          <div className="text-sm flex gap-1"><span className="text-[#53c28b]">Name :</span>{editData?.name ?? "NaN"}</div>
          <div className="text-sm flex gap-1"><span className="text-[#53c28b]">Email :</span>{editData?.email ?? "NaN"}</div>
          <div className="text-sm flex gap-1"><span className="text-[#53c28b]">Verified :</span>{editData?.isVerified ?? "NaN"}</div>
          <div className="text-sm flex gap-1"><span className="text-[#53c28b]">Service :</span>{editData?.service ?? "NaN"}</div>
          <div className="text-sm flex gap-1"><span className="text-[#53c28b]">DOB :</span>{editData?.dob ?? "NaN"}</div>
          <div className="text-sm flex gap-1"><span className="text-[#53c28b]">Gender :</span>{editData?.gender ?? "NaN"}</div>
          <div className="text-sm flex gap-1"><span className="text-[#53c28b]">Work History :</span> {editData?.workHistory ?? "NaN"}</div>
          <div className="text-sm flex gap-1"><span className="text-[#53c28b]">Phone :</span>{editData?.phone ?? "NaN"}</div>
          <div className="text-sm flex gap-1"><span className="text-[#53c28b]">Address :</span>{editData?.address ?? "NaN"}</div>
          <div className="text-sm flex gap-1"><span className="text-[#53c28b]">Zip code :</span>{editData?.zipCode ?? "NaN"}</div>
          <div className="text-sm flex gap-1"><span className="text-[#53c28b]">Yr. of Experience :</span>{editData?.skillLevel ?? "NaN"}</div>
          <div className="text-sm flex gap-1"><span className="text-[#53c28b]">Resume :</span><Link href={editData?.resumePath ?? "NaN"} target="_blank" className="active:scale-110" >view</Link>
          </div>
          <div className="text-sm flex gap-1"><span className="text-[#53c28b]">Bio :</span>{editData?.bio ?? "NaN"}</div>
          <span className="text-[#53c28b]">Soical Links :</span>
          <div className="text-sm flex gap-1 -mt-3"><span className=" text-[#53c28b]">1.</span><Link href={editData?.sLOne ?? "NaN"} target="_blank" className="active:scale-110" >view - <u>{editData?.sLOne ?? "NaN"}</u></Link>
          </div>
          <div className="text-sm flex gap-1"><span className="text-[#53c28b]">2.</span><Link href={editData?.sLTwo ?? "NaN"} target="_blank" className="active:scale-110" >view - <u>{editData?.sLTwo ?? "NaN"}</u></Link>
          </div>
          <div className="text-sm flex gap-1"><span className="text-[#53c28b]">Registration time :</span>{editData?.createdAt ?? "NaN"}</div>
          {error &&
            <span className="text-[red] animate-fade-in-down">{error}</span>}
          {success &&
            <span className="text-[#53c28b] animate-fade-in-down underline underline-offset-4">{success}</span>}
          <div className="w-full h-[15vh] flex flex-col md:flex-row">
            <button disabled={sBtnD} onClick={() => {
              // setProfAction("accept")
              acceptProf("accept", editData?.email);
              // setIsViewOpen(!isViewOpen);
            }} className={`${sBtnD ? "bg-[#218452] cursor-not-allowed scale-95" : "allBtn"} w-full h-[3rem] rounded-2xl`}>{!sBtnD ? "Accept" : "Accepted"}</button>
            <button disabled={sBtnD} onClick={() => {
              acceptProf("reject", editData?.email)
            }} className={`${sBtnD ? "bg-[#842121] cursor-not-allowed" : "cursor-pointer bg-[red] hover:scale-100 active:text-lg active:scale-90"} w-full h-[3rem] rounded-2xl font-extrabold md:hover:bg-[red]/50 scale-95 shadow-md flex justify-center items-center hover:shadow-lg focus:shadow-lg ease-in-out duration-200`}>Reject</button>
          </div>
        </div >
      </section >
    </>
  )
}
export const ContactUsData = (props) => {
  const { contactUsCollection } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    if (contactUsCollection) {
      setData(contactUsCollection);
    }
  }, [contactUsCollection]);
  // console.log(contactUsCollection);
  if (!contactUsCollection[0]) {
    return <section className="w-full h-full animate-fade-in-down text-center font-extrabold text-2xl text-[#53c28b]">
      <span className='text-red-600'>No</span> Contact-Us message records found
    </section>
  }
  return (
    <>
      <section className="w-full h-[78vh] scrollDiv overflow-y-scroll scroll-snap-type-x-mandatory overflow-hidden">
        <div className="w-full h-auto p-2 grid grid-flow-row grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-2 overflow-hidden ease-in-out duration-300">
          {data.map((i) => {
            //   console.log(i?.email ?? "email");
            return (
              <div
                key={i._id}
                className="w-auto h-auto border rounded-lg flex flex-row items-center justify-center gap-1 p-1 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] scale-95 hover:scale-100 active:scale-95 ease-in-out duration-300"
              >
                <div className="w-auto borde rounded-full text-center overflow-hidden">
                  {/* pfp */}
                  <Image
                    src={i?.profileImgPath ?? "/assets/loading3d360Rotate.gif"}
                    alt={"userProfile"}
                    priority={true}
                    width={800}
                    height={800}
                    className="w-full h-full shadow-md z-10"
                  />
                </div>
                <div className="w-full flex flex-col gap-[1px] text-cente p-1">
                  <div className="font-bold">
                    {`${i?.firstname} ${i?.lastname}` ?? "name"}
                  </div>
                  <div className="text-sm">{i?.email ?? "email"}</div>
                  <div className="text-sm">{i?.message ?? "message"}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export const DeletedUserData = (props) => {
  const { deletedUsersCollection, setRefDb } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    if (deletedUsersCollection) {
      setData(deletedUsersCollection);
    }
  }, [deletedUsersCollection]);

  const [editData, setEditData] = useState();
  const [dataAction, setDataAction] = useState("");
  const [error, setError] = useState("");
  const [restoreDisableBtn, setRestoreDisableBtn] = useState(false);
  const [delePernDisableBtn, setDelePernDisableBtn] = useState(false);
  const [restoreSuccess, setRestoreSuccess] = useState(false);
  const [delPernSuccess, setDelPernSuccess] = useState(false);

  const handleRestoreORDeletePermanentlyUser = async (e) => {
    const email = editData?.email ?? "email";
    // console.log(email);
    e.preventDefault();
    if (dataAction == "restore") {
      setRestoreDisableBtn(true);
    }
    if (dataAction == "deletePermanently") {
      setDelePernDisableBtn(true);
    }
    try {
      const res = await fetch("/api/admin-user-restore-deletePermanently", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email, dataAction
        }),
      });

      if (res.status === 400) {
        setError("User doesn't exists!");
        setRestoreDisableBtn(false);
        setDelePernDisableBtn(false);
        setRefDb(true);
      }
      if (res.status === 200) {
        setError("");
        if (dataAction == "restore") {
          setRestoreSuccess(true);
        }
        if (dataAction == "deletePermanently") {
          setDelPernSuccess(true);
        }
        setDelePernDisableBtn(false);
        setRestoreDisableBtn(false);
        setRefDb(true);
      }
    } catch (error) {
      console.log(error);
      setError("Check console for error");
    }
  };

  if (!deletedUsersCollection[0]) {
    return <section className="w-full h-full animate-fade-in-down text-center font-extrabold text-2xl text-[#53c28b]"><span className='text-red-600'>No</span> Deleted Users records found</section>
  }
  return (
    <>
      <section className="w-full h-[78vh] scrollDiv overflow-y-scroll scroll-snap-type-x-mandatory overflow-hidden">
        <div className="w-full h-auto p-2 grid grid-flow-row grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-2 overflow-hidden ease-in-out duration-300">
          {data.map((i) => {
            //   console.log(i?.email ?? "email");
            return (
              <div
                key={i._id}
                className="w-auto h-auto borde rounded-lg flex flex-col items-center justify-center gap-1 p-1 cursor-pointer shadow-md hover:shadow-xl shadow-[#53c28b] scale-95 hover:scale-100 ease-in-out duration-300"
              >
                <div className="w-auto h-auto flex flex-row items-center justify-center">
                  <div className="w-[30%] borde rounded-full text-center overflow-hidden">
                    {/* pfp */}
                    <Image
                      src={i?.profileImgPath ?? "/assets/loading3d360Rotate.gif"}
                      alt={"userProfile"}
                      priority={true}
                      width={800}
                      height={800}
                      className="w-full h-full shadow-md z-10"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-[1px] text-cente p-1">
                    <span className="font-bold">
                      <span className="text-[#53c28b]">Name : </span>
                      {i?.name ?? "name"}
                    </span>
                    <span className="text-sm">
                      <span className="text-[#53c28b]">Email : </span>
                      {i?.email ?? "email"}
                    </span>
                    <span className="text-sm">
                      <span className="text-[#53c28b]">Role : </span>
                      {i?.role ?? "role"}
                    </span>
                    <span className="text-sm">
                      <span className="text-[#53c28b]">SignInWith : </span>
                      {i?.signInWith ?? "signInWith"}
                    </span>
                    <span className="text-sm">
                      <span className="text-[#53c28b]">Deleted Date&Time : </span>
                      {i?.createdAt ?? "createdAt"}
                    </span>
                  </div>
                </div>

                <form className="w-full h-auto"
                  onSubmit={handleRestoreORDeletePermanentlyUser}
                >
                  <button
                    type="submit"
                    disabled={restoreDisableBtn}
                    onClick={() => {
                      setDataAction("restore");
                      setEditData(i);
                    }}
                    className={`allBtn w-full h-[2rem] text-xl rounded-3xl mb-1 overflow-hidden ${restoreDisableBtn
                      ? "opacity-70 active:scale-95 hover:scale-95 active:text-xl"
                      : ""
                      }`}
                  >
                    {i == editData ? (
                      error && i == editData ?
                        <span className="flex text-red-500 animate-slideDown">
                          {error}
                        </span>
                        : (
                          restoreSuccess && i == editData ?
                            <span className="text-gre">
                              User Restored Successfully
                            </span>
                            : (
                              restoreDisableBtn && i == editData ?
                                <span className="flex animate-pulse">
                                  Restoring...
                                </span>
                                : "Restore"
                            )
                        )
                    ) : "Restore"}
                  </button>
                  <button
                    type="submit"
                    disabled={delePernDisableBtn}
                    onClick={() => {
                      setDataAction("deletePermanently");
                      setEditData(i);
                    }}
                    className={`allBtn w-full h-[2rem] text-xl rounded-3xl mb-1 overflow-hidden ${delePernDisableBtn
                      ? "opacity-70 active:scale-95 hover:scale-95 active:text-xl"
                      : ""
                      }`}
                  >
                    {i == editData ? (
                      error && i == editData ?
                        <span className="flex text-red-500 animate-slideDown">
                          {error}
                        </span>
                        : (
                          delPernSuccess && i == editData ?
                            <span className="text-gre">
                              User Deleted Successfully
                            </span>
                            : (
                              delePernDisableBtn && i == editData ?
                                <span className="flex animate-pulse">
                                  Deleting...
                                </span>
                                : "Delete Permanently"
                            )
                        )
                    ) : "Delete Permanently"}
                  </button>
                </form>
              </div>
            );
          })}
        </div>
      </section>
    </>
  )
};
export const AddRemoveAds = (props) => {
  const { adBannerCollection, setRefDb } = props;
  const [adBanners, setAdBanners] = useState([]);

  useEffect(() => {
    if (adBannerCollection) {
      setAdBanners(adBannerCollection);
    }
  }, [adBannerCollection]);
  // console.log(adBanners.length);

  const [actionPanel, setActionPanel] = useState({
    add: true,
    remove: false
  });
  const activeCss = "bg-[#53c28b] text-[#000] font-bold";
  const [redirectUrl, setRedirectUrl] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");
  const [submitDisableBtn, setSubmitDisableBtn] = useState(false);
  const [error, setError] = useState("");
  const [rError, setRError] = useState("");
  const [success, setSuccess] = useState("");
  const urlPattern = /^https:\/\//i;

  const handleAdRedirectUrl = (e) => {
    const inputUrl = e.target.value;
    if (inputUrl.trim() !== "") {
      if (urlPattern.test(inputUrl)) {
        setError("");
        return setRedirectUrl(inputUrl);
      }
      setError("Url must start with 'https://'");
    } else {
      setError("");
    }
  }
  const handleAdBannerUrl = (e) => {
    const inputUrl = e.target.value;
    if (inputUrl.trim() !== "") {
      if (urlPattern.test(inputUrl)) {
        setError("");
        return setBannerUrl(inputUrl);
      }
      setError("Url must start with 'https://'");
    } else {
      setBannerUrl("");
      setError("");
    }
  }

  const adBannerSample = [
    {
      _id: 1,
      redirectTo: redirectUrl,
      bannerUrl: bannerUrl || "/assets/profilebanner2.gif",
      bannerAlt: "banner",
    },
    {
      _id: 2,
      redirectTo: redirectUrl,
      bannerUrl: bannerUrl || "/assets/profilebanner2.gif",
      bannerAlt: "banner",
    },
    {
      redirectTo: redirectUrl,
      bannerUrl: bannerUrl || "/assets/profilebanner2.gif",
      bannerAlt: "banner",
    },
    {
      _id: 4,
      redirectTo: redirectUrl,
      bannerUrl: bannerUrl || "/assets/profilebanner2.gif",
      bannerAlt: "banner",
    },
    {
      _id: 5,
      redirectTo: redirectUrl,
      bannerUrl: bannerUrl || "/assets/profilebanner2.gif",
      bannerAlt: "banner",
    },
    {
      id: 6,
      redirectTo: redirectUrl,
      bannerUrl: bannerUrl || "/assets/profilebanner2.gif",
      bannerAlt: "banner",
    },
  ];

  const handelBannerAdd = async (e) => {
    e.preventDefault();

    if (!bannerUrl && !redirectUrl) {
      return setError("Please provide url's");
    }
    try {
      const res = await fetch("/api/adBanner-fetch-add-remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          redirectTo: redirectUrl, bannerUrl, fnAction: "add"
        }),
      });
      if (res.status === 200) {
        setError("");
        setSuccess("Added Ad Successfully!");
        setRedirectUrl("");
        setBannerUrl("");
        setSubmitDisableBtn(false);
        setRefDb(true);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }
  const handelBannerRemove = async (bannerId) => {
    try {
      const res = await fetch("/api/adBanner-fetch-add-remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fnAction: "remove", bannerId
        }),
      });
      if (res.status === 201) {
        setRError("Banner ID not provided");
        // setRefDb(true);
      }
      if (res.status === 200) {
        setRError("");
        setRefDb(true);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }
  return (
    <>
      <section className="w-full h-[78vh] px-5 animate-fade-in-down scrollDiv overflow-y-scroll overflow-hidden">
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 z-10 bbg">
            <div onClick={() => setActionPanel({ add: true, remove: false })} className={`w-1/2 h-[40px] borde rounded-3xl cursor-pointer md:text-xl font-semibold flex items-center justify-center shadow-md shadow-[#53c28b] scale-95 ${actionPanel.add == true ? activeCss : "hover:shadow-xl md:hover:bg-[#48ffa363] hover:scale-100 active:translate-y-1"} ease-in-out duration-300`}>Add</div>
            <div onClick={() => setActionPanel({ add: false, remove: true })} className={`w-1/2 h-[40px] borde rounded-3xl cursor-pointer md:text-xl font-semibold flex items-center justify-center shadow-md shadow-[#53c28b] scale-95 ${actionPanel.remove == true ? activeCss : "hover:shadow-xl md:hover:bg-[#48ffa363] hover:scale-100 active:translate-y-1"} ease-in-out duration-300`}>Remove</div>
          </div>
          {actionPanel.add == true &&
            <div className="w-full h-auto animate-slideDown z-0 overflow-hidden">
              <form onSubmit={handelBannerAdd} className="w-full h-auto flex flex-col gap-2">
                <div className="flex flex-col md:flex-row gap-2">
                  <input type="url" placeholder="Enter Ad Redirect link" value={redirectUrl} onChange={handleAdRedirectUrl} className={`allFormInput h-[52px]`} />
                  <input type="url" placeholder="Enter Ad Image link" value={bannerUrl} onChange={handleAdBannerUrl} className={`allFormInput h-[52px]`} />
                </div>
                <div className="flex flex-col md:flex-row gap-2 justify-between">
                  <button type="submit" className="allBtn w-[10vh] h-[30px] rounded-2xl z-20">
                    {submitDisableBtn ? <span className='animate-pulse'>Adding...</span> : "Add"}
                  </button>
                  {error && <span className="text-[red] animate-slideDown z-0">{error}</span>}
                  {success && <span className="text-[#53c28b] animate-slideDown z-0">{success}</span>}
                </div>
              </form>
              <div className="flex flex-col gap-2 text-xl text-[#53c28b]">
                Preview
                <div className="flex items-center justify-center">
                  <div className="w-[90%] scale-105 overflow-hidden">
                    <AdBannerCarousel
                      abdData={adBannerSample}
                      defH="h-[12rem]"
                      mdH="md:h-[14rem]"
                      lgH="lg:h-[15rem]"
                      slidesToScroll={1}
                      speed={2500}
                      autoplay={"true"}
                      autoplaySpeed={0.01}
                      slidesToShowDefault={3}
                      slidesToShow768={3}
                      slidesToShow1024={3}
                      slidesToShow640={1}
                    />
                  </div>
                </div>
              </div>
            </div>}
          {actionPanel.remove == true && <div className="w-full h-auto animate-slideDown z-0 overflow-hidden">
            <div className="grid grid-flow-row grid-cols-3 gap-2">
              {adBanners.map((i) => (
                <div className="relative">
                  <div className="w-full h-full z-0 rounded-lg scale-95 hover:scale-100 ease-in-out duration-300 overflow-hidden">
                    <div className="absolute right-0 top-0 w-10 h-8 flex items-center justify-center rounded-xl z-10">
                      <FcRemoveImage size={30} onClick={() => {
                        handelBannerRemove(i?._id ?? "");
                      }} className="cursor-pointer shadow-md hover:scale-105 active:translate-y-1 ease-in-out duration-300" />
                    </div>
                    {/* <span className="absolute w-full bottom-0 text-center bg-[#00000045] text-[red] font-bold animate-slideDown z-20">REm</span> */}
                    {error && <span className="absolute w-full bottom-0 text-center bg-[#00000045] text-[red] font-bold animate-slideDown z-20">{error}</span>}
                    <Image
                      src={i?.bannerUrl ?? "/assets/profilebanner2.gif"}
                      alt={i?.bannerAlt ?? "bannner"}
                      // fill="true"
                      priority={true}
                      width={800}
                      height={800}
                      className="w-full h-full shadow-md z-10 hover:scale-110 ease-in-out duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>}
          <div className="w-full h-auto flex flex-col gap-2 text-xl text-[#53c28b] overflow-hidden">
            <div className="flex justify-between">
              Live
              <span>Total banners : {adBanners.length}</span>
            </div>
            <div className="scale-105">
              <AdBannerCarousel
                bg="bg-[#53c28b]"
                abdData={adBanners}
                defH="h-[12rem]"
                mdH="md:h-[14rem]"
                lgH="lg:h-[16rem]"
                slidesToScroll={1}
                speed={2500}
                autoplay={"true"}
                autoplaySpeed={0.01}
                slidesToShowDefault={3}
                slidesToShow768={3}
                slidesToShow1024={3}
                slidesToShow640={1}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

