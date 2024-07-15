import React, { createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import MetaComponent from '@/components/common/MetaComponent.jsx';
import customFetch from '@/utils/customFetch';
import { redirect, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import SearchComponent from '../components/SearchComponents';
import HotelsView from '../components/HotelsView';
import Features from '../components/Features';
import Footer from '../components/Footer';
const MainPageContext = createContext();
const metadata = {
  title: 'Home | Loafy Cat',
  description: 'Home | Loafy Cat',
};

export const loader = async () => {
  try {
    let { data } = await customFetch.get(`/public/hotels`);
    const user = await customFetch('/account/current-user-fetch');
    data.user = user.data;
    console.log('data', data);
    return data;
  } catch (error) {
    toast.error(error.response.data.msg);
    redirect('/');
  }
};

export default function MainPage() {
  const data = useLoaderData();
  return (
    <>
      <MainPageContext.Provider value={data}>
        <MetaComponent meta={metadata} />
        <main>
          <Header />
          <SearchComponent />
          <HotelsView />
          <Features />
          <Footer />
        </main>
      </MainPageContext.Provider>
    </>
  );
}

export const useMainPageContext = () => useContext(MainPageContext);
