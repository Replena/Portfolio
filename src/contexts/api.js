import { useEffect, useState } from "react";
import axios from "axios";
import data from "../data/data.json";
import { toast } from "react-toastify";
const useFetchData = (language) => {
  const [loading, setLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const toastId = toast.loading("Veriler yükleniyor...", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      try {
        const { data: response } = await axios.post(
          "https://reqres.in/api/workintech",
          data[language]
        );
        setFetchedData(response);
        toast.update(toastId, {
          render: "Veri başarıyla yüklendi!",
          type: "success",
          isLoading: false,
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        console.error(error);
        toast.update(toastId, {
          render: "Veri yüklenirken bir hata oluştu!",
          type: "error",
          isLoading: false,
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setLoading(false);
    };

    if (language) {
      fetchData();
    }
  }, [language]);

  return {
    fetchedData,
    loading,
  };
};

export default useFetchData;
